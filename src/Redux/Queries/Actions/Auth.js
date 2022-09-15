import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  GET_USER_SUCCESS,
  EDIT_USER,
  LOGOUT,
} from "../Constants/Users";

import axios from "axios";

const hostUrlApi = "http://localhost:4000";
const hostUrl = "https://jorjer.herokuapp.com";

// Signup User
export const signup = (formData) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };

  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      `${hostUrl}/api/user/signup`,
      {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      },
      config
    );

    dispatch({ type: SIGNUP_SUCCESS, payload: data });

    localStorage.setItem("userAccount", JSON.stringify(data));

    if (data) {
      alert("Account created successfully.");
    }
  } catch (error) {
    console.log(error);
    if (error) {
      window.location.href = "./signup";
      alert("Invalid email or short password.");
    }
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };

  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      `${hostUrl}/api/user/login`,
      {
        email: formData.email,
        password: formData.password,
      },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userAccount", JSON.stringify(data));
    if (data) {
      alert("Logged in successfully.");
    }
  } catch (error) {
    console.log(error);
    if (error) {
      window.location.href = "./login";
      alert("Password or email is wrong.");
    }
  }
};

export const editUser = (id, editForm) => async (dispatch) => {
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
    const { data } = await axios.put(
      `${hostUrl}/api/auth/editUser/${id}`,
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

// GET USER
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${hostUrl}/api/auth/getUser/${id}`);

    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userAccount");

  dispatch({ type: LOGOUT });
};
