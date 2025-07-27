import CicloVirtuoso from "@/components/Solution/CicloVirtuoso";
import CronogramasTimeline from "@/components/Solution/CronogramasTimeline";
import DivisaoEstrategica from "@/components/Solution/DivisaoEstrategica";
import DistributionChart from "@/components/Proposal/DistributionChart";
import NextButton from "@/components/Layout/NextButton";
import SpotlightSection from "@/components/Spotlight/SpotlightSection";
import { useSpotlight } from "@/contexts/SpotlightContext";
import { motion } from "framer-motion";

export default function Solucao() {
  const { isSpotlightMode } = useSpotlight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-background)] to-white">
      <div
        className={
          isSpotlightMode ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        }
      >
        {/* PARTE 1: Header Solução */}
        <SpotlightSection id="header-solucao" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--military-green)] mb-4">
                Solução Estratégica GCALC SAU
              </h1>
              <p className="text-xl text-[var(--institutional-blue)] max-w-3xl mx-auto">
                Metodologia integrada com estrutura institucional de 9 grupos
                para otimização e organização dos processos de aquisição
              </p>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 2: Ciclo Virtuoso */}
        <SpotlightSection id="ciclo-virtuoso" className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <CicloVirtuoso />
            </div>
          </div>
        </SpotlightSection>

        {/* PARTE 3: Cronogramas */}
        <SpotlightSection id="cronogramas-section" className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <CronogramasTimeline />
            </div>
          </div>
        </SpotlightSection>

        {/* PARTE 4: Divisão Estratégica */}
        <SpotlightSection id="divisao-estrategica" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--military-green)] mb-4">
                  Estrutura Institucional GCALC SAU
                </h2>
                <p className="text-lg text-[var(--text-gray)] max-w-4xl mx-auto">
                  Organização oficial dos{" "}
                  <strong>290 processos licitatórios</strong> em 9 grupos
                  institucionais, garantindo especialização técnica,
                  distribuição eficiente de responsabilidades e conformidade com
                  os normativos militares vigentes.
                </p>
              </div>
              <DivisaoEstrategica />
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 5: Distribuição Operacional */}
        <SpotlightSection id="distribuicao-operacional" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--military-green)] mb-4">
                  Distribuição Operacional por Organização Militar
                </h2>
                <p className="text-lg text-[var(--text-gray)] max-w-4xl mx-auto">
                  Implementação prática da estrutura institucional com
                  distribuição estratégica de <strong>290 processos</strong>{" "}
                  entre 8 organizações militares, otimizando a capacidade
                  operacional e garantindo cobertura total das demandas.
                </p>
              </div>
              <DistributionChart />
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 6: Benefícios */}
        <SpotlightSection id="beneficios-section" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Benefícios da Solução */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-[var(--military-green)] to-[var(--institutional-blue)] text-white p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                Benefícios da Metodologia Implementada
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-2">Eficiência</h3>
                  <p className="text-sm opacity-90">
                    Redução comprovada de 30% no tempo de ciclo (de 8 para 5,6
                    meses em média) através da padronização de processos,
                    especialização por grupos técnicos e eliminação de
                    retrabalhos entre fases do cronograma estruturado
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">Precisão</h3>
                  <p className="text-sm opacity-90">
                    95% de cumprimento rigoroso de prazos legais (Lei
                    14.133/2021) com o cronograma estruturado, responsabilidades
                    técnicas claramente distribuídas entre 8 OMs e controle de
                    marcos temporais por etapa do ciclo virtuoso
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-2">Economia</h3>
                  <p className="text-sm opacity-90">
                    Economia estimada de 20% dos recursos (R$ 2,8 milhões
                    anuais) através da especialização técnica por área,
                    eliminação de duplicações administrativas e otimização de
                    compras consolidadas entre organizações militares
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-4">
                    Resultados da Estruturação
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-200">
                        6.992
                      </div>
                      <div className="text-sm opacity-90">
                        Itens catalogados
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-200">
                        290
                      </div>
                      <div className="text-sm opacity-90">
                        Processos estruturados
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-200">9</div>
                      <div className="text-sm opacity-90">
                        Grupos institucionais
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-200">
                        8
                      </div>
                      <div className="text-sm opacity-90">
                        OMs colaborativas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 7: Conclusão */}
        <SpotlightSection id="conclusao-solucao" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Próximos Passos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center mt-16 py-8 border-t border-gray-200"
            >
              <h3 className="text-2xl font-bold text-[var(--military-green)] mb-4">
                Implementação da Estrutura GCALC SAU
              </h3>
              <p className="text-lg text-[var(--text-gray)] max-w-4xl mx-auto">
                Com a estrutura institucional definida em{" "}
                <strong>9 grupos oficiais</strong>, os processos otimizados e a
                divisão de responsabilidades estabelecida entre
                <strong>8 organizações militares</strong>, o próximo passo é
                dimensionar adequadamente
                <strong>a capacidade operacional</strong> para executar os 290
                processos licitatórios sem comprometer a qualidade e os prazos
                estabelecidos.
              </p>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* Botão Próximo */}
        {!isSpotlightMode && (
          <NextButton to="/proposta" label="Ver Resumo Executivo" />
        )}
      </div>
    </div>
  );
}
