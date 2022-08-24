import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        width: "60%",
        marginLeft: "auto",
        textAlign: "center",
        marginRight: "auto",
        marginTop: "8rem",
      }}
    >
      <h2 style={{ color: "rgb(55, 135, 185)" }}>404 ERROR: PAGE NOT FOUND!</h2>
      <p style={{ fontSize: "25px", marginTop: "1rem" }}>
        It seems that you got lost, but we are here to help.{" "}
      </p>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        The page that you are looking for doesn't exist on this website. You may
        have accidentally mistyped the page address, or followed an expired
        link. Anyway, we will help you get back on track.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <hr
          style={{
            flex: "auto",
            border: "none",
            height: "1px",
            backgroundColor: "rgb(94, 91, 91)",
          }}
        />
        <span style={{ padding: "0.5em", color: "rgb(55, 135, 185)" }}>OR</span>
        <hr
          style={{
            flex: "auto",
            border: "none",
            height: "1px",
            backgroundColor: "rgb(94, 91, 91)",
          }}
        />
      </div>
      <Link
        style={{
          padding: "0.5rem",
          backgroundColor: "rgb(55, 136, 184)",
          borderRadius: "5px",
          cursor: "pointer",
          textDecoration: "none",
        }}
        to="/"
      >
        Go back
      </Link>
    </div>
  );
};

export default PageNotFound;
