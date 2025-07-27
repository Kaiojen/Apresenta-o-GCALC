import { useEffect } from "react";

export const usePreloadPages = () => {
  useEffect(() => {
    // Preload das páginas principais após o carregamento inicial
    const preloadPages = () => {
      const pages = [
        () => import("@/pages/Desafio"),
        () => import("@/pages/Evolucao"),
        () => import("@/pages/Solucao"),
        () => import("@/pages/Proposta"),
      ];

      // Preload com delay para não afetar a primeira renderização
      setTimeout(() => {
        pages.forEach((pageImport, index) => {
          setTimeout(() => {
            pageImport()
              .then(() => {
                console.log(`Página ${index + 1} precarregada`);
              })
              .catch(() => {
                // Ignorar erros de preload silenciosamente
              });
          }, index * 200); // Delay escalonado
        });
      }, 1000);
    };

    preloadPages();
  }, []);
};

// Hook para otimização de imagens
export const useImageOptimization = () => {
  useEffect(() => {
    // Preload de imagens críticas
    const criticalImages = [
      "/src/assets/ciclo-virtuoso.png",
      "/src/assets/cronogramas.png",
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
};

// Hook para limpeza de memória
export const useMemoryCleanup = () => {
  useEffect(() => {
    const cleanup = () => {
      // Limpar listeners e timers órfãos
      if (typeof window !== "undefined") {
        // Force garbage collection se disponível (dev tools)
        if (window.gc) {
          window.gc();
        }
      }
    };

    // Cleanup a cada 5 minutos
    const interval = setInterval(cleanup, 5 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};
