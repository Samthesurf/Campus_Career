import React, { useEffect, useRef, useState } from 'react';
import './Activities.css';

const activities = [
    {
        label: 'CV / Resume Creation',
        colorClass: 'strip-amber',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn Building',
        colorClass: 'strip-teal',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: 'Global Scholarship',
        colorClass: 'strip-gold',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
    {
        label: 'Entrepreneurs Talk',
        colorClass: 'strip-coral',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
            </svg>
        ),
    },
    {
        label: 'Content Creators',
        colorClass: 'strip-purple',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
        ),
    },
];

const Activities = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="activities" className="activities-section" ref={sectionRef}>
            <div className="activities-container">
                {/* Left Panel — Vertical Title */}
                <div className={`activities-label-panel ${visible ? 'label-visible' : ''}`}>
                    <div className="shimmer-overlay"></div>
                    <div className="activities-label-text">
                        <span className="label-line">What to</span>
                        <span className="label-line">Expect</span>
                    </div>
                </div>

                {/* Right Panel — Colored Activity Strips */}
                <div className="activities-strips">
                    {activities.map((activity, index) => (
                        <div
                            className={`activity-strip ${activity.colorClass} ${visible ? 'strip-visible' : ''}`}
                            key={index}
                        >
                            <div className="strip-content">
                                <span className="strip-icon">{activity.icon}</span>
                                <span className="strip-text">{activity.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
