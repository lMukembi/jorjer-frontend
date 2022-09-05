import React from "react";
import "../Css/ShareOptions.css";
import { IoBagAdd } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiSellfy } from "react-icons/si";
import { Link } from "react-router-dom";

const ShareOptions = (props) => {
  return (
    <div>
      <ul className="ss">
        <p className="flex-row">
          <AiFillCloseCircle
            className="share-close"
            onClick={() => props.close()}
            style={{ fontSize: "20px", color: "rgb(55, 135, 185)" }}
          />
        </p>
        <h2>Select post to create</h2>
        <Link
          to={{
            pathname: "/create",
            state: { value: "Hire Me" },
          }}
          className="link"
        >
          <li style={{ display: "flex", alignItems: "center" }}>
            <GiTakeMyMoney style={{ color: "green", fontSize: "20px" }} />

            <span style={{ marginLeft: "5px" }}>Make Money</span>
          </li>
        </Link>

        <Link
          to={{
            pathname: "/create",
            state: { value: "On Sale" },
          }}
          className="link"
        >
          <li style={{ display: "flex", alignItems: "center" }}>
            <SiSellfy style={{ color: "#FF9900", fontSize: "20px" }} />

            <span style={{ marginLeft: "5px" }}>Sell Account</span>
          </li>
        </Link>

        <Link
          to={{
            pathname: "/create",
            state: { value: "Get Job" },
          }}
          className="link"
        >
          <li style={{ display: "flex", alignItems: "center" }}>
            <IoBagAdd style={{ color: "blue", fontSize: "20px" }} />

            <span style={{ marginLeft: "5px" }}>Add Job</span>
          </li>
        </Link>
      </ul>
      <div className="sclose" onClick={() => props.close()} />
    </div>
  );
};

export default ShareOptions;
