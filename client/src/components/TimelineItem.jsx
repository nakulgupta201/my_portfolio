import React from 'react';

const TimelineItem = ({ item }) => {
  const { title, institution, period, status, details, tags = [], type } = item;

  return (
    <div className="timeline-item">
      <div className="timeline-node" aria-hidden="true" />

      <div className="timeline-content-card">
        <div className="timeline-card-header">
          <span className="timeline-period-badge">{period}</span>
          <span className="timeline-type-pill">
            {type === 'education' ? '🎓 Education' : '💼 Experience & Practice'}
          </span>
        </div>

        <h3 className="timeline-title">{title}</h3>
        <div className="timeline-institution">
          <span>🏛️ {institution}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>• {status}</span>
        </div>

        <p className="timeline-details">{details}</p>

        {tags.length > 0 && (
          <div className="timeline-tags-list">
            {tags.map((tag, idx) => (
              <span key={idx} className="badge">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
