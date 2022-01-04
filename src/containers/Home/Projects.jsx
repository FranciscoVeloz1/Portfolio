import React, { useState } from "react";

//Importing assets and styles
import "@styles/containers/Projects.scss";

//Importing component
import ProjectCard from "@components/ProjectCard";

const initialState = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati
    architecto ratione aspernatur totam ullam est illo excepturi, suscipit
    sequi, amet quas accusantium delectus aliquam assumenda molestiae dolore
    officiis. Consectetur.`,
    badge: "React Native",
    badgeColor: "blue",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati
    architecto ratione aspernatur totam ullam est illo excepturi, suscipit
    sequi, amet quas accusantium delectus aliquam assumenda molestiae dolore
    officiis. Consectetur.`,
    badge: "Node.js",
    badgeColor: "green",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati
    architecto ratione aspernatur totam ullam est illo excepturi, suscipit
    sequi, amet quas accusantium delectus aliquam assumenda molestiae dolore
    officiis. Consectetur.`,
    badge: "JavaScript",
    badgeColor: "yellow",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati
    architecto ratione aspernatur totam ullam est illo excepturi, suscipit
    sequi, amet quas accusantium delectus aliquam assumenda molestiae dolore
    officiis. Consectetur.`,
    badge: "React",
    badgeColor: "blue",
  },
];

const Projects = () => {
  const [state, setState] = useState(initialState);

  return (
    <div className="projects-container">
      <p className="projects-title">Projects</p>

      <div className="projects-content">
        {state.map((s) => (
          <ProjectCard c={s} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
