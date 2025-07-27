import { motion } from "framer-motion";
import SpotlightSection from "@/components/Spotlight/SpotlightSection";
import { useSpotlight } from "@/contexts/SpotlightContext";
import {
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Calendar,
  Award,
  Zap,
  DollarSign,
} from "lucide-react";

export default function Proposta() {
  const { isSpotlightMode } = useSpotlight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-background)] to-white">
      <div
        className={
          isSpotlightMode ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        }
      >
        {/* PARTE 1: Header Proposta */}
        <SpotlightSection id="header-proposta" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--military-green)] mb-4">
                Resumo Executivo
              </h1>
              <p className="text-xl text-[var(--institutional-blue)] max-w-3xl mx-auto">
                Base Administrativa do Complexo de Saúde - Consolidação de uma
                trajetória de excelência
              </p>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 2: Trajetória de Crescimento */}
        <SpotlightSection id="trajetoria-crescimento" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-l-[var(--success-green)]">
                <h2 className="text-2xl font-bold text-[var(--military-green)] mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Evolução Estratégica (2020-2025)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-[var(--success-green)] mb-2">
                      154%
                    </div>
                    <div className="text-sm font-medium text-[var(--text-gray)]">
                      CRESCIMENTO DE EFETIVO
                    </div>
                    <div className="text-xs text-[var(--text-gray)] mt-1">
                      35 → 89 pessoas
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-[var(--institutional-blue)] mb-2">
                      98%
                    </div>
                    <div className="text-sm font-medium text-[var(--text-gray)]">
                      CRESCIMENTO PROCESSOS
                    </div>
                    <div className="text-xs text-[var(--text-gray)] mt-1">
                      45 → 89 processos/ano
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-[var(--warning)] mb-2">
                      6.992
                    </div>
                    <div className="text-sm font-medium text-[var(--text-gray)]">
                      ITENS CATALOGADOS
                    </div>
                    <div className="text-xs text-[var(--text-gray)] mt-1">
                      Base estruturada
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-[var(--brasao-gold)] mb-2">
                      1:1
                    </div>
                    <div className="text-sm font-medium text-[var(--text-gray)]">
                      RELAÇÃO IDEAL
                    </div>
                    <div className="text-xs text-[var(--text-gray)] mt-1">
                      Pessoa/processo
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-[var(--institutional-blue)] mb-4">
                    🏆 Marcos da Consolidação Institucional
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-[var(--text-gray)]">
                      <li>
                        • <strong>2020:</strong> Formação da Base (35 pessoas)
                      </li>
                      <li>
                        • <strong>2021:</strong> Início operacional (45
                        processos)
                      </li>
                      <li>
                        • <strong>2022:</strong> Expansão acelerada (79
                        processos)
                      </li>
                      <li>
                        • <strong>2023:</strong> Estabilização operacional
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-[var(--text-gray)]">
                      <li>
                        • <strong>2024:</strong> Maturidade organizacional (89
                        processos)
                      </li>
                      <li>
                        • <strong>2025:</strong> Consolidação e eficiência
                        otimizada
                      </li>
                      <li>• Crescimento consistente e planejado</li>
                      <li>• Adaptação contínua às demandas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 3: Situação Atual e Performance 2024 */}
        <SpotlightSection id="situacao-atual" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* 2. Situação Atual e Performance 2024 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-lg border-l-4 border-l-[var(--warning)]">
                <h2 className="text-2xl font-bold text-[var(--military-green)] mb-6 flex items-center">
                  <BarChart3 className="h-6 w-6 mr-2" />
                  Performance Operacional 2024
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border-t-4 border-t-blue-500">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      R$ 69,7M
                    </div>
                    <div className="text-sm font-medium text-[var(--text-gray)]">
                      EXECUÇÃO ORÇAMENTÁRIA
                    </div>
                    <div className="text-xs text-[var(--text-gray)] mt-1">
                      Volume gerenciado em 2024
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border-t-4 border-t-green-500">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      89
                    </div>
                    <div className="text-sm font-medium text-[var(--text-gray)]">
                      PROCESSOS EXECUTADOS
                    </div>
                    <div className="text-xs text-[var(--text-gray)] mt-1">
                      Meta 2024 superada
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border-t-4 border-t-purple-500">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      89
                    </div>
                    <div className="text-sm font-medium text-[var(--text-gray)]">
                      EFETIVO OTIMIZADO
                    </div>
                    <div className="text-xs text-[var(--text-gray)] mt-1">
                      Capacidade no limite
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-[var(--institutional-blue)] mb-4">
                    📊 Distribuição da Execução Orçamentária 2024
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-3 rounded border-l-2 border-l-red-400">
                      <div className="font-medium text-sm">ND 30 - Consumo</div>
                      <div className="text-lg font-bold text-red-600">
                        R$ 44,6M
                      </div>
                      <div className="text-xs text-gray-600">
                        63,9% do orçamento
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border-l-2 border-l-blue-400">
                      <div className="font-medium text-sm">
                        ND 37/39 - Serviços
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        R$ 16,1M
                      </div>
                      <div className="text-xs text-gray-600">
                        23,1% do orçamento
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-2 border-l-green-400">
                      <div className="font-medium text-sm">
                        ND 52 - Permanente
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        R$ 9,1M
                      </div>
                      <div className="text-xs text-gray-600">
                        13,1% do orçamento
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 4: Desafios e Implementações */}
        <SpotlightSection id="desafios-implementacoes" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* 3. Desafios e Implementações */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg border-l-4 border-l-[var(--alert-red)]">
                <h2 className="text-2xl font-bold text-[var(--military-green)] mb-6 flex items-center">
                  <Target className="h-6 w-6 mr-2" />
                  Desafios Superados e Estrutura Atual
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--alert-red)] mb-4">
                      🎯 Dimensão do Desafio Identificado
                    </h3>
                    <div className="bg-white p-4 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Processos necessários:
                        </span>
                        <span className="text-lg font-bold text-[var(--alert-red)]">
                          290/ano
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Utilização atual:
                        </span>
                        <span className="text-lg font-bold text-[var(--warning)]">
                          100%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Concentração crítica:
                        </span>
                        <span className="text-lg font-bold text-[var(--institutional-blue)]">
                          65%
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-2">
                        ND 30, 37, 39 concentram 65% da demanda operacional
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--success-green)] mb-4">
                      ✅ Implementações Realizadas
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg border-l-2 border-l-green-400">
                        <div className="font-medium text-sm">
                          Mapeamento de Processos
                        </div>
                        <div className="text-xs text-gray-600">
                          Gestão de riscos implementada
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border-l-2 border-l-blue-400">
                        <div className="font-medium text-sm">
                          Seção de Planejamento
                        </div>
                        <div className="text-xs text-gray-600">
                          Interface com OMs estabelecida
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border-l-2 border-l-purple-400">
                        <div className="font-medium text-sm">
                          Padronização Total
                        </div>
                        <div className="text-xs text-gray-600">
                          6.992 itens catalogados
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 5: Solução Implementada */}
        <SpotlightSection id="solucao-implementada" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* 4. Solução Implementada */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-[var(--military-green)] to-[var(--institutional-blue)] text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  Solução GCALC SAU - Estrutura Consolidada
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 text-yellow-200">
                      ⚡ Metodologia Integrada
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Ciclo virtuoso de 8 etapas estruturadas</li>
                      <li>• Cronogramas ND 30/39 e ND 52 sincronizados</li>
                      <li>• PCA, PDR e PRO implementados</li>
                      <li>• Controle de marcos temporais</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 text-green-200">
                      🏗️ Estrutura Institucional
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 9 grupos especializados oficiais</li>
                      <li>• 290 processos organizados</li>
                      <li>• 8 OMs integradas no sistema</li>
                      <li>• Responsabilidades claramente definidas</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 text-blue-200">
                      📊 Distribuição Otimizada
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Base ADM: 69% dos processos (200)</li>
                      <li>• HCE: 12% dos processos (35)</li>
                      <li>• HGERJ: 7% dos processos (20)</li>
                      <li>• Demais OMs: 12% distribuídos</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">
                    Resultados Mensuráveis Alcançados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-200">
                        30%
                      </div>
                      <div className="text-sm opacity-90">
                        Redução tempo ciclo
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-200">
                        95%
                      </div>
                      <div className="text-sm opacity-90">
                        Cumprimento prazos
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-200">
                        20%
                      </div>
                      <div className="text-sm opacity-90">Economia gerada</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-200">
                        R$ 2,8M
                      </div>
                      <div className="text-sm opacity-90">Economizados/ano</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 6: Consolidação e Reconhecimento */}
        <SpotlightSection id="consolidacao-reconhecimento" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* 5. Consolidação e Reconhecimento */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-lg border-l-4 border-l-[var(--brasao-gold)]">
                <h2 className="text-2xl font-bold text-[var(--military-green)] mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Consolidação como Referência Institucional
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--brasao-gold)] mb-4">
                      🏆 Excelência Reconhecida
                    </h3>
                    <div className="bg-white p-6 rounded-lg">
                      <ul className="space-y-3 text-sm text-[var(--text-gray)]">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Metodologia validada e aprovada</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Processos mapeados e documentados</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Governança estabelecida e funcional</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Compliance 100% com Lei 14.133/2021</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--institutional-blue)] mb-4">
                      🎖️ Modelo de Referência
                    </h3>
                    <div className="bg-white p-6 rounded-lg">
                      <ul className="space-y-3 text-sm text-[var(--text-gray)]">
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>Benchmark para outras Regiões Militares</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>Padrão de excelência operacional</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>Inovação em processos militares</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>Marco na modernização do EB</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 6. Síntese Estratégica Final */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center py-12 border-t border-gray-200"
            >
              <h2 className="text-3xl font-bold text-[var(--military-green)] mb-6">
                Síntese Estratégica
              </h2>

              <div className="max-w-5xl mx-auto mb-8">
                <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-6">
                  A Base Administrativa do Complexo de Saúde/RJ consolidou-se
                  como um
                  <strong className="text-[var(--military-green)]">
                    {" "}
                    marco na modernização dos processos de aquisição militar
                  </strong>
                  , demonstrando que é possível aliar{" "}
                  <strong>eficiência operacional</strong>,
                  <strong> compliance legal</strong> e{" "}
                  <strong>economia de recursos</strong> em uma única solução
                  integrada.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-blue-800 mb-2">
                      Trajetória Consolidada
                    </h3>
                    <p className="text-sm text-blue-700">
                      5 anos de crescimento planejado e evolução contínua, desde
                      35 até 89 pessoas especializadas
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                    <Target className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-green-800 mb-2">
                      Estrutura Otimizada
                    </h3>
                    <p className="text-sm text-green-700">
                      290 processos organizados em 9 grupos, distribuídos
                      estrategicamente entre 8 organizações militares
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                    <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-bold text-purple-800 mb-2">
                      Resultados Comprovados
                    </h3>
                    <p className="text-sm text-purple-700">
                      R$ 69,7M gerenciados com economia de 20%, 95% de
                      cumprimento de prazos legais
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-8 rounded-lg border border-yellow-300 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-[var(--military-green)] mb-4 italic">
                  "Prever para Prover!"
                </h3>
                <p className="text-lg text-[var(--institutional-blue)] font-medium mb-2">
                  Base Administrativa do Complexo de Saúde/RJ
                </p>
                <p className="text-[var(--text-gray)] mb-4">
                  Mais que uma implementação: um{" "}
                  <strong>modelo de excelência</strong> que demonstra como a
                  visão estratégica, o planejamento rigoroso e a execução
                  disciplinada podem transformar desafios em oportunidades de
                  crescimento institucional.
                </p>
                <div className="text-sm text-[var(--text-gray)] italic">
                  "De 35 pessoas em 2020 a uma estrutura de referência nacional
                  em 2025 - A evolução que comprova o sucesso da metodologia
                  GCALC SAU"
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>
      </div>
    </div>
  );
}
