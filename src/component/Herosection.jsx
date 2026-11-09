import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';
import myImage from './me.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
         <div className="col-lg-6 order-lg-1 order-2">
           <div className="hero-copy">
             <span className="hero-badge">Web Developer • Frontend Specialist</span>
             <h1 className="display-3 fw-bold mb-3">
               Hello, I&apos;m <span className="text-gradient">Muhammad Ahmad Aliyu</span>
             </h1>
             <p className="lead mb-4">
               I design and build responsive, polished websites that combine clean code with a strong user experience across every screen size.
             </p>

             <div className="hero-actions">
               <a href="#projects" className="btn btn-primary btn-lg">
                 View Projects
               </a>
               <a href="#form" className="btn btn-outline-light btn-lg">
                 Contact Me
               </a>
             </div>

             <div className="social-icons" aria-label="Social media links">
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

         <div className="col-lg-6 order-lg-2 order-1">
           <div className="hero-visual">
             <div className="portrait-frame">
               <img src={myImage} alt="Muhammad Ahmad Aliyu" className="hero-image img-fluid" />
             </div>
             <div className="floating-tag tag-one">React</div>
             <div className="floating-tag tag-two">Responsive UI</div>
           </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;