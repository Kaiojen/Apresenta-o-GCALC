import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CRONOGRAMA_ND30_39, CRONOGRAMA_ND52 } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CronogramasTimeline() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleMonthClick = (month, type) => {
    setSelectedMonth(month);
    setSelectedType(type);
  };

  const TimelineComponent = ({ data, title, subtitle, color, type }) => (
    <Card className="mb-8 hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold" style={{ color }}>
          {title}
        </CardTitle>
        <p className="text-[var(--text-gray)]">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Linha do tempo */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
          <motion.div
            className="absolute top-1/2 left-0 h-1 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
          ></motion.div>

          {/* Marcos temporais */}
          <div className="relative flex justify-between items-center py-8">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleMonthClick(item, type)}
              >
                {/* Ícone do mês */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-white border-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ borderColor: color }}
                >
                  {item.icone}
                </div>

                {/* Nome do mês */}
                <div className="mt-3 text-center">
                  <div className="font-bold text-[var(--military-green)] text-sm">
                    {item.mes}
                  </div>
                  <div className="text-xs text-[var(--text-gray)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Clique para detalhes
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--military-green)] mb-4">
          Cronogramas de Execução
        </h2>
        <p className="text-lg text-[var(--text-gray)] max-w-4xl mx-auto">
          Estratégia de distribuição temporal que otimiza recursos humanos e
          garante especialização técnica: ND 30/39 concentrados no primeiro
          semestre para aproveitar o ciclo orçamentário, e ND 52 no segundo
          semestre para permitir planejamento técnico detalhado de materiais
          permanentes
        </p>
      </div>

      {/* Cronograma ND 30/39 */}
      <TimelineComponent
        data={CRONOGRAMA_ND30_39}
        title="ND 30/39 - Material de Consumo e Serviços"
        subtitle="Abril → Setembro (6 meses)"
        color="#4B5320"
        type="ND30_39"
      />

      {/* Cronograma ND 52 */}
      <TimelineComponent
        data={CRONOGRAMA_ND52}
        title="ND 52 - Material Permanente"
        subtitle="Outubro → Março (6 meses)"
        color="#002776"
        type="ND52"
      />

      {/* Modal de detalhes */}
      {selectedMonth && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMonth(null)}
        >
          <Card
            className="max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{selectedMonth.icone}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--military-green)]">
                      {selectedMonth.mes}
                    </h3>
                    <p className="text-sm text-[var(--text-gray)]">
                      {selectedType === "ND30_39"
                        ? "Material de Consumo/Serviços"
                        : "Material Permanente"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMonth(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-[var(--military-green)]">
                  Atividades do Mês:
                </h4>
                <ul className="space-y-2">
                  {selectedMonth.atividades.map((atividade, index) => (
                    <li
                      key={index}
                      className="text-sm text-[var(--text-gray)] flex items-start"
                    >
                      <span className="w-2 h-2 bg-[var(--military-green)] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {atividade}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-3 bg-[var(--light-background)] rounded-lg">
                <p className="text-xs text-[var(--text-gray)]">
                  <strong>Dica:</strong> Este cronograma otimizado permite
                  melhor distribuição da carga de trabalho e evita sobreposições
                  críticas.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Vantagens da Separação Temporal */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              📈 Vantagens da Separação Temporal
            </h3>
            <ul className="space-y-2 text-sm text-green-600">
              <li>• Evita sobrecarga de trabalho simultâneo</li>
              <li>• Permite foco especializado em cada tipo</li>
              <li>• Otimiza uso de recursos humanos</li>
              <li>• Reduz erros por pressa ou acúmulo</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              🎯 Resultados Esperados
            </h3>
            <ul className="space-y-2 text-sm text-blue-600">
              <li>• 30% de redução no tempo de ciclo</li>
              <li>• 95% de cumprimento de prazos</li>
              <li>• Melhor qualidade dos processos</li>
              <li>• Maior satisfação das OMs atendidas</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
