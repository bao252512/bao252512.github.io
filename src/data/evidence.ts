import e0 from '../assets/evidence/ielts-fighter.webp'
import e1 from '../assets/evidence/samsung-campus.webp'
import e2 from '../assets/evidence/cubing-participation.webp'
import e3 from '../assets/evidence/ielts-academic.webp'
import e4 from '../assets/evidence/sat-score.webp'
import e5 from '../assets/evidence/hust-commendation.webp'
import e6 from '../assets/evidence/sydney-award-eligibility.webp'
import e7 from '../assets/evidence/anu-award-offer.pdf'
import anuPage1 from '../assets/evidence/anu-award-page-1.webp'
import anuPage2 from '../assets/evidence/anu-award-page-2.webp'
import e8 from '../assets/evidence/community-outreach.webp'
import e9 from '../assets/evidence/community-preparation.webp'
import e10 from '../assets/evidence/community-shared-moment.webp'
import e11 from '../assets/evidence/community-team.webp'
export type EvidenceEntry = {
 id: string; sourcePath: string; sourceSha256: string; category: 'document' | 'photo';
 format: 'image' | 'pdf'; title: string; description: string; file: string;
 kind?: string; issuer?: string; ariaLabel?: string; alt?: string; pages?: string[]; thumbnail?: string;
}

