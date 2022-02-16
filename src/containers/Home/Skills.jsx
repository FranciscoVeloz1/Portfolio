import React, { useState, useEffect } from "react";
import Aos from "aos";

//Importing components
import SkillCard from "@components/SkillCard";

//Importing assets and styles
import "@styles/containers/Skills.scss";
import js from "@assets/js.png";
import ingles from "@assets/ingles.jpg";
import kanban from "@assets/kanban.png";
import team from "@assets/team.jpg";

const initialState = [
  {
    id: 1,
    img: js,
    title: "JavaScript developer",
    description: `I'm a JavaScript developer. I know how to program with all the main
    features and frameworks of this programming language. Like React or Node.js.`,
    duration: "1000",
  },
  {
    id: 2,
    img: ingles,
    title: "English",
    description: `I speak in english. I have good listening, speaking and reading skills.
    I can maintain a conversation with people who know english either.`,
    duration: "2000",
  },
  {
    id: 3,
    img: kanban,
    title: "Agile methodology",
    description: `I worked with agile methodologies like Kanban or Scrum, where I used apps
     like Trello or Miro for control de development process.`,
    duration: "2000",
  },
  {
    id: 4,
    img: team,
    title: "Teamwork",
    description: `I developed different apps with amazings teams, with a good environment. 
    I used Microsoft teams for managing meetings.`,
    duration: "3000",
  },
];

const Skills = () => {
  const [card, setCard] = useState(initialState);

  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <div className="skills-container">
      <p className="skills-title" data-aos="fade-up">Skills</p>

      <div className="skills-content">
        {card.map((c) => (
          <SkillCard c={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
