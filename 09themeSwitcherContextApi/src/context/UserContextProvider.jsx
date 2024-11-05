import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({children}) =>{
    const [text, settext] = useState("")
    return(

            <UserContext.Provider value={{settext,text}}>
            {children}
            </UserContext.Provider>
        
    )
}
