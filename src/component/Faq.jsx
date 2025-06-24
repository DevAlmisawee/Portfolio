import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Style.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern JavaScript frameworks like React and Next.js, along with backend technologies such as Node.js, Express, and databases like MongoDB and PostgreSQL."
    },
    {
      question: "How many years of experience do you have?",
      answer: "I have been working professionally as a developer for 5+ years, with experience ranging from frontend development to full-stack applications."
    },
    {
      question: "Do you work with cloud platforms?",
      answer: "Yes, I have experience deploying applications on AWS, Azure, and Google Cloud Platform, including serverless architectures and containerized solutions."
    },
    {
      question: "What's your approach to problem-solving?",
      answer: "I follow a structured approach: understanding the problem, researching solutions, prototyping, testing, and iterating. I also leverage debugging tools and pair programming when needed."
    },
    {
      question: "Can you work with legacy code?",
      answer: "Absolutely. I have experience modernizing legacy systems while maintaining business continuity, including code refactoring and incremental upgrades."
    }
  ];

  return (
    <section id="faq"  className="faq-section">
      <div className="container">
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>
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
                <div className="accordion-body">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;