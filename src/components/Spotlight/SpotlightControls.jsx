import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpotlight } from "@/contexts/SpotlightContext";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  X,
  SkipBack,
  SkipForward,
} from "lucide-react";

export default function SpotlightControls() {
  const {
    isSpotlightMode,
    showControls,
    currentTopic,
    nextTopic,
    previousTopic,
    goToTopic,
    disableSpotlight,
    getCurrentTopics,
  } = useSpotlight();

  // Só mostrar se estiver em modo spotlight E controles estiverem visíveis
  if (!isSpotlightMode || !showControls) {
    return null;
  }

  const topics = getCurrentTopics();
  const totalTopics = topics.length;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3"
      >
        {/* Indicador de progresso */}
        <div className="text-white text-sm font-medium mr-2">
          {currentTopic + 1} / {totalTopics}
        </div>

        {/* Botão: Primeiro */}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => goToTopic(0)}
          disabled={currentTopic === 0}
          className="h-8 w-8 p-0 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SkipBack className="h-4 w-4" />
        </Button>

        {/* Botão: Anterior */}
        <Button
          size="sm"
          variant="ghost"
          onClick={previousTopic}
          disabled={currentTopic === 0}
          className="h-8 w-8 p-0 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Botão: Próximo */}
        <Button
          size="sm"
          variant="ghost"
          onClick={nextTopic}
          className="h-8 w-8 p-0 text-white hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Botão: Último */}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => goToTopic(totalTopics - 1)}
          disabled={currentTopic === totalTopics - 1}
          className="h-8 w-8 p-0 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SkipForward className="h-4 w-4" />
        </Button>

        {/* Separador */}
        <div className="w-px h-6 bg-white/30 mx-2" />

        {/* Botão: Sair */}
        <Button
          size="sm"
          variant="ghost"
          onClick={disableSpotlight}
          className="h-8 w-8 p-0 text-white hover:bg-red-500/50"
        >
          <X className="h-4 w-4" />
        </Button>
      </motion.div>

      {/* Instruções discretas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="fixed top-4 right-4 z-40 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs"
      >
        <div>→ ← Navegar | Ctrl+C Ocultar | Esc Sair | F11 Modo</div>
      </motion.div>
    </AnimatePresence>
  );
}
