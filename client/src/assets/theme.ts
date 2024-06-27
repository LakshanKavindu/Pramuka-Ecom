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
  floatingLabel: {
    input: {
      default: {
        standard: {
          sm: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
          md: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-primary dark:text-white dark:focus:border-blue-500",
        },
      },
    },
    label: {
      default: {
        standard: {
          sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-gray-400 peer-focus:dark:text-primary",
          md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-gray-400 peer-focus:dark:text-primary",
        },
      },
    },
  },
  dropdown: {
    floating: {
      item: {
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-red-100 focus:bg-red-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      },
    },
  },
  select: {
    field: {
      select: {
        colors: {
          primary:
            "focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary",
        },
      },
    },
  },
};

export default customTheme;
