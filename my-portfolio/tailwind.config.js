/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Roboto será la fuente principal
      },
    },
  },
  colors: {
    background: '#0d1117',
    surface: '#161b22',
    primary: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    accent: '#9333ea',
    textPrimary: '#e6edf3',
    textSecondary: '#9ca3af',
  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  plugins: [],
}