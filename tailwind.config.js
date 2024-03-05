/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color-1': '#FFFBEC',
        'main-color-2': '#78350F',
        'main-color-3': '#0F172A'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

