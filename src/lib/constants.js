// Dados extraídos do PowerPoint - GCALC/SAU
export const SITE_CONFIG = {
  title: "BASE ADMINISTRATIVA DO COMPLEXO DE SAÚDE/RJ",
  subtitle: "APRESENTAÇÃO DO PLANEJAMENTO DE PREGÕES 2025-2026",
  date: "15 JUL 25",
  slogan: "Prever para Prover!",
};

// Navegação principal
export const NAVIGATION = [
  { id: "introducao", label: "Introdução", path: "/" },
  { id: "evolucao", label: "Evolução", path: "/evolucao" },
  { id: "dashboard", label: "Painel", path: "/dashboard" },
  { id: "desafio", label: "Desafios", path: "/desafio" },
  { id: "solucao", label: "Solução", path: "/solucao" },
  { id: "proposta", label: "Resumo", path: "/proposta" },
];

// Cores institucionais militares
export const COLORS = {
  militaryGreen: "#4B5320",
  institutionalBlue: "#002776",
  brasaoGold: "#FFD700",
  successGreen: "#10B981",
  alertRed: "#EF4444",
  textGray: "#374151",
  white: "#FFFFFF",
  lightBackground: "#F9FAFB",
};

// Dados históricos de efetivo
export const EFETIVO_DATA = [
  { year: 2020, pessoas: 35 },
  { year: 2021, pessoas: 45 },
  { year: 2022, pessoas: 57 },
  { year: 2023, pessoas: 81 },
  { year: 2024, pessoas: 83 },
  { year: 2025, pessoas: 89 },
];

// Dados históricos de processos
export const PROCESSOS_DATA = [
  { year: 2020, processos: 0 },
  { year: 2021, processos: 45 },
  { year: 2022, processos: 79 },
  { year: 2023, processos: 83 },
  { year: 2024, processos: 89 },
  { year: 2025, processos: 43 }, // Dado real, 104 é projeção
];

// Execução orçamentária 2024
export const ORCAMENTO_2024 = {
  total: 69777615.1,
  consumoND30: 44573726.37,
  servicoND37_39: 16083334.0,
  materialPermanenteND52: 9120554.74,
};

// KPIs principais para o dashboard
export const KPIS = {
  efetivoAtual: 89,
  processos2024: 89,
  meta2025: 104,
  saturacao: 85,
};

// Distribuição de processos por OM (Slide 16) - Atualizada para 290 processos
export const DISTRIBUICAO_OMS = [
  { nome: "B ADM CMPL SAU RJ", processos: 200, percentual: 69 },
  { nome: "HCE", processos: 35, percentual: 12 },
  { nome: "HGERJ", processos: 20, percentual: 7 },
  { nome: "OCEX", processos: 15, percentual: 5 },
  { nome: "PMN", processos: 8, percentual: 3 },
  { nome: "HMR", processos: 5, percentual: 2 },
  { nome: "PMRJ", processos: 4, percentual: 1 },
  { nome: "PMPV", processos: 3, percentual: 1 },
];

