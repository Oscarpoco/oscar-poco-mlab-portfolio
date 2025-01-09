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
      <section className="assessments-section">
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

      <section className="feedback-section">
        <h2>Feedback and Reflections</h2>
        
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

          .assessments-section,
          .feedback-section {
            margin-bottom: 4rem;
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
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            width: 100%;
          }

          .assessment-card,
          .feedback-card {
            background: white;
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
            font-weight: 500;
            text-decoration: none;
            border-radius: 8px;
            transition: background 0.2s ease;
            margin-top: 1rem;
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
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 0, 0, .1);

          }

          .feedback-card h3 {
            color: #2d3748;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
          }

          .feedback-card h4 {
            color: #4a5568;
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
            color: #4a5568;
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
              background: #1a202c;
              color: #e2e8f0;
            }

            .assessment-card,
            .feedback-card {
              background: #2d3748;
              border-color: rgba(255, 255, 255, 0.1);
            }

            h2, h3, h4 {
              color: #e2e8f0;
            }

            .assessment-header {
              border-bottom-color: #4a5568;
            }

            .value, li {
              color: #e2e8f0;
            }

            .label {
              color: #a0aec0;
            }

            .category-tag {
              background: rgba(66, 153, 225, 0.2);
              color: #63b3ed;
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