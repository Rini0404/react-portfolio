// src/App.js

import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import TechSkills from "./components/TechSkills/TechSkills";
import Projects from "./components/Projects/Projects";
import AboutMe from './components/AboutMe/ABoutMe'
import Footer from './components/Footer/Footer'
import './App.css';
import './index.css';
import { Link } from "react-router-dom";






export default function App() {
  return (
    <main className="" >
      <Navbar />
        <About />  
        <TechSkills />
        <Projects />
        {/* <AboutMe /> */}
      <Footer />
    </main>
  );
}

