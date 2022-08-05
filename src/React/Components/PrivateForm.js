import React, { useState, useEffect } from "react";

import axios from "axios";

function PrivateForm({ history }) {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          content: "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You must be logged in");
      }
    };

    fetchPrivateData();
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    history.push("/LoginForm");
  };
  return error ? (
    <span>{error}</span>
  ) : (
    <>
      <div>{privateData}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default PrivateForm;
