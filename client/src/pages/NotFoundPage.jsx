import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <span className="section-badge">404 Error</span>
      <h1 className="section-title" style={{ marginTop: '1rem', fontSize: '3rem' }}>
        Page Not Found
      </h1>
      <p className="section-subtitle" style={{ margin: '1rem auto 2rem' }}>
        The page you are looking for does not exist in Nakul Gupta's portfolio.
      </p>
      <Link to="/" className="btn btn-primary">
        ← Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
