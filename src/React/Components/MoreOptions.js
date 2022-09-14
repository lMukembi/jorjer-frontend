import React from "react";
import "../Css/MoreOptions.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { deletePost } from "../../Redux/Queries/Actions/Posts";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Icon_Styles = {
  fontSize: "17px",
  color: "#514b4b",
};

const MoreOptions = ({ postId, close }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const Delete = () => {
    if (postId) {
      dispatch(deletePost(postId));
    }
    history.goBack();
  };

  return (
    <>
      <div className="more-options">
        <ul className="flex-row">
          <li onClick={() => Delete()}>
            <RiDeleteBinLine style={Icon_Styles} />
            <small>Delete post</small>
          </li>
        </ul>
      </div>
      <div className="mclose" onClick={() => close(false)} />
    </>
  );
};

export default MoreOptions;
