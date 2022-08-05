import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReport } from "../../Redux/Queries/Actions/Posts";
import "../Css/ReportAbuse.css";

export const ReportAbuse = ({ post, close }) => {
  const dispatch = useDispatch();
  // const { post } = props.location.state;

  const [reportForm, setReportForm] = useState("");

  const handleChange = (e) => {
    setReportForm({ ...reportForm, [e.target.name]: e.target.value });
  };

  const postOwner = post.author;

  const Report = (e) => {
    e.preventDefault();
    if (reportForm) {
      dispatch(addReport(reportForm, postOwner));
    }
    setReportForm("");
    close(false);
  };
  return (
    <>
      <div className="report">
        <div style={{ textAlign: "center" }}>Report {post.author} abuse</div>
        <textarea
          rows="5"
          className="textArea"
          type="text"
          name="bio"
          placeholder="Describe the abuse here..."
          onChange={handleChange}
        ></textarea>
        <div className="editButton" onClick={() => Report()}>
          Submit report
        </div>
      </div>
      <div className="mclose" onClick={() => close(false)} />
    </>
  );
};
