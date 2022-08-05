import React, { useState } from "react";
import axios from "axios";
import "../Css/ResetPasswordForm.css";
import { Link } from "react-router-dom";

function ResetPasswordForm({ match }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);

      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.put(
        `/api/user/resetPassword/ ${match.params.reseToken}`,
        { password },
        config
      );

      console.log(data);

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <h2 className="form-logo flex-row justify-center align-center">
          Reset Password
        </h2>

        {error && <span>{error}</span>}

        {success && (
          <span>
            {success} <Link to="/LoginForm">Login</Link>
          </span>
        )}

        <div>
          <div className="login-credentials">
            <input
              required
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-input"
              autoComplete="off"
            />
            <label className="form-label">Password</label>
          </div>

          <div className="login-credentials">
            <input
              required
              type="text"
              name="Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="form-input"
              autoComplete="off"
            />
            <label className="form-label">Confirm Password</label>
          </div>

          <button className="login-primary-btn">Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
