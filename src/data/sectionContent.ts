import type { SectionContent } from '../types/portfolio'

export const sectionContent = {
  "about": {
    "eyebrow": "THE PERSON BEHIND THE WORK",
    "title": "Curiosity, with a practical purpose.",
    "description": "Learning to ask better questions — and using data to work towards useful answers."
  },
  "education": {
    "eyebrow": "FOUNDATIONS",
    "title": "Learning with intention.",
    "description": "An informatics foundation, continuous independent study, and a commitment to analytical thinking."
  },
  "experience": {
    "eyebrow": "IN PRACTICE",
    "title": "From learning to doing.",
    "description": "Business intelligence, reliable data workflows, and time spent contributing to a wider community."
  },
  "awards": {
    "eyebrow": "SELECTED RECOGNITION",
    "title": "Milestones along the way.",
    "description": "Academic recognition and opportunities. Offers and eligibility are distinguished from enrolment."
  },
  "projects": {
    "eyebrow": "SELECTED WORK",
    "title": "Two ways of understanding floods.",
    "description": "From satellite imagery to tabular prediction: exploring how machine learning can make complex environmental data more useful."
  },
  "gallery": {
    "eyebrow": "BEYOND THE SCREEN",
    "title": "Part of a wider community.",
    "description": "Making time for people, shared interests, and practical contributions."
  },
  "journal": {
    "eyebrow": "PROJECT NOTES",
    "title": "A closer look at the work.",
    "description": "The questions, methods, reported results, and limits behind my two flood-analysis projects."
  },
  "skills": {
    "eyebrow": "THE TOOLKIT",
    "title": "Tools for asking better questions.",
    "description": "Python and SQL at the core, with a growing toolkit for machine learning, visualisation, and reliable analysis."
  },
  "contact": {
    "eyebrow": "CONTINUE EXPLORING",
    "title": "Continue exploring.",
    "description": "Explore the project investigations and supporting evidence."
  }
} satisfies SectionContent

export const subsectionContent = {
  "journal": {
    "videosEyebrow": "",
    "videosTitle": "",
    "writingEyebrow": "CASE STUDIES",
    "writingTitle": "Methods, results & reflections"
  },
  "skills": {
    "certificatesEyebrow": "EVIDENCE",
    "certificatesTitle": "Certificates & participation",
    "certificatesDescription": "Selected documents from my evidence folder. Open an image to inspect the certificate."
  },
  "contact": {
    "channelsTitle": "Selected work"
  }
} as const
