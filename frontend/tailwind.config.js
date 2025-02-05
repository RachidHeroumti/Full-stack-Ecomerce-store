/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  './node_modules/tw-elements-react/dist/js/**/*.js',],
    
  theme: {
    color: {
      "backNav": "#292f36",
      'primary':'#282828',
      "sececndry":'#3D0301',
      "titles-color":'#535453'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      container: {
        center: true, 
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
       '2xl': '1536px', 
      },
    },
  },
    plugins: [scrollbar],
}