// Ciclo Virtuoso - 8 etapas
export const CICLO_VIRTUOSO = [
  {
    id: "pca",
    titulo: "PCA",
    prazo: "Até 15 MAI",
    periodo: "(A-1)",
    responsavel: "Seção de Planejamento",
    classificacao: "A-1",
    status: "Em execução",
    tipo: "planejamento",
    descricao:
      "Plano de Contratações Anuais - Consolidação das demandas e planejamento anual de todas as aquisições.",
    atividades: [
      "Levantamento das demandas das OMs",
      "Consolidação das necessidades",
      "Definição do cronograma anual",
      "Aprovação pelo comando",
    ],
    documentos: [
      "Formulário PCA",
      "Planilha de demandas",
      "Cronograma anual",
      "Ata de aprovação",
    ],
  },
  {
    id: "pdr",
    titulo: "PDR",
    prazo: "Até 31 AGO",
    periodo: "(A-1)",
    responsavel: "Seção de Planejamento",
    classificacao: "A-1",
    status: "Em execução",
    tipo: "planejamento",
    descricao:
      "Plano de Demandas e Recursos - Definição de prioridades e recursos necessários para execução.",
    atividades: [
      "Priorização das demandas",
      "Análise de recursos disponíveis",
      "Distribuição por OMs",
      "Definição de responsabilidades",
    ],
    documentos: [
      "Matriz de priorização",
      "Planilha orçamentária",
      "Distribuição por OM",
      "Termo de responsabilidade",
    ],
  },
  {
    id: "pro",
    titulo: "PRO",
    prazo: "Até 15 SET",
    periodo: "(A-1)",
    responsavel: "Seção de Planejamento",
    classificacao: "A-1",
    status: "Em execução",
    tipo: "planejamento",
    descricao:
      "Plano de Obtenção - Estratégia detalhada de aquisição e cronograma de execução.",
    atividades: [
      "Elaboração da estratégia",
      "Definição de modalidades",
      "Cronograma detalhado",
      "Análise de riscos",
    ],
    documentos: [
      "Plano de obtenção",
      "Matriz de modalidades",
      "Cronograma executivo",
      "Análise de riscos",
    ],
  },
  {
    id: "licitacao_interna",
    titulo: "Licitação Interna",
    prazo: "Até 15 DEZ",
    periodo: "(A-1)",
    responsavel: "Pregoeiros",
    classificacao: "A-1",
    status: "Planejado",
    tipo: "processo",
    descricao:
      "Processo licitatório fase interna ou pregão SRP - Preparação e execução da fase interna.",
    atividades: [
      "Elaboração de editais",
      "Pesquisa de preços",
      "Aprovação jurídica",
      "Publicação",
    ],
    documentos: [
      "Edital completo",
      "Pesquisa de preços",
      "Parecer jurídico",
      "Atos de publicação",
    ],
  },
  {
    id: "licitacao_externa",
    titulo: "Licitação Externa",
    prazo: "Até 28 FEV",
    periodo: "(A)",
    responsavel: "Pregoeiros",
    classificacao: "A",
    status: "Planejado",
    tipo: "execucao",
    descricao:
      "Processo licitatório fase externa - Execução da fase externa e adjudicação.",
    atividades: [
      "Sessão pública",
      "Análise de propostas",
      "Habilitação",
      "Adjudicação",
    ],
    documentos: [
      "Ata da sessão",
      "Mapas comparativos",
      "Documentos de habilitação",
      "Termo de adjudicação",
    ],
  },
  {
    id: "empenho",
    titulo: "Empenho",
    prazo: "Conforme metas",
    periodo: "(A)",
    responsavel: "Seção Financeira",
    classificacao: "A",
    status: "Planejado",
    tipo: "execucao",
    descricao:
      "Empenho dos recursos - Reserva orçamentária e financeira para execução dos contratos.",
    atividades: [
      "Verificação orçamentária",
      "Emissão de empenhos",
      "Controle financeiro",
      "Acompanhamento de metas",
    ],
    documentos: [
      "Nota de empenho",
      "Demonstrativo orçamentário",
      "Contratos firmados",
      "Cronograma financeiro",
    ],
  },
  {
    id: "remanejamento",
    titulo: "Remanejamento",
    prazo: "Até 30 AGO",
    periodo: "(A)",
    responsavel: "Seção Financeira",
    classificacao: "A",
    status: "Condicional",
    tipo: "controle",
    descricao:
      "Remanejamento de recursos - Ajustes e realocações necessárias durante a execução.",
    atividades: [
      "Análise de execução",
      "Identificação de necessidades",
      "Proposta de remanejamento",
      "Aprovação superior",
    ],
    documentos: [
      "Relatório de execução",
      "Justificativa técnica",
      "Proposta de remanejamento",
      "Autorização superior",
    ],
  },
  {
    id: "credito_adicional",
    titulo: "Crédito Adicional",
    prazo: "Até 30 NOV",
    periodo: "(A)",
    responsavel: "Seção Financeira",
    classificacao: "A",
    status: "Condicional",
    tipo: "controle",
    descricao:
      "Solicitação de crédito adicional - Suplementação orçamentária quando necessária.",
    atividades: [
      "Análise de necessidade",
      "Elaboração de proposta",
      "Tramitação no OM Superior",
      "Aprovação final",
    ],
    documentos: [
      "Demonstrativo de necessidade",
      "Proposta de crédito",
      "Pareceres técnicos",
      "Autorização legislativa",
    ],
  },
];

