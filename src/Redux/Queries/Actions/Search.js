import { GET_POSTS_SEARCH_RESULTS } from "../Constants/Posts";

import axios from "axios";
const hostUrlApi = "http://localhost:4000";
const hostUrl = "https://jorjer.herokuapp.com";

export const getPostsSearchResults = (q) => async (dispatch) => {
  try {
    const { data: posts } = await axios.get(
      `${hostUrl}/api/search/searchPost?q=${q || "none"}`
    );
    dispatch({ type: GET_POSTS_SEARCH_RESULTS, payload: posts.result });
  } catch (error) {
    console.log(error);
  }
};
