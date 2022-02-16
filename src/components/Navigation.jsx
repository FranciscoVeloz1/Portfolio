import React from "react";

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
          <p>Francisco González Veloz</p>
        </div>

        <div className="navbar-network">
          <a href="https://www.instagram.com/franciscoveloz1/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/franciscoveloz/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://github.com/FranciscoVeloz1" target="_blank">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://gitlab.com/FranciscoVeloz" target="_blank">
            <i className="fab fa-gitlab"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
