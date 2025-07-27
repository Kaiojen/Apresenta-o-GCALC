import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Calculator,
} from "lucide-react";

export default function ScenarioSimulator() {
  const [additionalPeople, setAdditionalPeople] = useState([0]);

  // Dados base
  const currentEffective = 89;
  const currentProcesses = 43; // Processos atuais realizados
  const targetProcesses = 104; // Meta/projeção para 2025
  const currentCapacity = 85;

  // Cálculos dinâmicos
  const newEffective = currentEffective + additionalPeople[0];
  const newCapacity = Math.min(
    100,
    Math.round((newEffective / currentEffective) * currentCapacity)
  );
  const possibleProcesses = Math.min(
    targetProcesses,
    Math.round((newEffective / currentEffective) * currentProcesses)
  );
  const deficit = Math.max(0, targetProcesses - possibleProcesses);
  // Removido: emergencyCost e annualSavings

  const scenarios = [
    {
      title: "Cenário Atual",
      subtitle: "Capacidade atual vs Meta 2025",
      people: currentEffective,
      capacity: currentCapacity,
      processes: currentProcesses,
      deficit:
        targetProcesses -
        Math.min(
          targetProcesses,
          Math.round((currentEffective / currentEffective) * targetProcesses)
        ),
      status: "critical",
    },
    {
      title: "Cenário Proposto",
      subtitle: `Com reforço (+${additionalPeople[0]} pessoas)`,
      people: newEffective,
      capacity: newCapacity,
      processes: Math.min(targetProcesses, possibleProcesses),
      deficit: deficit,
      status: deficit === 0 ? "success" : "warning",
    },
  ];

  // Removido: formatCurrency function

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "border-[var(--success-green)] bg-green-50";
      case "warning":
        return "border-[var(--brasao-gold)] bg-yellow-50";
      case "critical":
        return "border-[var(--alert-red)] bg-red-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-6 w-6 text-[var(--success-green)]" />;
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-[var(--brasao-gold)]" />;
      case "critical":
        return <AlertTriangle className="h-6 w-6 text-[var(--alert-red)]" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto"
    >
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[var(--military-green)] flex items-center justify-center space-x-2">
            <Calculator className="h-8 w-8" />
            <span>Simulador de Capacidade vs Projeção</span>
          </CardTitle>
          <p className="text-[var(--text-gray)]">
            Ajuste o número de pessoas e veja o impacto na capacidade de atender
            a meta de 104 processos
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Controle do simulador */}
          <div className="bg-gradient-to-r from-[var(--light-background)] to-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <label className="text-lg font-semibold text-[var(--military-green)]">
                Adicionar pessoas ao efetivo:
              </label>
              <div className="text-2xl font-bold text-[var(--institutional-blue)]">
                +{additionalPeople[0]}
              </div>
            </div>

            <Slider
              value={additionalPeople}
              onValueChange={setAdditionalPeople}
              max={20}
              min={0}
              step={1}
              className="mb-4"
            />

            <div className="flex justify-between text-sm text-[var(--text-gray)]">
              <span>0 (Manter atual)</span>
              <span>20 (Máximo simulado)</span>
            </div>

            {/* Botões de cenários pré-definidos */}
            <div className="flex space-x-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdditionalPeople([0])}
                className="text-[var(--alert-red)] border-[var(--alert-red)]"
              >
                Cenário Atual
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdditionalPeople([15])}
                className="text-[var(--success-green)] border-[var(--success-green)]"
              >
                Proposta (+15)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdditionalPeople([10])}
                className="text-[var(--brasao-gold)] border-[var(--brasao-gold)]"
              >
                Intermediário (+10)
              </Button>
            </div>
          </div>

          {/* Comparação de cenários */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 rounded-lg border-2 ${getStatusColor(
                  scenario.status
                )}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--military-green)]">
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-[var(--text-gray)]">
                      {scenario.subtitle}
                    </p>
                  </div>
                  {getStatusIcon(scenario.status)}
                </div>

                <div className="space-y-4">
                  {/* Métricas principais */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Users className="h-4 w-4 text-[var(--military-green)]" />
                        <span className="text-sm font-medium">Efetivo</span>
                      </div>
                      <div className="text-2xl font-bold text-[var(--military-green)]">
                        {scenario.people}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <FileText className="h-4 w-4 text-[var(--institutional-blue)]" />
                        <span className="text-sm font-medium">Processos</span>
                      </div>
                      <div className="text-2xl font-bold text-[var(--institutional-blue)]">
                        {scenario.processes}
                      </div>
                    </div>
                  </div>

                  {/* Barra de capacidade */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Capacidade</span>
                      <span>{scenario.capacity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full ${
                          scenario.capacity >= 100
                            ? "bg-[var(--success-green)]"
                            : scenario.capacity >= 85
                            ? "bg-[var(--brasao-gold)]"
                            : "bg-[var(--alert-red)]"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${scenario.capacity}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Déficit */}
                  {scenario.deficit > 0 && (
                    <div className="bg-white/50 p-3 rounded border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-[var(--alert-red)]">
                          Déficit:
                        </span>
                        <span className="font-bold text-[var(--alert-red)]">
                          {scenario.deficit} processos
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Status */}
                  <div className="text-center">
                    {scenario.deficit === 0 ? (
                      <span className="text-sm font-medium text-[var(--success-green)]">
                        ✅ Todas as demandas atendidas
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-[var(--alert-red)]">
                        ⚠️ Demanda não atendida
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Análise da correlação */}
          {additionalPeople[0] > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-[var(--military-green)] to-[var(--institutional-blue)] text-white p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                Análise da Evolução de Capacidade
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold">
                    {Math.round((newEffective / currentEffective - 1) * 100)}%
                  </div>
                  <div className="text-sm opacity-90">
                    Crescimento do efetivo
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {Math.round(
                      (possibleProcesses / currentProcesses - 1) * 100
                    )}
                    %
                  </div>
                  <div className="text-sm opacity-90">
                    Aumento da capacidade
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm opacity-90">
                  À medida que evoluímos nosso pessoal, também evoluímos nossa
                  capacidade de processamento
                </p>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
