import { configureStore } from "@reduxjs/toolkit";
import saleReducer from './SaleSlice.js'
import featureReducer from './featureSlice.jsx'
import productReducer from './ProductSlice.js'

export const store = configureStore({
    reducer: {
        sale: saleReducer,
        feature: featureReducer, 
        product: productReducer,

    }
})
 