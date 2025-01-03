
import React, { useState, useEffect } from 'react';
import { Handshake , Code, Smartphone, Users, Rocket, Brain, Puzzle, Lightbulb, Laptop } from 'lucide-react';

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

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'short', label: 'Short Term Goals' },
    { id: 'long', label: 'Long Term Goals' },
    { id: 'aspirations', label: 'Aspirations' },
    { id: 'codetribe', label: 'CodeTribe Academy' },
    { id: 'plp', label: 'Power Learn Project Academy' }
  ];

  const tabContents = {
    about: [
      {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Passionate about creating innovative solutions and pushing technological boundaries'
      },
      {
        icon: Brain,
        title: 'Quick Learner',
        description: 'Adaptable to new technologies with a strong foundation in multiple programming paradigms'
      },
      {
        icon: Puzzle,
        title: 'Problem Solver',
        description: 'Analytical thinker with a track record of solving complex technical challenges through coding'
      },
    ],

    achievements: [
      {
        icon: Code,
        title: 'Web Development',
        description: 'Junior MERN Developer with expertise in building complex, scalable applications, including Content Management Systems (CMS).'
      },
      {
        icon: Laptop,
        title: 'Backend',
        description: 'Junior Backend Developer specializing in Node.js and Express, with expertise in building robust, scalable APIs and server-side applications.'
      },
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Junior Mobile Developer specializing in React Native and Node.js, with expertise in creating performant, scalable mobile applications.'
      }
    ],

    long: [
      {
        icon: Rocket,
        title: 'Build Scalable Platforms',
        description: 'Develop and deploy backend systems capable of supporting millions of users.'
      },
      {
        icon: Lightbulb,
        title: 'Launch a Mobile App',
        description: 'Design and release a cross-platform mobile application with React Native.'
      },
      {
        icon: Users,
        title: 'Contribute to Open Source',
        description: 'Make meaningful contributions to well-known open-source projects.'
      }
    ],

    short: [
      {
        icon: Rocket,
        title: 'Master RESTful APIs',
        description: 'Deepen knowledge in building and optimizing APIs using Node.js and Express.'
      },
      {
        icon: Lightbulb,
        title: 'Learn UI Animation',
        description: 'Implement interactive animations in React Native applications.'
      },
      {
        icon: Users,
        title: 'Network with Developers',
        description: 'Attend local and online developer meetups to grow professional connections.'
      }
    ],

    aspirations: [
      {
        icon: Rocket,
        title: 'Advance Technical Expertise',
        description: 'Become proficient in designing scalable systems and mastering emerging technologies.'
      },
      {
        icon: Lightbulb,
        title: 'Build an Impactful Portfolio',
        description: 'Create projects that showcase innovative solutions and creative design, blending functionality with aesthetics.'
      },
      {
        icon: Users,
        title: 'Empower Collaboration',
        description: 'Foster teamwork and build strong connections within tech communities to drive collective success.'
      }
    ],



    codetribe: [
      {
        icon: Code,
        title: 'Web Development',
        description: 'I have developed expertise in building complex, scalable web applications using the MERN stack, including crafting Content Management Systems (CMS) that meet real-world needs.'
      },
      {
        icon: Laptop,
        title: 'Backend',
        description: 'I have honed my skills in backend development with Node.js and Express, creating robust APIs and efficient server-side solutions tailored for scalability and performance.'
      },
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'I have built performant and scalable mobile applications using React Native and Node.js, delivering user-focused solutions across platforms.'
      }

    ],


    plp: [
      {
        icon: Code,
        title: 'Web Development',
        description: 'I created a functional and visually appealing website using HTML and CSS, enhancing my front-end development skills.'
      },
      {
        icon: Handshake ,
        title: 'Entrepreneurship',
        description: 'I learned the art of pitching to sponsors and effectively presenting projects to secure support and resources.'
      }
    ],


  };

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
            max-width: 1400px;
            margin: 0 auto;
            box-sizing: border-box;
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
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }

          .profile-image-container {
            position: relative;
            height: 100%;
            min-height: 400px;
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
          }

          .profile-content {
            padding: 2rem;
          }

          .tabs {
            display: flex;
            gap: .5rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }

          .tab-button {
            padding: 0.75rem 1.5rem;
            border: none;
            background: none;
            color: #4a5568;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            position: relative;
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
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                className={`tab-button ${activeTab === id ? 'active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
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