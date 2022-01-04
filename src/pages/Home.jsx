import React from "react";

//Importing containers
import Banner from "@containers/Home/Banner";
import Skills from "@containers/Home/Skills";
import Projects from "@containers/Home/Projects";

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
