/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    color: {
      "backNav": "#115e59",
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'),],
}

