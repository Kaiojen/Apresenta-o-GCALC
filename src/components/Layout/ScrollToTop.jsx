import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll para o topo quando muda de página
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Instantâneo para navegação entre páginas
    });
  }, [pathname]);

  return null;
}
