
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";


export default function App() {
  return (
    <Router>
    <>
    <div className="App">
      <Navbar />
      <Pages/>
      <Footer />
    </div>
    </>
    </Router>
  );
}
