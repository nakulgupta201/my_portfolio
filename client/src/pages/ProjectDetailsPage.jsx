import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = portfolioData.projects.find((p) => p.id === id);

  const handleBackToProjects = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!project) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <span className="section-badge">Project Not Found</span>
        <h1 className="section-title" style={{ marginTop: '1rem' }}>
          Unknown Project ID
        </h1>
        <p className="section-subtitle" style={{ margin: '1rem auto 2rem' }}>
          The requested project "{id}" does not exist in the portfolio records.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button type="button" onClick={handleBackToProjects} className="btn btn-primary">
            ← Back to Projects
          </button>
          <button type="button" onClick={handleGoHome} className="btn btn-outline">
            🏠 Return Home
          </button>
        </div>
      </div>
    );
  }

  const {
    title,
    category,
    longDescription,
    techStack = [],
    githubUrl,
    liveUrl,
    isDeployed,
    highlights = [],
    architecture,
  } = project;

  return (
    <div className="container project-detail-page">
      <nav className="detail-nav-bar" aria-label="Breadcrumb">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleBackToProjects}
            className="btn btn-outline btn-sm"
          >
            ← Back to Projects
          </button>
          <button
            type="button"
            onClick={handleGoHome}
            className="btn btn-secondary btn-sm"
          >
            🏠 Home
          </button>
        </div>
        <span className="detail-breadcrumb-label">
          Portfolio / Projects / <strong>{title}</strong>
        </span>
      </nav>

      <header className="project-detail-header">
        <div className="detail-meta-row">
          <span className="project-category-tag">{category}</span>
          <span className="project-status-indicator">
            <span
              className="status-dot"
              style={{
                backgroundColor: isDeployed ? 'var(--success)' : 'var(--accent-secondary)',
              }}
            />
            {isDeployed ? 'Live Deployment' : 'Coursework Development'}
          </span>
        </div>

        <h1 className="project-detail-title">{title}</h1>
      </header>

      <div className="project-detail-grid">
        <div className="project-detail-main">
          <section className="detail-section">
            <h2 className="detail-section-title">Overview &amp; Motivation</h2>
            <p className="detail-text">{longDescription}</p>
          </section>

          {architecture && (
            <section className="detail-section">
              <h2 className="detail-section-title">System Architecture</h2>
              <div className="architecture-box">
                <p className="detail-text">{architecture}</p>
              </div>
            </section>
          )}

          {highlights.length > 0 && (
            <section className="detail-section">
              <h2 className="detail-section-title">Key Implementation Highlights</h2>
              <ul className="detail-highlights-list">
                {highlights.map((point, idx) => (
                  <li key={idx} className="detail-highlight-item">
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="project-detail-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">Technology Stack</h3>
            <div className="project-tech-stack">
              {techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="sidebar-divider" />

            <h3 className="sidebar-title">Repository &amp; Live Links</h3>
            <div className="sidebar-actions-list">
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>💻 GitHub Repository ↗</span>
                </a>
              ) : (
                <div className="project-placeholder-text">Local repository</div>
              )}

              {liveUrl && isDeployed ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>🚀 Open Live Demo ↗</span>
                </a>
              ) : (
                <div className="project-placeholder-text">
                  Deployment pending (running in local development)
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      <div className="detail-bottom-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={handleBackToProjects}
          className="btn btn-primary"
        >
          ← Back to Projects
        </button>
        <button
          type="button"
          onClick={handleGoHome}
          className="btn btn-outline"
        >
          🏠 Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
