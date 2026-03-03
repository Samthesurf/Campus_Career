import React, { useState } from 'react';
import './Collaboration.css';

// Import images
import israelAesa from '../assets/Israel_AESA.jpg';
import claire from '../assets/Claire.png';
import temiloluwa from '../assets/Temiloluwa.jpg';
import randomCrowd from '../assets/random_crowd.jpg';
import speakerStage from '../assets/speaker_stage_last.jpg';
import formerEvent1 from '../assets/former_event_pic_1.png';
import refreshments from '../assets/Refreshments.jpg';
import eventFaceUp from '../assets/event_face_up.jpg';

const imageData = [
    {
        src: israelAesa,
        caption: 'The amazing Israel, former president of AESA who worked hard to make the event a blazing success',
    },
    {
        src: claire,
        caption: 'The awesome Vivian who hosted the event and did everything in her power to make the event a success',
    },
    {
        src: temiloluwa,
        caption: 'The awesome Temiloluwa, serial entrepreneur who shared the risks she took as she started her own business',
    },
    {
        src: speakerStage,
        caption: 'Oluwarantimi shared insights and words of advice for the students',
    },
    {
        src: formerEvent1,
        caption: 'Former NUESA president as one of the speakers',
    },
    {
        src: refreshments,
        caption: 'Refreshments',
    },
    {
        src: eventFaceUp,
        caption: 'Oyindamola, one of the event organizers looking good',
    },
    {
        src: randomCrowd,
        caption: 'The amazing crowd at Campus to Career',
    },
];

// Pre-defined haphazard rotations & offsets for each card in the pile
const cardTransforms = [
    { rotate: -3, x: 0, y: 0 },
    { rotate: 6, x: 12, y: -8 },
    { rotate: -8, x: -14, y: 6 },
    { rotate: 4, x: 10, y: -5 },
    { rotate: -6, x: -8, y: 10 },
    { rotate: 9, x: 6, y: -12 },
    { rotate: -4, x: -6, y: 5 },
    { rotate: 5, x: 8, y: 3 },
];

const PicShuffler = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShuffling, setIsShuffling] = useState(false);
    const [exitingIndex, setExitingIndex] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleShuffle = () => {
        if (isShuffling) return;
        setIsShuffling(true);
        setExitingIndex(currentIndex);
        setHoveredCard(null);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % imageData.length);
            setExitingIndex(null);
            setIsShuffling(false);
        }, 550);
    };

    return (
        <section className="pic-shuffler-section">
            {/* 4 faint vertical divider lines */}
            <div className="section-lines">
                <div className="section-line"></div>
                <div className="section-line"></div>
                <div className="section-line"></div>
                <div className="section-line"></div>
            </div>

            <div className="shuffler-container">
                <div className="shuffler-stack">
                    {imageData.map((item, idx) => {
                        let deckPos = (idx - currentIndex + imageData.length) % imageData.length;
                        const transforms = cardTransforms[deckPos] || { rotate: 0, x: 0, y: 0 };
                        const zIndex = imageData.length - deckPos;
                        const isExiting = idx === exitingIndex;
                        const isFront = deckPos === 0 && !isExiting;

                        let className = 'shuffler-card';
                        if (isExiting) className += ' card-exit';
                        if (isFront) className += ' card-front';

                        return (
                            <div
                                key={idx}
                                className={className}
                                style={{
                                    zIndex: isExiting ? imageData.length + 1 : zIndex,
                                    '--card-rotate': `${transforms.rotate}deg`,
                                    '--card-x': `${transforms.x}px`,
                                    '--card-y': `${transforms.y}px`,
                                    opacity: deckPos > 4 && !isExiting ? 0 : 1,
                                }}
                                onMouseEnter={() => isFront && setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <img src={item.src} alt={item.caption} />

                                {/* Speech bubble on hover - only for front card */}
                                {isFront && (
                                    <div className={`speech-bubble ${hoveredCard === idx ? 'speech-bubble-visible' : ''}`}>
                                        <p>{item.caption}</p>
                                        <div className="speech-bubble-arrow"></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Shuffle button BELOW the images */}
                <button className="shuffle-button" onClick={handleShuffle} disabled={isShuffling}>
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3h5v5"></path>
                        <path d="M4 20L21 3"></path>
                        <path d="M21 16v5h-5"></path>
                        <path d="M15 15l6 6"></path>
                        <path d="M4 4l5 5"></path>
                    </svg>
                    Shuffle
                </button>
            </div>
        </section>
    );
};

export default PicShuffler;
