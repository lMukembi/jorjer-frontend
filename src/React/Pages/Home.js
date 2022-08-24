import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/Home.css";
import Loader from "../Components/Loader";
import { getPosts } from "../../Redux/Queries/Actions/Posts";
import MobileBar from "../Components/MobileBar";
import TopBar from "../Components/TopBar";
import "../Css/DesktopSidebar.css";
import PostCard from "../Components/PostCard";
import Filter from "../Components/Filter.jpg";
import { useLocation } from "react-router-dom";
import DesktopSidebar from "../Components/DesktopSidebar";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { posts, loading } = useSelector((state) => state.Posts);
  const [data, setData] = useState([]);

  const platformFilter = (platItem) => {
    const items = posts.filter((carItem) => {
      return carItem.platform === platItem;
    });
    setData(items);
  };

  const [randomText, setRandomText] = useState();

  const Texts = ["monetize", "sell", "hire", "buy"];
  const changeText = useCallback(() => {
    let randomItem = Texts[Math.floor(Math.random() * Texts.length)];
    setRandomText(randomItem);
  }, []);

  useEffect(() => {
    dispatch(getPosts());
    let text = setInterval(changeText, 2000);
    return () => clearInterval(text);
  }, [location.key, posts, changeText]);

  useEffect(() => {
    setData(posts);
  }, [posts]);

  const setHidden = () => {
    // console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home">
      <TopBar platformFilter={platformFilter} />

      {window.outerWidth > 1023 && (
        <DesktopSidebar data={data} setData={setData} />
      )}

      <div className="vll" />

      {window.innerWidth < 1024 && <MobileBar data={data} setData={setData} />}

      <div className="home-feeds">
        <p className="header">
          <span style={{ fontSize: "22px" }}>Trending</span>
          <span style={{ fontSize: "13px" }}>
            Want to
            <small
              style={{
                color: "rgb(55, 135, 185)",
                marginLeft: "0.2rem",
                marginRight: "0.2rem",
                fontSize: "13px",
                fontWeight: "700px",
              }}
            >
              {randomText}
            </small>
            a social media account?
          </span>
        </p>
        <div>
          {data.length > 0 &&
            data.map((post) => {
              return (
                <>
                  <PostCard key={post._id} post={post} onClick={setHidden} />
                </>
              );
            })}
          {data.length === 0 && (
            <div
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              <img
                styles={{ width: "20px", height: "20px" }}
                src={Filter}
                alt="Jorjer no results"
              />

              <p>
                No posts available that match with the filter. Try another
                filter.
              </p>
              <div className="or">
                <hr />
                <span>OR</span>
                <hr />
              </div>
              <button
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  backgroundColor: "rgb(55, 136, 184)",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setData(posts)}
              >
                Go back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
