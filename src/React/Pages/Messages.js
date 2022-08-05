import React from "react";
import "../Css/Messages.css";
import MsgList from "./MsgList";

const Messages = (props) => {
  return (
    <>
      <div className="messages">
        <h4 style={{ textAlign: "center" }}>Inbox messages</h4>
        <MsgList />
      </div>
      <div className="mclose" onClick={() => props.close(false)} />
    </>
  );
};

export default Messages;
