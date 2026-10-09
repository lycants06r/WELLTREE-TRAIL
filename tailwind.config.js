/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#4F46E5',
        warning: '#D97706',
        danger: '#E11D48',
        'surface-light': '#F8FAFC',
        'surface-dark': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
