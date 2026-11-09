import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Style.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'Personal portfolio website showcasing projects and contact information.',
      tech: ['React', 'Vite', 'Bootstrap'],
      github: 'https://github.com/DevAlmisawee/Portfolio',
      live: 'https://DevAlmisawee.github.io/Portfolio'
    },
    {
      id: 2,
      title: 'coinCheck',
      description: 'A demo project with a clean crypto-themed interface and data presentation.',
      tech: ['React', 'Bootstrap'],
      github: 'https://github.com/DevAlmisawee/coinCheck',
      live: 'https://DevAlmisawee.github.io/coinCheck/'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-center">Selected Projects</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card" aria-labelledby={`project-${p.id}`}>
              <div className="project-image" role="img" aria-label={`${p.title} screenshot`}>
                <span>{p.title}</span>
              </div>
              <div className="project-content">
                <h3 id={`project-${p.id}`} className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;