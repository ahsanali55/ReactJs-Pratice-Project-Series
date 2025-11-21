import { createSlice } from "@reduxjs/toolkit"

const localStorageSlice = createSlice({
    name: 'localStorage',
    initialState: [],
    reducers: {
         setLocalStorage: (state, action) => {
            console.log("LocalStorage Items: ", action.payload)

            let exitingItem = JSON.parse(localStorage.getItem(`cartItems`)) || [];
            let isExisting =  exitingItem.find(item => ( item.id === action.payload.id))
           
            if (!isExisting){
                exitingItem.push(action.payload);
                localStorage.setItem('cartItems', JSON.stringify(exitingItem) )

            }
            console.log("ExistingItem: ", exitingItem)
        },
        getLocalStorage: () => {
            return JSON.parse(localStorage.getItem('cartItems') || []);
        }

    }
})
export const LocalStorageActions = localStorageSlice.actions;
 export default localStorageSlice.reducer;




// localStorage.clear()