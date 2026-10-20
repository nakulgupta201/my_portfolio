import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const scrollTo = (e, id) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: id } });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-brand-name">{personal.name}</h3>
            <p className="footer-tagline">
              B.Tech Computer Science student at JK Lakshmipat University, Jaipur. Focused on building
              reliable full-stack web applications with the MERN stack and practicing algorithmic problem
              solving in C++.
            </p>
            <div className="footer-status-pill">
              <span className="footer-status-dot" aria-hidden="true" />
              <span>Available for Summer Internships &amp; Collaborations</span>
            </div>
          </div>

          <div>
            <h4 className="footer-links-title">Sections</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#about"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'about')}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'skills')}
                >
                  Skills &amp; Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'projects')}
                >
                  Projects Showcase
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'experience')}
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'education')}
                >
                  Education &amp; Timeline
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'certifications')}
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'resume')}
                >
                  Resume Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-links-title">Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub Profile ↗
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn Profile ↗
                </a>
              </li>
              <li>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Email ({personal.email})
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link"
                  onClick={(e) => scrollTo(e, 'contact')}
                >
                  Contact Form 
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {personal.name} — B.Tech Computer Science &amp; Engineering.
          </p>
          <p>JK Lakshmipat University, Jaipur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
