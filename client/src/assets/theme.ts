import type { CustomFlowbiteTheme } from "flowbite-react";
const customTheme: CustomFlowbiteTheme = {
  textInput: {
    field: {
      input: {
        sizes: {
          sm: "focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary p-2 sm:text-xs pl-10 rounded-lg",
          lg: "focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary p-4 sm:text-base rounded-lg ",
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
