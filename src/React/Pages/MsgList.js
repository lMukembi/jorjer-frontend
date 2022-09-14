import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

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
          <span>{moment(post.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default MsgList;
