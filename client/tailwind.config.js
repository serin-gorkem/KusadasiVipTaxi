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
        "secondary-color": "#DDD0C8",
        "highlight-color":"#D5A928",
        "light-text":"#ffffff",
        "dark-text":"#0f0f0f"
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

