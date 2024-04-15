import type { CustomFlowbiteTheme } from "flowbite-react";
const customTheme: CustomFlowbiteTheme = {
  textInput: {
    field: {
      input: {
        sizes: {
          sm: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-primary p-2 sm:text-xs pl-10 rounded-lg",
        },
      },
    },
  },
  button:{
    gradientDuoTone:{
      "primary": "bg-gradient-to-r from-primary to-secondary text-white",
    }
  }
};

export default customTheme;
