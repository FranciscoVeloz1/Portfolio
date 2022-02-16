import React, { useEffect } from "react";
import Aos from "aos";

//Importing assets and styles
import "@styles/components/SkillCard.scss";

const SkillCard = ({ c }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="skill-card" data-aos="fade-up">
      <div className="skill-image">
        <img src={c.img} alt="js" />
      </div>

      <div className="skill-text" data-aos="fade-up" data-aos-duration="1000">
        <p>{c.title}</p>

        <p>{c.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
