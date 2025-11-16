import { createSlice } from "@reduxjs/toolkit";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

const initialState = [
    {
        icon: "FaShippingFast" ,
        title: "Worldwide Shipping",
        flexsibility: "Order Above $100",
    },
    {
        icon: "FaArrowsRotate" ,
        title: "Easy 30 Day Returns",
        flexsibility: "Back Returns in 7 Days",
    },
    {
        icon: "FaHandHoldingDollar" ,
        title: "Money Back Guarantee",
        flexsibility: "Guarantee With In 30-Days",
    },
    {
        icon: "FaHeadphones" ,
        title: "Easy Online Support",
        flexsibility: "24/7 Any Time Support",
    },
]

const featureSlice = createSlice({
    name: "feature",
    initialState,
    reducers: {

    }
})
export const featureActions = featureSlice.actions;
export default featureSlice.reducer;