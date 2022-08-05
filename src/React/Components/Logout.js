import React from "react";
import "../Css/MoreOptions.css";
import { IoLogOutOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
  const history = useHistory();

  function logoutUser() {
    localStorage.clear();
    history.push("/login");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          top: "0.4rem",
          right: "3rem",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "white",
          padding: "0.2rem",
          borderRadius: "5px",
          zIndex: 2,
        }}
        onClick={logoutUser}
      >
        <IoLogOutOutline
          style={{
            marginRight: "0.5rem",
            color: "rgb(55, 136, 184)",
            fontSize: "24px",
          }}
        />
        <small>Logout</small>
      </div>
      <div
        style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0 }}
        onClick={() => props.close(false)}
      />
    </>
  );
};

export default Logout;
