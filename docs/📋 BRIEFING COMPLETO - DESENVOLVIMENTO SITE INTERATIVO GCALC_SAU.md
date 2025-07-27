# **📋 BRIEFING COMPLETO \- DESENVOLVIMENTO SITE INTERATIVO GCALC/SAU**

## **🎯 CONTEXTO E OBJETIVO**

**Manus**, você será responsável por desenvolver um **site interativo institucional** para apresentação ao Comando da 1ª Região Militar. Este site transformará uma apresentação PowerPoint em uma experiência digital impactante que deve convencer sobre a necessidade de reforço de efetivo.

### **Documento Base**

Você receberá:

1. **Apresentação PowerPoint** (18 slides) \- SEGUIR ESTRITAMENTE  
2. **Imagens do Ciclo Virtuoso e Cronogramas**  
3. **Este briefing detalhado**

### **Objetivo Principal**

Criar uma ferramenta de apresentação que:

* **Impressione** visualmente em nível institucional militar  
* **Convença** através de dados e interatividade  
* **Facilite** a tomada de decisão  
* **Funcione** perfeitamente em 5 minutos de apresentação

---

## **🏗️ ARQUITETURA OBRIGATÓRIA**

### **Estrutura de Páginas**

HOME (Dashboard Executivo)  
├── DESAFIO (Iceberg \+ INs)  
├── EVOLUÇÃO (Pessoal × Processos)  
├── SOLUÇÃO (Ciclo \+ Cronogramas)  
├── PROPOSTA (Divisão \+ ROI)  
└── RECURSOS (Downloads)

### **Navegação**

* **Menu fixo** no topo com as 5 seções  
* **Botões "Próximo"** ao final de cada seção  
* **Indicador de progresso** visual  
* **Modo apresentação** com controles especiais

---

## **📊 PÁGINA 1: DASHBOARD EXECUTIVO (HOME)**

### **Elementos Obrigatórios:**

1. **Header Institucional**

\- Logo do Exército Brasileiro (esquerda)  
\- Título: "BASE ADMINISTRATIVA DO COMPLEXO DE SAÚDE/RJ"  
\- Data: "15 JUL 25" (direita)  
\- Brasão da unidade (direita)

2. **4 Cards de KPIs Principais**

Card 1: EFETIVO ATUAL  
\- Número grande: 89  
\- Subtítulo: "Pessoas"  
\- Barra de progresso mostrando saturação

Card 2: PROCESSOS 2024  
\- Número grande: 89  
\- Subtítulo: "Realizados"  
\- Indicador de crescimento (+6.7%)

Card 3: META 2025  
\- Número grande: 104  
\- Subtítulo: "Processos necessários"  
\- Alerta visual de déficit

Card 4: CAPACIDADE  
\- Número grande: 85%  
\- Subtítulo: "Saturação operacional"  
\- Ícone de warning ⚠️

3. **Bloco de Execução Orçamentária**

\- Título: "EXECUÇÃO 2024"  
\- Valor: R$ 69.777.615,10  
\- Gráfico de barras horizontais:  
  \- Consumo ND 30: R$ 44.573.726,37 (64%)  
  \- Serviço ND 37/39: R$ 16.083.334,00 (23%)  
  \- Permanente ND 52: R$ 9.120.554,74 (13%)

4. **Alerta Principal**

Box vermelho suave com:  
"⚠️ ATENÇÃO: Sem reforço de efetivo, 40% da demanda   
de 2025 ficará descoberta, impactando diretamente   
o atendimento às OMs da 1ª RM"

5. **CTA Principal**

Botão grande verde:  
"▶ INICIAR APRESENTAÇÃO INTERATIVA"

### **Especificações Técnicas:**

