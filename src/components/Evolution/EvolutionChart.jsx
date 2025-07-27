import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
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
      return PROCESSOS_DATA.map((item) => ({
        year: item.year,
        value: item.processos,
        label: "Processos",
      }));
    } else {
      // Dados combinados (comportamento original)
      return EFETIVO_DATA.map((item) => {
        const processosItem = PROCESSOS_DATA.find((p) => p.year === item.year);
        return {
          year: item.year,
          efetivo: item.pessoas,
          processos: processosItem ? processosItem.processos : 0,
        };
      });
    }
  };

  const chartData = getChartData();

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
            </p>
          ))}
          {label >= 2024 && type !== "pessoal" && (
            <p className="text-sm text-[var(--danger)] mt-2 font-medium">
              ⚠️ Zona de Saturação
            </p>
          )}
        </div>
      );
    }
    return null;
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
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 12, fill: "#374151" }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#374151" }}
                  domain={[0, 120]}
                />
                <Tooltip content={<CustomTooltip />} />

                {/* Área de saturação */}
                <ReferenceArea
                  x1={2024}
                  x2={2025}
                  fill="#EF4444"
                  fillOpacity={0.1}
                  stroke="#EF4444"
                  strokeDasharray="5 5"
                />

                {/* Linha de capacidade máxima */}
                <ReferenceLine
                  y={89}
                  stroke="#EF4444"
                  strokeDasharray="3 3"
                  label={{ value: "Capacidade Atual", position: "topRight" }}
                />

                {/* Linha do efetivo */}
                <Line
                  type="monotone"
                  dataKey="efetivo"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 2 }}
                  name="Efetivo"
                />

                {/* Linha dos processos */}
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
            </ResponsiveContainer>
          </div>

          {/* Legenda personalizada */}
          <div className="flex justify-center space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[var(--success-green)] rounded-full"></div>
              <span className="text-sm font-medium text-[var(--text-gray)]">
                Efetivo (Pessoas)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[var(--alert-red)] rounded-full"></div>
              <span className="text-sm font-medium text-[var(--text-gray)]">
                Processos (Demanda)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-[var(--alert-red)] opacity-30"></div>
              <span className="text-sm font-medium text-[var(--alert-red)]">
                Zona de Saturação
              </span>
            </div>
          </div>

          {/* Análise textual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-l-[var(--success-green)]">
              <h4 className="font-bold text-[var(--success-green)] mb-2">
                Crescimento do Efetivo
              </h4>
              <p className="text-sm text-[var(--text-gray)]">
                De 2020 a 2025: crescimento de <strong>154%</strong> (35 → 89
                pessoas)
              </p>
              <p className="text-sm text-[var(--text-gray)] mt-1">
                Média de <strong>10,8 pessoas/ano</strong>
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border-l-4 border-l-[var(--alert-red)]">
              <h4 className="font-bold text-[var(--alert-red)] mb-2">
                Explosão da Demanda
              </h4>
              <p className="text-sm text-[var(--text-gray)]">
                De 2021 a 2025: crescimento de <strong>131%</strong> (45 → 104
                processos)
              </p>
              <p className="text-sm text-[var(--text-gray)] mt-1">
                Déficit projetado: <strong>15 processos</strong> em 2025
              </p>
            </div>
          </div>

          {/* Alerta de saturação */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-6 p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg border border-red-200"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-[var(--alert-red)] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h4 className="font-bold text-[var(--alert-red)]">
                  Ponto Crítico Atingido
                </h4>
                <p className="text-sm text-[var(--text-gray)]">
                  A partir de 2024, a demanda de processos superou a capacidade
                  do efetivo atual, criando um déficit operacional que impacta
                  diretamente o atendimento às OMs.
                </p>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
