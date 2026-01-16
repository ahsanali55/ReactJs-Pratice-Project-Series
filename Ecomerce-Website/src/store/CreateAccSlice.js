import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";


const createAccSlice = createSlice({
    name: 'createAcc',
    initialState: [],
    reducers: {
        createAnAccount: async (state, action) => {
            console.log(action.payload)
             if (
                  !action.payload.name ||
                  !action.payload.email||
                  !action.payload.password
                ) {
                  alert("Enter all fields");
                  return;
                } else {
                  try {
                    const cred = await createUserWithEmailAndPassword(
                      auth,
                     action.payload.email,
                     action.payload.password
                    );
                    await updateProfile(cred.user, { displayName: action.payload.name });
            
                    const userObj = {
                      email: cred.user.email,
                      name: cred.user.displayName,
                      password: cred.user.password,
                      uid: cred.user.uid,
                    };
                    console.log("userObj", userObj);
                    alert("Account created! You are logged in.");
                  } catch (e) {
                    console.log(e.message);
                  }
                }
                return action.payload;
        },
    }
});
export const CreateAccActions = createAccSlice.actions;
export default createAccSlice.reducer;