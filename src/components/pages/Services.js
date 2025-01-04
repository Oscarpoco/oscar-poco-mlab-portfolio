
import React, { useState, useEffect } from 'react';

// DATA
import { tabs } from '../database/aboutData';
import { tabContents } from '../database/aboutData';

const TabContent = ({ icon: Icon, title, description }) => (
  <div className="info-item">
    <div className="icon-wrapper">
      <Icon size={24} />
    </div>
    <div className="info-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);


const Services = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="services-section" id='about'>
      <style>
        {`
          .services-section {
            padding: 4rem 1.5rem;
            width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
            overflow-x: hidden;
            border-bottom: 4px solid rgba(0, 0, 0, .5);
          }

          .section-title {
            font-size: 2.5rem;
            color: #2d3748;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #4299e1, #667eea);
            border-radius: 2px;
          }

          .profile-container {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 2rem;
          }

          .profile-image-container {
            position: relative;
            border-radius: 20px;
            background: linear-gradient(135deg,rgba(66, 153, 225, 0.36),rgba(102, 126, 234, 0.31));
          }

          .profile-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            opacity: ${isImageLoaded ? 1 : 0};
            transition: opacity 0.3s ease;
          }

          .profile-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: rotate(-4deg);
          }

          .profile-content {
            padding: 2rem;
          }

          .tabs {
              display: flex;
              gap: 0.5rem;
              margin-bottom: 2rem;
              flex-wrap: wrap;
            }

            .tab-wrapper {
              position: relative;
            }

            .tab-button {
              padding: 0.75rem 1.5rem;
              border: none;
              background: none;
              color: #4a5568;
              font-size: 1rem;
              font-weight: 500;
              cursor: pointer;
              transition: color 0.3s ease;
            }

            /* Tooltip styles */
            .tooltip {
              position: absolute;
              bottom: 100%;
              left: 50%;
              transform: translateX(-50%);
              background: #333;
              color: #fff;
              padding: 1rem;
              border-radius: 0.25rem;
              font-size: 0.875rem;
              white-space: nowrap;
              opacity: 0;
              visibility: hidden;
              transition: opacity 0.2s ease, transform 0.2s ease;
              z-index: 10;
            }

            .tab-wrapper:hover .tooltip {
              opacity: 1;
              visibility: visible;
              transform: translateX(-50%) translateY(-0.5rem);
            }

          .tab-button::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: transparent;
            transition: background-color 0.3s ease;
          }

          .tab-button.active {
            color: #4299e1;
          }

          .tab-button.active::after {
            background: #4299e1;
          }

          .content-section {
            animation: fadeIn 0.3s ease;
          }

          .info-list {
            display: grid;
            gap: 1.5rem;
          }

          .info-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1rem;
            background: #f7fafc;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .info-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: #ebf8ff;
            border-radius: 8px;
            color: #4299e1;
          }

          .info-content h4 {
            margin: 0 0 0.5rem;
            color: #2d3748;
            font-size: 1.1rem;
          }

          .info-content p {
            margin: 0;
            color: #4a5568;
            line-height: 1.5;
          }

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

          @media (max-width: 768px) {
            .profile-container {
              grid-template-columns: 1fr;
            }

            .profile-image-container {
              min-height: 300px;
            }

            /* Tooltip styles */
            .tooltip {
             
              white-space: wrap;
              
            }

            .tabs {
              flex-wrap: wrap;
            }

            .tab-button {
              flex: 1;
              text-align: center;
              padding: 0.5rem;
            }
          }
        `}
      </style>

      <h1 className="section-title" id='about'>About Me</h1>

      <div className="profile-container">
        <div className="profile-image-container">
          <div className="profile-image">
            <img
              src="/user.png"
              alt="Profile"
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>

        <div className="profile-content">
          <div className="tabs">
            {tabs.map(({ id, label, about }) => (
              <div className="tab-wrapper" key={id}>
                <button
                  className={`tab-button ${activeTab === id ? 'active' : ''}`}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
                <div className="tooltip">{about}</div>
              </div>
            ))}
          </div>

          <div className="tab-content">
            <div className="content-section">
              <div className="info-list">
                {tabContents[activeTab].map((item, index) => (
                  <TabContent key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;