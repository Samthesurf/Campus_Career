import React, { useEffect, useRef, useState } from 'react';
import './Activities.css';

import { FileText, Globe, Mic, MonitorPlay, ChevronDown, ChevronUp } from 'lucide-react';

const Linkedin = ({ color = 'currentColor', size = 24, strokeWidth = 2, className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-linkedin ${className || ''}`}
        {...props}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const activities = [
    {
        title: 'CV / Resume Creation',
        tone: 'amber',
        Icon: FileText,
        description:
            'Create a polished resume that presents your projects, achievements, and leadership in a format that feels focused and recruiter-friendly.',
        points: [
            'ATS-aware structure and formatting tips',
            'Sharper bullet writing with measurable impact',
            'Quick feedback you can apply immediately',
        ],
        outcome: 'Walk away with a resume that reflects your strengths clearly and confidently.',
    },
    {
        title: 'LinkedIn Building',
        tone: 'teal',
        Icon: Linkedin,
        description:
            'Refine your LinkedIn presence so your headline, summary, featured section, and experience tell a stronger story to recruiters and collaborators.',
        points: [
            'Intentional profile positioning',
            'Headline and summary improvements',
            'Networking and visibility suggestions',
        ],
        outcome: 'Make your online profile easier to discover, understand, and trust.',
    },
    {
        title: 'Global Scholarship',
        tone: 'gold',
        Icon: Globe,
        description:
            'Understand how to approach scholarships with better planning, clearer positioning, and stronger application materials from the start.',
        points: [
            'Smarter opportunity shortlisting',
            'Direction for essays and personal statements',
            'Better preparation for supporting documents',
        ],
        outcome: 'Leave with a clearer game plan for competitive scholarship applications.',
    },
    {
        title: 'Entrepreneurs Talk',
        tone: 'purple',
        Icon: Mic,
        description:
            'Hear practical lessons from entrepreneurs on building ideas, making decisions, learning from setbacks, and creating momentum from limited resources.',
        points: [
            'Real stories from student entrepreneurs, founders and builders',
            'Perspective on risk, resilience, and growth',
            'Space for questions and live interaction',
        ],
        outcome: 'Gain practical insight you can apply to your own projects and goals.',
    },
    {
        title: 'Content Creators',
        tone: 'blue',
        Icon: MonitorPlay,
        description:
            'See how creators turn content into influence by communicating clearly, staying consistent, and building communities around their work.',
        points: [
            'Content planning and positioning basics',
            'Audience engagement habits that matter',
            'Ways digital presence can support career growth',
        ],
        outcome: 'Leave with ideas for building a stronger and more intentional public presence.',
    },
];

const ActivityCard = ({ activity, index, visible }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <article
            className={`activity-card tone-${activity.tone} ${visible ? 'card-visible' : ''} ${isExpanded ? 'is-expanded' : ''}`}
        >
            <div className="activity-card-visual">
                <span className="activity-index">{`0${index + 1}`}</span>
                <div className="activity-icon-shell" aria-hidden="true">
                    <activity.Icon size={34} strokeWidth={2} />
                </div>
            </div>

            <div className="activity-card-body">
                <div className="activity-card-header">
                    <h3 className="activity-card-title">{activity.title}</h3>
                    <button
                        type="button"
                        className="activity-expand-btn"
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                        onClick={() => setIsExpanded((expanded) => !expanded)}
                    >
                        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                </div>
                
                <div className={`activity-card-content ${isExpanded ? 'content-expanded' : ''}`}>
                    <div className="activity-card-content-inner">
                        <p className="activity-card-description">{activity.description}</p>

                        <p className="activity-list-label">What you will get</p>
                        <ul className="activity-points">
                            {activity.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>

                        <p className="activity-outcome">{activity.outcome}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

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
                <div className={`activities-header ${visible ? 'header-visible' : ''}`}>
                    <h2 className="activities-title">
                        <span className="activities-title-main">WHAT TO</span>
                        <span className="activities-title-highlight">EXPECT</span>
                    </h2>
                    <p className="activities-description">
                        Each activity is designed to be practical, approachable, and valuable beyond the
                        event itself. Instead of only introducing ideas, the sessions help students leave
                        with clearer direction and something they can build on right away.
                    </p>
                </div>

                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <ActivityCard 
                            key={activity.title} 
                            activity={activity} 
                            index={index} 
                            visible={visible} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
