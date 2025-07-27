import { SITE_CONFIG, NAVIGATION } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePresentation } from "@/contexts/PresentationContext";
import { useSpotlight } from "@/contexts/SpotlightContext";
import LogoBase from "@/components/ui/logo-base";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { isPresenting } = usePresentation();
  const { isSpotlightMode } = useSpotlight();

  // Efeito de hide/show baseado no scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se estiver no topo, sempre mostrar
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Se rolou para baixo, esconder
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Fechar menu mobile se estiver aberto
      }
      // Se rolou para cima, mostrar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Esconder header no modo apresentação
  if (isPresenting) {
    return null;
  }

  const isActive = (path) => {
    return location.pathname === path;
  };

  const currentIndex = NAVIGATION.findIndex(
    (nav) => nav.path === location.pathname
  );

  // Não mostrar header no modo spotlight
  if (isSpotlightMode) {
    return null;
  }

  return (
    <header
      className={`institutional-header sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo e Brasão */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Logo da unidade */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 border border-[var(--borderRed)]/30 shadow-sm">
                <LogoBase size={40} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white leading-tight drop-shadow-sm">
                  {SITE_CONFIG.title}
                </h1>
                <p className="text-sm text-white/80 font-medium">
                  {SITE_CONFIG.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-2">
              {NAVIGATION.map((item, index) => (
                <Link key={item.id} to={item.path}>
                  <div
                    className={`font-medium px-5 py-2 transition-all duration-200 rounded-lg text-sm cursor-pointer ${
                      isActive(item.path)
                        ? "bg-[var(--health-red)] text-white shadow-lg"
                        : "text-white/85 hover:bg-white/12 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}

              {/* Separador visual */}
              <div className="w-px h-6 bg-white/20 mx-3"></div>

              {/* Indicador de progresso */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {NAVIGATION.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? "bg-[var(--health-red)] scale-125"
                          : index < currentIndex
                          ? "bg-white/40"
                          : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/60 text-xs font-medium ml-2">
                  {currentIndex + 1}/{NAVIGATION.length}
                </span>
              </div>
            </div>
          </nav>

          {/* Botão Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/20 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="border-t border-white/20 pt-4 pb-4">
              <nav className="flex flex-col space-y-2">
                {NAVIGATION.map((item) => (
                  <Link key={item.id} to={item.path}>
                    <div
                      className={`font-medium w-full px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                        isActive(item.path)
                          ? "bg-[var(--health-red)] text-white shadow-lg"
                          : "text-white/85 hover:bg-white/12 hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Indicador de progresso mobile */}
              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <span className="text-white/70 text-sm">
                  {currentIndex + 1} de {NAVIGATION.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
