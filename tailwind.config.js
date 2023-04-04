/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED821F",
        
      },
      fontFamily: {
        primary: "Nunito",
        secondary: "Cormorant Upright"
      },
      width:{
        headerImage: "500px"
      }
    },
  },
  plugins: [],
}

