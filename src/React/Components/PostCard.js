import React from "react";
import { Link } from "react-router-dom";
import { BsGrid } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import Avatar from "../Components/Avatar.png";
import jorjercover from "../Components/jorjercover.png";
import "../Css/PostCard.css";
import moment from "moment";

function PostCard({ post }) {
  const flexline = {
    display: "flex",
  };

  // const postAuthor = (userid)=> {
  //   users.filter((item) =>{
  //      if ( item.id === userid){
  //          console.log(item.name)
  //          return item.name
  //      }
  //   })
  //  }

  return (
    <Link className="link" to={`/posts/${post._id}`}>
      <div className="post-container">
        <div className="post-image">
          {post.file ? (
            <img
              src={`https://drive.google.com/uc?export=view&id=${post.file}`}
              alt={post.author}
              style={{ borderRadius: "10px" }}
            />
          ) : (
            <img style={{ borderRadius: "10px" }} src={jorjercover} />
          )}
        </div>

        <div className="post-details">
          <p className="pst-user">
            {post.authorId.avatar ? (
              <img
                className="pc-avatar"
                src={`https://drive.google.com/uc?export=view&id=${post.authorId.avatar}`}
                alt={post.authorId.username}
              />
            ) : (
              <img
                className="pc-avatar"
                src={Avatar}
                alt={post.authorId.username}
              />
            )}
            <ul>
              <li>
                {post && post.authorId.username.length > 10
                  ? post.authorId.username.substring(0, 10) + "..."
                  : post.authorId.username}
              </li>

              <li style={{ color: "rgb(55, 135, 185)", fontSize: "11px" }}>
                {moment(post.createdAt).fromNow()}
              </li>
            </ul>
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
