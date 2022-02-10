import React, { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";

//Importing styles
import "@styles/components/ProjectCard.scss";

const ProjectCard = ({ c }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project-card" data-aos="fade-up">
      <img src={c.img} alt="project" />

      <p>
        {c.title}{" "}
        <span className={`badge badge-${c.badgeColor}`}>{c.badge}</span>
      </p>

      <p>{c.description}</p>
      <Link to="#" className="btn btn-blue btn-sm">
        More
      </Link>
    </div>
  );
};

export default ProjectCard;
