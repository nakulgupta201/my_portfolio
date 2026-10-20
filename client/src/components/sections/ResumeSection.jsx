import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const ResumeSection = () => {
  const { personal } = portfolioData;

  const apiBase = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : '';

  const pdfUrl = `${apiBase}/api/resume/pdf`;
  const docxUrl = `${apiBase}/api/resume/docx`;

  return (
    <section id="resume" className="portfolio-section">
      <div className="container">
        <header className="section-header text-center">
          <span className="section-badge">Curriculum Vitae</span>
          <h2 className="section-title">Resume &amp; Credentials</h2>
          <p className="section-subtitle">
            Download my updated curriculum vitae in either PDF or Microsoft Word format,
            served directly through Express backend routes with strict attachment headers.
          </p>
        </header>

        <div className="resume-download-card">
          <div className="resume-card-left">
            <div className="resume-card-badge">📄 Verified Documents</div>
            <h3 className="resume-card-title">Nakul Gupta — Software Engineering Resume</h3>
            <p className="resume-card-desc">
              Comprehensive one-page technical profile covering academic coursework at JK Lakshmipat
              University, MERN stack full-stack architectures, Data Structures &amp; Algorithms in C++,
              and practical project repositories.
            </p>

            <div className="resume-features-list">
              <div className="resume-feature-item">
                <span className="feature-check">✓</span>
                <span>B.Tech CSE (Batch 2024–2028), JK Lakshmipat University</span>
              </div>
              <div className="resume-feature-item">
                <span className="feature-check">✓</span>
                <span>Full Stack MERN Projects (React, Node, Express, MongoDB)</span>
              </div>
              <div className="resume-feature-item">
                <span className="feature-check">✓</span>
                <span>Algorithmic Problem Solving &amp; OOPs in C++</span>
              </div>
              <div className="resume-feature-item">
                <span className="feature-check">✓</span>
                <span>Direct Node.js backend streaming with exact Content-Disposition</span>
              </div>
            </div>
          </div>

          <div className="resume-card-right">
            <h4 className="resume-actions-title">Select Format</h4>

            <div className="resume-action-buttons">
              <a
                href={pdfUrl}
                download="Nakul-Gupta_Resume.pdf"
                className="btn btn-primary"
                style={{ width: '100%' }}
                title="Download Nakul Gupta Resume in PDF format"
              >
                <span>📥 Download PDF Resume</span>
                <span className="badge" style={{ background: 'rgba(0,0,0,0.15)', color: '#fff' }}>
                  .pdf
                </span>
              </a>

              <a
                href={docxUrl}
                download="Nakul-Gupta_Resume.docx"
                className="btn btn-secondary"
                style={{ width: '100%' }}
                title="Download Nakul Gupta Resume in Word format"
              >
                <span>📝 Download Word Resume</span>
                <span className="badge" style={{ background: 'var(--bg-tertiary)' }}>
                  .docx
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
