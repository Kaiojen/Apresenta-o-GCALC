import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
  LabelList,
  Cell,
} from "recharts";
import { EFETIVO_DATA, PROCESSOS_DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export default function EvolutionChart({ type = "combined" }) {
  // Dados específicos baseado no tipo
  const getChartData = () => {
    if (type === "pessoal") {
      return EFETIVO_DATA.map((item) => ({
        year: item.year,
        value: item.pessoas,
        label: "Pessoas",
      }));
    } else if (type === "processos") {
      // Dados dos processos com cores diferentes para cada período
      return PROCESSOS_DATA.map((item) => ({
        year: item.year,
        value: item.processos,
        label: "Processos",
      }));
    } else {
      // Dados combinados - usa projeção de 104 para 2025
      return EFETIVO_DATA.map((item) => {
        const processosItem = PROCESSOS_DATA.find((p) => p.year === item.year);
        let processosValue = processosItem ? processosItem.processos : 0;

        // Para o gráfico de correlação, usar projeção de 104 em 2025
        if (item.year === 2025) {
          processosValue = 104;
        }

        return {
          year: item.year,
          efetivo: item.pessoas,
          processos: processosValue,
        };
      });
    }
  };

  const chartData = getChartData();

  // Cores para diferentes períodos no gráfico de processos
  const getProcessColor = (year) => {
    if (year === 2020) return "#94A3B8"; // Cinza para início
    if (year === 2021) return "#60A5FA"; // Azul claro para início das operações
    if (year === 2022 || year === 2023) return "#F59E0B"; // Amarelo/dourado para período de crescimento
    if (year === 2024 || year === 2025) return "#10B981"; // Verde para período atual/recente
    return "#6B7280";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-[var(--primaryBlue)]">{`Ano: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              <span className="font-medium">
                {type === "combined"
                  ? entry.dataKey === "efetivo"
                    ? "Efetivo"
                    : "Processos"
                  : entry.payload.label}
                :
              </span>
              {` ${entry.value}`}
              {label === 2025 && type === "processos" && (
                <span className="text-sm text-blue-600 ml-2">
                  (Projeção: 104)
                </span>
              )}
            </p>
          ))}
          {label === 2025 && type === "processos" && (
            <p className="text-sm text-blue-600 mt-2 font-medium">
              📊 Meta projetada: 104 processos
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    if (type === "pessoal") {
      // Gráfico de barras para pessoal com cor mais harmônica
      return (
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#374151" }} />
          <YAxis tick={{ fontSize: 12, fill: "#374151" }} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} fill="#2563EB">
            <LabelList
              dataKey="value"
              position="top"
              style={{ fill: "#374151", fontSize: "12px", fontWeight: "bold" }}
            />
          </Bar>
        </BarChart>
      );
    } else if (type === "processos") {
      // Gráfico de barras para processos com cores diferenciadas
      return (
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#374151" }} />
          <YAxis tick={{ fontSize: 12, fill: "#374151" }} domain={[0, 120]} />
          <Tooltip content={<CustomTooltip />} />
          {/* Linha de referência para projeção 2025 */}
          <ReferenceLine
            y={104}
            stroke="#3B82F6"
            strokeDasharray="5 5"
            label={{
              value: "Projeção 2025: 104",
              position: "topRight",
              style: { fill: "#3B82F6", fontWeight: "bold" },
            }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getProcessColor(entry.year)} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              style={{ fill: "#374151", fontSize: "12px", fontWeight: "bold" }}
            />
          </Bar>
        </BarChart>
      );
    } else {
      // Gráfico de linhas combinado (comportamento original)
      return (
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#374151" }} />
          <YAxis tick={{ fontSize: 12, fill: "#374151" }} domain={[0, 120]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="efetivo"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 2 }}
            name="Efetivo"
          />
          <Line
            type="monotone"
            dataKey="processos"
            stroke="#EF4444"
            strokeWidth={3}
            dot={{ fill: "#EF4444", strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: "#EF4444", strokeWidth: 2 }}
            name="Processos"
          />
        </LineChart>
      );
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--primaryBlue)] text-center">
            {type === "pessoal"
              ? "Efetivo"
              : type === "processos"
              ? "Processos"
              : "Evolução: Pessoas × Processos"}
          </CardTitle>
          <p className="text-center text-[var(--softGray)]">
            {type === "pessoal"
              ? "Crescimento de efetivo (2020-2025)"
              : type === "processos"
              ? "Evolução dos processos licitatórios (2020-2025)"
              : "Crescimento do efetivo versus demanda de processos (2020-2025)"}
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-96 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart()}
            </ResponsiveContainer>
          </div>

          {/* Estatísticas específicas por tipo */}
          {type === "pessoal" && (
            <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
              <h4 className="font-bold text-[var(--primaryBlue)] mb-2">
                📊 Crescimento de Efetivo
              </h4>
              <p className="text-sm text-[var(--softGray)]">
                De 2020 a 2025: crescimento de <strong>154%</strong> (35 → 89
                pessoas)
              </p>
              <p className="text-xs text-blue-600 mt-1 opacity-75">
                ⚡ Crescimento médio de 15,4 pessoas/ano
              </p>
            </div>
          )}

          {type === "processos" && (
            <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors duration-200 cursor-pointer">
              <h4 className="font-bold text-[var(--danger)] mb-2">
                📈 Crescimento da Demanda
              </h4>
              <p className="text-sm text-[var(--softGray)]">
                De 2021 a 2024: crescimento de <strong>98%</strong> (45 → 89
                processos)
              </p>
              <p className="text-sm text-[var(--softGray)] mt-2">
                <strong>Situação 2025:</strong> 43 processos realizados.
                Projeção: 104 processos
              </p>
              <p className="text-xs text-red-600 mt-1 opacity-75">
                📊 Gap atual: 61 processos entre realizado e projetado
              </p>
            </div>
          )}

          {type === "combined" && (
            <div className="bg-gradient-to-r from-green-50 to-red-50 p-4 rounded-lg hover:from-green-100 hover:to-red-100 transition-all duration-200 cursor-pointer">
              <h4 className="font-bold text-[var(--primaryBlue)] mb-2">
                📈 Correlação Identificada
              </h4>
              <p className="text-sm text-[var(--softGray)]">
                O crescimento de pessoal acompanha a demanda até 2024,
                evidenciando <strong>saturação em 2025</strong>
              </p>
              <p className="text-xs text-purple-600 mt-1 opacity-75">
                ⚖️ Razão 2025: 89 pessoas para 104 processos projetados
              </p>
            </div>
          )}

          {/* Transição para próxima seção (apenas para processos) */}
          {type === "processos" && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-lg">
                <span className="text-sm font-medium text-yellow-800">
                  Este crescimento acelerado trouxe desafios significativos...
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
