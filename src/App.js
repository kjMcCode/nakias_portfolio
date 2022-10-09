import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import DesignThemes from './pages/DesignThemes';
import Theme1 from './pages/Theme1';
import Theme2 from './pages/Theme2';
import Theme3 from './pages/Theme3';


function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contactMe" element={<ContactMe/>} />
        <Route path="/designthemes" element={<DesignThemes/>} />
        <Route path="/theme/1" element={<Theme1 />} />
        <Route path="/theme/2" element={<Theme2 />} />
        <Route path="/theme/3" element={<Theme3 />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
