/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        negro: ["#1f1f20"],
        grisOscuro: ["#606d80"],
        grisClaro: ["#dce0e6"],
        azulClaro: ["#0969da"],
        azulOscuro: ["#0a3069"],
        celesteOscuro: ["#54aeff"],
        celesteClaro: ["#b6e3ff"],
      },
    },
  },
  plugins: [],
};
