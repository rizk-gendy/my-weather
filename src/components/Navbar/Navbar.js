import React from "react";
import "./Navbar.css";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const API_LINK = "https://www.worldweatheronline.com/developer/";

  return (
    <div className="title">
      <div className="website-name">
        <img src={logo} alt="website-logo" className="logo" />
        <Link to="/" className="name">
          MY WEATHER
        </Link>
      </div>
      <CgMenuRightAlt className="mobile-menu" />
      <div className="nav">
        <div>ABOUT</div>
        <div>
          <a href={API_LINK} rel="noreferrer" target="_blank">
            API
          </a>
        </div>
        <div>GITHUB</div>
      </div>
    </div>
  );
};

export default Navbar;
