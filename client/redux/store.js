import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import userReducer from "./features/userSlice"
export const store = configureStore({
    reducer : {
        auth : userReducer,
       
        [authApi.reducerPath] : authApi.reducer,
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat( authApi.middleware),
})