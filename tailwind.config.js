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
        'primary-100': '#072446',
        'primary-200': '#060717',
        'primary-300': '#070818',
        'accent-100': '#FDD835',
        'accent-200': '#FBC02D',
        'accent-300': '#F9A825',
      },
    },
  },
  plugins: [],
}