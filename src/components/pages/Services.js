import React, { useState, useEffect } from 'react';

// DATA
import {tabs, tabContents} from "../database/aboutData.js";


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
    <section className="services-section" id="about">
      <style>
        {`
          .services-section {
            width: 100%;
            margin: 0 auto;
            padding: 4rem 2rem;
            min-height: 100vh;
            color: var(--text-primary);
            border-bottom: 4px solid rgba(255, 255, 255, 0.2);
            position: relative;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.02);
          }

          .section-title {
            font-size: 3rem;
            color: #f5f5f5;
            text-align: center;
            margin-bottom: 4rem;
            position: relative;
            font-weight: 700;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #4299e1, #667eea);
            border-radius: 4px;
          }

          .profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            // max-width: 1200px;
            // background: red;
            margin: 0 auto;
            padding: 1rem
          }

          .profile-image-container {
            position: relative;
            transform: rotate(-4deg);
          }

          .profile-image {
            width: 330px;
            height: 330px;
            border-radius: 50%;
            overflow: hidden;
            border: 6px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            opacity: ${isImageLoaded ? 1 : 0};
            transition: all 0.5s ease;
            transform: translateY(${isImageLoaded ? '0' : '20px'});
          }

          .profile-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.05);
            transition: transform 0.5s ease;
          }

          .profile-image:hover img {
            transform: scale(1.1);
          }

          .profile-content {
            width: 100%;
            padding: 2rem;
          }

          .tabs {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            justify-content: center;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            padding-bottom: 2.5rem;
          }

          .tab-wrapper {
              position: relative;
            }

            .tab-button {
              padding: 0.75rem 1.5rem;
              border: none;
              background: none;
              color: #f5f5f5;
              font-size: 1rem;
              font-weight: 500;
              cursor: pointer;
              transition: color 0.3s ease;
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

          .tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: rgba(255, 255, 255, .6);
            color: #000;
            padding: 0.75rem 1rem;
            border-radius: 6px;
            font-size: 0.875rem;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 10;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 6px solid transparent;
            border-top-color: rgba(0, 0, 0, 0.9);
          }

          .tab-wrapper:hover .tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }

          .content-section {
            animation: fadeIn 0.5s ease;
          }

          .info-list {
            display: grid;
            gap: 1rem;
          }

          .info-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 12px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .info-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          }

          .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: #ebf8ff;
            border-radius: 12px;
            color: #4299e1;
            transition: all 0.3s ease;
          }

          .info-item:hover .icon-wrapper {
            background: #4299e1;
            color: #fff;
          }

          .info-content h4 {
            margin: 0 0 0.75rem;
            color: #000;
            font-size: 1.25rem;
            font-weight: 600;
          }

          .info-content p {
            margin: 0;
            color: #111;
            line-height: 1.6;
            font-size: 1rem;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 1024px) {
            .profile-content {
              padding: 2rem 1rem;
            }
          }

          @media (max-width: 768px) {
            .services-section {
              padding: 3rem 1.5rem;
            }

            .section-title {
              font-size: 2.5rem;
              margin-bottom: 3rem;
            }

            .profile-content {
              padding: 1.5rem 1rem;
            }

            .tab-button {
              padding: 0.5rem 1rem;
            }
          }

          @media (max-width: 480px) {
            .services-section {
              padding: 2rem 1rem;
            }

            .section-title {
              font-size: 2rem;
            }

            .profile-image {
              width: 250px;
              height: 250px;
            }

            .profile-content {
              padding: 1rem 0.5rem;
            }

            .info-item {
              padding: 1rem;
            }

            .tabs {
              margin-bottom: 2rem;
            }

            .tab-button {
              font-size: 0.875rem;
            }

            .tooltip {
              display: none;
            }
          }
        `}
      </style>

      <h1 className="section-title">About Me</h1>

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