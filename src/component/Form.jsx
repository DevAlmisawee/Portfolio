import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Style.css';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent — thank you!');
    e.target.reset();
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact">
      <div className="container">
        <h2 className="text-center mb-3">Let's Build Something Together</h2>
        <p className="contact-subtitle">Have a project, idea, or opportunity? I'd be happy to hear from you.</p>

        <div className="contact-content">
          <div className="contact-info-grid mb-4">
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-value"><a href="mailto:muhammadalmisawee@gmail.com">muhammadalmisawee@gmail.com</a></div>
            </div>
            <div className="contact-item">
              <div className="contact-label">GitHub</div>
              <div className="contact-value"><a href="https://github.com/DevAlmisawee" target="_blank" rel="noopener noreferrer">github.com/DevAlmisawee</a></div>
            </div>
            <div className="contact-item">
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" name="name" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" name="email" type="email" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-control" required></textarea>
            </div>

            <button type="submit" className="form-submit">Send Message</button>

            {status && <p className="mt-3" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;