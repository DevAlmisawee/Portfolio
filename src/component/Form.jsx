import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style.css';

const ContactPage = () => {
  return (
    <section className="contact-section" id="form">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Let’s connect</p>
          <h2>Get in touch</h2>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="contact-info-card h-100">
              <h3>Contact information</h3>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone className="text-success" size={22} />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>+234 703 752 8450</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope className="text-success" size={22} />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>muhammadalmisawee@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt className="text-success" size={22} />
                </div>
                <div>
                  <h5>Location</h5>
                  <p>Tunga, Farm centre</p>
                  <p>Minna, Niger, Nigeria</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock className="text-success" size={22} />
                </div>
                <div>
                  <h5>Business hours</h5>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="map-container h-100">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.107508621859!2d6.556856314786612!3d9.603824993111022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c750d5a7f9c0f%3A0x5f5a5e5b5e5b5e5b!2sTunga%2C%20Minna%2C%20Niger%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                  title="Location in Tunga, Minna"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="map-note">
                <p className="mb-0">Visit the area around Tunga for a personal meeting or project discussion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;