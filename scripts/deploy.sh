#!/bin/bash

# Script de Deploy Automatizado - GCALC SAU Site
# Autor: Gabriel
# Data: $(date +%Y-%m-%d)

set -e  # Para em caso de erro

echo "🚀 Iniciando processo de deploy..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para logs coloridos
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    log_error "Node.js não encontrado! Instale o Node.js primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    log_error "npm não encontrado! Instale o npm primeiro."
    exit 1
fi

log_info "Verificando versões..."
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"

# Instalar dependências
log_info "Instalando dependências..."
npm install

# Executar lint (opcional)
log_info "Executando lint..."
npm run lint || log_warning "Lint falhou, mas continuando..."

# Build da aplicação
log_info "Fazendo build da aplicação..."
npm run build

if [ ! -d "dist" ]; then
    log_error "Build falhou! Diretório 'dist' não foi criado."
    exit 1
fi

log_success "Build concluído com sucesso!"

# Verificar tamanho do build
BUILD_SIZE=$(du -sh dist | cut -f1)
log_info "Tamanho do build: $BUILD_SIZE"

# Opções de deploy
echo ""
log_info "Escolha a plataforma de deploy:"
echo "1) Vercel (Recomendado)"
echo "2) Netlify"
echo "3) GitHub Pages"
echo "4) Preview local"
echo ""

read -p "Digite sua escolha (1-4): " choice

case $choice in
    1)
        log_info "Preparando deploy para Vercel..."
        if ! command -v vercel &> /dev/null; then
            log_warning "Vercel CLI não encontrado. Instalando..."
            npm install -g vercel
        fi
        
        log_info "Fazendo deploy no Vercel..."
        vercel --prod
        log_success "Deploy no Vercel concluído!"
        ;;
    2)
        log_info "Preparando deploy para Netlify..."
        if ! command -v netlify &> /dev/null; then
            log_warning "Netlify CLI não encontrado. Instalando..."
            npm install -g netlify-cli
        fi
        
        log_info "Fazendo deploy no Netlify..."
        netlify deploy --prod --dir=dist
        log_success "Deploy no Netlify concluído!"
        ;;
    3)
        log_info "Preparando para GitHub Pages..."
        log_info "Para GitHub Pages, você precisa:"
        echo "1. Fazer push do código para o GitHub"
        echo "2. Ativar GitHub Pages nas configurações do repositório"
        echo "3. Configurar para usar GitHub Actions"
        
        # Criar arquivo de GitHub Actions
        mkdir -p .github/workflows
        cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
EOF
        log_success "Arquivo de GitHub Actions criado!"
        ;;
    4)
        log_info "Iniciando preview local..."
        npm run preview
        ;;
    *)
        log_error "Opção inválida!"
        exit 1
        ;;
esac

log_success "🎉 Processo concluído!" 