* **Animações**: Números em CountUp ao carregar  
* **Hover**: Cards expandem sutilmente  
* **Responsivo**: Adaptar para tablet (1024px)  
* **Cores**: Verde militar (\#4B5320) \+ Azul institucional (\#002776)

---

## **🏔️ PÁGINA 2: NOSSO DESAFIO**

### **Elementos Obrigatórios:**

1. **Visualização Iceberg Interativa**

PARTE VISÍVEL (20%):  
\- Label: "IN 52 \- Material Permanente"  
\- Cor: Azul claro (\#87CEEB)  
\- Texto: "O que todos veem"

PARTE SUBMERSA (80%):  
\- Label: "IN 30, 37, 39"  
\- Cor: Azul escuro (\#4682B4)  
\- Texto: "Material de Consumo e Serviços"  
\- Subtexto: "A real demanda de trabalho"

2. **Interatividade do Iceberg**  
* **Hover**: Mostra percentuais

**Click**: Abre modal com detalhamento:  
 IN 52: \- 6 processos/ano- Ciclo: Out-Mar- Complexidade: BaixaIN 30/37/39:- 83 processos/ano- Ciclo: Abr-Set- Complexidade: Alta

*   
3. **Cards de Ações Realizadas**

Card 1: ✓ Mapeamento de processos e gestão de riscos  
Card 2: ✓ Criação da Seção de Planejamento  
Card 3: ✓ Catálogo padronizado (6.992 itens)

### **Animações:**

* Iceberg "emerge" da água ao entrar na página  
* Ondas sutis animadas em CSS  
* Revelação progressiva dos cards

---

## **📈 PÁGINA 3: EVOLUÇÃO & SATURAÇÃO**

### **Elementos Obrigatórios:**

1. **Gráfico Combinado Interativo**

Dados:  
\- Linha 1 (Verde): Efetivo \[35, 45, 57, 81, 83, 89\]  
\- Linha 2 (Vermelho): Processos \[0, 45, 79, 83, 89, 104\]  
\- Anos: \[2020, 2021, 2022, 2023, 2024, 2025\]  
\- Área destacada: "ZONA DE SATURAÇÃO" (2024-2025)

2. **Simulador de Cenários**

Slider interativo:  
\- "Adicionar pessoas: \[0 \-------|--- 15\]"  
\- Atualiza em tempo real:  
  \- Capacidade: 85% → 100%  
  \- Processos possíveis: 89 → 104  
  \- Déficit: 15 → 0

3. **Projeções 2025-2026**

Sem reforço:  
\- 89 pessoas  
\- 89 processos (máx)  
\- 15 não atendidos  
\- Impacto: R$ 12M em compras emergenciais

Com reforço (+15):  
\- 104 pessoas  
\- 104 processos  
\- 0 déficit  
\- Economia: R$ 14M/ano

### **Especificações:**

* Use Chart.js ou Recharts  
* Animação de desenho das linhas  
* Highlight na zona crítica  
* Tooltips informativos

---

## **🔄 PÁGINA 4: SOLUÇÃO ESTRATÉGICA**

### **Elementos Obrigatórios:**

1. **Ciclo Virtuoso Interativo**

Implementar o ciclo circular com 8 etapas:  
\- PCA (Até 15 MAI)  
\- PDR (Até 31 AGO)  
\- PRO (Até 15 SET)  
\- Licitação Interna (Até 15 DEZ)  
\- Licitação Externa (Até 28 FEV)  
\- Empenho (Conforme metas)  
\- Remanejamento (Até 30 AGO)  
\- Crédito Adicional (Até 30 NOV)

Interatividade:  
\- Click em cada etapa mostra detalhes  
\- Animação de rotação contínua (sutil)  
\- Destaque da etapa atual

2. **Cronogramas Visuais**

ND 30/39 (Material Consumo):  
ABR → MAI → JUN → JUL → AGO → SET  
\[🐰\] \[👥\] \[🌿\] \[🌡️\] \[🔥\] \[👤\]

ND 52 (Material Permanente):  
OUT → NOV → DEZ → JAN → FEV → MAR  
\[👶\] \[👥\] \[🎄\] \[✨\] \[📧\] \[👩\]

Cada ícone é clicável e mostra atividades do mês

3. **Divisão de Responsabilidades**

Gráfico de Pizza Interativo:  
\- Base ADM: 85 processos (59%)  
\- HCE: 25 processos (17%)  
\- HGERJ: 12 processos (8%)  
\- Outros: 33 processos (16%)

Hover mostra detalhes de cada OM

### **Especificações:**

* Usar D3.js para o ciclo circular  
* Timeline horizontal para cronogramas  
* Gráfico de pizza com drill-down

---

## **💰 PÁGINA 5: PROPOSTA FINAL**

### **Elementos Obrigatórios:**

1. **Box Principal da Proposta**

INVESTIMENTO NECESSÁRIO:  
\+15 pessoas especializadas  
R$ 2.100.000,00/ano

RETORNO ESPERADO:  
✓ 100% dos processos atendidos  
✓ Economia de 20% (R$ 14M/ano)  
✓ Redução de 30% no tempo de ciclo  
✓ ROI em 18 meses

2. **Comparativo Visual**

SEM REFORÇO          |  COM REFORÇO  
89 pessoas           |  104 pessoas  
89 processos         |  104 processos    
15 descobertos       |  0 descobertos  
R$ 12M emergencial   |  R$ 0 emergencial  
Risco alto          |  Risco controlado

3. **Botões de Ação**

\[📊 VER ANÁLISE DETALHADA\]  
\[📥 BAIXAR PROPOSTA COMPLETA\]  
\[✉️ ENVIAR PARA APROVAÇÃO\]

4. **Slogan Final**

"PREVER PARA PROVER\!"  
Base Administrativa do Complexo de Saúde/RJ

---

## **🛠️ ESPECIFICAÇÕES TÉCNICAS**

### **Stack Obrigatória:**

Frontend:  
\- Framework: React com Next.js ou Vue.js  
\- Estilização: Tailwind CSS \+ Styled Components  
\- Gráficos: Chart.js \+ D3.js  
\- Animações: Framer Motion ou GSAP  
\- Ícones: Lucide React ou Heroicons

Build:  
\- Vite ou Next.js  
\- Deploy: Vercel ou Netlify  
\- Analytics: Google Analytics

Otimizações:  
\- Lazy loading de componentes  
\- Imagens em WebP  
\- Fontes: Inter \+ system fonts  
\- Performance: Core Web Vitals \> 90

### **Paleta de Cores:**

:root {  
  \--verde-militar: \#4B5320;  
  \--azul-institucional: \#002776;  
  \--dourado-brasao: \#FFD700;  
  \--verde-sucesso: \#10B981;  
  \--vermelho-alerta: \#EF4444;  
  \--cinza-texto: \#374151;  
  \--branco: \#FFFFFF;  
  \--fundo-claro: \#F9FAFB;  
}

### **Breakpoints:**

/\* Mobile: 640px \*/  
/\* Tablet: 768px \*/  
/\* Desktop: 1024px \*/  
/\* Wide: 1280px \*/

---

## **🎨 DIRETRIZES DE DESIGN**

### **Princípios:**

1. **Institucional**: Sóbrio mas moderno  
2. **Hierárquico**: Informação clara e organizada  
3. **Acessível**: Fontes legíveis, contrastes adequados  
4. **Profissional**: Sem exageros, foco no conteúdo

### **Componentes Base:**

// Botão Padrão  
\<Button   
  variant="primary|secondary|danger"  
  size="sm|md|lg"  
  icon={Icon}  
\>  
  Texto  
\</Button\>

// Card de Informação  
\<InfoCard  
  title="Título"  
  value="Valor"  
  subtitle="Descrição"  
  trend="+5%"  
  status="success|warning|danger"  
/\>

// Gráfico Container  
\<ChartContainer  
  title="Título do Gráfico"  
  description="Descrição"  
  controls={\<Filtros /\>}  
\>  
  \<Chart /\>  
\</ChartContainer\>

---

## **⚡ FUNCIONALIDADES ESPECIAIS**

### **1\. Modo Apresentação**

// Ativado por tecla 'P' ou botão  
\- Remove menus e elementos desnecessários  
\- Navegação por setas do teclado  
\- Timer no canto  
\- Indicador de slides  
\- Tela cheia automática

### **2\. Gerador de PDF**

// Botão "Gerar Relatório"  
\- Captura todos os gráficos  
\- Formata para impressão  
\- Inclui apenas dados essenciais  
\- Nome: relatorio-gcalc-\[data\].pdf

### **3\. Tour Guiado**

// Primeira visita  
\- Destaca elementos principais  
\- Explica interatividades  
\- Pode ser pulado  
\- Reativado no menu ajuda

---

## **📋 CHECKLIST DE ENTREGA**

### **Fase 1 \- Estrutura Base**

* \[ \] Setup do projeto  
* \[ \] Estrutura de pastas organizada  
* \[ \] Componentes base criados  
* \[ \] Roteamento funcionando  
* \[ \] Layout responsivo

### **Fase 2 \- Páginas Principais**

* \[ \] Dashboard com todos os KPIs  
* \[ \] Página Desafio com iceberg  
* \[ \] Página Evolução com gráficos  
* \[ \] Página Solução com ciclo  
* \[ \] Página Proposta final

### **Fase 3 \- Interatividade**

* \[ \] Animações implementadas  
* \[ \] Hover states em todos elementos  
* \[ \] Modais de detalhamento  
* \[ \] Simulador funcionando  
* \[ \] Gráficos interativos

### **Fase 4 \- Features Especiais**

* \[ \] Modo apresentação  
* \[ \] Gerador de PDF  
* \[ \] Tour guiado  
* \[ \] Analytics integrado  
* \[ \] Loading states

### **Fase 5 \- Polimento**

* \[ \] Testes em diferentes dispositivos  
* \[ \] Otimização de performance  
* \[ \] SEO básico  
* \[ \] Documentação  
* \[ \] Deploy final

---

## **🚨 PONTOS CRÍTICOS DE ATENÇÃO**

1. **SEGUIR ESTRITAMENTE** o conteúdo do PowerPoint  
2. **Manter tom INSTITUCIONAL** \- nada informal  
3. **Dados devem ser EXATOS** \- conferir números  
4. **Performance é CRUCIAL** \- load \< 3 segundos  
5. **Mobile/Tablet PERFEITO** \- teste exaustivo

---

## **📞 SUPORTE E DÚVIDAS**

* **Conteúdo**: Consultar PowerPoint original  
* **Dúvidas técnicas**: Documentar e perguntar  
* **Decisões de design**: Sempre optar pelo mais sóbrio  
* **Prioridades**: 1\) Funcionar 2\) Ser rápido 3\) Impressionar

---

## **🎯 ENTREGA FINAL**

O site deve:

1. Carregar em menos de 3 segundos  
2. Funcionar perfeitamente em tablets  
3. Ter todos os dados do PowerPoint  
4. Impressionar em 5 minutos de uso  
5. Facilitar a aprovação da proposta

**Prazo sugerido**: 4-5 semanas **Entregas semanais**: Toda sexta-feira

---

## **💡 REFERÊNCIAS VISUAIS**

Sites institucionais para inspiração:

* gov.br (estrutura limpa)  
* Exército Brasileiro (cores e tons)  
* Dashboard do Tableau (interatividade)  
* Apple Keynote (apresentações)

**IMPORTANTE**: O site é uma ferramenta de CONVENCIMENTO. Cada elemento deve contribuir para o objetivo final: conseguir a aprovação do reforço de efetivo.

Boa sorte, Manus\! 🚀

