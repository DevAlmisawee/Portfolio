import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Style.css';
class Main extends React.Component {
  render() {
    return (
      <div>
        <section id='services' className='services '>
            <div className='container bg-light shadow'>
                <h2 className='text-center mb-4'>Services</h2>
                <div className='row'>
                <div className='col-md-4'>
                    <div className='service-card'>
                    <h3>Web Development</h3>
                    <p>Creating responsive and dynamic websites using modern technologies.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='service-card'>
                    <h3>UI/UX Design</h3>
                    <p>Designing user-friendly interfaces that enhance user experience.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='service-card'>
                    <h3>SEO Optimization</h3>
                    <p>Improving website visibility and search engine rankings.</p>
                    </div>
                </div>
                </div>
            </div> 
        </section>
      </div>
    );
  }
}

export default Main;