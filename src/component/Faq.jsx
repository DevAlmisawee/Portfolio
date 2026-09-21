import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What technologies do you work with?',
      answer: 'I focus on modern frontend work using HTML, CSS, JavaScript, React, Angular, and Bootstrap, with a strong emphasis on responsive design and user-friendly interfaces.',
    },
    {
      question: 'Where are you based?',
      answer: 'I am based in Minna, Niger State, Nigeria, and I build websites with a focus on clean design and performance.',
    },
    {
      question: 'Can you help with web development projects?',
      answer: 'Yes. I build responsive websites and frontend interfaces with a focus on usability, accessibility, and a polished user experience.',
    },
    {
      question: 'What is your approach to building websites?',
      answer: 'I start by understanding the goal of the project, then I shape a clear structure, focus on responsiveness, and refine the interface for a professional final result.',
    },
    {
      question: 'How can I contact you?',
      answer: 'You can reach me by phone or email using the contact details in the contact section of this portfolio.',
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Questions</p>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faqCollapse-${index}`}
                >
                  {item.question}
                </button>
              </h3>
              <div
                id={`faqCollapse-${index}`}
                className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;