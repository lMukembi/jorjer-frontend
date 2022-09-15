import { GET_POSTS_SEARCH_RESULTS } from "../Constants/Posts";

import axios from "axios";
const hostUrlApi = "http://localhost:4000";
const hostUrl = "https://jorjer.herokuapp.com";

export const getPostsSearchResults = (q) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };

  const config = {
    headers: headers,
  };

  try {
    const { data: posts } = await axios.get(
      `${hostUrl}/api/search/searchPost?q=${q || "none"}`,
      config
    );
    dispatch({ type: GET_POSTS_SEARCH_RESULTS, payload: posts.result });
  } catch (error) {
    console.log(error);
  }
};
