import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartValue: 0,
        
    },
    reducers: {
        incrementCart: (state, action) => {
           return {...state, cartValue: state.cartValue + 1}
        }
    }

});
export const CartActions = cartSlice.actions;
export default cartSlice.reducer;