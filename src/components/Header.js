import React from "react";
import "../styles/header.css";
import { Login, Logout, Person2 } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="nav-bar">
        <div className="logo">LoremFilms</div>

        <ul className="nav">
          <Link className="nav__link" to="/">
            <li>Films</li>
          </Link>

          <Link className="nav__link" to="/">
            <li>Prices</li>
          </Link>
          <Link className="nav__link" to="/">
            <li>About</li>
          </Link>
        </ul>
        <div className="login-field">
          <Link className="login-field__link" to="/login">
            <div className="login">
              <Login fontSize="small" />
            </div>
          </Link>
          <Link className="hidden-btn  login-field__link" to="/">
            <div className="logout" fontSize="small">
              <Logout />
            </div>
          </Link>
          <Link className="login-field__link" to="/registr">
            <div className="signup" fontSize="small">
              <Person2 />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
