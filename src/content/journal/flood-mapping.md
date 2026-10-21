## The question

How can satellite signals help identify flooding across events that a model has never seen? Increasingly serious flood seasons in Vietnam motivated this independent project, developed from June to September 2026.

## Data and approach

I used **Sen1Floods11** and benchmarked five flood-detection approaches, ranging from radar thresholding and LightGBM to radar-only and radar–optical U-Net models. Radar and optical inputs were compared to investigate their contribution to detection accuracy.

The challenge is spatial prediction: identifying flooded areas, rather than assigning a single flood probability to a row of environmental factors.

## Validation and reported result

I used **leave-one-event-out validation** to assess performance on held-out flood events. The multimodal U-Net achieved a reported **0.775 intersection over union (IoU)** on unseen floods.

IoU measures the overlap between predicted and reference flood regions. It is distinct from the R-squared measure used in my tabular flood-prediction project; the two numbers should not be compared as if they share a scale or task.

## Making the analysis usable

I built an interactive **Streamlit dashboard in Python** to visualise cross-flood performance, investigate model errors, and compare the influence of radar and optical inputs. The dashboard supported investigation rather than hiding model behaviour behind a single score.

## What the result does and does not establish

Holding out whole events is a useful way to ask about generalisation. It does not, by itself, establish reliability in every region, season, sensor condition, or operational setting. A production deployment would need further validation and careful assessment of missed floods and false alarms.

The project details and headline metric above are self-reported. Source code, per-event scores and a running demo were not included in the supplied materials; this portfolio does not independently reproduce the experiments. The cover artwork is a conceptual illustration, not a satellite observation or model output.
