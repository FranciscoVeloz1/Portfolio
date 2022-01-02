import React from "react";
import { Link } from "react-router-dom";

//Importing assets and styles
import "@styles/containers/Banner.scss";
import foto from "@assets/fotoC.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <p>Hi, I'm Francisco González Veloz</p>

        <p>Welcome to my portfolio</p>

        <p>
          I am a System Computer Engineer Student and I am a Full Stack
          JavaScript Developer with 2 years of experience. My objective is to
          participate as a web and mobile developer in high impact projects
          where I can show my skills.
        </p>

        <Link to="#" className="btn btn-blue">
          Learn more
        </Link>
      </div>

      <div className="banner-img">
        <img src={foto} alt="profile" />
      </div>
    </div>
  );
};

export default Banner;
