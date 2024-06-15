import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth" , 
    initialState : {
        accessToken : "",
        user: {}

    },
    reducers : {
        setUser : (state , action)=>{
            state.user = action.payload;
            state.accessToken = action.payload.accessToken
                }, 
        
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer;