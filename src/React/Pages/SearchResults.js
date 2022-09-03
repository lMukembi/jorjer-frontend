import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPostsSearchResults } from "../../Redux/Queries/Actions/Search";
import DesktopSidebar from "../Components/DesktopSidebar";
import Loader from "../Components/Loader";
import MobileBar from "../Components/MobileBar";
import PostCard from "../Components/PostCard";
import TopBar from "../Components/TopBar";
import Filter from "../Components/Filter.jpg";
import "../Css/Share.css";

const SearchResults = (search) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { posts, loading } = useSelector((state) => state.Posts);
  const { search: results } = useLocation();
  const id = new URLSearchParams(results).get("q");

  const [data, setData] = useState([]);

  const platformFilter = (platItem) => {
    const items = posts.filter((carItem) => {
      return carItem.platform === platItem;
    });
    setData(items);
  };

  useEffect(() => {
    dispatch(getPostsSearchResults(id));
  }, [location.key]);

  useEffect(() => {
    setData(posts);
  }, [posts]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <TopBar platformFilter={platformFilter} />

      {window.outerWidth > 1023 && (
        <DesktopSidebar data={data} setData={setData} />
      )}

      <div className="vll" />

      {window.innerWidth < 1024 && <MobileBar data={data} setData={setData} />}

      <div className="sresults">
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
        {posts.length === 0 && (
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              marginTop: "0.2rem",
            }}
          >
            <img
              styles={{ width: "10px", height: "10px" }}
              src={Filter}
              alt="Jorjer no results"
            />
            <p>No posts available!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
