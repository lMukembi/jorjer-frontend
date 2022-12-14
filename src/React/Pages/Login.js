import React, { useState, useEffect, useCallback } from "react";
import "../Css/LoginForm.css";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Queries/Actions/Auth";
import { Link, useHistory } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const initialState = {
  email: "",
  password: "",
};

function AuthForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));

    history.push("/");
  };

  const [randomText, setRandomText] = useState();

  const Texts = ["monetize", "sell", "hire", "buy"];
  const changeText = useCallback(() => {
    let randomItem = Texts[Math.floor(Math.random() * Texts.length)];
    setRandomText(randomItem);
  }, []);

  useEffect(() => {
    let text = setInterval(changeText, 2000);
    return () => clearInterval(text);
  }, [changeText]);

  return (
    <div>
      {window.outerWidth > 1023 && (
        <div>
          <div className="brief-info">
            <h1>JorJer</h1>
            <p style={{ fontSize: "20px" }}>
              Want to
              <span
                style={{
                  color: "rgb(55, 135, 185)",
                  fontWeight: "550",
                  fontSize: "20px",
                  marginLeft: "0.5rem",
                }}
              >
                {randomText}
              </span>
              a social media account?
            </p>
          </div>
        </div>
      )}

      <div className="login-form">
        <form onSubmit={handleSubmit}>
          {window.innerWidth < 1023 && <h1 className="pinfo">JorJer</h1>}
          <div className="login-credentials">
            <input
              required
              type="text"
              value={formData.email}
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="form-input"
            />
          </div>

          <div className="login-credentials">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
              className="form-input"
            />
            <i onClick={handleShowPassword}>
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </i>
          </div>
          <button className="login-primary-btn">Login</button>
          <div className="or">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <div>
            <p style={{ display: "flex", justifyContent: "space-around" }}>
              Don't have an Account?
            </p>
          </div>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <button className="sign-up-secondary-btn">Signup</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
