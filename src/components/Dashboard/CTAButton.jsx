import { Button } from "@/components/ui/button";
import {
  Play,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { usePresentation } from "@/contexts/PresentationContext";

export default function CTAButton({ onClick }) {
  const { startPresentation } = usePresentation();

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="text-center"
    >
      {/* Conclusão */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mb-8 max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-[var(--primaryBlueDark)] mb-4">
          Transformando Desafios em Oportunidades
        </h3>
        <p className="text-[var(--text-gray)] mb-4">
          Os dados apresentados demonstram a evolução consistente da Base
          Administrativa do Complexo de Saúde/RJ, com crescimento de 7,2% no
          efetivo e aumento de 17% na demanda de processos para 2025.
        </p>
        <p className="text-[var(--text-gray)]">
          Com uma execução orçamentária eficiente e economicidade média de
          47,3%, estamos preparados para enfrentar os desafios do próximo
          período, sempre focados na excelência operacional e na entrega de
          resultados que beneficiem toda a estrutura de saúde militar.
        </p>
      </motion.div>

      {/* Main CTA */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="bg-gradient-to-r from-[var(--military-green)] to-[var(--institutional-blue)] rounded-2xl p-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Conheça Nossa Estratégia Completa
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Explore detalhadamente nossa trajetória, desafios atuais e as soluções
          inovadoras que estamos implementando para garantir a excelência
          contínua
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={startPresentation}
            size="lg"
            className="bg-white text-[var(--military-green)] hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Play className="h-6 w-6 mr-3 group-hover:animate-pulse" />
            INICIAR APRESENTAÇÃO INTERATIVA
            <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
