import { createSlice } from "@reduxjs/toolkit";


initialstate = {
    status:true,
    userData:null
}


const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true
            state.userData= action.payload.userData
        },
        logout:(state,_)=>{
            state.status= false;
            state.userData=null;
        }
    }

})