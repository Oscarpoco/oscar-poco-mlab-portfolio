import React, { useState } from 'react';
import { assessments } from '../database/assessments';

const AssessmentFeedbackSection = () => {

  const [feedback] = useState({
    facilitator: [
      "Demonstrated strong problem-solving skills throughout the program.",
      "Shows great initiative in helping other learners.",
      "Consistently delivers high-quality work."
    ],
    selfReflection: {
      strengths: [
        "Quick adaptation to new technologies",
        "Strong collaboration skills",
        "Effective time management"
      ],
      areasForImprovement: [
        "Deep diving into advanced React concepts",
        "Contributing more to open source",
        "Building more complex applications"
      ]
    }
  });

  return (
    <div className="assessment-feedback-container">
      <section className="assessments-section" id="projects">
        <h2 className="header-title">Assessments</h2>
        <div className="assessment-grid">
          {assessments.map(assessment => (
            <div key={assessment.id} className="assessment-card">
              <div className="assessment-header">
                <h3>{assessment.name}</h3>
                <span className="category-tag">{assessment.category}</span>
              </div>
              <div className="assessment-details">
                <div className="detail-row">
                  <span className="label">Date Completed:</span>
                  <span className="value">{assessment.dateCompleted}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Grade/Score:</span>
                  <span className="value score">{assessment.score}</span>
                </div>
                <div className="detail-row">
                  <span className="value">{assessment.notes}</span>
                </div>
                <a href={assessment.gitLink} className="git-link" target="_blank" rel="noopener noreferrer">
                  VIEW CODE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="feedback-section" id="projects">
        <h2 className="header-title">Feedback and Reflections</h2>
        
        <div className="feedback-container">
          <div className="feedback-card facilitator-feedback">
            <h3>Facilitator Feedback</h3>
            <ul>
              {feedback.facilitator.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="feedback-card self-reflection">
            <h3>Self-Reflection</h3>
            <div className="reflection-content">
              <div className="reflection-subsection">
                <h4>Strengths</h4>
                <ul>
                  {feedback.selfReflection.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div className="reflection-subsection">
                <h4>Areas for Improvement</h4>
                <ul>
                  {feedback.selfReflection.areasForImprovement.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .assessment-feedback-container {
            width: 100%;
            min-height: 90vh;
            margin: 0 auto;
            padding: 2rem 3em;
            color: var(--text-primary);
          }

          .assessments-section {
            margin-bottom: 3rem;
          }

          h2 {
            font-size: 2.5rem;
            color: #f5f5f5;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
          }

          h2::after {
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

          .assessment-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            width: 100%;
          }

          .assessment-card,
          .feedback-card {
            background: rgba(255, 255, 255, .8);
            border-radius: 12px;
            padding: 1.75rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 0, 0, .1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .assessment-card:hover,
          .feedback-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          }

          .assessment-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
          }

          .assessment-header h3 {
            color: #2d3748;
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0;
          }

          .category-tag {
            background: #ebf8ff;
            color: #3182ce;
            padding: 0.35rem 1rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
            letter-spacing: 0.025em;
          }

          .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #edf2f7;
          }

          .detail-row:last-of-type {
            border-bottom: none;
          }

          .label {
            color: #718096;
            font-size: 0.925rem;
          }

          .value {
            color: #2d3748;
            font-weight: 500;
            text-align: center;
          }

          .score {
            color: #38a169;
            font-weight: 600;
          }

          .git-link {
            display: inline-block;
            width: 100%;
            padding: 0.75rem;
            background: #4299e1;
            color: white;
            text-align: center;
            font-weight: 400;
            text-decoration: none;
            border-radius: 8px;
            transition: background 0.2s ease;
            margin-top: 1rem;
            letter-spacing: 2px
          }

          .git-link:hover {
            background: #3182ce;
          }

          .feedback-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            width: 100%;
          }

          .feedback-card {
            background: rgba(255, 255, 255, .4);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 0, 0, .1);

          }

          .feedback-card h3 {
            // color: #000;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
          }

          .feedback-card h4 {
            // color: #4a5568;
            font-size: 1.1rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .feedback-card ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .feedback-card li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
            color:rgb(183, 186, 192);
            line-height: 1.6;
          }

          .feedback-card li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #4299e1;
            font-weight: bold;
          }

          .reflection-subsection {
            margin-bottom: 2rem;
          }

          .reflection-subsection:last-child {
            margin-bottom: 0;
          }

          @media (max-width: 768px) {
            .assessment-feedback-container {
              padding: 1em;
            }

            .assessment-grid,
            .feedback-container {
              grid-template-columns: 1fr;
            }

            h2 {
              font-size: 2rem;
            }

            .assessment-card,
            .feedback-card {
              padding: 1.25rem;
            }
          }

          @media (prefers-color-scheme: dark) {
            .assessment-feedback-container {
              background: rgba(0, 0, 0, 0.1);
              color: #fff;
            }

            .assessment-card,
            .feedback-card {
              background: #1e293b;
              border-color: rgba(255, 255, 255, 0.1);
            }

            h2, h3, h4 {
              color: #ffffff;
            }

            .assessment-header {
              border-bottom-color: #4a5568;
            }

            .value, li {
              color: #ffffff;
            }

            .label {
             color: #ffffff;
            }

            .category-tag {
              background: rgba(66, 153, 225, 0.7);
              color:rgb(221, 225, 228);
            }

            .detail-row {
              border-bottom-color: #4a5568;
            }

            .feedback-card h3 {
              border-bottom-color: #4a5568;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AssessmentFeedbackSection;