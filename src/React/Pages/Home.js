import React, { useState, useEffect } from "react";
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
  const [current, setCurrent] = useState(null);
  const [data, setData] = useState([]);

  const platformFilter = (platItem) => {
    const items = posts.filter((carItem) => {
      return carItem.platform === platItem;
    });
    setData(items);
  };

  const [randomText, setRandomText] = useState();

  const Texts = ["monetize", "sell", "hire", "buy"];
  const changeText = () => {
    let randomItem = Texts[Math.floor(Math.random() * Texts.length)];
    setRandomText(randomItem);
  };
  const startTimer = () => {
    setInterval(changeText, 3000);
  };

  useEffect(() => {
    startTimer();
    dispatch(getPosts());
  }, [location.key]);

  useEffect(() => {
    setData(posts);
  }, [posts]);

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

      {window.innerWidth < 1024 && (
        <MobileBar setCurrent={setCurrent} data={data} setData={setData} />
      )}

      <div className="home-feeds">
        <p className="header">
          <span style={{ fontSize: "25px" }}>Trending</span>
          <span>
            "Want to
            <small
              style={{
                color: "blue",
                marginLeft: "0.2rem",
                marginRight: "0.2rem",
              }}
            >
              {randomText}
            </small>
            a social media account?"
          </span>
        </p>
        <div>
          {data.length > 0 &&
            data.map((post) => {
              return (
                <>
                  <PostCard key={post._id} post={post} />
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

              <p>No posts available that match with the filter.</p>
              <p>Try another filter</p>
              <p>or</p>
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
                Go back to home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
