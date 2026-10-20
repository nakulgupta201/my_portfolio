import React from 'react';
import CertificateCard from '../components/CertificateCard';
import { portfolioData } from '../data/portfolioData';

const CertificationsPage = () => {
  const { certifications } = portfolioData;

  return (
    <div className="container" style={{ paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      <header className="section-header">
        <span className="section-badge">Credentials &amp; Proof</span>
        <h1 className="section-title">Certifications &amp; Achievements</h1>
        <p className="section-subtitle">
          Courses, technical certifications, and competitive hackathon participations completed
          alongside my formal university degree.
        </p>
      </header>

      <div className="certs-grid">
        {certifications.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
