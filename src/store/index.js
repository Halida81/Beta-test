import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlise";

export const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});
