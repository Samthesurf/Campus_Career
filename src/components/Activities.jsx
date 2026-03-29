import React, { useEffect, useRef, useState } from 'react';
import './Activities.css';

import { FileText, Globe, Mic, MonitorPlay, ChevronDown, ChevronUp, Users } from 'lucide-react';

const activities = [
    {
        title: 'Networking Icebreaker',
        tone: 'amber',
        Icon: Users,
        description:
            'The day starts with registration, pictures, community buzz, and an ice-breaker session that puts intentional networking and LinkedIn visibility in focus from the very beginning.',
        points: [
            'Registration opens from 8:30am with room for pictures and social buzz',
            'Early networking session with a spotlight on LinkedIn presence',
            'A low-pressure way to start conversations before the main sessions begin',
        ],
        outcome: 'Arrive seen, connected, and ready to make the most of the day.',
    },
    {
        title: 'Systems and Structures Panel',
        tone: 'teal',
        Icon: Globe,
        description:
            'The first panel explores the systems and structures that foster all-round excellence, helping students think beyond motivation and toward sustainable growth.',
        points: [
            'Real conversations about discipline, environment, and long-term excellence',
            'Industry-facing insight into what growth looks like outside the classroom',
            'Practical perspective on how strong systems shape strong outcomes',
        ],
        outcome: 'Leave with a clearer framework for building a more intentional student journey.',
    },
    {
        title: 'Keynote and Fireside Chat',
        tone: 'gold',
        Icon: Mic,
        description:
            'A keynote session and fireside chat anchor the event with deeper reflections on growth, opportunity, and what it means to keep becoming in a competitive world.',
        points: [
            'Keynote insight designed to challenge how students think about their future',
            'Guest and sponsor contributions that connect ideas to real-world context',
            'A fireside chat format that keeps the conversation grounded and relatable',
        ],
        outcome: 'Gain perspective that stretches both mindset and ambition.',
    },
    {
        title: 'My Becoming Stories',
        tone: 'purple',
        Icon: MonitorPlay,
        description:
            'The second panel centers on lived experience. Through stories, Q&A, and the BECOMERS spotlight, attendees see that growth is a process, not a one-time event.',
        points: [
            'A panel theme built around "My Becoming" and personal process',
            'Story-driven learning that makes growth feel practical and human',
            'A spotlight on participants who can tell the story of their process well',
        ],
        outcome: 'Walk away with stronger process-awareness and a healthier view of progress.',
    },
    {
        title: 'Mentorship and Career Follow-Through',
        tone: 'blue',
        Icon: FileText,
        description:
            'Campus to Career 2.0 extends beyond the auditorium through alumni mentorship, sponsor engagement booths, and a next-day virtual workshop on practical career tools.',
        points: [
            'Networking and mentorship opportunities with alumni and guests',
            'Post-event sponsor booths, pictures, and continued relationship-building',
            'Follow-up workshop support around scholarships, CV writing, profile building, and continuous professional development',
        ],
        outcome: 'Leave with momentum, support, and next steps you can act on after the event.',
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
    const [visible, setVisible] = useState(() => {
        if (typeof window === 'undefined') {
            return true;
        }

        return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    });

    useEffect(() => {
        const section = sectionRef.current;
        let frameId;

        if (!section || visible) {
            return undefined;
        }

        let observer;

        const cleanup = () => {
            observer?.disconnect();
            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }
            window.removeEventListener('scroll', handleViewportChange);
            window.removeEventListener('resize', handleViewportChange);
        };

        const revealSection = () => {
            setVisible(true);
            cleanup();
        };

        const isSectionInView = () => {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            return rect.top < viewportHeight * 0.92 && rect.bottom > 0;
        };

        const handleViewportChange = () => {
            if (isSectionInView()) {
                revealSection();
            }
        };

        window.addEventListener('scroll', handleViewportChange, { passive: true });
        window.addEventListener('resize', handleViewportChange);

        if ('IntersectionObserver' in window) {
            // Keep a scroll/resize fallback because WebKit can miss threshold callbacks on real devices.
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        revealSection();
                    }
                },
                { threshold: 0, rootMargin: '0px 0px -8% 0px' }
            );

            observer.observe(section);
        }

        frameId = window.requestAnimationFrame(handleViewportChange);

        return cleanup;
    }, [visible]);

    return (
        <section id="activities" className="activities-section" ref={sectionRef}>
            <div className="activities-container">
                <div className={`activities-header ${visible ? 'header-visible' : ''}`}>
                    <h2 className="activities-title">
                        <span className="activities-title-main">WHAT TO</span>
                        <span className="activities-title-highlight">EXPECT</span>
                    </h2>
                    <p className="activities-description">
                        Campus to Career 2.0 is structured as a full experience, not just a lineup of
                        talks. From networking and panel conversations to mentorship and next-day career
                        support, every part of the program is built to help students keep becoming.
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
