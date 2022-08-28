import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router";
import "../Css/ViewPost.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { SinceInitialTime } from "./SinceInitialTime";
import { getPost } from "../../Redux/Queries/Actions/Posts";
import MoreOptions from "./MoreOptions";
import { BsGrid } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { IoChevronBackCircle, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Avatar from "../Components/Avatar.png";
import JORJER from "../Components/JORJER.png";
import Loader from "./Loader";
import DesktopSidebar from "./DesktopSidebar";
import MobileBar from "./MobileBar";
import TopBar from "./TopBar";

function ViewPost() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { posts, post, loading } = useSelector((state) => state.Posts);

  const history = useHistory();

  const [toggleMoreOptions, setToggleMoreOptions] = useState(false);
  const userInfo = localStorage.getItem("userAccount");
  const userData = JSON.parse(userInfo);

  const [data, setData] = useState([]);

  const platformFilter = (platItem) => {
    const items = posts.filter((carItem) => {
      return carItem.platform === platItem;
    });
    setData(items);
  };

  useEffect(() => dispatch(getPost(postId)));

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    setData(posts);
  }, [posts]);

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

  if (post === null) {
    return <Redirect to="/page-not-found" />;
  }

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
          {post.author}'s post
          <span
            style={{
              right: "10px",
              top: "5px",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            {post.author && userData && (
              <>
                <HiOutlineDotsVertical
                  onClick={() => setToggleMoreOptions(!toggleMoreOptions)}
                  style={IconStyles}
                />
              </>
            )}
          </span>
          {toggleMoreOptions && (
            <MoreOptions close={setToggleMoreOptions} post={post} />
          )}
        </h3>
        <div className="pcontainer">
          <div>
            {post.file ? (
              <img
                src={`https://drive.google.com/uc?export=view&id=${post.file}`}
                alt={post.author}
                className="vpimage"
              />
            ) : (
              <img className="vpimage" alt={post.author} src={JORJER} />
            )}
            <div className="pdetails">
              <p className="puser">
                {post.avatar ? (
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      marginRight: "0.5rem",
                    }}
                    src={post.avatar}
                    alt={post.author}
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
                    alt={post.author}
                  />
                )}
                <span>
                  {post && post.author.length > 10
                    ? post.author.substring(0, 10) + "..."
                    : post.author}
                </span>
                <span>•</span>
                <span>{SinceInitialTime(post.createdAt)}</span>
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
                      <small style={{ marginLeft: "0.2rem", fontSize: "12px" }}>
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
              <h4>Contact {post.author} using these details.</h4>
              <p className="pde">
                <MdEmail style={{ marginRight: "5px", color: "black" }} />
                {post.email}
              </p>
              <p
                style={{
                  backgroundColor: "rgb(55, 135, 185)",
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                  paddingLeft: "6rem",
                  paddingRight: "6rem",
                }}
              >
                <IoCall style={{ marginRight: "5px", color: "black" }} />
                {post.phone}
              </p>
              <h4>Check this notice!</h4>
              <ol className="notice">
                <li>Review the social media account up to satisfaction.</li>
                <li>Be careful of scammers.</li>
                <li>Never pay in advance.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="vclose" />
    </div>
  );
}

export default ViewPost;
