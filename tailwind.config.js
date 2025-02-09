/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],

  theme: {

    container:{
      center:true,
      
        padding:'15px',
      
    },
    screens:{
        'sm':'540px',
        'md':'720px',
        'lg':'960px',
        'xl':'1140px',
        '2xl':'1320px',
    },
    extend: {
      colors: {
        "third":"#888",
      }
    },

  },
  plugins: [],
}