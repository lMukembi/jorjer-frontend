import React, { useState } from "react";
import "../Css/PostOptions.css";
import WritePost from "../Components/WritePost";
import { IoBagAdd } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiSellfy } from "react-icons/si";

const PostOptions = (props) => {
  const [addJob, setAddJob] = useState(false);
  const [sellAccount, setSellAccount] = useState(false);
  const [monetizeAccount, setMonetizeAccount] = useState(false);

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
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            onClick={() => setAddJob(!addJob)}
          >
            <IoBagAdd
              style={{ color: "blue", fontSize: "20px", marginLeft: "1rem" }}
            />
            <span style={{ marginLeft: "5px" }}>Add job</span>
            {addJob && <WritePost value="Get Job" close={setAddJob} />}
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
            onClick={() => setSellAccount(!sellAccount)}
          >
            <SiSellfy
              style={{ color: "#FF9900", fontSize: "20px", marginLeft: "1rem" }}
            />
            <span style={{ marginLeft: "5px" }}>Sell account</span>
            {sellAccount && (
              <WritePost value="On Sale" close={setSellAccount} />
            )}
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
            onClick={() => setMonetizeAccount(!monetizeAccount)}
          >
            <GiTakeMyMoney
              style={{ color: "green", fontSize: "20px", marginLeft: "1rem" }}
            />

            <span style={{ marginLeft: "5px" }}>Make Money</span>

            {monetizeAccount && (
              <WritePost value="Hire Me" close={setMonetizeAccount} />
            )}
          </li>
        </ul>
      </div>
      <div className="pclose" onClick={() => props.close()} />
    </div>
  );
};

export default PostOptions;
