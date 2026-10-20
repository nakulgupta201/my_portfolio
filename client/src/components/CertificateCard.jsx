import React from 'react';

const CertificateCard = ({ cert }) => {
  const { title, issuer, issueDate, verificationUrl, badgeText, description, skillsLearned = [] } = cert;

  return (
    <div className="cert-card">
      <div className="cert-header">
        <div className="cert-icon-container" aria-hidden="true">
          📜
        </div>
        <span className="cert-badge">{badgeText}</span>
      </div>

      <h3 className="cert-title">{title}</h3>
      <div className="cert-issuer">{issuer}</div>
      <p className="cert-description">{description}</p>

      {skillsLearned.length > 0 && (
        <div className="cert-skills-wrap">
          {skillsLearned.map((skill, idx) => (
            <span key={idx} className="badge">
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="cert-footer">
        <span className="cert-date">Issued / Period: {issueDate}</span>
        {verificationUrl && (
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link-btn"
            title="Verify Certificate"
          >
            <span>Verify Credential ↗</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
