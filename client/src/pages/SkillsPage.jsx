import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillsPage = () => {
  const { skills } = portfolioData;

  return (
    <div className="container" style={{ paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      <header className="section-header">
        <span className="section-badge">Technical Stack</span>
        <h1 className="section-title">Skills &amp; Technologies</h1>
        <p className="section-subtitle">
          An honest assessment of my current programming competencies across client-side,
          server-side, databases, and developer tooling.
        </p>
      </header>

      <div className="skills-categories-grid">
        {Array.isArray(skills) && skills.map((group, groupIdx) => (
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
                    <span className={`skill-level-badge level-${skill.rating.toLowerCase()}`}>
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
    </div>
  );
};

export default SkillsPage;
