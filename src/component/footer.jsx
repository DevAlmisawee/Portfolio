import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row gy-4 align-items-start">
            <div className="col-md-4">
              <h5>Muhammad Ahmad Aliyu</h5>
              <p>
                A frontend-focused developer building modern, responsive websites with a clear focus on usability and polished presentation.
              </p>
            </div>

            <div className="col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#form">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Contact</h5>
              <address>
                <p><i className="bi bi-geo-alt-fill"></i> Minna, Niger State, Nigeria</p>
                <p><i className="bi bi-telephone-fill"></i> +234 703 752 8450</p>
                <p><i className="bi bi-envelope-fill"></i> muhammadalmisawee@gmail.com</p>
              </address>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="row footer-bottom align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; {new Date().getFullYear()} DevMuhammad. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="social-icons footer-socials">
                <a href="https://facebook.com/profile.php?id=100045351396798&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com/@Almisawee_01" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://instagram.com/muhammad_almisawee?igsh=YzIjYTk1ODg3Zg==" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;