import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  EDIT_USER,
  GET_USER_SUCCESS,
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
    window.location.reload(false);
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
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

export const editUser = (id, editForm) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  console.log(editForm, "editform");

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

//LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userAccount");

  dispatch({ type: LOGOUT });
};
