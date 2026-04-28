import React from 'react';
import './Speakers.css';

const speakersData = [
  {
    id: 1,
    name: "Engr. Joan Nweke",
    role: "Keynote Speaker",
    title: "Oil & Gas Executive | Engineering Consultant",
    image: "/speakers/joan_nweke.png",
    imageStyle: { transform: "scale(0.93) translateX(-12px)", transformOrigin: "bottom center" }
  },
  {
    id: 2,
    name: "Engr. Kevin Ahwin",
    role: "Keynote Speaker",
    title: "Software Engineer | Founder, StudySmart ABUAD",
    image: "/speakers/kevin_ahwin.png",
    imageStyle: { transform: "scale(1.1) translateY(12px)" }
  },
  {
    id: 3,
    name: "Lanre Adisa",
    role: "Keynote Speaker",
    title: "President, AAAN",
    image: "/speakers/lanre_adisa.png",
    imageStyle: { transform: "scale(0.94) translateX(12px)", transformOrigin: "bottom center" }
  },
  {
    id: 4,
    name: "Sophia Anozie",
    role: "Speaker",
    title: "LinkedIn Networking Session",
    image: "/speakers/Sophia_Anozie.png"
  },
  {
    id: 5,
    name: "Engr. Emmanuel Folorunso",
    role: "Panelist",
    title: "SA on ICT & System Maintenance, Ekiti State",
    image: "/speakers/emmanuel_folorunso.png",
    imageStyle: { transform: "scale(1.1) translateY(12px)" }
  },
  {
    id: 6,
    name: "Ani Ifeyinwa Morenike",
    role: "Panelist",
    title: "Entrepreneur | Podcast Host",
    image: "/speakers/ani_ifeyinwa.png",
    imageStyle: { transform: "scale(1.1) translateY(12px) translateX(-12px)" }
  },
  {
    id: 7,
    name: "Engr. Dr. Imhade P. Okokpujie",
    role: "Panelist",
    title: "Associate Professor & APWEN-ABUAD Staff Advisor",
    image: "/speakers/engr_princess.png",
    imageStyle: { transform: "scale(1.1) translateY(12px)" }
  },
  {
    id: 8,
    name: "RedhotSasa",
    role: "Panelist",
    title: "Digital Creator",
    image: "/speakers/redhotsasa.png",
    imageStyle: { transform: "scale(1.1) translateY(12px)" }
  },
  {
    id: 9,
    name: "Ifeoluwayimika Bamidele, PhD",
    role: "Panelist",
    title: "Chief Impact Officer - Drug Free Project",
    image: "/speakers/dr_ife.png"
  },
  {
    id: 10,
    name: "Temiloluwa Asagunla",
    role: "Moderator",
    title: "President APWEN ABUAD 25/26",
    image: "/speakers/temiloluwa.png"
  },
  {
    id: 11,
    name: "Ibrahim Sanusi",
    role: "Host",
    title: "",
    image: "/speakers/ibrahim_suleiman.png"
  },
  {
    id: 12,
    name: "Mercy Imoluamen",
    role: "Host",
    title: "",
    image: "/speakers/mercy_imoluamen.png"
  }
];

const Speakers = () => {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-container">
        {/* Title Section */}
        <div className="speakers-title-container">
          <h2 className="speakers-title">
            <span className="title-line">MEET</span>
            <span className="title-line">OUR</span>
            <span className="title-line title-year">2026</span>
            <span className="title-line">GUESTS</span>
          </h2>
          <p className="speakers-subtitle">
            Discover the amazing lineup of speakers, panelists, moderators, and hosts joining us for this transformative event.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="speakers-grid">
          {speakersData.map((speaker) => (
            <div className="speaker-card" key={speaker.id}>
              <div className="speaker-image-wrapper">
                <div className="speaker-image-inner">
                  <img src={speaker.image} alt={speaker.name} className="speaker-image" style={speaker.imageStyle || {}} />
                </div>
                <span className={`speaker-role-badge role-${speaker.role.toLowerCase().replace(/\s+/g, '-')}`}>
                  {speaker.role}
                </span>
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title-text">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
