import React, { useEffect, useState } from 'react';
import { individualProjects } from '../database/portfolioData';
import { groupProjects } from '../database/portfolioData';

// ICONS
import { IoCodeDownload } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { FaCode } from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experience = 1;
  const clients = 10;
  const count = (individualProjects.length) + (groupProjects.length);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    "// Contact Info last updated : 19 / 01 /2025",
    "const contact = {",
    "  location: 'Soweto CodeTribe Lab',",
    "  email: 'oscarkylepoco@gmail.com',",
    "  phone: '0660850741'",
    "};"
  ];


  // DOWNLOAD RESUME
  const handleDownload = () => {
    const cvUrl = '/oscarkylpoco.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'oscarkylpoco.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero" id='home'>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <div className="name-wrapper">
              <h1 className="glitch-text">OSCAR KYLE POCO</h1>
              <div className="glitch-overlay"></div>
            </div>
            <div className="title-wrapper">
              <h3 className='title-text'>
                MERN Stack Developer
              </h3>
              <div className="title-decoration"></div>
            </div>
            <p>
              Building digital experiences that matter. Unshaken by fear and always ready to conquer challenges.
            </p>
            <div className="cta-container">
              <button
                className="cta-primary"
                onClick={() => window.location.href = "mailto:oscarkylepoco@gmail.com"}
              >
                Let's Work Together
                <FaCode size={'2rem'}/>
                <span className="btn-glow"></span>
                <span className="btn-shine"></span>
              </button>
              <button className="cta-secondary" onClick={handleDownload}>
                DOWNLOAD RESUME
                <IoCodeDownload size={'2rem'}/>
                <span className="btn-line"></span>
                <span className="btn-highlight"></span>
              </button>
            </div>

            <div className="stats-grid">
              {[
                { number: experience, label: "Years Experience" },
                { number: count, label: "Projects Completed" },
                { number: clients, label: "Happy Clients" }
              ].map((stat, index) => (
                <div className="stat-card" key={index}>
                  <span className="stat-number">{stat.number} +</span>
                  <span className="stat-label">{stat.label}</span>
                  <div className="card-glow"></div>
                  <div className="card-shine"></div>
                </div>
              ))}
            </div>
          </div>


          {/* LAPTOP SECTION */}
          <div className="laptop-container">
            <div className="laptop">
              <div className="laptop-screen">
                <div className="laptop-content">
                  {contactInfo.map((line, index) => (
                    <div
                      key={index}
                      className="code-line"
                      style={{
                        animationDelay: `${index * 0.5}s`,
                        width: '100%'
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              <div className="laptop-base">
                <div className="laptop-keyboard"></div>
                <div className="laptop-touchpad"></div>
              </div>
            </div>
            <div className="laptop-shadow"></div>
          </div>
        </div>
      </section>

      {/* STLYING */}
      <style>{`
        .home {
          background-color: rgba(0, 0, 0, .5);
          color: #ffffff;
          min-height: 90vh;
          font-family: 'Inter', system-ui, sans-serif;
          padding: 0 20px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 0;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .laptop-container {
          position: relative;
          width: 100%;
          padding-top: 20px;
          transform: perspective(1000px) rotateY(-20deg) rotateX(5deg);
          transition: transform 0.3s ease;
        }

        .laptop-container:hover {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
        }

        .laptop {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .laptop-screen {
          background: #1a1a1a;
          border-radius: 10px 10px 0 0;
          padding: 2px;
          border: 2px solid #333;
          border-bottom: none;
          aspect-ratio: 16/10;
          position: relative;
          overflow: hidden;
        }

        .laptop-content {
          background: #0a0a0a;
          width: 100%;
          height: 100%;
          padding: 20px;
          position: relative;
          font-family: 'SF Mono', 'Fira Code', monospace;
          color: #a0aec0;
        }

        .code-line {
          height: auto;
          padding: 8px;
          margin-bottom: 10px;
          border-radius: 2px;
          opacity: 0;
          animation: fadeIn 0.5s forwards;
          white-space: pre;
          font-size: 14px;
        }

        .code-line:nth-child(1) { color: #4facfe; }
        .code-line:nth-child(2) { color: #00f2fe; }
        .code-line:nth-child(3),
        .code-line:nth-child(4),
        .code-line:nth-child(5) { color: #a0aec0; padding-left: 24px; }

        @keyframes fadeIn {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .laptop-base {
          background: linear-gradient(to bottom, #333, #1a1a1a);
          height: 15px;
          border-radius: 0 0 10px 10px;
          position: relative;
        }

        .laptop-keyboard {
          position: absolute;
          width: 40%;
          height: 4px;
          background: #111;
          left: 50%;
          transform: translateX(-50%);
          top: 5px;
          border-radius: 2px;
        }

        .laptop-touchpad {
          position: absolute;
          width: 20%;
          height: 2px;
          background: #111;
          left: 50%;
          transform: translateX(-50%);
          bottom: 3px;
          border-radius: 1px;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .name-wrapper {
          position: relative;
          display: inline-block;
        }

        .glitch-text {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #00f2fe, #4facfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 1;
        }

        .glitch-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(0,242,254,0.2), rgba(79,172,254,0.2));
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .name-wrapper:hover .glitch-overlay {
          opacity: 1;
        }

        .title-wrapper {
          position: relative;
          margin-bottom: 1rem;
        }

        .title-wrapper .title-text {
          font-size: 2rem;
          color: #a0aec0;
          margin: 0;
          transition: color 0.3s ease;
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .title-decoration {
          height: 10px;
          width: 100px;
          margin-top: 8px;
          position: relative;
          overflow: hidden;
        }

        .title-decoration::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #00f2fe;
          transform: skewX(-20deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          100% { left: 200%; }
        }

        .hero-text p {
          font-size: 1.25rem;
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .cta-container {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .cta-primary, .cta-secondary {
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-transform: uppercase;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
        }

        .cta-primary {
          background: linear-gradient(45deg,rgb(21, 111, 116),rgb(32, 117, 192));
          border: none;
          color: rgba(255,255,255,0.7);
   
        }

        .btn-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 45%,
            rgba(255,255,255,0.7) 50%,
            transparent 55%
          );
          transform: translate(-100%, -100%);
          transition: transform 0.6s ease;
        }

        .cta-primary:hover .btn-shine,
        .cta-secondary:hover .btn-shine {
          transform: translate(100%, 100%);
        }

        .cta-secondary {
          background: transparent;
          border: 2px solid #4facfe;
          color: #4facfe;
        }

        .btn-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #00f2fe, #4facfe);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-highlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(79,172,254,0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-secondary:hover .btn-line {
          transform: scaleX(1);
        }

        .cta-secondary:hover .btn-highlight {
          opacity: 1;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 40px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 15px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(79,172,254,0.3);
        }

        .card-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            45deg,
            transparent 45%,
            rgba(79,172,254,0.1) 50%,
            transparent 55%
          );
          transform: rotate(45deg);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-card:hover .card-shine {
          transform: rotate(45deg) translate(50%, 50%);
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00f2fe, #4facfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          position: relative;
        }

        .stat-label {
          color: #a0aec0;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .stat-card:hover .stat-label {
          color: #4facfe;
        }

       
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .laptop-container {
            order: -1;
            transform: perspective(1000px) rotateY(0) rotateX(5deg);
            max-width: 500px;
            margin: 0 auto;
          }

          .glitch-text {
            font-size: 3.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 40px 0;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .laptop-container {
            transform: none;
            max-width: 100%;
            padding: 0;
          }

          .laptop-container:hover {
            transform: none;
          }

          .laptop-content {
            padding: 10px;
          }

          .code-line {
            font-size: 11px;
            padding: 4px;
            margin-bottom: 6px;
          }

          .glitch-text {
            font-size: 1.8rem;
          }

          .title-wrapper .title-text {
            font-size: .9rem;
          }

          .hero-text p {
            font-size: .9rem;
            max-width: 500px;
          }

          .cta-container {
            flex-direction: column;
            margin-bottom: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cta-primary, .cta-secondary {
            padding: 10px 30px;
            border-radius: 10px;
            font-size: .9rem;
            font-weight: 600;
          }

          .stat-card {
            border: 1px solid rgba(255, 255, 255, 0.5);
            padding: 15px;
            border-radius: 15px;
            backdrop-filter: blur(100px);
          }
        }

        /* Large screens (1920px and above - typical 17 inch and larger) */
        @media screen and (min-width: 1920px) {
          .hero-content {
            max-width: 1800px;
            margin: 0 auto;
            gap: 60px;
          }

          .glitch-text {
            font-size: 3.8rem;
          }

          .title-wrapper .title-text {
            font-size: 1.8rem;
          }

          .hero-text p {
            font-size: 1.1rem;
            max-width: 500px;
          }

          .laptop-container {
            max-width: 800px;
            transform: perspective(2000px) rotateY(-15deg) rotateX(5deg);
          }

          .stats-grid {
            gap: 30px;
            max-width: 800px;
          }

          .stat-card {
            padding: 25px;
          }
        }

        /* Medium-large screens (1366px to 1919px - typical 15-16 inch) */
        @media screen and (min-width: 1366px) and (max-width: 1919px) {
          .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            gap: 40px;
          }

          .glitch-text {
            font-size: 3.2rem;
          }

          .title-wrapper .title-text {
            font-size: 1.6rem;
          }

          .hero-text p {
            font-size: 1rem;
            max-width: 450px;
          }

          .laptop-container {
            max-width: 600px;
            transform: perspective(1500px) rotateY(-15deg) rotateX(5deg);
          }

          .stats-grid {
            gap: 20px;
            max-width: 600px;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }
        }

        /* Additional optimization for height */
        @media screen and (max-height: 900px) {
          .hero {
            padding: 60px 0;
          }

          .hero-content {
            gap: 30px;
          }

          .laptop-container {
            transform: scale(0.9) perspective(1500px) rotateY(-15deg) rotateX(5deg);
          }
        }

        /* Fix for Chrome at 100% zoom */
        @media screen and (min-width: 1200px) {
          .hero {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
          }

          .hero-content {
            width: 90%;
            max-width: 1400px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;