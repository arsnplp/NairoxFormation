/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1D3E',
          800: '#0F2348',
          700: '#162A58',
          600: '#1A3268',
        },
        gold: {
          600: '#A87520',
          500: '#C9922A',
          400: '#D4A444',
          300: '#E8C06A',
          200: '#F2D98B',
          100: '#FEF7EC',
        },
        violet: {
          950: '#1E0D45',
          900: '#2E1065',
          800: '#3B0764',
          700: '#4C1D95',
          600: '#5B21B6',
          500: '#7C3AED',
          400: '#8B5CF6',
          100: '#EDE9FE',
          50:  '#F5F3FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
