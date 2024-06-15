import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name : "video" , 
    initialState : {
        videos: [],
        nextPageToken : '',
        loading : false
    },
    reducers : {
        setVideos : (state , action)=>{
            state.videos = action.payload;
            
                },
        setToken : (state , action)=>{
            state.nextPageToken = action.payload;
                 }, 
        setLoading : (state , action)=>{
            state.loading = action.payload;
                 }, 
        
    }
})

export const {setVideos , setToken , setLoading} = videoSlice.actions
export default videoSlice.reducer;