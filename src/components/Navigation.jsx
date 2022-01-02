import React from "react";
import { Link } from "react-router-dom";

//Importing styles
import "@styles/components/Navigation.scss";

const Navigation = ({ toggle, setToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <button onClick={() => setToggle(!toggle)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="navbar-content">
        <div className="navbar-title">
          <p>Portafolio Francisco Veloz</p>
        </div>

        <div className="navbar-network">
          <a href="https://www.facebook.com/people/Francisco-Veloz/100008854050890/">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="https://twitter.com/FranciscoGVeloz">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="https://www.instagram.com/franciscoveloz1/">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/franciscoveloz/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;