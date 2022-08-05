import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getPostsSearchResults } from "../../Redux/Queries/Actions/Search";
import PostCard from "../Components/PostCard";

const SearchResults = (search) => {
  console.log(search);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.Posts);
  const { search: results } = useLocation();
  const id = new URLSearchParams(results).get("q");

  useEffect(() => {
    dispatch(getPostsSearchResults(id));
  }, []);

  return (
    <Link
      style={{ textDecoration: "none" }}
      path={`/search/searchPost?q=${search || "none"}`}
    >
      <div
        style={{
          zIndex: 1,
          position: "relative",
          width: "762px",
          backgroundColor: "white",
          left: "453px",
          top: "6rem",
          borderRadius: "5px",
          paddingTop: "1rem",
        }}
      >
        <h3 style={{ color: "black", marginLeft: "0.5rem" }}>
          Posts search result.
        </h3>
        {posts &&
          posts.length > 0 &&
          posts.map((post) => {
            return (
              <>
                <PostCard
                  style={{ cursor: "pointer" }}
                  key={post._id}
                  post={post}
                />
              </>
            );
          })}
      </div>
    </Link>
  );
};

export default SearchResults;
