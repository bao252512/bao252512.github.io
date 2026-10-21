import mapping from '../assets/projects/flood-mapping.svg'
import prediction from '../assets/projects/flood-prediction.svg'
import mappingContent from '../content/journal/flood-mapping.md?raw'
import predictionContent from '../content/journal/flood-prediction.md?raw'
import type { LocalJournalPost, WritingEntry } from '../types/portfolio'
export const journalPosts = [
  {
    "source": "local",
    "slug": "flood-mapping",
    "href": "#/journal/flood-mapping",
    "title": "Flood Mapping with Satellite Radar",
    "image": mapping,
    "imageAlt": "Conceptual satellite-signal illustration for flood mapping; not observed model output",
    "publishedDate": "Jun – Sep 2026",
    "category": "Geospatial machine learning",
    "summary": "Radar, optical imagery, and the challenge of generalising to unseen floods.",
    "topics": [
      "Sen1Floods11",
      "U-Net",
      "Event-level validation"
    ],
    "content": mappingContent
  },
  {
    "source": "local",
    "slug": "flood-prediction",
    "href": "#/journal/flood-prediction",
    "title": "Regression with a Flood Prediction Dataset",
    "image": prediction,
    "imageAlt": "Conceptual workflow from features through ensemble to prediction; not measured results",
    "publishedDate": "Jul – Oct 2026",
    "category": "Tabular machine learning",
    "summary": "Feature engineering, cross-validation, and an ensemble for flood probability.",
    "topics": [
      "Kaggle",
      "Gradient boosting",
      "Ensembling"
    ],
    "content": predictionContent
  }
] satisfies LocalJournalPost[]
export const writing: WritingEntry[] = [...journalPosts]
export const getLocalJournalPostBySlug = (slug: string): LocalJournalPost | undefined => journalPosts.find(post => post.slug === slug)
