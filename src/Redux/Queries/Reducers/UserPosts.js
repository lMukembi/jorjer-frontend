import { GET_USER_POSTS_SUCCESS } from "../Constants/Posts";

const initialState = {
  userPosts: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_POSTS_SUCCESS:
      return { ...state, userPosts: action.payload, loading: false };
    default:
      return state;
  }
};
