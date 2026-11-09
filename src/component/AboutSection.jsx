import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Style.css';
class AboutSection  extends React.Component {
    render() {
        const tech = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'Git'];
        return (
            <section id='about' className="about-section">
                <div className="container">
                        <h2 className="text-center mb-5">About Me</h2>
                                <div className="row align-items-start">
                                        <div className="col-lg-6 mb-4 mb-lg-0">
                                                <div className="card shadow-sm p-4 h-100">
                                                <h3 className="mb-3">Hello — I'm Muhammad</h3>
                                                <p className="about-text">
                                                    I'm a Computer Science student at the Federal University of Technology, Minna, focused on building practical web applications. I work with modern JavaScript, React and Node.js to deliver responsive, accessible, and maintainable interfaces and services.
                                                </p>

                                                <h4 className="mt-4 mb-3">Contact</h4>
                                                <ul className="list-unstyled fs-6">
                                                        <li className="mb-2">
                                                                <strong>Email:</strong> <a href="mailto:muhammadalmisawee@gmail.com" className="text-decoration-none">muhammadalmisawee@gmail.com</a>
                                                        </li>
                                                        <li className="mb-2">
                                                                <strong>Location:</strong> Minna, Niger State, Nigeria
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
      
                <div className="col-lg-6">
                        <div className="card shadow-sm p-4 h-100">
                                <h3 className="mb-3">Technologies</h3>
                                <p className="tech-skills-intro">Tools and technologies I use regularly.</p>
                                <div className="tech-badges">
                                    {tech.map((t) => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                        </div>
                </div>
        </div>
    </div>
</section>
        );
    }
}

export default AboutSection;