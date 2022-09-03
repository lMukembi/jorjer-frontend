import {
  GET_USER_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  EDIT_USER,
  LOGOUT,
} from "../Constants/Users";

import axios from "axios";

// Signup User
export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://jorjer.herokuapp.com/api/user/signup",
      {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      }
    );

    dispatch({ type: SIGNUP_SUCCESS, payload: data });

    localStorage.setItem("userAccount", JSON.stringify(data));
  } catch (error) {
    console.log(error);

    if (error) {
      window.location.href = "./signup";
    }
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

    if (error) {
      window.location.href = "./login";
    }
  }
};

export const editUser = (id, editForm) => async (dispatch) => {
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
    const { data } = await axios.put(
      `https://jorjer.herokuapp.com/api/auth/editUser/${id}`,
      config,
      {
        editForm,
      }
    );

    dispatch({ type: EDIT_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userAccount");

  dispatch({ type: LOGOUT });
};
