import React, { useEffect } from "react";
import Aos from "aos";
// import { Link } from "react-router-dom";

//Importing styles
import "@styles/components/ProjectCard.scss";

//Change badge color
const handleBadge = (technology) => {
  switch (technology) {
    case "React":
      return "blue";

    case "JavaScript":
      return "yellow";

    case "Node.js":
      return "green";

    case "C#":
      return "purple";

    case "C":
      return "red";

    case "CSS":
      return "strong-blue";

    default:
      return "green";
  }
};

const ProjectCard = ({ c }) => {
  console.log(handleBadge());
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="project-card">
      <a href={c.link} target="_blank">
        <img src={c.img} alt="project" data-aos="fade-up" />
      </a>

      <p data-aos="fade-up" data-aos-duration="1000">
        {c.title}{" "}
        <span className={`badge badge-${handleBadge(c.technology)}`}>
          {c.technology}
        </span>
      </p>

      <p data-aos="fade-up" data-aos-duration="1000">
        {c.description}
      </p>

      <a
        href={c.repository}
        className="btn btn-blue btn-sm"
        data-aos="fade-up"
        data-aos-duration="1000"
        target="_blank"
      >
        <i className="fab fa-github mr-1"></i>
        Repository
      </a>
    </div>
  );
};

export default ProjectCard;
