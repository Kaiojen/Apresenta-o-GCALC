import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function KPICardSimple({
  title,
  value,
  subtitle,
  percentage,
  status = "normal",
  trend,
  icon: Icon,
  delay = 0,
  insights,
  context,
}) {
  const [countValue, setCountValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  // Animação de contagem
  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = value / 30; // 30 frames para animação
      let current = 0;
      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCountValue(value);
          clearInterval(counter);
        } else {
          setCountValue(Math.floor(current));
        }
      }, 16); // ~60fps

      return () => clearInterval(counter);
    }, delay * 1000 + 500); // Espera a animação inicial + 500ms

    return () => clearTimeout(timer);
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

  const getBackgroundColor = () => {
    switch (status) {
      case "success":
        return "from-green-50 to-green-100";
      case "warning":
        return "from-yellow-50 to-yellow-100";
      case "critical":
        return "from-red-50 to-red-100";
      case "info":
        return "from-blue-50 to-blue-100";
      default:
        return "from-gray-50 to-gray-100";
    }
  };

  const getTrendIcon = () => {
    if (trend > 0)
      return <TrendingUp className="h-4 w-4 text-[var(--success)]" />;
    if (trend < 0)
      return <TrendingDown className="h-4 w-4 text-[var(--danger)]" />;
    return null;
  };

  const getStatusIcon = () => {
    switch (status) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-[var(--danger)]" />;
      case "info":
        return <Info className="h-5 w-5 text-[var(--info)]" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="h-full relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Card
        className={`h-full institutional-card hover:shadow-lg transition-all duration-300 border-l-4 ${getBorderColor()} relative overflow-hidden`}
      >
        {/* Background Gradient on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getBackgroundColor()} opacity-0 hover:opacity-50 transition-opacity duration-300`}
        />

        <CardContent className="p-6 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              {Icon && (
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className={`h-6 w-6 ${getStatusColor()}`} />
                </motion.div>
              )}
              <h3 className="text-sm font-medium text-[var(--text-gray)] uppercase tracking-wider">
                {title}
              </h3>
            </div>
            {getStatusIcon()}
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <motion.span
                className={`text-4xl font-bold ${getStatusColor()}`}
                animate={{ scale: countValue === value ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {countValue}
              </motion.span>
              {trend !== undefined && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: delay + 1 }}
                >
                  {getTrendIcon()}
                </motion.div>
              )}
            </div>

            <p className="text-sm text-[var(--text-gray)]">{subtitle}</p>

            {trend !== undefined && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 1.2 }}
                className="flex items-center space-x-1 text-xs"
              >
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
              </motion.div>
            )}

            {percentage !== undefined && (
              <div className="mt-3">
                <div className="flex justify-between text-xs text-[var(--text-gray)] mb-1">
                  <span>Progresso</span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${getProgressColor()}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{
                      duration: 1,
                      delay: delay + 0.5,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Insights e Context */}
            {(insights || context) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: showTooltip ? 1 : 0,
                  height: showTooltip ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="mt-3 pt-3 border-t border-gray-200 space-y-1"
              >
                {insights && (
                  <p className="text-xs font-medium text-blue-600">
                    💡 {insights}
                  </p>
                )}
                {context && (
                  <p className="text-xs text-gray-500">📊 {context}</p>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>

        {/* Tooltip Flutuante para Mobile */}
        {showTooltip && (insights || context) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-2 left-2 right-2 bg-white border rounded-lg shadow-lg p-3 z-20 md:hidden"
          >
            {insights && (
              <p className="text-xs font-medium text-blue-600 mb-1">
                💡 {insights}
              </p>
            )}
            {context && <p className="text-xs text-gray-500">📊 {context}</p>}
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
