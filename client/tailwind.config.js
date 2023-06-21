/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        grisClaro: ["#dce0e6"],
        grisOscuro: ["#606d80"],
        lilaClaro: ["#0969da"],
        lilaOscuro: ["#0a3069"],
        negro: ["#1f1f20"],
      },
    },
  },
  plugins: [],
};
