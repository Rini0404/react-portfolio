import Skills from '../components/TechSkills/TechSkills';
import Projects from '../components/Projects/Projects';
import React from 'react';
import About from '../components/About/About';

function Home() {

  return (
    <div> 
      <About />
      <Skills />
      <Projects />
      </div>
  );
}

export default Home;