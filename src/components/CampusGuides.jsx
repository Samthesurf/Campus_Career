import React from 'react';
import './CampusGuides.css';

import { programmaticCampuses } from '../data/programmaticCampuses';

const CampusGuides = () => {
  return (
    <section id="campus-guides" className="campus-guides-section">
      <div className="campus-guides-container">
        <div className="campus-guides-header">
          <p className="campus-guides-eyebrow">SEO Guides</p>
          <h2>Campus To Career Pages By University</h2>
          <p>
            These pages are built for targeted search intent. The ABUAD page is the official
            confirmed host page, while others are discovery guides for students and expansion.
          </p>
        </div>

        <div className="campus-guides-grid">
          {programmaticCampuses.map((campus) => (
            <article className="campus-guide-card" key={campus.slug}>
              <p className="guide-campus-name">{campus.campusName}</p>
              <h3>{campus.h1}</h3>
              <p>{campus.metaDescription}</p>
              <a href={campus.route} className="campus-guide-link">
                Open Search Page
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusGuides;

