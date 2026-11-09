import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';

class AppNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#home" aria-label="Muhammad Ahmad Aliyu home">
            <span className="brand-text">DevMuhammad</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  <i className="bi bi-house-door-fill d-lg-none me-2"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <i className="bi bi-file-earmark-person-fill d-lg-none me-2"></i>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <i className="bi bi-folder2-open d-lg-none me-2"></i>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <i className="bi bi-gear-fill d-lg-none me-2"></i>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  <i className="bi bi-question-circle-fill d-lg-none me-2"></i>
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#form">
                  <i className="bi bi-envelope-fill d-lg-none me-2"></i>
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <a href="tel:+2347037528450" className="btn btn-outline-light btn-contact">
                <i className="bi bi-telephone-fill me-2"></i>
                <span className="d-none d-md-inline">+234 703 752 8450</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;