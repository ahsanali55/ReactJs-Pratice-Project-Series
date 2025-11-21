import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    summarySubTotalPrice: 0,
    cartItem: [],
  },
  reducers: {
    addToCArt: (state, action) => {
        console.log("Item at Cart: ", action.payload);
        return {
          ...state,
          summarySubTotalPrice:
            state.summarySubTotalPrice +
            action.payload.price * action.payload.quantity,
          cartItem: action.payload

          // tomorrow below code will setup first
        //    [

        //     {
        //       ...action.payload,
        //       price: action.payload.basePrice * action.payload.quantity,
        //     },
        //     ...state.cartItem,
        //   ],
        };
      
    },
    removeItemFromCArt: (state, action) => {
      //   console.log(action.payload);
      const newCartItems = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        summarySubTotalPrice: newCartItems.reduce(
          (sum, item) => sum + item.price,
          0
        ),
        cartItem: newCartItems,
      };
    },
    incrementCartQuantity: (state, action) => {
      //   console.log(action.payload);
      return {
        ...state,
        summarySubTotalPrice:
          action.payload.quantity < 10
            ? state.summarySubTotalPrice + action.payload.basePrice
            : state.summarySubTotalPrice,
        cartItem: state.cartItem.map((item) =>
          item.id === action.payload.id && item.quantity < 10
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.price + item.basePrice,
              }
            : item
        ),
      };
    },
    decrementCartQuantity: (state, action) => {
      return {
        ...state,
        summarySubTotalPrice:
          action.payload.quantity > 1
            ? state.summarySubTotalPrice - action.payload.basePrice
            : state.summarySubTotalPrice,
        cartItem: state.cartItem.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.price - item.basePrice,
              }
            : item
        ),
      };
    },
  },
});
export const CartActions = cartSlice.actions;
export default cartSlice.reducer;
