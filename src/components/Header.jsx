import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Cookies from "js-cookie";

export default function Header() {
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/MakeVisit" className="navbar-logo">
            {/* <img className="logo-img" src="images/logo.png" alt="myClinic logo" /> */}

            
            <div style={{ margin: "10px" }}> Trześniak's Clinic</div>
          </Link>
          
        </div>
        <div className="navbar-logo">PACJENT</div>
        <div className="logoutlink">
          
          <Link to="/">
            <button
              className="logout"
              onClick={() => {
                logout();
              }}
            >
              wyloguj się
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
