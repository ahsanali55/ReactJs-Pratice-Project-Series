import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    fetchedData: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    increment: (state, action) => {
      //   console.log("Increment Click", state);
      return state.map((product) => 
        (product.id === action.payload) && (product.quantity < 10)
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decrement: (state, action) => {
      console.log("Decrement Click", action.payload);
      return state.map(product => 
        ((product.id === action.payload) && (product.quantity > 1)) ? {...product, quantity: product.quantity  - 1} : product
      );
    },
  },
});

export const ProductAction = productSlice.actions;
export default productSlice.reducer;
