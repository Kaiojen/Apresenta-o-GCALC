import EvolutionChart from "@/components/Evolution/EvolutionChartNew";
import NextButton from "@/components/Layout/NextButton";
import { motion } from "framer-motion";
import SpotlightSection from "@/components/Spotlight/SpotlightSection";
import { useSpotlight } from "@/contexts/SpotlightContext";

export default function Evolucao() {
  const { isSpotlightMode } = useSpotlight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-background)] to-white">
      <div
        className={
          isSpotlightMode ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        }
      >
        {/* PARTE 1: Nossa Trajetória */}
        <SpotlightSection id="header-evolucao" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--primaryBlue)] mb-4">
                Evolução da Base
              </h1>
              <p className="text-xl text-[var(--softGray)] max-w-3xl mx-auto">
                Crescimento estratégico em pessoal e processos evidencia a
                consolidação institucional
              </p>
            </motion.div>

            {/* Introdução Explicativa */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-[var(--light-background)] to-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-2xl font-bold text-[var(--primaryBlueDark)] mb-4">
                    Nossa Trajetória
                  </h2>
                  <p className="text-lg text-[var(--text-gray)] leading-relaxed">
                    A Base foi formada em <strong>2020</strong> com o intuito de
                    centralizar os pregões das organizações militares de saúde
                    do Rio de Janeiro. Desde então, tivemos muitas evoluções,
                    consolidando-nos como referência em gestão de processos
                    licitatórios no setor de saúde militar. Nossa jornada tem
                    sido marcada por crescimento consistente e adaptação às
                    demandas crescentes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 2: Pessoal */}
        <SpotlightSection id="crescimento-cards" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--primaryBlueDark)] mb-4">
                  Pessoal
                </h2>
                <p className="text-lg text-[var(--softGray)]">
                  Crescimento de efetivo para atender demanda crescente
                </p>
              </div>
              <EvolutionChart type="pessoal" />
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 3: Gestão e Planejamento */}
        <SpotlightSection id="timeline-section" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--primaryBlueDark)] mb-4">
                  Gestão e Planejamento
                </h2>
                <p className="text-lg text-[var(--softGray)]">
                  Evolução dos processos licitatórios e projeção para 2025
                </p>
              </div>
              <EvolutionChart type="processos" />
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 4: Gráfico de Correlação */}
        <SpotlightSection id="projecoes-section" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--primaryBlueDark)] mb-4">
                  Gráfico de Correlação
                </h2>
                <p className="text-lg text-[var(--softGray)]">
                  Visualização da evolução paralela entre efetivo e demanda de
                  processos
                </p>
              </div>

              <EvolutionChart type="combined" />
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 5: Análise Detalhada */}
        <SpotlightSection id="analise-detalhada" className="px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--primaryBlueDark)] mb-4">
                  Análise Detalhada: Pessoal × Processos
                </h2>
                <p className="text-lg text-[var(--softGray)]">
                  Dados granulares da correlação entre crescimento de pessoal e
                  capacidade de processamento
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Versão Desktop - Tabela */}
                <div className="hidden md:block overflow-x-auto">
                  <table
                    className="w-full"
                    role="table"
                    aria-label="Tabela comparativa entre efetivo e processos por ano"
                  >
                    <thead className="bg-gradient-to-r from-[var(--military-green)] to-[var(--institutional-blue)] text-white">
                      <tr role="row">
                        <th
                          className="px-3 py-4 sm:px-6 text-left font-semibold"
                          role="columnheader"
                        >
                          Ano
                        </th>
                        <th
                          className="px-3 py-4 sm:px-6 text-center font-semibold"
                          role="columnheader"
                        >
                          👥 Efetivo
                        </th>
                        <th
                          className="px-3 py-4 sm:px-6 text-center font-semibold"
                          role="columnheader"
                        >
                          📋 Processos
                        </th>
                        <th
                          className="px-3 py-4 sm:px-6 text-center font-semibold"
                          role="columnheader"
                        >
                          📈 Crescimento Efetivo
                        </th>
                        <th
                          className="px-3 py-4 sm:px-6 text-center font-semibold"
                          role="columnheader"
                        >
                          📊 Crescimento Processos
                        </th>
                        <th
                          className="px-3 py-4 sm:px-6 text-center font-semibold"
                          role="columnheader"
                        >
                          ⚖️ Relação
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50" role="row">
                        <td
                          className="px-3 py-4 sm:px-6 font-medium text-[var(--military-green)]"
                          role="cell"
                        >
                          2020
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          35
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          -
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-gray-500"
                          role="cell"
                        >
                          Base
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-gray-500"
                          role="cell"
                        >
                          -
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-gray-500"
                          role="cell"
                        >
                          -
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50" role="row">
                        <td
                          className="px-3 py-4 sm:px-6 font-medium text-[var(--military-green)]"
                          role="cell"
                        >
                          2021
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          45
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          45
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +29%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          Início
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center"
                          role="cell"
                        >
                          1:1
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50" role="row">
                        <td
                          className="px-3 py-4 sm:px-6 font-medium text-[var(--military-green)]"
                          role="cell"
                        >
                          2022
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          57
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          79
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +27%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +76%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-orange-600 font-medium"
                          role="cell"
                        >
                          1:1.4
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50" role="row">
                        <td
                          className="px-3 py-4 sm:px-6 font-medium text-[var(--military-green)]"
                          role="cell"
                        >
                          2023
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          81
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          83
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +42%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +5%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center"
                          role="cell"
                        >
                          1:1
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50" role="row">
                        <td
                          className="px-3 py-4 sm:px-6 font-medium text-[var(--military-green)]"
                          role="cell"
                        >
                          2024
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          83
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          89
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +2%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +7%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-red-600 font-medium"
                          role="cell"
                        >
                          1:1.1
                        </td>
                      </tr>
                      <tr
                        className="bg-yellow-50 border-b-2 border-yellow-400"
                        role="row"
                      >
                        <td
                          className="px-3 py-4 sm:px-6 font-bold text-[var(--military-green)]"
                          role="cell"
                        >
                          2025
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          89
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-[var(--institutional-blue)] font-bold"
                          role="cell"
                        >
                          43*
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600"
                          role="cell"
                        >
                          +7%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-red-600"
                          role="cell"
                        >
                          -52%
                        </td>
                        <td
                          className="px-3 py-4 sm:px-6 text-center text-green-600 font-bold"
                          role="cell"
                        >
                          1:0.5
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Versão Mobile - Cards */}
                <div className="md:hidden space-y-4 p-4">
                  {[
                    {
                      year: 2020,
                      efetivo: 35,
                      processos: "-",
                      crescEfetivo: "Base",
                      crescProcessos: "-",
                      relacao: "-",
                    },
                    {
                      year: 2021,
                      efetivo: 45,
                      processos: 45,
                      crescEfetivo: "+29%",
                      crescProcessos: "Início",
                      relacao: "1:1",
                    },
                    {
                      year: 2022,
                      efetivo: 57,
                      processos: 79,
                      crescEfetivo: "+27%",
                      crescProcessos: "+76%",
                      relacao: "1:1.4",
                    },
                    {
                      year: 2023,
                      efetivo: 81,
                      processos: 83,
                      crescEfetivo: "+42%",
                      crescProcessos: "+5%",
                      relacao: "1:1",
                    },
                    {
                      year: 2024,
                      efetivo: 83,
                      processos: 89,
                      crescEfetivo: "+2%",
                      crescProcessos: "+7%",
                      relacao: "1:1.1",
                    },
                    {
                      year: 2025,
                      efetivo: 89,
                      processos: "43*",
                      crescEfetivo: "+7%",
                      crescProcessos: "-52%",
                      relacao: "1:0.5",
                      critical: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={item.year}
                      className={`rounded-lg p-4 border-l-4 ${
                        item.critical
                          ? "bg-yellow-50 border-yellow-400"
                          : "bg-gray-50 border-blue-400"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold text-[var(--military-green)]">
                          {item.year}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            item.critical
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-blue-200 text-blue-800"
                          }`}
                        >
                          {item.critical ? "Crítico" : "Normal"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center">
                          <div className="text-xs text-gray-500">
                            👥 Efetivo
                          </div>
                          <div className="text-xl font-bold text-[var(--institutional-blue)]">
                            {item.efetivo}
                          </div>
                          <div className="text-xs text-green-600">
                            {item.crescEfetivo}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500">
                            📋 Processos
                          </div>
                          <div className="text-xl font-bold text-[var(--institutional-blue)]">
                            {item.processos}
                          </div>
                          <div
                            className={`text-xs ${
                              item.crescProcessos.includes("-")
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                          >
                            {item.crescProcessos}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200 text-center">
                        <div className="text-xs text-gray-500">⚖️ Relação</div>
                        <div className="font-medium">{item.relacao}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 sm:p-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-blue-600 font-medium">
                      * 43 processos realizados até o momento. Projeção de 104
                      processos para o ano completo.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[var(--military-green)] mb-2 text-sm sm:text-base">
                        Situação Atual
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Com o efetivo atual, chegamos ao nosso limite
                        operacional
                      </p>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[var(--institutional-blue)] mb-2 text-sm sm:text-base">
                        Crescimento 2020-2024
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Efetivo:{" "}
                        <span className="font-bold text-green-600">+154%</span>{" "}
                        | Processos:{" "}
                        <span className="font-bold text-green-600">+98%</span>
                      </p>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[var(--alert-red)] mb-2 text-sm sm:text-base">
                        Projeção 2025
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        104 processos projetados vs 89 de capacidade
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 6: Síntese da Evolução Estratégica */}
        <SpotlightSection id="sintese-evolucao" className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Transição para Conclusão */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Evolução Documentada • Maturidade Comprovada • Futuro
                  Planejado
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Conclusão */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center mt-16 py-8 border-t border-gray-200"
            >
              <h3 className="text-2xl font-bold text-[var(--military-green)] mb-6">
                Síntese da Evolução Estratégica
              </h3>
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-lg text-[var(--text-gray)]">
                  A trajetória da Base Administrativa evidencia uma{" "}
                  <strong>evolução madura e estratégica</strong>,
                  consolidando-se como referência em gestão de processos
                  licitatórios no setor de saúde militar.
                </p>
                <p className="text-base text-[var(--softGray)]">
                  O crescimento de <strong>154% no efetivo</strong> acompanhou
                  sistematicamente a demanda até 2024, demonstrando planejamento
                  eficaz e capacidade adaptativa. A correlação direta entre
                  pessoal e processamento confirma nossa evolução como
                  organização de alta performance.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-6">
                  <p className="text-sm text-blue-800 italic">
                    "Os dados de 2025 refletem um novo patamar de maturidade
                    organizacional, com 89 pessoas preparadas para os desafios
                    futuros da administração militar."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* Botão Próximo */}
        {!isSpotlightMode && (
          <NextButton to="/dashboard" label="Ver Painel Executivo" />
        )}
      </div>
    </div>
  );
}
