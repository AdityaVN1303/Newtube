import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name : "video" , 
    initialState : {
        videos: [],
        nextPageToken : '',
        nextPageTokenForChannel : '',
        loading : false
    },
    reducers : {
        setVideos : (state , action)=>{
            state.videos = action.payload;
                },
        clearVideos : (state)=>{
            state.videos = [];
            },
        setToken : (state , action)=>{
            state.nextPageToken = action.payload;
                 }, 
        setChannelToken : (state , action)=>{
            state.nextPageTokenForChannel = action.payload;
                 }, 
        setLoading : (state , action)=>{
            state.loading = action.payload;
                 }, 
        
    }
})

export const {setVideos , setToken , setChannelToken , clearVideos , setLoading} = videoSlice.actions
export default videoSlice.reducer;