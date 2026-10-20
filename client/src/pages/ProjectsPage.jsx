import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';

const ProjectsPage = () => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterCategories = ['All', 'AI/ML', 'Frontend & API', 'Full Stack'];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects;

    return projects.filter(
      (p) =>
        p.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        p.techStack.some((tech) => tech.toLowerCase().includes(selectedFilter.toLowerCase()))
    );
  }, [projects, selectedFilter]);

  return (
    <div className="container" style={{ paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      <header className="section-header">
        <span className="section-badge">Portfolio Work</span>
        <h1 className="section-title">Projects Showcase</h1>
        <p className="section-subtitle">
          Interactive full-stack applications and prototypes built during my computer science coursework.
        </p>
      </header>

      <div className="projects-filter-bar" role="toolbar" aria-label="Filter projects by technology">
        {filterCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
            onClick={() => setSelectedFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
          <p>No projects match the selected filter category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
