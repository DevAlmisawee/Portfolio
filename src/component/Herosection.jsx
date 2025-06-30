
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import 'animate.css/animate.min.css'; 
import './Style.css';
import myImage from './me.jpg';
// import { useState } from 'react';
// import Form  from './Form';
const HeroSection = () => {
  return (
    <section className="hero-section text-white py-5">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2">
          <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">HEY!<br/>
            <span className="text-gradient">I'm Muhammad</span>
          </h1>
          <p className="lead mb-4 fs-4 animate__animated animate__fadeIn animate__delay-1s">I build eye-catching, performant websites with modern technologies. Specializing in responsive web development that works flawlessly on all devices.</p>
          <div className="d-flex flex-wrap gap-3 animate__animated animate__fadeIn animate__delay-2s">
            <a href="#form"> 
              <button className="getInTouch btn btn-success btn-lg px-4 py-3">Get in Touch
              <i className="bi bi-arrow-right-short ms-2"></i>
            </button>
             </a>
             <button className="btn btn-outline-light btn-lg px-4 py-3">
              View Projects
              <i className="bi bi-folder2-open ms-2"><a href="https://DevAlmisawee.github.io/coinCheck/">First Project</a></i>
            </button> 
          </div>
         <div className="social-icons mt-4 animate__animated animate__fadeIn animate__delay-3s">
                <a href="https://facebook.com/profile.php?id=100045351396798&mibextid=rS40aB7S9Ucbxw6v" target="_blank" className="text-white mx-2 fs-4"><i className="bi bi-facebook"></i></a>
                <a href="https://twitter.com/@Almisawee_01" target="_blank" className="text-white mx-2 fs-4"><i className="bi bi-twitter"></i></a>
                <a href="https://instagram.com/muhammad_almisawee?igsh=YzIjYTk1ODg3Zg==" target="_blank" className="text-white mx-2 fs-4"><i className="bi bi-instagram"></i></a>
                {/* <a href="https://linkedin.com/in/ahmad-muhammad-639335370" target="_blank" className="text-white mx-2 fs-4"><i className="bi bi-linkedin"></i></a> */}
              </div>
        </div>
       <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 animate__animated animate__fadeIn">
         <div className="image-container position-relative">
            <img src={myImage} alt="Muhammad Ahmad Aliyu" className="hero-image img-fluid rounded-4 shadow-lg" />
            {/* <div className="tech-badge position-absolute bg-primary rounded-pill py-2 px-3 shadow">
              <i className="bi bi-star-fill me-2"></i>
              <span>5+ Years Experience</span>
            </div>
          <div className="tech-badge position-absolute bg-success rounded-pill py-2 px-3 shadow">
            <i className="bi bi-check-circle-fill me-2"></i>
            <span>50+ Projects</span>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroSection;