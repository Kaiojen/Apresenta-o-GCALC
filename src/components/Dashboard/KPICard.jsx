import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function KPICard({
  title,
  value,
  subtitle,
  percentage,
  status = "normal",
  trend,
  icon: Icon,
  delay = 0,
}) {
  const [displayValue, setDisplayValue] = useState(value);

  // Animação de contagem
  useEffect(() => {
    // Define o valor imediatamente para evitar problemas
    if (!value || value === 0) {
      setDisplayValue(0);
      return;
    }

    let startTime;
    let animationId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);

      if (progress < 1) {
        // Usa Math.round ao invés de Math.floor para melhor precisão
        setDisplayValue(Math.round(progress * value));
        animationId = requestAnimationFrame(animate);
      } else {
        // Garante que o valor final seja exato
        setDisplayValue(value);
      }
    };

    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [value, delay]);

  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "text-[var(--success)]";
      case "warning":
        return "text-[var(--warning)]";
      case "critical":
        return "text-[var(--danger)]";
      case "info":
        return "text-[var(--info)]";
      default:
        return "text-[var(--health-red)]";
    }
  };

  const getProgressColor = () => {
    switch (status) {
      case "success":
        return "bg-[var(--success)]";
      case "warning":
        return "bg-[var(--warning)]";
      case "critical":
        return "bg-[var(--danger)]";
      case "info":
        return "bg-[var(--info)]";
      default:
        return "bg-[var(--health-red)]";
    }
  };

  const getBorderColor = () => {
    switch (status) {
      case "success":
        return "border-l-[var(--success)]";
      case "warning":
        return "border-l-[var(--warning)]";
      case "critical":
        return "border-l-[var(--danger)]";
      case "info":
        return "border-l-[var(--info)]";
      default:
        return "border-l-[var(--health-red)]";
    }
  };

  const getTrendIcon = () => {
    if (trend > 0)
      return <TrendingUp className="h-4 w-4 text-[var(--success)]" />;
    if (trend < 0)
      return <TrendingDown className="h-4 w-4 text-[var(--danger)]" />;
    return null;
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="h-full"
    >
      <Card
        className={`h-full institutional-card hover:shadow-lg transition-all duration-300 border-l-4 ${getBorderColor()}`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              {Icon && <Icon className={`h-6 w-6 ${getStatusColor()}`} />}
              <h3 className="text-sm font-medium text-[var(--text-gray)] uppercase tracking-wider">
                {title}
              </h3>
            </div>
            {status === "critical" && (
              <AlertTriangle className="h-5 w-5 text-[var(--danger)]" />
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className={`text-4xl font-bold ${getStatusColor()}`}>
                {displayValue}
              </span>
              {trend !== undefined && getTrendIcon()}
            </div>

            <p className="text-sm text-[var(--text-gray)]">{subtitle}</p>

            {trend !== undefined && (
              <div className="flex items-center space-x-1 text-xs">
                <span
                  className={
                    trend > 0 ? "text-[var(--success)]" : "text-[var(--danger)]"
                  }
                >
                  {trend > 0 ? "+" : ""}
                  {trend}%
                </span>
                <span className="text-[var(--text-gray)]">
                  vs período anterior
                </span>
              </div>
            )}

            {percentage !== undefined && (
              <div className="mt-3">
                <div className="flex justify-between text-xs text-[var(--text-gray)] mb-1">
                  <span>Capacidade</span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor()}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
