import React, { useState } from 'react';
import '../styles/Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = ['About Me', 'Achievements', 'Services'];
  
  return (
    <section className="profile-section" id="my-services">
      <h1 className="section-title">My Services</h1>
      
      <div className="profile-container">
        <div className="profile-image-container">
          <div className="profile-image">
            <img src="/user.png" alt="Profile" />
            <div className="image-overlay"></div>
          </div>
          <div className="profile-background"></div>
        </div>

        <div className="profile-content">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab.toLowerCase().replace(' ', '-') ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'about' && (
              <div className="content-section">
                <div className="info-list">
                  <div className="info-item">
                    <i className="fas fa-lightbulb"></i>
                    <p>Passionate about innovative solutions</p>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-brain"></i>
                    <p>Quick learner and adaptable to new technologies</p>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-puzzle-piece"></i>
                    <p>Effective problem solver and analytical thinker</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="content-section">
                <h3>Professional Roles</h3>
                <div className="info-list">
                  <div className="info-item">
                    <i className="fas fa-code"></i>
                    <p>Software Developer (Java Programming)</p>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-laptop-code"></i>
                    <p>Web Developer</p>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-paint-brush"></i>
                    <p>LOGO Designer</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="content-section">
                <h3>Outside of work, I enjoy:</h3>
                <div className="info-list">
                  <div className="info-item">
                    <i className="fas fa-rocket"></i>
                    <p>Exploring new technologies and coding projects</p>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-palette"></i>
                    <p>Engaging in creative design activities</p>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-users"></i>
                    <p>Socializing and networking</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;