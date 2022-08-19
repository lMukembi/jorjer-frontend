import {
  DELETE_MESSAGE_SUCCESS,
  GET_MESSAGES,
  ADD_MESSAGE,
} from "../Constants/Message";

import axios from "axios";

export const addMessage =
  ({ messageForm, userData }) =>
  async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      authorization: "Bearer " + userData.data,
    };
    try {
      const { data } = await axios.post(
        "https://jorjer.herokuapp.com/api/message/createMessage",
        { ...messageForm },
        { headers }
      );

      dispatch({ type: ADD_MESSAGE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const getMessages = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      " https://jorjer.herokuapp.com/api/message/getMessages"
    );

    dispatch({ type: GET_MESSAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMessage = (messageId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `https://jorjer.herokuapp.com/message/${messageId}/deleteMessage`
    );

    dispatch({ type: DELETE_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
