import mapping from '../assets/projects/flood-mapping.svg'
import prediction from '../assets/projects/flood-prediction.svg'
import type { ProjectEntry } from '../types/portfolio'

export const projects: ProjectEntry[] = [
  {
    "id": "flood-mapping",
    "title": "Flood Mapping with Satellite Radar",
    "description": "A geospatial study of flood detection with Sen1Floods11, five model approaches, and leave-one-event-out validation. Reported result: 0.775 IoU from a radar–optical U-Net on unseen floods.",
    "image": mapping,
    "imageAlt": "Conceptual satellite-signal illustration for flood mapping; not observed model output",
    "logoKey": "python",
    "logoLabel": "Python geospatial project",
    "technologies": [
      "Python",
      "PyTorch",
      "LightGBM",
      "Streamlit",
      "Sen1Floods11"
    ],
    "actions": [
      {
        "label": "Read case study",
        "href": "#/journal/flood-mapping",
        "ariaLabel": "Read Flood Mapping with Satellite Radar case study"
      }
    ]
  },
  {
    "id": "flood-prediction",
    "title": "Regression with a Flood Prediction Dataset",
    "description": "An ensemble workflow using 20 environmental and infrastructure factors. Reported private rank: 207 of 2,794 teams (top 7.4%); R²: 0.86893.",
    "image": prediction,
    "imageAlt": "Conceptual workflow from features through ensemble to prediction; not measured results",
    "logoKey": "jupyter",
    "logoLabel": "Tabular machine-learning project",
    "technologies": [
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Cross-validation",
      "Feature engineering"
    ],
    "actions": [
      {
        "label": "Read case study",
        "href": "#/journal/flood-prediction",
        "ariaLabel": "Read flood prediction competition case study"
      }
    ]
  }
] satisfies ProjectEntry[]
