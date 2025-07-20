import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./createSlice";

const store = configureStore({
    reducer :{
        cartSlice
    }
})

export default store;