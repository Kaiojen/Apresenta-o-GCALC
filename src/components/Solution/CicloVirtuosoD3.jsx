import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, FileText, Target } from "lucide-react";
import { CICLO_VIRTUOSO } from "@/lib/constants";

export default function CicloVirtuosoD3() {
  const svgRef = useRef();
  const [selectedStage, setSelectedStage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Configurações do ciclo
  const config = {
    width: 750,
    height: 750,
    centerX: 375,
    centerY: 375,
    radius: 280,
    nodeRadius: 45,
    colors: {
      primary: "#DC143C", // Vermelho da cruz da saúde
      secondary: "#FFD700", // Dourado militar
      accent: "#4B5320", // Verde militar
      success: "#059669",
      hover: "#B01E3C", // Vermelho escuro
      text: "#FFFFFF",
      background: "#F9FAFB",
    },
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Limpar SVG anterior

    // Criar grupo principal
    const g = svg
      .append("g")
      .attr("transform", `translate(${config.centerX}, ${config.centerY})`);

    // Círculo de fundo com gradiente
    const defs = svg.append("defs");

    const gradient = defs.append("radialGradient").attr("id", "ciclo-gradient");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", config.colors.secondary)
      .attr("stop-opacity", 0.2);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", config.colors.primary)
      .attr("stop-opacity", 0.3);

    g.append("circle")
      .attr("r", config.radius)
      .attr("fill", "url(#ciclo-gradient)")
      .attr("stroke", config.colors.primary)
      .attr("stroke-width", 3)
      .attr("stroke-dasharray", "10,5");

    // Texto central
    const centralGroup = g.append("g").attr("class", "central-text");

    centralGroup
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", -15)
      .attr("font-size", "32px")
      .attr("font-weight", "bold")
      .attr("fill", config.colors.primary)
      .text("CICLO");

    centralGroup
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", 25)
      .attr("font-size", "32px")
      .attr("font-weight", "bold")
      .attr("fill", config.colors.secondary)
      .text("VIRTUOSO");

    // Seta de rotação (indicador visual)
    const arrowGroup = g.append("g").attr("class", "rotation-arrow");

    arrowGroup
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(config.radius + 10)
          .outerRadius(config.radius + 30)
          .startAngle(0)
          .endAngle(Math.PI / 4)
      )
      .attr("fill", config.colors.accent)
      .attr("opacity", 0.7);

    // Criar nós das etapas
    CICLO_VIRTUOSO.forEach((stage, index) => {
      const angle = (index * 2 * Math.PI) / CICLO_VIRTUOSO.length - Math.PI / 2;
      const x = Math.cos(angle) * config.radius;
      const y = Math.sin(angle) * config.radius;

      // Grupo da etapa
      const stageGroup = g
        .append("g")
        .attr("class", `stage-${index}`)
        .attr("transform", `translate(${x}, ${y})`)
        .style("cursor", "pointer");

      // Círculo de fundo da etapa
      stageGroup
        .append("circle")
        .attr("r", config.nodeRadius)
        .attr("fill", config.colors.primary)
        .attr("stroke", config.colors.secondary)
        .attr("stroke-width", 3)
        .attr("opacity", 0.9);

      // Sombra do texto da etapa
      stageGroup
        .append("text")
        .attr("text-anchor", "middle")
        .attr("y", -7)
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .attr("fill", "black")
        .attr("opacity", 0.7)
        .text(stage.titulo);

      // Texto da etapa
      stageGroup
        .append("text")
        .attr("text-anchor", "middle")
        .attr("y", -8)
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .attr("fill", "white")
        .text(stage.titulo);

      // Sombra da data da etapa
      stageGroup
        .append("text")
        .attr("text-anchor", "middle")
        .attr("y", 13)
        .attr("font-size", "11px")
        .attr("fill", "black")
        .attr("opacity", 0.6)
        .text(stage.prazo);

      // Data da etapa
      stageGroup
        .append("text")
        .attr("text-anchor", "middle")
        .attr("y", 12)
        .attr("font-size", "11px")
        .attr("fill", "white")
        .attr("opacity", 0.95)
        .text(stage.prazo);

      // Efeitos de hover
      stageGroup
        .on("mouseenter", function () {
          d3.select(this)
            .select("circle")
            .transition()
            .duration(200)
            .attr("r", config.nodeRadius + 5)
            .attr("fill", config.colors.hover);
        })
        .on("mouseleave", function () {
          d3.select(this)
            .select("circle")
            .transition()
            .duration(200)
            .attr("r", config.nodeRadius)
            .attr("fill", config.colors.primary);
        })
        .on("click", function () {
          setSelectedStage(stage);
        });

      // Linhas conectoras
      if (index < CICLO_VIRTUOSO.length - 1) {
        const nextAngle =
          ((index + 1) * 2 * Math.PI) / CICLO_VIRTUOSO.length - Math.PI / 2;
        const nextX = Math.cos(nextAngle) * config.radius;
        const nextY = Math.sin(nextAngle) * config.radius;

        g.append("line")
          .attr("x1", x + Math.cos(nextAngle - angle) * config.nodeRadius)
          .attr("y1", y + Math.sin(nextAngle - angle) * config.nodeRadius)
          .attr("x2", nextX - Math.cos(nextAngle - angle) * config.nodeRadius)
          .attr("y2", nextY - Math.sin(nextAngle - angle) * config.nodeRadius)
          .attr("stroke", config.colors.primary)
          .attr("stroke-width", 2)
          .attr("opacity", 0.6);
      }
    });

    // Linha conectora do último para o primeiro
    const firstAngle = -Math.PI / 2;
    const lastAngle =
      ((CICLO_VIRTUOSO.length - 1) * 2 * Math.PI) / CICLO_VIRTUOSO.length -
      Math.PI / 2;
    const firstX = Math.cos(firstAngle) * config.radius;
    const firstY = Math.sin(firstAngle) * config.radius;
    const lastX = Math.cos(lastAngle) * config.radius;
    const lastY = Math.sin(lastAngle) * config.radius;

    g.append("line")
      .attr("x1", lastX + Math.cos(firstAngle - lastAngle) * config.nodeRadius)
      .attr("y1", lastY + Math.sin(firstAngle - lastAngle) * config.nodeRadius)
      .attr("x2", firstX - Math.cos(firstAngle - lastAngle) * config.nodeRadius)
      .attr("y2", firstY - Math.sin(firstAngle - lastAngle) * config.nodeRadius)
      .attr("stroke", config.colors.primary)
      .attr("stroke-width", 2)
      .attr("opacity", 0.6);

    // Animação de rotação sutil
    const startRotation = () => {
      setIsAnimating(true);
      arrowGroup
        .transition()
        .duration(10000)
        .ease(d3.easeLinear)
        .attrTween("transform", () => {
          return (t) => `rotate(${t * 360})`;
        })
        .on("end", () => {
          setIsAnimating(false);
          setTimeout(startRotation, 2000); // Pausa entre rotações
        });
    };

    // Iniciar animação após um delay
    setTimeout(startRotation, 1000);
  }, []);

  const getStageIcon = (tipo) => {
    const icons = {
      planejamento: Calendar,
      processo: FileText,
      execucao: Target,
      controle: Users,
    };
    return icons[tipo] || FileText;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-[var(--military-green)] mb-4">
              Ciclo Virtuoso de Processos
            </CardTitle>
            <p className="text-[var(--text-gray)] text-lg max-w-4xl mx-auto">
              Sistema integrado de gestão de processos licitatórios baseado em 8
              etapas consecutivas e interdependentes, estruturado para garantir
              conformidade normativa, otimização temporal e qualidade técnica
              dos 290 processos anuais. Clique nas etapas para análise detalhada
              de cada fase operacional.
            </p>
          </CardHeader>

          <CardContent className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <svg
                ref={svgRef}
                width={config.width}
                height={config.height}
                viewBox={`0 0 ${config.width} ${config.height}`}
                className="drop-shadow-lg"
              />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Modal de Detalhes da Etapa */}
      <AnimatePresence>
        {selectedStage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedStage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    {React.createElement(getStageIcon(selectedStage.tipo), {
                      className: "h-8 w-8 text-[var(--military-green)]",
                    })}
                    <h3 className="text-2xl font-bold text-[var(--military-green)]">
                      {selectedStage.titulo}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedStage(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[var(--light-background)] to-white p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold text-[var(--military-green)]">
                          Prazo:
                        </span>
                        <span className="ml-2">{selectedStage.prazo}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--military-green)]">
                          Responsável:
                        </span>
                        <span className="ml-2">
                          {selectedStage.responsavel}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--military-green)]">
                          Classificação:
                        </span>
                        <span className="ml-2">
                          {selectedStage.classificacao}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--military-green)]">
                          Status:
                        </span>
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {selectedStage.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--institutional-blue)] mb-2">
                      Descrição:
                    </h4>
                    <p className="text-[var(--text-gray)]">
                      {selectedStage.descricao}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--institutional-blue)] mb-2">
                      Atividades Principais:
                    </h4>
                    <ul className="space-y-2">
                      {selectedStage.atividades?.map((atividade, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-[var(--military-green)] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[var(--text-gray)]">
                            {atividade}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--institutional-blue)] mb-2">
                      Documentos Necessários:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedStage.documentos?.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 p-2 bg-gray-50 rounded"
                        >
                          <FileText className="h-4 w-4 text-[var(--military-green)]" />
                          <span className="text-sm text-[var(--text-gray)]">
                            {doc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
