import React from "react";

//Importing assets and styles
import "@styles/components/SkillCard.scss";

const SkillCard = ({ c }) => {
  return (
    <div className="skill-card">
      <div className="skill-image">
        <img src={c.img} alt="js" />
      </div>

      <div className="skill-text">
        <p>{c.title}</p>

        <p>{c.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
