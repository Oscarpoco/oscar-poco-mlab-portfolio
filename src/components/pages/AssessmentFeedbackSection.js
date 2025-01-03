import React, { useState } from 'react';

const AssessmentFeedbackSection = () => {
  const [assessments] = useState([
    {
      id: 1,
      name: 'UI Challenge',
      gitLink: 'https://github.com/user/ui-challenge',
      dateCompleted: '2024-01-15',
      score: '85%',
      notes: 'Above average.',
      category: 'UI/UX'
    },
    {
      id: 2,
      name: 'JavaScript Assessment',
      gitLink: 'https://github.com/user/js-assessment',
      dateCompleted: '2024-01-20',
      score: '90%',
      notes: 'Excellent understanding of basics.',
      category: 'JavaScript'
    },
    {
      id: 3,
      name: 'React Native',
      gitLink: 'https://github.com/user/react-native-course',
      dateCompleted: '2024-01-25',
      score: 'N/A',
      notes: 'Completed an external course.',
      category: 'Mobile'
    }
  ]);

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
        <h2>Assessments</h2>
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
                  <span className="label">Notes:</span>
                  <span className="value">{assessment.notes}</span>
                </div>
                <a href={assessment.gitLink} className="git-link" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="feedback-section" id="projects">
        <h2>Feedback and Reflections</h2>
        
        <div className="feedback-container">
          <div className="facilitator-feedback">
            <h3>Facilitator Feedback</h3>
            <ul>
              {feedback.facilitator.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="self-reflection">
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
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
          }

          h2 {
            font-size: 2.5rem;
            color: #2d3748;
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
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
          }

          .assessment-card {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 0, 0, .7);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .assessment-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          }

          .assessment-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }

          .assessment-header h3 {
            color: #2d3748;
            font-size: 1.25rem;
            margin: 0;
          }

          .category-tag {
            background: #ebf5ff;
            color: #4a90e2;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid #edf2f7;
          }

          .label {
            color: #718096;
            font-size: 0.875rem;
          }

          .value {
            color: #2d3748;
            font-weight: 500;
          }

          .score {
            color: #38a169;
            font-weight: 600;
          }

          .git-link {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background: #4a90e2;
            color: white;
            font-weight: 500;
            text-decoration: none;
            border-radius: 25px;
            transition: background 0.3s ease;
          }

          .git-link:hover {
            background: #357abd;
          }

          .feedback-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .facilitator-feedback,
          .self-reflection {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          h3 {
            color: #2d3748;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }

          h4 {
            color: #4a5568;
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
            color: #4a5568;
            line-height: 1.6;
          }

          li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #4a90e2;
            font-weight: bold;
          }

          .reflection-subsection {
            margin-bottom: 2rem;
          }

          @media (max-width: 768px) {
            .assessment-feedback-container {
              padding: 1rem;
            }

            .assessment-grid,
            .feedback-container {
              grid-template-columns: 1fr;
            }

            h2 {
              font-size: 1.75rem;
            }
          }

          @media (prefers-color-scheme: dark) {
            .assessment-feedback-container {
              background: #1a202c;
            }

            .assessment-card,
            .facilitator-feedback,
            .self-reflection {
              background: #2d3748;
            }

            h2, h3, h4 {
              color: #e2e8f0;
            }

            .value, li {
              color: #e2e8f0;
            }

            .label {
              color: #a0aec0;
            }

            .category-tag {
              background: rgba(74, 144, 226, 0.2);
            }

            .detail-row {
              border-bottom-color: #4a5568;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AssessmentFeedbackSection;