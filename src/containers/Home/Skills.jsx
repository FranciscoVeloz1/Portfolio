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
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    deleniti aliquid eveniet sunt doloremque ducimus odio natus sint
    blanditiis quo.`,
  },
  {
    id: 2,
    img: ingles,
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    deleniti aliquid eveniet sunt doloremque ducimus odio natus sint
    blanditiis quo.`,
  },
  {
    id: 3,
    img: kanban,
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    deleniti aliquid eveniet sunt doloremque ducimus odio natus sint
    blanditiis quo.`,
  },
  {
    id: 4,
    img: team,
    title: "Lorem, ipsum dolor.",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    deleniti aliquid eveniet sunt doloremque ducimus odio natus sint
    blanditiis quo.`,
  },
];

const Skills = () => {
  const [card, setCard] = useState(initialState);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="skills-container" data-aos="fade-up">
      <p className="skills-title">Skills</p>

      <div className="skills-content">
        {card.map((c) => (
          <SkillCard c={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
