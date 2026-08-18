import { useState } from 'react';
import LibraryCarousel from './LibraryCarousel';
import InfrastructureFacilitiesCarousel from './InfrastructureFacilitiesCarousel';
import SportsAthleticsSection from './SportsAthleticsSection';
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
  Compass,
  ArrowUpRight,
  ChevronRight,
  Flame,
  LayoutGrid
} from 'lucide-react';

export default function EMSDeptView() {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>('both');
  const [staffSearchQuery, setStaffSearchQuery] = useState('');
  const [activeStaffSection, setActiveStaffSection] = useState<'all' | 'secondary' | 'primary' | 'pre-primary'>('all');

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  // 1. Core History & Legacy
  const historyStats = [
    { labelEn: 'Est. Year', labelMr: 'स्थापना वर्ष', value: 'June 15, 1989' },
    { labelEn: 'First Intake', labelMr: 'सुरूवातीची संख्या', value: '26 Junior KG Students' },
    { labelEn: 'First Principal', labelMr: 'पहिले मुख्याध्यापक', value: 'Mr. Shaikh Sir' },
    { labelEn: 'Current Strength (2025-26)', labelMr: 'सध्याची पटसंख्या (२०२५-२६)', value: '1,470 Active Pupils' },
    { labelEn: 'Total Classrooms', labelMr: 'एकूण वर्गखोल्या', value: '45 Classrooms' },
    { labelEn: 'Leadership', labelMr: 'शालेय नेतृत्व', value: 'Mr. Ganesh Dethe Sir (Principal)' }
  ];

  // Former Principals list
  const formerPrincipals = [
    { en: 'Mr. Shaikh Sir (First Principal - 1989)', mr: 'श्री. शेख सर (पहिले मुख्याध्यापक - १९८९)' },
    { en: 'Mr. Kulkarni Sir', mr: 'श्री. कुलकर्णी सर' },
    { en: 'Mrs. Sambhus Madam', mr: 'सौ. संभुस मॅडम' },
    { en: 'Mrs. Nair Madam', mr: 'सौ. नायर मॅडम' },
    { en: 'Mr. Ganesh Dethe Sir', mr: 'श्री. गणेश देठे सर' },
    { en: 'Mrs. Anita Gujrathi Madam', mr: 'सौ. अनिता गुजराती मॅडम' },
    { en: 'Mr. Chitalkar Yashwant Sir', mr: 'श्री. चितळकर यशवंत सर' },
    { en: 'Mrs. Thakur Jyoti Madam', mr: 'सौ. ठाकूर ज्योती मॅडम' },
    { en: 'Mrs. Bhujbal Manisha Madam', mr: 'सौ. भुजबळ मनिषा मॅडम' },
    { en: 'Mrs. Medge Mansi Madam', mr: 'सौ. मेडगे मानसी मॅडम' },
    { en: 'Mr. Prasad John Sir', mr: 'श्री. प्रसाद जॉन सर' }
  ];

  // 2. SSC Board Results Table (2015-2026)
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

  // 3. Scholarship V & VIII Exams Data
  const scholarshipV = [
    { year: '2020-21', appeared: 27, passed: 27, result: '100%', eligible: 6, highlightEn: 'Mugdha Raju Shinde - 4th at State Level', highlightMr: 'मुग्धा राजू शिंदे - राज्य पातळीवर ४ थी' },
    { year: '2022-23', appeared: 82, passed: 77, result: '93%', eligible: 9, highlightEn: 'Aryan Santosh Abhankar - 49th at State Level', highlightMr: 'आर्यन संतोष अभणकर - राज्य पातळीवर ४९ वा' },
    { year: '2023-24', appeared: 97, passed: 70, result: '72.16%', eligible: 11, highlightEn: 'N/A', highlightMr: 'N/A' },
    { year: '2024-25', appeared: 63, passed: 40, result: '63.49%', eligible: 8, highlightEn: 'N/A', highlightMr: 'N/A' }
  ];

  const scholarshipVIII = [
    { year: '2020-21', appeared: 24, passed: 23, result: '95%', eligible: 5, highlightEn: 'Atharva Arun Bhor - 26th at State Level', highlightMr: 'अथर्व अरुण भोर - राज्य पातळीवर २६ वा' },
    { year: '2022-23', appeared: 42, passed: 39, result: '92%', eligible: 7, highlightEn: 'Arya Avinash Shinde - 23rd at State Level', highlightMr: 'आर्या अविनाश शिंदे - राज्य पातळीवर २३ वी' },
    { year: '2023-24', appeared: 42, passed: 32, result: '76.19%', eligible: 4, highlightEn: 'Mugdha Raju Shinde - 19th at State Level & 8th at District Level', highlightMr: 'मुग्धा राजू शिंदे - राज्य पातळीवर १९ वी व जिल्हा पातळीवर ८ वी' },
    { year: '2024-25', appeared: 35, passed: 33, result: '94.28%', eligible: 6, highlightEn: 'N/A', highlightMr: 'N/A' }
  ];

  // MTSE Records
  const mtseData = [
    { year: '2022-23', students: '28 Students appeared', resultEn: 'Arya Avinash Shinde - 3rd at District Level. 3 students received Consolation Prizes.', resultMr: 'आर्या अविनाश शिंदे - जिल्हा पातळीवर ३ री. ३ विद्यार्थ्यांना उत्तेजनार्थ पारितोषिक.' },
    { year: '2023-24', students: '30 Students appeared', resultEn: 'Vaishnavi Anil Satkar – Consolation Prize.', resultMr: 'वैष्णवी अनिल सातकर – उत्तेजनार्थ पारितोषिक.' },
    { year: '2024-25', students: '30 Students appeared', resultEn: 'Iccha Ambar Takalkar - Consolation Prize.', resultMr: 'इच्छा अंबर टाकळकर - उत्तेजनार्थ पारितोषिक.' }
  ];

  // Olympiad wins
  const olympiadData = [
    { year: '2020-21', examEn: 'German Olympiad', examMr: 'जर्मन ऑलिम्पियाड', awardEn: 'Tanvi Balbhim Rale (1st at Level II), Trisha Sharad Gangare (1st at Level I)', awardMr: 'तन्वी बालभीम राळे (लेव्हल II मध्ये प्रथम), त्रिषा शरद गांगरे (लेव्हल I मध्ये प्रथम)' },
    { year: '2022-23', examEn: 'German Olympiad & NSO', examMr: 'जर्मन ऑलिम्पियाड आणि एनएसओ (NSO)', awardEn: 'Vaishnavi Anil Satkar (1st at district level in German), Rudra Pathare (3rd at National Level in NSO), Arohi Rahul Sandbhor (10th at state level in NSO)', awardMr: 'वैष्णवी अनिल सातकर (जर्मनमध्ये जिल्हा पातळीवर प्रथम), रुद्र पठारे (NSO मध्ये राष्ट्रीय पातळीवर ३ रा), आरोही राहुल सांडभोर (NSO मध्ये राज्य पातळीवर १० वी)' },
    { year: '2025-26', examEn: 'ITO Exam', examMr: 'आयटीओ (ITO) परीक्षा', awardEn: 'Excellence award - 12 students. State Toppers - 4 students.', awardMr: 'उत्कृष्टता पुरस्कार - १२ विद्यार्थी. राज्य पातळीवरील टॉपर - ४ विद्यार्थी.' }
  ];

  // 4. Co-curricular & Scout/Guides
  const happySaturdayEn = [
    'Yoga Day: Structured weekly Pranayam, meditation, and Suryanamaskar sessions.',
    'CCA Craft & Fine Arts: Rakhi making, Mehndi, Ganpati making, Kite making, Lantern making, Fancy dress, and Tree plantation.',
    'Important Day Celebrations: Dindi rally, English Day, Marathi Diwas, Hindi Diwas, Science Day, Ganpati Aarti, Shravani Shukrawar, and Bhondala.'
  ];
  const happySaturdayMr = [
    'योग दिन: साप्ताहिक प्राणायम, ध्यान आणि सूर्यनमस्कार सत्रांचे आयोजन.',
    'CCA कला आणि हस्तकला: राखी बनवणे, मेहंदी, गणपती मूर्ती बनवणे, पतंग बनवणे, आकाशकंदील बनवणे, फॅन्सी ड्रेस आणि वृक्षारोपण.',
    'महत्त्वाचे सण व उत्सव: भव्य दिंडी सोहळा, इंग्रजी दिन, मराठी भाषा दिवस, हिंदी दिवस, विज्ञान दिन, गणपती आरती, श्रावणी शुक्रवार आणि पारंपारिक भोंडला.'
  ];

  const scoutGuideInfo = {
    leaderEn: 'Led by National Leader Trainer Smt. Angelina Vinod Bhakare (First Lady Scout Trainer in India, Rajya Award Winner).',
    leaderMr: 'राष्ट्रीय मार्गदर्शक प्रशिक्षक श्रीमती एंजेलीना विनोद भाकरे (भारतातील पहिल्या महिला स्काऊट प्रशिक्षक, प्रतिष्ठित राज्य पुरस्कार विजेत्या) यांच्या नेतृत्वाखाली कार्यरत.',
    points: [
      { en: '14th National Jamboree (2002): Participated with 10 Scouts and 10 Guides.', mr: '१४ वे राष्ट्रीय जांबोरी (२००२): १० स्काऊट आणि १० गाईडसह सक्रिय सहभाग.' },
      { en: '15th National Jamboree (2005): Attended with 15 Scouts and 6 Guides.', mr: '१५ वे राष्ट्रीय जांबोरी (२००५): १५ स्काऊट आणि ६ गाईडसह उपस्थिती.' },
      { en: '21st World Jamboree (2007) - Hylands Park, UK: Smt. Angelina served as International Service Team (I.S.S.) Member.', mr: '२१ वे जागतिक जांबोरी (२००७) - हायलांड्स पार्क, युनायटेड किंगडम: श्रीमती एंजेलीना यांनी आंतरराष्ट्रीय सेवा दल (I.S.S.) सदस्य म्हणून कार्य केले.' },
      { en: 'Lakshmi Mazumdar State Level Award: Bestowed at Rajyapal Bhavan (Governor House, Maharashtra) for exemplary leadership.', mr: 'लक्ष्मी मजुमदार राज्यस्तरीय पुरस्कार: उल्लेखनीय कार्यासाठी राज्यपाल भवनातून (महाराष्ट्र राज्य) सन्मानित.' },
      { en: 'Boscoree Gatherings: Handled Maharashtra state Scout/Guide contingencies at Thanjavur (2022), Guwahati, Assam (2023), and Nashik (2024).', mr: 'बॉस्कोरी मेळावा: तंजावर (२०२२), गुवाहाटी, आसाम (२०२३) आणि नाशिक (२०२४) येथे महाराष्ट्र राज्याच्या पथकाचे नेतृत्व.' }
    ]
  };

  // 5. Complete Staff Directory
  const staffSecondary = [
    { name: 'Mr. Ganesh Chandrbhan Dethe', desEn: 'Principal', desMr: 'मुख्याध्यापक', qual: 'M.Sc. M.Ed, DSM', joined: '01-05-2026' },
    { name: 'Mrs. Mansi Santosh Medage', desEn: 'Vice Principal', desMr: 'उपमुख्याध्यापिका', qual: 'M.A. M.Ed', joined: '01-06-2025' },
    { name: 'Mrs. Anuradha Dattatray Gaikwad', desEn: 'Supervisor', desMr: 'पर्यवेक्षिका', qual: 'B.Sc. B.Ed, DSM', joined: '06-09-2006' },
    { name: 'Mrs. Jyoti Satyawan Thakur', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. M.Ed, DSM', joined: '14-06-1999' },
    { name: 'Mrs. Jyoti Hemant Rathod', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed, DSM', joined: '08-12-2004' },
    { name: 'Mrs. Vaishali Dilip Bacche', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. ATD', joined: '09-01-1999' },
    { name: 'Mrs. Manisha Vikas Bhujbal', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '11-10-2003' },
    { name: 'Mrs. Seema Ganesh Anande', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '06-01-2013' },
    { name: 'Mrs. Rupali Jalinder Manjare', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '03-08-2016' },
    { name: 'Mrs. Vasanti Nitin Gunjal', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '15-06-2017' },
    { name: 'Mrs. Sakshi Ajay Mudrankit', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '19-06-2013' },
    { name: 'Mrs. Sonali Jivan Sabale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: '17-08-2022' },
    { name: 'Mrs. Urmila Santosh Aawate', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '07-01-2023' },
    { name: 'Mrs. Sarika Vikas Ghanwat', desEn: 'Lab. Assistant', desMr: 'प्रयोगशाळा सहाय्यक', qual: 'B.Sc.', joined: '12-07-2021' },
    { name: 'Mr. Rushikesh Rajendra Khedkar', desEn: 'Clerk', desMr: 'लिपिक (क्लर्क)', qual: 'B.Com', joined: '03-08-2016' },
    { name: 'Mrs. Sangita Shankar Rokade', desEn: 'Peon', desMr: 'शिपाई', qual: 'SSC', joined: '23-06-2005' },
    { name: 'Mr. Namdev Nivrutti Sandbhor', desEn: 'Peon', desMr: 'शिपाई', qual: '9th', joined: '05-02-2010' }
  ];

  const staffPrimary = [
    { name: 'Mrs. Sunita Ramdas Pawar', desEn: 'Supervisor', desMr: 'पर्यवेक्षिका', qual: 'B.Com. D.Ed DSM', joined: '07-01-1994' },
    { name: 'Mrs. Pushpalata Milind Satkar', desEn: 'Supervisor', desMr: 'पर्यवेक्षिका', qual: 'B.A. D.Ed', joined: '18-06-1996' },
    { name: 'Smt. Angelina Vinod Bhakare', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'S.S.C. DPED', joined: '14-06-1990' },
    { name: 'Mrs. Ujwala Rajendra Pachpute', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '26-07-2004' },
    { name: 'Mrs. Rahima Nazim Inamdar', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. D.Ed', joined: '09-01-2005' },
    { name: 'Mrs. Deepali Nilesh Kumbhar', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: '19-06-2006' },
    { name: 'Mrs. Manasi Sainath Shivale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. A.T.D. A.M', joined: '07-12-2006' },
    { name: 'Mrs. Vanita Dnyaneshwar Shinde', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. TTC', joined: '07-10-2006' },
    { name: 'Mrs. Smita Chandrashekhar Rale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '06-02-2008' },
    { name: 'Mrs. Nayana Ramdas Hole', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'H.S.C. D.Ed', joined: '06-02-2008' },
    { name: 'Miss. Vasanti Manohar Tamhane', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Com', joined: '22-06-2009' },
    { name: 'Mrs. Supriya Ganesh Thigale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. / MBA', joined: '07-01-2013' },
    { name: 'Mrs. Supriya Ganesh Chaudhri', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. D.Ed', joined: '07-01-2014' },
    { name: 'Mrs. Vidhya Dipak Kashid', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '06-08-2015' },
    { name: 'Mrs. Hemangi Rakesh Patil', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Com. B.Ed', joined: '18-06-2015' },
    { name: 'Mrs. Vidula Mahesh Deshmukh', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '12-08-2015' },
    { name: 'Mrs. Adika Baban Divekar', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: '12-01-2018' },
    { name: 'Mrs. Sushma Sopan Kale', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: '15-06-2018' },
    { name: 'Mrs. Manisha Laxman Supe', desEn: 'Co-Teacher', desMr: 'सह-शिक्षिका', qual: 'B.Com. B.Ed', joined: '06-08-2018' },
    { name: 'Mrs. Nilam Ganesh Totre', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.Sc. B.Ed', joined: '12-01-2022' },
    { name: 'Mrs. Tarannum Shabbir Momin', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc.', joined: '06-08-2022' },
    { name: 'Mrs. Aparna Mangesh Ronghe', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'HSC', joined: '06-08-2022' },
    { name: 'Mrs. Smita Amol Raut', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.Com.', joined: '18-08-2022' },
    { name: 'Mrs. Sayli Lokesh Chavan', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '15-06-2023' },
    { name: 'Mrs. Vasudha Vikrant Wakchaure', desEn: 'Librarian', desMr: 'ग्रंथपाल', qual: 'B.A., Librarian', joined: '17-06-2017' },
    { name: 'Mrs. Asha Shrihari Satpute', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: 'N/A' },
    { name: 'Mrs. Ashwini Amol Mali', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.Sc. B.Ed', joined: 'N/A' },
    { name: 'Mrs. Sanjana Avinash Khangate', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'Quals N/A', joined: 'N/A' },
    { name: 'Mrs. Aparna Rahul Tanpure', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'B.A. B.Ed', joined: 'N/A' },
    { name: 'Mrs. Rupali Somnath Medage', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. M.Ed', joined: 'N/A' },
    { name: 'Mr. Prathamesh Bhanudas Manjare', desEn: 'Asst. Teacher', desMr: 'क्रीडा शिक्षक / PT Teacher', qual: 'B.P.Ed', joined: 'N/A' },
    { name: 'Mrs. Ankita Ganesh Pokharkar', desEn: 'Clerk', desMr: 'लिपिक (क्लर्क)', qual: 'B.Com', joined: '02-02-2022' },
    { name: 'Mr. Vishal Bharat Bhosale', desEn: 'Peon', desMr: 'शिपाई', qual: '8th', joined: '06-02-2008' },
    { name: 'Smt. Manisha Ramdas Chavan', desEn: 'Peon', desMr: 'शिपाई', qual: 'N/A', joined: '06-01-2011' },
    { name: 'Smt. Mangal Rahul Shinde', desEn: 'Peon', desMr: 'शिपाई', qual: '8th', joined: '06-01-2022' },
    { name: 'Mrs. Manisha Dattatray Sandbhor', desEn: 'Peon', desMr: 'शिपाई', qual: '7th', joined: '21-11-2022' },
    { name: 'Smt. Manisha Shravan Adagale', desEn: 'Safai Kamgar', desMr: 'सफाई कामगार', qual: '7th', joined: '21-11-2022' },
    { name: 'Mr. Vishal Phulaware', desEn: 'Safai Kamgar', desMr: 'सफाई कामगार', qual: 'N/A', joined: 'N/A' },
    { name: 'Mr. Akshay Sunil Deshmukh', desEn: 'Peon (Night)', desMr: 'रात्रीचे शिपाई', qual: '10th', joined: '13-01-2022' }
  ];

  const staffPrePrimary = [
    { name: 'Mrs. Monali Bhagvan Pacharane', desEn: 'Co-Teacher', desMr: 'सह-शिक्षिका', qual: 'H.S.C. D.Ed', joined: '15-06-2012' },
    { name: 'Mrs. Sima Chandrakant Gaikwad', desEn: 'Asst. Teacher', desMr: 'सहाय्यक शिक्षिका', qual: 'M.A. B.Ed', joined: '15-06-2022' },
    { name: 'Mrs. Shweta Ganesh Satkar', desEn: 'Computer Teacher', desMr: 'संगणक शिक्षिका', qual: 'B.Sc. B.Ed / MCA', joined: '23-07-2014' },
    { name: 'Mrs. Vrushali Rutuj Deshmukh', desEn: 'Computer Teacher', desMr: 'संगणक शिक्षिका', qual: 'MCS', joined: '25-06-2015' },
    { name: 'Mrs. Hira Rohidas Kokane', desEn: 'Peon', desMr: 'शिपाई', qual: '10th', joined: '18-06-2025' }
  ];

  // Search filtering
  const filterStaff = (list: typeof staffSecondary) => {
    return list.filter((item) => {
      const q = staffSearchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.desEn.toLowerCase().includes(q) ||
        item.desMr.toLowerCase().includes(q) ||
        item.qual.toLowerCase().includes(q)
      );
    });
  };

  return (
    <div className="space-y-12 relative z-10" id="ems-full-wing-component">
      {/* 1. Header & Language Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 font-sans">
            <Sparkles className="h-4 w-4 animate-pulse text-amber-300" />
            <span>Wing Focus Spotlight / संस्थागत विभाग हायलाईट</span>
          </span>
          <h1 className="font-display font-black text-white text-3xl md:text-4xl">
            {showEn && <span className="block" style={{ fontSize: '32px' }}>Department — English Medium School Wing</span>}
            {showMr && <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200" style={{ lineHeight: '60px' }}>विभाग — इंग्लिश मीडियम स्कूल शाखा</span>}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
            Uncompromised academic delivery, values, and leadership since 1989.
          </p>
        </div>

        {/* Language controls */}
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

      {/* 2. History & Legacy Cards */}
      <section className="space-y-6">
        <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
          <Clock className="h-5 w-5 text-amber-400" />
          <span>Legacy & Core Institution Metrics / इतिहास आणि संस्थात्मक नोंदी</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historyStats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900/40 border border-white/10 p-5 rounded-2xl space-y-2 hover:border-amber-400/25 transition-all"
            >
              <div className="text-amber-400 font-mono text-[10px] uppercase font-bold tracking-widest">
                {selectedLang === 'mr' ? stat.labelMr : stat.labelEn}
              </div>
              <div className="text-white text-lg font-display font-extrabold">{stat.value}</div>
              <p className="text-xs text-slate-400">
                {selectedLang === 'both' && stat.labelEn !== stat.labelMr && (
                  <span className="block mt-1 italic text-[10px] border-t border-white/5 pt-1">
                    {stat.labelMr}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Former Principals Board */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4">
          <h3 className="font-display font-bold text-white text-sm flex items-center space-x-2">
            <Users className="h-4 w-4 text-amber-300" />
            <span>Honorable Former & Present Principals / आदरणीय माजी व विद्यमान मुख्याध्यापक</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {formerPrincipals.map((p, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/5 text-xs text-slate-250 flex items-center space-x-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0"></div>
                <div>
                  <div className="font-semibold text-white">{showEn ? p.en : p.mr}</div>
                  {selectedLang === 'both' && (
                    <div className="text-[10px] text-slate-400 font-medium italic mt-0.5">{p.mr}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Academic Excellence Tables */}
      <section className="space-y-8 border-t border-white/10 pt-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-black text-white flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-amber-400" />
            <span>1. SSC Board Examination Logs (2015–2026) / माध्यमिक शालान्त परीक्षा निकाल</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Continuous track record of consecutive 100% and near-100% pass percentages, massive counts of distinctions, and spectacular toppers.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-white/10 rounded-2.5xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans text-slate-200">
              <thead className="bg-white/5 text-amber-300 uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-4 font-bold font-display">Academic Year</th>
                  <th className="p-4 font-bold font-display text-center">Pupils Appeared</th>
                  <th className="p-4 font-bold font-display text-center">Passing %</th>
                  <th className="p-4 font-bold font-display">School Topper & Score</th>
                  <th className="p-4 font-bold font-display text-center">Distinction Holders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-medium">
                {sscResults.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white font-display text-sm">{row.year}</td>
                    <td className="p-4 text-center text-slate-300 text-sm">{row.count}</td>
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-black font-mono ${
                        row.result === '100%' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                      }`}>
                        {row.result}
                      </span>
                    </td>
                    <td className="p-4 text-white">
                      <div className="font-extrabold text-sm">{row.topper}</div>
                      <div className="text-[10px] text-amber-400 font-mono mt-0.5">Score: {row.topperPct}</div>
                    </td>
                    <td className="p-4 text-center font-extrabold text-white text-sm">{row.distinction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Competitive & Scholarship Section */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-display font-black text-white flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-amber-400" />
            <span>2. Scholarship Exams Tracking (Grade V & VIII) / शिष्यवृत्ती परीक्षा निकाल</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Grade V Scholarship Table */}
            <div className="space-y-3 bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg">
              <h4 className="font-display font-bold text-amber-300 text-sm border-b border-white/10 pb-2">
                Grade V (5th Standard) scholarship logs
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px] text-slate-200">
                  <thead className="bg-white/5 text-slate-300 border-b border-white/5">
                    <tr>
                      <th className="p-2">Year</th>
                      <th className="p-2 text-center">Appeared</th>
                      <th className="p-2 text-center">Pass %</th>
                      <th className="p-2 text-center">Scholarship Holders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium">
                    {scholarshipV.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5">
                        <td className="p-2 font-bold text-white">{row.year}</td>
                        <td className="p-2 text-center">{row.appeared}</td>
                        <td className="p-2 text-center text-amber-300 font-mono">{row.result}</td>
                        <td className="p-2 text-center font-bold text-emerald-300">{row.eligible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Highlights */}
              <div className="mt-3 bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl text-[11px] leading-relaxed text-slate-300">
                <strong className="text-amber-400 block mb-1">State Level Ranks:</strong>
                <p>🏆 Mugdha Raju Shinde - State Rank 4th (2020-21)</p>
                <p className="mt-1">🏆 Aryan Santosh Abhankar - State Rank 49th (2022-23)</p>
              </div>
            </div>

            {/* Grade VIII Scholarship Table */}
            <div className="space-y-3 bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg">
              <h4 className="font-display font-bold text-amber-300 text-sm border-b border-white/10 pb-2">
                Grade VIII (8th Standard) scholarship logs
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px] text-slate-200">
                  <thead className="bg-white/5 text-slate-300 border-b border-white/5">
                    <tr>
                      <th className="p-2">Year</th>
                      <th className="p-2 text-center">Appeared</th>
                      <th className="p-2 text-center">Pass %</th>
                      <th className="p-2 text-center">Scholarship Holders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium">
                    {scholarshipVIII.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5">
                        <td className="p-2 font-bold text-white">{row.year}</td>
                        <td className="p-2 text-center">{row.appeared}</td>
                        <td className="p-2 text-center text-amber-300 font-mono">{row.result}</td>
                        <td className="p-2 text-center font-bold text-emerald-300">{row.eligible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl text-[11px] leading-relaxed text-slate-300">
                <strong className="text-amber-400 block mb-1">State Level Ranks:</strong>
                <p>🏆 Atharva Arun Bhor - State Rank 26th (2020-21)</p>
                <p className="mt-1">🏆 Arya Avinash Shinde - State Rank 23rd (2022-23)</p>
                <p className="mt-1">🏆 Mugdha Raju Shinde - State Rank 19th & District Rank 8th (2023-24)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. MTSE & Olympiads Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* MTSE */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
            <h4 className="font-display font-bold text-white text-base flex items-center space-x-2 border-b border-white/5 pb-2">
              <span className="p-1 rounded-lg bg-indigo-500/10 text-indigo-400">MTSE</span>
              <span>Maharashtra Talent Search Examination (MTSE)</span>
            </h4>
            <div className="space-y-3">
              {mtseData.map((m, i) => (
                <div key={i} className="text-xs space-y-1 bg-white/5 p-3 rounded-xl">
                  <div className="flex justify-between font-bold text-amber-300">
                    <span>Year: {m.year}</span>
                    <span className="text-[10px] text-slate-400">{m.students}</span>
                  </div>
                  <p className="text-slate-200">{m.resultEn}</p>
                  {selectedLang === 'both' && (
                    <p className="text-slate-400 text-[10px] italic border-t border-white/5 pt-1 mt-1">{m.resultMr}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Olympiads */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
            <h4 className="font-display font-bold text-white text-base flex items-center space-x-2 border-b border-white/5 pb-2">
              <span className="p-1 rounded-lg bg-pink-500/10 text-pink-400">NSO</span>
              <span>Olympiads & Science Wins</span>
            </h4>
            <div className="space-y-3">
              {olympiadData.map((ol, i) => (
                <div key={i} className="text-xs space-y-1 bg-white/5 p-3 rounded-xl">
                  <div className="flex justify-between font-bold text-amber-300">
                    <span>Year: {ol.year}</span>
                    <span className="text-[10px] text-slate-400">{ol.examEn}</span>
                  </div>
                  <p className="text-slate-200"><strong>Awards:</strong> {ol.awardEn}</p>
                  {selectedLang === 'both' && (
                    <p className="text-slate-400 text-[10px] italic border-t border-white/5 pt-1 mt-1">{ol.awardMr}</p>
                  )}
                </div>
              ))}
              <div className="bg-amber-400/10 border border-amber-400/20 p-3 rounded-xl text-xs text-amber-300 leading-relaxed font-sans font-bold">
                🚀 C.V. Raman Science Exam selection: Scholar **Iccha Ambar Takalkar** was selected for a fully funded educational study visit to the prestigious **ISRO (Indian Space Research Organisation)**.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Co-Curricular & Scouts/Guides */}
      <section className="space-y-8 border-t border-white/10 pt-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-black text-white flex items-center space-x-2">
            <Compass className="h-6 w-6 text-amber-400" />
            <span>Co-Curricular Life & Bharat Scout and Guide Legacy / स्काऊट आणि गाईड परंपरा</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Fostering holistic, all-round personality development, leadership training, and active sports habits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ananddayi Shanivar / Happy Saturday */}
          <div className="bg-slate-900/50 rounded-2.5xl p-6 border border-white/10 shadow-xl space-y-4">
            <span className="bg-amber-400/10 text-amber-400 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-amber-400/20">
              Activity Based Saturdays
            </span>
            <h3 className="font-display font-black text-white text-lg sm:text-xl">
              Ananddayi Shanivar (Happy Saturday) / आनंददायी शनिवार
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Every weekend is celebrated as a ‘Happy Saturday’ with structured, action-oriented, hands-on learning models designed to develop cooperative and leadership values.
            </p>

            <div className="space-y-2.5 pt-2">
              <strong className="text-xs text-amber-300 uppercase block font-mono">Routine Components:</strong>
              <ul className="space-y-2 text-xs text-slate-200">
                {(selectedLang === 'mr' ? happySaturdayMr : happySaturdayEn).map((act, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-xs text-slate-300 leading-relaxed">
              🌲 <strong>Majhi Shala Sundar Shala campaign:</strong> Successfully participates in the SARAL – Government of Maharashtra Education portal initiatives, securing top cleanliness and hygiene marks every consecutive cycle.
            </div>
          </div>

          {/* Bharat Scout and Guide */}
          <div className="bg-slate-900/50 rounded-2.5xl p-6 border border-white/10 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-emerald-400/10 text-emerald-400 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-emerald-400/20">
                National Trainer Led Legacy
              </span>
              <h3 className="font-display font-black text-white text-lg sm:text-xl">
                Bharat Scout and Guide Wing / भारत स्काऊट आणि गाईड विभाग
              </h3>
              <p className="text-xs text-slate-350 leading-normal border-l-2 border-amber-400 pl-3">
                {selectedLang === 'mr' ? scoutGuideInfo.leaderMr : scoutGuideInfo.leaderEn}
              </p>

              <div className="space-y-3 pt-1">
                <strong className="text-xs text-amber-300 uppercase block font-mono">Core Historical Achievements:</strong>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  {scoutGuideInfo.points.map((p, i) => (
                    <li key={i} className="flex items-start space-x-2 bg-white/5 p-2 rounded-xl border border-white/5">
                      <span className="h-2 w-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                      <div>
                        <span>{showEn ? p.en : p.mr}</span>
                        {selectedLang === 'both' && (
                          <span className="block text-[10px] text-slate-400 italic mt-0.5">{p.mr}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Infrastructure & Facilities Carousel */}
      <InfrastructureFacilitiesCarousel selectedLang={selectedLang} />

      {/* Sports & Athletic Facilities Section */}
      <SportsAthleticsSection selectedLang={selectedLang} />

      {/* Campus Facilities Carousel */}
      <LibraryCarousel selectedLang={selectedLang} />

      {/* 5. Complete Staff Directory */}
      <section className="space-y-8 border-t border-white/10 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1.5">
            <h2 className="text-2xl font-display font-black text-white">
              Complete Educational Staff Directory / संपूर्ण शिक्षक संचिका
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              We host qualified, experienced educators committed to molding future scholars.
            </p>
          </div>

          {/* Subsections selector buttons */}
          <div className="flex flex-wrap gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
            {(['all', 'secondary', 'primary', 'pre-primary'] as const).map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveStaffSection(sec)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeStaffSection === sec
                    ? 'bg-secondary text-primary-dark shadow font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {sec === 'all' && 'All Staff (61)'}
                {sec === 'secondary' && 'Secondary Wing (17)'}
                {sec === 'primary' && 'Primary Wing (39)'}
                {sec === 'pre-primary' && 'Pre-Primary Wing (5)'}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="relative max-w-md bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-amber-400/50 transition-all flex items-center px-3.5 py-2.5">
          <Search className="h-4 w-4 text-slate-400 shrink-0 mr-2.5" />
          <input
            type="text"
            placeholder="Search school staff by name, designation, qualifications..."
            value={staffSearchQuery}
            onChange={(e) => setStaffSearchQuery(e.target.value)}
            className="bg-transparent border-0 outline-0 p-0 text-xs sm:text-sm text-white placeholder-slate-400 w-full"
          />
        </div>

        {/* Staff cards grid */}
        <div className="space-y-8">
          {/* Secondary Wing Subsection */}
          {(activeStaffSection === 'all' || activeStaffSection === 'secondary') && (
            <div className="space-y-4">
              <h3 className="font-display font-black text-amber-300 text-sm border-l-4 border-amber-400 pl-3 uppercase tracking-wider">
                Secondary Section / माध्यमिक विभाग (17 staff members)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterStaff(staffSecondary).length === 0 ? (
                  <div className="col-span-full py-4 text-slate-400 text-xs italic">
                    No matching secondary section staff members found.
                  </div>
                ) : (
                  filterStaff(staffSecondary).map((st, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-2xl border border-white/10 p-5 shadow-xl hover:border-white/20 hover:bg-white/10 transition-all flex flex-col justify-between space-y-4 text-white"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-display font-black text-white text-sm">{st.name}</h4>
                          <span className="text-[9px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-slate-300">
                            Sec-Staff
                          </span>
                        </div>
                        <div className="text-xs text-amber-400 font-bold">{st.desEn}</div>
                        {selectedLang === 'both' && st.desEn !== st.desMr && (
                          <div className="text-[10px] text-slate-400 font-semibold">{st.desMr}</div>
                        )}
                      </div>
                      <div className="border-t border-white/5 pt-3 space-y-1 text-[11px] text-slate-300">
                        <div><strong>Qualifications:</strong> {st.qual}</div>
                        <div><strong>Joined:</strong> {st.joined}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Primary Wing Subsection */}
          {(activeStaffSection === 'all' || activeStaffSection === 'primary') && (
            <div className="space-y-4 pt-4">
              <h3 className="font-display font-black text-amber-300 text-sm border-l-4 border-amber-400 pl-3 uppercase tracking-wider">
                Primary Section / प्राथमिक विभाग (39 staff members)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterStaff(staffPrimary).length === 0 ? (
                  <div className="col-span-full py-4 text-slate-400 text-xs italic">
                    No matching primary section staff members found.
                  </div>
                ) : (
                  filterStaff(staffPrimary).map((st, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-2xl border border-white/10 p-5 shadow-xl hover:border-white/20 hover:bg-white/10 transition-all flex flex-col justify-between space-y-4 text-white"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-display font-black text-white text-sm">{st.name}</h4>
                          <span className="text-[9px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-slate-300">
                            Pri-Staff
                          </span>
                        </div>
                        <div className="text-xs text-amber-400 font-bold">{st.desEn}</div>
                        {selectedLang === 'both' && st.desEn !== st.desMr && (
                          <div className="text-[10px] text-slate-400 font-semibold">{st.desMr}</div>
                        )}
                      </div>
                      <div className="border-t border-white/5 pt-3 space-y-1 text-[11px] text-slate-300">
                        <div><strong>Qualifications:</strong> {st.qual}</div>
                        <div><strong>Joined:</strong> {st.joined}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Pre-Primary Wing Subsection */}
          {(activeStaffSection === 'all' || activeStaffSection === 'pre-primary') && (
            <div className="space-y-4 pt-4">
              <h3 className="font-display font-black text-amber-300 text-sm border-l-4 border-amber-400 pl-3 uppercase tracking-wider">
                Pre-Primary Section / पूर्व-प्राथमिक विभाग (5 staff members)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterStaff(staffPrePrimary).length === 0 ? (
                  <div className="col-span-full py-4 text-slate-400 text-xs italic">
                    No matching pre-primary section staff members found.
                  </div>
                ) : (
                  filterStaff(staffPrePrimary).map((st, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-2xl border border-white/10 p-5 shadow-xl hover:border-white/20 hover:bg-white/10 transition-all flex flex-col justify-between space-y-4 text-white"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-display font-black text-white text-sm">{st.name}</h4>
                          <span className="text-[9px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-slate-300">
                            Pre-Pri-Staff
                          </span>
                        </div>
                        <div className="text-xs text-amber-400 font-bold">{st.desEn}</div>
                        {selectedLang === 'both' && st.desEn !== st.desMr && (
                          <div className="text-[10px] text-slate-400 font-semibold">{st.desMr}</div>
                        )}
                      </div>
                      <div className="border-t border-white/5 pt-3 space-y-1 text-[11px] text-slate-300">
                        <div><strong>Qualifications:</strong> {st.qual}</div>
                        <div><strong>Joined:</strong> {st.joined}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
