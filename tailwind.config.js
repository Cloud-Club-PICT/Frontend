/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': {
          'light': '#072446',
          'dark': '#060717'
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
    },
  },
  plugins: [],
}