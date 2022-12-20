import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../services/profileSlice"
import friendReducer from "../services/friendSlice"





export const store = configureStore({
    reducer:{
        profile :profileReducer,
        friend:friendReducer

    }
})


export  default store;