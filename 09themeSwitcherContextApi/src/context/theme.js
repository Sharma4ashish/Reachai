import { createContext, useContext } from "react";

const themeContext = createContext({
    themeMode : "light",
    switchToDark: ()=>{},
    switchToLight:()=>{},

});

export const ThemeProvider = themeContext.Provider

export const useTheme = ()=>{
    return useContext(themeContext)
}