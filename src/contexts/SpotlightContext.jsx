import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Configuração dos tópicos por página
const PAGE_TOPICS = {
  "/": ["hero-section", "estrategia-section", "cta-section"],
  "/evolucao": [
    "header-evolucao",
    "crescimento-cards",
    "timeline-section",
    "projecoes-section",
    "analise-detalhada",
    "sintese-evolucao",
  ],
  "/dashboard": [
    "header-comparativo",
    "performance-section",
    "orcamento-chart",
    "economicidade-chart", // Separado conforme solicitado
    "indicadores-estrategicos",
  ],
  "/desafio": [
    "header-desafio",
    "problemas-atuais",
    "impactos-section",
    "necessidades-section",
  ],
  "/solucao": [
    "header-solucao",
    "ciclo-virtuoso",
    "cronogramas-section",
    "divisao-estrategica",
    "distribuicao-operacional",
    "beneficios-section",
    "conclusao-solucao",
  ],
  "/proposta": [
    "header-proposta",
    "trajetoria-crescimento",
    "situacao-atual",
    "desafios-implementacoes",
    "solucao-implementada",
    "consolidacao-reconhecimento",
  ],
};

const SpotlightContext = createContext({});

export function SpotlightProvider({ children }) {
  const [isSpotlightMode, setIsSpotlightMode] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(0);
  const [currentPage, setCurrentPage] = useState("/");
  const [showControls, setShowControls] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Atualizar página atual quando rota muda
  useEffect(() => {
    setCurrentPage(location.pathname);
    setCurrentTopic(0); // Reset para primeiro tópico da nova página
  }, [location.pathname]);

  // Obter tópicos da página atual
  const getCurrentTopics = useCallback(() => {
    return PAGE_TOPICS[currentPage] || [];
  }, [currentPage]);

  // Navegação entre tópicos
  const nextTopic = useCallback(() => {
    const topics = getCurrentTopics();
    if (currentTopic < topics.length - 1) {
      const newTopic = currentTopic + 1;
      setCurrentTopic(newTopic);
      scrollToTopic(topics[newTopic]);
    } else {
      // Se chegou ao final dos tópicos, vai para próxima página
      const pages = Object.keys(PAGE_TOPICS);
      const currentIndex = pages.indexOf(currentPage);
      if (currentIndex < pages.length - 1) {
        const nextPage = pages[currentIndex + 1];
        navigate(nextPage);
      }
    }
  }, [currentTopic, getCurrentTopics, currentPage, navigate]);

  const previousTopic = useCallback(() => {
    const topics = getCurrentTopics();
    if (currentTopic > 0) {
      const newTopic = currentTopic - 1;
      setCurrentTopic(newTopic);
      scrollToTopic(topics[newTopic]);
    } else {
      // Se está no primeiro tópico, volta para página anterior
      const pages = Object.keys(PAGE_TOPICS);
      const currentIndex = pages.indexOf(currentPage);
      if (currentIndex > 0) {
        const prevPage = pages[currentIndex - 1];
        const prevTopics = PAGE_TOPICS[prevPage] || [];
        navigate(prevPage);
        setCurrentTopic(prevTopics.length - 1); // Vai para último tópico da página anterior
      }
    }
  }, [currentTopic, getCurrentTopics, currentPage, navigate]);

  const goToTopic = useCallback(
    (topicIndex) => {
      const topics = getCurrentTopics();
      if (topicIndex >= 0 && topicIndex < topics.length) {
        setCurrentTopic(topicIndex);
        scrollToTopic(topics[topicIndex]);
      }
    },
    [getCurrentTopics]
  );

  // Scroll suave para o tópico (desabilitado em modo tela cheia)
  const scrollToTopic = useCallback(
    (topicId) => {
      if (!isSpotlightMode) {
        const element = document.getElementById(topicId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [isSpotlightMode]
  );

  const enableSpotlight = useCallback(() => {
    setIsSpotlightMode(true);
    setCurrentTopic(0);
  }, []);

  const disableSpotlight = useCallback(() => {
    setIsSpotlightMode(false);
    setCurrentTopic(0);
  }, []);

  const toggleControls = useCallback(() => {
    setShowControls((prev) => !prev);
  }, []);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isSpotlightMode) return;

      switch (event.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          event.preventDefault();
          nextTopic();
          break;
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          previousTopic();
          break;
        case "Escape":
          event.preventDefault();
          disableSpotlight();
          break;
        case "Home":
          event.preventDefault();
          goToTopic(0);
          break;
        case "End":
          const topics = getCurrentTopics();
          event.preventDefault();
          goToTopic(topics.length - 1);
          break;
        case "c":
        case "C":
          // Pressionar 'C' mostra/esconde controles
          if (event.ctrlKey) {
            event.preventDefault();
            toggleControls();
          }
          break;
        case "F11":
          // F11 entra/sai do modo spotlight
          event.preventDefault();
          if (isSpotlightMode) {
            disableSpotlight();
          } else {
            enableSpotlight();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    isSpotlightMode,
    nextTopic,
    previousTopic,
    disableSpotlight,
    goToTopic,
    getCurrentTopics,
    toggleControls,
    enableSpotlight,
  ]);

  // Verificar se é o tópico atual
  const isCurrentTopic = useCallback(
    (topicId) => {
      const topics = getCurrentTopics();
      return topics[currentTopic] === topicId;
    },
    [currentTopic, getCurrentTopics]
  );

  const value = {
    isSpotlightMode,
    currentTopic,
    currentPage,
    showControls,
    enableSpotlight,
    disableSpotlight,
    toggleControls,
    nextTopic,
    previousTopic,
    goToTopic,
    isCurrentTopic,
    getCurrentTopics,
    PAGE_TOPICS,
  };

  return (
    <SpotlightContext.Provider value={value}>
      {children}
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const context = useContext(SpotlightContext);
  if (context === undefined) {
    throw new Error("useSpotlight must be used within a SpotlightProvider");
  }
  return context;
}
