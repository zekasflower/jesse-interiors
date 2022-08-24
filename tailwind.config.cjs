/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F0F1EA',
          100: '#F8F6F1',
          150: '#E5E7DD',
          200: '#E0E2D8',
          300: '#DDDFD5',
          350: '#D7DAC6'
        },
        green: {
          100: '#A4B7B1',
          500: '#72908B',
          900: '#053634'
        },
        yellow: { 500: '#EBB017' }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2.25rem',
        },
      },
      screens: {
        '2xl': '1656px'
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}