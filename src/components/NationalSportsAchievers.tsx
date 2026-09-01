import React, { useState, useMemo } from 'react';
import {
  Trophy,
  Medal,
  Award,
  Search,
  Filter,
  RotateCcw,
  Sparkles,
  Calendar,
  Layers,
  CheckCircle2,
  Table as TableIcon,
  LayoutGrid
} from 'lucide-react';

export interface SportsAchiever {
  id: number;
  year: string;
  nameEn: string;
  nameMr: string;
  sportEn: string;
  sportMr: string;
  achievementEn: string;
  achievementMr: string;
  rankType: 'gold' | 'bronze' | 'state-gold' | 'participant';
}

export const nationalSportsAchieversData: SportsAchiever[] = [
  {
    id: 1,
    year: '2002-03',
    nameEn: 'Ankush Sunanda Shridhar',
    nameMr: 'अंकुश सुनंदा श्रीधर',
    sportEn: 'Long Jump',
    sportMr: 'लांब उडी',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 2,
    year: '2008-09',
    nameEn: 'Gupta Dilipkumar Rohit',
    nameMr: 'गुप्ता दिलिपकुमार रोहित',
    sportEn: 'Discus Throw',
    sportMr: 'थाळीफेक',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 3,
    year: '2008-09',
    nameEn: 'Hole Priti Shivaji',
    nameMr: 'होले प्रीती शिवाजी',
    sportEn: 'Discus Throw',
    sportMr: 'थाळीफेक',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 4,
    year: '2008-09',
    nameEn: 'Pokharkar Sagar Namdev',
    nameMr: 'पोखरकर सागर नामदेव',
    sportEn: 'Weightlifting',
    sportMr: 'वेटलिफ्टिंग (भारोत्तोलन)',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 5,
    year: '2008-09',
    nameEn: 'Date Priyanka Sunil',
    nameMr: 'दाते प्रियांका सुनिल',
    sportEn: 'Weightlifting',
    sportMr: 'वेटलिफ्टिंग (भारोत्तोलन)',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 6,
    year: '2008-09',
    nameEn: 'Kanawade Nikhil Annasaheb',
    nameMr: 'कानवडे निखिल आण्णासाहेब',
    sportEn: 'Weightlifting',
    sportMr: 'वेटलिफ्टिंग (भारोत्तोलन)',
    achievementEn: 'National 3rd Rank',
    achievementMr: 'राष्ट्रीय तृतीय क्रमांक (कांस्य पदक)',
    rankType: 'bronze'
  },
  {
    id: 7,
    year: '2009-10',
    nameEn: 'Birade Dhanashree Dinesh',
    nameMr: 'बिराडे धनश्री दिनेश',
    sportEn: 'Taekwondo',
    sportMr: 'ताईक्वांदो',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 8,
    year: '2010-11',
    nameEn: 'Karpe Prachi Pradip',
    nameMr: 'कर्पे प्राची प्रदिप',
    sportEn: 'Taekwondo',
    sportMr: 'ताईक्वांदो',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 9,
    year: '2010-11',
    nameEn: 'Bombale Omkar Anil',
    nameMr: 'बोंबले ओंकार अनिल',
    sportEn: 'Taekwondo',
    sportMr: 'ताईक्वांदो',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 10,
    year: '2010-11',
    nameEn: 'Bhogade Rutuja Rohidas',
    nameMr: 'भोगाडे ऋतुजा रोहिदास',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 11,
    year: '2010-11',
    nameEn: 'Londhe Triveni Vasant',
    nameMr: 'लोंढे त्रिवेणी वसंत',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 12,
    year: '2010-11',
    nameEn: 'Sontakke Ishant Sharad',
    nameMr: 'सोनटक्के इशांत शरद',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 13,
    year: '2010-11',
    nameEn: 'Gupta Dilipkumar Rohit',
    nameMr: 'गुप्ता दिलिपकुमार रोहित',
    sportEn: 'Weightlifting',
    sportMr: 'वेटलिफ्टिंग (भारोत्तोलन)',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 14,
    year: '2010-11',
    nameEn: 'Date Priyanka Sunil',
    nameMr: 'दाते प्रियांका सुनिल',
    sportEn: 'Weightlifting',
    sportMr: 'वेटलिफ्टिंग (भारोत्तोलन)',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 15,
    year: '2010-11',
    nameEn: 'Gupta Dilipkumar Rohit',
    nameMr: 'गुप्ता दिलिपकुमार रोहित',
    sportEn: 'Weightlifting',
    sportMr: 'वेटलिफ्टिंग (भारोत्तोलन)',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 16,
    year: '2010-11',
    nameEn: 'Arbuj Niket Eknath',
    nameMr: 'आरबुज निकेत एकनाथ',
    sportEn: 'Weightlifting',
    sportMr: 'वेटलिफ्टिंग (भारोत्तोलन)',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 17,
    year: '2011-12',
    nameEn: 'Mahakal Omkar Chhagan',
    nameMr: 'महाकाळ ओंकार छगन',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 18,
    year: '2011-12',
    nameEn: 'Patil Pratiksha Digambar',
    nameMr: 'पाटील प्रतिक्षा दिगंबर',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 19,
    year: '2011-12',
    nameEn: 'Bhogade Rutuja Rohidas',
    nameMr: 'भोगाडे ऋतुजा रोहिदास',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 20,
    year: '2011-12',
    nameEn: 'Lokhande Ankita Dilip',
    nameMr: 'लोखंडे अंकिता दिलीप',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 21,
    year: '2012-13',
    nameEn: 'Epatil Tushar Srikumar',
    nameMr: 'ईपाटील तुषार श्रीकुमार',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'State 1st Rank',
    achievementMr: 'राज्य प्रथम क्रमांक (सुवर्ण पदक)',
    rankType: 'state-gold'
  },
  {
    id: 22,
    year: '2012-13',
    nameEn: 'Fakir Saqlain Amiruddin',
    nameMr: 'फकिर सकलेन अमिरउददीन',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 23,
    year: '2012-13',
    nameEn: 'Mahadik Shubham Rajendra',
    nameMr: 'महाडिक शुभम राजेंद्र',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 24,
    year: '2012-13',
    nameEn: 'Manjare Snehankita Dilip',
    nameMr: 'मांजरे स्नेहांकिता दिलीप',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 25,
    year: '2012-13',
    nameEn: 'Bhangade Rutuja Rohidas',
    nameMr: 'भांगाडे ऋतुजा रोहिदास',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 26,
    year: '2013-14',
    nameEn: 'Takalkar Shriprasad Senapati',
    nameMr: 'टाकळकर श्रीप्रसाद सेनापती',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 27,
    year: '2013-14',
    nameEn: 'Bhagat Sarvesh Kishor',
    nameMr: 'भगत सर्वेश किशोर',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 28,
    year: '2022-23',
    nameEn: 'Retawade Yash Ramdas',
    nameMr: 'रेटवडे यश रामदास',
    sportEn: 'Netball',
    sportMr: 'नेटबॉल',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 29,
    year: '2022-23',
    nameEn: 'Kale Tanishka Shivaji',
    nameMr: 'काळे तनिष्का शिवाजी',
    sportEn: 'Taekwondo',
    sportMr: 'ताईक्वांदो',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  },
  {
    id: 30,
    year: '2024-25',
    nameEn: 'Rutuja Vijay Rakshe',
    nameMr: 'ऋतुजा विजय राक्षे',
    sportEn: 'Taekwondo',
    sportMr: 'ताईक्वांदो',
    achievementEn: 'National 3rd Rank',
    achievementMr: 'राष्ट्रीय तृतीय क्रमांक (कांस्य पदक)',
    rankType: 'bronze'
  },
  {
    id: 31,
    year: '2024-25',
    nameEn: 'Aryan Nitin Varkad',
    nameMr: 'आर्यन नितीन वरकड',
    sportEn: 'Baseball',
    sportMr: 'बेसबॉल',
    achievementEn: 'National 3rd Rank',
    achievementMr: 'राष्ट्रीय तृतीय क्रमांक (कांस्य पदक)',
    rankType: 'bronze'
  },
  {
    id: 32,
    year: '2024-25',
    nameEn: 'Uday Ramdas Retawade',
    nameMr: 'उदय रामदास रेटवडे',
    sportEn: 'Baseball',
    sportMr: 'बेसबॉल',
    achievementEn: 'National 1st Rank',
    achievementMr: 'राष्ट्रीय प्रथम क्रमांक (सुवर्ण पदक)',
    rankType: 'gold'
  },
  {
    id: 33,
    year: '2025-26',
    nameEn: 'Arya Manik Hole',
    nameMr: 'आर्या माणिक होले',
    sportEn: 'Taekwondo',
    sportMr: 'ताईक्वांदो',
    achievementEn: 'National Participant',
    achievementMr: 'राष्ट्रीय सहभाग',
    rankType: 'participant'
  }
];

