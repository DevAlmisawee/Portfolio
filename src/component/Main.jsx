import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';

const projects = [
  {
    name: 'Portfolio Website',
    type: 'Portfolio',
    description: 'A responsive portfolio built with React and Vite to present my work, technical skills, and contact information in a clean, professional way.',
    tech: ['React', 'Vite', 'Bootstrap', 'CSS'],
    live: 'https://DevAlmisawee.github.io/Portfolio',
    github: 'https://github.com/DevAlmisawee/Portfolio',
  },
  {
    name: 'CoinCheck',
    type: 'Live Demo',
    description: 'A project demo that showcases a modern, user-friendly crypto-themed interface with a strong focus on clarity and accessibility.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    live: 'https://DevAlmisawee.github.io/coinCheck/',
  },
];

const services = [
  {
    title: 'Web Development',
    text: 'Responsive websites built with modern frontend tooling and a focus on clean, maintainable code.',
  },
  {
    title: 'UI/UX Design',
    text: 'Thoughtful user interfaces that balance visual clarity, usability, and an intuitive user experience.',
  },
  {
    title: 'Responsive Design',
    text: 'Layouts designed to look polished and remain easy to use across desktop, tablet, and mobile screens.',
  },
];

const Main = () => {
  return (
    <main>
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-card-top">
                  <span className="project-pill">{project.type}</span>
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags" aria-label={`${project.name} technologies`}>
                  {project.tech.map((tag) => (
                    <span key={`${project.name}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What I do</p>
            <h2>Services</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon" aria-hidden="true">
                  <i className="bi bi-collection"></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;