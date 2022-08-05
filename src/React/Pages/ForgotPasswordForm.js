import React, { useState} from "react";
import axios from "axios";

import "../Css/ForgotPasswordForm.css";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/user/forgotPassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={handleForgotPassword}>
        <h2 className="form-logo flex-row justify-center align-center">
          Forgot Password
        </h2>

        {error && <span>{error}</span>}

        {success && <span>{success}</span>}

        <div>
          <p>
            Please enter the email address you registered your account with. We
            will send you a reset password confirmation to that email.
          </p>
          <div className="login-credentials">
            <input
              required
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-input"
              autoComplete="off"
            />
            <label className="form-label">Email</label>
          </div>

          <button className="login-primary-btn">Send Email</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
