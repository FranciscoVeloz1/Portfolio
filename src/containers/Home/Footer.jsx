import React from "react";
import "@styles/containers/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="projects-title" data-aos="fade-up">
        Contact
      </p>

      <div className="footer-content">
        {/* Location and email */}
        <div className="footer-item">
          <ul>
            <li>
              <p className="footer-subtitle" data-aos="fade-up">
                <i className="fas fa-map-marker-alt"></i>
                Location
              </p>
              <p
                className="footer-text"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                - Lagos de Moreno, Jal. México.
              </p>
            </li>

            <li>
              <p className="footer-subtitle" data-aos="fade-up">
                <i className="far fa-envelope"></i>
                Email
              </p>
              <p
                className="footer-text"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                - franciscoveloz245@gmail.com
              </p>
            </li>
          </ul>
        </div>

        {/* Phone */}
        <div className="footer-item">
          <ul>
            <li>
              <p className="footer-subtitle" data-aos="fade-up">
                <i className="fas fa-phone"></i>
                Phone
              </p>
              <p
                className="footer-text"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                - 4741309933
              </p>
            </li>
          </ul>
        </div>

        {/* Social networks */}
        <div className="footer-item">
          <ul>
            <li className="footer-social">
              <p className="footer-subtitle" data-aos="fade-up">
                <i className="fas fa-share-alt"></i>
                Social networks
              </p>

              <a
                href="https://www.facebook.com/profile.php?id=100008854050890"
                className="footer-link"
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                - <i className="fab fa-facebook-square"></i>
                Facebook
              </a>

              <a
                href="https://twitter.com/FranciscoGVeloz"
                className="footer-link"
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                - <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
