import React, { useCallback, useState } from "react";
import "./Navbar.css";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const API_LINK = "https://www.worldweatheronline.com/developer/";
  const GITHUB_LINK = "https://github.com/rizk-gendy/my-weather";
  const DESIGN_LINK =
    "https://xd.adobe.com/view/11e2e17b-8500-461c-8181-29c0f02fbcf9-44b1/";

  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleToggleMobileNav = useCallback(
    () => setShowMobileNav((o) => !o),
    []
  );

  return (
    <div className="navbar-container">
      <div className="title">
        <div className="website-name">
          <img src={logo} alt="website-logo" className="logo" />
          <Link to="/" className="name">
            MY WEATHER
          </Link>
        </div>
        <CgMenuRightAlt
          className="mobile-menu"
          onClick={handleToggleMobileNav}
        />
        <div className="nav">
          <div>
            {" "}
            <a href={DESIGN_LINK} rel="noreferrer" target="_blank">
              DESIGN
            </a>
          </div>
          <div>
            <a href={API_LINK} rel="noreferrer" target="_blank">
              API
            </a>
          </div>
          <div>
            <a href={GITHUB_LINK} rel="noreferrer" target="_blank">
              GITHUB
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${
          showMobileNav ? " mobile-nav nav-mobile-display" : "mobile-nav"
        }`}
      >
        <div>
          <a href={DESIGN_LINK} rel="noreferrer" target="_blank">
            DESIGN
          </a>
        </div>
        <div>
          <a href={API_LINK} rel="noreferrer" target="_blank">
            API
          </a>
        </div>
        <div>
          <a href={GITHUB_LINK} rel="noreferrer" target="_blank">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
