# Requisitos Técnicos e Funcionais - Site Interativo GCALC/SAU

## 1. Objetivo Geral
Desenvolver um site interativo institucional para apresentação ao General Comandante da 1ª RM, com o objetivo de convencer sobre a necessidade de reforço de efetivo e a aprovação de R$ 2.1M em recursos humanos.

## 2. Pontos Críticos
- **Tom Institucional e Militar**: Design e linguagem devem ser sóbrios, profissionais e alinhados com a identidade militar.
- **Foco em Convencimento**: Cada elemento deve contribuir para justificar a necessidade de mais pessoal.
- **Dados Idênticos ao PowerPoint**: Todos os números, textos e gráficos devem ser replicados fielmente do PowerPoint original.
- **Funcionalidade Perfeita**: O site deve operar sem falhas durante a apresentação de 5 minutos.
- **Performance**: Tempo de carregamento inferior a 3 segundos.
- **Responsividade**: Funcionamento perfeito em tablets (1024px) e mobile (640px).

## 3. Prioridades
1. Funcionalidade perfeita.
2. Performance (< 3s load).
3. Visual institucional impactante.
4. Interatividade que impressione.

## 4. Arquitetura Obrigatória

### 4.1. Estrutura de Páginas
- HOME (Dashboard Executivo)
- DESAFIO (Iceberg + INs)
- EVOLUÇÃO (Pessoal x Processos)
- SOLUÇÃO (Ciclo + Cronogramas)
- PROPOSTA (Divisão + ROI)
- RECURSOS (Downloads)

### 4.2. Navegação
- Menu fixo no topo com as 5 seções principais.
- Botões 



## 5. Dados Extraídos do PowerPoint (18 Slides)

### Slide 1: Capa
- Título: "BASE ADMINISTRATIVA DO COMPLEXO DE SAÚDE DO RIO DE JANEIRO"
- Subtítulo: "APRESENTAÇÃO DO PLANEJAMENTO DE PREGÕES 2025-2026"
- Data: "15 JUL 25"

### Slide 2: Objetivo
- Apresentar a Cpcd da Base e uma proposta de atendimento das demandas de Cl VIII das OMS da 1ª RM.

### Slide 3: Amparo Legal
- Lei 14.133 (NLLC) - Art. 19: centralização dos procedimentos de aquisição
- Portaria 144/SEF, 19 JUL 21 - Art 4º: estabelecimento de GCALC

### Slide 4: Amparo Legal (continuação)
- Dtz Esp Econ Fin Cmt EB: contribuir para implantação e aprimoramento dos GCALC

### Slide 5: Pessoal (título)

### Slide 6: Efetivo
- Dados históricos: 2020 (35), 2021 (45), 2022 (57), 2023 (81), 2024 (83), 2025 (89)

### Slide 7: Gestão e Plj (título)

### Slide 8: Processos
- Dados históricos: 2020 (0), 2021 (45), 2022 (79), 2023 (83), 2024 (89), 2025 (104)

### Slide 9: Execução Orçamentária 2024
- Total: R$ 69.777.615,10
- Consumo ND 30: R$ 44.573.726,37
- Serviço ND 37/39: R$ 16.083.334,00
- Mat Permanente ND 52: R$ 9.120.554,74

### Slide 10: Nosso Desafio (título)

### Slide 11: Ações Realizadas
- Mapeamento de processos e gestão de riscos
- Criação da Seção de Planejamento
- Padronização das aquisições por meio de catálogos

### Slide 12: Ciclo de Aquisições da Base (título)

### Slide 13: Padronização dos Processos (título)

### Slide 14: Catálogo de Materiais - Material Médico-Hospitalar e Medicamentos
- Grupos e subgrupos detalhados com quantidades de itens

### Slide 15: Catálogo de Materiais - Material Odontológico e Outros
- Total: 6.992 itens catalogados

### Slide 16: Proposta 2025-2026
- Distribuição por OMs:
  - B ADM CMPL SAU RJ: 85 (59%)
  - HCE: 25 (17%)
  - HGERJ: 12 (8%)
  - OCEX: 10 (7%)
  - PMN: 5 (4%)
  - HMR: 2 (1%)
  - PMRJ: 2 (1%)
  - PMPV: 2 (1%)
  - IBEX: 1 (1%)
  - LQFEX: 1 (1%)
  - SOMA TOTAL: 145

### Slide 17: Intranet Base - Transparência e Informação

### Slide 18: Conclusão
- "Prever para Prover!"

## 6. Elementos Visuais Identificados

