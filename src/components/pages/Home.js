// Home.jsx
import React from 'react';
import { Code, Database, Server, FileCode } from 'lucide-react';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="content-wrapper">
        <div className="left-content">
          <div className="name-section">
            <h1 className="name">Oscar Kyle Poco</h1>
            <div className="title-bar"></div>
          </div>

          <div className="tech-bio">
            <p className="subtitle">MERN Stack Developer</p>
            <p className="description hero-text">
              I am a superhero, unshaken by fear and always ready to conquer challenges.
            </p>
            
            <div className="bio-details">
              <p className="description">Soweto CodeTribe Lab</p>
              <p className="description contact-info">
                oscarkylepoco@gmail.com / 0660850741
              </p>
              <p className="description update-info">
                Last updated : 2024 January 12
              </p>
            </div>
          </div>

          <div className="buttons">
            <button className="btn primary">Hire Me</button>
            <button className="btn secondary">My Resume</button>
          </div>
        </div>

        <div className="right-content">
          <div className="code-window">
            <div className="window-header">
              <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <span className="window-title">Tech Stack</span>
            </div>
            <div className="tech-grid">
              {[
                { name: 'HTML', color: '#FF5722' },
                { name: 'CSS', color: '#2196F3' },
                { name: 'JavaScript', color: '#FFC107' },
                { name: 'React', color: '#61DAFB' },
                { name: 'React Native', color: '#61DAFB' },
                { name: 'MongoDB', color: '#4CAF50' },
                { name: 'Firebase', color: '#FF9800' },
                { name: 'Node.js', color: '#8BC34A' },
                { name: 'Express', color: '#607D8B' },
                { name: 'Python', color: '#3F51B5' }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-card"
                  style={{'--card-color': tech.color}}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .home {
          min-height: 100vh;
          background: #131313;
          background-image: 
            radial-gradient(at 40% 20%, rgba(28, 107, 238, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(238, 28, 197, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(28, 238, 183, 0.1) 0px, transparent 50%);
          padding: 2rem;
          position: relative;
          color: #ffffff;
          box-sizing: border-box;

        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding-top: 4rem;
        }

        .name-section {
          margin-bottom: 2rem;
        }

        .name {
          font-size: 4.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -1px;
          animation: slideIn 0.8s ease-out;
        }

        .title-bar {
          width: 120px;
          height: 4px;
          background: #3498db;
          margin-top: 1rem;
          animation: expandWidth 0.8s ease-out;
        }

        .tech-bio {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 16px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          color: #3498db;
          margin-bottom: 1.5rem;
        }

        .description {
          color: #b3b3b3;
          line-height: 1.7;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .hero-text {
          color: #e6e6e6;
          font-size: 1.3rem;
          font-weight: 500;
        }

        .contact-info {
          color: #3498db;
          font-family: 'Roboto Mono', monospace;
        }

        .update-info {
          color: #666;
          font-size: 0.9rem;
        }

        .buttons {
          display: flex;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .primary {
          background: #3498db;
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }

        .primary:hover {
          background: #2980b9;
          transform: translateY(-2px);
        }

        .secondary {
          background: transparent;
          color: #3498db;
          border: 2px solid #3498db;
        }

        .secondary:hover {
          background: rgba(52, 152, 219, 0.1);
        }

        .code-window {
          background: #1a1a1a;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          animation: slideUp 0.8s ease-out;
        }

        .window-header {
          background: #252525;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot:nth-child(1) { background: #ff5f56; }
        .dot:nth-child(2) { background: #ffbd2e; }
        .dot:nth-child(3) { background: #27c93f; }

        .window-title {
          color: #999;
          font-size: 0.9rem;
          margin-left: 1rem;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
          padding: 1.5rem;
        }

        .tech-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          color: var(--card-color);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 120px;
          }
        }

        @media (max-width: 1200px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .name {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .home {
            padding: 1.5rem;
          }

          .name {
            font-size: 2.8rem;
          }

          .buttons {
            flex-direction: column;
          }

          .tech-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default Home;