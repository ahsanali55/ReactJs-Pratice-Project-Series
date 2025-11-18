import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "navbar",
    initialState: ["HOME", "ABOUT", "PRODUCTS", "CONTACTS"],
    reducers: {
        
    }
});
export const NavbarActions = navSlice.actions;
export default navSlice.reducer;