// Cronogramas ND 30/39 e ND 52
export const CRONOGRAMA_ND30_39 = [
  {
    mes: "Abril",
    icone: "🐰",
    atividades: ["Planejamento inicial", "Levantamento de demandas"],
  },
  {
    mes: "Maio",
    icone: "👥",
    atividades: ["Consolidação de processos", "Análise técnica"],
  },
  {
    mes: "Junho",
    icone: "🌿",
    atividades: ["Preparação de editais", "Pesquisa de preços"],
  },
  {
    mes: "Julho",
    icone: "🌡️",
    atividades: ["Publicação de editais", "Recebimento de propostas"],
  },
  {
    mes: "Agosto",
    icone: "🔥",
    atividades: ["Análise de propostas", "Adjudicação"],
  },
  {
    mes: "Setembro",
    icone: "👤",
    atividades: ["Homologação", "Assinatura de contratos"],
  },
];

export const CRONOGRAMA_ND52 = [
  {
    mes: "Outubro",
    icone: "👶",
    atividades: [
      "Planejamento de material permanente",
      "Especificações técnicas",
    ],
  },
  {
    mes: "Novembro",
    icone: "👥",
    atividades: ["Elaboração de editais", "Aprovação técnica"],
  },
  {
    mes: "Dezembro",
    icone: "🎄",
    atividades: ["Publicação", "Recebimento de propostas"],
  },
  {
    mes: "Janeiro",
    icone: "✨",
    atividades: ["Análise técnica", "Habilitação"],
  },
  { mes: "Fevereiro", icone: "📧", atividades: ["Julgamento", "Adjudicação"] },
  {
    mes: "Março",
    icone: "👩",
    atividades: ["Homologação", "Início de entregas"],
  },
];

// Ações realizadas (Slide 11)
export const ACOES_REALIZADAS = [
  {
    titulo: "Mapeamento de Processos e Gestão de Riscos",
    descricao:
      "Implementação do mapeamento integral dos processos operacionais e elaboração do Plano de Gestão de Riscos, identificando vulnerabilidades críticas e estabelecendo protocolos de mitigação",
    status: "implementado",
  },
  {
    titulo: "Criação da Seção de Planejamento",
    descricao:
      "Estabelecimento da Seção de Planejamento como unidade responsável pela interface com as Organizações Militares e pelo desenvolvimento do Cronograma Geral, incluindo a divisão estratégica de itens por grupos e subgrupos",
    status: "implementado",
  },
  {
    titulo: "Padronização das Aquisições",
    descricao:
      "Implementação da padronização de processos aquisitivos através da criação de catálogos especializados de equipamentos e produtos, otimizando a eficiência operacional",
    status: "implementado",
  },
];

// Total de itens catalogados
export const CATALOGO_TOTAL = 6992;

