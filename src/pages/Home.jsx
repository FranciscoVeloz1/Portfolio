import React from "react";

//Importing containers
import Banner from "@containers/Home/Banner";
import Skills from "@containers/Home/Skills";

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <Skills />
    </div>
  );
};

export default Home;
