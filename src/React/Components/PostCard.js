import React from "react";
import { Link } from "react-router-dom";
import { SinceInitialTime } from "./SinceInitialTime";
import { BsGrid } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import Avatar from "../Components/Avatar.png";
import JORJER from "../Components/JORJER.png";
import "../Css/PostCard.css";

function PostCard({ post }) {
  console.log(post, "post image");
  const flexline = {
    display: "flex",
  };

  return (
    <Link
      className="link"
      to={{
        pathname: `/posts/${post._id}`,
        state: { post: post },
      }}
    >
      <div className="post-container">
        <div className="post-image">
          {post.file ? (
            <img
              src={`https://jorjer.herokuapp.com/static/${post.file}`}
              alt={post.author}
              style={{ borderRadius: "10px" }}
            />
          ) : (
            <img style={{ borderRadius: "10px" }} src={JORJER} />
          )}
        </div>

        <div className="post-details">
          <p className="pst-user">
            {post.avatar ? (
              <img className="pc-avatar" src={post.avatar} alt={post.author} />
            ) : (
              <img className="pc-avatar" src={Avatar} alt={post.author} />
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
              {post.category}
            </p>
            <p style={flexline}>
              <CgMediaLive
                style={{
                  color: "red",
                  fontSize: "17px",
                  marginRight: "5px",
                }}
              />
              {post.platform}
            </p>
            <p style={flexline}>
              <IoIosPeople
                style={{
                  color: "rgb(55, 135, 185)",
                  fontSize: "17px",
                  marginRight: "5px",
                }}
              />

              <span>
                <small style={{ marginLeft: "0.2rem", fontSize: "12px" }}>
                  {post.followersCount}
                </small>
                <small style={{ marginLeft: "0.2rem", fontSize: "12px" }}>
                  {post.audienceType}
                </small>
              </span>
            </p>
            <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
            {window.outerWidth < 1023 && (
              <p>
                <button
                  type="button"
                  style={{
                    paddingTop: "0.5rem",
                    marginTop: "1rem",
                    paddingBottom: "0.5rem",
                    paddingRight: "2rem",
                    paddingLeft: "2rem",
                    borderRadius: "15px",
                    alignItems: "center",
                    backgroundColor: "rgb(55, 135, 185)",
                  }}
                >
                  {post.btnType}
                </button>
              </p>
            )}
          </div>
        </div>
        {window.outerWidth > 1023 && (
          <div>
            <button type="button" className="hjb">
              {post.btnType}
            </button>
          </div>
        )}
      </div>
    </Link>
  );
}

export default PostCard;
