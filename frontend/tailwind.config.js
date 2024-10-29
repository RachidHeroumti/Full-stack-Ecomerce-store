/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    color: {
      "backNav": "#115e59",
      'primary':'#282828'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