### 6.1. Ciclo Virtuoso (CicloVirtuososEB(1).png)
- Estrutura circular com 8 etapas:
  1. PCA (Até 15 MAI - A-1)
  2. PDR (Até 31 AGO - A-1)
  3. PRO (Até 15 SET - A-1)
  4. Licitação Fase Interna ou pregão SRP (Até 15 DEZ - A-1)
  5. Licitação Fase Externa (Até 28 FEV - A)
  6. Empenho (Conforme metas - A)
  7. Remanejamento (Até 30 AGO - A)
  8. Crédito Adicional (Até 30 NOV - A)

### 6.2. Cronogramas ND 30/39 e ND 52 (image.png)
- ND 30/39 (Material de Consumo/Serviço): Abril → Maio → Junho → Julho → Agosto → Setembro
- ND 52 (Material Permanente): Outubro → Novembro → Dezembro → Janeiro → Fevereiro → Março

## 7. Especificações Técnicas

### 7.1. Stack Obrigatória
- **Frontend**: React com Next.js
- **Estilização**: Tailwind CSS + Styled Components
- **Gráficos**: Chart.js + D3.js
- **Animações**: Framer Motion ou GSAP
- **Ícones**: Lucide React ou Heroicons
- **Build**: Vite ou Next.js
- **Deploy**: Vercel ou Netlify

### 7.2. Paleta de Cores
```css
:root {
  --verde-militar: #4B5320;
  --azul-institucional: #002776;
  --dourado-brasao: #FFD700;
  --verde-sucesso: #10B981;
  --vermelho-alerta: #EF4444;
  --cinza-texto: #374151;
  --branco: #FFFFFF;
  --fundo-claro: #F9FAFB;
}
```

### 7.3. Breakpoints
- Mobile: 640px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1280px

## 8. Funcionalidades Especiais

### 8.1. Modo Apresentação
- Ativado por tecla 'P' ou botão
- Remove menus e elementos desnecessários
- Navegação por setas do teclado
- Timer no canto
- Indicador de slides
- Tela cheia automática

### 8.2. Gerador de PDF
- Botão "Gerar Relatório"
- Captura todos os gráficos
- Formata para impressão
- Nome: relatorio-gcalc-[data].pdf

### 8.3. Tour Guiado
- Primeira visita
- Destaca elementos principais
- Explica interatividades
- Pode ser pulado

## 9. Componentes Interativos Obrigatórios

### 9.1. Dashboard Executivo (HOME)
- 4 Cards de KPIs principais:
  1. Efetivo Atual: 89 pessoas
  2. Processos 2024: 89 realizados
  3. Meta 2025: 104 processos necessários
  4. Capacidade: 85% saturação operacional
- Bloco de Execução Orçamentária com gráfico de barras
- Alerta principal sobre déficit
- CTA principal para iniciar apresentação

### 9.2. Iceberg Interativo (DESAFIO)
- Parte visível (20%): IN 52 - Material Permanente
- Parte submersa (80%): IN 30, 37, 39 - Material de Consumo e Serviços
- Hover mostra percentuais
- Click abre modal com detalhamento

### 9.3. Gráfico Combinado (EVOLUÇÃO)
- Linha 1 (Verde): Efetivo [35, 45, 57, 81, 83, 89]
- Linha 2 (Vermelho): Processos [0, 45, 79, 83, 89, 104]
- Anos: [2020, 2021, 2022, 2023, 2024, 2025]
- Área destacada: "ZONA DE SATURAÇÃO" (2024-2025)

### 9.4. Simulador de Cenários
- Slider interativo para adicionar pessoas (0-15)
- Atualiza em tempo real capacidade e déficit

### 9.5. Ciclo Virtuoso Interativo
- Implementação circular com 8 etapas
- Click em cada etapa mostra detalhes
- Animação de rotação contínua (sutil)

### 9.6. Cronogramas Visuais
- Timeline horizontal para ND 30/39 e ND 52
- Cada ícone clicável mostra atividades do mês

### 9.7. Gráfico de Pizza (Distribuição)
- Base ADM: 85 processos (59%)
- HCE: 25 processos (17%)
- HGERJ: 12 processos (8%)
- Outros: 33 processos (16%)

## 10. Métricas de Sucesso
- Tempo de carregamento < 3 segundos
- Funcionamento perfeito em tablets
- Todos os dados do PowerPoint implementados
- Capacidade de impressionar em 5 minutos
- Facilitar aprovação da proposta de R$ 2.1M

## 11. Entregáveis
- Site responsivo funcional
- Documentação de uso
- Código fonte organizado
- Deploy em produção
- Relatório de testes de performance

