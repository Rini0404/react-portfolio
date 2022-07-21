import Skills from "../components/TechSkills/TechSkills";
import React from "react";
import About from "../components/About/About";
import Intro from "../components/Intro/Intro";  

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Intro />
    </div>
  );
}

export default Home;
