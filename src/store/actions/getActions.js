import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  showErrorMessage,
  showInfoMessage,
  showSuccessMessage,
} from "../../utils/helpers";

export const getPosts = createAsyncThunk("posts/getPosts", async ({ page }) => {
  try {
    const response = await axios.get(`${BASE_URL}posts?_page=${page}`);
    showSuccessMessage("Успешно получен!");
    return response.data;
  } catch (error) {
    showErrorMessage("Что то пошло не так!");
    throw new Error(error.message);
  }
});

export const getAuthor = createAsyncThunk(
  "posts/getAuthor",
  async ({ userId }) => {
    try {
      const response = await axios.get(`${BASE_URL}users/${userId}`);
      return response.data.name;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getUsers = createAsyncThunk("posts/getUsers", async () => {
  try {
    const response = await axios.get(`${BASE_URL}users`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getSelectedPosts = createAsyncThunk(
  "posts/getSelectedPosts",
  async ({ id }) => {
    try {
      const response = await axios.get(`${BASE_URL}posts?&userId=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const updatedPost = {
  title: "Updated Title",
  body: "Updated body content",
};
export const putPosts = createAsyncThunk(
  "posts/putPosts",
  async (id, { dispatch }) => {
    const response = await axios.put(`${BASE_URL}posts/${id}`, {
      title: updatedPost.title,
      body: updatedPost.body,
    });
    console.log(response);
    showInfoMessage("Изменен!");
    dispatch(getPosts({ id }));

    return response.data;
  }
);
