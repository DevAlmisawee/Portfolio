import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Style.css';
import myImage from './me.jpg';

const HeroSection = () => {
  return (
    <header className="hero-section" id="home" aria-label="Introduction">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h1>Muhammad Ahmad Aliyu</h1>
            <p className="lead">Full-Stack Web Developer</p>
            <p className="about-text">
              I build modern, responsive web applications that solve practical problems using modern web technologies.
            </p>

            <div className="hero-buttons" role="group" aria-label="Primary actions">
              <a href="#projects" className="btn-primary-cta" aria-label="View my work">
                View My Work
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#contact" className="btn-secondary-cta" aria-label="Let's talk">
                Let's Talk
                <i className="bi bi-chat-dots" aria-hidden="true"></i>
              </a>
            </div>

            <div className="social-links" aria-label="Social links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:muhammadalmisawee@gmail.com" aria-label="Email" title="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <figure>
              <img src={myImage} alt="Muhammad Ahmad Aliyu" className="hero-image" />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;