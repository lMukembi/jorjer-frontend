import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../Css/ViewPost.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getPost } from "../../Redux/Queries/Actions/Posts";
import MoreOptions from "./MoreOptions";
import { BsGrid } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { IoChevronBackCircle, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Avatar from "../Components/Avatar.png";
import jorjercover from "../Components/jorjercover.png";
import Loader from "./Loader";
import DesktopSidebar from "./DesktopSidebar";
import TopBar from "./TopBar";

function ViewPost() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { post, loading } = useSelector((state) => state.Posts);

  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);

  const history = useHistory();

  const [toggleMoreOptions, setToggleMoreOptions] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    dispatch(getPost(postId));
  }, []);

  if (loading) {
    return <Loader />;
  }

  const IconStyles = {
    fontSize: "15px",
    color: "#514b4b",
    marginRight: "8px",
  };

  const flexline = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <div>
      {post !== null && (
        <>
          <TopBar />

          {window.outerWidth > 1023 && <DesktopSidebar />}

          <div className="vll" />

          <div className="vpost">
            <h3
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span
                style={{
                  left: "10px",
                  top: "5px",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
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
                Go Back
              </span>
              {post.authorId.username}'s post
              <span
                style={{
                  right: "10px",
                  top: "5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                {userData !== null &&
                  post.authorId._id === userData.result._id && (
                    <>
                      <HiOutlineDotsVertical
                        onClick={() => setToggleMoreOptions(!toggleMoreOptions)}
                        style={IconStyles}
                      />
                    </>
                  )}
              </span>
              {toggleMoreOptions && (
                <MoreOptions close={setToggleMoreOptions} postId={post._id} />
              )}
            </h3>
            <div className="pcontainer">
              <div>
                {post.file ? (
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${post.file}`}
                    alt={post.authorId.username}
                    className="vpimage"
                  />
                ) : (
                  <img
                    className="vpimage"
                    alt={post.authorId.username}
                    src={jorjercover}
                  />
                )}
                <div className="pdetails">
                  <p className="puser">
                    {post.authorId.avatar ? (
                      <img
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          marginRight: "0.5rem",
                          objectFit: "cover",
                        }}
                        src={`https://drive.google.com/uc?export=view&id=${post.authorId.avatar}`}
                        alt={post.authorId.username}
                      />
                    ) : (
                      <img
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          marginRight: "0.5rem",
                        }}
                        src={Avatar}
                        alt={post.authorId.username}
                      />
                    )}
                    <span>
                      {post && post.authorId.username.length > 10
                        ? post.authorId.username.substring(0, 10) + "..."
                        : post.authorId.username}
                    </span>
                    <span>•</span>
                    <span
                      style={{ color: "rgb(55, 135, 185)", fontSize: "11px" }}
                    >
                      {moment(post.createdAt).fromNow()}
                    </span>
                  </p>
                  <div className="pstds">
                    <p style={flexline}>
                      <BsGrid
                        style={{
                          color: "green",
                          fontSize: "17px",
                          marginRight: "5px",
                        }}
                      />
                      <span style={{ fontSize: "12px" }}>{post.category}</span>
                    </p>
                    <p style={flexline}>
                      <CgMediaLive
                        style={{
                          color: "red",
                          fontSize: "17px",
                          marginRight: "5px",
                        }}
                      />
                      <span style={{ fontSize: "12px" }}>{post.platform}</span>
                    </p>
                    <p style={flexline}>
                      <div style={{ display: "flex" }}>
                        <IoIosPeople
                          style={{
                            color: "rgb(55, 135, 185)",
                            fontSize: "17px",
                            marginRight: "5px",
                          }}
                        />
                        <span>
                          <small style={{ fontSize: "12px" }}>
                            {post.followersCount}
                          </small>
                          <small
                            style={{ marginLeft: "0.2rem", fontSize: "12px" }}
                          >
                            {post.audienceType}
                          </small>
                        </span>
                      </div>
                    </p>
                    <p style={flexline}>{post.content}</p>
                  </div>
                </div>
              </div>
              <div className="bc">
                <div className="pd">
                  <h4>Contact {post.authorId.username} using these details.</h4>
                  <p className="pde">
                    <ul
                      style={{
                        margin: "auto",
                        display: "flex",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                      }}
                    >
                      <li>
                        <MdEmail
                          style={{ marginRight: "5px", color: "black" }}
                        />
                      </li>
                      <li>{post.authorId.email}</li>
                    </ul>
                  </p>
                  <p
                    style={{
                      backgroundColor: "rgb(55, 135, 185)",
                      display: "flex",
                    }}
                  >
                    <ul
                      style={{
                        margin: "auto",
                        display: "flex",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                      }}
                    >
                      <li>
                        <IoCall
                          style={{ marginRight: "5px", color: "black" }}
                        />
                      </li>
                      <li>{post.authorId.phone}</li>
                    </ul>
                  </p>
                  <h4>Check this notice!</h4>
                  <ol className="notice">
                    <li>Review the social media account up to satisfaction.</li>
                    <li>Make sure the social media account exists.</li>
                    <li>
                      Make sure followers, suscribers, page likes, views, and
                      contacts are real.
                    </li>
                    <li>Be careful of scammers.</li>
                    <li>Never pay in advance.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="vclose" />
        </>
      )}
    </div>
  );
}

export default ViewPost;