export default function NationalSportsAchievers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState('ALL');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Sport Options
  const sportsList = useMemo(() => {
    const sports = Array.from(new Set(nationalSportsAchieversData.map(s => s.sportEn)));
    return ['ALL', ...sports];
  }, []);

  // Year Options (Sorted reverse chronological)
  const yearsList = useMemo(() => {
    const years = Array.from(new Set(nationalSportsAchieversData.map(s => s.year)));
    return ['ALL', ...years.sort((a, b) => b.localeCompare(a))];
  }, []);

  // Achievement Level Options
  const levelList = [
    { value: 'ALL', labelEn: 'All Achievements', labelMr: 'सर्व प्राविण्य स्तर' },
    { value: 'National 1st Rank', labelEn: 'National 1st Rank (Gold)', labelMr: 'राष्ट्रीय १ ला क्रमांक (सुवर्ण)' },
    { value: 'National 3rd Rank', labelEn: 'National 3rd Rank (Bronze)', labelMr: 'राष्ट्रीय ३ रा क्रमांक (कांस्य)' },
    { value: 'State 1st Rank', labelEn: 'State 1st Rank (Gold)', labelMr: 'राज्य १ ला क्रमांक (सुवर्ण)' },
    { value: 'National Participant', labelEn: 'National Participant', labelMr: 'राष्ट्रीय सहभाग' }
  ];

  // Filtering Logic
  const filteredAchievers = useMemo(() => {
    return nationalSportsAchieversData.filter(item => {
      const matchesSearch =
        !searchQuery.trim() ||
        item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameMr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sportEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sportMr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.year.includes(searchQuery) ||
        item.achievementEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.achievementMr.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSport = selectedSport === 'ALL' || item.sportEn === selectedSport;
      const matchesYear = selectedYear === 'ALL' || item.year === selectedYear;
      const matchesLevel = selectedLevel === 'ALL' || item.achievementEn === selectedLevel;

      return matchesSearch && matchesSport && matchesYear && matchesLevel;
    });
  }, [searchQuery, selectedSport, selectedYear, selectedLevel]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSport('ALL');
    setSelectedYear('ALL');
    setSelectedLevel('ALL');
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedSport !== 'ALL' ||
    selectedYear !== 'ALL' ||
    selectedLevel !== 'ALL';

  // Badge Renderer
  const renderAchievementBadge = (item: SportsAchiever) => {
    switch (item.rankType) {
      case 'gold':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            <span>{item.achievementEn}</span>
          </span>
        );
      case 'bronze':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm">
            <Medal className="w-3.5 h-3.5 text-orange-400" />
            <span>{item.achievementEn}</span>
          </span>
        );
      case 'state-gold':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>{item.achievementEn}</span>
          </span>
        );
      case 'participant':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-300 border border-blue-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>{item.achievementEn}</span>
          </span>
        );
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#0a192f] via-[#051124] to-[#020b18] border border-amber-500/25 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xl relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 space-y-4 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honor Roll of Champions | क्रीडा यशोगाथा</span>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
              Total: <strong className="text-amber-400 font-display font-bold">33 Athletes</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hidden sm:inline-block">
              Sports: <strong className="text-amber-400 font-display font-bold">6 Disciplines</strong>
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-display font-black text-white leading-tight">
            Mahatma Gandhi Vidyalaya, Rajgurunagar - National Sports Achievers
          </h2>
          <p className="text-base sm:text-lg text-amber-300 font-display font-bold">
            महात्मा गांधी विद्यालय, राजगुरुनगर - राष्ट्रीयस्तरावरील सहभागी व प्राविण्यप्राप्त खेळाडूंची यादी
          </p>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl font-sans">
          A glorious legacy of sporting grit and national glory. Our students represent Maharashtra and Mahatma Gandhi Vidyalaya in prestigious National School Games, Federation Tournaments, and State Championships across athletics, martial arts, ball games, and strength disciplines.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="relative z-10 space-y-4 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Search Box */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by student, sport, year (नाव / खेळ / वर्ष)..."
              className="w-full bg-[#000c24]/80 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sport Filter */}
          <div className="lg:col-span-3">
            <div className="relative">
              <select
                value={selectedSport}
                onChange={e => setSelectedSport(e.target.value)}
                className="w-full bg-[#000c24]/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer appearance-none"
              >
                <option value="ALL" className="bg-slate-900 text-white">All Sports (सर्व खेळ)</option>
                {sportsList.filter(s => s !== 'ALL').map(sport => (
                  <option key={sport} value={sport} className="bg-slate-900 text-white">
                    {sport}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Year Filter */}
          <div className="lg:col-span-2">
            <div className="relative">
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="w-full bg-[#000c24]/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer appearance-none"
              >
                <option value="ALL" className="bg-slate-900 text-white">All Years (सर्व वर्षे)</option>
                {yearsList.filter(y => y !== 'ALL').map(yr => (
                  <option key={yr} value={yr} className="bg-slate-900 text-white">
                    {yr}
                  </option>
                ))}
              </select>
              <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Achievement Level Filter */}
          <div className="lg:col-span-3">
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={e => setSelectedLevel(e.target.value)}
                className="w-full bg-[#000c24]/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer appearance-none"
              >
                {levelList.map(lvl => (
                  <option key={lvl.value} value={lvl.value} className="bg-slate-900 text-white">
                    {lvl.labelEn}
                  </option>
                ))}
              </select>
              <Trophy className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* View Toggle & Reset Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
          <div className="text-slate-300">
            Showing <strong className="text-amber-400">{filteredAchievers.length}</strong> of{' '}
            <strong className="text-white">{nationalSportsAchieversData.length}</strong> student athletes
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="ml-3 inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Filters (सर्व फिल्टर रीसेट करा)
              </button>
            )}
          </div>

          {/* Table / Grid Toggle */}
          <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table View</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Card Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Content */}
      {filteredAchievers.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-display font-bold text-white">No Matching Achievers Found</h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            We couldn't find any student athlete matching your search criteria. Try modifying your sport, year, or search query.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-lg inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : viewMode === 'table' ? (
        /* RESPONSIVE DATA TABLE VIEW */
        <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#000c24] border-b border-white/10 text-[11px] sm:text-xs uppercase font-display font-bold tracking-wider text-amber-400">
                <tr>
                  <th className="px-4 py-3.5 w-14 text-center">#</th>
                  <th className="px-4 py-3.5">Academic Year / शैक्षणिक वर्ष</th>
                  <th className="px-5 py-3.5">Student Name / खेळाडूचे नाव</th>
                  <th className="px-4 py-3.5">Sport / खेळ</th>
                  <th className="px-5 py-3.5">Achievement / प्राविण्य स्तर</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {filteredAchievers.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-white/[0.04] transition-colors group"
                  >
                    {/* Index */}
                    <td className="px-4 py-3 text-center text-slate-400 font-mono text-xs group-hover:text-amber-400">
                      {idx + 1}
                    </td>

                    {/* Academic Year */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono font-semibold text-slate-200">
                        <Calendar className="w-3 h-3 text-amber-400" />
                        {item.year}
                      </span>
                    </td>

                    {/* Student Name (English + Marathi) */}
                    <td className="px-5 py-3">
                      <div className="space-y-0.5">
                        <div className="font-display font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                          {item.nameEn}
                        </div>
                        <div className="text-xs text-amber-400/90 font-medium">
                          {item.nameMr}
                        </div>
                      </div>
                    </td>

                    {/* Sport */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-200">{item.sportEn}</div>
                        <div className="text-[11px] text-slate-400 font-medium">{item.sportMr}</div>
                      </div>
                    </td>

                    {/* Achievement Level Badge & Marathi Text */}
                    <td className="px-5 py-3">
                      <div className="space-y-1">
                        <div>{renderAchievementBadge(item)}</div>
                        <div className="text-[11px] text-slate-300 font-medium pl-1">
                          {item.achievementMr}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* INTERACTIVE CARD GRID VIEW */
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredAchievers.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-2xl p-5 border transition-all duration-300 space-y-4 relative overflow-hidden group shadow-lg ${
                item.rankType === 'gold'
                  ? 'bg-amber-950/20 border-amber-500/40 hover:border-amber-400 hover:bg-amber-950/30'
                  : item.rankType === 'bronze'
                  ? 'bg-orange-950/20 border-orange-500/35 hover:border-orange-400 hover:bg-orange-950/30'
                  : item.rankType === 'state-gold'
                  ? 'bg-emerald-950/20 border-emerald-500/35 hover:border-emerald-400 hover:bg-emerald-950/30'
                  : 'bg-white/5 border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08]'
              }`}
            >
              {/* Top Row: Year & Index */}
              <div className="flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/40 border border-white/10 font-mono text-slate-300 font-semibold">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  {item.year}
                </span>
                <span className="text-[11px] font-mono text-slate-400">#{idx + 1}</span>
              </div>

              {/* Student Name */}
              <div className="space-y-1">
                <h4 className="text-base font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.nameEn}
                </h4>
                <p className="text-xs text-amber-400 font-medium">
                  {item.nameMr}
                </p>
              </div>

              {/* Sport Category */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px] uppercase font-bold tracking-wider">Sport</span>
                <div className="text-right">
                  <span className="font-bold text-slate-200 block">{item.sportEn}</span>
                  <span className="text-[11px] text-slate-400">{item.sportMr}</span>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="pt-1">
                {renderAchievementBadge(item)}
                <div className="text-[11px] text-slate-300 font-medium mt-1 pl-1">
                  {item.achievementMr}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Acknowledgement Note */}
      <div className="relative z-10 bg-black/30 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Physical Education Department, Mahatma Gandhi Vidyalaya & Junior College, Rajgurunagar (Khed).
          </span>
        </div>
        <span className="text-[11px] text-amber-400/90 font-mono uppercase tracking-wider">
          Official Records (2002 - 2026)
        </span>
      </div>
    </section>
  );
}
