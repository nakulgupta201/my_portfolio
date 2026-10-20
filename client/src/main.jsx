import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/global.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/experience.css';
import './styles/timeline.css';
import './styles/certifications.css';
import './styles/contact.css';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
