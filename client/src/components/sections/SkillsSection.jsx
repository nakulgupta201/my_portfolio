import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

const SkillsSection = () => {
  const { skills } = portfolioData;
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_CATEGORIES = 2;
  const visibleSkills = isExpanded ? skills : skills.slice(0, INITIAL_CATEGORIES);

  return (
    <section id="skills" className="portfolio-section">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Competencies</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I use to build projects and keep improving as a developer.
          </p>
        </header>

        <div className="skills-categories-grid">
          {visibleSkills.map((group, groupIdx) => (
            <div key={groupIdx} className="skill-category-card">
              <div className="skill-category-header">
                <span className="skill-category-icon" aria-hidden="true">
                  {group.icon}
                </span>
                <div>
                  <h3 className="skill-category-title">{group.category}</h3>
                  <p className="skill-category-desc">{group.description}</p>
                </div>
              </div>

              <div className="skill-items-list">
                {group.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-row-item">
                    <div className="skill-row-top">
                      <span className="skill-name">{skill.name}</span>
                      <span
                        className={`skill-level-badge level-${skill.rating.toLowerCase()}`}
                      >
                        {skill.rating}
                      </span>
                    </div>
                    <p className="skill-detail-text">{skill.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {skills.length > INITIAL_CATEGORIES && (
          <div className="section-view-more" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <span>{isExpanded ? 'Show Less Skills' : 'View More Skills'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
