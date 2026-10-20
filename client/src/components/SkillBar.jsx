import React, { useState, useEffect } from 'react';

const SkillBar = ({ name, level, rating, description }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 150);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="skill-card" role="group" aria-label={`${name}: ${level}% proficiency`}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
      </div>

      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      <div className="skill-footer">
        <span className="skill-description-short">{description}</span>
        <span className="skill-rating-badge">{rating}</span>
      </div>

      <div className="skill-tooltip" role="tooltip">
        <strong>{name}</strong>: {level}% — {rating} level
      </div>
    </div>
  );
};

export default SkillBar;
