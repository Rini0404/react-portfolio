import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe/ABoutMe';
import App from './App';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> 
    <Navbar />
    <Routes>
      <Route path = '/' element = {<App />} />
      <Route path = 'AboutMe' element = {<AboutMe />} />
    </Routes>  
    <Footer />
  </Router>
);

reportWebVitals();
