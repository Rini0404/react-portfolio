import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes> 
  );
}

export default Pages  