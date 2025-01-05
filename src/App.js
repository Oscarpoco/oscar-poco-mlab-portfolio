import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import PortfolioSection from './components/pages/Portfolio';
import AssessmentFeedbackSection from './components/pages/AssessmentFeedbackSection';
import Footer from './components/pages/Footer';

// SCROLL PROGRESS COMPONENT
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '7px',
        width: `${scrollProgress}%`,
        background: 'var(--accent-green)',
        zIndex: 1001,
        transition: 'width 0.1s ease-out'
      }}
    />
  );
};

const App = () => {
  const [activeLink, setActiveLink] = useState('#home');

  // INTERSECTION OBSERVER FOR ACTIVE SECTION DETECTION
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      threshold: 0.6, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); 
  }, []);

  // SMOOTH SCROLL HANDLER
  const handleLinkClick = (link) => {
    setActiveLink(link);
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <ScrollProgress />
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
            ASSESSMENTS
          </a>
        </div>
      </nav>
      
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <Services />
      </section>
      <section id="portfolio">
        <PortfolioSection/>
      </section>
      <section id="projects">
        <AssessmentFeedbackSection/>
      </section>

      <Footer/>
    </div>
  );
};

export default App;