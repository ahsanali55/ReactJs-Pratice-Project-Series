import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, status: 'idle', error: null},
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
            state.status = "succeed";
        },
        clearUser: (state, action) => {
            state.user = null;
            state.status = 'idle';
        }, 
        setloading: (state, action) => {
            state.status = "loading";
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.status = "failed";
        }
    }
})
export const AuthActions = authSlice.actions;
export default authSlice.reducer;