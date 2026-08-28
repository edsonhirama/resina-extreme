/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        surface: {
          50: "#181a24",
          100: "#13151e",
          200: "#0f1017",
          300: "#0b0c12",
          card: "#12141d",
          border: "#202434",
        },
        brand: {
          amber: {
            DEFAULT: "#f59e0b",
            light: "#fbbf24",
            dark: "#d97706",
            glow: "rgba(245, 158, 11, 0.25)",
          },
          emerald: {
            DEFAULT: "#10b981",
            light: "#34d399",
            dark: "#059669",
            glow: "rgba(16, 185, 129, 0.25)",
          },
          carbon: "#161822",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.15), transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(26, 29, 41, 0.7) 0%, rgba(15, 17, 25, 0.95) 100%)",
        "gold-gradient": "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
        "trust-gradient": "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)",
      },
      boxShadow: {
        "glow-amber": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.4)",
        "inner-metallic": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.8, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.03)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s infinite ease-in-out",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
