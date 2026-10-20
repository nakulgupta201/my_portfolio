import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setResumeMenuOpen(false);

    if (!isHomePage) {
      navigate('/', { state: { scrollTo: sectionId } });
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sections = ['hero', ...navItems.map((item) => item.id)];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const apiBase = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : '';

  const pdfUrl = `${apiBase}/api/resume/pdf`;
  const docxUrl = `${apiBase}/api/resume/docx`;

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link
          to="/"
          className="navbar-brand"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span className="brand-monogram">NG</span>
          <span className="brand-fullname">Nakul Gupta</span>
        </Link>

        <nav
          className={`navbar-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}
          aria-label="Portfolio sections"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${isHomePage && activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <div className="resume-dropdown">
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => setResumeMenuOpen((prev) => !prev)}
              aria-expanded={resumeMenuOpen}
              aria-label="Resume download options"
            >
              <span>📄 CV</span>
              <span style={{ fontSize: '0.65rem' }}>▼</span>
            </button>

            {resumeMenuOpen && (
              <div className="resume-dropdown-menu">
                <a
                  href={pdfUrl}
                  download="Nakul-Gupta_Resume.pdf"
                  className="resume-option-btn"
                  onClick={() => setResumeMenuOpen(false)}
                >
                  <span>📥 Download PDF</span>
                  <span className="resume-option-badge">.pdf</span>
                </a>
                <a
                  href={docxUrl}
                  download="Nakul-Gupta_Resume.docx"
                  className="resume-option-btn"
                  onClick={() => setResumeMenuOpen(false)}
                >
                  <span>📝 Download Word</span>
                  <span className="resume-option-badge">.docx</span>
                </a>
              </div>
            )}
          </div>

          <ThemeToggle />

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation drawer"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
