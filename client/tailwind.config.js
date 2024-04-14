// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        while: colors.white,
        black: "#272727",
        blackText:"#484848",
        orange: "#FF7141",
        red:"#FF014E"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
