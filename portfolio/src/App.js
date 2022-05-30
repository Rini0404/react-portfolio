// src/App.js

import React from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TechSkills from "./components/TechSkills";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import './App.css';
import './index.css'


export default function App() {
  return (
    
      <main className="text-gray-400 body-font " >
      <Navbar classNam = ""/>  
      {/* <About />   */}
      {/* <Contact />     */}
     <TechSkills />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      </main>
  );
}

