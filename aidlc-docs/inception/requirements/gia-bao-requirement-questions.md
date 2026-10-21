# Gia Bao requirements questions

The supplied resume and evidence archive have been located. Proposed design and cleanup scope are in gia-bao-intent-analysis.md. Answer using each [Answer]: tag, or reply in chat with numbered choices.

## Question 1: Public contact details

The resume has blank contact fields and no embedded project or social links. Which contact approach should the website use?

A) Omit contact links for now; include the resume download and project details (recommended until real links are provided).
B) Use the email and/or GitHub, LinkedIn, project, and demo URLs I provide after the answer tag.
X) Other (please describe after [Answer]: tag below).

[Answer]: A

## Question 2: Security Extensions

Should security extension rules be enforced for this project?

A) Yes — enforce all SECURITY rules as blocking constraints (recommended for production-grade applications).
B) No — skip all SECURITY rules (suitable for PoCs, prototypes, and experimental projects).
X) Other (please describe after [Answer]: tag below).

[Answer]: B

## Question 3: Property-Based Testing Extension

Should property-based testing (PBT) rules be enforced for this project?

A) Yes — enforce all PBT rules as blocking constraints (recommended for projects with business logic, data transformations, serialization, or stateful components).
B) Partial — enforce PBT rules only for pure functions and serialization round-trips (suitable for projects with limited algorithmic complexity).
C) No — skip all PBT rules (suitable for UI-only projects with no significant business logic; recommended for this portfolio).
X) Other (please describe after [Answer]: tag below).

[Answer]: C
