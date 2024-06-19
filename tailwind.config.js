/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      preto:"#0D100C",
      verde:"#9BF00B",
      branco:"#FFFFFF",
      cinza:"#30322F",
      texto:"#C0C0C0"
    },
    extend: {},
    fontFamily: {
      principal:["Inter", "sans-serif"],
    }
  },
  plugins: [],
}

