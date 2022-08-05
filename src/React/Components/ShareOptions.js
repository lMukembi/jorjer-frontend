import React, { useState } from "react";
import "../Css/ShareOptions.css";
import WritePost from "../Components/WritePost";
import { IoBagAdd } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiSellfy } from "react-icons/si";

const ShareOptions = (props) => {
  const [current, setCurrent] = useState(null);
  const [addJob, setAddJob] = useState(false);
  const [sellAccount, setSellAccount] = useState(false);
  const [monetizeAccount, setMonetizeAccount] = useState(false);

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
        <li
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setMonetizeAccount(!monetizeAccount)}
        >
          <GiTakeMyMoney style={{ color: "green", fontSize: "20px" }} />

          <span style={{ marginLeft: "5px" }}>Make Money</span>
        </li>
        {monetizeAccount && (
          <WritePost
            value="Hire Me"
            monetizeAccount={monetizeAccount}
            setCurrent={setCurrent}
            close={setMonetizeAccount}
          />
        )}

        <li
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setSellAccount(!sellAccount)}
        >
          <SiSellfy style={{ color: "#FF9900", fontSize: "20px" }} />

          <span style={{ marginLeft: "5px" }}>Sell Account</span>
        </li>
        {sellAccount && (
          <WritePost
            value="On Sale"
            sellAccount={sellAccount}
            setCurrent={setCurrent}
            close={setSellAccount}
          />
        )}

        <li
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setAddJob(!addJob)}
        >
          <IoBagAdd style={{ color: "blue", fontSize: "20px" }} />

          <span style={{ marginLeft: "5px" }}>Add Job</span>
        </li>
        {addJob && (
          <WritePost
            value="Apply Job"
            addJob={addJob}
            setCurrent={setCurrent}
            close={setAddJob}
          />
        )}
      </ul>
      <div className="form-close" onClick={() => props.close(false)} />
    </div>
  );
};

export default ShareOptions;
