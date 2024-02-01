import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="login__container">
      <img
        className="login__cover-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="background-overlay"></div>
      <div className="fixed-container">
        <div className="max-width-container">
          <div className="max-width-form ">
            <h1 className="page-title">Sign In</h1>
            <form className="full-width-form" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="submit-button">Sign In</button>
              <div className="form-footer">
                <p>
                  <input className="margin-right-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="padding-y-8">
                <span className="gray-text">New to Netflix?</span>{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
