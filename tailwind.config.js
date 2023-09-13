/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'central-blue': '#1fa5ff',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        
      },
      animation: {
        'fadeIn': 'fadeIn 1000ms'
      },
      keyframes: {
          fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
          }
      }
    },
    screens: {
      'xsm': '360px',
      'sm': '640px',
      'lg': '1024px',
    }
  },
  plugins: [],
}