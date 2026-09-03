/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#FACC15',
          green: '#22C55E',
          emerald: '#10B981',
          emeraldDark: '#059669',
          gold: '#EAB308',
          dark: '#070B13',
          card: '#0F172A',
          border: '#1E293B',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(34, 197, 94, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
