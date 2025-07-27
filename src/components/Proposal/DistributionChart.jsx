import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { DISTRIBUICAO_OMS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DistributionChart() {
  const [selectedOM, setSelectedOM] = useState(null);

  // Cores para cada OM
  const colors = [
    "#4B5320", // Verde militar
    "#002776", // Azul institucional
    "#FFD700", // Dourado
    "#10B981", // Verde sucesso
    "#EF4444", // Vermelho alerta
    "#8B5CF6", // Roxo
    "#F59E0B", // Amarelo
    "#06B6D4", // Ciano
    "#84CC16", // Lima
    "#F97316", // Laranja
  ];

  const chartData = DISTRIBUICAO_OMS.map((om, index) => ({
    ...om,
    color: colors[index % colors.length],
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-[var(--military-green)]">
            {data.nome}
          </p>
          <p className="text-sm">
            <span className="font-medium">Processos:</span> {data.processos}
          </p>
          <p className="text-sm">
            <span className="font-medium">Percentual:</span> {data.percentual}%
          </p>
        </div>
      );
    }
    return null;
  };

  const handlePieClick = (data) => {
    setSelectedOM(data);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[var(--military-green)]">
            Distribuição Operacional por OM
          </CardTitle>
          <p className="text-[var(--text-gray)]">
            Implementação 2025 - Total: 290 processos estruturados
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gráfico de Pizza */}
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={40}
                    paddingAngle={2}
                    dataKey="processos"
                    onClick={handlePieClick}
                    className="cursor-pointer"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={
                          selectedOM?.nome === entry.nome ? "#000" : "none"
                        }
                        strokeWidth={selectedOM?.nome === entry.nome ? 2 : 0}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Lista detalhada */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[var(--military-green)] mb-4">
                Detalhamento por Organização Militar
              </h3>
              {chartData.map((om, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedOM?.nome === om.nome
                      ? "border-[var(--military-green)] bg-green-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedOM(om)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: om.color }}
                      />
                      <div>
                        <div className="font-medium text-[var(--military-green)]">
                          {om.nome}
                        </div>
                        <div className="text-sm text-[var(--text-gray)]">
                          {om.processos} processos ({om.percentual}%)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-lg font-bold"
                        style={{ color: om.color }}
                      >
                        {om.processos}
                      </div>
                    </div>
                  </div>

                  {/* Barra de progresso */}
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: om.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${om.percentual}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resumo estatístico */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border">
              <div className="text-2xl font-bold text-[var(--military-green)]">
                {DISTRIBUICAO_OMS.reduce((sum, om) => sum + om.processos, 0)}
              </div>
              <div className="text-sm text-[var(--text-gray)]">
                Total de Processos
              </div>
            </div>

            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border">
              <div className="text-2xl font-bold text-[var(--institutional-blue)]">
                {DISTRIBUICAO_OMS.length}
              </div>
              <div className="text-sm text-[var(--text-gray)]">
                OMs Atendidas
              </div>
            </div>

            <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border">
              <div className="text-2xl font-bold text-[var(--brasao-gold)]">
                59%
              </div>
              <div className="text-sm text-[var(--text-gray)]">
                Concentração Base ADM
              </div>
            </div>

            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border">
              <div className="text-2xl font-bold text-purple-600">41%</div>
              <div className="text-sm text-[var(--text-gray)]">
                OMs Subordinadas
              </div>
            </div>
          </motion.div>

          {/* Análise da distribuição */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-8 p-6 bg-gradient-to-r from-[var(--light-background)] to-white rounded-lg border"
          >
            <h4 className="font-bold text-[var(--military-green)] mb-3">
              Análise da Distribuição
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--text-gray)]">
              <div>
                <h5 className="font-medium text-[var(--institutional-blue)] mb-2">
                  Concentração Estratégica:
                </h5>
                <ul className="space-y-1">
                  <li>• Base ADM centraliza 59% dos processos</li>
                  <li>• HCE e HGERJ representam 25% do volume</li>
                  <li>• Demais OMs distribuem 16% restantes</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-[var(--institutional-blue)] mb-2">
                  Benefícios da Centralização:
                </h5>
                <ul className="space-y-1">
                  <li>• Economia de escala nas aquisições</li>
                  <li>• Padronização de processos</li>
                  <li>• Melhor controle de qualidade</li>
                  <li>• Redução de custos administrativos</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
