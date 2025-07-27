import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
  Line,
  ComposedChart,
  LabelList,
} from "recharts";
import { ORCAMENTO_2024 } from "@/lib/constants";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, AlertCircle } from "lucide-react";

export default function OrcamentoChart({
  showOnlyBudget = false,
  showOnlyEconomicidade = false,
}) {
  // Se deve mostrar apenas economicidade
  if (showOnlyEconomicidade) {
    return (
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={[
                    { mes: "Jan", homologado: 480.0, economia: 64.08 },
                    { mes: "Fev", homologado: 15843264.8, economia: 47.37 },
                    { mes: "Mar", homologado: 14134925.23, economia: 3.59 },
                    { mes: "Abr", homologado: 1649903.57, economia: 36.0 },
                    { mes: "Mai", homologado: 40976963.93, economia: 54.81 },
                    { mes: "Jun", homologado: 3503772.64, economia: 77.21 },
                    { mes: "Jul", homologado: 10644810.73, economia: 49.03 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) =>
                      `${(value / 1000000).toFixed(1)}M`
                    }
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 100]}
                  />
                  <Tooltip
                    formatter={(value, name) => {
                      if (name === "Valor Homologado") {
                        return formatCurrency(value);
                      }
                      return `${value.toFixed(2)}%`;
                    }}
                    labelStyle={{ color: "#333" }}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="homologado"
                    fill="#22c55e"
                    name="Valor Homologado"
                    barSize={40}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="economia"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="% Economia"
                    dot={{ fill: "#3b82f6", r: 6 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-blue-800">
                <strong>💡 Economicidade:</strong> Representa a eficiência
                obtida nos processos licitatórios, calculada pela diferença
                entre o valor estimado inicial e o valor efetivamente
                homologado.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-2xl font-bold text-[var(--military-green)]">
                  R$ 87,2M
                </div>
                <div className="text-sm text-gray-600">Total Homologado</div>
                <div className="text-xs text-gray-500 mt-1">Jan-Jul 2025</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center p-4 bg-blue-50 rounded-lg"
              >
                <div className="text-2xl font-bold text-blue-600">47,3%</div>
                <div className="text-sm text-gray-600">Economia Média</div>
                <div className="text-xs text-gray-500 mt-1">7 meses</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="text-center p-4 bg-green-50 rounded-lg"
              >
                <div className="text-2xl font-bold text-green-600">77,2%</div>
                <div className="text-sm text-gray-600">Maior Economia</div>
                <div className="text-xs text-gray-500 mt-1">Junho 2025</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-center p-4 bg-yellow-50 rounded-lg"
              >
                <div className="text-2xl font-bold text-yellow-600">104</div>
                <div className="text-sm text-gray-600">Processos Previstos</div>
                <div className="text-xs text-gray-500 mt-1">Ano completo</div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }
  // Dados 2025 fornecidos pelo usuário
  const orcamento2025 = {
    consumoND30: 81736063.61,
    servicoND37_39: 16231085.72,
    materialPermanenteND52: 12295647.12,
    total: 110262796.45,
  };

  const data = [
    {
      categoria: "Consumo ND 30",
      valor2024: ORCAMENTO_2024.consumoND30,
      valor2025: orcamento2025.consumoND30,
      percentual2024: Math.round(
        (ORCAMENTO_2024.consumoND30 / ORCAMENTO_2024.total) * 100
      ),
      percentual2025: Math.round(
        (orcamento2025.consumoND30 / orcamento2025.total) * 100
      ),
      crescimento: Math.round(
        ((orcamento2025.consumoND30 - ORCAMENTO_2024.consumoND30) /
          ORCAMENTO_2024.consumoND30) *
          100
      ),
      cor: "#4B5320",
    },
    {
      categoria: "Serviço ND 37/39",
      valor2024: ORCAMENTO_2024.servicoND37_39,
      valor2025: orcamento2025.servicoND37_39,
      percentual2024: Math.round(
        (ORCAMENTO_2024.servicoND37_39 / ORCAMENTO_2024.total) * 100
      ),
      percentual2025: Math.round(
        (orcamento2025.servicoND37_39 / orcamento2025.total) * 100
      ),
      crescimento: Math.round(
        ((orcamento2025.servicoND37_39 - ORCAMENTO_2024.servicoND37_39) /
          ORCAMENTO_2024.servicoND37_39) *
          100
      ),
      cor: "#002776",
    },
    {
      categoria: "Mat Permanente ND 52",
      valor2024: ORCAMENTO_2024.materialPermanenteND52,
      valor2025: orcamento2025.materialPermanenteND52,
      percentual2024: Math.round(
        (ORCAMENTO_2024.materialPermanenteND52 / ORCAMENTO_2024.total) * 100
      ),
      percentual2025: Math.round(
        (orcamento2025.materialPermanenteND52 / orcamento2025.total) * 100
      ),
      crescimento: Math.round(
        ((orcamento2025.materialPermanenteND52 -
          ORCAMENTO_2024.materialPermanenteND52) /
          ORCAMENTO_2024.materialPermanenteND52) *
          100
      ),
      cor: "#FFD700",
    },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatCurrencyShort = (value) => {
    if (value >= 1000000) {
      return `R$ ${(value / 1000000).toFixed(1)}M`;
    }
    return formatCurrency(value);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data2024 = payload.find((p) => p.dataKey === "valor2024");
      const data2025 = payload.find((p) => p.dataKey === "valor2025");
      const originalData = data.find((d) => d.categoria === label);

      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-[var(--military-green)] mb-2">
            {label}
          </p>
          {data2024 && (
            <p className="text-sm">
              <span className="font-medium">2024:</span>{" "}
              {formatCurrency(data2024.value)}
            </p>
          )}
          {data2025 && (
            <p className="text-sm">
              <span className="font-medium">2025:</span>{" "}
              {formatCurrency(data2025.value)}
            </p>
          )}
          {originalData && (
            <p
              className="text-sm mt-1 font-medium"
              style={{ color: originalData.crescimento > 0 ? "green" : "red" }}
            >
              Crescimento: {originalData.crescimento > 0 ? "+" : ""}
              {originalData.crescimento}%
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  // Cálculos de performance
  const crescimentoTotal = Math.round(
    ((orcamento2025.total - ORCAMENTO_2024.total) / ORCAMENTO_2024.total) * 100
  );
  const maiorCrescimento = Math.max(...data.map((d) => d.crescimento));
  const categoriaDestaque = data.find(
    (d) => d.crescimento === maiorCrescimento
  );

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="space-y-6"
    >
      {/* Card Principal com Indicadores */}
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <CardTitle className="text-xl font-bold text-[var(--military-green)] flex items-center space-x-2">
                <DollarSign className="h-6 w-6" />
                <span>Comparativo Orçamentário 2024 × 2025</span>
              </CardTitle>
              <p className="text-sm text-[var(--text-gray)] mt-1">
                Análise comparativa por categoria de despesa
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-xl font-bold text-[var(--institutional-blue)]">
                  {formatCurrencyShort(ORCAMENTO_2024.total)}
                </div>
                <div className="text-xs text-[var(--text-gray)]">2024</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[var(--primaryBlueDark)]">
                  {formatCurrencyShort(orcamento2025.total)}
                </div>
                <div className="text-xs text-[var(--text-gray)]">2025</div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Indicadores de Performance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-green-50 border border-green-200 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <div>
                  <div className="text-lg font-bold text-green-600">
                    +{crescimentoTotal}%
                  </div>
                  <div className="text-sm text-green-700">
                    Crescimento Total
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="text-lg font-bold text-blue-600">
                    {formatCurrencyShort(
                      orcamento2025.total - ORCAMENTO_2024.total
                    )}
                  </div>
                  <div className="text-sm text-blue-700">Aumento Nominal</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
                <div>
                  <div className="text-lg font-bold text-yellow-600">ND 30</div>
                  <div className="text-sm text-yellow-700">Maior Impacto</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Gráfico Principal */}
          <div className="h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="categoria"
                  tick={{ fontSize: 12, fill: "#374151" }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#374151" }}
                  tickFormatter={(value) =>
                    `R$ ${(value / 1000000).toFixed(0)}M`
                  }
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="top"
                  height={36}
                  wrapperStyle={{ paddingBottom: "10px" }}
                />
                <Bar
                  dataKey="valor2024"
                  fill="#94A3B8"
                  fillOpacity={0.8}
                  name="2024"
                >
                  <LabelList
                    dataKey="valor2024"
                    position="top"
                    formatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  />
                </Bar>
                <Bar dataKey="valor2025" fill="#2563EB" name="2025">
                  <LabelList
                    dataKey="valor2025"
                    position="top"
                    formatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Cards Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <motion.div
                key={item.categoria}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.cor }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--text-gray)]">
                      {item.categoria}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <div className="text-xs text-gray-500">2024</div>
                      <div className="text-sm font-bold text-gray-700">
                        {formatCurrencyShort(item.valor2024)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500">2025</div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: item.cor }}
                      >
                        {formatCurrencyShort(item.valor2025)}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Crescimento</span>
                      <span
                        className={`text-sm font-bold ${
                          item.crescimento > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {item.crescimento > 0 ? "+" : ""}
                        {item.crescimento}%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Evolução Mensal 2025 - Só mostrar se não for showOnlyBudget */}
      {!showOnlyBudget && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[var(--military-green)]">
                Economicidade 2025 - Valores Homologados
              </CardTitle>
              <p className="text-sm text-[var(--text-gray)] mt-1">
                Acompanhamento mensal dos valores homologados e economia gerada
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={[
                      { mes: "Jan", homologado: 480.0, economia: 64.08 },
                      { mes: "Fev", homologado: 15843264.8, economia: 47.37 },
                      { mes: "Mar", homologado: 14134925.23, economia: 3.59 },
                      { mes: "Abr", homologado: 1649903.57, economia: 36.0 },
                      { mes: "Mai", homologado: 40976963.93, economia: 54.81 },
                      { mes: "Jun", homologado: 3503772.64, economia: 77.21 },
                      { mes: "Jul", homologado: 10644810.73, economia: 49.03 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                    <YAxis
                      yAxisId="left"
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) =>
                        `${(value / 1000000).toFixed(1)}M`
                      }
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === "Valor Homologado") {
                          return [
                            formatCurrencyShort(value),
                            "Valor Homologado",
                          ];
                        }
                        return [`${value}%`, "% Economia"];
                      }}
                    />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="homologado"
                      fill="#16A34A"
                      name="Valor Homologado"
                      radius={[4, 4, 0, 0]}
                    >
                      <LabelList
                        dataKey="homologado"
                        position="top"
                        formatter={(value) =>
                          value > 1000000
                            ? `${(value / 1000000).toFixed(1)}M`
                            : `${(value / 1000).toFixed(0)}K`
                        }
                      />
                    </Bar>
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="economia"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{ fill: "#3B82F6", r: 4 }}
                      name="% Economia"
                    >
                      <LabelList
                        dataKey="economia"
                        position="top"
                        formatter={(value) => `${value}%`}
                      />
                    </Line>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Explicação da economicidade */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>💡 Economicidade:</strong> Representa a eficiência
                  obtida nos processos licitatórios, calculada pela diferença
                  entre o valor estimado inicial e o valor efetivamente
                  homologado. Esta métrica demonstra a capacidade da Base em
                  otimizar recursos públicos, garantindo a melhor relação
                  custo-benefício nas aquisições e contratações, em conformidade
                  com os princípios da administração pública.
                </p>
              </div>

              {/* Resumo dos dados */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-green-600">
                    R$ 87,2M
                  </div>
                  <div className="text-sm text-gray-600">Total Homologado</div>
                  <div className="text-xs text-gray-500">Jan-Jul 2025</div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-600">47,3%</div>
                  <div className="text-sm text-gray-600">Economia Média</div>
                  <div className="text-xs text-gray-500">7 meses</div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-yellow-600">77,2%</div>
                  <div className="text-sm text-gray-600">Maior Economia</div>
                  <div className="text-xs text-gray-500">Junho 2025</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-gray-600">104</div>
                  <div className="text-sm text-gray-600">
                    Processos Previstos
                  </div>
                  <div className="text-xs text-gray-500">Ano completo</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}
