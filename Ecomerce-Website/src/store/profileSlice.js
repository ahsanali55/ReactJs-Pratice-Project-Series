import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        isDropDown: false,
    },
    reducers: {
        toggleDropDown: (state, action) => {
             state.isDropDown = ! state.isDropDown;
        }
    }

});
export const ProfileActions = profileSlice.actions;
export default profileSlice.reducer;