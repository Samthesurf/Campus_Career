import React from 'react';
import './Speakers.css';

const Speakers = () => {
  // Placeholder data
  const placeholders = Array(3).fill(null);

  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-container">
        {/* Left Aligned Title */}
        <div className="speakers-title-container">
          <h2 className="speakers-title">
            <span className="title-line">MEET</span>
            <span className="title-line">OUR</span>
            <span className="title-line title-year">2026</span>
            <span className="title-line">SPEAKERS</span>
          </h2>
        </div>

        {/* Right Section: Placeholder Grid */}
        <div className="speakers-grid">
          {placeholders.map((_, index) => (
            <div className="speaker-card placeholder-card" key={index}>
              <div className="speaker-image-container placeholder-image">
                <span className="placeholder-icon">?</span>
              </div>
              <div className="speaker-info">
                <div className="placeholder-text-line short"></div>
                <div className="placeholder-text-line long"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;