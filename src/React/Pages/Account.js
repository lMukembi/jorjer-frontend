import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import "../Css/Account.css";
import { SinceInitialTime } from "../Components/SinceInitialTime";
import { IoChevronBackCircle } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import EditProfile from "../../React/Components/EditProfile";
import { getUser } from "../../Redux/Queries/Actions/Users";
import Logout from "../Components/Logout";
import Avatar from "../Components/Avatar.png";
import PostCard from "../Components/PostCard";
import { getUserPosts } from "../../Redux/Queries/Actions/Posts";

function Account() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const [logout, setLogout] = useState(false);
  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { userPosts } = useSelector((state) => state.UserPosts);

  if (!userPosts.length) {
    return <p>This account has 0 posts.</p>;
  }

  if (!userData) {
    return <Redirect to="/auth-form" />;
  }

  return (
    <div>
      <div className="account-container">
        <div className="vertical-l-line" />

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
                className=" user-bar"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <li>
                  {userData.result.avatar ? (
                    <img
                      className="avatar"
                      src={userData.result.avatar}
                      alt={userData.result.username}
                    />
                  ) : (
                    <img
                      className="avatar"
                      src={Avatar}
                      alt={userData.result.username}
                    />
                  )}
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  {userData.result.username}
                </li>
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
              <p>{userData.result.bio} I am a social media influencer...</p>

              <p
                style={{
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <span>Joined</span>
                <span>{SinceInitialTime(userData.result.createdAt)} ago</span>
              </p>
            </div>
          </div>

          <div style={{ padding: "0.2rem" }}>
            <h1 style={{ marginLeft: "4.5rem", marginBottom: "1rem" }}>
              Posts
            </h1>
            <hr style={{ color: "blue" }} />
            <div>
              {userPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="form-close" />
    </div>
  );
}

export default Account;
