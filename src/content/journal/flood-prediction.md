## The question

Can a set of environmental and infrastructure factors predict flood probability? This Kaggle regression project, developed from July to October 2026, explored the full workflow from features to an ensemble prediction.

## Data and modelling

The dataset contains **20 environmental and infrastructure risk factors**. I engineered row-level statistical features and used cross-validation to guide iterative modelling.

The final approach combined **LightGBM, XGBoost, and CatBoost**, with multi-seed training and non-negative blending. Cross-validation provided a consistent framework for comparing changes before combining predictions.

## Reported results

My project record reports an improvement in private leaderboard position from **535th (top 19%)** to **207th out of 2,794 teams (top 7.4%)**, with **R-squared of 0.86893**.

R-squared is a regression fit measure. The leaderboard position reflects this competition and its evaluation; it should not be interpreted as operational flood-warning accuracy. It is separate from the image-segmentation IoU used in my satellite project.

## A practical learning loop

The workflow connected feature engineering, cross-validation, iterative optimisation, multi-seed training, and blending. It reinforced the value of evaluating changes systematically rather than relying on a single model or training run.

## Limitations and provenance

Competition performance does not establish performance on new real-world flood events. Before operational use, the data distribution, calibration, error costs, and geographic coverage would require additional assessment.

The workflow, ranking and score are self-reported. A public notebook, leaderboard record and executable model were not included in the supplied materials, so this site presents a written case study rather than an independently reproduced benchmark. The cover depicts the conceptual workflow, not measured predictions.
