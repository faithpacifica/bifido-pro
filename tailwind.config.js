/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gothampro', 'sans-serif'],
        gothamBold: ['GothamproBold', 'sans-serif'],
    },
    },
  },
  plugins: [],
}