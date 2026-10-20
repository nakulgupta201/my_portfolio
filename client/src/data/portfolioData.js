export const portfolioData = {
  personal: {
    name: 'Nakul Gupta',
    role: 'Full Stack MERN Developer',
    designation: 'B.Tech Computer Science Student',
    university: 'JK Lakshmipat University, Jaipur',
    graduationYear: 2028,
    degree: 'B.Tech in Computer Science & Engineering',
    currentYear: '1st/2nd Year Undergraduate',
    location: 'Jaipur, Rajasthan, India',
    status: 'Student & Aspiring Software Engineer',
    email: 'nakulgupta223@gmail.com',
    github: 'https://github.com/nakulgupta201',
    linkedin: 'https://www.linkedin.com/in/nakulgupta201/',
    resumeEndpoints: {
      pdf: '/api/resume/pdf',
      docx: '/api/resume/docx',
    },
    shortBio:
      'Computer Science undergraduate at JK Lakshmipat University focused on modern web engineering with the MERN stack, RESTful API design, and algorithmic problem solving in C++.',
    fullBio: [
      'Hello! I am Nakul Gupta, a Computer Science and Engineering student at JK Lakshmipat University, Jaipur. I am interested in web development and enjoy understanding how applications work, from the user interface to the backend.',
      'Currently, I am learning and building projects with React, Node.js, Express, and MongoDB. I prefer learning by writing code, trying things out, and figuring out how to fix problems when something does not work as expected. This helps me understand concepts beyond just following tutorials.',
      'Along with web development, I am strengthening my Data Structures and Algorithms skills using C++. I am looking forward to applying what I learn to real-world projects, working with other developers, and gaining practical experience through software development internships.',
    ],
    quickFacts: [
      { label: 'Degree', value: 'B.Tech Computer Science (2024–2028)' },
      { label: 'Institution', value: 'JK Lakshmipat University' },
      { label: 'Core Focus', value: 'Full Stack & DSA in C++' },
      { label: 'Location', value: 'Jaipur, Rajasthan, India' },
      { label: 'Availability', value: 'Open for Internship Opportunities' },
    ],
  },

  typewriterPhrases: [
    'An Aspiring Full Stack Developer',
    'A B.Tech CSE Student at JKLU',
    'Turning Ideas Into Working Projects',
    'I am Always Learning, Always Building',
  ],

  interests: [
    'Full-Stack Web Development',
    'Gen-AI',
    'Data Structures & Algorithms',
    'C++ Programming',
    'System Design',
    'Database Designing',
    'Clean, Accessible UI/UX Design',
  ],

  skills: [
    {
      category: 'Programming Languages',
      icon: '💻',
      description: 'Core languages used for problem solving and application development',
      items: [
        { name: 'C++', rating: 'Proficient', detail: 'OOPs, Pointers, STL, Algorithmic Problem Solving' },
        { name: 'JavaScript (ES6+)', rating: 'Proficient', detail: 'Async/Await, Promises, Closures, DOM manipulation' },
        { name: 'C', rating: 'Proficient', detail: 'Procedural programming, memory fundamentals' },
      ],
    },
    {
      category: 'Frontend Development',
      icon: '🎨',
      description: 'Building responsive, component-driven client applications',
      items: [
        { name: 'React.js', rating: 'Proficient', detail: 'Functional components, Hooks, React Router, SPA architecture' },
        { name: 'HTML5 & CSS3', rating: 'Proficient', detail: 'Semantic markup, Flexbox, CSS Grid, CSS Variables' },
        { name: 'Responsive Web Design', rating: 'Proficient', detail: 'Mobile-first layouts, Media queries, Cross-browser testing' },
        { name: 'Native CSS Animations', rating: 'Intermediate', detail: 'Keyframes, Transitions, Micro-interactions' },
      ],
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      description: 'Developing server-side REST APIs and middleware',
      items: [
        { name: 'Node.js', rating: 'Proficient', detail: 'Event loop, Core modules, NPM package ecosystem' },
        { name: 'Express.js', rating: 'Proficient', detail: 'REST APIs, Route controllers, Middleware, CORS handling' },
        { name: 'REST API Design', rating: 'Proficient', detail: 'HTTP status codes, Request validation, JSON payloads' },
        { name: 'Authentication Basics', rating: 'Learning', detail: 'JWT tokens, password hashing concepts' },
      ],
    },
    {
      category: 'Databases & Tools',
      icon: '🗄️',
      description: 'Data persistence, version control, and development environments',
      items: [
        { name: 'MongoDB', rating: 'Intermediate', detail: 'Document schemas, Validation, CRUD operations, Atlas cloud' },
        { name: 'Git & GitHub', rating: 'Proficient', detail: 'Version control, Branching, Commits, Pull requests' },
        { name: 'SQL', rating: 'Proficient', detail: 'API endpoint testing, Request debugging, Environments' },
        { name: 'VS Code & Vite', rating: 'Proficient', detail: 'Fast development workflow, modern build tooling' },
      ],
    },
  ],

  projects: [
    {
      id: 'DiabetesAI',
      title: 'DiabetesAI — Diabetes Risk Prediction System',
      category: 'AI/ML',
      shortDescription:
        'A machine learning-based healthcare application that predicts diabetes risk using patient health data, with multiple classification models and SHAP-based explanations for better interpretability.',
      longDescription:
        `DiabetesAI is a machine learning-based healthcare application designed to estimate diabetes risk using patient health data. The project explores how different classification models can be used for risk prediction and how explainability techniques can help users understand the factors behind a model's output.

The system combines multiple machine learning models with a web interface and backend API to provide predictions in an accessible format. It also includes SHAP-based explanations to make individual predictions easier to interpret.`,
      techStack: ['Python', 'Machine-Learning', 'Docker', 'SHAP', 'Next.js', 'Fast API'],
      githubUrl: 'https://github.com/nakulgupta201/diabetes_risk_predictor',
      liveUrl: '',
      isDeployed: false,
      featured: true,
      highlights: [
        'Multiple ML Models: Implements five classification algorithms to explore and compare diabetes risk predictions.',
        'SHAP Explainability: Provides feature-level explanations to help interpret individual model predictions.',
        'FastAPI Backend: Handles API requests, input validation, rate limiting, and email reports.',
        'Next.js Frontend: Includes interactive charts, animations, multiple themes, and PDF download functionality.',
        'Docker Support: Supports containerized setup for a more consistent development environment.',
      ],
      architecture: 'The application uses a Next.js frontend connected to a FastAPI backend through API endpoints. The backend processes patient data, runs machine learning models, and returns diabetes risk predictions with SHAP-based explanations.',
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard — Real-Time Meteorological Analytics',
      category: 'Frontend & API',
      shortDescription:
        'A responsive weather dashboard built with HTML, CSS, and JavaScript that uses a weather API to display real-time weather conditions for searched cities.',
      longDescription:
        'A weather dashboard built using HTML, CSS, and JavaScript that fetches real-time weather information through a weather API. It allows users to search for a city and view current weather conditions, temperature, humidity, and wind speed through a simple, responsive interface.',
      techStack: ['HTML', 'JavaScript', 'CSS', 'OpenWeather API', 'Local Storage'],
      githubUrl: 'https://github.com/nakulgupta201/weather_forecaster',
      liveUrl: '',
      isDeployed: false,
      featured: true,
      highlights: [
        'Live Weather Data: Fetches current weather information for searched cities using an external API.',
        'City Search: Allows users to search for weather conditions by city name.',
        'Dynamic UI Updates: Displays temperature, humidity, wind speed, and weather conditions based on API responses.',
        'Responsive Design: Uses CSS to make the dashboard accessible across different screen sizes.',
      ],
      architecture: 'Client-side web application built with HTML, CSS, and JavaScript. JavaScript uses the Fetch API to retrieve weather data from an external weather API and dynamically updates the page with the results.',
    },
    {
      id: 'Medimitra',
      title: 'Medimitra — Healthcare Access & Teleconsultation Concept',
      category: 'Full Stack',
      shortDescription:
        'A full-stack healthcare platform concept connecting patients in underserved areas with medical consultants through organized scheduling.',
      longDescription:
        'MediMitra is designed as a centralized health portal where patients can view specialist availability, submit symptom queries, and book virtual consultations. The backend utilizes Express and MongoDB to manage appointment records, department categorization, and clinic schedules.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      githubUrl: 'https://github.com/nakulgupta201',
      liveUrl: '',
      isDeployed: false,
      featured: true,
      highlights: [
        'Structured patient-doctor appointment management schema in Mongoose',
        'Clean, accessible UI built with WCAG contrast and readability standards',
        'Modular REST API with dedicated route controllers and error handling',
        'End-to-end form validation with server-side feedback',
      ],
      architecture: 'MERN Stack application with modular Express route handlers, Mongoose models, and componentized React UI.',
    },
  ],

  educationTimeline: [
    {
      type: 'education',
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'JK Lakshmipat University, Jaipur',
      period: '2024 — 2028',
      status: 'Currently Pursuing (Undergraduate)',
      details:
        'Studying core computer science curriculum: Object-Oriented Programming, Data Structures & Algorithms in C++, Database Management Systems, and Web Engineering with the MERN stack.',
      tags: ['Computer Science', 'MERN Stack', 'C++', 'Data Structures', 'DBMS'],
    },
    {
      type: 'education',
      title: 'Senior Secondary Education (Class XII - PCM)',
      institution: 'Childrens Academy Sr. Sec. School, Alwar',
      period: '2022 — 2023',
      status: 'Completed',
      details:
        'Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.',
      tags: ['Physics', 'Chemistry', 'Mathematics'],
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'Database Management Systems (DBMS) Part-1',
      issuer: 'Infosys Springboard',
      issueDate: 'NOVEMBER,2025',
      verificationUrl: 'https://drive.google.com/file/d/1ZErcLp2vv9GaY9m0G4_xolEBUSX3qQYN/view?usp=sharing',
      badgeText: 'Technical Certification',
      description:
        'Completed a course in Database Management Systems (DBMS) covered core DBMS concepts, database design, data organization, and SQL fundamentals.',
      skillsLearned: ['DBMS', 'SQL', 'Relational Database'],
    },
    {
      id: 'cert-2',
      title: 'Red Hat System Administration I (RH124)',
      issuer: 'Red Hat',
      issueDate: 'APRIL,2026',
      verificationUrl: 'https://drive.google.com/file/d/1EodU8v20bQsc0B4ErX_oXBaXM5XmVlt9/view?usp=sharing',
      badgeText: 'Technical Certification',
      description:
        'Training in Linux system administration, including command-line operations, file management, user permissions, and fundamental system administration tasks.',
      skillsLearned: ['Linux', 'System Administration', 'Operating System'],
    },
    {
      id: 'cert-3',
      title: 'Smart India Hackathon / University Codefest',
      issuer: 'JK Lakshmipat University / Hackathon Host',
      issueDate: '2024 / 2025',
      verificationUrl: 'https://github.com/nakulgupta201',
      badgeText: 'Hackathon Participation',
      description:
        'Collaborated in a student team to brainstorm, architect, and prototype a software solution under timed hackathon constraints.',
      skillsLearned: ['Rapid Prototyping', 'Teamwork', 'Git Collaboration'],
    },
  ],

  workExperience: [
    {
      id: 'exp-1',
      role: 'Summer Research Intern',
      company: 'Centre for Energy and Environment, MNIT Jaipur',
      employmentType: 'Internship',
      location: 'Jaipur, Rajasthan / Remote',
      period: 'May 2026 — July 2026',
      isCurrent: false,
      status: 'Completed',
      description:
        'Worked on a comparative study of machine learning models for temperature-based fault detection in lithium-ion battery packs using open-source battery datasets.',
      highlights: [
        'Prepared and analyzed battery data, selecting 9 relevant features from 22 original columns.',
        'Compared Logistic Regression, SVM, Random Forest, and XGBoost using battery-wise training, validation, and test splits.',
        'Evaluated model performance using accuracy, precision, recall, F1-score, and confusion matrices.',
      ],
      technologies: ['Machine Learning', 'Python', 'XGBoost', 'Random Forest', 'Li-ion Batteries'],
      certificateUrl: 'https://drive.google.com/file/d/1e3qGG28ubjJriB0DxHMLI7kyRXBrhD61/view?usp=sharing',
    },
  ],
};
