import React from 'react';
import TimelineItem from '../TimelineItem';
import { portfolioData } from '../../data/portfolioData';

const EducationSection = () => {
  const { educationTimeline } = portfolioData;

  return (
    <section id="education" className="portfolio-section">
      <div className="container">
        <header className="section-header text-center">
          <span className="section-badge">Academic Milestones</span>
          <h2 className="section-title">Education Timeline</h2>
          <p className="section-subtitle">
            My educational background and academic journey.
          </p>
        </header>

        <div className="timeline-container">
          {educationTimeline.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
