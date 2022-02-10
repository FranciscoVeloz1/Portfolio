import React from "react";
import { Link } from "react-router-dom";

//Importing styles
import "@styles/components/ProjectCard.scss";

const ProjectCard = ({ c }) => {
  return (
    <div className="project-card">
      <img src={c.img} alt="project" />

      <p>
        {c.title} <span className={`badge badge-${c.badgeColor}`}>{c.badge}</span>
      </p>

      <p>{c.description}</p>
      <Link to="#" className="btn btn-blue btn-sm">
        More
      </Link>
    </div>
  );
};

export default ProjectCard;
