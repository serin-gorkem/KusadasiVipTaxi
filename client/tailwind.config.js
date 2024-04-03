/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-color": "#0f0f0f",
        "secondary-color": "#A9C7CF",
        "highlight-color":"#D5A928",
        "light-text":"#ffffff",
        "dark-text":"#0f0f0f"
      },
      backgroundImage:{
        "choose-us-background" : "https://images.pexels.com/photos/19354974/pexels-photo-19354974/free-photo-of-kent-sehir-arabalar-otomobiller.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10"
      },
      fontFamily:{
        "title":['Palanquin Dark'],
        "subTitle":["Palanquin"],
        "text":["Montserrat"]
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

