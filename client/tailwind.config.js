// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      black: "#272727",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#FF7141",
        secondary: "#FF014E",
        white: "#FFFFFF",
        black1: "#272727",
        black2: "#484848",
        gradient: {
          button: "linear-gradient(90deg, #FF7141 0%, #FF014E 100%)",
        }

      },
      boxShadow: {
        'custom-light': '0 0 3px #FF014E',
        
      },
      backgroundImage: () => ({
        "gradient-button": "linear-gradient(90deg, #FF7141 0%, #FF014E 100%)",
      }),
      boxShadow: {
        "footer-shadow": 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        "bottom-shadow": 'rgba(0, 0, 0, 0.45) 0px 17px 12px -20px',
      }
    },
  },
  plugins: [flowbite.plugin()],
};
