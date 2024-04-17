import type { CustomFlowbiteTheme } from "flowbite-react";
const customTheme: CustomFlowbiteTheme = {
  textInput: {
    field: {
      input: {
        colors: {
          primary:
            "focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary",
        },
      },
    },
  },
  button: {
    gradientDuoTone: {
      primary: "bg-gradient-to-r from-primary to-secondary text-white",
    },
  },
};

export default customTheme;
