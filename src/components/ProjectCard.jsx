import React, { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";

//Importing styles
import "@styles/components/ProjectCard.scss";

const ProjectCard = ({ c }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="project-card">
      <img src={c.img} alt="project" data-aos="fade-up" />

      <p data-aos="fade-up" data-aos-duration="1000">
        {c.title}{" "}
        <span className={`badge badge-${c.badgeColor}`}>{c.badge}</span>
      </p>

      <p data-aos="fade-up" data-aos-duration="1000">{c.description}</p>
      <Link to="#" className="btn btn-blue btn-sm"  data-aos="fade-up" data-aos-duration="1000">
        More
      </Link>
    </div>
  );
};

export default ProjectCard;
