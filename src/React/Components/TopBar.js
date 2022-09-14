import React, { useEffect, useState } from "react";
import "../Css/TopBar.css";
import "../Css/Home.css";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import ShareOptions from "./ShareOptions";
import Avatar from "../Components/Avatar.png";
import Jorjer from "../Components/Jorjer.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Queries/Actions/Auth";
import Loader from "./Loader";

const Icon_Styles = {
  fontSize: "24px",
  color: "#514b4b",
};

const IconStyle = {
  fontSize: "17px",
  color: "#514b4b",
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const TopBar = ({ platformFilter }) => {
  const dispatch = useDispatch();

  const query = useQuery();
  const q = query.get("q");
  const history = useHistory();

  const [togglePostOptions, setTogglePostOptions] = useState(false);
  const [search, setSearch] = useState("");

  const userInfo = localStorage.getItem("userAccount");
  const userData1 = JSON.parse(userInfo);

  const { userData } = useSelector((state) => state.Users);

  useEffect(() => {
    if (userData1 && userData1 !== null) {
      dispatch(getUser(userData1.result._id));
    }
  }, []);

  function slide(direction) {
    const container = document.getElementById("container");
    let scrollCompleted = 0;
    const slideVar = setInterval(function () {
      if (direction === "left") {
        container.scrollLeft -= 10;
      } else {
        container.scrollLeft += 10;
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 100) {
        window.clearInterval(slideVar);
      }
    }, 50);
  }

  const handleSearch = () => {
    if (search.trim()) {
      history.push(`/search/searchPost?q=${search || "none"}`);
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div className="top-bar">
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <li className="lga">
          <span>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "0.5rem",
                }}
                src={Jorjer}
              />
            </Link>
          </span>
          <span>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontSize: "24px",
                color: "black",
              }}
            >
              Jorjer
            </Link>
          </span>
        </li>
        <li className="search">
          <input
            name="search"
            className="search-form"
            type="text"
            autoComplete="off"
            placeholder="Type keyword here ..."
            onKeyDown={handleKeyPress}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <span className="search-icon">
            <IoSearchOutline style={Icon_Styles} onClick={handleSearch} />
          </span>
        </li>
        <li>
          {window.innerWidth > 1023 && (
            <button
              style={{
                backgroundColor: "rgb(55, 135, 185)",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                borderRadius: "5rem",
                cursor: "pointer",
              }}
              onClick={() => setTogglePostOptions(!togglePostOptions)}
            >
              Post
            </button>
          )}

          {window.innerWidth > 1023 && togglePostOptions && (
            <ShareOptions close={setTogglePostOptions} />
          )}
        </li>

        {userData ? (
          <>
            <li>
              <NavLink
                to={`/account/${userData._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span className="av">
                    {userData.avatar ? (
                      <img
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        src={`https://drive.google.com/uc?export=view&id=${userData.avatar}`}
                        alt={userData.username}
                      />
                    ) : (
                      <img
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                        }}
                        src={Avatar}
                        alt={userData.username}
                      />
                    )}
                  </span>
                </div>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              {window.innerWidth < 1023 && (
                <Link to="/login">
                  <button
                    style={{
                      backgroundColor: "rgb(55, 135, 185)",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      borderRadius: "5rem",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </button>
                </Link>
              )}
              {window.innerWidth > 1023 && (
                <Link to="/login">
                  <button
                    style={{
                      backgroundColor: "rgb(55, 135, 185)",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      borderRadius: "5rem",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </button>
                </Link>
              )}
            </li>
            <li>
              {window.innerWidth > 1023 && (
                <Link to="/signup">
                  <button
                    style={{
                      outline: "1px solid rgb(55, 135, 185)",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      borderRadius: "5rem",
                      cursor: "pointer",
                      marginRight: "1rem",
                    }}
                  >
                    Signup
                  </button>
                </Link>
              )}
            </li>
          </>
        )}
      </ul>

      <hr />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="rt"></div>
        <div className="popular-tags">
          <p>
            <ul id="container" className="ptl flex-row">
              <li onClick={() => platformFilter("Facebook")}>Facebook</li>
              <li onClick={() => platformFilter("Twitter")}>Twitter</li>
              <li onClick={() => platformFilter("TikTok")}>TikTok</li>
              <li onClick={() => platformFilter("WhatsApp")}>WhatsApp</li>
              <li onClick={() => platformFilter("YouTube")}>YouTube</li>
              <li onClick={() => platformFilter("Instagram")}>Instagram</li>
              <li onClick={() => platformFilter("Telegram")}>Telegram</li>
              <li onClick={() => platformFilter("Quora")}>Quora</li>
              <li onClick={() => platformFilter("Snapchat")}>Snapchat</li>
            </ul>
            <button
              type="button"
              onClick={() => slide("left")}
              className="left"
            >
              <RiArrowDropLeftLine style={IconStyle} />
            </button>
            <button type="button" onClick={() => slide()} className="right">
              <RiArrowDropRightLine style={IconStyle} />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
