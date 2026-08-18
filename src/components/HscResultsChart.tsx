import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Calendar, CheckCircle2, ChevronRight, BarChart3, ListOrdered } from 'lucide-react';

interface HscResultsChartProps {
  selectedLang: 'en' | 'mr' | 'both';
}

const HSC_DATA = [
  { year: '2016-17', percentage: 100, labelEn: 'Perfect Pass Outturn', labelMr: '१००% उत्कृष्ट निकाल' },
  { year: '2017-18', percentage: 99.59, labelEn: 'Excellent Result', labelMr: 'उत्कृष्ट निकाल' },
  { year: '2018-19', percentage: 100, labelEn: 'Perfect Pass Outturn', labelMr: '१००% उत्कृष्ट निकाल' },
  { year: '2019-20', percentage: 100, labelEn: 'Perfect Pass Outturn', labelMr: '१००% उत्कृष्ट निकाल' },
  { year: '2020-21', percentage: 100, labelEn: 'Perfect Pass Outturn', labelMr: '१००% उत्कृष्ट निकाल' },
  { year: '2021-22', percentage: 99.49, labelEn: 'Excellent Result', labelMr: 'उत्कृष्ट निकाल' },
  { year: '2022-23', percentage: 99.18, labelEn: 'Excellent Result', labelMr: 'उत्कृष्ट निकाल' },
  { year: '2023-24', percentage: 100, labelEn: 'Perfect Pass Outturn', labelMr: '१००% उत्कृष्ट निकाल' },
  { year: '2024-25', percentage: 100, labelEn: 'Perfect Pass Outturn', labelMr: '१००% उत्कृष्ट निकाल' },
  { year: '2025-26', percentage: 99.46, labelEn: 'Excellent Result', labelMr: 'उत्कृष्ट निकाल' },
];

