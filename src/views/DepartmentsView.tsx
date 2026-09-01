import { useState, useEffect } from 'react';
import { FacultyMember, DepartmentType } from '../types';
import { INITIAL_FACULTY, INITIAL_GALLERY } from '../data/mockData';
import { JUNIOR_COLLEGE_STAFF, JuniorCollegeStaff } from '../data/juniorCollegeStaff';
import {
  BookOpen,
  Users,
  Award,
  FlaskConical,
  GraduationCap,
  Sparkles,
  Trophy,
  ArrowRight,
  School,
  Activity,
  Milestone,
  Building2,
  Laptop,
  Check,
  Copy,
  FileText,
  ChevronRight,
  Share2,
  Globe,
  Calendar,
  Layers,
  Search,
  Filter,
  Flame,
  CheckCircle,
  MapPin,
  Clock,
  Compass,
  LayoutGrid,
  UserCheck,
  User,
  Briefcase,
  Mail,
  Medal,
  Building,
  Star,
  Shield
} from 'lucide-react';

import EMSDeptView from '../components/EMSDeptView';
import SKPPVDeptView from '../components/SKPPVDeptView';
import HscResultsChart from '../components/HscResultsChart';
import HscToppersTable from '../components/HscToppersTable';
import InfrastructureFacilitiesCarousel from '../components/InfrastructureFacilitiesCarousel';
import SportsAthleticsSection from '../components/SportsAthleticsSection';
import MAVStaffSection from '../components/MAVStaffSection';
import ExecutiveDesk from '../components/ExecutiveDesk';
import PrincipalMessageDesk from '../components/PrincipalMessageDesk';
import EMSPrincipalMessageDesk from '../components/EMSPrincipalMessageDesk';

const mavKeyMetrics = [
  {
    icon: Calendar,
    titleEn: "Est. Year",
    titleMr: "स्थापना वर्ष",
    valueEn: "1938 / १९३८",
    detailsEn: "Est. June 2, 1938 by Late Gajananrao Deshpande as 'Middle School', renamed in 1948 in memory of Mahatma Gandhi.",
    detailsMr: "२ जून १९३८ रोजी कै. गजाननराव देशपांडे यांनी 'मिडल स्कूल' म्हणून सुरुवात केली, १९४८ मध्ये महात्मा गांधी यांच्या स्मृत्यर्थ नाव दिले.",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/30"
  },
  {
    icon: Users,
    titleEn: "Current Strength",
    titleMr: "सध्याची पटसंख्या",
    valueEn: "3,000+ Students / ३,०००+ विद्यार्थी",
    detailsEn: "Quality education across primary, secondary, and higher secondary wings.",
    detailsMr: "प्राथमिक, माध्यमिक व उच्च माध्यमिक विभागात ३,००० हून अधिक विद्यार्थ्यांना दर्जेदार शिक्षण.",
    color: "text-blue-400 bg-blue-400/10 border-blue-400/30"
  },
  {
    icon: Building,
    titleEn: "Infrastructure",
    titleMr: "पायाभूत सुविधा",
    valueEn: "4-Story Building | 11,611 Books Library | Bafna Auditorium | CCTV",
    detailsEn: "4-Story Building, 11,611 Books Library, Bafna Auditorium & CCTV surveillance.",
    detailsMr: "४ मजली इमारत, ११,६११ पुस्तकांचे ग्रंथालय, बाफना रंगमंदिर व संपूर्ण परिसरात सीसीटीव्ही.",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30"
  },
  {
    icon: Laptop,
    titleEn: "Laboratories",
    titleMr: "प्रयोगशाळा",
    valueEn: "Modern Science Labs & 2 Computer Labs (130 Computers) | Smart Classes",
    detailsEn: "Modern Science Labs & 2 Computer Labs (130 Computers) with Smart Classes.",
    detailsMr: "अत्याधुनिक विज्ञान प्रयोगशाळा, १३० संगणकांनी सुसज्ज २ संगणक लॅब्स व स्मार्ट क्लासेस.",
    color: "text-purple-400 bg-purple-400/10 border-purple-400/30"
  },
  {
    icon: User,
    titleEn: "Staff Strength",
    titleMr: "कर्मचारी संख्या",
    valueEn: "92 Staff Members / ९२ कर्मचारी",
    detailsEn: "1 Principal, 1 Vice Principal, 2 Supervisors, 73 Teachers, 15 Non-Teaching Staff.",
    detailsMr: "१ मुख्याध्यापक, १ उपमुख्याध्यापक, २ पर्यवेक्षक, ७३ शिक्षक, १५ शिक्षकेतर कर्मचारी.",
    color: "text-rose-400 bg-rose-400/10 border-rose-400/30"
  },
  {
    icon: Trophy,
    titleEn: "Co-Curricular",
    titleMr: "सहशालेय सुविधा",
    valueEn: "NCC Air Force Wing, Sports Ground, Indoor/Outdoor Gym, Music Room & Art Gallery",
    detailsEn: "NCC Air Force Wing, Sports Ground, Indoor/Outdoor Gym, Music Room & Art Gallery.",
    detailsMr: "एन.सी.सी. एअरफोर्स विंग, क्रीडांगण, जिम, संगीत कक्ष व कलादालन यांसारख्या सुविधा.",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30"
  }
];

const mavAcademicStandards = [
  {
    icon: Award,
    titleEn: "Special Quality Rating",
    titleMr: "विशेष स्तराचे मानांकन",
    tag: "Campaign 2025-26",
    detailsEn: "Achieved 'Special Grade Ranking' in Pune District Educational Quality Enhancement Campaign 2025-26 (Grades 5th to 10th).",
    detailsMr: "पुणे जिल्हा शैक्षणिक गुणवत्ता संवर्धन अभियान २०२५-२६ मध्ये इयत्ता ५ वी ते १० वी गटात 'विशेष स्तराचे मानांकन' प्राप्त.",
    color: "border-amber-400/30 text-amber-400 bg-amber-400/10"
  },
  {
    icon: Trophy,
    titleEn: "10-Year SSC Result Record",
    titleMr: "१० वर्षांचा उज्ज्वल निकाल",
    tag: "91% to 100% Results",
    detailsEn: "Consistently maintained 91% to 100% top results in SSC Board examinations over the last 10 years.",
    detailsMr: "माध्यमिक (SSC) शालांत परीक्षांमध्ये मागील १० वर्षांत सातत्याने ९१% ते १००% उच्चांकी निकाल.",
    color: "border-emerald-400/30 text-emerald-400 bg-emerald-400/10"
  },
  {
    icon: GraduationCap,
    titleEn: "Scholarship Guidance",
    titleMr: "शिष्यवृत्ती मार्गदर्शन",
    tag: "63 Merit Students (2026-27)",
    detailsEn: "In the 2026-27 academic year, the only school in the district to secure a spot on the merit list for 63 total students: 11 students in 5th Grade Scholarship, 22 students in 7th Grade Scholarship, 30 students in 8th Grade Scholarship, and 15 students in the NMMS Examination.",
    detailsMr: "सन २०२६-२७ मध्ये इ. ५वी शिष्यवृत्ती परीक्षेत ११ विद्यार्थी, ७वी शिष्यवृत्ती परीक्षेत २२ विद्यार्थी, ८वी शिष्यवृत्ती परीक्षेत ३० विद्यार्थी तर NMMS परीक्षेत १५ विद्यार्थी, असे एकूण ६३ विद्यार्थ्यांनी गुणवत्ता यादीत स्थान मिळविणारे जिल्ह्यातील एकमेव विद्यालय.",
    color: "border-blue-400/30 text-blue-400 bg-blue-400/10"
  },
  {
    icon: Medal,
    titleEn: "Competitive Exams",
    titleMr: "ऑलिम्पियाड व चित्रकला",
    tag: "99%+ Pass & Gold Medals",
    detailsEn: "Over 99% results and gold medal tradition annually in Olympiad (SOF) and Govt. Drawing Examinations.",
    detailsMr: "ऑलिम्पियाड (SOF) व सरकारी चित्रकला परीक्षांमध्ये दरवर्षी ९९% पेक्षा जास्त निकाल व सुवर्णपदके.",
    color: "border-purple-400/30 text-purple-400 bg-purple-400/10"
  }
];

const mavHallOfFame = [
  {
    id: "hof-1",
    titleEn: "State Rank 1 Holder",
    titleMr: "राज्यात प्रथम क्रमांक",
    nameEn: "Vaibhav Vitthal Gorde",
    nameMr: "वैभव विठ्ठल गोरडे",
    tagEn: "SSC March 2005 - Rank 1",
    tagMr: "SSC मार्च २००५ - महाराष्ट्रात १ ला",
    detailsEn: "Secured 1st Rank in Maharashtra State in the SSC March 2005 Board Examination.",
    detailsMr: "मार्च २००५ च्या माध्यमिक शालांत (SSC) परीक्षेत महाराष्ट्रात प्रथम क्रमांक.",
    icon: Star,
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40"
  },
  {
    id: "hof-2",
    titleEn: "National & State Level School Games Achievements",
    titleMr: "राष्ट्रीय व राज्यस्तरीय शालेय क्रीडा यश",
    nameEn: "National & State Level Sports Achievers",
    nameMr: "राष्ट्रीय व राज्यस्तरीय क्रीडापटू विद्यार्थी",
    tagEn: "National Recognition",
    tagMr: "राष्ट्रीय सन्मान",
    detailsEn: "Continuing to create successful players from our Vidyalay...",
    detailsMr: "आमच्या विद्यालयातून यशस्वी खेळाडू घडवण्याची परंपरा निरंतर सुरू...",
    icon: Trophy,
    badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40"
  },
  {
    id: "hof-3",
    titleEn: "NCC Air Force Wing & Discipline",
    titleMr: "एन.सी.सी. व स्काउट-गाइड",
    nameEn: "Active NCC Unit Operating Since 1988",
    nameMr: "१९८८ पासून एन.सी.सी. एअरफोर्स विंग",
    tagEn: "Discipline & Leadership",
    tagMr: "शिस्त व देशप्रेम",
    detailsEn: "Active NCC Air Force Wing unit operating since 1988, instilling leadership, national pride, and discipline.",
    detailsMr: "१९८८ पासून एन.सी.सी. एअरफोर्स विंग व स्काउट-गाइड द्वारे शिस्त व देशप्रेमाची रुजवणूक.",
    icon: Shield,
    badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/40"
  }
];

interface DepartmentsViewProps {
  facultyList: FacultyMember[];
  initialDept?: DepartmentType;
  onNavigateTab?: (tab: string) => void;
}

