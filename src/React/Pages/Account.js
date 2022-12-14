import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import "../Css/Account.css";
import moment from "moment";
import { IoChevronBackCircle } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import EditProfile from "../../React/Components/EditProfile";
import Logout from "../Components/Logout";
import Avatar from "../Components/Avatar.png";
import PostCard from "../Components/PostCard";
import { getUserPosts } from "../../Redux/Queries/Actions/Posts";
import TopBar from "../Components/TopBar";
import DesktopSidebar from "../Components/DesktopSidebar";
import Loader from "../Components/Loader";
import { getUser } from "../../Redux/Queries/Actions/Auth";

function Account() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const [logout, setLogout] = useState(false);
  const userInfo = localStorage.getItem("userAccount");
  const userData1 = JSON.parse(userInfo);

  const { posts, loading } = useSelector((state) => state.Posts);
  const { userData } = useSelector((state) => state.Users);

  const [data, setData] = useState([]);

  const platformFilter = (platItem) => {
    const items = posts.filter((carItem) => {
      return carItem.platform === platItem;
    });
    setData(items);
  };

  useEffect(() => {
    dispatch(getUserPosts(id));
    dispatch(getUser(userData1.result._id));
  }, [location.key]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { userPosts } = useSelector((state) => state.UserPosts);

  useEffect(() => setData(posts), [posts]);

  if (loading) {
    return <Loader />;
  }

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className="account-container">
        <TopBar platformFilter={platformFilter} />

        {window.outerWidth > 1023 && (
          <DesktopSidebar data={data} setData={setData} />
        )}

        <div className="vll" />

        <div>
          <div className="profile-header">
            <div className="hd">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <li>
                  <IoChevronBackCircle
                    onClick={() => history.goBack()}
                    style={{
                      color: "rgb(55, 136, 184)",
                      cursor: "pointer",
                      fontSize: "30px",
                      marginRight: "0.45rem",
                      paddingLeft: "5px",
                    }}
                  />
                </li>

                <li style={{ padding: "0.5rem" }}>
                  <HiOutlineDotsVertical
                    style={{
                      top: "0.6rem",
                      position: "absolute",
                      right: "1rem",
                      cursor: "pointer",
                      borderRadius: "50%",
                      fontSize: "24px",
                      color: "#514b4b",
                    }}
                    onClick={() => {
                      setLogout(!logout);
                    }}
                  />
                </li>
                {logout && <Logout close={setLogout} />}
              </ul>
            </div>
            <div>
              <ul
                className="user-bar"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <li>
                  {userData.avatar ? (
                    <img
                      className="avatar"
                      src={`https://drive.google.com/uc?export=view&id=${userData.avatar}`}
                      alt={userData.username}
                    />
                  ) : (
                    <img
                      className="avatar"
                      src={Avatar}
                      alt={userData.username}
                    />
                  )}
                </li>
                <li style={{ marginLeft: "1rem" }}>{userData.username}</li>
                <li style={{ marginRight: "0.2rem", marginLeft: "auto" }}>
                  {userData && (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <span>
                          <button
                            style={{
                              marginRight: "0.5rem",
                              backgroundColor: "rgb(230, 225, 225)",
                              color: "rgb(55, 136, 184)",
                              border: "none",
                              borderRadius: "6px",
                              padding: "0.5rem",
                              cursor: "pointer",
                              textAlign: "center",
                            }}
                            onClick={() =>
                              setToggleEditProfile(!toggleEditProfile)
                            }
                          >
                            Edit Profile
                          </button>
                        </span>
                        {toggleEditProfile && (
                          <EditProfile close={setToggleEditProfile} />
                        )}
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="uad">
              <p>{userData.bio}</p>

              <p
                style={{
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <span>Joined</span>
                <span>{moment(userData.createdAt).format("ll")}</span>
              </p>
            </div>
          </div>

          <div style={{ padding: "0.2rem" }}>
            <h1 style={{ marginLeft: "4.5rem", marginBottom: "0.5rem" }}>
              Posts
            </h1>
            <hr style={{ color: "blue" }} />
            {userPosts.length > 0 ? (
              <div>
                {userPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <p>This account has 0 posts.</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-close" />
    </div>
  );
}

export default Account;
