import React, { useState, useMemo } from 'react';
import {
  Search,
  Users,
  ChevronDown,
  ChevronUp,
  User,
  GraduationCap,
  Calendar,
  Briefcase,
  Award,
  Sparkles
} from 'lucide-react';
import {
  MAV_AIDED_TEACHING_STAFF,
  MAV_AIDED_NON_TEACHING_STAFF,
  MAV_UNAIDED_TEACHING_STAFF,
  MAV_UNAIDED_NON_TEACHING_STAFF,
  MAVStaffRecord
} from '../data/mavStaffData';

type CategoryKey = 'aided-teaching' | 'aided-non-teaching' | 'unaided-teaching' | 'unaided-non-teaching';

interface MAVStaffSectionProps {
  selectedLang?: 'en' | 'mr' | 'both';
}

export default function MAVStaffSection({ selectedLang = 'both' }: MAVStaffSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('aided-teaching');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Tabs configuration
  const categories = [
    {
      id: 'aided-teaching' as CategoryKey,
      titleEn: 'Aided Teaching Staff',
      titleMr: 'शिक्षक माहिती (अनुदानित)',
      count: MAV_AIDED_TEACHING_STAFF.length,
      data: MAV_AIDED_TEACHING_STAFF,
      col6HeaderEn: 'Subject',
      col6HeaderMr: 'विषय',
      color: 'amber'
    },
    {
      id: 'aided-non-teaching' as CategoryKey,
      titleEn: 'Aided Non-Teaching Staff',
      titleMr: 'शिक्षकेतर माहिती (अनुदानित)',
      count: MAV_AIDED_NON_TEACHING_STAFF.length,
      data: MAV_AIDED_NON_TEACHING_STAFF,
      col6HeaderEn: 'Role / Post',
      col6HeaderMr: 'पद / काम',
      color: 'emerald'
    },
    {
      id: 'unaided-teaching' as CategoryKey,
      titleEn: 'Unaided Teaching Staff',
      titleMr: 'शिक्षक माहिती (विनाअनुदानित)',
      count: MAV_UNAIDED_TEACHING_STAFF.length,
      data: MAV_UNAIDED_TEACHING_STAFF,
      col6HeaderEn: 'Subject',
      col6HeaderMr: 'विषय',
      color: 'blue'
    },
    {
      id: 'unaided-non-teaching' as CategoryKey,
      titleEn: 'Unaided Non-Teaching Staff',
      titleMr: 'शिक्षकेतर माहिती (विनाअनुदानित)',
      count: MAV_UNAIDED_NON_TEACHING_STAFF.length,
      data: MAV_UNAIDED_NON_TEACHING_STAFF,
      col6HeaderEn: 'Role / Post',
      col6HeaderMr: 'पद / काम',
      color: 'purple'
    }
  ];

  const currentCategoryObj = useMemo(() => {
    return categories.find((c) => c.id === activeCategory) || categories[0];
  }, [activeCategory]);

  // Filter staff based on query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return currentCategoryObj.data;
    const q = searchQuery.toLowerCase().trim();
    return currentCategoryObj.data.filter((item) => {
      return (
        item.nameEn.toLowerCase().includes(q) ||
        item.nameMr.toLowerCase().includes(q) ||
        item.designationEn.toLowerCase().includes(q) ||
        item.designationMr.toLowerCase().includes(q) ||
        item.qualificationEn.toLowerCase().includes(q) ||
        item.subjectEn.toLowerCase().includes(q) ||
        item.subjectMr.toLowerCase().includes(q) ||
        item.appointmentDateEn.toLowerCase().includes(q)
      );
    });
  }, [currentCategoryObj, searchQuery]);

  // Slice for 5-row view vs Show All
  const displayedData = useMemo(() => {
    // If user is searching or showAll is true, display all filtered results
    if (showAll || searchQuery.trim().length > 0) {
      return filteredData;
    }
    return filteredData.slice(0, 5);
  }, [filteredData, showAll, searchQuery]);

  // Reset showAll and searchQuery when switching tabs
  const handleTabChange = (catId: CategoryKey) => {
    setActiveCategory(catId);
    setSearchQuery('');
    setShowAll(false);
  };

  return (
    <section
      id="mav-staff-directory"
      className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 relative z-10 shadow-2xl font-sans mt-12"
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center space-x-2 font-mono bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20 inline-flex">
            <Users className="h-4 w-4" />
            <span>Staff Directory / शिक्षक व शिक्षकेतर कर्मचारी माहिती</span>
          </span>
          <h2 className="font-display font-black text-white text-2xl sm:text-3xl tracking-tight">
            Mahatma Gandhi Vidyalaya <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">/ कर्मचारी वृंद</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-sans">
            Comprehensive directory of Aided &amp; Unaided teaching and non-teaching personnel dedicated to student growth and academic quality.
          </p>
        </div>

        {/* Total Summary Badge */}
        <div className="bg-slate-900/80 border border-amber-400/30 px-5 py-2.5 rounded-2xl flex items-center space-x-3 text-xs font-mono shrink-0 shadow-lg">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <div>
            <div className="text-amber-300 font-bold">Total 92 Staff Records</div>
            <div className="text-slate-400 text-[10px]">५० अनुदानित शिक्षक | ४ शिक्षकेतर | २७ विना. | ११ विना.</div>
          </div>
        </div>
      </div>

      {/* Top Category Navigation Bar / Tabs */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-2 group relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-slate-900 border-amber-400/60 shadow-xl ring-1 ring-amber-400/50'
                    : 'bg-slate-900/50 border-white/10 hover:border-white/30 hover:bg-slate-900/80 text-slate-300'
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-200" />
                )}

                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-amber-300' : 'text-slate-400'}`}>
                    {cat.titleEn}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 border-amber-300'
                        : 'bg-white/5 text-slate-300 border-white/10'
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className={`font-display font-bold text-sm sm:text-base leading-snug ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {cat.titleMr}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {cat.count} {cat.id.includes('teaching') && !cat.id.includes('non') ? 'Teachers' : 'Staff Members'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Search & Results Info Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-white/10">
          {/* Search Box */}
          <div className="relative w-full sm:w-96 font-sans">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="h-4 w-4 text-amber-400/80" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search staff by name, role, subject, qualification..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count & Show All Status */}
          <div className="flex items-center space-x-3 text-xs text-slate-300 font-mono">
            <span>
              Showing <strong className="text-amber-400">{displayedData.length}</strong> of{' '}
              <strong className="text-white">{filteredData.length}</strong> records
            </span>
            {filteredData.length > 5 && !searchQuery && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-3.5 py-1.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <span>{showAll ? 'Show Top 5' : `Show All (${filteredData.length})`}</span>
                {showAll ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Staff Directory Table View (Desktop & Tablet) */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/60 shadow-inner">
        <table className="w-full text-left border-collapse font-sans">
          <thead>
            <tr className="bg-slate-900/90 text-amber-300 border-b border-white/10 text-xs font-mono uppercase tracking-wider">
              <th className="py-4 px-4 w-16 text-center border-r border-white/10">Sr. No.</th>
              <th className="py-4 px-6 border-r border-white/10">Name (English &amp; Marathi) / नाव</th>
              <th className="py-4 px-4 border-r border-white/10">Designation / पद</th>
              <th className="py-4 px-4 border-r border-white/10">Qualification / पात्रता</th>
              <th className="py-4 px-4 border-r border-white/10 w-36">Appointment Date</th>
              <th className="py-4 px-6">
                {currentCategoryObj.col6HeaderEn} / {currentCategoryObj.col6HeaderMr}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
            {displayedData.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400 font-sans">
                  <div className="space-y-2">
                    <User className="h-8 w-8 text-slate-500 mx-auto" />
                    <p className="text-base font-bold text-white">No Matching Staff Records Found</p>
                    <p className="text-xs text-slate-400">Try adjusting your search criteria.</p>
                  </div>
                </td>
              </tr>
            ) : (
              displayedData.map((record, index) => (
                <tr
                  key={`${activeCategory}-${record.sr}-${index}`}
                  className="hover:bg-white/5 transition-colors group"
                >
                  {/* Sr. No. */}
                  <td className="py-4 px-4 text-center font-mono font-bold text-slate-400 border-r border-white/5 group-hover:text-amber-400">
                    {record.sr}
                  </td>

                  {/* Name (English & Marathi) */}
                  <td className="py-4 px-6 border-r border-white/5 space-y-1">
                    <div className="font-bold text-white group-hover:text-amber-300 transition-colors text-sm">
                      {record.nameEn}
                    </div>
                    <div className="text-amber-200/90 font-medium text-xs font-sans">
                      {record.nameMr}
                    </div>
                  </td>

                  {/* Designation */}
                  <td className="py-4 px-4 border-r border-white/5 text-slate-300 font-medium">
                    <div className="inline-block bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 text-slate-200 text-xs">
                      {record.designationEn}
                    </div>
                  </td>

                  {/* Qualification */}
                  <td className="py-4 px-4 border-r border-white/5 text-slate-300 font-mono text-xs">
                    <span className="text-emerald-300 font-semibold">{record.qualificationEn}</span>
                  </td>

                  {/* Appointment Date */}
                  <td className="py-4 px-4 border-r border-white/5 text-slate-300 font-mono text-xs">
                    {record.appointmentDateEn !== '-' ? (
                      <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-white/10 text-amber-200">
                        {record.appointmentDateEn}
                      </span>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>

                  {/* Subject or Role / Post */}
                  <td className="py-4 px-6 text-slate-200 font-medium space-y-0.5">
                    <div className="text-amber-300 font-semibold">{record.subjectEn}</div>
                    {record.subjectMr !== record.subjectEn && (
                      <div className="text-slate-400 text-xs">{record.subjectMr}</div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (For Mobile Screens) */}
      <div className="block md:hidden space-y-4">
        {displayedData.length === 0 ? (
          <div className="p-8 text-center text-slate-400 bg-slate-950/60 rounded-2xl border border-white/10">
            No matching staff members found.
          </div>
        ) : (
          displayedData.map((record, index) => (
            <div
              key={`mobile-${activeCategory}-${record.sr}-${index}`}
              className="bg-slate-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="text-xs font-mono font-bold bg-amber-400/10 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  Sr. #{record.sr}
                </span>
                <span className="text-xs font-mono text-slate-400">{record.appointmentDateEn}</span>
              </div>

              <div className="space-y-0.5">
                <h4 className="font-bold text-white text-base leading-snug">{record.nameEn}</h4>
                <h5 className="text-amber-300 text-xs font-medium">{record.nameMr}</h5>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-white/5">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Designation</span>
                  <span className="text-slate-200 font-medium">{record.designationEn}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Qualification</span>
                  <span className="text-emerald-300 font-mono">{record.qualificationEn}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 text-xs">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">
                  {currentCategoryObj.col6HeaderEn} / {currentCategoryObj.col6HeaderMr}
                </span>
                <span className="text-amber-300 font-semibold">{record.subjectEn} ({record.subjectMr})</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Toggle Control for 5-row view vs Show All */}
      {filteredData.length > 5 && !searchQuery && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex items-center space-x-2 border border-amber-200"
          >
            <span>{showAll ? 'Show Top 5 Records Only' : `Show All ${filteredData.length} Records`}</span>
            {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      )}
    </section>
  );
}
