import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import LogoBase from "@/components/ui/logo-base";

export default function SplashScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      icon: LogoBase,
      text: "Carregando Sistema...",
      color: "text-white",
    },
    {
      icon: Users,
      text: "Analisando Dados...",
      color: "text-[var(--lightBlue)]",
    },
    {
      icon: TrendingUp,
      text: "Preparando Apresentação...",
      color: "text-[var(--lightBlue)]",
    },
    { icon: Target, text: "Pronto!", color: "text-[var(--lightBlue)]" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          // Último step, aguardar um pouco e finalizar
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Aguardar animação de saída
          }, 800);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-[var(--primaryBlue)] via-[var(--lightBlue)] to-[var(--skyBlue)] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo e Título Principal */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-xl flex items-center justify-center mr-4 bg-white/10 backdrop-blur-sm border border-[var(--borderRed)]/30 shadow-lg">
                  <LogoBase size={80} />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl font-bold text-white leading-tight">
                    GCALC/SAU
                  </h1>
                  <p className="text-xl text-[var(--lightBlue)] font-medium">
                    Sistema Interativo
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-lg mx-auto"
              >
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {SITE_CONFIG.title}
                </h2>
                <p className="text-[var(--lightBlue)]/90">
                  {SITE_CONFIG.subtitle}
                </p>
              </motion.div>
            </motion.div>

            {/* Indicador de Progresso */}
            <div className="space-y-6">
              {/* Ícone e Texto Atual */}
              <motion.div
                key={currentStep}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="flex items-center justify-center space-x-4"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  {React.createElement(steps[currentStep].icon, {
                    className: `h-8 w-8 ${steps[currentStep].color}`,
                  })}
                </motion.div>
                <span className="text-white text-lg font-medium">
                  {steps[currentStep].text}
                </span>
              </motion.div>

              {/* Barra de Progresso */}
              <div className="w-80 mx-auto">
                <div className="bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-white rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-white/70 text-sm">
                  <span>Inicializando</span>
                  <span>
                    {Math.round(((currentStep + 1) / steps.length) * 100)}%
                  </span>
                </div>
              </div>

              {/* Pontos de Progresso */}
              <div className="flex justify-center space-x-4">
                {steps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= currentStep ? "bg-white" : "bg-white/30"
                    }`}
                    animate={{
                      scale: index === currentStep ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: index === currentStep ? Infinity : 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Dados de Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 grid grid-cols-3 gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-white">89</div>
                <div className="text-white/70 text-sm">Efetivo Atual</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">104</div>
                <div className="text-white/70 text-sm">Meta 2025</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">R$ 2.1M</div>
                <div className="text-white/70 text-sm">Investimento</div>
              </div>
            </motion.div>

            {/* Rodapé */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
            >
              Apresentação Oficial • 1ª Região Militar • 2025
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
