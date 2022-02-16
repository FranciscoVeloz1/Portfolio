import React from "react";
import "@styles/components/ExperienceItem.scss";

const ExperienceItem = ({ p }) => {
  return (
    <div className="experience-card">
      <div className="experience-image">
        <img src={p.img} alt="logo" data-aos="fade-up" />
      </div>

      <div
        className="experience-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="experience-title">{p.position}</p>
        <p className="experience-subtitle">{p.company}</p>
        <p className="experience-text">{p.description}</p>

        {p.link !== "N/A" ? (
          <a href={p.link} target="_blank" className="btn btn-blue">
            Click here
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ExperienceItem;