export default function HscResultsChart({ selectedLang }: HscResultsChartProps) {
  const [activeView, setActiveView] = useState<'graph' | 'table'>('graph');
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  const showEn = selectedLang === 'en' || selectedLang === 'both';
  const showMr = selectedLang === 'mr' || selectedLang === 'both';

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 relative z-10 backdrop-blur-md shadow-2xl">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center">
              <TrendingUp className="h-4 w-4" />
            </div>
            {showEn && (
              <span className="text-amber-400 font-display font-bold text-xs tracking-widest uppercase block">
                10-Year Academic Record
              </span>
            )}
            {!showEn && showMr && (
              <span className="text-amber-300 font-sans font-bold text-xs tracking-wide uppercase block">
                १० वर्षांचा शैक्षणिक आलेख
              </span>
            )}
          </div>
          
          <h3 className="font-display font-black text-white text-xl sm:text-2xl leading-tight">
            {showEn && <span className="block">Examination Performance (10-Year Record)</span>}
            {showMr && <span className="block font-sans text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">परीक्षा निकाल (१० वर्षांतील आलेख व तक्ता)</span>}
          </h3>

          <p className="text-slate-400 text-[11px] sm:text-xs font-sans font-medium flex items-center space-x-1">
            <Award className="h-3.5 w-3.5 text-secondary shrink-0" />
            <span>
              {showEn && 'HSC (Higher Secondary Certificate Examination)'}
              {showEn && showMr && ' / '}
              {showMr && 'HSC (उच्च माध्यमिक शालान्त परीक्षा)'}
            </span>
          </p>
        </div>

        {/* View Switchers */}
        <div className="flex bg-slate-950/60 border border-white/10 p-1 rounded-xl self-start sm:self-center shrink-0">
          <button
            onClick={() => setActiveView('graph')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeView === 'graph' ? 'bg-secondary text-primary-dark shadow font-black' : 'text-slate-300 hover:text-white'
            }`}
          >
            <BarChart3 className="h-3.5 w-3.5" />
            <span>{showEn ? 'Graph' : 'आलेख'}</span>
          </button>
          <button
            onClick={() => setActiveView('table')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeView === 'table' ? 'bg-secondary text-primary-dark shadow font-black' : 'text-slate-300 hover:text-white'
            }`}
          >
            <ListOrdered className="h-3.5 w-3.5" />
            <span>{showEn ? 'Table' : 'तक्ता'}</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="min-h-[280px] flex flex-col justify-center">
        {activeView === 'graph' ? (
          /* Sleek Custom SVG & CSS Graph Layout matching dark-blue theme */
          <div className="space-y-6 py-4">
            {/* Visual Graph Bars */}
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3 sm:gap-4 h-56 items-end relative pt-6 px-1">
              {/* Grid background lines */}
              <div className="absolute inset-x-0 bottom-0 top-6 flex flex-col justify-between pointer-events-none opacity-10">
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="w-full border-t border-dashed border-white"></div>
              </div>

              {HSC_DATA.map((data, index) => {
                // We want the minimum bar height to be distinct, scaling percentages around 90-100% for maximum detail.
                // scale: percentage of 0 to 100, but map 95%-100% to fill the upper space, 0%-95% compressed or mapped proportionally.
                const scaledHeight = `${Math.max(15, (data.percentage - 85) * 6)}%`;
                const isPerfect = data.percentage === 100;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center h-full justify-end relative group cursor-pointer"
                    onMouseEnter={() => setHoveredYear(data.year)}
                    onMouseLeave={() => setHoveredYear(null)}
                  >
                    {/* Hover tooltip */}
                    <div
                      className={`absolute -top-10 z-20 bg-slate-950 border border-amber-400/30 px-2.5 py-1 rounded-lg text-[10px] text-center shadow-2xl transition-all duration-200 pointer-events-none ${
                        hoveredYear === data.year ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1'
                      }`}
                    >
                      <p className="text-white font-bold">{data.year}</p>
                      <p className="text-amber-300 font-mono font-bold text-xs">{data.percentage}%</p>
                    </div>

                    {/* Bar Column */}
                    <div className="w-full relative flex flex-col justify-end group h-full">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: scaledHeight }}
                        transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                        className={`w-full rounded-t-lg relative overflow-hidden transition-all duration-300 flex flex-col justify-end ${
                          isPerfect
                            ? 'bg-gradient-to-t from-blue-900/80 to-amber-400/80 border-t border-x border-amber-400/40 group-hover:to-amber-300 group-hover:from-blue-950'
                            : 'bg-gradient-to-t from-blue-950/80 to-[#87CEEB]/80 border-t border-x border-sky-400/30 group-hover:to-sky-300 group-hover:from-blue-900'
                        }`}
                      >
                        {/* Perfect indicator dot */}
                        {isPerfect && (
                          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white animate-pulse"></div>
                        )}
                      </motion.div>
                    </div>

                    {/* Percentage Text on hover/default */}
                    <span className={`text-[10px] font-mono font-bold mt-2 transition-colors ${
                      isPerfect ? 'text-amber-300' : 'text-slate-300'
                    }`}>
                      {data.percentage}%
                    </span>

                    {/* Academic Year Label */}
                    <span className="text-[9px] font-semibold text-slate-400 mt-1 transform -rotate-12 md:rotate-0 tracking-tight">
                      {data.year.replace('20', '')}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Legend / Helper Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white/5 border border-white/5 rounded-xl gap-2 text-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1.5">
                  <span className="h-3 w-3 rounded bg-gradient-to-t from-blue-950 to-amber-400/80 border border-amber-400/30"></span>
                  <span className="text-slate-300 font-medium">{showEn ? 'Perfect 100%' : '१००% अचूक निकाल'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="h-3 w-3 rounded bg-gradient-to-t from-blue-950 to-sky-400/80 border border-sky-400/30"></span>
                  <span className="text-slate-300 font-medium">{showEn ? 'High Distinction' : 'उत्कृष्ट निकाल'}</span>
                </div>
              </div>
              <p className="text-[10px] font-mono text-slate-400">
                {showEn && '* Hover columns to inspect individual metrics.'}
                {!showEn && showMr && '* अचूक निकाल पाहण्यासाठी आलेखाच्या स्तंभांवर कर्सर न्या.'}
              </p>
            </div>
          </div>
        ) : (
          /* Clean, High-Contrast Comparison Table */
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-inner bg-slate-950/40">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-slate-300 font-bold">
                  <th className="p-4 flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 text-secondary" />
                    <span>{showEn ? 'Academic Year' : 'शैक्षणिक वर्ष'}</span>
                  </th>
                  <th className="p-4">{showEn ? 'HSC Pass Percentage' : 'HSC उत्तीर्ण प्रमाण (%)'}</th>
                  <th className="p-4 hidden md:table-cell">{showEn ? 'Status Achievement' : 'विशेष कामगिरी'}</th>
                  <th className="p-4 text-right">{showEn ? 'Visual Standing' : 'आलेखीय सादरीकरण'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white">
                {HSC_DATA.map((row, idx) => {
                  const isPerfect = row.percentage === 100;
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-white/5 transition-all group"
                    >
                      <td className="p-4 font-bold tracking-tight text-slate-200">
                        {row.year}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full font-mono font-bold text-xs ${
                          isPerfect
                            ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          <CheckCircle2 className="h-3 w-3" />
                          <span>{row.percentage}%</span>
                        </span>
                      </td>
                      <td className="p-4 hidden md:table-cell text-slate-350 font-medium">
                        {showEn ? row.labelEn : row.labelMr}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <div className="w-24 bg-slate-900 border border-white/10 rounded-full h-2 overflow-hidden hidden sm:block">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                isPerfect ? 'bg-amber-400' : 'bg-sky-400'
                              }`}
                              style={{ width: `${row.percentage}%` }}
                            ></div>
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:translate-x-0.5 group-hover:text-amber-300 transition-all" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
