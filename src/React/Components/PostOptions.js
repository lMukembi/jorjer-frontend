import React from "react";
import "../Css/PostOptions.css";
import { IoBagAdd } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiSellfy } from "react-icons/si";
import { Link } from "react-router-dom";

const PostOptions = (props) => {
  return (
    <div>
      <div className="pstsc">
        <ul>
          <p className="flex-row">
            <AiFillCloseCircle
              className="share-close"
              onClick={() => props.close()}
              style={{
                fontSize: "20px",
                color: "rgb(55, 135, 185)",
                marginTop: "10px",
              }}
            />
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              marginLeft: "1rem",

              marginTop: "1rem",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Select post to create
          </p>
          <Link
            to={{
              pathname: "/create",
              state: { value: "APPLY NOW" },
            }}
            className="link"
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              <IoBagAdd
                style={{ color: "blue", fontSize: "20px", marginLeft: "1rem" }}
              />
              <span style={{ marginLeft: "5px" }}>Add job</span>
            </li>
          </Link>
          <Link
            to={{
              pathname: "/create",
              state: { value: "BUY NOW" },
            }}
            className="link"
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                listStyleType: "none",
              }}
            >
              <SiSellfy
                style={{
                  color: "#FF9900",
                  fontSize: "20px",
                  marginLeft: "1rem",
                }}
              />
              <span style={{ marginLeft: "5px" }}>Sell account</span>
            </li>
          </Link>
          <Link
            to={{
              pathname: "/create",
              state: { value: "HIRE ME" },
            }}
            className="link"
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                listStyleType: "none",
              }}
            >
              <GiTakeMyMoney
                style={{ color: "green", fontSize: "20px", marginLeft: "1rem" }}
              />

              <span style={{ marginLeft: "5px" }}>Make Money</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="pclose" onClick={() => props.close()} />
    </div>
  );
};

export default PostOptions;
