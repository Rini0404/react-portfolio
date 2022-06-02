// src/App.js

import React from "react";
import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import AboutMe from './components/ABoutMe'
import Footer from './components/Footer'
import './App.css';
import './index.css'


export default function App() {
  return (
    
      <main className="text-gray-400 body-font " >
      <Navbar classNam = ""/>  
      <About />  
     <TechSkills />
      <Projects />
      <AboutMe />
      <Footer />
      </main>
  );
}

