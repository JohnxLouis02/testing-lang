/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Pop', 'sans-serif'],
      colors:{
      'cwhite': '#EAEAEA',
      },
      },
    }
  },
  plugins: [],
}

