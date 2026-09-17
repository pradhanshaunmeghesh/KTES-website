/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, GraduationCap, Calendar, Users, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import {
  PRIMARY_AIDED_TEACHING_STAFF,
  PRIMARY_UNAIDED_TEACHING_STAFF,
  PRIMARY_UNAIDED_NON_TEACHING_STAFF,
  PrimaryStaffMember
} from '../data/primaryStaffData';

interface PrimaryStaffSectionProps {
  selectedLang?: 'en' | 'mr' | 'both';
  id?: string;
  className?: string;
}

export default function PrimaryStaffSection({
  selectedLang = 'both',
  id = 'primary-staff-section',
  className = ''
}: PrimaryStaffSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubsection, setActiveSubsection] = useState<'all' | 'aided' | 'unaided-teaching' | 'unaided-non-teaching'>('all');

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  const filterList = (list: PrimaryStaffMember[]) => {
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();
    return list.filter((st) => {
      return (
        st.nameEn.toLowerCase().includes(q) ||
        st.nameMr.toLowerCase().includes(q) ||
        st.designationEn.toLowerCase().includes(q) ||
        st.designationMr.toLowerCase().includes(q) ||
        st.qualifications.toLowerCase().includes(q) ||
        st.joinedDate.toLowerCase().includes(q)
      );
    });
  };

  const filteredAided = useMemo(() => filterList(PRIMARY_AIDED_TEACHING_STAFF), [searchQuery]);
  const filteredUnaidedTeaching = useMemo(() => filterList(PRIMARY_UNAIDED_TEACHING_STAFF), [searchQuery]);
  const filteredUnaidedNonTeaching = useMemo(() => filterList(PRIMARY_UNAIDED_NON_TEACHING_STAFF), [searchQuery]);

  const totalFilteredCount = filteredAided.length + filteredUnaidedTeaching.length + filteredUnaidedNonTeaching.length;

  const renderStaffCard = (st: PrimaryStaffMember, badgeLabel: string) => {
    return (
      <div
        key={`${st.category}-${st.sr}-${st.nameEn}`}
        className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl hover:border-amber-400/40 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-4 text-white group"
      >
        <div className="space-y-2.5">
          {/* Top Row: Name and Muted Gray Badge */}
          <div className="flex justify-between items-start gap-2">
            <div className="space-y-0.5 min-w-0">
              {showEn && (
                <h4 className="font-display font-bold text-white text-sm md:text-base leading-snug group-hover:text-amber-300 transition-colors">
                  {st.nameEn}
                </h4>
              )}
              {showMr && (
                <div className="text-xs text-amber-200/90 font-medium font-sans">
                  {st.nameMr}
                </div>
              )}
            </div>
            <span className="text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700/60 px-2.5 py-0.5 rounded-full shrink-0">
              {badgeLabel}
            </span>
          </div>

          {/* Amber / Gold Designation */}
          <div className="space-y-0.5">
            <div className="text-xs sm:text-sm text-amber-400 font-bold tracking-tight">
              {st.designationEn}
              {showMr && st.designationEn !== st.designationMr && (
                <span className="text-amber-300 font-medium ml-1.5 font-sans">/ {st.designationMr}</span>
              )}
            </div>
          </div>
        </div>

        {/* Qualifications and Joined Date Section with Clean Alignment */}
        <div className="border-t border-slate-800/80 pt-3 space-y-1.5 text-xs text-slate-300 font-sans">
          <div className="flex items-start gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-tight">
              <strong className="text-slate-400 font-semibold">
                {showMr ? 'पात्रता (Qualifications):' : 'Qualifications:'}
              </strong>{' '}
              <span className="text-emerald-300 font-mono font-medium">{st.qualifications}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <div className="leading-tight">
              <strong className="text-slate-400 font-semibold">
                {showMr ? 'रुजू दिनांक (Joined):' : 'Joined:'}
              </strong>{' '}
              <span className="text-amber-200/90 font-mono font-medium">{st.joinedDate}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id={id} className={`space-y-8 font-sans ${className}`}>
      {/* Section Title Banner */}
      <div className="bg-slate-900/95 border border-amber-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-6 relative z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-mono font-bold uppercase tracking-wider">
                Staff Directory / कर्मचारी नोंदवही
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Govt. Aided &amp; Self-Financed
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white tracking-tight">
              PRIMARY SECTION / प्राथमिक विभाग (41 STAFF MEMBERS)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans">
              {showMr
                ? 'अनुदानित व विनाअनुदानित शिक्षक आणि शिक्षकेतर कर्मचाऱ्यांची अधिकृत माहिती (पात्रता, पदनाम व रुजू दिनांक).'
                : 'Official roster of dedicated teaching and non-teaching personnel, qualifications, and appointment records.'}
            </p>
          </div>

          {/* Subsection filter tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveSubsection('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubsection === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Subsections (41)
            </button>
            <button
              onClick={() => setActiveSubsection('aided')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubsection === 'aided'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Aided (16)
            </button>
            <button
              onClick={() => setActiveSubsection('unaided-teaching')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubsection === 'unaided-teaching'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Unaided Teaching (16)
            </button>
            <button
              onClick={() => setActiveSubsection('unaided-non-teaching')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubsection === 'unaided-non-teaching'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Non-Teaching (8)
            </button>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden focus-within:border-amber-400/50 transition-all flex items-center px-3.5 py-2.5">
            <Search className="h-4 w-4 text-slate-400 shrink-0 mr-2.5" />
            <input
              type="text"
              placeholder="Search primary staff by name, designation, qualification, joined date..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 outline-none text-xs sm:text-sm text-white placeholder-slate-400 w-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-white text-xs cursor-pointer ml-2"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Showing <span className="text-amber-400 font-bold">{totalFilteredCount}</span> of{' '}
            <span className="text-white font-bold">41</span> staff records
          </div>
        </div>
      </div>

      {/* SUBSECTION 1: Aided Teaching Staff / शिक्षक कर्मचारी (अनुदानित) */}
      {(activeSubsection === 'all' || activeSubsection === 'aided') && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold font-mono text-xs">
                1
              </span>
              <div>
                <h3 className="font-display font-black text-white text-base sm:text-lg tracking-wide">
                  Subsection 1: Aided Teaching Staff / शिक्षक कर्मचारी (अनुदानित)
                </h3>
                <span className="text-xs text-slate-400">
                  Government Grant-in-Aid Primary Teachers • 16 Staff Members
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-800 text-emerald-300 border border-slate-700 px-3 py-1 rounded-full self-start sm:self-center">
              16 Members / १६ पदे
            </span>
          </div>

          {filteredAided.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center text-slate-400 text-xs italic">
              No matching aided teaching staff members found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredAided.map((st) => renderStaffCard(st, 'Aided-Staff'))}
            </div>
          )}
        </div>
      )}

      {/* SUBSECTION 2: Unaided Teaching Staff / शिक्षक कर्मचारी (विनाअनुदानित) */}
      {(activeSubsection === 'all' || activeSubsection === 'unaided-teaching') && (
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold font-mono text-xs">
                2
              </span>
              <div>
                <h3 className="font-display font-black text-white text-base sm:text-lg tracking-wide">
                  Subsection 2: Unaided Teaching Staff / शिक्षक कर्मचारी (विनाअनुदानित)
                </h3>
                <span className="text-xs text-slate-400">
                  Self-Financed Primary &amp; Balwadi Teaching Faculty • 16 Staff Members
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-800 text-blue-300 border border-slate-700 px-3 py-1 rounded-full self-start sm:self-center">
              16 Members / १६ पदे
            </span>
          </div>

          {filteredUnaidedTeaching.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center text-slate-400 text-xs italic">
              No matching unaided teaching staff members found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredUnaidedTeaching.map((st) => renderStaffCard(st, 'Unaided-Staff'))}
            </div>
          )}
        </div>
      )}

      {/* SUBSECTION 3: Unaided Non-Teaching Staff / शिक्षकेतर कर्मचारी (विनाअनुदानित) */}
      {(activeSubsection === 'all' || activeSubsection === 'unaided-non-teaching') && (
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold font-mono text-xs">
                3
              </span>
              <div>
                <h3 className="font-display font-black text-white text-base sm:text-lg tracking-wide">
                  Subsection 3: Unaided Non-Teaching Staff / शिक्षकेतर कर्मचारी (विनाअनुदानित)
                </h3>
                <span className="text-xs text-slate-400">
                  Administrative, Office, Clerical &amp; Support Personnel • 8 Staff Members
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-800 text-purple-300 border border-slate-700 px-3 py-1 rounded-full self-start sm:self-center">
              8 Members / ८ पदे
            </span>
          </div>

          {filteredUnaidedNonTeaching.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center text-slate-400 text-xs italic">
              No matching non-teaching staff members found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredUnaidedNonTeaching.map((st) => renderStaffCard(st, 'Non-Teaching'))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
