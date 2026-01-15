/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // slate-900
        secondary: '#1e293b', // slate-800
        accent: '#8b5cf6', // violet-500
        text: '#e2e8f0', // slate-200
        muted: '#94a3b8', // slate-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
