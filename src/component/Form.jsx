import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import './Style.css'; // Assuming you have a Style.css for custom styles
const ContactPage = () => {
  return (
    <div className="contact-page container py-5" id="form">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4">Get In Touch</h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-md-6 mb-4">
          <div className="contact-info-card p-4 h-100">
            <h3 className="mb-4">Contact Information</h3>
            
            <div className="contact-item d-flex mb-3">
              <div className="contact-icon me-3">
                <FaPhone className="text-success" size={24} />
              </div>
              <div>
                <h5>Phone</h5>
                <p>+234 7037528450</p>
              </div>
            </div>
            
            <div className="contact-item d-flex mb-3">
              <div className="contact-icon me-3">
                <FaEnvelope className="text-success" size={24} />
              </div>
              <div>
                <h5>Email</h5>
                <p>muhammadalmisawee@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item d-flex mb-3">
              <div className="contact-icon me-3">
                <FaMapMarkerAlt className="text-success" size={24} />
              </div>
              <div>
                <h5>Address</h5>
                <p>Tunga, Farm center</p>
                <p>Minna, Niger, Nigeria</p>
              </div>
            </div>
            
            <div className="contact-item d-flex">
              <div className="contact-icon me-3">
                <FaClock className="text-success" size={24} />
              </div>
              <div>
                <h5>Business Hours</h5>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="col-md-6 mb-4">
          <div className="map-container h-100">
            <div className="ratio ratio-16x9">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.107508621859!2d6.556856314786612!3d9.603824993111022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c750d5a7f9c0f%3A0x5f5a5e5b5e5b5e5b!2sTunga%2C%20Minna%2C%20Niger%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
                title="Our Location in Tunga, Minna"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="map-note p-3 text-center">
              <p className="mb-0">Visit us at our office during business hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row mt-4">
        <div className="col-12 text-center">
          <h3 className="mb-3">Social Media</h3>
          <div className="social-links">
            <a href="#" className="mx-2 text-decoration-none">
              <i className="bi bi-facebook fa-2x"></i>
            </a>
            <a href="#" className="mx-2 text-decoration-none">
              <i className="bi bi-twitter fa-2x"></i>
            </a>
            <a href="#" className="mx-2 text-decoration-none">
              <i className="bi bi-linkedin fa-2x"></i>
            </a>
            <a href="#" className="mx-2 text-decoration-none">
              <i className="bi bi-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactPage;