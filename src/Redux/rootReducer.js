import { combineReducers } from "redux";

import Users from "./Queries/Reducers/Users";
import UserPosts from "./Queries/Reducers/UserPosts";
import Posts from "./Queries/Reducers/Posts";
import Search from "./Queries/Reducers/Search";
import Message from "./Queries/Reducers/Message";

const rootReducer = combineReducers({
  Users,
  Posts,
  UserPosts,
  Search,
  Message,
});
export default rootReducer;
