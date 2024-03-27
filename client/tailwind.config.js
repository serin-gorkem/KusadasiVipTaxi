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
        "fade-in-right": ' fadeInRight .5s linear '
      },
      keyframes:{
        "fadeInRight":{
          "0%":{
            "opacity":"0",
            "transform":"translateX(100px)"
          },
          "100%":{
            "opacity":"1",
            "transform":"translateX(0)"
          }
        }
      }
    },
  },
  plugins: [],
}

