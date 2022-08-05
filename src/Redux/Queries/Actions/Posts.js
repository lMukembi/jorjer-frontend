import {
  ADD_POST_SUCCESS,
  GET_POST_SUCCESS,
  GET_POSTS_SUCCESS,
  UPDATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  ADD_IMAGE,
  GET_USER_POSTS_SUCCESS,
} from "../Constants/Posts";

import axios from "axios";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://jorjer.herokuapp.com/api/post/getPosts"
    );
    console.log("getting all posts");
    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jorjer.herokuapp.com/api/post/getUserPosts/${id}`
    );
    console.log("getting user posts");

    dispatch({ type: GET_USER_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jorjer.herokuapp.com/api/post/getPost/${postId}`
    );
    dispatch({ type: GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addImage = (formData) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    Authorization: `Bearer ${token.data}`,
  };
  const config = {
    headers: headers,
  };
  try {
    const { data } = await axios.post(
      "https://jorjer.herokuapp.com/api/post/addImage",
      formData,
      config
    );

    dispatch({ type: ADD_IMAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (formData) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    Authorization: `Bearer ${token.data}`,
  };
  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      "https://jorjer.herokuapp.com/api/post/addPost",
      formData,
      config
    );

    dispatch({ type: ADD_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.data}`,
  };
  const config = {
    headers: headers,
  };
  try {
    const { data } = await axios.get(
      `https://jorjer.herokuapp.com/api/post/updatePost/${id}`,
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
  };

  const config = {
    headers: headers,
  };
  try {
    await axios.delete(
      `https://jorjer.herokuapp.com/api/post/deletePost/${id}`,
      config
    );

    dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    window.location.reload(false);
  } catch (error) {
    console.log(error.message);
  }
};
