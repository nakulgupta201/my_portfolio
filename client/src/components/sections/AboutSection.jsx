import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const AboutSection = () => {
  const { personal, interests } = portfolioData;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="portfolio-section">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Background &amp; Profile</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A curious mind, a problem-solving mindset, and a passion for turning ideas into reality.
          </p>
        </header>

        <div className="about-grid">
          <aside className="about-profile-card">
            <div className="avatar-wrapper">
              <div className="avatar-inner">
                <span>NG</span>
              </div>
              <div className="avatar-badge" title="Undergraduate Student" />
            </div>

            <h3 className="profile-name">{personal.name}</h3>
            <span className="profile-role">{personal.designation}</span>

            <div className="profile-meta-list">
              <div className="profile-meta-item">
                <span className="profile-meta-icon">🏛️</span>
                <span>{personal.university}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-icon">🎓</span>
                <span>B.Tech CSE (Class of {personal.graduationYear})</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-icon">📍</span>
                <span>{personal.location}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-icon">💼</span>
                <span>{personal.status}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Get In Touch →
            </button>
          </aside>

          <div className="about-bio-content">
            <div className="about-bio-text">
              {personal.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-facts-grid">
              {personal.quickFacts.map((fact, index) => (
                <div key={index} className="fact-card">
                  <div className="fact-label">{fact.label}</div>
                  <div className="fact-value">{fact.value}</div>
                </div>
              ))}
            </div>

            <div className="about-interests-box">
              <h3 className="about-interests-title">
                <span>⚡</span> Core Interests &amp; Focus Areas
              </h3>
              <div className="interests-pill-grid">
                {interests.map((interest, index) => (
                  <span key={index} className="interest-pill">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
