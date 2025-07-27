import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimizações de produção
    target: "es2015",
    minify: "esbuild", // Usar esbuild ao invés de terser (mais rápido)
    esbuildOptions: {
      drop: ["console", "debugger"], // Remove console.logs em produção
    },
    rollupOptions: {
      output: {
        // Dividir chunks para melhor cache
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          charts: ["recharts"],
          router: ["react-router-dom"],
        },
      },
    },
    // Aumentar limite de chunk para evitar warnings
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    // Pre-bundle das dependências principais
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
      "recharts",
    ],
  },
  server: {
    // Configurações do servidor de desenvolvimento
    open: true,
    port: 3000,
  },
});
