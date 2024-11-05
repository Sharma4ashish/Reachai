import React, { useContext } from 'react'
import {UserContext} from '../context/UserContext';


function Profile () {
    const {text} = useContext(UserContext);

    if (!text) {
        return(
            <h1>Please Login</h1>
            
        )
        
    }
    else{
        return(
            <h1>
                {text.username}
            </h1>
        )
    }
  
}

export default Profile