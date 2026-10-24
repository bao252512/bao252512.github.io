# Historical document cleanup

User explicitly requested removal from older commits on 25 October 2026. Rewrote all seven retained commits and replaced main with an explicit force-with-lease. A fresh GitHub mirror contains only main and confirms all 15 historical paths and all 10 private document/archive blobs are absent from every retained commit. The application tree remained byte-for-byte unchanged. The removed material consists of IELTS Academic, SAT, Sydney eligibility and ANU offer originals/previews plus the historical ZIP containing them.

The live site still serves the temporary-unavailable page and its deployment workflow is disabled. Private originals and a recovery bundle are outside this repository at /Users/nhamhhung/gia-bao-private-evidence. Ignore rules prevent accidental re-addition. Collaborators should re-clone; merging an old clone can reintroduce the withdrawn history.

## Remaining GitHub cache purge

History cleanup is complete for the published branch. A HEAD request to an old document URL at a pre-rewrite commit still returned HTTP 200 after rewriting. GitHub Support must purge cached views and unreachable server objects. No request was sent to Support. A ready-to-submit request is saved privately at /Users/nhamhhung/gia-bao-private-evidence/github-support-request.md.

GitHub procedure: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
Support portal: https://support.github.com/contact

First changed commit reported by git-filter-repo: 71b795f867dc9c9781c860d4ed00d7629c7a0f01. No pull-request refs were advertised by the remote; no Git LFS objects were in use. Cache deletion, other clones and copies outside the repository cannot be completed through force-pushing.
