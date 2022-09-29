import {
  ADD_POST_SUCCESS,
  GET_POST_SUCCESS,
  GET_POSTS_SUCCESS,
  UPDATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_USER_POSTS_SUCCESS,
} from "../Constants/Posts";

import axios from "axios";

const hostUrlApi = "http://localhost:4000";
const hostUrl = "https://jorjer.herokuapp.com";

export const getPosts = () => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };

  try {
    const { data } = await axios.get(`${hostUrl}/api/post/getPosts`, {
      headers: headers,
    });

    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };

  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.get(
      `${hostUrl}/api/post/getUserPosts/${id}`,
      config
    );
    dispatch({ type: GET_USER_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (postId) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };

  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.get(
      `${hostUrl}/api/post/getPost/${postId}`,
      config
    );

    dispatch({ type: GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (formData) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.data}`,
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };
  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      `${hostUrl}/api/post/addPost`,
      formData,
      config
    );

    dispatch({ type: ADD_POST_SUCCESS, payload: data });

    if (data) {
      window.location.reload(false);
      window.location.href = "/";
      alert("Your post submitted successfully.");
    }
  } catch (error) {
    console.log(error);
    if (error) {
      alert("Could not submit post successfully.");
    }
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.data}`,
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };
  const config = {
    headers: headers,
  };
  try {
    const { data } = await axios.get(
      `${hostUrl}/api/post/updatePost/${id}`,
      config,
      post
    );

    dispatch({ type: UPDATE_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.data}`,
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };

  const config = {
    headers: headers,
  };
  try {
    await axios.delete(`${hostUrl}/api/post/deletePost/${id}`, config);

    dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    window.location.reload(false);
  } catch (error) {
    console.log(error.message);
  }
};
