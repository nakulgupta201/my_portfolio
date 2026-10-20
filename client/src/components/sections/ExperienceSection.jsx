import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const ExperienceSection = () => {
  const { workExperience = [] } = portfolioData;

  return (
    <section id="experience" className="portfolio-section">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Career &amp; Practice</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional internships, technical roles, and real-world software engineering practice.
          </p>
        </header>

        <div className="experience-cards-grid">
          {workExperience.map((exp) => (
            <article key={exp.id} className="experience-card">
              <div className="exp-header-row">
                <h3 className="exp-role-title">{exp.role}</h3>
                <div className="exp-badges-wrap">
                  <span className="exp-type-tag">{exp.employmentType}</span>
                  <div className="exp-status-indicator">
                    <span
                      className="status-dot"
                      style={{
                        backgroundColor: exp.isCurrent ? 'var(--accent)' : 'var(--success)',
                      }}
                    />
                    <span>{exp.isCurrent ? 'Currently Working' : (exp.status || 'Completed')}</span>
                  </div>
                </div>
              </div>

              <div className="exp-meta-row">
                <span className="exp-company">🏢 {exp.company}</span>
                {exp.location && <span className="exp-location">📍 {exp.location}</span>}
                <span className="exp-period">🗓️ {exp.period}</span>
              </div>

              {exp.description && (
                <p className="exp-description">{exp.description}</p>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="exp-highlights-list">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} className="exp-highlight-item">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="exp-footer">
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="exp-tech-stack">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-cert-link"
                    title="View Offer Letter or Completion Certificate"
                  >
                    <span>View Credential / Letter ↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
