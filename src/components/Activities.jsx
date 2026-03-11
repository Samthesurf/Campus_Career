import React, { useEffect, useRef, useState } from 'react';
import './Activities.css';

import { FileText, Linkedin, Globe, Mic, MonitorPlay } from 'lucide-react';

const activities = [
    {
        title: 'CV / Resume Creation',
        tone: 'amber',
        Icon: FileText,
        category: 'Document workshop',
        description:
            'Create a polished resume that presents your projects, achievements, and leadership in a format that feels focused and recruiter-friendly.',
        points: [
            'ATS-aware structure and formatting tips',
            'Sharper bullet writing with measurable impact',
            'Quick feedback you can apply immediately',
        ],
        outcome: 'Walk away with a stronger draft ready for internship and job applications.',
    },
    {
        title: 'LinkedIn Building',
        tone: 'teal',
        Icon: Linkedin,
        category: 'Profile upgrade',
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
        category: 'Opportunity strategy',
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
        category: 'Founder insights',
        description:
            'Hear practical lessons from entrepreneurs on building ideas, making decisions, learning from setbacks, and creating momentum from limited resources.',
        points: [
            'Real stories from founders and builders',
            'Perspective on risk, resilience, and growth',
            'Space for questions and live interaction',
        ],
        outcome: 'Gain practical insight you can apply to your own projects and goals.',
    },
    {
        title: 'Content Creators',
        tone: 'blue',
        Icon: MonitorPlay,
        category: 'Personal brand',
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
                        <article
                            className={`activity-card tone-${activity.tone} ${visible ? 'card-visible' : ''}`}
                            key={activity.title}
                        >
                            <div className="activity-card-visual">
                                <span className="activity-index">{`0${index + 1}`}</span>
                                <div className="activity-icon-shell" aria-hidden="true">
                                    <activity.Icon size={34} strokeWidth={2} />
                                </div>
                                <span className="activity-pill">{activity.category}</span>
                            </div>

                            <div className="activity-card-body">
                                <h3 className="activity-card-title">{activity.title}</h3>
                                <p className="activity-card-description">{activity.description}</p>

                                <p className="activity-list-label">What you will get</p>
                                <ul className="activity-points">
                                    {activity.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>

                                <p className="activity-outcome">{activity.outcome}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
