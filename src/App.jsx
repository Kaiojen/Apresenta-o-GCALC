import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Layout/Header";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { PresentationProvider } from "@/contexts/PresentationContext";
import PresentationControls from "@/components/Presentation/PresentationControls";
import { SpotlightProvider } from "@/contexts/SpotlightContext";
import SpotlightControls from "@/components/Spotlight/SpotlightControls";
import SplashScreen from "@/components/Layout/SplashScreen";
import {
  usePreloadPages,
  useImageOptimization,
  useMemoryCleanup,
} from "@/hooks/usePreloadPages";
import "./App.css";

// Lazy loading das páginas para melhor performance
const Introducao = lazy(() => import("@/pages/Introducao"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Desafio = lazy(() => import("@/pages/Desafio"));
const Evolucao = lazy(() => import("@/pages/Evolucao"));
const Solucao = lazy(() => import("@/pages/Solucao"));
const Proposta = lazy(() => import("@/pages/Proposta"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--light-background)]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--military-green)] mx-auto mb-4"></div>
      <p className="text-[var(--military-green)] font-medium">Carregando...</p>
    </div>
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Hooks de otimização
  usePreloadPages();
  useImageOptimization();
  useMemoryCleanup();

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <PresentationProvider>
        <SpotlightProvider>
          <div className="min-h-screen bg-[var(--light-background)]">
            <Header />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Introducao />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/desafio" element={<Desafio />} />
                  <Route path="/evolucao" element={<Evolucao />} />
                  <Route path="/solucao" element={<Solucao />} />
                  <Route path="/proposta" element={<Proposta />} />
                </Routes>
              </Suspense>
            </main>
            <PresentationControls />
            <SpotlightControls />
          </div>
        </SpotlightProvider>
      </PresentationProvider>
    </Router>
  );
}

export default App;
