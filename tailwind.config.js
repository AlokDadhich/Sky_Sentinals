/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surveillance': {
          'bg': '#0a0e17',
          'card': '#12182a',
          'accent': '#00d4aa',
          'alert': '#ff4757',
          'warning': '#ffa502',
          'success': '#2ed573',
        }
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
