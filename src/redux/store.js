import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice"
import musicReducer from './actions';

export const store = configureStore({
    reducer:{
        auth: auth,
        music: musicReducer,
    }
})