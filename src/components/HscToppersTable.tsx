import { useState } from 'react';
import { Trophy, ChevronDown, ChevronUp, GraduationCap, Award } from 'lucide-react';

interface HscToppersTableProps {
  selectedLang: 'en' | 'mr' | 'both';
}

interface TopperRecord {
  year: string;
  yearMr: string;
  nameEn: string;
  nameMr: string;
  marks: string;
  collegeResult: string;
}

const TOPPERS_DATA: TopperRecord[] = [
  { year: '2026', yearMr: '२०२६', nameEn: 'Master Om Pravin Kad', nameMr: 'कु. कड ओम प्रवीण', marks: '91.33%', collegeResult: '99.46%' },
  { year: '2025', yearMr: '२०२५', nameEn: 'Ms. Anushka Sanjay Lonari', nameMr: 'कु. लोणारी अनुष्का संजय', marks: '93.83%', collegeResult: '100%' },
  { year: '2024', yearMr: '२०२४', nameEn: 'Master Om Bababhau Hojage', nameMr: 'कु. होजगे ओम बाबाभाऊ', marks: '93.17%', collegeResult: '100%' },
  { year: '2023', yearMr: '२०२३', nameEn: 'Ms. Disha Nitin Wakchaure', nameMr: 'कु. वाकचौरे दिशा नितीन', marks: '90.17%', collegeResult: '99.18%' },
  { year: '2022', yearMr: '२०२२', nameEn: 'Master Sumit Balasaheb Landge', nameMr: 'कु. लांडगे सुमित बाळासाहेब', marks: '89.67%', collegeResult: '99.49%' },
  { year: '2021', yearMr: '२०२१', nameEn: 'Master Deepak Andaram Choudhary', nameMr: 'कु. चौधरी दीपक अंदाराम', marks: '98.67%', collegeResult: '100%' },
  { year: '2020', yearMr: '२०२०', nameEn: 'Ms. Tanuja Sandip Dhaybar', nameMr: 'कु. धायबर तनुजा संदीप', marks: '96.92%', collegeResult: '100%' },
  { year: '2019', yearMr: '२०१९', nameEn: 'Ms. Disha Chandra Pujari', nameMr: 'कु. पुजारी दिशा चंद्रा', marks: '87.08%', collegeResult: '100%' },
  { year: '2018', yearMr: '२०१८', nameEn: 'Ms. Mansi Ravindra Mavale', nameMr: 'कु. मावळे मानसी रविंद्र', marks: '94.00%', collegeResult: '99.59%' },
  { year: '2017', yearMr: '२०१७', nameEn: 'Ms. Snehankita Dilip Manjare', nameMr: 'कु. मांजरे स्नेहांकिता दिलीप', marks: '92.15%', collegeResult: '100%' },
  { year: '2016', yearMr: '२०१६', nameEn: 'Master Abhijit Maruti Rokade', nameMr: 'कु. रोकडे अभिजित मारुती', marks: '90.92%', collegeResult: '99.34%' },
  { year: '2015', yearMr: '२०१५', nameEn: 'Ms. Pramil Balasaheb Gadekar', nameMr: 'कु. गाडेकर प्रमिल बाळासाहेब', marks: '90.31%', collegeResult: '99.35%' },
  { year: '2014', yearMr: '२०१४', nameEn: 'Master Tejas Arun Jaju', nameMr: 'कु. जाजू तेजस अरुण', marks: '86.31%', collegeResult: '100%' },
  { year: '2013', yearMr: '२०१३', nameEn: 'Ms. Priyanka Rajendra Lolane', nameMr: 'कु. लोळणे प्रियंका राजेंद्र', marks: '82.00%', collegeResult: '98.43%' },
  { year: '2012', yearMr: '२०१२', nameEn: 'Ms. Deeksha Ramchandra Waghmare', nameMr: 'कु. वाघमारे दीक्षा रामचंद्र', marks: '79.71%', collegeResult: '96.79%' },
  { year: '2011', yearMr: '२०११', nameEn: 'Ms. Pragya Narendra Khadiwale', nameMr: 'कु. खडीवाले प्रज्ञा नरेंद्र', marks: '78.65%', collegeResult: '88.37%' },
  { year: '2010', yearMr: '२०१०', nameEn: 'Ms. Reshma Bhagudas Bandawane', nameMr: 'कु. बांदावणे रेश्मा भागुदास', marks: '78.67%', collegeResult: '90.67%' }
];

