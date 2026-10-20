import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    category,
    shortDescription,
    techStack = [],
    githubUrl,
    liveUrl,
    isDeployed,
    highlights = [],
  } = project;

  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-category-tag">{category}</span>
        <div className="project-status-indicator">
          <span
            className="status-dot"
            style={{
              backgroundColor: isDeployed ? 'var(--success)' : 'var(--accent-secondary)',
            }}
          />
          <span>{isDeployed ? 'Deployed' : 'In Development'}</span>
        </div>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{shortDescription}</p>

        {highlights.length > 0 && (
          <ul className="project-highlights-list">
            {highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="project-highlight-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project-tech-stack">
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <Link
          to={`/project/${id}`}
          state={{ from: 'projects' }}
          className="project-action-link primary-action"
        >
          <span>Read Overview →</span>
        </Link>

        <div className="project-external-links">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-link"
              title="View repository on GitHub"
            >
              <span>GitHub ↗</span>
            </a>
          ) : (
            <span className="project-placeholder-text">Local Repo</span>
          )}

          {liveUrl && isDeployed ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-link"
              title="Open live deployed demo"
            >
              <span>Live Demo ↗</span>
            </a>
          ) : (
            <span className="project-placeholder-text">Local Build</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
