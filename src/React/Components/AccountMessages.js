import React from "react";
import "../Css/Messages.css";
import { useSelector } from "react-redux";
import Messages from "../Pages/Messages";

function AccountMessages() {
  const { messages } = useSelector((state) => state.Messages);

  if (!messages.length) {
    return <p>You have 0 messages.</p>;
  }
  return (
    <div>
      {messages.map((message) => (
        <Messages />
      ))}
    </div>
  );
}

export default AccountMessages;
