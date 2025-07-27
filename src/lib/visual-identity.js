// Nova identidade visual da Base Administrativa do Complexo de Saúde/RJ
// Baseada no brasão oficial com cruz vermelha da saúde e espadas cruzadas

export const BADM_VISUAL_IDENTITY = {
  // Cores principais extraídas do brasão
  colors: {
    // Cores do brasão - tons mais suaves e modernos
    healthRed: "#E53E3E", // Vermelho mais suave para bordas e detalhes
    healthRedDark: "#C53030", // Vermelho escuro para variações
    primaryBlue: "#2B6CB0", // Azul principal mais suave
    primaryBlueDark: "#2C5282", // Azul escuro
    lightBlue: "#4299E1", // Azul claro para destaques
    skyBlue: "#90CDF4", // Azul céu para backgrounds

    // Cores complementares
    softGray: "#718096", // Cinza suave para textos
    lightGray: "#E2E8F0", // Cinza claro para backgrounds
    shieldWhite: "#FFFFFF", // Branco do escudo
    borderRed: "#FC8181", // Vermelho suave para bordas

    // Cores de apoio
    success: "#48BB78", // Verde mais suave
    warning: "#ED8936", // Laranja mais suave
    danger: "#F56565", // Vermelho mais suave
    info: "#4299E1", // Azul informativo

    // Neutras
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
  },

  // Gradientes institucionais - tons mais suaves
  gradients: {
    primary: "linear-gradient(135deg, #2B6CB0 0%, #2C5282 100%)",
    secondary: "linear-gradient(135deg, #4299E1 0%, #2B6CB0 100%)",
    soft: "linear-gradient(135deg, #90CDF4 0%, #4299E1 100%)",
    heroBackground:
      "linear-gradient(135deg, #2B6CB0 0%, #4299E1 50%, #90CDF4 100%)",
    cardBackground: "linear-gradient(145deg, #FFFFFF 0%, #F7FAFC 100%)",
    headerBackground:
      "linear-gradient(90deg, #2B6CB0 0%, #4299E1 50%, #2C5282 100%)",
  },

  // Tipografia militar
  typography: {
    primary: "'Inter', 'Segoe UI', system-ui, sans-serif",
    heading: "'Inter', 'Arial Black', sans-serif",
    mono: "'JetBrains Mono', 'Consolas', monospace",
    institutional: "'Times New Roman', serif", // Para documentos oficiais
  },

  // Sombras e elevações
  shadows: {
    card: "0 4px 6px -1px rgba(220, 20, 60, 0.1), 0 2px 4px -1px rgba(220, 20, 60, 0.06)",
    cardHover:
      "0 10px 15px -3px rgba(220, 20, 60, 0.1), 0 4px 6px -2px rgba(220, 20, 60, 0.05)",
    header:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(220, 20, 60, 0.1)",
    military:
      "0 8px 25px rgba(75, 83, 32, 0.15), 0 3px 10px rgba(220, 20, 60, 0.1)",
  },

  // Bordas e cantos
  borderRadius: {
    sm: "0.25rem",
    default: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    military: "0.125rem", // Bordas mais retas para aspecto militar
  },

  // Animações institucionais
  animations: {
    fadeIn: "fadeIn 0.6s ease-out",
    slideUp: "slideUp 0.8s ease-out",
    militaryPulse: "militaryPulse 2s infinite",
    healthPulse: "healthPulse 1.5s infinite",
  },
};

// Mapeamento para CSS custom properties
export const CSS_VARIABLES = {
  // Cores principais
  "--health-red": BADM_VISUAL_IDENTITY.colors.healthRed,
  "--health-red-dark": BADM_VISUAL_IDENTITY.colors.healthRedDark,
  "--military-gold": BADM_VISUAL_IDENTITY.colors.militaryGold,
  "--military-gold-dark": BADM_VISUAL_IDENTITY.colors.militaryGoldDark,
  "--army-green": BADM_VISUAL_IDENTITY.colors.armyGreen,
  "--institutional-blue": BADM_VISUAL_IDENTITY.colors.institutionalBlue,
  "--shield-white": BADM_VISUAL_IDENTITY.colors.shieldWhite,
  "--border-red": BADM_VISUAL_IDENTITY.colors.borderRed,

  // Cores de apoio
  "--success": BADM_VISUAL_IDENTITY.colors.success,
  "--warning": BADM_VISUAL_IDENTITY.colors.warning,
  "--danger": BADM_VISUAL_IDENTITY.colors.danger,
  "--info": BADM_VISUAL_IDENTITY.colors.info,

  // Gradientes
  "--gradient-primary": BADM_VISUAL_IDENTITY.gradients.primary,
  "--gradient-secondary": BADM_VISUAL_IDENTITY.gradients.secondary,
  "--gradient-military": BADM_VISUAL_IDENTITY.gradients.military,
  "--gradient-hero": BADM_VISUAL_IDENTITY.gradients.heroBackground,
  "--gradient-card": BADM_VISUAL_IDENTITY.gradients.cardBackground,
  "--gradient-header": BADM_VISUAL_IDENTITY.gradients.headerBackground,

  // Sombras
  "--shadow-card": BADM_VISUAL_IDENTITY.shadows.card,
  "--shadow-card-hover": BADM_VISUAL_IDENTITY.shadows.cardHover,
  "--shadow-header": BADM_VISUAL_IDENTITY.shadows.header,
  "--shadow-military": BADM_VISUAL_IDENTITY.shadows.military,
};

// Configurações específicas por componente
export const COMPONENT_STYLES = {
  header: {
    background: "var(--gradient-header)",
    boxShadow: "var(--shadow-header)",
    borderBottom: `4px solid var(--health-red)`,
  },

  card: {
    background: "var(--gradient-card)",
    boxShadow: "var(--shadow-card)",
    border: `1px solid var(--health-red-dark)`,
    borderRadius: BADM_VISUAL_IDENTITY.borderRadius.lg,
  },

  button: {
    primary: {
      background: "var(--gradient-primary)",
      color: "var(--shield-white)",
      border: `2px solid var(--health-red-dark)`,
      boxShadow: "var(--shadow-military)",
    },
    secondary: {
      background: "var(--gradient-secondary)",
      color: "var(--army-green)",
      border: `2px solid var(--military-gold-dark)`,
    },
    military: {
      background: "var(--gradient-military)",
      color: "var(--shield-white)",
      border: `2px solid var(--army-green)`,
    },
  },

  kpiCard: {
    critical: {
      borderTop: `4px solid var(--health-red)`,
      iconColor: "var(--health-red)",
    },
    warning: {
      borderTop: `4px solid var(--warning)`,
      iconColor: "var(--warning)",
    },
    success: {
      borderTop: `4px solid var(--success)`,
      iconColor: "var(--success)",
    },
    info: {
      borderTop: `4px solid var(--info)`,
      iconColor: "var(--info)",
    },
  },
};

// Temas para diferentes contextos
export const THEMES = {
  presentation: {
    background: "var(--gradient-hero)",
    textColor: "var(--shield-white)",
    accentColor: "var(--military-gold)",
  },

  dashboard: {
    background: "var(--gray-50)",
    textColor: "var(--gray-900)",
    accentColor: "var(--health-red)",
  },

  print: {
    background: "var(--shield-white)",
    textColor: "var(--gray-900)",
    accentColor: "var(--health-red)",
  },
};
