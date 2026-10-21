import type { NavigationItem, SectionId } from '../types/portfolio'
export const sectionIds = ["home", "projects", "about", "skills", "experience", "education", "awards", "journal", "gallery", "contact"] as const satisfies readonly SectionId[]
export const navigation = [
  {
    "id": "home",
    "label": "Home",
    "enabled": true
  },
  {
    "id": "projects",
    "label": "Projects",
    "enabled": true
  },
  {
    "id": "about",
    "label": "About",
    "enabled": true
  },
  {
    "id": "skills",
    "label": "Skills",
    "enabled": true
  },
  {
    "id": "experience",
    "label": "Experience",
    "enabled": true
  },
  {
    "id": "education",
    "label": "Education",
    "enabled": true
  },
  {
    "id": "awards",
    "label": "Recognition",
    "enabled": true
  },
  {
    "id": "journal",
    "label": "Case studies",
    "enabled": true
  },
  {
    "id": "gallery",
    "label": "Community",
    "enabled": true
  },
  {
    "id": "contact",
    "label": "Contact",
    "enabled": false
  }
] satisfies NavigationItem[]
