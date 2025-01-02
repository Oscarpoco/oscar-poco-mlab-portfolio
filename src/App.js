import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';

const App = () => {
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
          <a href="#home" className="active">HOME</a>
          <a href="#my-services">SERVICES</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#projects">PROJECTS</a>
        </div>
      </nav>
      <Home />
      <Services/>
    </div>
  );
};

export default App;