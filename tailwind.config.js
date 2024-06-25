/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg_color : "#f4f3ff",
        btn_color : "#646cff",
        dark_color : "#242424",
        helpler_color : "#99b9ff"
      },
      fontFamily:{
        Inter : ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}

