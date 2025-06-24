import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Style.css';
class AboutSection  extends React.Component {
  render() {
    return (
      <section id='about' className="about-section">
        <div className="container">
            <h2 className="text-center mb-5 display-4 fw-bold">About Me</h2>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="card shadow-sm p-4 h-100">
                        <h3 className="mb-4">Personal Info</h3>
                        <ul className="list-unstyled fs-5">
                            <li className="mb-3">
                            <i className="bi bi-person-fill me-2 text-secondary"></i>
                                <strong>Name:</strong> Muhammad Ahmad Aliyu
                            </li>
                            <li className="mb-3">
                                <i className="bi bi-telephone-fill me-2 text-secondary"></i>
                                <strong>Phone:</strong> 00 202 0202
                            </li>
                            <li className="mb-4">
                                <i className="bi bi-envelope-fill me-2 text-secondary"></i>
                                <strong>Email:</strong> <a href="mailto:muhammadalmisawee@gmail.com" className="text-decoration-none">muhammadalmisawee@gmail.com</a>
                            </li>
                       </ul>
                    <h4 className="mt-4 mb-3">Skills</h4>
                    <div className="mb-3">
                        <label className="form-label">Frontend (50%)</label>
                        <div className="progress" style={{ height: '20px' }}>
                       <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '50%' }}aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Backend (30%)</label>
                    <div className="progress" style={{ height: '20px' }}>
                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '30%' }}aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
               </div>
            </div>
        </div>
      
        <div className="col-lg-6">
            <div className="card shadow-sm p-4 h-100">
                <h3 className="mb-4">Bio</h3>
                <p className="about-text fs-5 lh-base">
                 My name is Muhammad Ahmad Aliyu, a passionate web developer from Nigeria, currently pursuing a degree in Computer Science at the Federal University of Technology, Minna. I specialize in web development, leveraging my skills in HTML, CSS, JavaScript, and frameworks such as React and Angular to create dynamic and user-friendly websites. My academic background and hands-on experience have equipped me with a strong foundation in both front-end and back-end development. I am committed to continuous learning and staying updated with industry trends, ensuring I deliver cutting-edge solutions that exceed client expectations and drive success.
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