import React, { useState } from 'react';

// DATA
import { skills } from '../database/portfolioData';
import { individualProjects } from '../database/portfolioData';
import { groupProjects } from '../database/portfolioData';

// ICONS
import { IoLogoGithub } from "react-icons/io";
import { FaLinkSlash } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

const PortfolioSection = () => {

  const [keyFeaturesVisible, setKeyFeaturesVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <div className="portfolio-container" id="portfolio">
      <section className="skills-section" id="portfolio">
        <h2 className="header-title">Skills Matrix</h2>
        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <skill.icon className="skill-icon" size={28} color="#4299e1" />
              </div>
              <div className={`proficiency ${skill.level.toLowerCase()}`}>
                {skill.level}
              </div>
              <p className='paragraph'>{skill.notes}</p>
            </div>
          ))}
        </div>

        {skills.length > 6 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="see-more-button"
          >
            See More
          </button>
        )}

        {showAll && skills.length > 6 && (
          <button
            onClick={() => setShowAll(false)}
            className="see-less-button"
          >
            See Less
          </button>
        )}
      </section>

      <section className="projects-section" id="portfolio">
        <h2 className="header-title">Individual Projects</h2>
        <div className="projects-grid">
          {individualProjects.map((project, index) => (
            <div key={index} className="project-card">

              <div className="skill-header">
                <h3>{project.title}</h3>
                <project.icon className="skill-icon" size={28} color="#4299e1" />
              </div>

              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <p className="challenges">{project.challenges}</p>
              <div className="project-links">
                <a href={project.links.github} className="github"> <IoLogoGithub size={24} color='#111' /> GitHub</a>
                {project.links.demo ?
                  <a href={project.links.demo} className="demo"> <IoIosLink size={24} color='#111' /> Live Demo</a>
                  :
                  <a className="demo"> <FaLinkSlash size={24} color='#111' /> No Live Demo</a>
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="group-projects-section" id="portfolio">
        <h2 className="header-title">Group Projects</h2>
        <div className="projects-grid">
          {groupProjects.map((project, index) => (
            <div key={index} className="project-card group">
              <h3>{project.title} <span>{<project.icon className="skill-icon" size={28} color="#4299e1" />}</span></h3>
              <p>{project.description}</p>
              <div className="team-members">
                <h4>Team Members</h4>
                <ul>
                  {project.teamMembers.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="features">
                <h4 className='key-features-button' onClick={() => setKeyFeaturesVisible(!keyFeaturesVisible)} style={{ cursor: 'pointer' }}>
                  {keyFeaturesVisible ? 'Close' : 'See'} Key Features
                </h4>

                {keyFeaturesVisible && (
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="collaboration">{project.collaboration}</p>
              <div className="project-links">
                <a href={project.links.github} className="github"> <IoLogoGithub size={24} color='#111' /> GitHub</a>
                {project.links.demo ?
                  <a href={project.links.demo} className="demo"> <IoIosLink size={24} color='#111' /> Live Demo </a>
                  :
                  <a className="demo"> <FaLinkSlash size={24} color='#111' /> No Live Demo</a>
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          :root 
          {
            --primary-color: #2563eb;
            --secondary-color: #1e40af;
            --background-color: rgba(0, 0, 0, 0.7);
            --card-background:rgba(255, 255, 255, 0.8);
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --border-radius: 12px;
            --transition: all 0.3s ease;
          }


          .portfolio-container 
          {
            width: 100%;
            min-height: 90vh;
            margin: 0 auto;
            padding: 0 3em;
            color: var(--text-primary);
            border-bottom: 4px solid rgba(255, 255, 255, 0.2);
            position: relative;
          }
              
          section 
          {
            margin-bottom: 40px;
          }

          h2 
          {
            font-size: 2.5rem;
            color: #f5f5f5;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
          }

          h2::after 
          {
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

          .skills-grid 
          {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
          }

          .skill-card 
          {
            background: var(--card-background);
            border-radius: var(--border-radius);
            padding: 25px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: var(--transition);
            border: 1px solid rgba(0, 0, 0, .1);
          }

          .skill-header 
          {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 15px;
          }

          .skill-icon {
            transition: transform 0.2s ease;
          }

          .skill-icon {
            transform: scale(1.1);
          }

          .skill-card:hover 
          {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          }

          .skill-card h3 
          {
            font-size: 1.5rem;
            color: var(--text-primary);
          }

          .proficiency {
            display: inline-block;
            padding: 6px 15px;
            border-radius: 20px;
            margin: 10px 0;
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .beginner { 
            background: #fee2e2; 
            color: #dc2626;
          }
          
          .intermediate { 
            background: #fef3c7; 
            color: #b45309;
          }
          
          .advanced { 
            background: #dcfce7; 
            color: #16a34a;
          }

          .see-more-button, .see-less-button {
            display: block;
            margin: 1rem 0;
            padding: 0.8rem 1.2rem;
            background-color: #4299e1;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .see-more-button, .see-less-button:hover {
            background-color:rgb(4, 130, 233);
            transition: var(--transition);
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
          }

          .project-card {
            background: var(--card-background);
            border-radius: var(--border-radius);
            padding: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: var(--transition);
            border: 1px solid rgba(0, 0, 0, .1);
            position: relative;
            overflow: hidden;
            padding-bottom: 100px;
          }

          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          }

          .project-card h3 {
            font-size: 1.8rem;
            color: var(--text-primary);
          }

          .project-card p {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 20px 0;
          }

          .tech-tag {
            background: rgba(37, 99, 235, 0.1);
            color: var(--primary-color);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: var(--transition);
          }

          .tech-tag:hover {
            background: rgba(37, 99, 235, 0.2);
            transform: translateY(-2px);
          }

          .features {
            margin: 25px 0;
          }

          .features h4, .team-members h4 {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: var(--text-primary);
          }

          .features ul {
            list-style: none;
            padding-left: 0;
          }

          .key-features-button {
            background-color: #4299e1;
            padding: .7em 1em;
            color: #fff;
            border-radius: 50px;
            text-align: center;
            text-transform: uppercase
          }

          .features li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            color: var(--text-secondary);
          }

          .features li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary-color);
          }

          .project-links {
            display: flex;
            gap: 15px;
            position: absolute;
            bottom: 25px;
            left: 25px;
            width: 100%;
            z-index: 1;
          }

          .project-links a {
            padding: 10px 20px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            text-align: center;
            min-width: 150px;
            display: flex;
            align-items: center;
            gap: 10px
          }

          .project-links .github {
            background: var(--primary-color);
            color: white;
          }

          .project-links .demo {
            background: transparent;
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
          }

          .project-links a:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
          }

          .team-members ul {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
          }

          .team-members li {
            background: rgba(37, 99, 235, 0.1);
            color: var(--primary-color);
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            .portfolio-container {
              padding: 1em;
            }

            .header-title {
              font-size: 1.3rem;
            }

            .skill-card 
            {
              padding: 15px;
            }

            .skill-header 
            {
              margin-bottom: 0px;
            }

            .skill-card h3 
            {
              font-size: 1.2rem;
            }


            .paragraph{
              font-size: .9rem;
            }

            .proficiency {
              border-radius: 7px;
            }

            .projects-grid {
              grid-template-columns: 1fr;
            }

            .project-card {
              padding: 20px;
            }

            .project-links {
              flex-direction: column;
              position: unset;
            }

            .project-links a {
              width: 100%;
              justify-content: center;
              border-radius: 10px;
            }
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --background-color: #0f172a;
              --card-background: #1e293b;
              --text-primary: #e2e8f0;
              --text-secondary: #94a3b8;
            }

            .skill-card,
            .project-card {
              border-color: rgba(255, 255, 255, 0.1);
            }

            .tech-tag {
              background: rgba(37, 99, 235, 0.2);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PortfolioSection;