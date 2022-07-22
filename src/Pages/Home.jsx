import Skills from "../components/TechSkills/TechSkills";
import React from "react";
import About from "../components/About/About";
import Me from "../components/Me/Me";

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Me />
    </div>
  );
}

export default Home;
