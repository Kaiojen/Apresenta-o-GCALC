import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PresentationContext = createContext();

const PRESENTATION_ROUTES = [
  { path: "/", title: "Introdução", duration: 180 }, // 3min - Apresentação inicial
  { path: "/evolucao", title: "Evolução Histórica", duration: 420 }, // 7min - Crescimento e dados
  { path: "/dashboard", title: "Painel Executivo", duration: 360 }, // 6min - Situação atual
  { path: "/desafio", title: "Nossos Desafios", duration: 480 }, // 8min - Problemas identificados
  { path: "/solucao", title: "Solução Estratégica", duration: 540 }, // 9min - Proposta detalhada
  { path: "/proposta", title: "Resumo Executivo", duration: 300 }, // 5min - Conclusões
];

export function PresentationProvider({ children }) {
  const [isPresenting, setIsPresenting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Atualizar slide atual baseado na rota
  useEffect(() => {
    const routeIndex = PRESENTATION_ROUTES.findIndex(
      (route) => route.path === location.pathname
    );
    if (routeIndex !== -1) {
      setCurrentSlide(routeIndex);
    }
  }, [location.pathname]);

  // Timer de apresentação
  useEffect(() => {
    let interval;
    if (isPresenting && !isPaused && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPresenting, isPaused, startTime]);

  // Controles de teclado
  const handleKeyPress = useCallback(
    (event) => {
      if (!isPresenting) return;

      switch (event.key) {
        case "ArrowRight":
        case " ":
          event.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
          event.preventDefault();
          prevSlide();
          break;
        case "Escape":
          event.preventDefault();
          exitPresentation();
          break;
        case "f":
        case "F":
          event.preventDefault();
          toggleFullscreen();
          break;
        case "p":
        case "P":
          event.preventDefault();
          togglePause();
          break;
        default:
          break;
      }
    },
    [isPresenting]
  );

  useEffect(() => {
    if (isPresenting) {
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    }
  }, [isPresenting, handleKeyPress]);

  const startPresentation = useCallback(() => {
    setIsPresenting(true);
    setStartTime(Date.now());
    setElapsedTime(0);
    setCurrentSlide(0);
    setIsPaused(false);
    navigate(PRESENTATION_ROUTES[0].path);
    window.scrollTo({ top: 0, behavior: "instant" });

    // Entrar em tela cheia
    if (document.documentElement.requestFullscreen) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch(() => {
          console.log("Fullscreen não suportado");
        });
    }
  }, [navigate]);

  const exitPresentation = useCallback(() => {
    setIsPresenting(false);
    setStartTime(null);
    setElapsedTime(0);
    setIsPaused(false);

    // Sair da tela cheia
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < PRESENTATION_ROUTES.length - 1) {
      const nextIndex = currentSlide + 1;
      setCurrentSlide(nextIndex);
      navigate(PRESENTATION_ROUTES[nextIndex].path);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [currentSlide, navigate]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      const prevIndex = currentSlide - 1;
      setCurrentSlide(prevIndex);
      navigate(PRESENTATION_ROUTES[prevIndex].path);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [currentSlide, navigate]);

  const goToSlide = useCallback(
    (slideIndex) => {
      if (slideIndex >= 0 && slideIndex < PRESENTATION_ROUTES.length) {
        setCurrentSlide(slideIndex);
        navigate(PRESENTATION_ROUTES[slideIndex].path);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    },
    [navigate]
  );

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  }, []);

  const formatTime = useCallback((milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const getTotalDuration = useCallback(() => {
    return PRESENTATION_ROUTES.reduce(
      (total, route) => total + route.duration,
      0
    );
  }, []);

  const getProgress = useCallback(() => {
    return ((currentSlide + 1) / PRESENTATION_ROUTES.length) * 100;
  }, [currentSlide]);

  const contextValue = {
    // Estado
    isPresenting,
    currentSlide,
    elapsedTime,
    isPaused,
    isFullscreen,

    // Dados
    routes: PRESENTATION_ROUTES,
    totalSlides: PRESENTATION_ROUTES.length,
    currentRoute: PRESENTATION_ROUTES[currentSlide],

    // Ações
    startPresentation,
    exitPresentation,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePause,
    toggleFullscreen,

    // Utilidades
    formatTime,
    getTotalDuration,
    getProgress,
  };

  return (
    <PresentationContext.Provider value={contextValue}>
      {children}
    </PresentationContext.Provider>
  );
}

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error(
      "usePresentation deve ser usado dentro de PresentationProvider"
    );
  }
  return context;
};
