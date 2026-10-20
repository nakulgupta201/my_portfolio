import React, { useState } from 'react';
import CertificateCard from '../CertificateCard';
import { portfolioData } from '../../data/portfolioData';

const CertificationsSection = () => {
  const { certifications } = portfolioData;
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_COUNT = 2;
  const visibleCertifications = isExpanded
    ? certifications
    : certifications.slice(0, INITIAL_COUNT);

  return (
    <section id="certifications" className="portfolio-section">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Verified Achievements</span>
          <h2 className="section-title">Certifications &amp; Achievements</h2>
          <p className="section-subtitle">
            External coursework, technical credentials, and competitive hackathon participations
            completed alongside my university degree.
          </p>
        </header>

        <div className="certs-grid">
          {visibleCertifications.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>

        {certifications.length > INITIAL_COUNT && (
          <div className="section-view-more" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <span>{isExpanded ? 'Show Less Certifications' : 'View More Certifications'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
