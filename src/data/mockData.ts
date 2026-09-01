import {
  Announcement,
  FacultyMember,
  Founder,
  Director,
  StudyMaterial,
  ResultDoc,
  GalleryItem,
  ClassSchedule,
  LibraryBook
} from '../types';
// @ts-ignore
import chairmanImg from '../assets/images/Chairman.png';
// @ts-ignore
import computerLabImg from '../assets/images/computer_lab.jpg';

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Admissions Open for Academic Year 2026-27',
    type: 'announcement',
    date: '2026-06-15',
    description: 'Online applications are now being accepted for all departments. Apply early to secure your seat.',
    category: 'Admissions',
    content: 'We are pleased to announce that registrations for the upcoming academic year are officially open. Candidates can apply online through our Admissions portal, submit necessary documents, and track their application state in real-time. Scholarship support parameters are available as per government regulations.'
  },
  {
    id: 'ann-2',
    title: 'KTES Science and Tech Exhibition "AURA 2026"',
    type: 'event',
    date: '2026-07-10',
    description: 'An annual inter-institutional display of scientific innovation, robotics tournaments, and biotech modules.',
    category: 'Events',
    content: 'AURA 2026 will bring together top student teams showcasing innovations in IoT, Renewable Energy, and Smart Care Systems. Keynote speakers include eminent research fellows from prime aerospace laboratories.'
  },
  {
    id: 'ann-3',
    title: 'Outstanding Performance in Junior College Merit Examinations',
    type: 'achievement',
    date: '2026-06-05',
    description: 'KTES Mahatma Gandhi Vidyalaya Board Examination results achieved an unprecedented 99.4% overall pass average.',
    category: 'Academics',
    content: 'Our high school and junior college wings have secured top regional ranks. Over 45 students scored higher than 95% in science and commerce modules. Congratulations to the teachers, students, and family mentors.'
  },
  {
    id: 'ann-4',
    title: 'New Bio-Safety Level 2 Research Lab Commissioned',
    type: 'news',
    date: '2026-05-20',
    description: 'Kelkar Degree College gains advanced biotechnology research unit for senior and post-grad research projects.',
    category: 'Infrastructure',
    content: 'To foster premium learning experiences, our college division has upgraded its life science facilities. The laboratory includes modern PCR thermal cyclers, laminar airflow chambers, and advanced digital microscopy systems.'
  }
];

