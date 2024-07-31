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
    backgroundImage: {
      'hero-bg': "url('/src/assets/images/hero-bg.jpg')",
    },
    colors:{
      orange:'#F57F05',
      green:'#15BBC7'
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '1.25rem',
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
    },
    },
  },
  plugins: [],
}