export const evidence: EvidenceEntry[] = [
  {
    "id": "ielts-fighter",
    "sourcePath": "src/assets/evidence/originals/Ielts Fighter excellent student/IMG_5383.HEIC",
    "sourceSha256": "3d1d67e2214632e5130328b679f71c8e211c883f25bfb35bab2113587e579de5",
    "category": "document",
    "format": "image",
    "title": "IELTS Fighter Excellent Student",
    "kind": "Recognition",
    "issuer": "IELTS Fighter · IMAP Vietnam",
    "description": "Excellent student recognition at the 44 Tran Quoc Hoan centre, November 2024.",
    "file": e0,
    "ariaLabel": "Open IELTS Fighter Excellent Student image"
  },
  {
    "id": "samsung-campus",
    "sourcePath": "src/assets/evidence/originals/Samsung Innovation Campus cert/IMG_5384.HEIC",
    "sourceSha256": "f923ff689ce5da019f2fed120244298a578492ae224a13d1e9f6f6964ba9c89c",
    "category": "document",
    "format": "image",
    "title": "Samsung Innovation Campus",
    "kind": "Course completion",
    "issuer": "Samsung · JA Vietnam",
    "description": "Coding & Programming course 2024–2025, completed September 2025.",
    "file": e1,
    "ariaLabel": "Open Samsung Innovation Campus image"
  },
  {
    "id": "cubing-participation",
    "sourcePath": "src/assets/evidence/originals/wca NxN cert/IMG_5385.HEIC",
    "sourceSha256": "f612c91d55106edfe1aea58fd7985a69908330a5c3ee07aac3f7ca9db45ca750",
    "category": "document",
    "format": "image",
    "title": "NxN in Hanoi 2024",
    "kind": "Participation",
    "issuer": "NxN in Hanoi event organisers",
    "description": "Certificate of appreciation for participation on 27–28 January 2024.",
    "file": e2,
    "ariaLabel": "Open NxN in Hanoi 2024 image"
  },
  {
    "id": "ielts-academic",
    "sourcePath": "src/assets/evidence/originals/IELTS/Screenshot 2026-05-26 105659.png",
    "sourceSha256": "c4ee8e5b81d6b23e59cf0f842a4ec442a80148387814cda7257de7d1b2a2c750",
    "category": "document",
    "format": "image",
    "title": "IELTS Academic score report",
    "kind": "Test result",
    "issuer": "IELTS · British Council",
    "description": "Academic overall band 8.0: Listening 8.5, Reading 9.0, Writing 7.0 and Speaking 7.0. Test date: 31 December 2024.",
    "file": e3,
    "ariaLabel": "Open IELTS Academic score report image"
  },
  {
    "id": "sat-score",
    "sourcePath": "src/assets/evidence/originals/SAT/Screenshot 2026-05-26 105317.png",
    "sourceSha256": "d6a97ed66b5e7a4daf0a751c3498616529fa2cff838f0be5eec036c6bd89de5d",
    "category": "document",
    "format": "image",
    "title": "SAT score report",
    "kind": "Test result",
    "issuer": "College Board",
    "description": "Total 1600/1600: Reading and Writing 800, Mathematics 800. Test date: 6 December 2025.",
    "file": e4,
    "ariaLabel": "Open SAT score report image"
  },
  {
    "id": "hust-commendation",
    "sourcePath": "src/assets/evidence/originals/Tân sinh viên K71 có thành tích xuất sắc trong kỳ tuyển sinh năm 2026/IMG_5415.HEIC",
    "sourceSha256": "b36c608469bcc770d34ebe72e1b6c4f1f4cc949c4eaec147babce666c27a602b",
    "category": "document",
    "format": "image",
    "title": "HUST admission commendation",
    "kind": "Commendation",
    "issuer": "Hanoi University of Science and Technology",
    "description": "Commendation for outstanding achievement in the 2026 undergraduate admission round, issued 4 September 2026.",
    "file": e5,
    "ariaLabel": "Open HUST admission commendation image"
  },
  {
    "id": "sydney-award-eligibility",
    "sourcePath": "src/assets/evidence/originals/Uni of Sydney scholarship/Screenshot 2026-10-08 222639.png",
    "sourceSha256": "c9846c5e61003c4ca4ea98862879a018685548b386239840c806134c63089b5a",
    "category": "document",
    "format": "image",
    "title": "Sydney award eligibility",
    "kind": "Eligibility",
    "issuer": "The University of Sydney",
    "description": "An invitation to apply for the Sydney International Student Award, providing a 20% tuition contribution if successful. Eligibility is not a confirmed award or enrolment.",
    "file": e6,
    "ariaLabel": "Open Sydney award eligibility image"
  },
  {
    "id": "anu-award-offer",
    "sourcePath": "src/assets/evidence/originals/Australia National University Scholarship/U8634572_STT_Gia Bao Do ANU International Achievement Award 240726.pdf",
    "sourceSha256": "45f85939a4a567c6f402aa0fd1c1d3cddaa9d93dd205743ce826c9008d8683f3",
    "category": "document",
    "format": "pdf",
    "title": "ANU International Achievement Award",
    "kind": "Scholarship offer",
    "issuer": "Australian National University",
    "description": "Complete two-page offer dated 24 July 2026: 25% tuition scholarship for Bachelor of Computing, Semester 1 2027, subject to the stated conditions. An offer does not establish acceptance or enrolment.",
    "file": e7,
    "ariaLabel": "Open ANU International Achievement Award PDF document",
    "pages": [
      anuPage1,
      anuPage2
    ],
    "thumbnail": anuPage1
  },
  {
    "id": "community-outreach",
    "sourcePath": "src/assets/evidence/originals/Connected World Club/LOK09983.jpg",
    "sourceSha256": "787b37912a48562f53f4813c97691fdcfd2278b03edcfbe9fb5741a315bb2d54",
    "category": "photo",
    "format": "image",
    "title": "Community, beyond the dataset",
    "description": "Connected World Club outreach at Dong Da Friendship Children’s Shelter, October 2026.",
    "alt": "Connected World Club volunteers with gift boxes at the outreach event",
    "file": e8
  },
  {
    "id": "community-preparation",
    "sourcePath": "src/assets/evidence/originals/Connected World Club/LOK00017.jpg",
    "sourceSha256": "33f245d895156aab6916ed842d7a3b825f00336011a99bb77d9608203c71fa5a",
    "category": "photo",
    "format": "image",
    "title": "Preparing to give back",
    "description": "Connected World Club outreach at Dong Da Friendship Children’s Shelter, October 2026.",
    "alt": "Connected World Club volunteers preparing for a community visit",
    "file": e9
  },
  {
    "id": "community-shared-moment",
    "sourcePath": "src/assets/evidence/originals/Connected World Club/LOK00081.jpg",
    "sourceSha256": "316cfb3cc98836a31f8a3cb8e00bd9951e6d4e1194c56027ddb65511a9c85d8e",
    "category": "photo",
    "format": "image",
    "title": "A shared moment",
    "description": "Connected World Club outreach at Dong Da Friendship Children’s Shelter, October 2026.",
    "alt": "Volunteers and participants gathered at the community outreach event",
    "file": e10
  },
  {
    "id": "community-team",
    "sourcePath": "src/assets/evidence/originals/Connected World Club/LOK09974.jpg",
    "sourceSha256": "bfdbd89906489943979d538c81e37aa60531e460f3b358f6da39535841b253c0",
    "category": "photo",
    "format": "image",
    "title": "The people behind the visit",
    "description": "Connected World Club outreach at Dong Da Friendship Children’s Shelter, October 2026.",
    "alt": "Connected World Club team standing beside the prepared gift boxes",
    "file": e11
  }
]
