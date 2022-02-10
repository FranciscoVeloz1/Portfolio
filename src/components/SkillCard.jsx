import React, { useEffect } from "react";
import Aos from "aos";

//Importing assets and styles
import "@styles/components/SkillCard.scss";

const SkillCard = ({ c }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="skill-card" data-aos="fade-up">
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
