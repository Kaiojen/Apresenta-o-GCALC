import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";

export default function IcebergVisualization() {
  const [selectedPart, setSelectedPart] = useState(null);

  const icebergData = {
    visible: {
      title: "IN 52 - Material Permanente",
      percentage: 35,
      description: "Processos com alta visibilidade organizacional",
      details: {
        processos: "30-40 pregões/ano",
        ciclo: "Flexível (Fora do Mar)",
        complexidade: "Média",
        volume_trabalho: "Moderado",
        visibilidade: "Alta",
        caracteristicas: [
          "📊 Elevada visibilidade organizacional",
          "⏰ Cronogramas flexíveis e adaptáveis",
          "📋 Planejamento com maior margem temporal",
          "🤝 Interface direta com fornecedores especializados",
          "💰 Valores unitários significativos",
          "🎯 Concentração de atenção gerencial",
        ],
        problema:
          "Recebe atenção desproporcional em relação ao volume de recursos operacionais demandados",
      },
    },
    submerged: {
      title: "EM 30, 37, 39",
      subtitle: "Material de Consumo e Serviços Especializados",
      percentage: 65,
      description: "Concentração da demanda operacional crítica",
      details: {
        processos: "240+ pregões/ano",
        ciclo: "Rígido (Abr-Set)",
        complexidade: "Crítica",
        volume_trabalho: "Intenso",
        visibilidade: "Baixa",
        caracteristicas: [
          "🔥 Demanda operacional contínua e crítica",
          "⚡ Cronogramas inflexíveis com prazos rígidos",
          "🏥 Múltiplas interfaces com OMs do complexo",
          "📈 Volume de trabalho de alta densidade",
          "💊 Impacto direto na continuidade assistencial",
          "👥 Demanda operacional concentrada",
          "🚨 Gargalo operacional subestimado",
        ],
        problema:
          "Concentra 65% da demanda operacional mas recebe atenção organizacional desproporcional",
      },
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-[var(--primaryBlue)] mb-4">
          Análise de Demanda Operacional
        </h2>
        <p className="text-xl text-[var(--softGray)] mb-2">
          Mapeamento da complexidade real dos processos de aquisição
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
          <AlertTriangle className="h-4 w-4" />
          Análise: Percepção vs Realidade Operacional
        </div>
      </motion.div>

      <div className="relative h-[500px] overflow-hidden rounded-xl shadow-lg">
        {/* Background gradiente oceano simplificado */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-400 to-blue-800">
          {/* Sol/luz ambiente */}
          <div className="absolute top-8 right-12 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-60" />
        </div>

        {/* Linha da água simples */}
        <div className="absolute top-[35%] left-0 right-0 h-1 bg-white/60 z-20">
          <div className="h-full bg-white/80" />
        </div>

        {/* SVG do Iceberg simplificado */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Definições de gradientes */}
          <defs>
            <linearGradient
              id="iceGradientTop"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient
              id="iceGradientBottom"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.9" />
            </linearGradient>
            <filter id="shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Parte submersa (65%) */}
          <motion.path
            d="M400 175 L320 175 L280 230 L270 320 L280 420 L350 480 L450 480 L520 420 L530 320 L520 230 L480 175 Z"
            fill="url(#iceGradientBottom)"
            filter="url(#shadow)"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedPart("submerged")}
            className="cursor-pointer"
          />

          {/* Parte visível (35%) */}
          <motion.path
            d="M400 175 L350 175 L330 130 L350 90 L380 60 L400 50 L420 60 L450 90 L470 130 L450 175 Z"
            fill="url(#iceGradientTop)"
            filter="url(#shadow)"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedPart("visible")}
            className="cursor-pointer"
          />

          {/* Textos */}
          <motion.text
            x="400"
            y="110"
            textAnchor="middle"
            fill="#1e40af"
            fontSize="24"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            35%
          </motion.text>
          <motion.text
            x="400"
            y="130"
            textAnchor="middle"
            fill="#1e40af"
            fontSize="14"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            ND 52
          </motion.text>

          <motion.text
            x="400"
            y="340"
            textAnchor="middle"
            fill="white"
            fontSize="36"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            65%
          </motion.text>
          <motion.text
            x="400"
            y="365"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            ND 30, 37, 39
          </motion.text>
        </svg>

        {/* Labels flutuantes reposicionados */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
          className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-l-green-500"
        >
          <h3 className="font-bold text-[var(--primaryBlue)] text-sm mb-1">
            IN 52 - Material Permanente
          </h3>
          <p className="text-xs text-[var(--softGray)] mb-2">
            Processos com alta visibilidade organizacional
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
              📈 Alta Visibilidade
            </span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
              ⚡ 30-40 pregões
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-l-red-500"
        >
          <h3 className="font-bold text-[var(--primaryBlueDark)] text-sm mb-1">
            EM 30, 37, 39
          </h3>
          <p className="text-xs text-[var(--softGray)] mb-1 font-medium">
            Material de Consumo e Serviços Especializados
          </p>
          <p className="text-xs text-[var(--softGray)] mb-2 font-bold text-red-600">
            Concentração da demanda operacional crítica
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-1 bg-red-100 text-red-700 rounded">
              🚨 240+ pregões
            </span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">
              👥 Alta Densidade
            </span>
          </div>
        </motion.div>

        {/* Indicador de linha d'água */}
        <div className="absolute top-[35%] -translate-y-1/2 left-6 text-sm text-white font-bold bg-blue-600/80 px-3 py-2 rounded-lg backdrop-blur-sm">
          💧 Linha da Percepção
        </div>
      </div>

      {/* Modal de detalhes */}
      <AnimatePresence>
        {selectedPart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPart(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--primaryBlue)] mb-2">
                        {icebergData[selectedPart].title}
                      </h3>
                      {icebergData[selectedPart].subtitle && (
                        <p className="text-[var(--primaryBlueDark)] font-semibold text-lg mb-2">
                          {icebergData[selectedPart].subtitle}
                        </p>
                      )}
                      <p className="text-[var(--softGray)] font-medium">
                        {icebergData[selectedPart].description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedPart(null)}
                      className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Métricas */}
                    <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--primaryBlueDark)] mb-1">
                          {icebergData[selectedPart].details.processos}
                        </div>
                        <div className="text-sm text-[var(--softGray)]">
                          Volume Anual
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[var(--primaryBlueDark)] mb-1">
                          {icebergData[selectedPart].details.complexidade}
                        </div>
                        <div className="text-sm text-[var(--softGray)]">
                          Complexidade
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[var(--primaryBlueDark)] mb-1">
                          {icebergData[selectedPart].details.ciclo}
                        </div>
                        <div className="text-sm text-[var(--softGray)]">
                          Ciclo Operacional
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[var(--primaryBlueDark)] mb-1">
                          {icebergData[selectedPart].details.visibilidade}
                        </div>
                        <div className="text-sm text-[var(--softGray)]">
                          Visibilidade
                        </div>
                      </div>
                    </div>

                    {/* Características */}
                    <div>
                      <h4 className="font-bold text-[var(--primaryBlue)] mb-4 text-lg">
                        Características Operacionais:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {icebergData[selectedPart].details.caracteristicas.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex items-start bg-white p-3 rounded-lg border-l-4 border-l-blue-200"
                            >
                              <span className="text-sm text-[var(--softGray)] leading-relaxed">
                                {item}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Problema identificado */}
                    <div
                      className={`p-4 rounded-xl border-l-4 ${
                        selectedPart === "submerged"
                          ? "bg-red-50 border-l-red-500"
                          : "bg-yellow-50 border-l-yellow-500"
                      }`}
                    >
                      <h4
                        className={`font-bold mb-2 ${
                          selectedPart === "submerged"
                            ? "text-red-700"
                            : "text-yellow-700"
                        }`}
                      >
                        🎯 Análise Identificada:
                      </h4>
                      <p
                        className={`text-sm leading-relaxed ${
                          selectedPart === "submerged"
                            ? "text-red-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {icebergData[selectedPart].details.problema}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruções */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="text-center mt-6"
      >
        <p className="text-sm text-[var(--softGray)] flex items-center justify-center gap-2">
          💡 Clique nas seções do gráfico para análise detalhada
        </p>
      </motion.div>
    </div>
  );
}
