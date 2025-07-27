import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { usePresentation } from "@/contexts/PresentationContext";

export default function NextButton({ to, label, className = "" }) {
  const { nextSlide, currentSlide, totalSlides } = usePresentation();
  const navigate = useNavigate();

  // Se tem destino específico, usar navegação por rota
  const handleClick = () => {
    if (to) {
      navigate(to);
      // Pequeno delay para garantir que o ScrollToTop componente funcione
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 10);
    } else {
      nextSlide();
    }
  };

  // Não mostrar no último slide (apenas quando não tem destino específico)
  if (!to && currentSlide === totalSlides - 1) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="flex justify-center mt-12"
    >
      <Button
        onClick={handleClick}
        size="lg"
        className={`bg-[var(--institutional-blue)] hover:bg-[var(--military-green)] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}
      >
        {label || "Próxima Seção"}
        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </Button>
    </motion.div>
  );
}
