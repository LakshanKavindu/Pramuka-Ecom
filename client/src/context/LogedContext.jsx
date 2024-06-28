import { createContext, useContext, useState, useEffect } from "react";
import axiosClient from "../utils/axiosClient";

// create toggle context
const LogedContext = createContext();

// create context provider
export const LogedProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState();
  const [isloggedin, setIsloggedin] = useState(
    sessionStorage.getItem("isLoggin")
  );
  useEffect(() => {
    if (sessionStorage.getItem("isLoggin") === "true") {
      const user = JSON.parse(sessionStorage.getItem("user"));
      axiosClient
        .get(`/product/getcart/${user.email}`)
        .then((res) => {
          console.log("context got", res.data);
          setItemCount(res.data.length);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // the value passed in here will be accessible anywhere in our application
  // you can pass any value, in our case we pass our state and it's update method
  return (
    <LogedContext.Provider
      value={{ isloggedin, setIsloggedin, itemCount, setItemCount }}
    >
      {children}
    </LogedContext.Provider>
  );
};

// useToggleContext will be used to use and update state accross the app
// we can access to data and setData using this method
// anywhere in any component that's inside ToggleProvider
export const useLogedContext = () => useContext(LogedContext);
