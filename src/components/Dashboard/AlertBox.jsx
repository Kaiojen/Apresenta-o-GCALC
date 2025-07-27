import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function AlertBox() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "backOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="border-l-4 border-l-[var(--danger)] bg-gradient-to-r from-red-50/10 to-orange-50/10 badm-shadow-card hover:badm-shadow-card-hover transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-[var(--danger)] health-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[var(--danger)] mb-2">
                ⚠️ ATENÇÃO
              </h3>
              <p className="text-[var(--text-gray)] leading-relaxed">
                Sem reforço de efetivo,{" "}
                <strong className="text-[var(--danger)]">
                  40% da demanda de 2025 ficará descoberta
                </strong>
                , impactando diretamente o atendimento às OMs da 1ª RM.
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg border border-red-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-[var(--text-gray)]">
                    Déficit projetado:
                  </span>
                  <span className="font-bold text-[var(--danger)]">
                    15 processos não atendidos
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm mt-1">
                  <span className="font-medium text-[var(--text-gray)]">
                    Impacto financeiro:
                  </span>
                  <span className="font-bold text-[var(--danger)]">
                    R$ 12M em compras emergenciais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
