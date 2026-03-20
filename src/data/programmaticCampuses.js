import { eventDetails } from './eventDetails.js';

export const programmaticCampuses = [
  {
    slug: 'abuad',
    route: '/campus-to-career-in-abuad/',
    campusName: eventDetails.campus,
    location: eventDetails.city,
    pageTitle:
      'Campus to Career in ABUAD | Afe Babalola University Student Career Event',
    metaDescription:
      'Campus to Career 2.0 in ABUAD takes place on May 2nd, 2026 with The Becoming theme, helping students grow through mentorship, networking, and practical career direction.',
    h1: 'Campus to Career in ABUAD',
    intro: [
      `Campus to Career 2.0 is built for students who want clarity before graduation. At ${eventDetails.campus}, the event theme "${eventDetails.theme}" centers personal development, continuous growth, personal branding, and a builder's mindset.`,
      `If you searched for Campus to Career in ABUAD, this is the official guide page. The live event takes place on ${eventDetails.fullDateLabel} at ${eventDetails.locationFull}.`,
    ],
    highlights: [
      'Networking and LinkedIn-focused icebreakers that help students start strong and build visibility early.',
      'Panel sessions on systems, structures, and the realities that shape all-round excellence.',
      'Keynote, fireside, and story-driven conversations that emphasize process-awareness and long-term growth.',
      'Mentorship, sponsor engagement, and next-day workshop support around scholarships, CV writing, and profile building.',
    ],
    faqs: [
      {
        question: 'Is Campus to Career really happening in ABUAD?',
        answer:
          `Yes. The current edition is planned for ${eventDetails.campus}, and this page is the indexed landing page for that intent.`,
      },
      {
        question: 'When is Campus to Career 2.0 in ABUAD?',
        answer:
          `The current edition is scheduled for ${eventDetails.fullDateLabel} at ${eventDetails.locationFull}.`,
      },
      {
        question: 'Who should attend Campus to Career in ABUAD?',
        answer:
          'ABUAD students across levels, postgraduate students, fresh graduates, student leaders, and anyone who wants clearer career direction before leaving school.',
      },
      {
        question: 'What should I do before attending?',
        answer:
          'Prepare your goals: identify one growth area to strengthen, one network target to meet, and one short-term career outcome you want within 90 days.',
      },
    ],
    status: 'confirmed',
  },
  {
    slug: 'unilag',
    route: '/campus-to-career-in-unilag/',
    campusName: 'University of Lagos (UNILAG)',
    location: 'Lagos, Nigeria',
    pageTitle: 'Campus to Career in UNILAG | Student Career Readiness Guide',
    metaDescription:
      'Campus to Career in UNILAG is a student-focused career readiness guide with practical steps for career positioning, mentorship, and growth.',
    h1: 'Campus to Career in UNILAG',
    intro: [
      'This page serves students searching for Campus to Career in UNILAG and explains the same career-readiness model used in our flagship event format.',
      `While ${eventDetails.campus} is the currently confirmed host campus, UNILAG students can use this guide to apply the framework immediately and join announcements for future editions.`,
    ],
    highlights: [
      'How to translate campus activities into employable proof.',
      'How to stand out in internships and entry-level applications.',
      'How to build mentor relationships that produce measurable outcomes.',
      'How to create a personal career plan for the next 6 to 12 months.',
    ],
    faqs: [
      {
        question: 'Is there a confirmed Campus to Career date in UNILAG yet?',
        answer:
          `Not yet. The current confirmed edition is hosted at ${eventDetails.campus}, and this page captures UNILAG student interest.`,
      },
      {
        question: 'Can UNILAG students still benefit now?',
        answer:
          'Yes. The frameworks and preparation checklist are useful immediately, even before a campus-specific date is announced.',
      },
    ],
    status: 'interest',
  },
  {
    slug: 'oau',
    route: '/campus-to-career-in-oau/',
    campusName: 'Obafemi Awolowo University (OAU)',
    location: 'Ile-Ife, Osun State, Nigeria',
    pageTitle: 'Campus to Career in OAU | Student Employability and Career Guide',
    metaDescription:
      'Campus to Career in OAU provides practical student employability guidance, mentorship direction, and career planning resources.',
    h1: 'Campus to Career in OAU',
    intro: [
      'Students searching for Campus to Career in OAU can use this page as a practical roadmap for bridging school life with long-term professional outcomes.',
      'Campus to Career prioritizes real, relatable strategies over generic motivation: skill stacking, personal branding, communication, and execution discipline.',
    ],
    highlights: [
      'Framework to identify and close personal skill gaps before graduation.',
      'Practical communication and interview readiness playbook.',
      'Networking patterns that help students access internships and referrals.',
      'Career momentum habits that prevent post-graduation drift.',
    ],
    faqs: [
      {
        question: 'Is OAU the current host for Campus to Career?',
        answer:
          `No. ${eventDetails.campus} is currently confirmed. This OAU page is an intent page for students and future campus rollout planning.`,
      },
      {
        question: 'How can OAU students stay informed?',
        answer:
          'Use this guide and monitor Campus to Career updates on the main site for official announcements.',
      },
    ],
    status: 'interest',
  },
  {
    slug: 'ui',
    route: '/campus-to-career-in-ui/',
    campusName: 'University of Ibadan (UI)',
    location: 'Ibadan, Oyo State, Nigeria',
    pageTitle: 'Campus to Career in UI | University of Ibadan Career Growth Guide',
    metaDescription:
      'Campus to Career in UI helps students plan for internships, employability, entrepreneurship, and post-school career growth.',
    h1: 'Campus to Career in UI',
    intro: [
      'This page targets students searching for Campus to Career in UI and provides a direct student-friendly blueprint for career growth during school.',
      `The same principles used in our ${eventDetails.campus} edition apply here: practical mentorship, strategic positioning, and measurable personal development.`,
    ],
    highlights: [
      'How to package student leadership and volunteering as marketable proof.',
      'How to prepare for internship conversion into full-time opportunities.',
      'How to build a professional profile that attracts opportunities online.',
      'How to define and track a personal career scorecard.',
    ],
    faqs: [
      {
        question: 'Is there an official UI edition right now?',
        answer:
          `The currently confirmed edition is ${eventDetails.campus}. This UI page is a dedicated discovery and planning page for interested students.`,
      },
      {
        question: 'What is the best first step today?',
        answer:
          'Pick one career direction, list your current skill gaps, and start building proof through projects, leadership, or internships.',
      },
    ],
    status: 'interest',
  },
];

