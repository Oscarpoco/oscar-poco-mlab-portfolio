import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="content-wrapper">
        <div className="left-content">
          <h1>Hello, I am <span className="highlight">Oscar Kyle Poco</span></h1>
          <p className="subtitle">I am a MERN Stack Developer.</p>
          <p className="description">
            I am a superhero, unshaken by fear and always ready to conquer challenges.
          </p>
          <div className="buttons">
            <button className="btn primary">Hire Me</button>
            <button className="btn secondary">My Resume</button>
          </div>
        </div>
        <div className="right-content">
          <div className="code-illustration">
            <div className="device-screen">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="code-content">
                  <span className="tech-tag html-tag">
                    <i className="fab fa-html5"></i>
                    HTML
                  </span>
                  <span className="tech-tag css-tag">
                    <i className="fab fa-css3-alt"></i>
                    CSS
                  </span>
                  <span className="tech-tag javascript-tag">
                    <i className="fab fa-js"></i>
                    JAVASCRIPT
                  </span>
                  <span className="tech-tag react-tag">
                    <i className="fab fa-react"></i>
                    REACT
                  </span>
                  <span className="tech-tag react-native-tag">
                    <i className="fab fa-react"></i>
                    REACT NATIVE
                  </span>
                  <span className="tech-tag mongo-tag">
                    <i className="fas fa-database"></i>
                    MONGODB
                  </span>
                  <span className="tech-tag firebase-tag">
                    <i className="fas fa-fire"></i>
                    FIREBASE
                  </span>
                  <span className="tech-tag node-tag">
                    <i className="fab fa-node-js"></i>
                    NODE
                  </span>
                  <span className="tech-tag express-tag">
                    <i className="fas fa-server"></i>
                    EXPRESS
                  </span>
                  <span className="tech-tag python-tag">
                    <i className="fab fa-python"></i>
                    PYTHON
                  </span>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="gear"></div>
              <div className="gear"></div>
              <div className="code-block"></div>
              <div className="code-block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;