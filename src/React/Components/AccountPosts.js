import React, { useEffect } from "react";
import "../Css/Account.css";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../Components/PostCard";
import { useParams } from "react-router-dom";
import { GET_USER_POSTS_SUCCESS } from "../../Redux/Queries/Constants/Posts";
import axios from "axios";

function AccountPosts() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { posts } = useSelector((state) => state.UserPosts);

  const getUserPosts = async () => {
    try {
      const { data } = await axios.get(
        `https://jorjer.herokuapp.com/api/post/getUserPosts/${id}`
      );

      dispatch({ type: GET_USER_POSTS_SUCCESS, payload: data });
      console.log(data, "qwerfgnkop[';kjh");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [dispatch]);

  if (!posts.length) {
    return <p>This account has 0 posts.</p>;
  }
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default AccountPosts;
