import { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
  Search,
  CheckCircle2,
  Clock,
  Building2,
  ShieldCheck,
  Tv,
  Music,
  Theater,
  HeartHandshake,
  UserCheck,
  ChevronRight,
  Flame,
  LayoutGrid,
  History,
  Smile,
  Filter,
  BadgeCheck,
  FileSpreadsheet,
  Camera,
  X
} from 'lucide-react';
import SKPPVGallery from './SKPPVGallery';
import PrimaryStaffSection from './PrimaryStaffSection';

import skppImg1 from '../assets/images/SKPP/SKPP.jpeg';
import skppImg2 from '../assets/images/SKPP/SKPP_1.jpeg';
import skppImg3 from '../assets/images/SKPP/SKPP_2.jpeg';
import skppImg4 from '../assets/images/SKPP/SKPP_3.jpeg';
import skppImg5 from '../assets/images/SKPP/SKPP_4.jpeg';

export default function SKPPVDeptView() {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>('both');
  const [staffSearchQuery, setStaffSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'staff' | 'academics' | 'activities' | 'gallery'>('overview');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  // 1. History & Establishment
  const foundingMembers = [
    { roleEn: 'President', roleMr: 'मा. अध्यक्ष', nameEn: 'Shri Khushalchand Lunawat', nameMr: 'श्री खुशालचंद लुणावत' },
    { roleEn: 'Vice President', roleMr: 'मा. उपाध्यक्ष', nameEn: 'Shri P. M. Shindekar', nameMr: 'श्री पा. मा. शिंदेकर' },
    { roleEn: 'Secretary', roleMr: 'मा. सचिव', nameEn: 'Shri Tryambak Ganesh Joshi', nameMr: 'श्री त्र्यंबक गणेश जोशी' },
    { roleEn: 'Headmaster', roleMr: 'मुख्याध्यापक', nameEn: 'Shri V. G. Pathak', nameMr: 'श्री. वि. गो. पाठक' },
    { roleEn: 'Assistant Headmistress', roleMr: 'उपमुख्याध्यापिका', nameEn: 'Smt. M. S. Kulkarni', nameMr: 'सौ. एम.एस. कुलकर्णी' }
  ];

  const historyPoints = [
    { labelEn: 'Establishment', labelMr: 'स्थापना', valueEn: 'June 1971', valueMr: 'जून १९७१' },
    { labelEn: 'Original Name', labelMr: 'मूळ नाव', valueEn: 'Mahatma Gandhi Primary School', valueMr: 'महात्मा गांधी प्राथमिक विद्यालय' },
    { labelEn: 'Initial Stats', labelMr: 'सुरुवातीची आकडेवारी', valueEn: 'Pre- Primary School, 1st & 2nd classes; 163 students, 10 teachers', valueMr: 'पूर्व प्राथमिक शाळा (Pre-Primary), पहिली व दुसरी वर्ग; १६३ विद्यार्थी, १० शिक्षक' },
    { labelEn: 'Renaming Year', labelMr: 'नामकरण वर्ष', valueEn: '1988 ("Sheth Kesharchand Parakh Primary School" in memory of Late Kesharchandji Parakh, Pune)', valueMr: '१९८८ ("शेठ केशरचंद पारख प्राथमिक विद्यालय" - पुण्याचे कै. केशरचंदजी पारख यांच्या स्मृत्यर्थ)' },
    { labelEn: 'Current Headmistress', labelMr: 'सध्याच्या मुख्याध्यापिका', valueEn: 'Smt. Vandana Shankar Kashid', valueMr: 'सौ. वंदना शं. काशिद' }
  ];

  const studentGrowth = [
    { year: '1974-1975', countEn: '445 Students', countMr: '४४५ विद्यार्थी' },
    { year: '2025-2026', countEn: '1009 Students', countMr: '१००९ विद्यार्थी' }
  ];

  // 2. Infrastructure & Facilities
  const facilities = [
    { titleEn: 'Spacious 2-Story Building', titleMr: 'प्रशस्त व भव्य दोन मजली इमारत', descEn: 'Modern educational architecture designed for safe and comfortable learning.', descMr: 'सुरक्षित व सुसज्ज वातावरणासाठी तयार केलेली भव्य इमारत.' },
    { titleEn: '24 Independent Classrooms', titleMr: 'पहिली ते चौथी साठी २४ स्वतंत्र वर्गखोल्या', descEn: 'Dedicated well-ventilated rooms for 1st to 4th grade pupils.', descMr: 'इयत्ता १ ली ते ४ थी साठी सुसज्ज व हवाशीर २४ वर्गखोल्या.' },
    { titleEn: 'Balwadi Section', titleMr: 'बालवाडीसाठी स्वतंत्र विभाग', descEn: 'Separate early childhood development wing with play tools.', descMr: 'लहान मुलांच्या सर्वांगीण विकासासाठी स्वतंत्र बालवाडी विभाग.' },
    { titleEn: 'E-Learning & Smart TV', titleMr: 'E-Learning & Smart T.V. सुविधा', descEn: 'Digitally enabled audio-visual learning tools in every wing.', descMr: 'डिजिटल पद्धतीने शिक्षणासाठी ई-लर्निंग व स्मार्ट टीव्ही सुविधा.' },
    { titleEn: 'Spacious Playground & Sports Equipment', titleMr: 'प्रशस्त मैदान व खेळाचे साहित्य', descEn: 'Generous open play campus with outdoor games accessories.', descMr: 'खेळाच्या विविध साहित्यांसह मोठे व सुरक्षित मैदान.' },
    { titleEn: 'Grand Cultural Stage', titleMr: 'भव्य रंगमंच', descEn: 'Dedicated stage for assemblies, annual days, and drama.', descMr: 'सांस्कृतिक कार्यक्रम, स्नेहसंमेलन व नाटकांसाठी भव्य व्यासपीठ.' },
    { titleEn: 'Separate Washrooms', titleMr: 'मुला-मुलींसाठी स्वतंत्र स्वच्छतागृह', descEn: 'Hygienic and clean separate restrooms for boys and girls.', descMr: 'मुला-मुलींसाठी अत्यंत स्वच्छ व स्वतंत्र स्वच्छतागृहे.' },
    { titleEn: 'Clean & Purified Water', titleMr: 'पिण्याचे शुद्ध व स्वच्छ पाणी', descEn: 'RO filtered safe drinking water units installed.', descMr: 'विद्यार्थ्यांसाठी शुद्ध व स्वच्छ पिण्याच्या पाण्याची सोय.' },
    { titleEn: 'CCTV Surveillance & Guard', titleMr: 'संपूर्ण परिसर CCTV च्या कक्षेत व गेटवर सिक्युरिटी गार्ड', descEn: 'Round-the-clock campus security and monitored gates.', descMr: 'सीसीटीव्ही कॅमेरे आणि मुख्य प्रवेशद्वारावर सिक्युरिटी गार्ड.' }
  ];

  // 3. Achievements
  const danceMalhar = [
    { year: '2019-20', rankEn: '1st Rank at State Level', rankMr: 'प्रथम क्रमांक (राज्यस्तर)' },
    { year: '2024-25', rankEn: '2nd Rank at State Level', rankMr: 'द्वितीय क्रमांक (राज्यस्तर)' },
    { year: '2025-26', rankEn: '1st Rank at State Level', rankMr: 'प्रथम क्रमांक (राज्यस्तर)' }
  ];

  const dramaAchievements = [
    { year: '2003-04', levelEn: 'Taluka 1st Rank', levelMr: 'तालुका प्रथम', play: 'कोल्ह्याला द्राक्ष आंबट' },
    { year: '2012-13', levelEn: 'Taluka 1st Rank', levelMr: 'तालुका प्रथम', play: 'जागर स्वच्छतेचा, वसुंधरेची हाक' },
    { year: '2015-16', levelEn: 'Taluka 2nd Rank', levelMr: 'तालुका द्वितीय', play: 'कचरा व्यवस्थापन' },
    { year: '2016-17', levelEn: 'District 2nd Rank', levelMr: 'जिल्हास्तर द्वितीय', play: 'रंगसप्तक' },
    { year: '2017-18', levelEn: 'District 1st Rank', levelMr: 'जिल्हास्तर प्रथम', play: 'हा नाश थांबवा' },
    { year: '2018-19', levelEn: 'Taluka 1st Rank', levelMr: 'तालुका प्रथम', play: 'गणपती बाप्पा मोरया' },
    { year: '2019-20', levelEn: 'Taluka 1st Rank', levelMr: 'तालुका प्रथम', play: 'मायमराठी' },
    { year: '2025-26', levelEn: 'Taluka 1st Rank', levelMr: 'तालुका प्रथम', play: 'आपला गाव आपली जबाबदारी' }
  ];

  const individualAchievements = [
    { nameEn: 'Jr. Balwadi Division', nameMr: 'ज्युनिअर बालवाडी', achievementEn: 'Sanskrit Recitation - 1st Rank at District Level', achievementMr: 'संस्कृत पाठांतर - जिल्हा स्तरावर प्रथम क्रमांक' },
    { nameEn: 'Ishant Vijay Aher', nameMr: 'ईशांत विजय आहेर', achievementEn: 'Open Dance Style - 2nd Rank', achievementMr: 'ओपन डान्स स्टाईल - द्वितीय क्रमांक' },
    { nameEn: 'Miss Pari Yesudas Talmale', nameMr: 'कु. परी येसुदास तलमले', achievementEn: 'Folk Dance - 3rd Rank', achievementMr: 'लोकनृत्य - तृतीय क्रमांक' }
  ];

  // 4. Staff Master List (40 Members across Aided Teaching, Unaided Teaching, and Unaided Non-Teaching)
  const [staffCategoryFilter, setStaffCategoryFilter] = useState<'all' | 'aided_teaching' | 'unaided_teaching' | 'unaided_non_teaching'>('all');

  const staffList = [
    // =========================================================================
    // Category 1: शिक्षक कर्मचारी माहिती अनुदानित (Teaching Staff - Aided) - 16
    // =========================================================================
    {
      sr: 1,
      catSr: 1,
      nameMr: 'सौ. काशिद वंदना शंकर',
      nameEn: 'Smt. Vandana Shankar Kashid',
      roleMr: 'मुख्याध्यापिका',
      roleEn: 'Headmistress',
      qual: 'H.S.C., D.Ed, B.A., D.S.M',
      date: '11/07/2005',
      dateMr: '११/०७/२००५',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 2,
      catSr: 2,
      nameMr: 'श्रीम. थिटे मंगला जयवंत',
      nameEn: 'Smt. Mangala Jaywant Thite',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, M.A., D.S.M',
      date: '06/07/2000',
      dateMr: '०६/०७/२०००',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 3,
      catSr: 3,
      nameMr: 'सौ. सांडभोर स्वाती राजाराम',
      nameEn: 'Smt. Swati Rajaram Sandbhor',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A.',
      date: '06/09/2002',
      dateMr: '०६/०९/२००२',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 4,
      catSr: 4,
      nameMr: 'श्रीम. काकडे अरुणा सुदाम',
      nameEn: 'Smt. Aruna Sudam Kakade',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A., D.S.M',
      date: '11/07/2005',
      dateMr: '११/०७/२००५',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 5,
      catSr: 5,
      nameMr: 'श्रीम. सातकर स्नेहलता निवृत्ती',
      nameEn: 'Smt. Snehlata Nivrutti Satkar',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'B.A., B.P.Ed, M.A., D.S.M.',
      date: '01/02/1996',
      dateMr: '०१/०२/१९९६',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 6,
      catSr: 6,
      nameMr: 'श्रीम. लोखंडे अर्चना भरत',
      nameEn: 'Smt. Archana Bharat Lokhande',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A.',
      date: '15/12/2010',
      dateMr: '१५/१२/२०१०',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 7,
      catSr: 7,
      nameMr: 'श्रीम. रोकडे हर्षदा गौतम',
      nameEn: 'Smt. Harshada Gautam Rokade',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A., B.Ed, D.S.M',
      date: '01/07/2013',
      dateMr: '०१/०७/२०१३',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 8,
      catSr: 8,
      nameMr: 'श्री. गायकवाड सचिन अंकुश',
      nameEn: 'Mr. Sachin Ankush Gaikwad',
      roleMr: 'उपशिक्षक',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A., B.Ed',
      date: '01/07/2013',
      dateMr: '०१/०७/२०१३',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 9,
      catSr: 9,
      nameMr: 'श्रीम. तागडे स्वप्नाली अर्जुन',
      nameEn: 'Smt. Swapnali Arjun Tagade',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A.',
      date: '01/07/2013',
      dateMr: '०१/०७/२०१३',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 10,
      catSr: 10,
      nameMr: 'कु. मंडलिक माधुरी नारायण',
      nameEn: 'Ms. Madhuri Narayan Mandlik',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, M.A.',
      date: '01/07/2013',
      dateMr: '०१/०७/२०१३',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 11,
      catSr: 11,
      nameMr: 'श्रीम. गरुड विशाखा अर्जुन',
      nameEn: 'Smt. Vishakha Arjun Garud',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed',
      date: '01/07/2013',
      dateMr: '०१/०७/२०१३',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 12,
      catSr: 12,
      nameMr: 'श्रीम. गायकवाड देवयानी गोपीचंद',
      nameEn: 'Smt. Devayani Gopichand Gaikwad',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, M.A., B.Ed',
      date: '01/07/2013',
      dateMr: '०१/०७/२०१३',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 13,
      catSr: 13,
      nameMr: 'श्री. शेख रहिम निजाम',
      nameEn: 'Mr. Rahim Nizam Shaikh',
      roleMr: 'उपशिक्षक',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A., B.Ed',
      date: '01/08/2025',
      dateMr: '०१/०८/२०२५',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 14,
      catSr: 14,
      nameMr: 'सौ. बोऱ्हाडे पुष्पा शरद',
      nameEn: 'Smt. Pushpa Sharad Borhade',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, M.A., B.Ed, D.S.M',
      date: '01/08/2025',
      dateMr: '०१/०८/२०२५',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 15,
      catSr: 15,
      nameMr: 'श्री. शिंदे श्रीकांत कुंडलिक',
      nameEn: 'Mr. Shrikant Kundlik Shinde',
      roleMr: 'उपशिक्षक',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A.',
      date: '01/08/2025',
      dateMr: '०१/०८/२०२५',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },
    {
      sr: 16,
      catSr: 16,
      nameMr: 'श्रीमती गोरडे धनश्री गोविंद',
      nameEn: 'Smt. Dhanashree Govind Gorde',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A.',
      date: '01/08/2025',
      dateMr: '०१/०८/२०२५',
      category: 'aided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - अनुदानित',
      categoryLabelEn: 'Teaching Staff - Aided'
    },

    // =========================================================================
    // Category 2: शिक्षक कर्मचारी माहिती विनाअनुदानित (Teaching Staff - Unaided) - 16
    // =========================================================================
    {
      sr: 17,
      catSr: 1,
      nameMr: 'सौ. गुजर मनीषा दीपक',
      nameEn: 'Smt. Manisha Deepak Gujar',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'D.Ed, B.A.',
      date: '13/06/2001',
      dateMr: '१३/०६/२००१',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 18,
      catSr: 2,
      nameMr: 'सौ. टाकळकर सुनंदा बाळासाहेब',
      nameEn: 'Smt. Sunanda Balasaheb Takalkar',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'D.Ed, B.A.',
      date: '01/07/1994',
      dateMr: '०१/०७/१९९४',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 19,
      catSr: 3,
      nameMr: 'सौ. काळे ललिता प्रवीण',
      nameEn: 'Smt. Lalita Pravin Kale',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A.',
      date: '01/07/2017',
      dateMr: '०१/०७/२०१७',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 20,
      catSr: 4,
      nameMr: 'सौ. सुतार रूपाली केशव',
      nameEn: 'Smt. Rupali Keshav Sutar',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.COM',
      date: '01/07/2017',
      dateMr: '०१/०७/२०१७',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 21,
      catSr: 5,
      nameMr: 'श्रीमती गाढवे योगिता लक्ष्मण',
      nameEn: 'Smt. Yogita Laxman Gadhave',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.T.Ed',
      date: '11/01/2018',
      dateMr: '११/०१/२०१८',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 22,
      catSr: 6,
      nameMr: 'सौ. चव्हाण रत्नमाला योगेश',
      nameEn: 'Smt. Ratnamala Yogesh Chavan',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C, A.T.D., B.F.A.',
      date: '01/07/2017',
      dateMr: '०१/०७/२०१७',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 23,
      catSr: 7,
      nameMr: 'सौ. कसबें श्रद्धा सत्यविजय',
      nameEn: 'Smt. Shraddha Satyavijay Kasabe',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'D.T.Ed, B.A., B.Ed',
      date: '15/06/2022',
      dateMr: '१५/०६/२०२२',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 24,
      catSr: 8,
      nameMr: 'सौ. कोरडे जया संदीप',
      nameEn: 'Smt. Jaya Sandeep Korde',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'B.A., B.Ed',
      date: '01/07/2022',
      dateMr: '०१/०७/२०२२',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 25,
      catSr: 9,
      nameMr: 'सौ. गोरे प्रतिभा संतोष',
      nameEn: 'Smt. Pratibha Santosh Gore',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed',
      date: '01/07/2022',
      dateMr: '०१/०७/२०२२',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 26,
      catSr: 10,
      nameMr: 'श्रीम. पवार वैशाली विलास',
      nameEn: 'Smt. Vaishali Vilas Pawar',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.T.Ed, B.A.',
      date: '20/06/2019',
      dateMr: '२०/०६/२०१९',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 27,
      catSr: 11,
      nameMr: 'श्रीमती सातकर प्रणाली प्रताप',
      nameEn: 'Smt. Pranali Pratap Satkar',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed',
      date: '01/07/2017',
      dateMr: '०१/०७/२०१७',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 28,
      catSr: 12,
      nameMr: 'वाळुंज निलम गणेश',
      nameEn: 'Smt. Nilam Ganesh Walunj',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed, B.A., B.Lib, M.Lib',
      date: '01/07/2023',
      dateMr: '०१/०७/२०२३',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 29,
      catSr: 13,
      nameMr: 'खाडगीर वनिता भानुदास',
      nameEn: 'Smt. Vanita Bhanudas Khadgir',
      roleMr: 'उपशिक्षिका',
      roleEn: 'Assistant Teacher',
      qual: 'H.S.C., D.Ed',
      date: '01/07/2024',
      dateMr: '०१/०७/२०२४',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 30,
      catSr: 14,
      nameMr: 'सौ. पुरंदरे शुभांगी अवधूत',
      nameEn: 'Smt. Shubhangi Avdhoot Purandare',
      roleMr: 'उपशिक्षिका (बालवाडी)',
      roleEn: 'Assistant Teacher (Balwadi)',
      qual: 'H.S.C. बालवाडी कोर्स',
      date: '20/06/2017',
      dateMr: '२०/०६/२०१७',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 31,
      catSr: 15,
      nameMr: 'शमीम नजीर मोमीन',
      nameEn: 'Smt. Shamim Nazeer Momin',
      roleMr: 'उपशिक्षिका (बालवाडी)',
      roleEn: 'Assistant Teacher (Balwadi)',
      qual: 'H.S.C. बालवाडी कोर्स',
      date: '01/07/2023',
      dateMr: '०१/०७/२०२३',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },
    {
      sr: 32,
      catSr: 16,
      nameMr: 'कुंभार स्नेहल संदेश',
      nameEn: 'Smt. Snehal Sandesh Kumbhar',
      roleMr: 'उपशिक्षिका (बालवाडी)',
      roleEn: 'Assistant Teacher (Balwadi)',
      qual: 'H.S.C. बालवाडी कोर्स',
      date: '01/07/2026',
      dateMr: '०१/०७/२०२६',
      category: 'unaided_teaching' as const,
      categoryLabelMr: 'शिक्षक कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Teaching Staff - Unaided'
    },

    // =========================================================================
    // Category 3: शिक्षकेतर कर्मचारी माहिती विनाअनुदानित (Non-Teaching Staff - Unaided) - 8
    // =========================================================================
    {
      sr: 33,
      catSr: 1,
      nameMr: 'सौ. थिगळे ज्योती सुरेंद्र',
      nameEn: 'Smt. Jyoti Surendra Thigale',
      roleMr: 'शिक्षकेतर कर्मचारी (कार्यालयीन/लिपिक)',
      roleEn: 'Non-Teaching Staff (Clerk)',
      qual: 'M.COM',
      date: '09/08/2005',
      dateMr: '०९/०८/२००५',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    },
    {
      sr: 34,
      catSr: 2,
      nameMr: 'श्री. मधे भाऊ कोंडीबा',
      nameEn: 'Mr. Bhau Kondiba Madhe',
      roleMr: 'शिक्षकेतर कर्मचारी',
      roleEn: 'Non-Teaching Staff',
      qual: 'S.S.C.',
      date: '02/07/2014',
      dateMr: '०२/०७/२०१४',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    },
    {
      sr: 35,
      catSr: 3,
      nameMr: 'सौ. कुंभार सारिका संतोष',
      nameEn: 'Smt. Sarika Santosh Kumbhar',
      roleMr: 'शिक्षकेतर कर्मचारी',
      roleEn: 'Non-Teaching Staff',
      qual: 'सातवी (7th Pass)',
      date: '01/07/2015',
      dateMr: '०१/०७/२०१५',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    },
    {
      sr: 36,
      catSr: 4,
      nameMr: 'श्रीमती सांडभोर साधना संजय',
      nameEn: 'Smt. Sadhana Sanjay Sandbhor',
      roleMr: 'शिक्षकेतर कर्मचारी',
      roleEn: 'Non-Teaching Staff',
      qual: 'S.S.C.',
      date: '20/12/2016',
      dateMr: '२०/१२/२०१६',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    },
    {
      sr: 37,
      catSr: 5,
      nameMr: 'सौ. साळवे हर्षदा सुनिल',
      nameEn: 'Smt. Harshada Sunil Salve',
      roleMr: 'शिक्षकेतर कर्मचारी',
      roleEn: 'Non-Teaching Staff',
      qual: '9 वी (9th Pass)',
      date: '01/08/2018',
      dateMr: '०१/०८/२०१८',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    },
    {
      sr: 38,
      catSr: 6,
      nameMr: 'सौ. नाईक प्रतिभा संतोषराव',
      nameEn: 'Smt. Pratibha Santoshrao Naik',
      roleMr: 'शिक्षकेतर कर्मचारी',
      roleEn: 'Non-Teaching Staff',
      qual: 'सातवी (7th Pass)',
      date: '13/12/2025',
      dateMr: '१३/१२/२०२५',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    },
    {
      sr: 39,
      catSr: 7,
      nameMr: 'हाबडे दिपाली सोमनाथ',
      nameEn: 'Smt. Dipali Somnath Habade',
      roleMr: 'शिक्षकेतर कर्मचारी',
      roleEn: 'Non-Teaching Staff',
      qual: 'S.S.C.',
      date: '13/12/2025',
      dateMr: '१३/१२/२०२५',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    },
    {
      sr: 40,
      catSr: 8,
      nameMr: 'सौ. पवार पूजा सुरेश',
      nameEn: 'Smt. Pooja Suresh Pawar',
      roleMr: 'शिक्षकेतर कर्मचारी',
      roleEn: 'Non-Teaching Staff',
      qual: 'S.S.C.',
      date: '08/01/2026',
      dateMr: '०८/०१/२०२६',
      category: 'unaided_non_teaching' as const,
      categoryLabelMr: 'शिक्षकेतर कर्मचारी - विनाअनुदानित',
      categoryLabelEn: 'Non-Teaching Staff - Unaided'
    }
  ];

  // Filtered staff by Category & Search query
  const filteredStaff = staffList.filter((s) => {
    const matchesCategory = staffCategoryFilter === 'all' || s.category === staffCategoryFilter;
    if (!matchesCategory) return false;

    const q = staffSearchQuery.toLowerCase().trim();
    if (!q) return true;

    return (
      s.nameMr.toLowerCase().includes(q) ||
      s.nameEn.toLowerCase().includes(q) ||
      s.qual.toLowerCase().includes(q) ||
      s.roleMr.toLowerCase().includes(q) ||
      s.roleEn.toLowerCase().includes(q) ||
      s.date.toLowerCase().includes(q) ||
      s.dateMr.includes(q) ||
      s.categoryLabelMr.toLowerCase().includes(q) ||
      s.categoryLabelEn.toLowerCase().includes(q)
    );
  });

  const countAidedTeaching = staffList.filter(s => s.category === 'aided_teaching').length;
  const countUnaidedTeaching = staffList.filter(s => s.category === 'unaided_teaching').length;
  const countUnaidedNonTeaching = staffList.filter(s => s.category === 'unaided_non_teaching').length;

  // 5. Academic Section & Exams
  const examTypes = [
    { en: 'Semester Examinations (1st & 2nd Term)', mr: 'सत्रनिहाय परीक्षा (प्रथम व द्वितीय सत्र)' },
    { en: '4th Grade Scholarship Examination', mr: 'इ. ४ थी शिष्यवृत्ती परीक्षा' },
    { en: 'T.M.V. Mathematics Exam (Tilak Maharashtra Vidyapeeth)', mr: 'T.M.V. गणित परीक्षा (तिळक महाराष्ट्र विद्यापीठ)' },
    { en: 'General Knowledge Exam (2nd to 4th Grade)', mr: 'सामान्य ज्ञान परीक्षा (इ. २ री ते ४ थी)' }
  ];

  const manthanSuccess = [
    { year: '2022-23', countEn: '33 Successful Students', countMr: '३३ विद्यार्थी यशस्वी' },
    { year: '2023-24', countEn: '34 Successful Students', countMr: '३४ विद्यार्थी यशस्वी' },
    { year: '2024-25', countEn: '36 Successful Students', countMr: '३६ विद्यार्थी यशस्वी' }
  ];

  const schoolCommittees = [
    { en: 'Parent Teacher Association (PTA)', mr: 'शिक्षक पालक संघ (PTA)' },
    { en: 'School Management Committee (SMC)', mr: 'शाळा व्यवस्थापन समिती (SMC)' },
    { en: 'Mata Palak Sangh (Mothers Forum)', mr: 'माता पालक संघ' },
    { en: 'Sakhi Savitri Committee', mr: 'सखी सावित्री समिती' },
    { en: 'Meena Raju Manch', mr: 'मिना राजू मंच' },
    { en: 'Mid-Day Meal Committee (Poshan Aahar)', mr: 'शालेय पोषण आहार समिती' },
    { en: 'Swarajya Sabha (Student Council)', mr: 'स्वराज्य सभा' },
    { en: 'Library Committee', mr: 'ग्रंथालय समिती' },
    { en: 'External Competitions Cell', mr: 'बाह्य स्पर्धा विभाग' },
    { en: 'Samaj Udbodhan (Community Awareness)', mr: 'समाज उद्बोधन समिती' },
    { en: 'Geetmanch (School Choir)', mr: 'गीतमंच' },
    { en: 'Scout & Guide Wing', mr: 'स्काऊट गाईड विभाग' },
    { en: 'Transport Committee', mr: 'परिवहन समिती (वाहतूक)' }
  ];

  // 6. Co-Curricular & Joyful Saturday
  const keyActivities = [
    { en: 'Praveshotsav (School Opening Welcome)', mr: 'प्रवेशोत्सव' },
    { en: 'International Yoga Day', mr: 'योगदिन' },
    { en: 'Tree Plantation Drive', mr: 'वृक्षारोपण' },
    { en: 'Ashadhi Wari Dindi Procession', mr: 'आषाढी वारी दिंडी' },
    { en: 'Grandparents Meet (Aaji Ajoba Melava)', mr: 'आजी आजोबा मेळावा' },
    { en: 'Student Vegetable Market (Bhaji Mandai)', mr: 'भाजी मंडई' },
    { en: 'Martyrs Day (Shaheed Din)', mr: 'शहीद दिन' },
    { en: 'Fort Building Competition (Kille Banavane)', mr: 'किल्ले बनवणे' },
    { en: 'Marathi Rajbhasha Din', mr: 'मराठी राजभाषा दिन' },
    { en: 'Bhondla & Raas Dandiya Festival', mr: 'भोंडला व रास दांडिया' },
    { en: 'Shravani Shukravar Celebrations', mr: 'श्रावणी शुक्रवार' }
  ];

  const joyfulSaturday = [
    'Yoga & Breathing Exercises (योग व प्राणायाम)',
    'Mind Games & Brain Teasers (माइंड गेम्स)',
    'Zumba & Fitness Sessions (झुंबा व फिटनेस)',
    'Raksha Bandhan Celebrations (रक्षाबंधन)',
    'Gopalkala Dahi Handi (गोपाळकाला)',
    'Eco-friendly Eco Ganpati Making (गणपती बनवणे)',
    'Kids Culinary Art (पाककृती उपक्रम)',
    'Group Singing (समूहगीत सादरीकरण)',
    'Storytelling Saturday (गोष्टींचा शनिवार)'
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Top Banner & Language Controls */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950/40 border border-white/10 p-6 md:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="text-amber-400 font-display font-bold text-xs sm:text-sm tracking-widest uppercase block">
              {showMr ? 'प्राथमिक शिक्षण विभाग (इयत्ता १ ली ते ४ थी व बालवाडी)' : 'Primary Education Wing (Grades 1 to 4 & Balwadi)'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
              {showEn && <span className="block" id="skppv-main-title-en">Sheth Kesharchand Parakh Prathamik Vidyalay, Rajgurunagar</span>}
              {showMr && <span className="block text-amber-300 font-sans text-xl sm:text-3xl font-extrabold mt-1">शेठ केशरचंद पारख प्राथमिक विद्यालय, राजगुरुनगर</span>}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl font-sans">
              {showEn && "Nurturing young minds with foundational wisdom, cultural values, and modern digital learning since 1971."}
              {showMr && " जून १९७१ पासून संस्कारक्षम, आधुनिक व गुणी पिढी घडवणारी नामांकित प्राथमिक शाळा."}
            </p>
          </div>

          {/* Dual Language Selector */}
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl shrink-0 self-start lg:self-center">
            <button
              onClick={() => setSelectedLang('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedLang === 'en' ? 'bg-amber-400 text-slate-950 shadow font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              English Only
            </button>
            <button
              onClick={() => setSelectedLang('mr')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedLang === 'mr' ? 'bg-amber-400 text-slate-950 shadow font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              मराठी
            </button>
            <button
              onClick={() => setSelectedLang('both')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedLang === 'both' ? 'bg-amber-400 text-slate-950 shadow font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Dual Language
            </button>
          </div>
        </div>

        {/* Navigation Tabs inside SKPPV */}
        <div className="flex flex-wrap gap-2 mt-6 pt-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <History className="w-4 h-4" />
            {showMr ? '१) विद्यालयाचे मुख्य पान व इतिहास' : '1) School Home & History'}
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'staff'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Users className="w-4 h-4" />
            {showMr ? '२) शिक्षक व कर्मचारी माहिती (४१)' : '2) Teachers & Staff (41)'}
          </button>

          <button
            onClick={() => setActiveTab('academics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'academics'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            {showMr ? '३) शालेय विभाग, परीक्षा व समित्या' : '3) Academics & Committees'}
          </button>

          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'activities'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {showMr ? '४) सहशालेय विभाग व आनंददायी उपक्रम' : '4) Co-Curricular & Joyful Saturdays'}
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Camera className="w-4 h-4" />
            {showMr ? '५) छायाचित्र दालन (Website Photos)' : '5) Photo Gallery (Website Photos)'}
          </button>
        </div>
      </div>

      {/* SECTION 1: OVERVIEW & HISTORY */}
      {activeTab === 'overview' && (
        <div className="space-y-12">
          {/* History & Founding Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <History className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <h2 className="text-xl font-display font-bold text-white">
                    {showEn && "School History & Establishment"}
                    {showMr && <span className="block text-amber-300 font-sans text-lg font-bold">संस्था इतिहास व स्थापना</span>}
                  </h2>
                  <p className="text-slate-400 text-xs">
                    Established June 1971 / जून १९७१ पासून निरंतर ज्ञानगंगा
                  </p>
                </div>
              </div>

              {/* History Data Table Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {historyPoints.map((hp, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      {showEn && hp.labelEn} {showEn && showMr && ' | '} {showMr && hp.labelMr}
                    </span>
                    <p className="text-sm text-slate-200 font-sans leading-relaxed">
                      {showEn && hp.valueEn}
                      {showEn && showMr && <br />}
                      {showMr && <span className="text-slate-300 font-medium">{hp.valueMr}</span>}
                    </p>
                  </div>
                ))}
              </div>

              {/* Student Strength Timeline Growth */}
              <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-2xl space-y-3">
                <span className="text-xs font-bold text-amber-300 tracking-wider uppercase block">
                  {showEn ? 'Growth in Student Strength / विद्यार्थी संख्या वाढ' : 'विद्यार्थी संख्या वाढ'}
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {studentGrowth.map((sg, i) => (
                    <div key={i} className="bg-slate-950/60 p-3.5 rounded-xl border border-white/10 text-center">
                      <span className="text-xs font-bold text-amber-400 block">{sg.year}</span>
                      <span className="text-lg font-extrabold text-white block mt-1">
                        {showMr ? sg.countMr : sg.countEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founding Members List */}
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                  <UserCheck className="w-6 h-6 text-amber-400 shrink-0" />
                  <div>
                    <h2 className="text-lg font-display font-bold text-white">
                      {showEn && "Founding Leadership"}
                      {showMr && <span className="block text-amber-300 font-sans text-base font-bold">संस्थापक अधिकारी</span>}
                    </h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {foundingMembers.map((fm, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-xl flex justify-between items-center text-xs">
                      <span className="text-amber-400 font-bold">
                        {showEn && fm.roleEn} {showEn && showMr && ' / '} {showMr && fm.roleMr}
                      </span>
                      <span className="text-slate-200 font-semibold text-right">
                        {showEn && fm.nameEn} {showEn && showMr && ' / '} {showMr && fm.nameMr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/80 border border-amber-400/30 p-4 rounded-2xl mt-6">
                <span className="text-xs font-bold text-amber-400 block mb-1">
                  {showMr ? 'सध्याच्या मुख्याध्यापिका' : 'Current Headmistress'}
                </span>
                <span className="text-sm font-bold text-white block">
                  सौ. वंदना शं. काशिद (Smt. Vandana Shankar Kashid)
                </span>
                <span className="text-xs text-slate-400 block mt-1">
                  H.S.C., D.Ed, B.A., D.S.M (21+ Years Experience)
                </span>
              </div>
            </div>
          </div>

          {/* Infrastructure & Facilities Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Building2 className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h2 className="text-2xl font-display font-bold text-white">
                  {showEn && "Infrastructure & Campus Facilities"}
                  {showMr && <span className="block text-amber-300 font-sans text-xl font-bold">पायाभूत सुविधा</span>}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {facilities.map((fac, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-all space-y-2 group">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-sans pt-1">
                    {showEn && fac.titleEn}
                    {showEn && showMr && <br />}
                    {showMr && <span className="text-amber-300 font-semibold">{fac.titleMr}</span>}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {showEn && fac.descEn}
                    {showEn && showMr && ' '}
                    {showMr && fac.descMr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements & Trophies */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Trophy className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h2 className="text-2xl font-display font-bold text-white">
                  {showEn && "Key Achievements & Accolades"}
                  {showMr && <span className="block text-amber-300 font-sans text-xl font-bold">उल्लेखनीय बाबी व यश</span>}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* State Level Nrutya Malhar */}
              <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 space-y-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {showMr ? 'राज्यस्तरीय नृत्य मल्हार स्पर्धा' : 'State Level Nrutya Malhar Competition'}
                </span>
                <div className="space-y-3">
                  {danceMalhar.map((dm, idx) => (
                    <div key={idx} className="bg-white/5 p-3 rounded-xl flex justify-between items-center text-xs border border-white/5">
                      <span className="font-bold text-slate-300">{dm.year}</span>
                      <span className="font-bold text-amber-300">{showMr ? dm.rankMr : dm.rankEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Drama Interschool Competition */}
              <div className="lg:col-span-2 bg-slate-900/80 border border-white/10 rounded-2xl p-6 space-y-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {showMr ? 'यशवंतराव चव्हाण आंतरशालेय नाट्यस्पर्धा' : 'Yashwantrao Chavan Interschool Drama Competition'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dramaAchievements.map((dr, idx) => (
                    <div key={idx} className="bg-white/5 p-3 rounded-xl text-xs border border-white/5 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-300">{dr.year}</span>
                        <span className="text-amber-300 font-bold px-2 py-0.5 rounded bg-amber-400/10">
                          {showMr ? dr.levelMr : dr.levelEn}
                        </span>
                      </div>
                      <span className="text-slate-200 font-sans block text-xs">
                        नाटक: <strong className="text-white">"{dr.play}"</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Student Victories 2026 */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {showMr ? 'वैयक्तिक यश (Individual Achievements - 2026)' : 'Individual Achievements - 2026'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {individualAchievements.map((ia, idx) => (
                  <div key={idx} className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-1">
                    <span className="text-sm font-bold text-white block">
                      {showMr ? ia.nameMr : ia.nameEn}
                    </span>
                    <p className="text-xs text-amber-300 font-semibold font-sans">
                      {showMr ? ia.achievementMr : ia.achievementEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Achievement Photo Showcase Grid (5 Slots) */}
            <div className="bg-slate-900/40 border border-amber-500/20 rounded-2xl p-5 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {showMr ? 'विद्यार्थी यश व पारितोषिक क्षणचित्रे' : 'Student Achievement & Award Highlights'}
                  </span>
                </div>
                <span className="text-[11px] text-amber-400/80 font-mono font-medium">
                  ५ छायाचित्रे / 5 Photos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { src: skppImg1, titleEn: "Achievement Certificate 1", titleMr: "यशस्वी विद्यार्थी सन्मान १" },
                  { src: skppImg2, titleEn: "Achievement Certificate 2", titleMr: "यशस्वी विद्यार्थी सन्मान २" },
                  { src: skppImg3, titleEn: "Achievement Certificate 3", titleMr: "यशस्वी विद्यार्थी सन्मान ३" },
                  { src: skppImg4, titleEn: "Achievement Certificate 4", titleMr: "यशस्वी विद्यार्थी सन्मान ४" },
                  { src: skppImg5, titleEn: "Achievement Certificate 5", titleMr: "यशस्वी विद्यार्थी सन्मान ५" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setPreviewImage(item.src)}
                    className="group relative bg-slate-950/80 rounded-xl overflow-hidden border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-amber-500/20 cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                      <img
                        src={item.src}
                        alt={item.titleEn}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
                        <span className="text-[11px] font-sans font-semibold text-amber-300 bg-slate-900/90 px-2 py-0.5 rounded border border-amber-500/40">
                          {showMr ? item.titleMr : item.titleEn}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Staff Card Grid Section matching Secondary Section */}
            <PrimaryStaffSection selectedLang={selectedLang} id="skpp-primary-staff-overview" />
          </div>
        </div>
      )}

      {/* SECTION 2: STAFF LIST (41 MEMBERS) */}
      {activeTab === 'staff' && (
        <div className="space-y-6">
          <PrimaryStaffSection selectedLang={selectedLang} id="skpp-primary-staff-tab" />
        </div>
      )}

      {/* SECTION 3: ACADEMICS, EXAMS & COMMITTEES */}
      {activeTab === 'academics' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Exam Types & Manthan State Level */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Exam Types */}
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <GraduationCap className="w-6 h-6 text-amber-400 shrink-0" />
                <h2 className="text-lg font-display font-bold text-white">
                  {showEn && "Exams Conducted"}
                  {showMr && <span className="block text-amber-300 font-sans text-base font-bold">परीक्षा प्रकार</span>}
                </h2>
              </div>

              <div className="space-y-3">
                {examTypes.map((ex, idx) => (
                  <div key={idx} className="bg-white/5 p-3.5 rounded-xl border border-white/5 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-sans text-slate-200">
                      {showEn && ex.en}
                      {showEn && showMr && <br />}
                      {showMr && <span className="text-amber-300 font-semibold">{ex.mr}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manthan GK Exam Success */}
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Trophy className="w-6 h-6 text-amber-400 shrink-0" />
                <h2 className="text-lg font-display font-bold text-white">
                  {showEn && "Manthan State-Level General Knowledge Success"}
                  {showMr && <span className="block text-amber-300 font-sans text-base font-bold">मंथन सामान्य ज्ञान परीक्षा यश</span>}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {manthanSuccess.map((ms, idx) => (
                  <div key={idx} className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl text-center space-y-1">
                    <span className="text-xs font-bold text-amber-400 block">{ms.year}</span>
                    <span className="text-sm font-extrabold text-white block">
                      {showMr ? ms.countMr : ms.countEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* School Committees */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Users className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h2 className="text-2xl font-display font-bold text-white">
                  {showEn && "School Governance & Committees"}
                  {showMr && <span className="block text-amber-300 font-sans text-xl font-bold">विविध शालेय समित्या</span>}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {schoolCommittees.map((sc, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-white/10 p-4 rounded-2xl flex items-center gap-3 hover:border-amber-400/40 transition-all">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></div>
                  <span className="text-xs font-sans text-slate-200">
                    {showEn && sc.en}
                    {showEn && showMr && <br />}
                    {showMr && <span className="text-amber-300 font-semibold">{sc.mr}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: CO-CURRICULAR & JOYFUL SATURDAYS */}
      {activeTab === 'activities' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Key Activities Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h2 className="text-2xl font-display font-bold text-white">
                  {showEn && "Key Co-Curricular Activities & Festivals"}
                  {showMr && <span className="block text-amber-300 font-sans text-xl font-bold">प्रमुख सहशालेय उपक्रम</span>}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {keyActivities.map((act, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-amber-400/30 transition-all">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {showMr ? act.mr : act.en}
                  </span>
                  {showEn && showMr && (
                    <span className="text-xs text-slate-300 block font-sans">
                      {act.en}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Joyful Saturday & Cubs Bulbul */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Joyful Saturday */}
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Smile className="w-6 h-6 text-amber-400 shrink-0" />
                <h2 className="text-lg font-display font-bold text-white">
                  {showEn && "Joyful Saturday Activities"}
                  {showMr && <span className="block text-amber-300 font-sans text-base font-bold">आनंददायी शनिवार</span>}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {joyfulSaturday.map((js, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/5 text-xs text-slate-200 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {js}
                  </div>
                ))}
              </div>
            </div>

            {/* Special Initiatives */}
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {showMr ? 'कब्ज बुलबुल उपक्रम (Cubs & Bulbul Activity)' : 'Cubs & Bulbul Activity'}
                </span>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {showMr ? 'अनाथआश्रमात जाऊन रक्षाबंधन सण उत्साहात साजरा करणे.' : 'Celebrating Raksha Bandhan at an orphanage with social care and love.'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {showMr ? 'विशेष प्रकल्प (Special Presentation)' : 'Special Presentation'}
                </span>
                <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20">
                  <p className="text-xs text-amber-200 font-sans font-medium leading-relaxed">
                    {showMr ? 'मराठी भाषेला अभिजात दर्जा मिळाल्याबद्दल विशेष प्रकल्प सादरीकरण.' : 'Special presentation celebrating Classical Language Status conferred upon Marathi.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: PHOTO GALLERY (WEBSITE PHOTOS ARCHIVE) */}
      {activeTab === 'gallery' && (
        <div className="animate-fadeIn">
          <SKPPVGallery />
        </div>
      )}

      {/* Photo Preview Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 text-white rounded-full p-2 border border-amber-500/40 transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center max-h-[80vh]">
              <img
                src={previewImage}
                alt="Student Achievement Preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
