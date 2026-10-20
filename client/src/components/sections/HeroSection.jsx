import React from 'react';
import Typewriter from '../Typewriter';
import { portfolioData } from '../../data/portfolioData';

const HeroSection = () => {
  const { personal, typewriterPhrases } = portfolioData;

  const apiBase = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : '';

  const pdfUrl = `${apiBase}/api/resume/pdf`;
  const docxUrl = `${apiBase}/api/resume/docx`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const emailSubject = encodeURIComponent('Portfolio Inquiry - Hello Nakul');
  const emailBody = encodeURIComponent('Hi Nakul,\n\nI came across your portfolio and would like to connect with you regarding an opportunity.');
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${emailSubject}&body=${emailBody}`;

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>AVAILABLE FOR INTERNSHIPS &amp; PROJECTS</span>
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="hero-name-accent">{personal.name.split(' ')[0]}</span>.
            </h1>

            <div className="hero-designation-label">
              FULL STACK MERN DEVELOPER &amp; B.TECH CSE STUDENT
            </div>

            <Typewriter phrases={typewriterPhrases} />

            <p className="hero-description">{personal.shortBio}</p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn btn-primary"
              >
                <span>View Projects ↓</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
              >
                <span>✉ Contact Me ↓</span>
              </button>

              <a
                href={pdfUrl}
                download="Nakul-Gupta_Resume.pdf"
                className="btn btn-outline"
                title="Download Nakul Gupta's Resume in PDF Format"
              >
                <span>📄 CV (PDF)</span>
              </a>

              <a
                href={docxUrl}
                download="Nakul-Gupta_Resume.docx"
                className="btn btn-outline"
                title="Download Nakul Gupta's Resume in Word (.docx) Format"
              >
                <span>📝 CV (.docx)</span>
              </a>
            </div>

            <div className="hero-social-links" aria-label="Social and contact links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="Open GitHub Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="Open LinkedIn Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title={`Send email to ${personal.email}`}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <div className="terminal-dots">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <span className="terminal-title">developer@nakul-portfolio:~</span>
            </div>

            <div className="hero-card-body">
              <pre className="terminal-code">
                <code>
                  <span className="code-kw">const</span>{' '}
                  <span className="code-var">developer</span> = &#123;{'\n'}
                  {'  '}name: <span className="code-str">'Nakul Gupta'</span>,{'\n'}
                  {'  '}university: <span className="code-str">'JK Lakshmipat University, Jaipur'</span>,{'\n'}
                  {'  '}degree: <span className="code-str">'B.Tech in Computer Science &amp; Engineering'</span>,{'\n'}
                  {'  '}gradYear: <span className="code-num">2028</span>,{'\n'}
                  {'  '}skills: [<span className="code-str">'MERN'</span>,{' '}
                  <span className="code-str">'C++'</span>,{' '}
                  <span className="code-str">'DSA'</span>,{' '}
                  <span className="code-str">'C'</span>],{'\n'}
                  {'  '}openForInternships: <span className="code-bool">true</span>{'\n'}
                  &#125;;
                </code>
              </pre>

              <div className="hero-stat-grid">
                <div className="hero-stat-item">
                  <span className="hero-stat-value">3+</span>
                  <span className="hero-stat-label">Technical Projects</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">2028</span>
                  <span className="hero-stat-label">Graduation Year</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">MERN</span>
                  <span className="hero-stat-label">Full Stack Development</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">C++</span>
                  <span className="hero-stat-label">DSA &amp; Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
