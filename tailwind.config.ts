import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Green Theme
        primary: {
          DEFAULT: "#00FF41",
          light: "#33FF66",
          dark: "#00D632",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        
        // Dark Theme
        background: {
          DEFAULT: "#0A0A0A",
          surface: "#1A1A1A",
          card: "#2A2A2A",
          elevated: "#333333",
        },
        
        // Text
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0A0",
          muted: "#666666",
        },
        
        // Border
        border: {
          DEFAULT: "rgba(0, 255, 65, 0.1)",
          hover: "rgba(0, 255, 65, 0.3)",
        },
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #00FF41 0%, #00D632 100%)",
        "gradient-glow": "radial-gradient(circle at center, rgba(0, 255, 65, 0.15) 0%, transparent 70%)",
      },
      
      boxShadow: {
        "glow": "0 0 20px rgba(0, 255, 65, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 255, 65, 0.4)",
        "glow-sm": "0 0 10px rgba(0, 255, 65, 0.2)",
        "card": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      
      backdropBlur: {
        "glass": "40px",
      },
      
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-in",
        "shimmer": "shimmer 2s linear infinite",
        "count-up": "count-up 1s ease-out",
      },
      
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 65, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 65, 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "count-up": {
          "0%": { transform: "scale(1.2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
