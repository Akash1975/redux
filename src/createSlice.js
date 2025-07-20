

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData : [],
    amount: 0,
    tottal :0
}

const cartSlice = createSlice({
    name : "cart",
    initialState
});


export default cartSlice.reducer;