import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("password does not match");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 charachters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container">
      <div className="form-container">
        <div>
          <h1 className="form-title">Sign Up</h1>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePassword}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={handleConfirmPassword}
                type="password"
                name="confirm-password"
                id=""
                required
              />
            </div>
            <p style={{color:'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <div className="form-link-container">
            <p className="new-ema">
              Already have an account?
              <Link className="form-link" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="form-line">
            <span></span>
            <p>or</p> <span></span>
          </div>
          <button className="login-with">
            <svg
              width="30px"
              height="30px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>{" "}
            Contine with Goorle
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
