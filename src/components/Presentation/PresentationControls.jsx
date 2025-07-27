import {
  Play,
  Pause,
  Square,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Clock,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePresentation } from "@/contexts/PresentationContext";
import { useSpotlight } from "@/contexts/SpotlightContext";
import { motion, AnimatePresence } from "framer-motion";

export default function PresentationControls() {
  const {
    isPresenting,
    currentSlide,
    elapsedTime,
    isPaused,
    isFullscreen,
    totalSlides,
    currentRoute,
    startPresentation,
    exitPresentation,
    nextSlide,
    prevSlide,
    togglePause,
    toggleFullscreen,
    formatTime,
    getTotalDuration,
    getProgress,
  } = usePresentation();

  const { isSpotlightMode } = useSpotlight();

  if (!isPresenting || isSpotlightMode) return null;

  const totalDurationMs = getTotalDuration() * 1000;
  const progressPercent = getProgress();
  const timeProgress = (elapsedTime / totalDurationMs) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-black/90 backdrop-blur-lg text-white rounded-lg px-6 py-4 shadow-2xl border border-white/20">
          {/* Timer e Progresso */}
          <div className="flex items-center justify-between mb-4 min-w-[500px]">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="font-mono text-lg">
                  {formatTime(elapsedTime)} / {formatTime(totalDurationMs)}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 text-blue-400" />
                <span className="text-sm">
                  {currentSlide + 1} de {totalSlides}
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-300">{currentRoute?.title}</div>
          </div>

          {/* Barra de Progresso */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progresso da Apresentação</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                style={{ width: `${progressPercent}%` }}
                layoutId="progress"
              />
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center space-x-3">
            {/* Voltar */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-white hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Play/Pause */}
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePause}
              className="text-white hover:bg-white/20"
            >
              {isPaused ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </Button>

            {/* Próximo */}
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="text-white hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Separador */}
            <div className="w-px h-6 bg-gray-600 mx-2" />

            {/* Tela Cheia */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/20"
            >
              <Maximize className="h-4 w-4" />
            </Button>

            {/* Sair */}
            <Button
              variant="ghost"
              size="sm"
              onClick={exitPresentation}
              className="text-white hover:bg-red-500/50"
            >
              <Square className="h-4 w-4" />
              <span className="ml-1 text-xs">ESC</span>
            </Button>
          </div>

          {/* Instruções */}
          <div className="mt-3 text-xs text-gray-400 text-center space-x-4">
            <span>← → Navegar</span>
            <span>Espaço: Pausar</span>
            <span>F: Tela cheia</span>
            <span>ESC: Sair</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
