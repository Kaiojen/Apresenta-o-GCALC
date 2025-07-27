import IcebergVisualization from "@/components/Iceberg/IcebergVisualization";
import { Card, CardContent } from "@/components/ui/card";
import { ACOES_REALIZADAS } from "@/lib/constants";
import NextButton from "@/components/Layout/NextButton";
import { motion } from "framer-motion";
import SpotlightSection from "@/components/Spotlight/SpotlightSection";
import { useSpotlight } from "@/contexts/SpotlightContext";
import {
  CheckCircle,
  AlertTriangle,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

export default function Desafio() {
  const { isSpotlightMode } = useSpotlight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-background)] to-white">
      <div
        className={
          isSpotlightMode ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        }
      >
        {/* PARTE 1: Iceberg Principal */}
        <SpotlightSection id="header-desafio" className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <IcebergVisualization />
            </div>
          </div>
        </SpotlightSection>

        {/* PARTE 2: Análise Estratégica */}
        <SpotlightSection id="problemas-atuais" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-l-[var(--institutional-blue)]">
                <h3 className="text-xl font-bold text-[var(--military-green)] mb-4">
                  Análise Estratégica da Demanda
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-[var(--institutional-blue)] mb-2">
                      📊 Capacidade Operacional vs Demanda
                    </h4>
                    <ul className="space-y-2 text-sm text-[var(--text-gray)]">
                      <li>
                        • <strong>290 processos licitatórios/ano</strong>{" "}
                        necessários para atendimento integral
                      </li>
                      <li>
                        • Estrutura atual com processos mapeados e otimizados
                      </li>
                      <li>
                        • Padronização implementada em 6.992 itens do catálogo
                      </li>
                      <li>
                        • Capacidade operacional atual no limite da eficiência
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--institutional-blue)] mb-2">
                      🎯 Análise: Percepção vs Demanda Real
                    </h4>
                    <ul className="space-y-2 text-sm text-[var(--text-gray)]">
                      <li>
                        • <strong>ND 52</strong> (35%): Elevada visibilidade
                        organizacional, menor volume operacional
                      </li>
                      <li>
                        • <strong>ND 30, 37, 39</strong> (65%): Menor
                        visibilidade, concentração da demanda operacional
                      </li>
                      <li>
                        • Necessidade de rebalanceamento na alocação de recursos
                      </li>
                      <li>
                        • Oportunidade de otimização na gestão de prioridades
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 3: Implementações Realizadas */}
        <SpotlightSection id="impactos-section" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Ações Já Realizadas */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[var(--military-green)] text-center mb-8">
                Implementações Realizadas
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ACOES_REALIZADAS.map((acao, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[var(--success-green)]">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-6 w-6 text-[var(--success-green)]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-[var(--military-green)] mb-3">
                              {acao.titulo}
                            </h3>
                            <p className="text-[var(--text-gray)] leading-relaxed">
                              {acao.descricao}
                            </p>
                            <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-[var(--success-green)]">
                              ✓ Implementado
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 4: Desafio Estratégico */}
        <SpotlightSection id="necessidades-section" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* O Verdadeiro Desafio */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--military-green)] mb-4">
                  Desafio Estratégico Identificado
                </h2>
                <p className="text-lg text-[var(--text-gray)] max-w-4xl mx-auto">
                  Para atender integralmente todas as Organizações Militares do
                  Complexo de Saúde, a análise identificou a necessidade de{" "}
                  <strong className="text-[var(--institutional-blue)]">
                    290 processos licitatórios anuais
                  </strong>
                  , organizados em grupos e subgrupos específicos, consolidando
                  a transformação da base em uma
                  <strong> estrutura GCAULC integrada</strong>.
                </p>
              </div>

              {/* Cards do Desafio */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="h-full border-l-4 border-l-[var(--warning)] hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Target className="h-8 w-8 text-[var(--warning)] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-[var(--military-green)] mb-2">
                        290
                      </div>
                      <div className="text-sm font-medium text-[var(--text-gray)]">
                        PROCESSOS REQUERIDOS
                      </div>
                      <div className="text-xs text-[var(--text-gray)] mt-2">
                        Volume anual para atendimento integral
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Card className="h-full border-l-4 border-l-[var(--institutional-blue)] hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Users className="h-8 w-8 text-[var(--institutional-blue)] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-[var(--military-green)] mb-2">
                        100%
                      </div>
                      <div className="text-sm font-medium text-[var(--text-gray)]">
                        UTILIZAÇÃO ATUAL
                      </div>
                      <div className="text-xs text-[var(--text-gray)] mt-2">
                        Capacidade operacional no limite de eficiência
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Card className="h-full border-l-4 border-l-[var(--danger)] hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <AlertTriangle className="h-8 w-8 text-[var(--danger)] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-[var(--military-green)] mb-2">
                        65%
                      </div>
                      <div className="text-sm font-medium text-[var(--text-gray)]">
                        CONCENTRAÇÃO OPERACIONAL
                      </div>
                      <div className="text-xs text-[var(--text-gray)] mt-2">
                        ND 30, 37, 39 concentram a demanda crítica
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <Card className="h-full border-l-4 border-l-[var(--success-green)] hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-8 w-8 text-[var(--success-green)] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-[var(--military-green)] mb-2">
                        GCAULC
                      </div>
                      <div className="text-sm font-medium text-[var(--text-gray)]">
                        ESTRUTURA INTEGRADA
                      </div>
                      <div className="text-xs text-[var(--text-gray)] mt-2">
                        Solução: Consolidação como GCAULC único
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Próximos Passos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center mt-16 py-8 border-t border-gray-200"
            >
              <h3 className="text-2xl font-bold text-[var(--military-green)] mb-4">
                Próxima Etapa Estratégica
              </h3>
              <p className="text-lg text-[var(--text-gray)] max-w-4xl mx-auto leading-relaxed">
                Com os processos mapeados, padronizados e a clara identificação
                da necessidade de
                <strong className="text-[var(--institutional-blue)]">
                  {" "}
                  290 processos licitatórios estruturados
                </strong>
                , a próxima etapa consiste em{" "}
                <strong>
                  dimensionar adequadamente a estrutura operacional
                </strong>
                para sustentar integralmente essa demanda, consolidando
                efetivamente a base como um
                <strong className="text-[var(--military-green)]">
                  {" "}
                  GCAULC de excelência operacional
                </strong>
                , assegurando a manutenção da qualidade no atendimento às
                Organizações Militares.
              </p>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* Botão Próximo */}
        {!isSpotlightMode && (
          <NextButton to="/solucao" label="Ver Nossa Solução" />
        )}
      </div>
    </div>
  );
}
