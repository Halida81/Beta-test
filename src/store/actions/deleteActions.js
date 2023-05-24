import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { showErrorMessage, showSuccessMessage } from "../../utils/helpers";

export const deletePost = createAsyncThunk("author/getAuthor", async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}posts/${id}`);
    showSuccessMessage("Успешно удален!");
    return response.data;
  } catch (error) {
    showErrorMessage("Что то пошло не так!");
    throw new Error(error.message);
  }
});
