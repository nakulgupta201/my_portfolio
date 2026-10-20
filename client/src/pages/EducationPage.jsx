import React from 'react';
import TimelineItem from '../components/TimelineItem';
import { portfolioData } from '../data/portfolioData';

const EducationPage = () => {
  const { educationTimeline } = portfolioData;

  return (
    <div className="container" style={{ paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      <header className="section-header text-center">
        <span className="section-badge">Academic Milestones</span>
        <h1 className="section-title">Education &amp; Experience</h1>
        <p className="section-subtitle">
          My academic path in Computer Science &amp; Engineering at JK Lakshmipat University,
          accompanied by ongoing technical milestones.
        </p>
      </header>

      <div className="timeline-container">
        {educationTimeline.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
