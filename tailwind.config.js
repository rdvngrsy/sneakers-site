/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '391px',
        // => @media (min-width: 520px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1922px', //2k için ekran
        
        '4xl': '3840px', // 4k ekran için yeni bir ekran boyutu ekledik
  
      },
      colors: {
        'main-color-1': '#FFFBEC',
        'main-color-2': '#78350F',
        'main-color-3': '#0F172A',
        'main-color-4': '#475569',

      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation : {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 25s linear infinite',
      },
    }
  },
  plugins: [],
}

