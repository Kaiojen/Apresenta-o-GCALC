import {
  Users,
  FileText,
  Target,
  AlertCircle,
  TrendingUp,
  Calendar,
  BarChart3,
} from "lucide-react";
import { KPIS } from "@/lib/constants";
import KPICardSimple from "@/components/Dashboard/KPICardSimple";
import OrcamentoChart from "@/components/Dashboard/OrcamentoChart";

import NextButton from "@/components/Layout/NextButton";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpotlightSection from "@/components/Spotlight/SpotlightSection";
import { useSpotlight } from "@/contexts/SpotlightContext";

export default function Dashboard() {
  const { isSpotlightMode } = useSpotlight();
  const processosConcluidos = 43;
  const processosRealizados2024 = 89;
  const metaTotal = 104;
  const efetivoAtual2024 = 83;
  const efetivoAtual2025 = 89;
  const gapProcessos = metaTotal - processosRealizados2024; // 104 - 89 = 15
  const percentualConclusao = Math.round(
    (processosConcluidos / metaTotal) * 100
  );
  const capacidadeAtual = Math.round(
    (processosConcluidos / processosRealizados2024) * 100
  );

  // Dados para timeline 2024
  const progressoAno = {
    mesAtual: "Dezembro",
    percentualAno: 92, // Assumindo final do ano
    diasRestantes: 30,
  };

  const kpiDataPrimarios = [
    {
      title: "CAPACIDADE ATUAL",
      value: efetivoAtual2024,
      subtitle: "Pessoas ativas",
      status: "warning",
      icon: Users,
      delay: 0.2,
      insights: "Efetivo estabilizado em 89 pessoas",
      context: "Crescimento de 154% desde 2020",
    },
    {
      title: "DEMANDA 2025",
      value: metaTotal,
      subtitle: "Processos projetados",
      status: "critical",
      icon: Target,
      delay: 0.4,
      insights: `Gap de ${gapProcessos} processos`,
      context: "17% acima da capacidade atual",
    },
  ];

  const kpiDataSecundarios = [
    {
      title: "PERFORMANCE 2024",
      value: processosRealizados2024,
      subtitle: "Processos executados",
      trend: 6.7,
      status: "success",
      icon: FileText,
      delay: 0.6,
      insights: "98% de crescimento vs 2021",
      context: "Meta anual superada",
    },
    {
      title: "FASE ATUAL",
      value: processosConcluidos,
      subtitle: "Processos concluídos em 2025",
      percentage: percentualConclusao,
      status: "info",
      icon: Calendar,
      delay: 0.8,
      insights: "Dados até julho/2025",
      context: "Meta anual: 104 processos",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-background)] to-white">
      <div
        className={
          isSpotlightMode ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        }
      >
        {/* PARTE 1: Header Comparativo */}
        <SpotlightSection id="header-comparativo" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section com Timeline */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--primaryBlue)] mb-4">
                Painel Executivo 2024
              </h1>
              <p className="text-xl text-[var(--softGray)] max-w-3xl mx-auto">
                Visão comparativa da execução atual e planejamento estratégico
                2025
              </p>
            </motion.div>

            {/* Seção Principal: Capacidade vs Demanda */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-[var(--primaryBlueDark)] mb-2">
                  Análise Comparativa 2024 × 2025
                </h2>
                <p className="text-sm md:text-base text-[var(--softGray)]">
                  Evolução da capacidade operacional e projeções de crescimento
                </p>
              </div>

              <div
                id="efetivo-cards"
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md border-l-4 border-l-[var(--primaryBlue)] p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-[var(--primaryBlue)]" />
                      <h3 className="text-lg font-bold text-gray-800">
                        EFETIVO 2024 × 2025
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-[var(--primaryBlue)]">
                        83
                      </div>
                      <div className="text-sm text-gray-600">2024</div>
                    </div>
                    <div className="text-center p-3 bg-blue-100 rounded">
                      <div className="text-2xl font-bold text-[var(--primaryBlueDark)]">
                        89
                      </div>
                      <div className="text-sm text-gray-600">2025</div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-sm text-gray-500">Crescimento: </span>
                    <span className="text-sm font-bold text-green-600">
                      +7,2%
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md border-l-4 border-l-[var(--danger)] p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Target className="h-6 w-6 text-[var(--danger)]" />
                      <h3 className="text-lg font-bold text-gray-800">
                        PROCESSOS 2024 × 2025
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded">
                      <div className="text-2xl font-bold text-red-600">89</div>
                      <div className="text-sm text-gray-600">2024</div>
                    </div>
                    <div className="text-center p-3 bg-red-100 rounded">
                      <div className="text-2xl font-bold text-red-700">104</div>
                      <div className="text-sm text-gray-600">2025</div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-sm text-gray-500">Crescimento: </span>
                    <span className="text-sm font-bold text-red-600">+17%</span>
                  </div>
                </motion.div>
              </div>

              {/* Gap Analysis Card - Mobile Optimized */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="bg-gradient-to-r from-red-50 to-yellow-50 border border-red-200 rounded-lg p-4 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-6 w-6 md:h-8 md:w-8 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-red-800">
                        Análise do Desafio
                      </h3>
                      <p className="text-xs md:text-sm text-red-600">
                        Aumento de demanda vs crescimento de efetivo
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-2xl md:text-3xl font-bold text-red-600">
                      15
                    </div>
                    <div className="text-xs md:text-sm text-red-500">
                      processos adicionais
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 2: Performance & Acompanhamento */}
        <SpotlightSection id="performance-section" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Seção Secundária: Performance e Timeline */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-[var(--primaryBlueDark)] mb-2">
                  Performance & Acompanhamento
                </h2>
                <p className="text-sm md:text-base text-[var(--softGray)]">
                  Indicadores de desempenho e progresso atual
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {kpiDataSecundarios.map((kpi, index) => (
                  <KPICardSimple key={index} {...kpi} />
                ))}
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 3: Execução Financeira */}
        <SpotlightSection id="orcamento-chart" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Gráfico Orçamentário Aprimorado */}
            <div className="mb-12">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center mb-8"
              >
                <h2 className="text-2xl font-bold text-[var(--primaryBlueDark)] mb-2">
                  Execução Financeira 2024
                </h2>
                <p className="text-[var(--softGray)]">
                  Distribuição orçamentária por categoria de despesa
                </p>
              </motion.div>
              <OrcamentoChart showOnlyBudget={true} />
            </div>
          </div>
        </SpotlightSection>

        {/* PARTE 4: Economicidade 2025 */}
        <SpotlightSection id="economicidade-chart" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-[var(--primaryBlueDark)] mb-2">
                Economicidade 2025 - Valores Homologados
              </h2>
              <p className="text-[var(--softGray)]">
                Acompanhamento mensal dos valores homologados e economia gerada
              </p>
            </motion.div>
            <OrcamentoChart showOnlyEconomicidade={true} />
          </div>
        </SpotlightSection>

        {/* PARTE 5: Indicadores Estratégicos */}
        <SpotlightSection id="indicadores-estrategicos" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Estatísticas Estratégicas */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[var(--primaryBlueDark)] mb-2">
                  Indicadores Estratégicos
                </h2>
                <p className="text-[var(--softGray)]">
                  Métricas de consolidação e planejamento futuro
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-t-[var(--primaryBlue)] hover:shadow-lg transition-all duration-300"
                >
                  <BarChart3 className="h-8 w-8 text-[var(--primaryBlue)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[var(--primaryBlue)] mb-2">
                    6.992
                  </div>
                  <div className="text-sm text-[var(--text-gray)] uppercase tracking-wider mb-2">
                    Itens Catalogados
                  </div>
                  <div className="text-xs text-[var(--softGray)]">
                    Base de dados consolidada
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-t-[var(--primaryBlueDark)] hover:shadow-lg transition-all duration-300"
                >
                  <TrendingUp className="h-8 w-8 text-[var(--primaryBlueDark)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[var(--primaryBlueDark)] mb-2">
                    145
                  </div>
                  <div className="text-sm text-[var(--text-gray)] uppercase tracking-wider mb-2">
                    Processos Planejados 2025-2026
                  </div>
                  <div className="text-xs text-[var(--softGray)]">
                    Crescimento de 39% vs 2024
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                  className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-t-[var(--success)] hover:shadow-lg transition-all duration-300"
                >
                  <Calendar className="h-8 w-8 text-[var(--success)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[var(--success)] mb-2">
                    154%
                  </div>
                  <div className="text-sm text-[var(--text-gray)] uppercase tracking-wider mb-2">
                    Crescimento de Efetivo
                  </div>
                  <div className="text-xs text-[var(--softGray)]">
                    Evolução 2020-2024
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Footer com slogan melhorado */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-center mt-16 py-8 border-t border-gray-200"
            >
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 inline-block">
                <p className="text-2xl font-bold text-[var(--primaryBlue)] italic mb-2">
                  "Prever para Prover!"
                </p>
                <p className="text-sm text-[var(--text-gray)]">
                  Base Administrativa do Complexo de Saúde/RJ
                </p>
                <p className="text-xs text-[var(--softGray)] mt-2">
                  Excelência em Gestão • Planejamento Estratégico • Resultados
                  Efetivos
                </p>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* Botão Próximo */}
        {!isSpotlightMode && (
          <NextButton to="/desafio" label="Explorar Nossos Desafios" />
        )}
      </div>
    </div>
  );
}
