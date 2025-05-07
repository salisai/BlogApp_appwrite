//file k andar kia hai wo important hai
//file kaha hai wo matter nahi karta 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,//user is not authenticated
    userData: null//now no user data
}

// e authentication ko track kernay k liay hai
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.userData = action.payload.userData;//added user data
        },

        logout: (state)=>{//no need of action here
            state.status = false;
            state.userData = null;
        }
    }
});

//2 things to export

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;//authSlice mai reducer export kardo

//to directly export the selectors
// export const selectAuthStatus = (state) => state.auth.status;
// export const selectUserData = (state)=> state.auth.userData;

//this is slice for auth
//slice=> specific portion or feature or domain in application
//each slice is managed by managed by its own reducer function which handles the state adn login related to the slice.

//authSlice, postSlice, userSlice, cartSlice, etc.

//createSlice=> combines the process of defining the state.
//what it does?
//define an initial state, create reducer functions, 


//assignment:
//we also need slice for post