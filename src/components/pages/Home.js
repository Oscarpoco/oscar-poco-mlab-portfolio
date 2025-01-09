import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    "// Contact Information",
    "const contact = {",
    "  location: 'Soweto CodeTribe Lab',",
    "  email: 'oscarkylepoco@gmail.com',",
    "  phone: '0660850741'",
    "};"
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" id='home'>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <div className="name-wrapper">
              <h1 className="glitch-text">Oscar Kyle Poco</h1>
              <div className="glitch-overlay"></div>
            </div>
            <div className="title-wrapper">
              <h3 className='title-text'>MERN Stack Developer</h3>
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
                <span className="btn-glow"></span>
                <span className="btn-shine"></span>
              </button>
              <button className="cta-secondary">
                View Portfolio
                <span className="btn-line"></span>
                <span className="btn-highlight"></span>
              </button>
            </div>

            <div className="stats-grid">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "10+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div className="stat-card" key={index}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                  <div className="card-glow"></div>
                  <div className="card-shine"></div>
                </div>
              ))}
            </div>
          </div>

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

      <style>{`
        .home {
          background-color: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'Inter', system-ui, sans-serif;
          padding: 0 20px;
          position: relative;
          overflow: hidden;
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
        }

        .title-decoration {
          height: 2px;
          width: 60px;
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
          background: rgba(255,255,255,0.3);
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
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-primary {
          background: linear-gradient(45deg, #00f2fe, #4facfe);
          border: none;
          color: white;
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
            rgba(255,255,255,0.3) 50%,
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
            font-size: 2.5rem;
          }

          .title-wrapper .title-text {
            font-size: 1.5rem;
          }

          .cta-container {
            flex-direction: column;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

        }
      `}</style>
    </div>
  );
};

export default Home;