import { useEffect } from "react";
import { useState } from "react";
import "../styles/LoginForm.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function RegistrForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailClick, setEmailClick] = useState(false);
  const [passwordClick, setPasswordClick] = useState(false);
  const [emailError, setEmailError] = useState("Please, enter your email...");
  const [passwordError, setPasswordError] = useState(
    "Please, enter your password..."
  );
  const [formValid, setFormValid] = useState(false);
  const [sendData, setSendData] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const sendHandler = (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    setSendData(true);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailClick(true);
        break;
      case "password":
        setPasswordClick(true);
        break;
      default:
        break;
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validateEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError("You entered an incorrect e-mail");
    } else {
      setEmailError("");
    }
  };

  const passwordHadler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 30) {
      setPasswordError(
        "Passwords should be at least 8 characters, but not more than 30 characters"
      );

      if (!e.target.value) {
        setPasswordError("Please, enter your password...");
      }
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="app">
      <Header />
       {sendData ? (
        <div className="sendDataBox">
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      ) : null}

      <div className="login-form">
        <form onSubmit={(e) => sendHandler(e)} className="form-box">
          <h2 className="form-box__item">Registration</h2>
          <input
            value={email}
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            className="form-box__item"
            name="email"
            type="text"
            placeholder="Enter your email..."
          ></input>
          {emailClick && emailError && (
            <div className="error-box">{emailError}</div>
          )}
          <input
            value={password}
            onChange={(e) => passwordHadler(e)}
            onBlur={(e) => blurHandler(e)}
            className="form-box__item"
            name="password"
            type="password"
            placeholder="Enter your password..."
          ></input>
          {passwordClick && passwordError && (
            <div className="error-box">{passwordError}</div>
          )}
          <button disabled={!formValid} className="form-box__item">
            Log in
          </button>
        </form>
      </div>
      <div className="attentionBox">
        &#9888; The validation in this form makes without library
      </div>

      <Link className="link-to-login" to="/login">
        I already have an account
      </Link>

      <Footer />
    </div>
  );
}
