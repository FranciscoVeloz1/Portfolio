import React, { useState, useEffect } from "react";
import { projects } from "@services/index.services.js";

//Importing assets and styles
import "@styles/containers/Projects.scss";

//Importing component
import ProjectCard from "@components/ProjectCard";

const Projects = () => {
  const { list } = projects;
  const [state, setState] = useState([]);

  //Get all projects
  const getProjects = async () => {
    const data = await list();
    setState(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="projects-container">
      <p className="projects-title" data-aos="fade-up">
        Projects
      </p>

      <div className="projects-content">
        {state.map((s) => (
          <ProjectCard c={s} key={s.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
