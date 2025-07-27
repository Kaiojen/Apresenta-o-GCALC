import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpotlight } from "@/contexts/SpotlightContext";

export default function SpotlightSection({
  id,
  children,
  className = "",
  fullScreen = true, // Se deve ocupar tela toda quando ativo
}) {
  const { isSpotlightMode, isCurrentTopic } = useSpotlight();
  const isActive = isCurrentTopic(id);

  // Se não estiver em modo spotlight, renderiza normal
  if (!isSpotlightMode) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  // Em modo spotlight, mostra apenas se for o tópico ativo
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={id}
          id={id}
          className={`${className} ${
            fullScreen
              ? "fixed inset-0 min-h-screen flex items-center justify-center bg-[var(--light-background)] z-50 overflow-auto"
              : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-full max-h-screen overflow-auto py-8">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
