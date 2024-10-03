/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekanTittr: ['"customFont"'],
        yekanMatn: ['"customFont2"'],
      },
    },
  },
  plugins: [],
}

