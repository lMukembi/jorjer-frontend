import {
  LOGOUT,
  AUTH_SUCCESS,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  GET_USER_SUCCESS,
} from "../Constants/Users";

import axios from "axios";

// Load Admin
export const isAdmin = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jorjer.herokuapp.com/api/auth/${id}`
    );
    dispatch({ type: AUTH_SUCCESS, payload: data });
    localStorage.getItem("userAccount", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

// Signup User
export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://jorjer.herokuapp.com/api/user/signup",
      {
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
      }
    );
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    localStorage.setItem("userAccount", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://jorjer.herokuapp.com/api/user/login",
      {
        email: formData.email,
        password: formData.password,
      }
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userAccount", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userAccount");

  dispatch({ type: LOGOUT });
};

//Load User
export const getUser = (id) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const { token } = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.get(
      `https://jorjer.herokuapp.com/api/auth/${id}`,
      config
    );

    console.log("Apr 25 ", data);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
