import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
    </Routes>
  );
}

export default Pages  