export default function DepartmentsView({ facultyList, initialDept, onNavigateTab }: DepartmentsViewProps) {
  const [activeDept, setActiveDept] = useState<DepartmentType>(initialDept || 'College');
  const [scienceSubTab, setScienceSubTab] = useState<'brochure' | 'banner' | 'toolkit'>('brochure');
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>('both');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedBannerTheme, setSelectedBannerTheme] = useState<'scientific' | 'academic' | 'future'>('scientific');

  // EMS Staff specific States
  const [staffSearchQuery, setStaffSearchQuery] = useState('');
  const [activeStaffSection, setActiveStaffSection] = useState<'all' | 'secondary' | 'primary' | 'pre-primary'>('all');

  // Junior College Staff specific States
  const [jcSearchQuery, setJcSearchQuery] = useState('');
  const [jcSubjectFilter, setJcSubjectFilter] = useState('All');

  useEffect(() => {
    if (initialDept) {
      setActiveDept(initialDept);
    }
  }, [initialDept]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const getDeptLabel = (dept: string) => {
    if (dept === 'College') return 'Junior College';
    if (dept === 'MAV') return 'Mahatma Gandhi Vidyalay';
    if (dept === 'EMS') return 'English Medium School';
    if (dept === 'SKPPV') return 'Sheth Kesharchand Parakh Prathamik Vidyalay';
    return dept;
  };

  const deptsInfo = {
    College: {
      fullName: 'K.T.E.S - Mahatma Gandhi Junior College',
      slogan: 'Nurturing Future Scientists & Research Scholars',
      bgImg: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      description: 'Our Junior College specializes exclusively in the Science stream for 11th and 12th standard, focused on building a strong academic foundation.',
      programs: [
        { name: '11th Standard Science Stream (Class XI / ११ वी विज्ञान शाखा)', duration: '1 Year / १ वर्ष', eligibility: '10th Standard Passed / १० वी परीक्षा उत्तीर्ण' },
        { name: '12th Standard Science Stream (Class XII / १२ वी विज्ञान शाखा)', duration: '1 Year / १ वर्ष', eligibility: '11th Standard Science Passed / ११ वी विज्ञान उत्तीर्ण' }
      ],
      facilities: ['Separate highly equipped Laboratories (Physics, Chemistry, Biology)', 'Smart interactive digital classroom set-ups', 'Advanced Computer Lab with 50 connected systems', 'Specialized CET / NEET / JEE prep sessions'],
      placements: ['Direct academic & career counselling services', 'Highly reputable engineering & medical collegiate admissions tracker'],
      resultsSummary: { passRate: '100%', boardToppers: 'Consistent regional toppers & perfect pass outturns' }
    },
    MAV: {
      fullName: 'Mahatma Gandhi Vidyalay',
      slogan: 'Excellence in Marathi & Semi-English Medium Education',
      bgImg: '',
      description: 'The Mahatma Gandhi Vidyalay wing provides comprehensive schooling for 5th to 10th standard students in both Marathi and Semi-English mediums, building a strong academic foundation for State Board (SSC) examinations while continuously striving for the all-round development of students.',
      programs: [
        { name: 'Upper Primary Division (Classes 5 to 8) / उच्च प्राथमिक विभाग (इयत्ता ५ वी ते ८ वी)', duration: '4 Years / ४ वर्षे', eligibility: 'Passed Class 4 / ४ थी उत्तीर्ण' },
        { name: 'Secondary Division (Classes 9 to 10) / माध्यमिक विभाग (इयत्ता ९ वी ते १० वी)', duration: '2 Years / २ वर्षे', eligibility: 'Passed Class 8 / ८ वी उत्तीर्ण' }
      ],
      facilities: ['Separate highly equipped science lab / स्वतंत्र सुसज्ज विज्ञान प्रयोगशाळा', 'Spacious school playground / प्रशस्त खेळण्याचे मैदान', 'Traditional performing arts hall / पारंपारिक कला व नाटक हॉल'],
      placements: ['Higher secondary education alignment', 'Eminent academic counselors guiding transition to junior colleges'],
      resultsSummary: { passRate: '100%', boardToppers: 'SSC Board 100% results history / शालांत परीक्षेत १००% निकालांची उज्ज्वल परंपरा' }
    },
    EMS: {
      fullName: 'English Medium School',
      slogan: 'Nurturing Global Thinkers via Comprehensive SSC Formats',
      bgImg: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
      description: 'The English Medium School offers modular child-centric secondary schooling (Grades 1 to 10), centering on modern STEM curriculums, robotic kits, personal digital notebooks and cultural fine arts festivals.',
      programs: [
        { name: 'SSC Secondary (Classes 5-10)', duration: '6 Years', eligibility: 'Passed class 4' },
        { name: 'Primary School (Classes 1-4)', duration: '4 Years', eligibility: 'Passed KG' }
      ],
      facilities: ['Modular robotics and IoT prototype kits', 'Sound-proofed high-performance audio-visual media centers', 'Multi-sport tennis and basketball courts'],
      placements: ['Pre-scholarship alerts and global student debate forums'],
      resultsSummary: { passRate: '100%', boardToppers: 'SSC Merit Scholarship qualifiers, Chinmayee D. (99.4%)' }
    },
    SKPPV: {
      fullName: 'Sheth Kesharchand Parakh Prathamik Vidyalay',
      slogan: 'Early Childhood Care and Play-way Skill Development',
      bgImg: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      description: 'Pioneering early stage childhood development since decades, the Sheth Kesharchand Parakh Prathamik Vidyalay preschool wing prioritizes Montessori play-way schemas, personal care, fine motor skills and creative cognitive development.',
      programs: [
        { name: 'Preschool Division (Nursery, LKG, UKG)', duration: '3 Years', eligibility: 'Age 3+ years' },
        { name: 'Preparatory primary classes (Grades 1 & 2)', duration: '2 Years', eligibility: 'Completed UKG' }
      ],
      facilities: ['Lively indoor toy zone & sand pit areas', 'Toddlers safety monitoring, CCTV access', 'Montessori sensory training boards'],
      placements: ['Seamless admission conversion parameters to primary English Medium School wings'],
      resultsSummary: { passRate: '100%', boardToppers: 'Regional child art competitions first prize award winners' }
    }
  };

  const currentInfo = deptsInfo[activeDept];

  // Dynamic filter for faculty belonging to selected department
  const deptFaculty = facultyList.filter(
    (fac) => fac.department.toLowerCase() === activeDept.toLowerCase()
  );

  // Filter gallery items related to selected department (e.g. general matching)
  const deptImages = INITIAL_GALLERY.slice(0, 3); // showing general academic previews

  // EMS SCHOOL CONTENT VARIABLES
  // History & Statistics data
  const historyStats = [
    { labelEn: 'Est. Year', labelMr: 'स्थापना वर्ष', value: 'June 1989' },
    { labelEn: 'Start Date', labelMr: 'सुरू झाल्याची तारीख', value: '15.06.1989' },
    { labelEn: 'First Pupils count', labelMr: 'स्थापनेवेळची संख्या', value: '26 Students (Junior KG)' },
    { labelEn: 'Classrooms', labelMr: 'वर्गखोल्या', value: '45 Rooms' },
    { labelEn: 'Total Enrolled', labelMr: 'एकूण विद्यार्थी', value: '1470 (2025-26)' },
    { labelEn: 'First Batch Passing', labelMr: 'पहिली एसएससी बॅच', value: 'Academic Year 1988-89' }
  ];

  // Former and Current Principals
  const principalData = {
    current: {
      nameEn: 'Mr. Ganesh Dethe Sir',
      nameMr: 'श्री. गणेश देठे सर',
      roleEn: 'Current Academic Principal',
      roleMr: 'विद्यमान मुख्याध्यापक',
      joined: '01-05-2026',
      qual: 'M.Sc. M.Ed, DSM'
    },
    first: {
      nameEn: 'Mr. Shaikh Sir',
      nameMr: 'श्री. शेख सर',
      roleEn: 'First Principal (1989)',
      roleMr: 'पहिले मुख्याध्यापक'
    },
    former: [
      { en: 'Mr. Kulkarni Sir', mr: 'श्री. कुलकर्णी सर' },
      { en: 'Smt. Sambhus Madam', mr: 'सौ. संभुस मॅडम' },
      { en: 'Smt. Nair Madam', mr: 'सौ. नायर मॅडम' },
      { en: 'Mr. Ganesh Dethe Sir', mr: 'श्री. गणेश देठे सर' },
      { en: 'Smt. Anita Gujrathi Madam', mr: 'सौ. अनिता गुजराती मॅडम' },
      { en: 'Mr. Chitalkar Yashwant Sir', mr: 'श्री. चितळकर यशवंत सर' },
      { en: 'Smt. Thakur Jyoti Madam', mr: 'सौ. ठाकूर ज्योती मॅडम' },
      { en: 'Smt. Bhujbal Manisha Madam', mr: 'सौ. भुजबळ मनिषा मॅडम' },
      { en: 'Smt. Medge Mansi Madam', mr: 'सौ. मेडगे मानसी मॅडम' },
      { en: 'Mr. Prasad John Sir', mr: 'श्री. प्रसाद जॉन सर' }
    ]
  };

  // SSC Results Table
  const sscResults = [
    { year: '2015-16', count: 111, result: '100%', topper: 'Sejal Santosh Baldota', topperPct: '96.20%', distinction: 60 },
    { year: '2016-17', count: 96, result: '98.96%', topper: 'Shruti Sanjay Ghanwat', topperPct: '97.60%', distinction: 55 },
    { year: '2017-18', count: 131, result: '99.24%', topper: 'Vaishnavi Vikas Bhujbal', topperPct: '97.40%', distinction: 94 },
    { year: '2018-19', count: 136, result: '99.26%', topper: 'Sakshi Mahavir Baldota', topperPct: '94.20%', distinction: 66 },
    { year: '2019-20', count: 174, result: '100%', topper: 'Saurabh Arun Jadhav', topperPct: '96.20%', distinction: 116 },
    { year: '2020-21', count: 144, result: '100%', topper: 'Anushka Vijay Tanpure', topperPct: '96.60%', distinction: 70 },
    { year: '2021-22', count: 157, result: '98.72%', topper: 'Yashaswi Jagdish Jangid', topperPct: '95.20%', distinction: 95 },
    { year: '2022-23', count: 144, result: '100%', topper: 'Swara Suresh Thorat / Atharva Arun Bhor', topperPct: '97.40% / 97.40%', distinction: 84 },
    { year: '2023-24', count: 145, result: '100%', topper: 'Borhade Anwita Raghunath', topperPct: '97.6%', distinction: 93 },
    { year: '2024-25', count: 138, result: '99.27%', topper: 'Toke Samruddhi Anilkumar', topperPct: '97%', distinction: 102 },
    { year: '2025-26', count: 142, result: '100%', topper: 'Vaishnavi Anil Satkar', topperPct: '96.6%', distinction: 92 }
  ];

  // Scholarship Exams Data
  const scholarshipV = [
    { year: '2020-21', appeared: 27, passed: 27, result: '100%', eligible: 6, highlightEn: 'Mugdha Raju Shinde - 4th at state level', highlightMr: 'मुग्धा राजू शिंदे - राज्य पातळीवर ४ थी' },
    { year: '2022-23', appeared: 82, passed: 77, result: '93%', eligible: 9, highlightEn: 'Aryan Santosh Abhankar - 49th at state level', highlightMr: 'आर्यन संतोष अभणकर - राज्य पातळीवर ४९ वा' },
    { year: '2023-24', appeared: 97, passed: 70, result: '72.16%', eligible: 11, highlightEn: '', highlightMr: '' },
    { year: '2024-25', appeared: 63, passed: 40, result: '63.49%', eligible: 8, highlightEn: '', highlightMr: '' }
  ];

  const scholarshipVIII = [
    { year: '2020-21', appeared: 24, passed: 23, result: '95%', eligible: 5, highlightEn: 'Atharva Arun Bhor - 26th at state level', highlightMr: 'अथर्व अरुण भोर - राज्य पातळीवर २६ वा' },
    { year: '2022-23', appeared: 42, passed: 39, result: '92%', eligible: 7, highlightEn: 'Arya Avinash Shinde - 23rd at state level', highlightMr: 'आर्या अविनाश शिंदे - राज्य पातळीवर २३ वी' },
    { year: '2023-24', appeared: 42, passed: 32, result: '76.19%', eligible: 4, highlightEn: 'Mugdha Raju Shinde - 19th at state level & 8th at district level', highlightMr: 'मुग्धा राजू शिंदे - राज्य पातळीवर १९ वी व जिल्हा पातळीवर ८ वी' },
    { year: '2024-25', appeared: 35, passed: 33, result: '94.28%', eligible: 6, highlightEn: '', highlightMr: '' }
  ];

  // MTSE & Olympiads
  const mtseData = [
    { year: '2022-23', students: '28 Students appeared', resultEn: 'Arya Avinash Shinde - 3rd at district level. 3 students got consolation prize.', resultMr: 'आर्या अविनाश शिंदे - जिल्हा पातळीवर ३ री. ३ विद्यार्थ्यांना उत्तेजनार्थ पारितोषिक.' },
    { year: '2023-24', students: '30 Students appeared', resultEn: 'Vaishnavi Anil Satkar – Consolation Prize.', resultMr: 'वैष्णवी अनिल सातकर – उत्तेजनार्थ पारितोषिक.' },
    { year: '2024-25', students: '30 Students appeared', resultEn: 'Iccha Ambar Takalkar - Consolation Prize.', resultMr: 'इच्छा अंबर टाकळकर - उत्तेजनार्थ पारितोषिक.' }
  ];

  const olympiadData = [
    { year: '2020-21', examEn: 'German Olympiad', examMr: 'जर्मन ऑलिम्पियाड', awardEn: 'Tanvi Balbhim Rale (1st at Level II), Trisha Sharad Gangare (1st at Level I)', awardMr: 'तन्वी बालभीम राळे (लेव्हल II मध्ये प्रथम), त्रिषा शरद गांगरे (लेव्हल I मध्ये प्रथम)' },
    { year: '2022-23', examEn: 'German Olympiad & NSO', examMr: 'जर्मन ऑलिम्पियाड आणि एनएसओ (NSO)', awardEn: 'Vaishnavi Anil Satkar (1st at district level in German), Rudra Pathare (3rd at National Level in NSO), Arohi Rahul Sandbhor (10th at state level in NSO)', awardMr: 'वैष्णवी अनिल सातकर (जर्मनमध्ये जिल्हा पातळीवर प्रथम), रुद्र पठारे (NSO मध्ये राष्ट्रीय पातळीवर ३ रा), आरोही राहुल सांडभोर (NSO मध्ये राज्य पातळीवर १० वी)' },
    { year: '2025-26', examEn: 'ITO Exam', examMr: 'आयटीオ (ITO) परीक्षा', awardEn: 'Excellence award - 12 students. State Toppers - 4 students.', awardMr: 'उत्कृष्टता पुरस्कार - १२ विद्यार्थी. राज्य पातळीवरील टॉपर - ४ विद्यार्थी.' }
  ];

  // Drawing & Science Departments
  const departmentsDetails = [
    {
      id: 'drawing',
      titleEn: 'Elementary & Intermediate Drawing Exam | Department of Art',
      titleMr: 'चित्रकला विभाग | एलिमेंटरी आणि इंटरमीजिएट शासकीय रेखाकला परीक्षा',
      descEn: "Since 1998, students of English Medium School have been appearing for government drawing grade exams. The result of this exam is consistently observed as 100%. Along with academics, the school also provides facilities for improving in the art faculty. The increase in the number of students in the 'A' grade shows teachers' efforts in developing artistic talent with confidence & passion.",
      descMr: "१९८८ सालापासून इंग्लिश मीडियम स्कूलचे विद्यार्थी शासकीय चित्रकला ग्रेड परीक्षेला बसत आहेत. या परीक्षेचा निकाल सातत्याने १००% लागला आहे. अभ्यासासोबतच शाळा कला शाखेत प्रगती करण्यासाठी सुविधा पुरवते. 'A' ग्रेड मिळवणाऱ्या विद्यार्थ्यांच्या संख्येत झालेली वाढ शिक्षकांचे प्रयत्न आणि विद्यार्थ्यांचा आत्मविश्वास व आवड दर्शवते."
    },
    {
      id: 'science',
      titleEn: 'Department of Science',
      titleMr: 'विज्ञान विभाग',
      descEn: 'The Department of Science gives opportunity to students to participate in various activities & do their best:',
      descMr: 'विज्ञान विभाग विद्यार्थ्यांना विविध उपक्रमांमध्ये सहभागी होण्याची आणि सर्वोत्तम कामगिरी करण्याची संधी देतो:',
      activities: [
        { en: 'Taluka level Maths Science exhibition', mr: 'तालुकास्तरीय गणित आणि विज्ञान प्रदर्शन' },
        { en: 'Olympiad Exam', mr: 'ऑलिम्पियाड परीक्षा' },
        { en: 'C.V. Raman Exam (Iccha Takalkar is selected for a visit to ISRO)', mr: 'सी.व्ही. रमण परीक्षा (इच्छा टाकळकर हिची इस्रो (ISRO) भेटीसाठी निवड झाली आहे)' },
        { en: 'Dr. Homi Bhabha Balvaidnyanik Exam', mr: 'डॉ. होमी भाभा बालवैज्ञानिक परीक्षा' },
        { en: 'Inspire Award', mr: 'इन्स्पायर अवॉर्ड' },
        { en: 'Science Exhibition at GMRT', mr: 'जीएमआरटी (GMRT) मधील विज्ञान प्रदर्शन' }
      ]
    }
  ];

  // Co-curricular Details
  const coCurricular = {
    generalEn: 'For the development and quality improvement of the students, internal and intermediate examinations are conducted in the school, and to give scope to their key qualities, tree planting and prize distribution ceremonies are held in the school. Sports clubs are organized.',
    generalMr: 'विद्यार्थ्यांच्या विकासासाठी आणि गुणवत्ता सुधारण्यासाठी शाळेत अंतर्गत व मध्यवर्ती परीक्षा घेतल्या जातात आणि त्यांच्यातील गुणांना वाव देण्यासाठी वृक्षारोपण आणि पारितोषिक वितरण समारंभ आयोजित केले जातात. क्रीडा क्लबचे आयोजन केले जाते.',
    creativeTitleEn: 'Creative Space: Music, Dance, and Drama',
    creativeTitleMr: 'कला आणि सांस्कृतिक मंच',
    creativeDescEn: 'We offer a creative space for dance, music and drama that helps students build confidence and express themselves. K.T.E.S. English Medium School had organised various competitions for the students. Our students stood out and bagged prizes at different levels (Taluka and State level):',
    creativeDescMr: 'आम्ही नृत्य, संगीत आणि नाटकांसाठी एक सर्जनशील मंच प्रदान करतो, ज्यामुळे विद्यार्थ्यांना आत्मविश्वास निर्माण करण्यास आणि स्वतःला व्यक्त करण्यास मदत होते. के.टी.ई.एस. इंग्लिश मीडियम स्कूलने विद्यार्थ्यांसाठी विविध स्पर्धांचे आयोजन केले थे. आमच्या विद्यार्थ्यांनी तालुका आणि राज्य पातळीवर उत्कृष्ट यश संपादन केले:',
    creativeWinners: [
      { en: 'Khushi Deshmukh: Won 2nd prize in singing competition (Swarmalhar) since 2 years & also won 1st prize in Nadmalhar Competition since 3 years.', mr: 'खुशी देशमुख: सलग २ वर्षे गायन स्पर्धेत (स्वरमल्हार) द्वितीय क्रमांक आणि सलग ३ वर्षे नादमल्हार स्पर्धेत प्रथम क्रमांक पटकावला.' },
      { en: 'Yadnesh Walunj: Won 2nd prize in singing competition.', mr: 'यज्ञेश वाळूंज: गायन स्पर्धेत द्वितीय क्रमांक मिळवला.' },
      { en: 'Vedant Salawe: Won 3rd prize in Naadmalhar competition.', mr: 'वेदांत साळवे: नादमल्हार स्पर्धेत तृतीय क्रमांक मिळवला.' }
    ],
    nationalWinners: [
      { titleEn: 'Science Exhibition (Child Scientists)', titleMr: 'विज्ञान प्रदर्शन (बालवैज्ञानिक)', count: '2 students' },
      { titleEn: 'Sharad / Nritya Malhar Consecutive Winning Team', titleMr: 'शरद / नृत्य मल्हार सलग विजेते संघ', count: '7 years' },
      { titleEn: 'Nadamalar / Swar Malhar Winners', titleMr: 'नादमल्हार / स्वर मल्हार विजेते', count: '2 students' },
      { titleEn: 'Sports (Weightlifting) National Winner', titleMr: 'क्रीडा (वेटलिफ्टिंग) राष्ट्रीय विजेते', count: '1 Student' },
      { titleEn: 'MTS Exam National Ranker', titleMr: 'एमटीएस (MTS) परीक्षा राष्ट्रीय रँकर', count: '1 student' }
    ]
  };

  // Scout & Guide
  const scoutGuideData = {
    titleEn: 'Bharat Scout and Guide Activities',
    titleMr: 'भारत स्काऊट आणि गाईड',
    highlightEn: 'Smt. Angelina Vinod Bhakere was awarded with Rajya Bharat Scout and Guide Maharashtra State. She is a Leader trainer (Scout) and National level trainer, and is recognized as the First lady scout in India.',
    highlightMr: 'श्रीमती एंजेलीना विनोद भाकरे यांना महाराष्ट्र राज्याच्या राज्यपाल भवनात "लक्ष्मी मजुमदार राज्यस्तरीय पुरस्काराने" गौरवण्यात आले आहे. त्या लीडर ट्रेनर (स्काऊट) आणि राष्ट्रीय स्तरावरील मार्गदर्शक आहेत, तसेच भारतातील पहिल्या महिला स्काऊट म्हणून ओळखल्या जातात.',
    activitiesEn: [
      'State level camp, National level testing camp, and working as Examiner for state & national levels.',
      '14th National Jamboree (2002): 10 Scout & 10 Guide.',
      '15th National Jamboree (2005): 15 Scout & 6 Guide.',
      '21st World Jamboree (2007) - Hylands Park: Served as I.S.S. Member.',
      'State Rallies: Nashik (2006), Pune (2007) as In-charge for Maharashtra.',
      'District rallies: Active years since 2000.',
      'Award: Lakshmi Mazumdar State Level Award at Rajyapal Bhavan.',
      'Boscoree (National Level Gathering): Thanjavur (2022), Guwahati, Assam (2023), Nashik, Maharashtra (2024) - In-charge for Maharashtra Scout & Guide.'
    ],
    activitiesMr: [
      'राज्यस्तरीय कॅम्प, राष्ट्रीय स्तर चाचणी शिबिर आणि राज्य व राष्ट्रीय पातळीवर परीक्षक म्हणून कार्यरत.',
      '१४ वे राष्ट्रीय जांबोरी (२००२): १० स्काऊट आणि १० गाईड सहभागी.',
      '१५ वे राष्ट्रीय जांबोरी (२००५): १५ स्काऊट आणि ६ गाईड सहभागी.',
      '२१ वे जागतिक जांबोरी (२००७) - हायलांड्स पार्क: आय.एस.एस. (I.S.S.) सदस्य म्हणून सेवा बजावली.',
      'राज्य रॅली: नाशिक (२००६), पुणे (२००७) मध्ये महाराष्ट्राचे प्रमुख प्रभारी म्हणून नेतृत्व.',
      'जिल्हा रॅली: २००० सालापासून सातत्याने सक्रिय सहभाग.',
      'पुरस्कार: राज्यपाल भवनातून प्रतिष्ठित "लक्ष्मी मजुमदार राज्यस्तरीय पुरस्कार" प्राप्त.',
      'बॉस्कोरी (राष्ट्रीय मेळावा): तंजावर (२०२२), गुवाहाटी, आसाम (२०२३), नाशिक, महाराष्ट्र (२०२४) - महाराष्ट्र स्काऊट आणि गाईडचे प्रभारी अधिकारी.'
    ]
  };

  // Special Programs (Ananddayi Shanivar)
  const specialPrograms = {
    happySaturdayTitleEn: 'Ananddayi Shanivar (Happy Saturday)',
    happySaturdayTitleMr: 'आनंददायी शनिवार',
    happySaturdayDescEn: 'Every weekend is being celebrated as a ‘Happy Saturday’ with activity-based learning integrated into the school routine. The school conducts ‘Happy Saturday’ activities weekly for specified classes focusing on fostering qualities like cooperation and leadership.',
    happySaturdayDescMr: 'प्रत्येक शनिवार हा \'आनंददायी शनिवार\' म्हणून साजरा केला जातो, ज्यामध्ये विविध कृती-आधारित उपक्रम राबविले जातात. विद्यार्थ्यांमध्ये सहकार्य आणि नेतृत्व यांसारखे गुण रुजवण्यासाठी विशिष्ट वर्गांसाठी या साप्ताहिक उपक्रमांचे आयोजन केले जाते.',
    weeklyActivitiesEn: [
      'Yoga Day (Pranayam and Suryanamaskar).',
      'CCA Activities: Rakhi making, Mehndi, Ganpati making, Kite making, Lantern making, Fancy dress competition, Seed activity, Tree plantation, etc.',
      'Important Day Celebrations: Dindi, English Day, Marathi Day, Hindi Day, Science Day, Ganpati Arti, Shravani Shukrawar, National Days, Bhondala, etc.',
      'Field visits, Educational Trips, and Cultural Programmes.'
    ],
    weeklyActivitiesMr: [
      'योग दिन (प्राणायाम आणि सूर्यनमस्कार).',
      'CCA उपक्रम: राखी बनवणे, मेहंदी, गणपती मूर्ती बनवणे, पतंग बनवणे, कंदील बनवणे, फॅन्सी ड्रेस स्पर्धा, बीजारोपण, वृक्षारोपण इ.',
      'महत्त्वाच्या दिवसांचे उत्सव: दिंडी, इंग्रजी दिन, मराठी दिन, हिंदी दिन, विज्ञान दिन, गणपती आरती, श्रावणी शुक्रवार, राष्ट्रीय दिन, भोंडला इ.',
      'क्षेत्र भेटी, शैक्षणिक सहली आणि सांस्कृतिक कार्यक्रम.'
    ],
    sundarShalaTitleEn: 'Majhi Shala Sundar Shala',
    sundarShalaTitleMr: 'माझी शाळा सुंदर शाळा',
    sundarShalaDescEn: 'The Chief Minister’s ‘Majhi Shala Sundar Shala’ Campaign is a major educational initiative by the SARAL – Government of Maharashtra Education portal. K.T.E.S. English Medium School successfully participates in ‘Majhi Shala Sundar Shala’ every year.',
    sundarShalaDescMr: 'मुख्यमंत्री महोदयांची \'माझी शाळा सुंदर शाळा\' ही मोहीम महाराष्ट्र शासनाच्या सरल (SARAL) शिक्षण पोर्टलचा एक मुख्य उपक्रम आहे. के.टी.ई.एस. इंग्लिश मीडियम स्कूल दरवर्षी या मोहिमेत यशस्वीरित्या सहभाग घेते.'
  };

  // Infrastructure Facilities
  const facilitiesData = [
    { en: 'Science Lab', mr: 'विज्ञान प्रयोगशाळा' },
    { en: 'Computer Lab', mr: 'संगणक प्रयोगशाळा' },
    { en: 'Library', mr: 'ग्रंथालय / वाचनालय' },
    { en: 'Playground', mr: 'क्रीडांगण' },
    { en: 'CCTV Equipped Classrooms', mr: 'सीसीटीव्ही सुसज्ज वर्गखोल्या' },
    { en: 'Skating Ground', mr: 'स्केटिंग ग्राउंड' }
  ];

  // Committees
  const committees = {
    titleEn: 'School Committees & Academic Departments',
    titleMr: 'शालेय समित्या आणि शैक्षणिक विषय विभाग',
    items: [
      { nameEn: 'Discipline Committee', nameMr: 'शिस्त समिती', headEn: 'Academic Board', headMr: 'शिक्षक मंडळ' },
      { nameEn: 'Examination Committee', nameMr: 'परीक्षा समिती', headEn: 'Headed by Smt. Anuradha Gaikwad', headMr: 'प्रमुख: सौ. अनुराधा गायकवाड' },
      { nameEn: 'Cultural Committee', nameMr: 'सांस्कृतिक समिती', headEn: 'Headed by Smt. Pushpalata Satkar', headMr: 'प्रमुख: सौ. पुष्पलता सातकर' },
      { nameEn: 'Sports Committee', nameMr: 'क्रीडा समिती', headEn: 'Headed by Mr. Prathmesh Manjare', headMr: 'प्रमुख: श्री. प्रथमेश मंजरे' },
      { nameEn: 'Parent Teachers Association (PTA)', nameMr: 'शिक्षक पालक संघ (PTA)', headEn: 'Headed by Smt. Mansi Medge', headMr: 'प्रमुख: सौ. मानसी मेडगे' },
      { nameEn: 'Anti Bullying Committee', nameMr: 'अँटी बुलिंग (रागिंग विरोधी) समिती', headEn: 'Executive Board', headMr: 'मुख्य कार्यकारी समिती' },
      { nameEn: 'Safety and Hygiene Committee', nameMr: 'सुरक्षा आणि स्वच्छता समिती', headEn: 'Supervising Staff', headMr: 'पर्यवेक्षक कर्मचारी वर्ग' }
    ],
    deptsEn: ['English', 'Mathematics', 'Science', 'Social Science', 'Marathi', 'Hindi', 'Computer'],
    deptsMr: ['इंग्रजी', 'गणित', 'विज्ञान', 'सामाजिक शास्त्र', 'मराठी', 'हिंदी', 'संगणक विभाग']
  };

  // Complete Staff Directory Lists
  const staffSecondary = [
    { name: 'Mr. Ganesh Chandrbhan Dethe', desEn: 'Principal', desMr: 'मुख्याध्यापक', qual: 'M.Sc. M.Ed, DSM', joined: '01-05-2026' },
    { name: 'Smt. Mansi Santosh Medage', desEn: 'Vice Principal', desMr: 'उपमुख्याध्यापिका', qual: 'M.A. M.Ed', joined: '1.6.2025' },
    { name: 'Smt. Anuradha Dattatray Gaikwad', desEn: 'Supervisor', desMr: 'पर्यवेक्षिका', qual: 'B.Sc. B.Ed, DSM', joined: '06-09-2006' },
    { name: 'Smt. Jyoti Satyawan Thakur', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. M.Ed, DSM', joined: '14/6/1999' },
    { name: 'Smt. Jyoti Hemant Rathod', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed, DSM', joined: '08-12-2004' },
    { name: 'Smt. Vaishali Dilip Bacche', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. ATD', joined: '09-01-1999' },
    { name: 'Smt. Manisha Vikas Bhujbal', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '11-10-2003' },
    { name: 'Smt. Seema Ganesh Anande', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '06-01-2013' },
    { name: 'Smt. Rupali Jalinder Manjare', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '03-08-2016' },
    { name: 'Smt. Vasanti Nitin Gunjal', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '15/6/2017' },
    { name: 'Smt. Sakshi Ajay Mudrankit', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '19/6/2013' },
    { name: 'Smt. Sonali Jivan Sabale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: '17/08/2022' },
    { name: 'Smt. Urmila Santosh Aawate', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '07-01-2023' },
    { name: 'Smt. Sarika Vikas Ghanwat', desEn: 'Lab. Assistant', desMr: 'प्रयोगशाळा सहाय्यक', qual: 'B.Sc.', joined: '12-07-2021' },
    { name: 'Mr. Rushikesh Rajendra Khedkar', desEn: 'Clerk', desMr: 'लिपिक (क्लर्क)', qual: 'B.Com', joined: '03-08-2016' },
    { name: 'Smt. Sangita Shankar Rokade', desEn: 'Peon', desMr: 'शिपाई', qual: 'SSC', joined: '23/6/2005' },
    { name: 'Mr. Namdev Nivrutti Sandbhor', desEn: 'Peon', desMr: 'शिपाई', qual: '9th', joined: '05-02-2010' }
  ];

  const staffPrimary = [
    { name: 'Smt. Sunita Ramdas Pawar', desEn: 'Supervisor', desMr: 'पर्यवेक्षिका', qual: 'B.Com. D.Ed DSM', joined: '07-01-1994' },
    { name: 'Smt. Pushpalata Milind Satkar', desEn: 'Supervisor', desMr: 'पर्यवेक्षिका', qual: 'B.A. D.Ed', joined: '18/6/1996' },
    { name: 'Smt. Angelina Vinod Bhakare', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'S.S.C. DPED', joined: '14/6/1990' },
    { name: 'Smt. Ujwala Rajendra Pachpute', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '26/7/2004' },
    { name: 'Smt. Rahima Nazim Inamdar', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. D.Ed', joined: '09-01-2005' },
    { name: 'Smt. Deepali Nilesh Kumbhar', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: '19/6/2006' },
    { name: 'Smt. Manasi Sainath Shivale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. A.T.D. A.M', joined: '07-12-2006' },
    { name: 'Smt. Vanita Dnyaneshwar Shinde', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. TTC', joined: '07-10-2006' },
    { name: 'Smt. Smita Chandrashekhar Rale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '06-02-2008' },
    { name: 'Smt. Nayana Ramdas Hole', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. D.Ed', joined: '06-02-2008' },
    { name: 'Miss. Vasanti Manohar Tamhane', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Com', joined: '22/6/2009' },
    { name: 'Smt. Supriya Ganesh Thigale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. / MBA', joined: '07-01-2013' },
    { name: 'Smt. Supriya Ganesh Chaudhri', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. D.Ed', joined: '07-01-2014' },
    { name: 'Smt. Vidhya Dipak Kashid', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '06-08-2015' },
    { name: 'Smt. Hemangi Rakesh Patil', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Com. B.Ed', joined: '18/06/2015' },
    { name: 'Smt. Vidula Mahesh Deshmukh', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '12-08-2015' },
    { name: 'Smt. Adika Baban Divekar', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: '12-01-2018' },
    { name: 'Smt. Sushma Sopan Kale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '15/6/2018' },
    { name: 'Smt. Manisha Laxman Supe', desEn: 'Co-Teacher', desMr: 'सह-शिक्षिका', qual: 'B.Com. B.Ed', joined: '6/8/2018' },
    { name: 'Smt. Nilam Ganesh Totre', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.Sc. B.Ed', joined: '12/1/2022' },
    { name: 'Smt. Tarannum Shabbir Momin', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc.', joined: '06-08-2022' },
    { name: 'Smt. Aparna Mangesh Ronghe', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'HSC', joined: '06-08-2022' },
    { name: 'Smt. Smita Amol Raut', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.Com.', joined: '18/08/2022' },
    { name: 'Smt. Sayli Lokesh Chavan', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '15-06-2023' },
    { name: 'Smt. Vasudha Vikrant Wakchaure', desEn: 'Librarian', desMr: 'ग्रंथपाल', qual: 'B.A., Librarian', joined: '17-06-2017' },
    { name: 'Smt. Asha Shrihari Satpute', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: 'N/A' },
    { name: 'Smt. Ashwini Amol Mali', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: 'N/A' },
    { name: 'Smt. Sanjana Avinash Khangate', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'Quals N/A', joined: 'N/A' },
    { name: 'Smt. Aparna Rahul Tanpure', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: 'N/A' },
    { name: 'Smt. Rupali Somnath Medage', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. M.Ed', joined: 'N/A' },
    { name: 'Mr. Prathamesh Bhanudas Manjare', desEn: 'Asst. Teacher', desMr: 'क्रीडा शिक्षक / PT Teacher', qual: 'B.P.Ed', joined: 'N/A' },
    { name: 'Smt. Ankita Ganesh Pokharkar', desEn: 'Clerk', desMr: 'लिपिक (क्लर्क)', qual: 'B.Com', joined: '02-02-2022' },
    { name: 'Mr. Vishal Bharat Bhosale', desEn: 'Peon', desMr: 'शिपाई', qual: '8th', joined: '06-02-2008' },
    { name: 'Smt. Manisha Ramdas Chavan', desEn: 'Peon', desMr: 'शिपाई', qual: 'N/A', joined: '06-01-2011' },
    { name: 'Smt. Mangal Rahul Shinde', desEn: 'Peon', desMr: 'शिपाई', qual: '8th', joined: '06-01-2022' },
    { name: 'Smt. Manisha Dattatray Sandbhor', desEn: 'Peon', desMr: 'शिपाई', qual: '7th', joined: '21/11/2022' },
    { name: 'Smt. Manisha Shravan Adagale', desEn: 'Safai Kamgar', desMr: 'सफाई कामगार', qual: '7th', joined: '21/11/2022' },
    { name: 'Mr. Vishal Phulaware', desEn: 'Safai Kamgar', desMr: 'सफाई कामगार', qual: 'N/A', joined: 'N/A' },
    { name: 'Mr. Akshay Sunil Deshmukh', desEn: 'Peon (Night)', desMr: 'रात्रीचे शिपाई', qual: '10th', joined: '13/1/2022' }
  ];

  const staffPrePrimary = [
    { name: 'Smt. Monali Bhagvan Pacharane', desEn: 'Co-Teacher', desMr: 'सह-शिक्षिका', qual: 'H.S.C. D.Ed', joined: '15/6/2012' },
    { name: 'Smt. Sima Chandrakant Gaikwad', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '15/6/2022' },
    { name: 'Smt. Shweta Ganesh Satkar', desEn: 'Computer Teacher', desMr: 'संगणक शिक्षिका', qual: 'B.Sc. B.Ed / MCA', joined: '23/07/2014' },
    { name: 'Smt. Vrushali Rutuj Deshmukh', desEn: 'Computer Teacher', desMr: 'संगणक शिक्षिका', qual: 'MCS', joined: '25/06/2015' },
    { name: 'Smt. Hira Rohidas Kokane', desEn: 'Peon', desMr: 'शिपाई', qual: '10th', joined: '18-06-2025' }
  ];

  // Helper filter function for search
  const matchesSearch = (staffItem: any) => {
    const query = staffSearchQuery.toLowerCase();
    return (
      staffItem.name.toLowerCase().includes(query) ||
      staffItem.desEn.toLowerCase().includes(query) ||
      staffItem.desMr.toLowerCase().includes(query) ||
      staffItem.qual.toLowerCase().includes(query)
    );
  };

  const getFilteredStaff = () => {
    let list: any[] = [];
    if (activeStaffSection === 'all' || activeStaffSection === 'secondary') {
      list = [...list, ...staffSecondary.map(s => ({ ...s, section: 'Secondary Section | माध्यमिक विभाग' }))];
    }
    if (activeStaffSection === 'all' || activeStaffSection === 'primary') {
      list = [...list, ...staffPrimary.map(s => ({ ...s, section: 'Primary Section | प्राथमिक विभाग' }))];
    }
    if (activeStaffSection === 'all' || activeStaffSection === 'pre-primary') {
      list = [...list, ...staffPrePrimary.map(s => ({ ...s, section: 'Pre-Primary Section | पूर्व-प्राथमिक विभाग' }))];
    }
    return list.filter(matchesSearch);
  };

  const filteredJCStaff = JUNIOR_COLLEGE_STAFF.filter((staff) => {
    if (jcSubjectFilter !== 'All') {
      if (jcSubjectFilter === 'Teacher' && !(staff.subjectEn === 'Teacher' || staff.subjectEn === 'HOD' || staff.subjectEn === 'Supervisor')) {
        return false;
      }
      if (jcSubjectFilter === 'Lab Support' && staff.subjectEn !== 'Lab Support') {
        return false;
      }
      if (jcSubjectFilter === 'Support Staff' && staff.subjectEn !== 'Support Staff') {
        return false;
      }
      if (jcSubjectFilter !== 'Teacher' && jcSubjectFilter !== 'Lab Support' && jcSubjectFilter !== 'Support Staff' && staff.subjectEn !== jcSubjectFilter) {
        return false;
      }
    }
    if (jcSearchQuery.trim()) {
      const q = jcSearchQuery.toLowerCase();
      const matchesEn =
        staff.nameEn.toLowerCase().includes(q) ||
        staff.roleEn.toLowerCase().includes(q) ||
        (staff.joiningDateEn && staff.joiningDateEn.toLowerCase().includes(q)) ||
        staff.subjectEn.toLowerCase().includes(q);
      const matchesMr =
        staff.nameMr.toLowerCase().includes(q) ||
        staff.roleMr.toLowerCase().includes(q) ||
        (staff.joiningDateMr && staff.joiningDateMr.toLowerCase().includes(q)) ||
        staff.subjectMr.toLowerCase().includes(q);
      return matchesEn || matchesMr;
    }
    return true;
  });

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  return (
    <div className="space-y-16 pb-16 pt-6 relative z-10">
      {/* Dynamic Nav Tabs */}
      <section className="bg-slate-950/60 border border-white/10 rounded-2xl p-4 shadow-xl max-w-4xl mx-auto backdrop-blur-md">
        <label className="block text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
          Select Institutional Wing
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(['College', 'MAV', 'EMS', 'SKPPV'] as DepartmentType[]).map((tab) => (
            <button
              key={tab}
              id={`dept-tab-${tab}`}
              onClick={() => setActiveDept(tab)}
              className={`py-3.5 px-4 rounded-xl text-sm font-black tracking-tight transition-all uppercase cursor-pointer ${
                activeDept === tab
                  ? 'bg-secondary text-primary-dark shadow-xl'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {getDeptLabel(tab)}
            </button>
          ))}
        </div>
      </section>

      {/* Chairman's Message / Executive Desk Banner at top of department views */}
      <ExecutiveDesk />

      {/* Dedicated Principal's Message / प्राचार्यांचे मनोगत for Junior College & MGV */}
      {(activeDept === 'College' || activeDept === 'MAV') && (
        <PrincipalMessageDesk />
      )}

      {/* Dedicated Principal's Message / प्राचार्य संदेश for English Medium School (EMS) */}
      {activeDept === 'EMS' && (
        <EMSPrincipalMessageDesk />
      )}

      {activeDept === 'EMS' ? (
        <EMSDeptView />
      ) : activeDept === 'SKPPV' ? (
        <SKPPVDeptView />
      ) : (
        <>
          {/* Hero Presentation */}
      <section
        className="relative rounded-3xl min-h-[450px] overflow-hidden flex items-end shadow-2xl bg-cover bg-center bg-slate-900 border border-white/10"
        style={{
          backgroundImage: currentInfo.bgImg
            ? `linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.4)), url("${currentInfo.bgImg}")`
            : `linear-gradient(to top, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.85))`
        }}
      >
        <div className="absolute top-4 right-4 bg-amber-400 text-primary-dark text-xs font-bold font-display uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg max-w-[280px] md:max-w-none truncate">
          {getDeptLabel(activeDept)} Wing
        </div>
        <div className={`p-8 md:p-12 text-white space-y-4 relative z-10 ${activeDept === 'MAV' || activeDept === 'College' ? 'w-full max-w-6xl' : 'max-w-4xl'}`}>
          {activeDept === 'College' ? (
            <>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full border-b border-white/10 pb-6">
                <div className="space-y-2">
                  {/* Section Heading */}
                  <div className="space-y-1">
                    {(selectedLang === 'en' || selectedLang === 'both') && (
                      <span className="text-amber-400 font-display font-bold text-sm tracking-widest uppercase block">
                        Empowering Science Aspirants
                      </span>
                    )}
                    {(selectedLang === 'mr' || selectedLang === 'both') && (
                      <span className="text-amber-300 font-sans font-bold text-xs sm:text-sm tracking-wide uppercase block">
                        विज्ञान क्षेत्रातील महत्त्वाकांक्षांना नवी दिशा
                      </span>
                    )}
                  </div>

                  {/* Sub-heading */}
                  <h1 className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tight space-y-1 md:space-y-2">
                    {(selectedLang === 'en' || selectedLang === 'both') && (
                      <span className="block text-white" style={{ fontSize: '40px', lineHeight: '56.75px' }}>K.T.E.S - Mahatma Gandhi Junior College</span>
                    )}
                    {(selectedLang === 'mr' || selectedLang === 'both') && (
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans text-2xl md:text-4xl font-black" style={{ lineHeight: '53px' }}>
                        के.टी.ई.एस. -  महात्मा गांधी ज्युनिअर कॉलेज
                      </span>
                    )}
                  </h1>
                </div>

                {/* Language Controls */}
                <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl self-start lg:self-center shrink-0">
                  <button
                    onClick={() => setSelectedLang('en')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedLang === 'en' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    English Only
                  </button>
                  <button
                    onClick={() => setSelectedLang('mr')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedLang === 'mr' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    मराठी
                  </button>
                  <button
                    onClick={() => setSelectedLang('both')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedLang === 'both' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Dual Language
                  </button>
                </div>
              </div>

              {/* Description Paragraph */}
              <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2 pt-4">
                {(selectedLang === 'en' || selectedLang === 'both') && (
                  <p>
                    Our Junior College specializes exclusively in the Science stream for 11th and 12th standard, focused on building a strong academic foundation.
                  </p>
                )}
                {(selectedLang === 'mr' || selectedLang === 'both') && (
                  <p className="font-sans text-slate-350">
                    आमचे ज्युनिअर कॉलेज ११ वी आणि १२ वी च्या विद्यार्थ्यांसाठी केवळ विज्ञान शाखा (Science Stream) प्रदान करते, जी विद्यार्थ्यांचा भक्कम शैक्षणिक पाया रचण्यावर लक्ष केंद्रित करते.
                  </p>
                )}
              </div>
            </>
          ) : activeDept === 'MAV' ? (
            <>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full border-b border-white/10 pb-6">
                <div className="space-y-2">
                  {/* Section Heading */}
                  <div className="space-y-1">
                    {(selectedLang === 'en' || selectedLang === 'both') && (
                      <span className="text-amber-400 font-display font-bold text-sm tracking-widest uppercase block">
                        Excellence in Marathi Medium Education
                      </span>
                    )}
                    {(selectedLang === 'mr' || selectedLang === 'both') && (
                      <span className="text-amber-300 font-sans font-bold text-xs sm:text-sm tracking-wide uppercase block">
                        मराठी माध्यमातील दर्जेदार शिक्षण परंपरा
                      </span>
                    )}
                  </div>

                  {/* Sub-heading */}
                  <h1 className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tight space-y-1 md:space-y-2">
                    {(selectedLang === 'en' || selectedLang === 'both') && (
                      <span className="block text-white">Mahatma Gandhi Vidyalay</span>
                    )}
                    {(selectedLang === 'mr' || selectedLang === 'both') && (
                      <span 
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans text-2xl md:text-4xl font-black"
                        style={{ lineHeight: '56px' }}
                      >
                        महात्मा गांधी विद्यालय
                      </span>
                    )}
                  </h1>
                </div>

                {/* Language Controls */}
                <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl self-start lg:self-center shrink-0">
                  <button
                    onClick={() => setSelectedLang('en')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedLang === 'en' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    English Only
                  </button>
                  <button
                    onClick={() => setSelectedLang('mr')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedLang === 'mr' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    मराठी
                  </button>
                  <button
                    onClick={() => setSelectedLang('both')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedLang === 'both' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Dual Language
                  </button>
                </div>
              </div>

              {/* Description Paragraph */}
              <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2 pt-4">
                {(selectedLang === 'en' || selectedLang === 'both') && (
                  <p>
                    The Mahatma Gandhi Vidyalay wing provides comprehensive schooling for 5th to 10th standard students in both Marathi and Semi-English mediums, building a strong academic foundation for State Board (SSC) examinations while continuously striving for the all-round development of students.
                  </p>
                )}
                {(selectedLang === 'mr' || selectedLang === 'both') && (
                  <p className="font-sans text-slate-350">
                    महात्मा गांधी विद्यालय हे इयत्ता ५ वी ते १० वी च्या विद्यार्थ्यांसाठी मराठी तसेच सेमी-इंग्लिश माध्यमातून परिपूर्ण शिक्षण प्रदान करते, जे स्टेट बोर्ड (SSC) परीक्षेसाठी विद्यार्थ्यांचा भक्कम शैक्षणिक पाया तयार करते. जे विद्यार्थ्यांच्या सर्वांगीण विकासासाठी सातत्यपूर्ण प्रयत्न करते.
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <span className="text-amber-400 font-display font-bold text-sm tracking-widest uppercase block">
                {currentInfo.slogan}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tight">
                {currentInfo.fullName}
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {currentInfo.description}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Mahatma Gandhi Vidyalay (MAV) Wing - Key Metrics, Academic Standards & Hall of Fame */}
      {activeDept === 'MAV' && (
        <section id="mav-overview" className="space-y-12 relative z-10 font-sans border-b border-white/10 pb-12">
          {/* Key Metrics Section */}
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20 inline-block">
                {selectedLang === 'en' ? 'Key Metrics' : selectedLang === 'mr' ? 'प्रमुख ठळक वैशिष्ट्ये' : 'Key Metrics / प्रमुख ठळक वैशिष्ट्ये'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white">
                {selectedLang === 'en' ? 'School Pillars & Key Statistics' : selectedLang === 'mr' ? 'शाळेचे स्तंभ व प्रमुख आकडेवारी' : 'School Pillars & Key Statistics / शाळेचे स्तंभ व आकडेवारी'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans">
                {selectedLang === 'en'
                  ? 'Highlights of infrastructure, student strength, dedicated staff, and co-curricular facilities at Mahatma Gandhi Vidyalay.'
                  : selectedLang === 'mr'
                  ? 'महात्मा गांधी विद्यालयातील पायाभूत सुविधा, पटसंख्या, समर्पित शिक्षकवृंद व सहशालेय सुविधा.'
                  : 'Highlights of infrastructure, student strength, dedicated staff, and co-curricular facilities.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mavKeyMetrics.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between group space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-xl border ${item.color} transition-transform group-hover:scale-110 shrink-0`}>
                          <IconComp className="h-6 w-6" />
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">{item.titleEn}</span>
                          <span className="text-[11px] font-semibold text-slate-300 block">{item.titleMr}</span>
                        </div>
                      </div>

                      <div className="space-y-1 border-b border-white/10 pb-3">
                        <div className="font-display font-black text-base sm:text-lg text-white leading-snug">
                          {item.valueEn}
                        </div>
                      </div>

                      <div className="space-y-1 text-xs text-slate-300 leading-relaxed font-sans font-medium">
                        <p>{item.detailsEn}</p>
                        <p className="text-amber-200/90 italic font-normal text-[11px] pt-1">{item.detailsMr}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Standards & Features Section */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20 inline-block">
                {selectedLang === 'en' ? 'Academic Standard' : selectedLang === 'mr' ? 'गुणवत्तेचे शिक्षण' : 'Academic Standard / गुणवत्तेचे शिक्षण'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight">
                {selectedLang === 'en' ? 'Academic Excellence & Special Recognition' : selectedLang === 'mr' ? 'शैक्षणिक गुणवत्ता व विशेष सन्मान' : 'Academic Excellence / शैक्षणिक गुणवत्ता'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {selectedLang === 'en'
                  ? 'Academic milestones, scholarship achievements, competitive exam successes, and quality ratings earned by Mahatma Gandhi Vidyalay.'
                  : selectedLang === 'mr'
                  ? 'महात्मा गांधी विद्यालयाने संपादन केलेले शैक्षणिक टप्पे, शिष्यवृत्ती यश, स्पर्धा परीक्षा यश व गुणवत्ता मानांकने.'
                  : 'Academic milestones, scholarship achievements, competitive exam successes, and quality ratings.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {mavAcademicStandards.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/20 hover:bg-white/10 transition-all space-y-4 group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-xl border ${item.color} transition-transform group-hover:scale-110 shrink-0`}>
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                          {item.tag}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-white text-lg sm:text-xl group-hover:text-amber-400 transition-colors">
                          {item.titleEn}
                        </h3>
                        <h4 className="text-xs sm:text-sm font-semibold text-amber-300/90">
                          {item.titleMr}
                        </h4>
                      </div>

                      <div className="space-y-2 border-t border-white/10 pt-3">
                        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                          {item.detailsEn}
                        </p>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans text-amber-100/80 bg-white/5 p-3 rounded-xl border border-white/5">
                          {item.detailsMr}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hall of Fame / Proud Achievements Section */}
          <div className="space-y-8 border-t border-white/10 pt-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20 inline-block">
                {selectedLang === 'en' ? 'Hall of Fame' : selectedLang === 'mr' ? 'अभिमानास्पद यश व माजी विद्यार्थी' : 'Hall of Fame / अभिमानास्पद यश व माजी विद्यार्थी'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white">
                {selectedLang === 'en' ? 'Proud Achievements & Illustrious Achievers' : selectedLang === 'mr' ? 'अभिमानास्पद यश व गुणवंत विद्यार्थी' : 'Proud Achievements & Illustrious Achievers'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans">
                {selectedLang === 'en'
                  ? 'Celebrating our top rankers, national level sports stars, and decades of NCC Air Force Wing discipline.'
                  : selectedLang === 'mr'
                  ? 'आमचे गुणवंत विद्यार्थी, राष्ट्रीय क्रीडापटू व एन.सी.सी. एअरफोर्स विंगच्या शिस्तीचा गौरव.'
                  : 'Celebrating top rankers, national level sports stars, and decades of NCC Air Force Wing discipline.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {mavHallOfFame.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white/5 border border-amber-400/20 rounded-2xl p-6 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 group relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 group-hover:scale-110 transition-transform">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                          {item.tagEn}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                          {item.titleEn} / {item.titleMr}
                        </span>
                        <h3 className="font-display font-black text-white text-base sm:text-lg leading-snug">
                          {item.nameEn}
                        </h3>
                        <h4 className="text-xs font-semibold text-amber-200">
                          {item.nameMr}
                        </h4>
                      </div>

                      <div className="space-y-2 border-t border-white/10 pt-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        <p>{item.detailsEn}</p>
                        <p className="text-amber-100/90 font-medium italic bg-white/5 p-2.5 rounded-lg border border-white/5">
                          {item.detailsMr}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MAV Staff Directory with 4 Categories & Tabs */}
          <MAVStaffSection selectedLang={selectedLang} />
        </section>
      )}

      {/* Junior College Key Metrics & Detailed Content Cards */}
      {activeDept === 'College' && (
        <section id="junior-college-overview" className="space-y-8 font-sans relative z-10">
          {/* Key Metrics Grid */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-amber-400 block">
                  {selectedLang === 'en' ? 'At A Glance' : selectedLang === 'mr' ? 'महत्त्वाची आकडेवारी' : 'At A Glance / महत्त्वाची आकडेवारी'}
                </span>
                <h2 className="text-xl md:text-2xl font-display font-black text-white">
                  {selectedLang === 'en'
                    ? 'Junior College Key Metrics'
                    : selectedLang === 'mr'
                    ? 'ज्युनिअर कॉलेज प्रमुख ठळक वैशिष्ट्ये'
                    : 'Key Metrics / प्रमुख ठळक वैशिष्ट्ये'}
                </h2>
              </div>
              <span className="bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs px-3 py-1 rounded-full font-mono font-bold self-start sm:self-center">
                Est. 2008 / २००८
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Metric 1: Est. Year */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all shadow-xl group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">
                      {selectedLang === 'en' ? 'EST. YEAR' : selectedLang === 'mr' ? 'स्थापना वर्ष' : 'EST. YEAR / स्थापना वर्ष'}
                    </span>
                    <span className="text-lg font-bold font-display text-white">2008 / २००८</span>
                  </div>
                </div>
              </div>

              {/* Metric 2: Initial Intake */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all shadow-xl group">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#87CEEB]/10 border border-[#87CEEB]/20 text-[#87CEEB] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">
                      {selectedLang === 'en' ? 'INITIAL INTAKE' : selectedLang === 'mr' ? 'सुरुवातीची संख्या' : 'INITIAL INTAKE / सुरुवातीची संख्या'}
                    </span>
                    <div className="font-bold text-white text-base font-display">
                      {selectedLang === 'en' || selectedLang === 'both' ? '79 Students' : ''}
                      {selectedLang === 'both' ? ' / ' : ''}
                      {selectedLang === 'mr' || selectedLang === 'both' ? '७९ विद्यार्थी' : ''}
                    </div>
                    <p className="text-xs text-slate-400">
                      {selectedLang === 'en' ? '(1 Division)' : selectedLang === 'mr' ? '(१ तुकडी)' : '(1 Division / १ तुकडी)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric 3: Current Strength */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all shadow-xl group">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">
                      {selectedLang === 'en' ? 'CURRENT STRENGTH' : selectedLang === 'mr' ? 'सध्याची पटसंख्या' : 'CURRENT STRENGTH / सध्याची पटसंख्या'}
                    </span>
                    <div className="font-bold text-white text-base font-display">
                      {selectedLang === 'en' || selectedLang === 'both' ? '480 Students' : ''}
                      {selectedLang === 'both' ? ' / ' : ''}
                      {selectedLang === 'mr' || selectedLang === 'both' ? '४८० विद्यार्थी' : ''}
                    </div>
                    <p className="text-xs text-slate-400">
                      {selectedLang === 'en'
                        ? '6 Divisions (3 in 11th, 3 in 12th)'
                        : selectedLang === 'mr'
                        ? '६ तुकड्या (३ इयत्ता ११ वी, ३ इयत्ता १२ वी)'
                        : '6 Divisions: 3 in 11th, 3 in 12th / ६ तुकड्या'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric 4: Infrastructure */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all shadow-xl group">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-400/10 border border-purple-400/20 text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">
                      {selectedLang === 'en' ? 'INFRASTRUCTURE' : selectedLang === 'mr' ? 'पायाभूत सुविधा' : 'INFRASTRUCTURE / पायाभूत सुविधा'}
                    </span>
                    <div className="font-bold text-white text-xs sm:text-sm font-display leading-snug">
                      {selectedLang === 'en' || selectedLang === 'both' ? '3-Story Building | 24 Digital Classrooms | CCTV' : ''}
                      {selectedLang === 'both' ? ' / ' : ''}
                      {selectedLang === 'mr' || selectedLang === 'both' ? '३ मजली इमारत | २४ डिजिटल वर्गखोल्या | सीसीटीव्ही (CCTV)' : ''}
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric 5: Laboratories */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all shadow-xl group">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">
                      {selectedLang === 'en' ? 'LABORATORIES' : selectedLang === 'mr' ? 'प्रयोगशाळा' : 'LABORATORIES / प्रयोगशाळा'}
                    </span>
                    <div className="font-bold text-white text-xs sm:text-sm font-display leading-snug">
                      {selectedLang === 'en' || selectedLang === 'both'
                        ? 'Separate Physics, Chemistry, Biology & Computer Science/IT Labs'
                        : ''}
                      {selectedLang === 'both' ? ' / ' : ''}
                      {selectedLang === 'mr' || selectedLang === 'both'
                        ? 'स्वतंत्र भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र व संगणकशास्त्र/IT प्रयोगशाळा'
                        : ''}
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric 6: Staff Strength */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all shadow-xl group">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">
                      {selectedLang === 'en' ? 'STAFF STRENGTH' : selectedLang === 'mr' ? 'कर्मचारी संख्या' : 'STAFF STRENGTH / कर्मचारी संख्या'}
                    </span>
                    <div className="font-bold text-white text-base font-display">
                      {selectedLang === 'en' || selectedLang === 'both' ? '27 Staff' : ''}
                      {selectedLang === 'both' ? ' / ' : ''}
                      {selectedLang === 'mr' || selectedLang === 'both' ? '२७ कर्मचारी' : ''}
                    </div>
                    <p className="text-xs text-slate-400">
                      {selectedLang === 'en'
                        ? '(1 HOD, 1 Supervisor, 19 Teachers, 6 Non-Teaching)'
                        : selectedLang === 'mr'
                        ? '(१ विभाग प्रमुख, १ पर्यवेक्षक, १९ शिक्षक, ६ शिक्षकेतर)'
                        : '(1 HOD, 1 Supervisor, 19 Teachers, 6 Non-Teaching)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Quality Education & Academic Excellence */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl space-y-4 hover:border-amber-400/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block">
                      Academic Standard
                    </span>
                    <h3 className="text-lg font-display font-black text-white">
                      {selectedLang === 'en'
                        ? 'Quality Education & Academic Excellence'
                        : selectedLang === 'mr'
                        ? 'गुणवत्तेचे शिक्षण आणि शैक्षणिक उत्कृष्टता'
                        : 'Quality Education & Academic Excellence / गुणवत्तेचे शिक्षण आणि शैक्षणिक उत्कृष्टता'}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      {(selectedLang === 'en' || selectedLang === 'both') && (
                        <p className="text-white font-medium">
                          100% HSC Board Result Tradition: Consistent top academic performance across Science streams every year.
                        </p>
                      )}
                      {(selectedLang === 'mr' || selectedLang === 'both') && (
                        <p className="text-slate-300 font-sans mt-0.5">
                          १००% एचएससी (HSC) बोर्ड परीक्षा निकालाची उज्ज्वल आणि अखंड परंपरा.
                        </p>
                      )}
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      {(selectedLang === 'en' || selectedLang === 'both') && (
                        <p className="text-white font-medium">
                          Regular Guidance & Remedial Support: Doubt-solving sessions, continuous evaluation, and individual student care.
                        </p>
                      )}
                      {(selectedLang === 'mr' || selectedLang === 'both') && (
                        <p className="text-slate-300 font-sans mt-0.5">
                          विद्यार्थ्यांसाठी नियमित शैक्षणिक मार्गदर्शन, शंका निवारण व वैयक्तिक समुपदेशन.
                        </p>
                      )}
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      {(selectedLang === 'en' || selectedLang === 'both') && (
                        <p className="text-white font-medium">
                          Competitive Exam Coaching: Specialized preparation and mentoring for JEE (Main/Advanced), NEET, and MHT-CET.
                        </p>
                      )}
                      {(selectedLang === 'mr' || selectedLang === 'both') && (
                        <p className="text-slate-300 font-sans mt-0.5">
                          स्पर्धा परीक्षांच्या (JEE / NEET / MHT-CET) परिपूर्ण तयारीसाठी तंत्रशुद्ध मार्गदर्शन वर्ग.
                        </p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Proud Achievements & Alumni */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl space-y-4 hover:border-amber-400/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block">
                      Hall of Fame
                    </span>
                    <h3 className="text-lg font-display font-black text-white">
                      {selectedLang === 'en'
                        ? 'Proud Achievements & Alumni'
                        : selectedLang === 'mr'
                        ? 'अभिमानास्पद यश आणि माजी विद्यार्थी'
                        : 'Proud Achievements & Alumni / अभिमानास्पद यश आणि माजी विद्यार्थी'}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Alumni 1 */}
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      NEET
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-white text-sm">
                          {selectedLang === 'en' ? 'Master Arif Inamdar' : selectedLang === 'mr' ? 'कु. आरिफ इनामदार' : 'Master Arif Inamdar / कु. आरिफ इनामदार'}
                        </h4>
                        <span className="bg-emerald-400/20 text-emerald-300 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase shrink-0">MBBS</span>
                      </div>
                      {(selectedLang === 'en' || selectedLang === 'both') && (
                        <p className="text-xs text-slate-300">
                          Cleared NEET → Secured MBBS admission at Govt. Medical College, Mumbai.
                        </p>
                      )}
                      {(selectedLang === 'mr' || selectedLang === 'both') && (
                        <p className="text-xs text-slate-350 font-sans">
                          NEET परीक्षा उत्तीर्ण → शासकीय वैद्यकीय महाविद्यालय, मुंबई येथे MBBS प्रवेश प्राप्त.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Alumni 2 */}
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-blue-400/20 border border-blue-400/30 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      JEE
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-white text-sm">
                          {selectedLang === 'en' ? 'Miss Nisha Nakwe' : selectedLang === 'mr' ? 'कु. निशा नकवे' : 'Miss Nisha Nakwe / कु. निशा नकवे'}
                        </h4>
                        <span className="bg-blue-400/20 text-blue-300 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase shrink-0">IIST / Aero</span>
                      </div>
                      {(selectedLang === 'en' || selectedLang === 'both') && (
                        <p className="text-xs text-slate-300">
                          Cleared JEE Advanced → Secured Aeronautical Engineering at IIST, Thiruvananthapuram.
                        </p>
                      )}
                      {(selectedLang === 'mr' || selectedLang === 'both') && (
                        <p className="text-xs text-slate-350 font-sans">
                          JEE Advanced उत्तीर्ण → आयआयएसटी (IIST), तिरुअनंतपुरम येथे एरोनॉटिकल इंजिनिअरिंग प्रवेश.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Alumni 3 */}
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-amber-400/20 border border-amber-400/30 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      <Medal className="h-4 w-4" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-white text-sm">
                          {selectedLang === 'en' ? 'Miss Tanuja Rakshe' : selectedLang === 'mr' ? 'कु. तनुजा राक्षे' : 'Miss Tanuja Rakshe / कु. तनुजा राक्षे'}
                        </h4>
                        <span className="bg-amber-400/20 text-amber-300 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase shrink-0">National Bronze</span>
                      </div>
                      {(selectedLang === 'en' || selectedLang === 'both') && (
                        <p className="text-xs text-slate-300">
                          Won Bronze Medal in National Taekwondo Competition (2024).
                        </p>
                      )}
                      {(selectedLang === 'mr' || selectedLang === 'both') && (
                        <p className="text-xs text-slate-350 font-sans">
                          राष्ट्रीय ताइक्वांडो स्पर्धेत (२०२४) कांस्यपदक (Bronze Medal) विजेती.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Programs Offered */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Course details */}
        <div className="lg:col-span-8 space-y-8">
          {activeDept !== 'College' && (
            <>
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block">Curriculum Matrix</span>
                <h2 className="text-2.5xl font-display font-black text-white">Programs & Courses Conducted</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentInfo.programs.map((prog, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between hover:border-white/20 hover:bg-white/10 transition-all group"
                  >
                    <div className="space-y-4">
                      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-[#87CEEB] flex items-center justify-center group-hover:bg-secondary group-hover:text-primary-dark transition-all">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-base">
                        {prog.name}
                      </h3>
                      <div className="text-slate-300 text-xs space-y-1">
                        <div><strong>Duration:</strong> {prog.duration}</div>
                        <div><strong>Eligibility:</strong> {prog.eligibility}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigateTab) {
                          onNavigateTab('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const contactEl = document.getElementById('contact');
                          if (contactEl) {
                            contactEl.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            window.location.hash = 'contact';
                          }
                        }
                      }}
                      className="pt-4 mt-4 border-t border-white/10 flex items-center text-xs text-secondary font-semibold cursor-pointer w-full text-left bg-transparent border-0 p-0 focus:outline-none"
                    >
                      <span>Register</span>
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeDept === 'College' && (
            <HscResultsChart selectedLang={selectedLang} />
          )}
        </div>

        {/* Analytic results / Placements statistics banner col */}
        <div className="lg:col-span-4 space-y-8">
          {/* Results Badge */}
          {activeDept !== 'College' && (
            <div className="blue-gradient text-white rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
              <div>
                <span className="text-amber-300 font-mono text-[10px] uppercase font-bold tracking-widest block mb-2">Performance analytics</span>
                <h3 className="font-display font-bold text-lg">SSC / Academic Outturn</h3>
              </div>
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl md:text-5xl font-display font-black tracking-tight">{currentInfo.resultsSummary.passRate}</span>
                <span className="text-xs text-blue-200 font-semibold uppercase">Overall Pass Average</span>
              </div>
              <p className="text-blue-100 text-xs leading-relaxed border-t border-white/10 pt-4">
                <strong>Board achievements:</strong> {currentInfo.resultsSummary.boardToppers}
              </p>
            </div>
          )}

          {/* Infrastructure references */}
          <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-xl space-y-4 backdrop-blur-md text-white">
            <h4 className="font-display font-bold text-white text-base">Wing Infrastructure</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {currentInfo.facilities.map((fac, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></span>
                  <span>{fac}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Junior College - Science Wing Active Panel (विज्ञान शाखा कनिष्ठ महाविद्यालय) - Render only if College is active */}
      {activeDept === 'College' && (
        <div className="space-y-12">
          {/* HSC Toppers & Results Table */}
          <HscToppersTable selectedLang={selectedLang} />

          {/* Synchronized Infrastructure & Facilities Carousel */}
          <InfrastructureFacilitiesCarousel selectedLang={selectedLang} />

          {/* Sports & Athletics Section */}
          <SportsAthleticsSection selectedLang={selectedLang} />

          {/* Main Info Blocks (Sections 1, 2, 3) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {/* Section 1: About & Academic Legacy */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-5 hover:border-amber-400/25 hover:bg-white/8 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 shrink-0">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  {(selectedLang === 'en' || selectedLang === 'both') && (
                    <h3 className="font-display font-black text-white text-base sm:text-lg leading-tight">About & Legacy</h3>
                  )}
                  {(selectedLang === 'mr' || selectedLang === 'both') && (
                    <h3 className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 text-sm sm:text-base leading-tight">परिचय व इतिहास</h3>
                  )}
                </div>
              </div>
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                {(selectedLang === 'en' || selectedLang === 'both') && (
                  <p>
                    Established in <span className="text-amber-300 font-bold font-display">2008</span> with a dedicated mission to supply supreme science coaching in the semi-urban and rural areas of Khed Taluka. Over the years, the Junior College has maintained an unbroken streak of record-breaking, high-percentage board results right from our very first batch of 12th Grade.
                  </p>
                )}
                {(selectedLang === 'mr' || selectedLang === 'both') && (
                  <p className="font-sans text-slate-350 border-t border-white/5 pt-3 mt-3">
                    ग्रामीण व निमशहरी भागातील विद्यार्थ्यांना दर्जेदार आणि उच्च-गुणवत्तेचे विज्ञान शिक्षण देण्यासाठी <span className="text-amber-300 font-bold">२००८</span> मध्ये या शाखेची स्थापना करण्यात आली। उत्कृष्ट नियोजन, शिस्तप्रिय शैक्षणिक वातावरण, वैयक्तिक मार्गदर्शन आणि विशेष सराव तासांमुळे पहिल्याच वर्षापासून (१२ वी बॅच) या महाविद्यालयाने १००% व उच्च निकालांची ऐतिहासिक परंपरा कायम राखली आहे।
                  </p>
                )}
              </div>
            </div>

            {/* Section 2: Infrastructure & Facilities */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-5 hover:border-amber-400/25 hover:bg-white/8 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#87CEEB]/10 border border-[#87CEEB]/20 flex items-center justify-center text-[#87CEEB] shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  {(selectedLang === 'en' || selectedLang === 'both') && (
                    <h3 className="font-display font-black text-white text-base sm:text-lg leading-tight">Infrastructure</h3>
                  )}
                  {(selectedLang === 'mr' || selectedLang === 'both') && (
                    <h3 className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 text-sm sm:text-base leading-tight">पायाभूत सुविधा</h3>
                  )}
                </div>
              </div>
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                {(selectedLang === 'en' || selectedLang === 'both') && (
                  <p>
                    Housed in a grand, state-of-the-art independent campus building constructed with <span className="text-amber-300 font-bold font-display">28 spacious smart classrooms</span>, inaugurated in 2013 by the hands of Hon. Sharadchandraji Pawar. Features highly specialized separate laboratories for Physics, Chemistry, and Biology, alongside an IT lab with 50 high-speed computers.
                  </p>
                )}
                {(selectedLang === 'mr' || selectedLang === 'both') && (
                  <p className="font-sans text-slate-350 border-t border-white/5 pt-3 mt-3">
                    माननीय शरदचंद्रजी पवार साहेबांच्या हस्ते २०१३ मध्ये उद्घाटित <span className="text-amber-300 font-bold">२८ भव्य आणि सुसज्ज वर्गखोल्यांची</span> स्वतंत्र इमारत येथे उपलब्ध आहे। यात भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्रासाठी सुसज्ज अशा स्वतंत्र प्रयोगशाळा तसेच ५० संगणक आणि हाय-स्पीड इंटरनेटसह सुसज्ज कॉम्प्युटर लॅब कार्यरत आहे।
                  </p>
                )}
              </div>
            </div>

            {/* Section 3: Academic Excellence & Board Results */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-5 hover:border-amber-400/25 hover:bg-white/8 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 shrink-0">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  {(selectedLang === 'en' || selectedLang === 'both') && (
                    <h3 className="font-display font-black text-white text-base sm:text-lg leading-tight">Board Results & CET</h3>
                  )}
                  {(selectedLang === 'mr' || selectedLang === 'both') && (
                    <h3 className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 text-sm sm:text-base leading-tight">गुणवत्ता व निकाल यश</h3>
                  )}
                </div>
              </div>
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                {(selectedLang === 'en' || selectedLang === 'both') && (
                  <p>
                    Celebrated for 100% board passing results, the Junior College prepares students for State Board (HSC) examinations with comprehensive academic tracking and personalized board mentoring. It also embeds competitive coaching for State <span className="text-amber-300 font-bold font-display">C.E.T., NEET, and JEE exams</span> within its core teaching roster.
                  </p>
                )}
                {(selectedLang === 'mr' || selectedLang === 'both') && (
                  <p className="font-sans text-slate-350 border-t border-white/5 pt-3 mt-3">
                    कनिष्ठ महाविद्यालयाने दरवर्षी १२ वी बोर्ड परीक्षेत १००% निकालाची उत्कृष्ट परंपरा कायम ठेवली आहे। व्यावसायिक पदवी प्रवेश परीक्षांची (<span className="text-amber-300 font-bold">C.E.T., NEET, JEE</span>) तयारी शालेय तासांमध्येच विशेष तज्ज्ञ शिक्षकांद्वारे करून घेतली जाते, ज्याचा विद्यार्थ्यांना करिअर घडवण्यासाठी मोठा फायदा होतो।
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Section 4: Achievements Grid (Featuring Student Top Performers) */}
          <section className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 relative z-10 shadow-xl">
            <div className="space-y-2 border-b border-white/10 pb-6">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 font-sans">
                <Sparkles className="h-4 w-4 animate-pulse text-amber-300" />
                <span>Featured Student & Alumni Highlights / उत्कृष्ट गुणवंत विद्यार्थी</span>
              </span>
              <h3 className="font-display font-black text-white text-xl sm:text-2xl">
                Achievements Grid <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">/ पुरस्कार व विशेष योगदान</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card 1: Master Arif Inamdar */}
              <div className="bg-slate-900/40 border border-amber-400/20 rounded-2xl p-6 space-y-4 hover:border-amber-400/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full -mr-8 -mt-8"></div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-primary-dark transition-all duration-300">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Master Arif Inamdar</h4>
                    <span className="text-xs text-[#87CEEB] block font-mono font-bold">Top Performer (NEET / MBBS)</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {(selectedLang === 'en' || selectedLang === 'both') && (
                    <p className="font-medium text-white italic">
                      "Cleared NEET with outstanding score and secured MBBS admission at Government Medical College, Mumbai."
                    </p>
                  )}
                  {(selectedLang === 'mr' || selectedLang === 'both') && (
                    <p className="font-sans text-slate-350 border-t border-white/5 pt-2 mt-2">
                      NEET परीक्षा उच्च गुणांनी उत्तीर्ण होऊन शासकीय वैद्यकीय महाविद्यालय, मुंबई येथे <span className="text-amber-300 font-bold font-sans">MBBS</span> प्रवेश प्राप्त केला।
                    </p>
                  )}
                </div>
              </div>

              {/* Card 2: Miss Nisha Nakwe */}
              <div className="bg-slate-900/40 border border-amber-400/20 rounded-2xl p-6 space-y-4 hover:border-amber-400/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full -mr-8 -mt-8"></div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-primary-dark transition-all duration-300">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Miss Nisha Nakwe</h4>
                    <span className="text-xs text-[#87CEEB] block font-mono font-bold">Top Performer (JEE / Aero)</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {(selectedLang === 'en' || selectedLang === 'both') && (
                    <p className="font-medium text-white italic">
                      "Cleared JEE Advanced and secured Aeronautical Engineering at Indian Institute of Space Science and Technology (IIST)."
                    </p>
                  )}
                  {(selectedLang === 'mr' || selectedLang === 'both') && (
                    <p className="font-sans text-slate-350 border-t border-white/5 pt-2 mt-2">
                      JEE Advanced परीक्षा उत्तीर्ण होऊन आयआयएसटी (IIST), तिरुअनंतपुरम येथे <span className="text-amber-300 font-bold font-sans">एरोनॉटिकल इंजिनिअरिंग</span> प्रवेश मिळवला।
                    </p>
                  )}
                </div>
              </div>

              {/* Card 3: Miss Tanuja Rakshe */}
              <div className="bg-slate-900/40 border border-amber-400/20 rounded-2xl p-6 space-y-4 hover:border-amber-400/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full -mr-8 -mt-8"></div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-primary-dark transition-all duration-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Miss Tanuja Rakshe</h4>
                    <span className="text-xs text-[#87CEEB] block font-mono font-bold">Top Performer (Sports)</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {(selectedLang === 'en' || selectedLang === 'both') && (
                    <p className="font-medium text-white italic">
                      "Represented the college and won Bronze Medal at the 2024 National Taekwondo Competition."
                    </p>
                  )}
                  {(selectedLang === 'mr' || selectedLang === 'both') && (
                    <p className="font-sans text-slate-350 border-t border-white/5 pt-2 mt-2">
                      राष्ट्रीय ताइक्वांडो अजिंक्यपद स्पर्धेत (२०२४) महाविद्यालयाचे प्रतिनिधित्व करत <span className="text-amber-300 font-bold font-sans">कांस्यपदक (Bronze Medal)</span> पटकावले।
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Faculty Directory Table */}
          <section id="junior-college-faculty" className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 relative z-10 shadow-xl font-sans">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <span className="text-[#87CEEB] text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 font-mono">
                  <Users className="h-4 w-4" />
                  <span>Academic Staff Roster / शिक्षक व शिक्षकेतर कर्मचारी</span>
                </span>
                <h3 className="font-display font-black text-white text-xl sm:text-2xl">
                  Faculty Directory <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-blue-200">/ अध्यापक वर्ग</span>
                </h3>
              </div>

              {/* Staff Count */}
              <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-slate-300 font-mono">
                {selectedLang === 'mr' ? 'एकूण जुळणारे कर्मचारी: ' : 'Showing '}
                <span className="text-amber-300 font-bold">{filteredJCStaff.length}</span>
                {selectedLang === 'mr' ? '' : ` of ${JUNIOR_COLLEGE_STAFF.length} members`}
              </div>
            </div>

            {/* Controls: Search and Filter Tabs */}
            <div className="space-y-4">
              {/* Filters list */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'All', en: 'All Staff', mr: 'सर्व कर्मचारी' },
                  { id: 'Teacher', en: 'Teachers', mr: 'शिक्षक वर्ग' },
                  { id: 'Lab Support', en: 'Lab Assistants', mr: 'प्रयोगशाळा सहाय्यक' },
                  { id: 'Support Staff', en: 'Support Staff', mr: 'शिपाई / मदतनीस' },
                ].map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => setJcSubjectFilter(subject.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-205 cursor-pointer ${
                      jcSubjectFilter === subject.id
                        ? 'bg-amber-400 text-primary-dark shadow-md font-black'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {selectedLang === 'en' ? subject.en : selectedLang === 'mr' ? subject.mr : `${subject.en} / ${subject.mr}`}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative font-sans">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={jcSearchQuery}
                  onChange={(e) => setJcSearchQuery(e.target.value)}
                  placeholder={
                    selectedLang === 'en'
                      ? 'Search by name, designation, or date...'
                      : selectedLang === 'mr'
                      ? 'नाव, पद किंवा दिनांकानुसार शोधा...'
                      : 'Search Staff / कर्मचारी शोधा (e.g. दशरथ पिलगर, उप-शिक्षिका)...'
                  }
                  className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-slate-900/60 border border-white/10 rounded-2xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Table layout (Medium / Large screens) */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/40">
              {filteredJCStaff.length > 0 ? (
                <table className="w-full text-left border-collapse table-fixed">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-xs font-mono text-[#87CEEB] uppercase tracking-wider">
                      <th className="w-[40%] py-4 px-6 font-bold">
                        {selectedLang === 'en' ? 'Name' : selectedLang === 'mr' ? 'नाव' : 'Name / नाव'}
                      </th>
                      <th className="w-[35%] py-4 px-6 font-bold">
                        {selectedLang === 'en' ? 'Designation' : selectedLang === 'mr' ? 'पद' : 'Designation / पद'}
                      </th>
                      <th className="w-[25%] py-4 px-6 font-bold">
                        {selectedLang === 'en' ? 'Joining Date' : selectedLang === 'mr' ? 'रुजू दिनांक' : 'Joining Date / रुजू दिनांक'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-slate-200">
                    {filteredJCStaff.map((staff) => (
                      <tr
                        key={staff.id}
                        className={`hover:bg-white/5 transition-colors ${
                          staff.isFeatured ? 'bg-amber-400/5 border-l-2 border-l-amber-400' : ''
                        }`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div className={`h-9 w-9 rounded-xl flex items-center justify-center text-xs font-black font-mono shrink-0 ${
                              staff.isFeatured ? 'bg-amber-400 text-primary-dark shadow-md' : 'bg-white/5 text-slate-300'
                            }`}>
                              {staff.isFeatured ? <Sparkles className="h-4 w-4" /> : staff.nameMr.charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <div className="font-display font-bold text-white flex items-center gap-1.5 flex-wrap">
                                <span className="truncate">{selectedLang === 'en' ? staff.nameEn : selectedLang === 'mr' ? staff.nameMr : staff.nameMr}</span>
                                {staff.isFeatured && (
                                  <span className="bg-amber-400/20 text-amber-300 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md uppercase shrink-0">
                                    Featured
                                  </span>
                                )}
                              </div>
                              {selectedLang === 'both' && (
                                <div className="text-slate-400 text-xs truncate font-sans">
                                  {staff.nameEn}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-[#87CEEB]/10 border border-[#87CEEB]/20 text-[#87CEEB] px-2.5 py-1 rounded-md font-bold text-xs inline-block">
                            {selectedLang === 'en' ? staff.roleEn : selectedLang === 'mr' ? staff.roleMr : staff.roleMr}
                          </span>
                          {selectedLang === 'both' && (
                            <div className="text-slate-400 text-xs pt-1 font-sans truncate">
                              {staff.roleEn}
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-6 text-slate-300 font-mono text-xs">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-amber-400 shrink-0" />
                            <span className="font-bold text-amber-200">
                              {selectedLang === 'en' ? staff.joiningDateEn : selectedLang === 'mr' ? staff.joiningDateMr : staff.joiningDateMr}
                            </span>
                          </div>
                          {selectedLang === 'both' && staff.joiningDateEn !== staff.joiningDateMr && (
                            <div className="text-slate-400 text-[11px] pt-0.5 font-sans">
                              {staff.joiningDateEn}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="py-12 text-center text-slate-400 space-y-2 font-sans">
                  <p className="text-base font-bold">No Staff Members Found / कोणीही कर्मचारी आढळले नाहीत</p>
                  <p className="text-xs font-sans text-slate-500">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </div>

            {/* Mobile Layout (Small screens: stack of cards) */}
            <div className="block md:hidden flex flex-col gap-4">
              {filteredJCStaff.length > 0 ? (
                filteredJCStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className={`p-5 rounded-2xl border transition-all duration-300 space-y-4 ${
                      staff.isFeatured
                        ? 'bg-amber-400/5 border-amber-400/30 shadow-md'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    {/* Header line with avatar */}
                    <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
                        staff.isFeatured ? 'bg-amber-400 text-primary-dark shadow font-black' : 'bg-white/5 text-slate-300'
                      }`}>
                        {staff.isFeatured ? <Sparkles className="h-4 w-4" /> : staff.nameMr.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-extrabold text-white text-sm truncate flex items-center gap-1.5">
                          {selectedLang === 'en' ? staff.nameEn : selectedLang === 'mr' ? staff.nameMr : staff.nameMr}
                          {staff.isFeatured && (
                            <span className="bg-amber-400/20 text-amber-300 text-[8px] font-mono font-bold px-1 py-0.5 rounded uppercase shrink-0">
                              Featured
                            </span>
                          )}
                        </h4>
                        {selectedLang === 'both' && (
                          <p className="text-slate-400 text-xs truncate font-sans">
                            {staff.nameEn}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Metadata lines */}
                    <div className="space-y-2.5 text-xs text-slate-300">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 uppercase font-mono tracking-wider">Designation / पद</span>
                        <span className="bg-[#87CEEB]/10 border border-[#87CEEB]/20 text-[#87CEEB] px-2 py-0.5 rounded font-bold">
                          {selectedLang === 'en' ? staff.roleEn : selectedLang === 'mr' ? staff.roleMr : staff.roleMr}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-white/5">
                        <span className="text-slate-500 uppercase font-mono tracking-wider">Joining Date / रुजू दिनांक</span>
                        <div className="flex items-center gap-1 text-amber-200 font-bold font-mono">
                          <Calendar className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                          <span>{selectedLang === 'en' ? staff.joiningDateEn : selectedLang === 'mr' ? staff.joiningDateMr : staff.joiningDateMr}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-slate-400 bg-white/5 border border-white/10 rounded-2xl space-y-1 font-sans">
                  <p className="font-bold">No Staff Members Found</p>
                  <p className="text-xs">Try adapting your search.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      )}


      {/* English Medium School - Principal's Message */}
      {activeDept === 'EMS' && (
        <section className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 relative z-10 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Principal Image Space (Placeholder) */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl border-2 border-dashed border-white/20 bg-slate-900/60 flex flex-col items-center justify-center p-6 text-center group hover:border-amber-400/50 transition-all">
                <div className="h-16 w-16 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <span className="text-white font-bold text-sm font-display">Principal's Photo</span>
                <span className="text-slate-400 text-xs mt-1">Placeholder Space</span>
                <p className="text-[10px] text-slate-500 mt-4 leading-normal">Recommended Dimensions:<br />600 x 800 pixels</p>
              </div>
            </div>

            {/* Message Body */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block font-sans">Leadership Message</span>
                <h3 className="font-display font-black text-white text-2xl sm:text-3xl">
                  Principal's Message
                </h3>
                <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>

              <div className="space-y-4 text-slate-350 text-sm leading-relaxed font-sans font-medium">
                <p className="text-white font-bold text-base">Dear Students, Parents, and Visitors,</p>
                
                <p>
                  It is my privilege to welcome you to KTES English Medium School, Rajgurunagar.
                </p>
                
                <p>
                  At KTES, we believe that every child has the potential to excel when provided with the right guidance, encouragement, and opportunities. Our aim is to offer quality English-medium education based on the Maharashtra State Board curriculum while nurturing strong values, discipline, creativity, and a lifelong love for learning.
                </p>
                
                <p>
                  Education is not merely the pursuit of academic excellence; it is the development of character, confidence, critical thinking, and social responsibility. We strive to create a safe, inclusive, and stimulating environment where every student feels valued and inspired to achieve their fullest potential.
                </p>
                
                <p>
                  Our dedicated team of teachers is committed to providing student-centered learning that promotes curiosity, innovation, and holistic development. Along with academic success, we encourage participation in sports, cultural activities, community service, and leadership opportunities to ensure the all-round development of every learner.
                </p>
                
                <p>
                  We firmly believe that the partnership between parents, teachers, and the school is the cornerstone of a child's success. Together, we can create a strong foundation that prepares our students to face future challenges with confidence, integrity, and compassion.
                </p>
                
                <p>
                  I sincerely thank all parents for their continued trust and support. Let us work together to inspire young minds, uphold excellence, and build responsible citizens who will contribute positively to society.
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <p className="text-amber-400 font-display font-extrabold italic text-sm">
                    "Together, We Learn, We Grow, We Excel."
                  </p>
                  <div className="text-xs text-slate-400 mt-2">
                    <p className="font-bold text-white text-sm">Principal</p>
                    <p>KTES English Medium School, Rajgurunagar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
        </>
      )}
    </div>
  );
}
