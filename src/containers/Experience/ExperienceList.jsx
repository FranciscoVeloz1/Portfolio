import React, { useState, useEffect } from "react";
import { experiences } from "@services/index.services.js";

//Importing assets and styles
import "@styles/containers/Projects.scss";

//Importing component
import ExperienceItem from "@components/Experience/ExperienceItem";

const ExperienceList = () => {
  const { list } = experiences;
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
        Experience
      </p>

      <div className="projects-content">
        {state.map((s) => (
          <ExperienceItem p={s} key={s.id} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
