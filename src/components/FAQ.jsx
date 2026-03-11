import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';
import crowdImg from '../assets/crowd_again.jpg';

const faqData = [
    {
        question: "Is it free?",
        answer: "Yes it is free, come and be ready to learn and leave ready to conquer."
    },
    {
        question: "Where will the event take place?",
        answer: "The event will take place at the heart of the campus, specifically at the Alfa Belgore Hall."
    },
    {
        question: "What should I bring?",
        answer: "Bring jotters, writing materials, and a willingness to learn. Also, bring your friends, so they can be positively impacted."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="faq-header">
                <h2 className="faq-title">
                    FREQUENTLY ASKED <span className="bubble-text-yellow">QUESTIONS</span>
                </h2>
            </div>
            
            <div className="faq-container">
                <div className="faq-image-wrapper">
                    <img src={crowdImg} alt="Crowd at event" className="faq-image" />
                </div>
                
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-folder ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-folder-tab"></div>
                            <div className="faq-folder-content">
                                <div className="faq-question-row">
                                    <h3 className="faq-question">{faq.question}</h3>
                                    <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                                </div>
                                <div className="faq-answer-wrapper">
                                    <p className="faq-answer">{faq.answer}</p>
                                    <Link to="/register" className="faq-register-btn">
                                        Register
                                    </Link>
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
