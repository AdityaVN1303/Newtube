import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth" , 
    initialState : {
        status: true
    },
    reducers : {
        setStatus : (state , action)=>{
            state.status = false
                }, 
        
    }
})

export const {setStatus} = authSlice.actions
export default authSlice.reducer;