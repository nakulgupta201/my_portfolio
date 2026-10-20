import React, { useState, useMemo } from 'react';
import ProjectCard from '../ProjectCard';
import { portfolioData } from '../../data/portfolioData';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const filterCategories = ['All', 'AI/ML', 'Frontend & API', 'Full Stack'];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects;

    return projects.filter(
      (p) =>
        p.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        p.techStack.some((tech) => tech.toLowerCase().includes(selectedFilter.toLowerCase()))
    );
  }, [projects, selectedFilter]);

  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 2);

  const handleFilterClick = (category) => {
    setSelectedFilter(category);
    setIsExpanded(false);
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Selected Work</span>
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            A collection of projects I've worked on to apply what I've learned, explore new ideas, and solve practical problems.
          </p>
        </header>

        <div className="projects-filter-bar" role="toolbar" aria-label="Filter projects">
          {filterCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length > 2 && (
          <div className="section-view-more" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <span>{isExpanded ? 'Show Less Projects' : 'View More Projects'}</span>
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="empty-filter-state">
            <p>No projects match the selected category filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
