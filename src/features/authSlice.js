import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    userData: null//user info
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated = true;
            state.userData = action.payload.userData;

        },

        logout: (state)=>{
            state.isAuthenticated = false;
            state.userData = null;
        }
    }
});


export const {login, logout} = authSlice.actions;

//selectors 
export const selectAuthStatus = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;