export default function HscToppersTable({ selectedLang }: HscToppersTableProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? TOPPERS_DATA : TOPPERS_DATA.slice(0, 5);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 relative z-10 backdrop-blur-md shadow-2xl font-sans">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <Trophy className="h-4 w-4" />
            </div>
            <span className="text-amber-400 font-display font-bold text-xs tracking-widest uppercase block">
              {selectedLang === 'en'
                ? 'Academic Excellence & Toppers'
                : selectedLang === 'mr'
                ? 'गुणवंत विद्यार्थी व निकाल गुणानुक्रम'
                : 'Academic Excellence / गुणवंत विद्यार्थी'}
            </span>
          </div>

          <h3 className="font-display font-black text-white text-lg sm:text-xl md:text-2xl leading-tight">
            Mahatma Gandhi Vidyalaya & Junior College, Rajgurunagar - HSC Toppers & Results
            <span className="block text-amber-300 font-sans text-base sm:text-lg font-bold mt-1">
              (महात्मा गांधी विद्यालय व कनिष्ठ महाविद्यालय, राजगुरुनगर - एच.एस.सी. प्रथम विद्यार्थी व निकाल)
            </span>
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-slate-300 font-mono shrink-0">
          {selectedLang === 'mr' ? 'एकूण नोंद: ' : 'Showing '}
          <span className="text-amber-300 font-bold">{visibleData.length}</span>
          {selectedLang === 'mr' ? ' / १७ वर्ष' : ` of ${TOPPERS_DATA.length} years`}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/40 shadow-inner">
        <table className="w-full text-left border-collapse table-fixed min-w-[600px]">
          <thead>
            <tr className="bg-white/5 border-b border-white/10 text-xs font-mono text-[#87CEEB] uppercase tracking-wider">
              <th className="w-[18%] py-4 px-5 font-bold">
                {selectedLang === 'en' ? 'Year' : selectedLang === 'mr' ? 'सन' : 'Year / सन'}
              </th>
              <th className="w-[44%] py-4 px-5 font-bold">
                {selectedLang === 'en' ? 'Student Name' : selectedLang === 'mr' ? 'विद्यार्थ्याचे नाव' : 'Student Name / विद्यार्थ्यांचे नाव'}
              </th>
              <th className="w-[19%] py-4 px-5 font-bold text-center">
                {selectedLang === 'en' ? '% Marks' : selectedLang === 'mr' ? 'शेकडा गुण' : '% Marks / शेकडा गुण'}
              </th>
              <th className="w-[19%] py-4 px-5 font-bold text-center">
                {selectedLang === 'en' ? 'College Result %' : selectedLang === 'mr' ? 'महाविद्यालयाचा निकाल' : 'College Result % / महाविद्यालयाचा निकाल'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-slate-200">
            {visibleData.map((row, idx) => (
              <tr
                key={row.year}
                className={`hover:bg-white/5 transition-colors ${
                  idx === 0 ? 'bg-amber-400/5 border-l-2 border-l-amber-400' : ''
                }`}
              >
                {/* Year */}
                <td className="py-3.5 px-5 font-mono text-xs font-bold text-amber-200">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>{selectedLang === 'mr' ? row.yearMr : row.year}</span>
                    {selectedLang === 'both' && row.year !== row.yearMr && (
                      <span className="text-slate-400 font-sans text-[11px]">({row.yearMr})</span>
                    )}
                  </div>
                </td>

                {/* Student Name */}
                <td className="py-3.5 px-5">
                  <div className="font-display font-bold text-white text-sm">
                    {selectedLang === 'en' ? row.nameEn : selectedLang === 'mr' ? row.nameMr : row.nameEn}
                  </div>
                  {selectedLang === 'both' && (
                    <div className="text-slate-400 text-xs font-sans mt-0.5">
                      {row.nameMr}
                    </div>
                  )}
                </td>

                {/* % Marks */}
                <td className="py-3.5 px-5 text-center">
                  <span className="bg-amber-400/10 border border-amber-400/20 text-amber-300 px-2.5 py-1 rounded-lg font-mono font-bold text-xs inline-block">
                    {row.marks}
                  </span>
                </td>

                {/* College Result % */}
                <td className="py-3.5 px-5 text-center">
                  <span className="bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 px-2.5 py-1 rounded-lg font-mono font-bold text-xs inline-flex items-center gap-1 justify-center">
                    <Award className="h-3 w-3 shrink-0 text-emerald-400" />
                    <span>{row.collegeResult}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show More / Show Less Toggle Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-white/5 hover:bg-amber-400 hover:text-primary-dark border border-white/10 hover:border-amber-400 text-slate-200 font-bold px-6 py-2.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg group"
        >
          <span>
            {showAll
              ? selectedLang === 'en'
                ? 'Show Less'
                : selectedLang === 'mr'
                ? 'कमी करा'
                : 'Show Less / कमी करा'
              : selectedLang === 'en'
              ? 'Show More (2010 - 2026)'
              : selectedLang === 'mr'
              ? 'अधिक पहा (२०१० - २०२६)'
              : 'Show More / Show Less (अधिक पहा / कमी करा)'}
          </span>
          {showAll ? (
            <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}