// Amparo legal
export const AMPARO_LEGAL = [
  {
    lei: "Lei 14.133 (NLLC)",
    artigo: "Art. 19",
    texto:
      "Os órgãos da Administração... deverão: I - instituir instrumentos que permitam a centralização dos procedimentos de aquisição e contratação de bens e serviços",
  },
  {
    lei: "Portaria 144/SEF",
    data: "19 JUL 21",
    artigo: "Art 4º",
    texto:
      "Nas guarnições com mais de uma UG, deverá ser estabelecido, pelo menos, um GCALC",
  },
  {
    fonte: "Dtz Esp Econ Fin Cmt EB",
    item: "13)",
    texto:
      "contribuir para a implantação e o aprimoramento dos GCALC e das B Adm, com a finalidade de aperfeiçoar processos administrativos e racionalizar despesas com meios e pessoal, gerando maior efetividade na gestão",
  },
];

// Proposta de reforço
export const PROPOSTA_REFORCO = {
  pessoasNecessarias: 15,
  investimentoAnual: 2100000,
  economiaEsperada: 14000000,
  roiMeses: 18,
  beneficios: [
    "100% dos processos atendidos",
    "Economia de 20% por centralização",
    "Redução de 30% no tempo de ciclo",
    "ROI em 18 meses",
  ],
};

