import { createSlice } from "@reduxjs/toolkit";
import {
  getAuthor,
  getPosts,
  getSelectedPosts,
  getUsers,
  putPosts,
} from "../actions/getActions";
import { deletePost } from "../actions/deleteActions";

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
  author: "",
  users: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = action.payload;
    },
    [getAuthor.pending]: (state) => {
      state.isLoading = true;
    },
    [getAuthor.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.author = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = action.payload;
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.filter((el) => el?.id !== action.payload.id);
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = action.payload;
    },
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getSelectedPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getSelectedPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [putPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [putPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.find(function (item) {
        return item = action.payload;
      }); 
    },
  },
});

export default postSlice;
