import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import videoReducer from './videoSlice'


const store = configureStore({
    reducer : {
        auth : authReducer,
        video : videoReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
})

export default store;