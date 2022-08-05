import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/TopBar.css";
import {
  NavLink,
  Link,
  useLocation,
  useParams,
  useHistory,
} from "react-router-dom";
import WritePost from "../../React/Components/WritePost";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { CgMenuRound } from "react-icons/cg";
import { getPosts } from "../../Redux/Queries/Actions/Posts";

import {
  getUsersSearchResults,
  getPostsSearchResults,
} from "../../Redux/Queries/Actions/Search";

const Icon_Styles = {
  fontSize: "24px",
  color: "#514b4b",
};

const IconStyles = {
  fontSize: "30px",
  color: "#514b4b",
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AccountBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const history = useHistory();

  const post = useSelector((state) => state.Posts);
  const { userData } = useSelector((state) => state.Users);

  const [search, setSearch] = useState("");
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("userAccount"))
  );

  const handleSearch = () => {
    if (search.trim()) {
      dispatch(getPostsSearchResults(search));
      dispatch(getUsersSearchResults(search));

      history.push(`/search/results?searchQuery=${search || "none"}`);
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  // const handleLogout = () => {
  //   dispatch({ type: "LOGOUT" });
  //   setIsAuth(null);
  // };

  useEffect(() => {
    // const token = isAuth.token;

    // if (token) {
    //   // const decodedToken = decode(token);

    //   if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    // }

    setIsAuth(JSON.parse(localStorage.getItem("userAccount")));
  }, [location]);

  // const handleGetCategory = () => {
  //   searchValue(ref.current.value);
  // };

  return (
    <div className="top-bar">
      <ul>
        <li className="logo-bar flex-row">
          <div>
            JorJer
          </div>
          <div className="search">
            <input
              name="search"
              className="search-form"
              type="text"
              placeholder="Search post, tag, category ..."
              onKeyDown={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />

            <span className="search-vertical-line" />
            <span className="search-icon">
              <IoSearchOutline style={Icon_Styles} onClick={handleSearch} />
            </span>
          </div>
          <li>
            {isAuth ? (
              <div>
                <ul className="flex-row align-center">
                  <li>
                    <NavLink to="/messages" className="link notification-icon">
                      <IoNotificationsOutline style={Icon_Styles} />
                      <span className="notifications-count">12</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account/${userData}`}
                      className="user-handle"
                    >
                      <img
                        className="home-profile-image"
                        src={post.profileImage}
                        alt={userData.userName}
                      />
                      {window.outerWidth > 1023 && <span>Mukembi</span>}
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link to="/auth-form">
                  <button className="login">Login</button>
                </Link>
              </div>
            )}
          </li>
        </li>
      </ul>
    </div>
  );
};

export default AccountBar;
