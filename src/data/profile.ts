import profileImage from '../assets/gia-bao-mark.svg'
import type { Profile, HeroSection } from '../types/portfolio'

export const profile: Profile = {
  "name": "Do Gia Bao",
  "slug": "do-gia-bao",
  "role": "Data Science & Analytics",
  "location": "Hanoi, Vietnam",
  "email": "",
  "profileImage": profileImage,
  "summary": "I explore how data can help us understand the world — from mapping floods with satellite imagery to building clearer business intelligence workflows. My interests sit at the intersection of data science, machine learning, and analytics.",
  "socialLinks": []
} satisfies Profile

export const hero = {
  "eyebrow": "DO GIA BAO / DATA SCIENCE & ANALYTICS",
  "statusBadges": [
    "HANOI, VIETNAM",
    "LEARN. ANALYSE. BUILD."
  ],
  "headline": "Making sense of data. Making room for impact.",
  "highlightedPhrase": "data.",
  "intro": "I explore how data can help us understand the world — from mapping floods with satellite imagery to building clearer business intelligence workflows. My interests sit at the intersection of data science, machine learning, and analytics.",
  "stats": [
    {
      "value": "0.775 IoU",
      "label": "Flood mapping · reported"
    },
    {
      "value": "Top 7.4%",
      "label": "Kaggle · private rank"
    },
    {
      "value": "Python + SQL",
      "label": "Analytics toolkit"
    }
  ],
  "primaryAction": {
    "label": "Explore projects",
    "sectionId": "projects",
    "ariaLabel": "Explore selected data science projects"
  },
  "secondaryAction": {
    "label": "Read case studies",
    "sectionId": "journal",
    "ariaLabel": "Read project case studies"
  },
  "stackHighlights": [
    "Python",
    "SQL",
    "Machine Learning",
    "Geospatial Analysis",
    "Data Visualisation",
    "Business Intelligence"
  ]
} satisfies HeroSection
