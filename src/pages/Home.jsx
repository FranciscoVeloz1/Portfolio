import React from "react";

//Importing containers
import Banner from "@containers/Home/Banner";
import Skills from "@containers/Home/Skills";
import Projects from "@containers/Home/Projects";
import Footer from "@containers/Home/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
