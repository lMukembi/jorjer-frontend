import React from "react";
import { useSelector } from "react-redux";
import { SinceInitialTime } from "../Components/SinceInitialTime";

const MsgList = () => {
  const { messages } = useSelector((state) => state.Message);

  return (
    <div className="posts">
      {messages.map((message) => (
        <div key={message._id}>
          <p>{message.avatar}</p>
          <p>
            <ul>
              <li> {message.author}</li>
              <li>{message.content}</li>
            </ul>
          </p>
          <span>{SinceInitialTime(message.createdAt)}</span>
        </div>
      ))}
    </div>
  );
};

export default MsgList;
