import { CALENDAR_END_UTC, CALENDAR_START_UTC } from '../../shared/calendarConstants.js';

export const eventDetails = {
  name: 'Campus to Career 2.0',
  theme: 'The Becoming',
  overviewRoute: '/about-2.0',
  shortDateLabel: 'Saturday, May 2nd',
  fullDateLabel: 'Saturday, May 2nd, 2026',
  shortDateWithYear: 'May 2nd, 2026',
  startDateTime: '2026-05-02T08:30:00+01:00',
  endDateTime: '2026-05-02T14:00:00+01:00',
  calendarStartUtc: CALENDAR_START_UTC,
  calendarEndUtc: CALENDAR_END_UTC,
  venue: 'Alfa Belgore Hall',
  campus: 'Afe Babalola University (ABUAD)',
  locationLabel: 'Alfa Belgore Hall, ABUAD',
  locationFull: 'Alfa Belgore Hall, Afe Babalola University (ABUAD)',
  city: 'Ado-Ekiti, Ekiti State, Nigeria',
  audience: 'Undergraduate and postgraduate students, plus fresh graduates',
  attendance: '1,000 to 1,500 students',
  summary:
    'A student-focused career development initiative designed to bridge academic learning and real-world careers.',
  focus:
    "This edition emphasizes personal development, continuous growth, personal branding, and a builder's mindset.",
  overviewIntro: [
    'Campus to Career is a student-focused career development initiative designed to bridge the gap between academic learning and real-world professional careers.',
    "The event brings together students, industry professionals, employers, and corporate organizations to equip young talents with the skills, exposure, and networks needed to thrive in today's competitive job market.",
    'This year\'s theme, "The Becoming," is an eye-opening experience that speaks to the process of the individual. Beyond simply being a student, personal development, continuous growth, and personal branding are emphasized so every participant leaves with a builder\'s mindset.',
  ],
  platformAims: [
    'Preparing students for life after graduation',
    'Exposing undergraduates to real industry expectations',
    'Creating direct interaction between students and employers',
    'Promoting mentorship, employability skills, and career clarity',
  ],
  objectives: [
    'Equip students with practical career and workplace skills',
    'Connect students directly with industry professionals and employers',
    'Create awareness about career paths, internships, and opportunities',
    'Provide corporate organizations with access to emerging talent',
    'Promote youth empowerment and workforce readiness',
    'Encourage more process-awareness among students',
  ],
  schedule: [
    {
      time: '8:30am',
      title: 'Registration',
      detail: 'Pictures, hashtags, and viral moments begin the day while attendees settle in.',
    },
    {
      time: '9:30am',
      title: 'Welcome Session',
      detail: 'Prayers, anthem, and the official welcome address open the event.',
    },
    {
      time: '9:45am',
      title: 'Guest Introduction',
      detail: 'The host introduces special guests, speakers, and partners.',
    },
    {
      time: '9:55am',
      title: 'Ice-Breaker and Networking',
      detail: 'A networking session with a spotlight on LinkedIn helps attendees connect early.',
    },
    {
      time: '10:15am',
      title: 'Panel 1: Systems and Structures',
      detail: 'A conversation on the systems and structures that foster all-round excellence.',
    },
    {
      time: '10:45am',
      title: 'Keynote Citation',
      detail: 'The keynote speaker is formally introduced before the keynote session begins.',
    },
    {
      time: '10:50am',
      title: 'Keynote Speaker',
      detail: 'A core message designed to challenge mindset and expand career perspective.',
    },
    {
      time: '11:20am',
      title: 'Spoken Word Performance',
      detail: 'A performance by the Open Page Community, with refreshments shared around this segment.',
    },
    {
      time: '11:30am',
      title: 'Fireside Chat',
      detail: 'A grounded conversation that turns the big ideas of the day into relatable insight.',
    },
    {
      time: '11:55am',
      title: 'Special Guests and Sponsors',
      detail: 'Comments from special guests and sponsors connect the event to wider opportunities.',
    },
    {
      time: '12:15pm',
      title: 'Dance Drama Performance',
      detail: 'A creative performance, with souvenirs shared around this point in the program.',
    },
    {
      time: '12:30pm',
      title: 'Panel 2: My Becoming',
      detail: 'A story-driven panel and Q&A centered on lived experience, growth, and process.',
    },
    {
      time: '1:10pm',
      title: 'Announcements',
      detail: 'Prize winners, mentorship opportunities, and the next-day career workshop are announced.',
    },
    {
      time: '1:30pm',
      title: 'Vote of Thanks and Close',
      detail: 'Prayers, anthem, and encouragement to keep networking and keep becoming.',
    },
    {
      time: 'After event',
      title: 'Booths and Continued Networking',
      detail: 'Sponsor engagement booths, pictures, and additional networking continue after the main sessions.',
    },
  ],
  nextSteps: [
    "Prize winners are announced under the 'Becomers' storytelling spotlight.",
    'Networking and mentorship opportunities continue with the alumni community.',
    'A follow-up virtual workshop covers scholarships, CV writing, profile building, and continuous professional development.',
    'Materials from the workshop are shared so attendees can keep building after the event.',
  ],
  partnerBodies: [
    'Campus to Career core team',
    'StudySmart',
    'APWEN',
    'ASVA',
    'AESA',
    'BESA',
    'COMSSA',
    'SRC',
  ],
  calendarDetails:
    "Theme: The Becoming. A student-focused career development experience centered on personal development, industry exposure, mentorship, and a builder's mindset.",
};

export const calendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams({
  action: 'TEMPLATE',
  text: eventDetails.name,
  dates: `${eventDetails.calendarStartUtc}/${eventDetails.calendarEndUtc}`,
  details: eventDetails.calendarDetails,
  location: eventDetails.locationFull,
}).toString()}`;