export const FOUNDERS: Founder[] = [
  {
    id: 'founder-1',
    name: 'Late Shri. Sadashiv K. Kelkar',
    designation: 'Founder President (Ex-MLA / Philanthropist)',
    biography: 'Shri Sadashiv Rao Kelkar was a legendary social reformer and educational visionary who recognized the critical need for premium high-quality teaching institutions in rural and semi-urban belts. He dedicated his life to establishing the society foundations in 1974.',
    contribution: 'Donated ancestral lands for campus building, integrated vocational trades, and secured state-wide credentials, raising standard structures for thousands of students.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'founder-2',
    name: 'Late Dr. Raghunath G. Kelkar',
    designation: 'Co-Founder & Chief Academic Trustee',
    biography: 'An exemplary scientist and foreign-returned fellow, Dr. Kelkar brought a rigorous work ethic to academic programming. He pioneered the integration of physics laboratories and basic digital literacy modules long before they became universal standards.',
    contribution: 'Designed curriculum frameworks, recruited elite scholars from research fields, and led the initial accreditation drives with global standards.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'founder-3',
    name: 'Late Smt. Savitribai S. Kelkar',
    designation: 'Co-Founder & Pioneer of Girls\' Education',
    biography: 'A strong believer in gender-inclusive society growth, Smt. Savitribai founded the first dedicated hostel wings and girls\' counseling programs, leading multiple community outreaches and financial support circles.',
    contribution: 'Spearheaded full tuition-waiver scholarships for girl students, launched local self-defense divisions, and created women-led culinary and art workshops.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  }
];

export const DIRECTORS: Director[] = [
  {
    id: 'dir-1',
    name: 'Shri. Haribhau Sandbhor',
    position: 'President & Chairman, KTES',
    qualifications: 'B.A., LL.B. (Distinguished Advocate)',
    experience: 'From 1999',
    image: chairmanImg
  },
  {
    id: 'dir-2',
    name: 'Dr. Ananya V. Kelkar',
    position: 'Vice President & Academic Coordinator',
    qualifications: 'Ph.D. in Educational Policy development (Harvard)',
    experience: '18 Years in Academic Leadership, Research, and Digital Tech Coaching',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'dir-3',
    name: 'Shri. Ramesh N. Joshi',
    position: 'Secretary & Chief Financial Comptroller',
    qualifications: 'M.Com, FCA (Senior Chartered Accountant)',
    experience: '32 Years Corporate Auditing, Legal Structuring, and Society Audits',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'dir-4',
    name: 'Smt. Vasundhara M. Deshmukh',
    position: 'Trustee & Student Welfare Board Chair',
    qualifications: 'M.A. (Sociology), Social Welfare Fellow (TISS)',
    experience: '22 Years in Community Engagement, NCC Support, & Sports Leagues',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_FACULTY: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Sudheer B. Patil',
    department: 'College',
    designation: 'Principal & Professor of Organic Chemistry',
    qualifications: 'Ph.D. (CSIR Fellow, IISc), post-doc (Berlin)',
    experience: '22 Years Research & Post-Grad Teaching. 15 Published Journals.',
    email: 'sbpatil@ktescollege.edu',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-2',
    name: 'Prof. Shruti S. Kulkarni',
    department: 'College',
    designation: 'Head of Computer Science & Data Analytics Wing',
    qualifications: 'M.Tech (IIT Bombay), MCA',
    experience: '14 Years in Software Instruction and Artificial Intelligence Models.',
    email: 'shruti.k@ktescollege.edu',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-3',
    name: 'Mr. Arvind M. Vaze',
    department: 'MAV',
    designation: 'Principal of Mahatma Gandhi Vidyalaya',
    qualifications: 'M.A. (English), M.Ed, National Teacher Award Winner',
    experience: '25 Years in Board Curriculum Oversight & Adolescent Mentoring.',
    email: 'amvaze@ktesmav.edu',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-4',
    name: 'Smt. Pallavi R. Deshpande',
    department: 'MAV',
    designation: 'Headmistress of Mahatma Gandhi English Section',
    qualifications: 'M.Sc. (Maths), B.Ed',
    experience: '16 Years in Multi-sensory Mathematics Coaching & Child Literacy.',
    email: 'pdeshpande@ktesems.edu',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-5',
    name: 'Smt. Kalpana G. Kelkar',
    department: 'SKPPV',
    designation: 'Lead Coordinator of Sheth Kesharchand Parakh Prathamik Vidyalaya',
    qualifications: 'B.A. (Child Psychology), Montessori Diploma (London)',
    experience: '19 Years of Play-way Learning Protocols and Kids Arts Direction.',
    email: 'kalpana@ktesskppv.edu',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-6',
    name: 'Mr. Shekhar K. Sawant',
    department: 'MAV',
    designation: 'Senior Physics Lecturer (Junior College)',
    qualifications: 'M.Sc (Physics), B.Ed',
    experience: '12 Years preparing students for JEE, NEET and National Olympiads.',
    email: 'ssawant@ktesmav.edu',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'doc-1',
    title: 'Advanced Electro-Chemistry Study Notes - Sem II',
    department: 'College',
    courseOrClass: 'F.Y. B.Sc. Chemistry',
    fileType: 'PDF Document',
    fileSize: '4.2 MB',
    downloadUrl: '#',
    uploadedAt: '2026-06-01'
  },
  {
    id: 'doc-2',
    title: 'Object Oriented Programming with Java Reference Sheet',
    department: 'College',
    courseOrClass: 'S.Y. B.C.A.',
    fileType: 'PDF Ebook',
    fileSize: '6.8 MB',
    downloadUrl: '#',
    uploadedAt: '2026-06-08'
  },
  {
    id: 'doc-3',
    title: '10th Standard Algebra Formulas and Solved Tensors',
    department: 'MAV',
    courseOrClass: 'Grade 10 Maths',
    fileType: 'PDF Worksheets',
    fileSize: '2.1 MB',
    downloadUrl: '#',
    uploadedAt: '2026-05-25'
  },
  {
    id: 'doc-4',
    title: 'Comprehensive Grammar Guidelines & Verb Tenses',
    department: 'MAV',
    courseOrClass: 'Grade 7 English',
    fileType: 'Zip Archive',
    fileSize: '5.4 MB',
    downloadUrl: '#',
    uploadedAt: '2026-06-12'
  }
];

export const INITIAL_RESULTS: ResultDoc[] = [
  {
    id: 'res-1',
    examName: 'College Graduation Degree Finals (B.Sc. & B.Com)',
    academicYear: '2024-25',
    department: 'College',
    overallPercentage: 98.4,
    topRankers: [
      { name: 'Megha S. Kulkarni', score: '99.2%', rank: 1 },
      { name: 'Rohan A. Pradhan', score: '98.5%', rank: 2 },
      { name: 'Sameer V. Joshi', score: '97.9%', rank: 3 }
    ],
    attachmentUrl: '#'
  },
  {
    id: 'res-2',
    examName: 'Junior College HSC Board Science and Commerce',
    academicYear: '2024-25',
    department: 'MAV',
    overallPercentage: 99.1,
    topRankers: [
      { name: 'Aditya S. Kelkar', score: '98.6%', rank: 1 },
      { name: 'Vaishnavi R. Deshmukh', score: '98.1%', rank: 2 }
    ],
    attachmentUrl: '#'
  },
  {
    id: 'res-3',
    examName: 'State Board Secondary Examination (SSC Grade 10)',
    academicYear: '2024-25',
    department: 'MAV',
    overallPercentage: 100.0,
    topRankers: [
      { name: 'Chinmayee P. Deshpande', score: '99.4%', rank: 1 },
      { name: 'Tejas S. Sawant', score: '99.0%', rank: 2 }
    ],
    attachmentUrl: '#'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Lush Green Administrative Plaza Aerial View',
    category: 'campus',
    mediaUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    description: 'Our award-winning 30-acre state-of-the-art academic layout.'
  },
  {
    id: 'gal-2',
    title: 'Computer Research Wing & Coding Terminals',
    category: 'campus',
    mediaUrl: computerLabImg,
    mediaType: 'image',
    description: 'Students working on modern computer terminals and digital curriculum.'
  },
  {
    id: 'gal-3',
    title: 'Annual Athletic Championship 100m Track',
    category: 'sports',
    mediaUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    description: 'Senior boys track competition during the annual athletic festival.'
  },
  {
    id: 'gal-4',
    title: 'Eminent Guest Address during AURA Tech Symposium',
    category: 'events',
    mediaUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    description: 'A crowded auditorium discussing robotics advancements.'
  },
  {
    id: 'gal-5',
    title: 'Kala Darpan Traditional Dance Showcase',
    category: 'cultural',
    mediaUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    description: 'Students celebrating cultural heritage during regional classical finals.'
  },
  {
    id: 'gal-6',
    title: 'Chemistry Fluid Dynamics Lab Practical Study',
    category: 'events',
    mediaUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    description: 'Senior secondary students verifying chemical catalysts with teachers.'
  }
];

export const CLASS_SCHEDULES: ClassSchedule[] = [
  {
    id: 'sch-1',
    department: 'College',
    className: 'S.Y. B.Sc. CompSci',
    day: 'Monday',
    subject: 'Data Structures & Algorithms',
    time: '09:00 AM - 10:30 AM',
    room: 'Lab 4, Comp Sci Wing',
    teacher: 'Prof. Shruti S. Kulkarni'
  },
  {
    id: 'sch-2',
    department: 'College',
    className: 'S.Y. B.Sc. CompSci',
    day: 'Monday',
    subject: 'Probability & Stat Analytics',
    time: '11:00 AM - 12:30 PM',
    room: 'Lecture Hall 12',
    teacher: 'Mr. Nitin M. Shah'
  },
  {
    id: 'sch-3',
    department: 'MAV',
    className: '12th Grade Science',
    day: 'Tuesday',
    subject: 'Electromagnetism Lecture',
    time: '08:30 AM - 10:00 AM',
    room: 'Senior Physics Lab',
    teacher: 'Mr. Shekhar K. Sawant'
  }
];

export const LIBRARY_BOOKS: LibraryBook[] = [
  { id: 'bk-1', title: 'Calculus: Early Transcendentals', author: 'James Stewart', isbn: '978-0534393212', category: 'Mathematics', status: 'Available' },
  { id: 'bk-2', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '978-0262033848', category: 'Computer Science', status: 'Available' },
  { id: 'bk-3', title: 'Organic Chemistry Volume 2', author: 'I. L. Finar', isbn: '978-0582441095', category: 'Chemistry', status: 'Reserved' },
  { id: 'bk-4', title: 'A Brief History of Time', author: 'Stephen Hawking', isbn: '978-0553380163', category: 'Physics', status: 'Available' }
];
