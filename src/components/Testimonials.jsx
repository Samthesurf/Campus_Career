import React, { useRef } from 'react';
import './Testimonials.css';
import anuImg from '../assets/anu.png';
import teseImg from '../assets/Tese.jpg';
import toluwaniImg from '../assets/Toluwani.png';

const testimonialsData = [
    {
        id: 1,
        text: "but then I realised that it was Vivian's initiative. And I was like, wow. And um, it's really a great one for someone to come out and stand out. This is not something you will see in Harvard. So, it's really a great one and I really learnt a lot, a lot. So thank you so much.",
        name: "The Real Toluwani",
        role: "Pharmacy Student",
        avatar: toluwaniImg
    },
    {
        id: 2,
        text: "I learned that you have the power to change your destiny, regardless of where you came from. And he's an example of everything he talked about, and I think that's very iconic. And then, aside from that, I also learned a lot from his session. I learned about connections. I learned about priorities.",
        name: "Anuoluwapo Akinola",
        role: "Engineering Student",
        avatar: anuImg
    },
    {
        id: 3,
        text: "I thought it was really impressive. The jotters, the food, the resources here... I thought it was really impressive. And then all the work you all have put in, I'm sure it must have been tedious. But I thought this was like a properly planned-out program, and it's really impressive. Well done, guys.",
        name: "Tese Akpofure",
        role: "MBBS Student",
        avatar: teseImg
    }
];

export default function Testimonials() {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (!sliderRef.current) return;
        const cardWidth = sliderRef.current.querySelector('.testimonial-card-wrapper')?.offsetWidth || 400;
        const gap = 40; // ~2.5rem
        sliderRef.current.scrollBy({
            left: direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap),
            behavior: 'smooth'
        });
    };

    return (
        <section className="testimonials-section">
            {/* Background Big Text */}
            <h2 className="testimonials-bg-text" aria-hidden="true">TESTIMONIALS</h2>

            <div className="testimonials-container">

                <div className="testimonials-header">
                    <h3 className="testimonials-heading">
                        What our <span className="bubble-text-yellow">attendees</span> said
                    </h3>
                    <p className="testimonials-subheading">
                        Real stories from the{' '}
                        <span className="testimonials-title-styled">
                            <span className="bubble-text-yellow">Campus</span>{' '}
                            <span className="bubble-text-white-script">To</span>{' '}
                            <span className="bubble-text-yellow">Career</span>
                        </span>{' '}
                        experience
                    </p>
                </div>

                <div className="testimonials-slider" ref={sliderRef}>
                    {testimonialsData.map((testimonial) => (
                        <div className="testimonial-card-wrapper" key={testimonial.id}>

                            <div className="testimonial-bubble">
                                <div className="testimonial-card">
                                    <svg className="quote-mark-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 36C6 32 4 27.5 4 22C4 13 10 6 20 4L21.5 7.5C16 9.5 12.5 13 12 18C12 18 13 17.5 15 17.5C19.5 17.5 22 20 22 24.5C22 29 19.5 32 15 32C12.5 32 10.5 31 10 36ZM32 36C28 32 26 27.5 26 22C26 13 32 6 42 4L43.5 7.5C38 9.5 34.5 13 34 18C34 18 35 17.5 37 17.5C41.5 17.5 44 20 44 24.5C44 29 41.5 32 37 32C34.5 32 32.5 31 32 36Z" fill="#ebd234" />
                                    </svg>
                                    <p className="testimonial-text">
                                        {testimonial.text}
                                    </p>
                                </div>

                                {/* Speech Bubble Tail */}
                                <div className="testimonial-tail"></div>
                            </div>

                            <div className="testimonial-author">
                                <div className="author-avatar-wrapper">
                                    {testimonial.avatar ? (
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="author-avatar"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="author-avatar-placeholder">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="testimonials-nav">
                    <button className="testimonials-nav-btn" onClick={() => scroll('left')} aria-label="Previous testimonial">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button className="testimonials-nav-btn" onClick={() => scroll('right')} aria-label="Next testimonial">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
