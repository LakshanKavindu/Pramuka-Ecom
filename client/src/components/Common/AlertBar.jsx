import { useState, useEffect } from "react";
import { Toast } from "flowbite-react";
import { PiCheckCircle } from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";

export function AlertBar({ message, type }) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return showAlert ? (
    <Toast>
      {type === "success" ? (
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <PiCheckCircle />
        </div>
      ) : type === "error" ? (
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <IoIosWarning />
        </div>
      ) : (
        ""
      )}
      <div className="ml-3 text-sm font-normal">{message}</div>
      <Toast.Toggle />
    </Toast>
  ) : null;
}
