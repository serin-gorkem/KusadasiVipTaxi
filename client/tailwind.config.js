/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "base":"#F6F1F1",
        "primary-color" :"#fec803",
        "neutral" :"#f1f1f1",
        "neutral-dark": "#000000"
      },
      backgroundImage:{
        "choose-us-background" : "https://images.pexels.com/photos/19354974/pexels-photo-19354974/free-photo-of-kent-sehir-arabalar-otomobiller.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10"
      },
      fontFamily:{
        "body":['Palanquin','Impact', 'sans-serif'],
      },
      animation:{
        "progressBar": 'progressBarKF 4s infinite',
        "moveIn" : 'moveInKf 0.5s linear alternate forwards'
      },
      keyframes : {
        "progressBarKF" : {
          "0%":{
            "width":"0%"
          },
          "100%":{
            "width":"100%"
          }
        },
        "moveInKF" :{
          "0%":{
            "translate-x":"1"
          },
          "100%":{
            "opacity":"0"
          }
        }   
      }
    },
  },
  plugins: [
    ("autoprefixer"),
    ("tailwindcss"),
  ],
}

