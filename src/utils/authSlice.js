import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth" , 
    initialState : {
        user: {},
        accessToken : ""

    },
    reducers : {
        setUser : (state , action)=>{
            state.user = action.payload;
                }, 
        setToken : (state , action)=>{
            state.accessToken = action.payload;
                },
        
    }
})

export const {setUser , setToken} = authSlice.actions
export default authSlice.reducer;