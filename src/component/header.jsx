import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Style.css';
import Faq from './Faq';
import Form  from './Form';
import Main  from './Main';
import AboutSection from './AboutSection';
class AppNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
  <div className="container">
    {/* Brand/logo with text */}
    <a className="navbar-brand d-flex align-items-center" href="#">
      {/* <img 
        src="/logo.png" 
        alt="DevMuhammad" 
        width="40" 
        height="40" 
        className="d-inline-block align-top me-2" 
      /> */}
      <span className="brand-text">DevMuhammad</span>
    </a>
    
    {/* Toggle button with animation */}
    <button 
      className="navbar-toggler collapsed" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#mainNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    
    {/* Navbar content */}
    <div className="collapse navbar-collapse" id="mainNavbar">
      {/* Main navigation */}
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <i className="bi bi-house-door-fill d-lg-none me-2"></i>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={AboutSection ? "#about" : "#"  }>
            <i className="bi bi-file-earmark-person-fill d-lg-none me-2"></i>
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={Main ? "#services" : "#"  }>
            <i className="bi bi-gear-fill d-lg-none me-2"></i>
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={Form ? "#form" : "#"  }>
            {/* Conditional rendering for Form icon */} 
            <i className="bi bi-briefcase-fill d-lg-none me-2"></i>
            Contact 
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={Faq ? "#faq" : "#"  }>
            {/* Conditional rendering for FAQ icon */} 
            <i className="bi bi-question-circle-fill d-lg-none me-2"></i>
            FAQ
          </a>
        </li>
      </ul>
      
      {/* Contact button - visible on all screens */}
      <div className="d-flex align-items-center">
        <a 
          href="tel:07037528450" 
          className="btn btn-outline-light btn-contact d-flex align-items-center"
        >
          <i className="bi bi-telephone-fill me-2"></i>
          <span className="d-none d-md-inline">07037528450</span>
        </a>
      </div>
    </div>
  </div>
</nav>
    );
  }
}

export default AppNavbar;