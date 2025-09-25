import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    posts: [],//no posts 
    status: false,
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        fetchPosts: (state, action)=>{
            state.posts = action.payload.posts;
            state.status = true;
        },
        addPost:(state, action)=>{
            state.posts.push(action.payload);
        },
        deletePost:(state, action)=>{
            state.posts = state.posts.filter(post => post.$id !== action.payload)
        },

    }
});

export const {fetchPosts, addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;