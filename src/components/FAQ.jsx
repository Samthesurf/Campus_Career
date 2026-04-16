import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';
import crowdImg from '../assets/crowd_again.jpg';
import { eventDetails } from '../data/eventDetails.js';

const faqData = [
    {
        question: 'When is Campus to Career 2.0 happening?',
        answer: `Campus to Career 2.0 takes place on ${eventDetails.fullDateLabel}.`
    },
    {
        question: 'Where will the event take place?',
        answer: `The event will be held at ${eventDetails.locationFull}.`
    },
    {
        question: 'Who should attend?',
        answer:
            'The event is designed for undergraduate and postgraduate students, as well as fresh graduates who want clearer direction for life after school.',
    },
    {
        question: 'What should I come prepared for?',
        answer:
            'Come ready to learn, network, and reflect. Expect panels, keynote insight, mentorship opportunities, and practical next steps around career growth and personal branding.',
    },
    {
        question: 'Does the event end after the main day?',
        answer:
            'No. There are post-event networking moments, sponsor engagement booths, and a follow-up virtual workshop focused on scholarships, CV writing, profile building, and continuous professional development.',
    },
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
                                        Buy Tickets
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
