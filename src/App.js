import React, { useState } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';

const App = () => {

  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo">
            <span className="bracket left">{'{{'}</span>
            <div className="text-container">
              <span className="letter symbol">&lt;</span>
              <span className="letter">O</span>
              <span className="letter symbol">/</span>
              <span className="letter">S</span>
              <span className="letter symbol">#</span>
              <span className="letter">C</span>
              <span className="letter symbol">/&gt;</span>
              <span className="letter">A</span>
              <span className="letter symbol">_</span>
              <span className="letter">R</span>
            </div>
            <span className="bracket right">{'}}'}</span>
          </div>
        </div>
        <div className="nav-links">
          <a
            href="#home"
            className={activeLink === '#home' ? 'active' : ''}
            onClick={() => handleLinkClick('#home')}
          >
            HOME
          </a>
          <a
            href="#about"
            className={activeLink === '#about' ? 'active' : ''}
            onClick={() => handleLinkClick('#about')}
          >
            ABOUT
          </a>
          <a
            href="#portfolio"
            className={activeLink === '#portfolio' ? 'active' : ''}
            onClick={() => handleLinkClick('#portfolio')}
          >
            PORTFOLIO
          </a>
          <a
            href="#projects"
            className={activeLink === '#projects' ? 'active' : ''}
            onClick={() => handleLinkClick('#projects')}
          >
            PROJECTS
          </a>
        </div>
      </nav>
      <Home />
      <Services />
    </div>
  );
};

export default App;