import React, { useEffect } from "react";
import Aos from "aos";

//Importing styles
import "@styles/components/Navigation.scss";

const Navigation = ({ toggle, setToggle }) => {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <nav className="navbar" data-aos="fade">
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
          <a
            href="https://www.facebook.com/people/Francisco-Veloz/100008854050890/"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="https://twitter.com/FranciscoGVeloz" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="https://www.instagram.com/franciscoveloz1/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/franciscoveloz/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