// Divisão Estratégica GCAULC - Estrutura Institucional Oficial
export const DIVISAO_ESTRATEGICA = {
  totalGrupos: 9,
  totalSubgrupos: 290,
  totalProcessos: 290,
  grupos: [
    {
      id: 1,
      nome: "Material Médico Hospitalar e DMC",
      cor: "#059669", // emerald-600
      subgrupos: [
        { numero: 1, descricao: "Antissépticos", om: "HMR", processos: 1 },
        {
          numero: 2,
          descricao: "Cânulas, Sondas E Máscaras 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 3,
          descricao: "Cânulas, Sondas E Máscaras 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 4,
          descricao: "Catéter, Seringas E Agulhas 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 5,
          descricao: "Catéter, Seringas E Agulhas 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 6,
          descricao: "Clínicas Especializadas 1",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 7,
          descricao: "Clínicas Especializadas 2",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 8,
          descricao: "Clínicas Especializadas 3",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 9,
          descricao: "Clínicas Especializadas 4",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 10,
          descricao: "Enfermagem 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 11,
          descricao: "Enfermagem 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 12,
          descricao: "Enfermagem 3",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 13,
          descricao: "Enfermagem 4",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 14,
          descricao: "Enfermagem 5",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 15,
          descricao: "Enfermagem 6",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 16,
          descricao: "Enfermagem 7",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 17,
          descricao: "Enfermagem 8",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 18,
          descricao: "Enfermagem 9",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 19,
          descricao: "Materiais E Instrumentos Pediátrico",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 20,
          descricao: "Central de Material E Esterelização",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
      ],
    },
    {
      id: 2,
      nome: "Medicamentos",
      cor: "#dc2626", // red-600
      subgrupos: [
        {
          numero: 1,
          descricao: "Alta Incidência",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 2,
          descricao: "Alto Custo",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 3,
          descricao: "Antimicrobianos",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 4,
          descricao: "Contrastes Radiológicos",
          om: "PMRJ",
          processos: 1,
        },
        {
          numero: 5,
          descricao: "Controlados",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 6,
          descricao: "Dieta Parenteral Industrializada",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 7,
          descricao: "Eletrólitos",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 8,
          descricao: "Farmácia Básica I",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 9,
          descricao: "Farmácia Básica II",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 10,
          descricao: "Farmácia Básica III",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 11,
          descricao: "Leucemias E Linfomas",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 12,
          descricao: "Manipulados",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 13,
          descricao: "Média E Baixa Incidência",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 14,
          descricao: "Mieloma",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 15,
          descricao: "Aquisição De Dieta Enteral",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 16,
          descricao: "Nutrição Parenteral Manipulada",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 17,
          descricao: "Medicamentos Oftálmicos Para A Clínica De Oftalmologia",
          om: "PMRJ",
          processos: 1,
        },
        {
          numero: 18,
          descricao: "Antídotos E Drogas",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 19,
          descricao: "Soluções E Pomadas",
          om: "PMPV",
          processos: 1,
        },
        {
          numero: 20,
          descricao: "Medicamentos Para Neoplasias (Oncologia)",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 21,
          descricao: "Clínica De Otorrinolaringologia",
          om: "HGERJ",
          processos: 1,
        },
        { numero: 22, descricao: "Endoscopia", om: "HGERJ", processos: 1 },
        {
          numero: 23,
          descricao: "Insumos Gerais Para Análises Clinicas",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 24,
          descricao: "Medicamentos De Uso Em Clínicas Específicas",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 25,
          descricao: "Insumos E Reagentes Para Bacteriologia",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 26,
          descricao: "Insumos E Reagentes Para Hematologia",
          om: "HCE",
          processos: 1,
        },
        { numero: 27, descricao: "Imunoquímica", om: "HCE", processos: 1 },
      ],
    },
    {
      id: 3,
      nome: "CEREC",
      cor: "#8b5cf6", // violet-500
      subgrupos: [
        {
          numero: 1,
          descricao: "Cerec E Impressora 3D",
          om: "OCEx",
          processos: 1,
        },
      ],
    },
    {
      id: 4,
      nome: "Material Odontológico",
      cor: "#06b6d4", // cyan-500
      subgrupos: [
        {
          numero: 1,
          descricao: "Material Odontológico Uso Comum 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        { numero: 2, descricao: "Dentística 1", om: "HCE", processos: 1 },
        { numero: 3, descricao: "Dentística 2", om: "HCE", processos: 1 },
        { numero: 4, descricao: "Prótese 1", om: "OCEx", processos: 1 },
        { numero: 5, descricao: "Endodontia 1", om: "OCEx", processos: 1 },
        {
          numero: 6,
          descricao: "Cirurgia E Implantodontia",
          om: "OCEx",
          processos: 1,
        },
        { numero: 7, descricao: "Periodontia", om: "HCE", processos: 1 },
        {
          numero: 8,
          descricao: "Laser E Pontas Ultrassom Ems",
          om: "OCEx",
          processos: 1,
        },
        {
          numero: 9,
          descricao: "Material Odontológico Uso Comum 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        { numero: 10, descricao: "Ortodontia 1", om: "OCEx", processos: 1 },
        { numero: 11, descricao: "Ortodontia 2", om: "OCEx", processos: 1 },
        { numero: 12, descricao: "Odontopediatria", om: "OCEx", processos: 1 },
        { numero: 13, descricao: "Prótese 2", om: "OCEx", processos: 1 },
        { numero: 14, descricao: "Endodontia 2", om: "PMN", processos: 1 },
        { numero: 15, descricao: "Prótese 3", om: "OCEx", processos: 1 },
        { numero: 16, descricao: "Ortodontia 3", om: "PMN", processos: 1 },
        { numero: 17, descricao: "Ortodontia 4", om: "PMN", processos: 1 },
        { numero: 18, descricao: "Ortodontia 5", om: "PMN", processos: 1 },
        { numero: 19, descricao: "Radiologia", om: "PMPV", processos: 1 },
        {
          numero: 20,
          descricao: "Medicamentos Oficinais",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 21,
          descricao: "Material De Consumo Para A Clínica De Odontologia",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
      ],
    },
    {
      id: 5,
      nome: "OPME",
      cor: "#2563eb", // blue-600
      subgrupos: [
        { numero: 1, descricao: "Ortopedia 1", om: "HCE", processos: 1 },
        { numero: 2, descricao: "Ortopedia 2", om: "HCE", processos: 1 },
        { numero: 3, descricao: "Ortopedia 3", om: "HCE", processos: 1 },
        { numero: 4, descricao: "Ortopedia 4", om: "HCE", processos: 1 },
        { numero: 5, descricao: "Ortopedia 5", om: "HCE", processos: 1 },
        { numero: 6, descricao: "Ortopedia 6", om: "HCE", processos: 1 },
        { numero: 7, descricao: "Ortopedia 7", om: "HCE", processos: 1 },
        { numero: 8, descricao: "Ortopedia 8", om: "HCE", processos: 1 },
        { numero: 9, descricao: "Ortopedia 9", om: "HCE", processos: 1 },
        {
          numero: 10,
          descricao: "Ortopedia Coluna 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 11,
          descricao: "Ortopedia Coluna 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 12,
          descricao: "Traumato Ortopedia 1",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 13,
          descricao: "Traumato Ortopedia 2",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 14,
          descricao: "Urologia / Ginecologia / Proctologia",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 15,
          descricao: "Cirurgia Vascular 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 16,
          descricao: "Cirurgia Vascular 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 17,
          descricao: "Clínica Da Dor 1",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 18,
          descricao: "Clínica Da Dor 2",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 19,
          descricao: "Clínica Da Dor 3",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 20,
          descricao: "Bucomaxilofacial 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 21,
          descricao: "Bucomaxilofacial 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 22,
          descricao: "Bucomaxilofacial 3",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 23,
          descricao: "Terapia Ocupacional / Oftalmologia",
          om: "HGERJ",
          processos: 1,
        },
        {
          numero: 24,
          descricao: "Cirurgia Geral 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 25,
          descricao: "Cirurgia Geral 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 26,
          descricao: "Endoscopia Digestiva",
          om: "HMR",
          processos: 1,
        },
        {
          numero: 27,
          descricao: "Neurocirurgia 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 28,
          descricao: "Neurocirurgia 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 29,
          descricao: "Neurocirurgia 3",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 30,
          descricao: "Neurocirurgia 4",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 31,
          descricao: "Neurocirurgia 5",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 32,
          descricao: "Hemodinâmica 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 33,
          descricao: "Hemodinâmica 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 34,
          descricao: "Hemodinâmica 3",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 35,
          descricao: "Hemodinâmica 4",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 36,
          descricao: "Cirurgia Cardíaca 1",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 37,
          descricao: "Cirurgia Cardíaca 2",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 38,
          descricao: "Cirurgia Cardíaca 3",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 39,
          descricao: "Pneumologia / Onco-Hemato / Mastologia",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 40,
          descricao: "Radiologia",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 41,
          descricao: "Lab. Análises Clínicas",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 42,
          descricao: "Fios 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 43,
          descricao: "Fios 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 44,
          descricao: "Anestesiologia 1",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 45,
          descricao: "Anestesiologia 2",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 46,
          descricao: "Anestesiologia 3",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 47,
          descricao: "Cirurgia Plástica",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 48,
          descricao: "Cirurgia Oncológica",
          om: "HCE",
          processos: 1,
        },
        {
          numero: 49,
          descricao: "Otorrinolaringologia",
          om: "HMR",
          processos: 1,
        },
        { numero: 50, descricao: "Odontologia", om: "OCEX", processos: 1 },
      ],
    },
    {
      id: 6,
      nome: "Emenda Parlamentar",
      cor: "#f59e0b", // amber-500
      subgrupos: [
        { numero: 1, descricao: "HCE", om: "B Adm Cmpl Sau RJ", processos: 1 },
        {
          numero: 2,
          descricao: "HGERJ",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        { numero: 3, descricao: "HMR", om: "B Adm Cmpl Sau RJ", processos: 1 },
        { numero: 4, descricao: "PMN", om: "B Adm Cmpl Sau RJ", processos: 1 },
        { numero: 5, descricao: "PMRJ", om: "B Adm Cmpl Sau RJ", processos: 1 },
        { numero: 6, descricao: "PMPV", om: "B Adm Cmpl Sau RJ", processos: 1 },
        { numero: 7, descricao: "OCEX", om: "B Adm Cmpl Sau RJ", processos: 1 },
        { numero: 8, descricao: "IBEX", om: "B Adm Cmpl Sau RJ", processos: 1 },
        {
          numero: 9,
          descricao: "LQFEX",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
      ],
    },
    {
      id: 7,
      nome: "Extra PAASSEX",
      cor: "#10b981", // emerald-500
      subgrupos: [
        {
          numero: 1,
          descricao: "Materiais de reposição frequente (52)",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
      ],
    },
    {
      id: 8,
      nome: "PAASSEX",
      cor: "#0891b2", // cyan-600
      subgrupos: [
        {
          numero: 1,
          descricao: "Imagem",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 2,
          descricao: "Central De Material Esterelizado",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 3,
          descricao: "Cirurgia",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 4,
          descricao: "Atendimento",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 5,
          descricao: "Odonto",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 6,
          descricao: "Laboratório",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 7,
          descricao: "Indústria",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 8,
          descricao: "Fisio + Fono + Oftalmo + Acessórios + Diversos",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 9,
          descricao: "Metal",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 10,
          descricao: "Ar Condicionado + Eletrodoméstico + Mobiliário",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
        {
          numero: 11,
          descricao: "Informática",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
        },
      ],
    },
    {
      id: 9,
      nome: "Serviços",
      cor: "#7c3aed", // violet-600
      subgrupos: [
        {
          numero: 1,
          descricao: "Serviço De Coleta De Resíduos De Saúde",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 2,
          descricao:
            "Contrato De Manuteção Predial - M3 Manutencao E Montagens Ltda",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
          ativo: true,
        },
        {
          numero: 3,
          descricao:
            "Contrato De Manuteção Predial - M3 Manutencao E Montagens Ltda",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 4,
          descricao: "Coleta, Transporte, Tratamento E Destinação Final",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 5,
          descricao: "Locação De Equipamento De Rm E Tc",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 6,
          descricao:
            "Contratação De Empresa Especializada Em Engenharia Clínica",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 7,
          descricao:
            "Contratação De Empresa Especializada Em Engenharia Clínica",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 8,
          descricao: "Serviço De Limpeza Técnica, Asseio E Conservação",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 9,
          descricao: "Serviço De Dosimetria",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 10,
          descricao: "Coleta, Transporte E Tratamento De Efluentes",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 11,
          descricao: "Contrato De Teleconsulta Nas Especialidades Médicas",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 12,
          descricao:
            "Serviços De Engenharia Para Adequação Da Entrada De Energia",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 13,
          descricao:
            "Serviços De Engenharia Para Adequação Da Entrada De Energia",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
          ativo: true,
        },
        {
          numero: 14,
          descricao:
            "Engenharia Clínica Para Odontoclínica Central Do Exército",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 15,
          descricao: "Adequação Do Laboratório Digital E Periodontia",
          om: "B Adm Cmpl Sau RJ",
          processos: 1,
          ativo: true,
        },
        {
          numero: 16,
          descricao:
            "Aquisição De Insumos Específicos E Instalação Por Comodato",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
        {
          numero: 17,
          descricao: "Outsourcing De Impressão Com Garantia Mais Excedente",
          om: "B Adm Cmpl Sau RJ",
          processos: 0,
          ativo: false,
        },
      ],
    },
  ],
};

// Estatísticas por OM (atualizadas conforme planilha)
export const ESTATISTICAS_OM = [
  { nome: "B Adm Cmpl Sau RJ", processos: 200, percentual: 69 },
  { nome: "HCE", processos: 35, percentual: 12 },
  { nome: "HGERJ", processos: 20, percentual: 7 },
  { nome: "OCEx", processos: 15, percentual: 5 },
  { nome: "HMR", processos: 8, percentual: 3 },
  { nome: "PMN", processos: 5, percentual: 2 },
  { nome: "PMRJ", processos: 4, percentual: 1 },
  { nome: "PMPV", processos: 3, percentual: 1 },
];
