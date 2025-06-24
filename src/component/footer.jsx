import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Style.css'; 
import Form  from './Form';
import Main  from './Main';
import AboutSection from './AboutSection';

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3 px-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p className="text-light">
                We are a company dedicated to providing the best services to our customers.
              </p>
            </div>
            
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href={AboutSection ? "#about" : "#" } className="text-white">About</a></li>
                <li><a href={Main ? "#services" : "#"   } className="text-white">Services</a></li>
                <li><a href={Form ? "#form" : "#"} className="text-white">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-md-4">
              <h5>Contact Info</h5>
              <address>
                <p><i className="bi bi-geo-fill "></i> Minna, Niger State, Nigeria</p>
                <p><i className="bi bi-telephone"></i> +2347037528450</p>
                <p><i className="bi bi-envelope"></i> muhammadalmisawee@gmail.com</p>
              </address>
            </div>
          </div>
          
          <hr className="bg-light" />
          
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-right">
              <div className="social-icons">
                <a href="https://facebook.com/profile.php?id=100045351396798&mibextid=rS40aB7S9Ucbxw6v" target="_blank" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
                <a href="https://twitter.com/@Almisawee_01" target="_blank" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
                <a href="https://instagram.com/muhammad_almisawee?igsh=YzIjYTk1ODg3Zg==" target="_blank" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
                {/* <a href="https://linkedin.com/in/ahmad-muhammad-639335370" target="_blank" className="text-white mx-2"><i className="bi bi-linkedin"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;