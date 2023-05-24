/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        grisClaro: ["#dce0e6"],
        grisOscuro: ["#606d80"],
        lilaClaro: ["#567ebb"],
        lilaOscuro: ["#2b4c7e"],
        negro: ["#1f1f20"],
      },
    },
  },
  plugins: [],
};
