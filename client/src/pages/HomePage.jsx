import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { portfolioData } from '../data/portfolioData';

const HomePage = () => {
  const { personal, typewriterPhrases } = portfolioData;

  const apiBase = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : '';

  const pdfUrl = `${apiBase}/api/resume/pdf`;
  const docxUrl = `${apiBase}/api/resume/docx`;

  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-greeting">WELCOME TO MY PORTFOLIO</span>

            <h1 className="hero-name">{personal.name}</h1>

            <Typewriter phrases={typewriterPhrases} />

            <p className="hero-description">{personal.shortBio}</p>

            <div className="hero-actions">
              <a
                href={pdfUrl}
                download="Nakul_Gupta_Resume.pdf"
                className="btn btn-primary"
                title="Download Nakul Gupta's Resume in PDF Format"
              >
                <span>📄 Download CV (PDF)</span>
              </a>

              <a
                href={docxUrl}
                download="Nakul_Gupta_Resume.docx"
                className="btn btn-secondary"
                title="Download Nakul Gupta's Resume in Word (.docx) Format"
              >
                <span>📝 Download CV (.docx)</span>
              </a>

              <Link to="/projects" className="btn btn-outline">
                <span>View Projects →</span>
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">developer@nakul-portfolio:~</span>
            </div>

            <div className="hero-card-body">
              <div className="terminal-code">
                <p>
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  name: <span className="code-string">'{personal.name}'</span>,
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  university: <span className="code-string">'{personal.university}'</span>,
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  degree: <span className="code-string">'{personal.degree}'</span>,
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  gradYear: <span className="code-variable">{personal.graduationYear}</span>,
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  skills: [<span className="code-string">'MERN'</span>, <span className="code-string">'C++'</span>, <span className="code-string">'DSA'</span>, <span className="code-string">'C'</span>],
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  openForInternships: <span className="code-keyword">true</span>
                </p>
                <p>&#125;;</p>
              </div>

              <div className="hero-stat-grid">
                <div className="hero-stat-item">
                  <span className="hero-stat-value">3+</span>
                  <span className="hero-stat-label">Featured MERN Projects</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">2028</span>
                  <span className="hero-stat-label">Graduation Year</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">REST</span>
                  <span className="hero-stat-label">Express &amp; Mongo API</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">100%</span>
                  <span className="hero-stat-label">Pure CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
