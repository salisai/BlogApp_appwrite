//kesay banega
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"

const store = configureStore({
    reducer:{
        auth: authReducer
    }
});


export default store;

//combineReducers():
//to combine multiple reducer functions into a single root reducer, which is then used to create the redux store. This root reducer will call each slice reducer with its portion of the state and the action dispatched, and then it combines the results into a single state object.

//const rootReducer = combineReducers({
//     user: userReducer,
//     products: productReducer,
//   });
