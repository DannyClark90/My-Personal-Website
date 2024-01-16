/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs': '375px',
      'sm': '640px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1536px'
    },
    fontSize: {
      'xs': '2.2rem',
      's': '3.6rem',
      'm': '4.6rem',
      'l': '6rem',
      'xl': '7.2rem',
      '2xl': '8.5rem'
    },
    extend: {},
  },
  plugins: [],
}

