/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  lightMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': {
          'light': '#072446',
          'dark': '#060717',
          'extralight':'#1363c3'
        },
        'text-200': '#e0e0e0',
        'primary': {
          '100': '#072446',
          '200': '#060717',
          '300': '#070818'
        },
        'accent': {
          '100': '#FDD835',
          '200': '#FBC02D',
          '300': '#F9A825'
        },
        'neo': {
          'purple': '#a78bfa',
          'pink': '#f472b6',
          'coral': '#fb7185',
          'orange': '#fb923c',
          'yellow': '#fbbf24',
          'green': '#34d399',
          'blue': '#38bdf8'
        }
      },

      //for staggered text -- className : "animate-animation_name" -- add opacity-0 to hid the elements before animation starts
      keyframes : {
        slidein : {
          from : {
            opacity : "0",
            transform : "translateY(-10px)", //slightly above final position
          },
          to :{
            opacity : "1",
            transform : "translateY(0)",
          },
        },

        zoom: {
          '0%': { 'background-size': '100% 100%' },
          '50%': { 'background-size': '120% 120%' },
          '100%': { 'background-size': '100% 100%' },
        },
      },
      //for staggered effect inrtoduce diffrent delays
      animation :{
        // slidein300 : "slidein 1s ease 300ms forwards",
        // slidein500 : "slidein 1s ease 500ms forwards",
        // slidein700 : "slidein 1s ease 700ms forwards",
        slidein : "slidein 1s ease var(--slidein-delay, 0) forwards", //createv variable for delay(default value - 0) to avoid code duplication --> animate-slidein [--slidein-delay:300ms]
        //specify forwards so that elements maintain their final positions
        zoom: 'zoom 10s ease-in-out infinite'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppind : [ 'Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

