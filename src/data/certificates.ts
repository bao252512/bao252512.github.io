import samsung from '../assets/evidence/samsung-campus.webp'
import cubing from '../assets/evidence/cubing-participation.webp'
import fighter from '../assets/evidence/ielts-fighter.webp'
import type { CertificateEntry } from '../types/portfolio'

export const certificates = [
  {
    "title": "Samsung Innovation Campus",
    "issuer": "Samsung · JA Vietnam",
    "kind": "Course completion",
    "description": "Coding & Programming course 2024–2025, completed September 2025. Coursework included Python, computer science and algorithms.",
    "file": samsung,
    "logoKey": "python",
    "logoLabel": "Programming",
    "ariaLabel": "Open Samsung Innovation Campus certificate image"
  },
  {
    "title": "NxN in Hanoi 2024",
    "issuer": "NxN in Hanoi event organisers",
    "kind": "Participation",
    "description": "Certificate of appreciation for participation in the event held 27–28 January 2024.",
    "file": cubing,
    "logoKey": "jupyter",
    "logoLabel": "Cubing participation",
    "ariaLabel": "Open NxN in Hanoi participation certificate image"
  },
  {
    "title": "IELTS Fighter Excellent Student",
    "issuer": "IELTS Fighter · IMAP Vietnam",
    "kind": "Recognition",
    "description": "Excellent student recognition at the 44 Tran Quoc Hoan centre, November 2024.",
    "file": fighter,
    "logoKey": "ielts",
    "logoLabel": "IELTS Fighter recognition",
    "ariaLabel": "Open IELTS Fighter excellent student certificate image"
  }
] satisfies CertificateEntry[]
