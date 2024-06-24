import React, { createContext, useContext, useState } from "react"

// create toggle context
const LogedContext = createContext()

// create context provider
export const LogedProvider = ({ children }) => {
    const [isloggedin, setIsloggedin] = useState(sessionStorage.getItem("isLoggin"))
    // the value passed in here will be accessible anywhere in our application 
    // you can pass any value, in our case we pass our state and it's update method 
    return (
        <LogedContext.Provider value={{isloggedin, setIsloggedin}}>
            {children}
        </LogedContext.Provider>
    )
}

// useToggleContext will be used to use and update state accross the app
// we can access to data and setData using this method 
// anywhere in any component that's inside ToggleProvider
export const useLogedContext = () => useContext(LogedContext);