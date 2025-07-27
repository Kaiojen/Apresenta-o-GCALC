# 🚀 Guia Completo de Deploy - GCALC SAU Site

Este guia apresenta as **melhores opções** para fazer deploy do seu site na nuvem, organizadas por facilidade e eficiência.

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

```bash
# 1. Dependências instaladas
npm install

# 2. Build funcionando
npm run build

# 3. Preview local funcionando
npm run preview
```

---

## 🏆 **Opção 1: VERCEL (RECOMENDADA)**

**Ideal para:** Projetos React/Vite profissionais  
**Custo:** Gratuito para projetos pessoais  
**Tempo de setup:** 5 minutos

### ✅ Vantagens

- Deploy automático do GitHub
- CDN global ultra-rápido
- HTTPS automático
- Preview de branches
- Analytics built-in
- Domínio personalizado fácil

### 🛠️ Setup Passo a Passo

#### Método 1: Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione seu repositório
5. ✅ **Deploy automático!**

#### Método 2: CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### ⚙️ Configuração Otimizada

O arquivo `vercel.json` já está configurado com:

- Rewrite para SPA
- Cache otimizado
- Headers de performance

---

## 🌟 **Opção 2: NETLIFY**

**Ideal para:** Projetos com necessidade de forms e functions  
**Custo:** Gratuito para projetos pessoais  
**Tempo de setup:** 5 minutos

### ✅ Vantagens

- Drag & drop deploy
- Forms built-in
- A/B testing
- Edge functions
- Deploy previews

### 🛠️ Setup Passo a Passo

#### Método 1: Drag & Drop

1. Execute `npm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist` para o Netlify

#### Método 2: Git Integration

1. Conecte seu repositório GitHub
2. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. ✅ **Deploy automático!**

#### Método 3: CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod --dir=dist
```

---

## 🐙 **Opção 3: GITHUB PAGES**

**Ideal para:** Projetos open source e portfolios  
**Custo:** Gratuito  
**Tempo de setup:** 10 minutos

### ✅ Vantagens

- Totalmente gratuito
- Integração nativa com GitHub
- Automático com GitHub Actions
- Boa para documentação

### 🛠️ Setup Passo a Passo

1. **Criar GitHub Actions** (já configurado):

   ```bash
   # O arquivo .github/workflows/deploy.yml já foi criado!
   ```

2. **Configurar no GitHub:**

   - Vá em Settings → Pages
   - Source: "GitHub Actions"
   - ✅ **Deploy automático a cada push!**

3. **Primeira execução:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deploy"
   git push origin main
   ```

### 🔧 Configuração de Base Path

Se seu repositório não estiver na raiz, adicione ao `vite.config.js`:

```js
export default defineConfig({
  base: "/nome-do-repositorio/",
  // ... resto da config
});
```

---

## ☁️ **Opção 4: CLOUDFLARE PAGES**

**Ideal para:** Performance máxima e controle avançado  
**Custo:** Gratuito (banda ilimitada)  
**Tempo de setup:** 8 minutos

### ✅ Vantagens

- CDN global ultra-rápido
- Banda ilimitada
- Workers para edge computing
- Analytics avançado

### 🛠️ Setup Passo a Passo

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecte seu repositório GitHub
3. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18`
4. ✅ **Deploy automático!**

---

## 🔥 **Opção 5: FIREBASE HOSTING**

**Ideal para:** Integração com outros serviços Google  
**Custo:** Gratuito (10GB armazenamento)  
**Tempo de setup:** 15 minutos

### 🛠️ Setup Passo a Passo

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar projeto
firebase init hosting

# Deploy
firebase deploy
```

---

## 📊 **Comparação das Opções**

| Plataforma       | Setup      | Performance | Features   | Custo    |
| ---------------- | ---------- | ----------- | ---------- | -------- |
| **Vercel**       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ | Gratuito |
| **Netlify**      | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐ | Gratuito |
| **GitHub Pages** | ⭐⭐⭐     | ⭐⭐⭐      | ⭐⭐       | Gratuito |
| **Cloudflare**   | ⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐   | Gratuito |
| **Firebase**     | ⭐⭐⭐     | ⭐⭐⭐⭐    | ⭐⭐⭐⭐   | Gratuito |

---

## 🚀 **Deploy Automatizado**

Use o script fornecido para deploy automatizado:

```bash
# Dar permissão de execução
chmod +x scripts/deploy.sh

# Executar
./scripts/deploy.sh
```

O script irá:

1. ✅ Verificar dependências
2. ✅ Instalar pacotes
3. ✅ Executar build
4. ✅ Escolher plataforma
5. ✅ Fazer deploy

---

## 💡 **Dicas de Performance**

### 1. Otimizações já implementadas:

- ✅ Code splitting automático
- ✅ Minificação agressiva
- ✅ Tree shaking
- ✅ Cache headers otimizados

### 2. Monitoramento:

```bash
# Analisar bundle
npm run build -- --analyze

# Verificar performance
lighthouse https://seu-site.vercel.app
```

### 3. Domínio personalizado:

- **Vercel:** Project Settings → Domains
- **Netlify:** Site Settings → Domain management
- **Cloudflare:** Custom domains → Add

---

## 🔧 **Troubleshooting**

### Erro de SPA routing:

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Build failing:

```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install

# Verificar Node.js version
node --version  # Deve ser 18+
```

### Assets não carregando:

```js
// vite.config.js
export default defineConfig({
  base: "./", // Para paths relativos
});
```

---

## 🎯 **Recomendação Final**

**Para seu projeto GCALC SAU**, recomendo strongly o **Vercel**:

1. ✅ **Setup em 2 minutos**
2. ✅ **Performance máxima**
3. ✅ **Deploy automático**
4. ✅ **HTTPS + CDN gratuito**
5. ✅ **Analytics built-in**

### Próximos passos:

1. Execute o script: `./scripts/deploy.sh`
2. Escolha opção `1` (Vercel)
3. 🎉 **Seu site estará online!**

---

**💬 Dúvidas?**

- Vercel: [docs.vercel.com](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/en/pages)
