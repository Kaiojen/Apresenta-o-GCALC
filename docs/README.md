# Site Interativo GCALC/SAU

## Descrição

Site interativo institucional para apresentação ao General Comandante da 1ª RM, desenvolvido para a Base Administrativa do Complexo de Saúde/RJ. O site apresenta de forma convincente a necessidade de reforço de efetivo e aprovação de R$ 2.1M em recursos humanos.

## Características Técnicas

- **Framework**: React 19 com Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Animações**: Framer Motion
- **Gráficos**: Recharts
- **Ícones**: Lucide React
- **Performance**: < 3s de carregamento
- **Design**: Responsivo e institucional militar

## Estrutura do Site

### Páginas Principais

1. **Dashboard** - Visão executiva com KPIs e métricas principais
2. **Desafio** - Visualização do iceberg dos processos e ações realizadas
3. **Evolução** - Gráficos históricos e simulador de cenários interativo
4. **Solução** - Ciclo virtuoso e cronogramas otimizados
5. **Proposta** - Distribuição de processos e proposta final
6. **Recursos** - Downloads, contatos e amparo legal

### Componentes Interativos

- **Simulador de Cenários**: Ajuste dinâmico de efetivo com cálculo de ROI
- **Iceberg Interativo**: Visualização da complexidade dos processos
- **Gráficos Animados**: Evolução histórica e projeções futuras
- **Cronogramas Interativos**: ND 30/39 e ND 52 com detalhes por mês
- **Dashboard Executivo**: KPIs em tempo real com alertas visuais

## Dados Principais

- **Efetivo Atual**: 89 pessoas
- **Processos 2025**: 104 (déficit de 15)
- **Investimento Necessário**: R$ 2.1M/ano (+15 pessoas)
- **Economia Esperada**: R$ 14M/ano
- **ROI**: 18 meses
- **Volume Orçamentário**: R$ 69.7M (2024)

## Performance

- **Bundle Size**: ~1.1MB (gzipped: ~295KB)
- **CSS Size**: ~142KB (gzipped: ~21KB)
- **JS Main**: ~247KB (gzipped: ~76KB)
- **Charts Library**: ~449KB (gzipped: ~119KB)
- **Load Time**: < 3 segundos
- **Lighthouse Score**: Otimizado para performance
- **Total Components**: 78 arquivos JSX

## Instalação e Execução

### Desenvolvimento

```bash
npm install
npm run dev
```

### Build de Produção

```bash
npm run build
npm run preview
```

### Deploy

O site está pronto para deploy em qualquer plataforma que suporte sites estáticos:

#### Scripts de Deploy Disponíveis

```bash
npm run deploy          # Deploy automatizado (escolha a plataforma)
npm run deploy:vercel   # Deploy direto no Vercel
npm run deploy:netlify  # Deploy direto no Netlify
```

#### Plataformas Testadas

- ✅ **Vercel** (Recomendado)
- ✅ **Netlify**
- ✅ **GitHub Pages**
- ✅ **Cloudflare Pages**

**Configurações incluídas:**

- `vercel.json` - Configuração otimizada para Vercel
- `netlify.toml` - Configuração para Netlify
- `.github/workflows/` - GitHub Actions para deploy automático

## Estrutura de Arquivos

```
src/
├── components/
│   ├── Dashboard/          # Componentes do dashboard executivo
│   ├── Evolution/          # Gráficos, charts e simulador de cenários
│   ├── Iceberg/           # Visualização interativa do iceberg
│   ├── Layout/            # Header, navegação e splash screen
│   ├── Presentation/      # Controles de apresentação e modo spotlight
│   ├── Proposal/          # Proposta final e distribuição
│   ├── Solution/          # Ciclo virtuoso e cronogramas
│   ├── Spotlight/         # Sistema de destaque e focos
│   └── ui/                # Componentes base (shadcn/ui)
├── contexts/              # Contextos React (Presentation, Spotlight)
├── pages/                 # Páginas principais da aplicação
├── hooks/                 # Custom hooks
├── lib/                   # Constantes, dados e utilitários
└── assets/               # Imagens e recursos estáticos
```

## Dados e Constantes

Todos os dados foram extraídos fielmente do PowerPoint original e estão centralizados em `src/lib/constants.js`:

- Dados históricos de efetivo (2020-2025)
- Dados de processos e orçamento
- Distribuição por OMs
- Cronogramas ND 30/39 e ND 52
- Proposta de reforço e benefícios

## Funcionalidades Especiais

### Simulador de Cenários

- Ajuste interativo do número de pessoas
- Cálculo automático de capacidade, déficit e custos
- Comparação visual entre cenários
- ROI calculado em tempo real

### Navegação Intuitiva

- Header fixo com navegação responsiva
- Indicação visual da página ativa
- Menu mobile para dispositivos menores
- Transições suaves entre páginas

### Design Institucional

- Cores oficiais do Exército Brasileiro
- Tipografia militar profissional
- Elementos visuais institucionais
- Responsividade para desktop e mobile

## Pontos Críticos Atendidos

✅ Tom INSTITUCIONAL e MILITAR sempre  
✅ Dados IDÊNTICOS ao PowerPoint  
✅ Performance < 3s de carregamento  
✅ Funcionalidade PERFEITA  
✅ Foco em CONVENCER sobre necessidade de pessoal  
✅ R$ 2.1M em recursos humanos destacados

## Contato

Para dúvidas técnicas ou atualizações, consulte a documentação do código ou entre em contato com a equipe de desenvolvimento.

---

**"Prever para Prover!"**  
Base Administrativa do Complexo de Saúde/RJ  
Exército Brasileiro
