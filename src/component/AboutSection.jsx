import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Bootstrap', 'Responsive Design', 'UI/UX'];

class AboutSection extends React.Component {
  render() {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow">About me</p>
            <h2>Profile</h2>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="about-card">
               <h3>Personal info</h3>
               <ul className="info-list">
                 <li>
                   <i className="bi bi-person-fill" aria-hidden="true"></i>
                   <span><strong>Name:</strong> Muhammad Ahmad Aliyu</span>
                 </li>
                 <li>
                   <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                   <span><strong>Phone:</strong> +234 703 752 8450</span>
                 </li>
                 <li>
                   <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                   <span>
                     <strong>Email:</strong>{' '}
                     <a href="mailto:muhammadalmisawee@gmail.com">muhammadalmisawee@gmail.com</a>
                   </span>
                 </li>
               </ul>

               <div className="skill-block">
                 <h4>Core skills</h4>
                 <div className="skill-pills" aria-label="Technical skills">
                   {skills.map((skill) => (
                     <span key={skill}>{skill}</span>
                   ))}
                 </div>
               </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-card">
               <h3>Bio</h3>
               <p className="about-text">
                 My name is Muhammad Ahmad Aliyu, a passionate web developer from Nigeria, currently pursuing a degree in Computer Science at the Federal University of Technology, Minna. I specialize in web development, using HTML, CSS, JavaScript, and frameworks such as React and Angular to build dynamic and user-friendly websites. My academic background and hands-on experience have given me a strong foundation in both frontend and backend development. I am committed to continuous learning and staying up to date with industry trends so I can deliver reliable, modern digital experiences.
               </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;