import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from './navSlice.js'
import cartReducer from './cartSlice.js'
import heroReducer from './heroSlice.js'
import saleReducer from './SaleSlice.js'
import featureReducer from './featureSlice.jsx'
import productReducer from './ProductSlice.js'
import whyChooseReducer from './WhyChooseSlice.js'
import footerReducer from './footerSlice.js'


export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        cart: cartReducer,
        hero: heroReducer,
        sale: saleReducer,
        feature: featureReducer, 
        product: productReducer,
        whyChoose: whyChooseReducer,
        footer: footerReducer,


    }
})
 