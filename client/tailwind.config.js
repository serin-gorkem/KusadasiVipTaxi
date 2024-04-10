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
        "neutral-dark": "#0c0c0c"
      },
      backgroundImage:{
        "choose-us-background" : "https://images.pexels.com/photos/19354974/pexels-photo-19354974/free-photo-of-kent-sehir-arabalar-otomobiller.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10"
      },
      fontFamily:{
        "body":['Palanquin Dark'],
      },
      animation:{
        "progressBar": 'fill-progress-bar 4s linear'
      },
      keyframes : {
        "fill-progress-bar" : {
          "0%":{
            "width":"0%"
          },
          "100%":{
            "width":"100%"
          }
        }
      }
    },
  },
  plugins: [],
}

