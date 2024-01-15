import { useContext } from "react";
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value='Praveen'> {children} </AppContext.Provider>
};

// global custom hook 
const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext };