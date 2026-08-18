import { useState } from 'react';
import { StudyMaterial, LibraryBook } from '../types';
import { INITIAL_STUDY_MATERIALS, LIBRARY_BOOKS } from '../data/mockData';
import {
  FileText,
  Search,
  Book,
  Download,
  AlertCircle,
  Award,
  BookOpen,
  ArrowRight,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

interface PortalViewProps {
  studyMaterials?: StudyMaterial[];
  libraryInventory?: LibraryBook[];
}

export default function PortalView({
  studyMaterials = INITIAL_STUDY_MATERIALS,
  libraryInventory = LIBRARY_BOOKS,
}: PortalViewProps) {
  const [materials, setMaterials] = useState<StudyMaterial[]>(studyMaterials);
  const [bookSearch, setBookSearch] = useState('');
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);

  // Filter book inventory dynamically based on search
  const filteredBooks = libraryInventory.filter((bk) => {
    const term = bookSearch.toLowerCase();
    return (
      bk.title.toLowerCase().includes(term) ||
      bk.author.toLowerCase().includes(term) ||
      bk.category.toLowerCase().includes(term)
    );
  });

  const triggerDownload = (fileName: string) => {
    setDownloadMsg(`Successfully starting download for "${fileName}" to your local storage.`);
    setTimeout(() => {
      setDownloadMsg(null);
    }, 4500);
  };

  const scholarships = [
    { title: 'Pre-Merit Open Category Tuition Waiver Scheme', authority: 'State Higher Education Board', reward: 'Covering 80% to 100% of academic fees', deadline: 'August 12, 2026' },
    { title: 'Smt. Savitribai Kelkar Sports & Girl Cadet Grant', authority: 'KTES Trustee Welfare Board', reward: 'Free boarding accommodation & book packages', deadline: 'July 30, 2026' },
    { title: 'National Competitive Exam JEE/NEET Coaching Waiver', authority: 'National Merit Trust Funds', reward: 'Provides full coaching fees of JEE tutorials', deadline: 'June 28, 2026' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-6">
      {/* Header Banner */}
      <section className="bg-[#000c24]/35 border border-white/10 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="space-y-3 relative z-10">
          <span className="text-secondary font-display font-bold text-xs uppercase tracking-wider block">Student Resource Repository</span>
          <h1 className="text-2.5xl md:text-4xl font-display font-black leading-tight tracking-tight text-white">
            Comprehensive Digital Lecture Notes & Libraries
          </h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
            Gain secure, direct-download access to syllabus files, core algebraic worksheets, and chemistry reference packets prepared by academic deans. Search the central library book logs in real-time.
          </p>
        </div>
      </section>

      {/* Alert toast for downloads */}
      {downloadMsg && (
        <div id="download-notifier-toast" className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 p-4 rounded-xl shadow-xl flex items-center space-x-3 text-xs md:text-sm transition-transform duration-300">
          <Download className="h-5 w-5 shrink-0 animate-bounce text-emerald-400" />
          <span>{downloadMsg}</span>
        </div>
      )}

      {/* Notes / study materials Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-6">
          <div className="border-b border-white/10 pb-3">
            <h2 className="font-display font-black text-white text-2xl">Subject Study notes & Downloads</h2>
            <p className="text-slate-300 text-xs">Direct access to core academic curriculum guides</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((mat) => (
              <div
                key={mat.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group text-white"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/10 border border-white/10 text-slate-200 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      {mat.department}
                    </span>
                    <span className="text-slate-400 text-[10px]">{mat.uploadedAt}</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                    {mat.title}
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Class: <span className="text-slate-200 font-semibold">{mat.courseOrClass}</span>
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[10px]">{mat.fileType} ({mat.fileSize})</span>
                  <button
                    onClick={() => triggerDownload(mat.title)}
                    className="text-amber-300 hover:text-amber-400 flex items-center space-x-1 font-bold cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Search Central Library books */}
        <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md space-y-6 h-fit text-white">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-display font-black text-white text-base">Central Library Catalog Search</h3>
            <p className="text-slate-300 text-[11px]">Query book logs, status indicators and copies remaining</p>
          </div>

          {/* Book query input */}
          <div className="relative">
            <input
              type="text"
              value={bookSearch}
              onChange={(e) => setBookSearch(e.target.value)}
              placeholder="Search by title, author, subject..."
              className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-400"
            />
            <Search className="h-4 w-4 text-slate-300 absolute top-2.5 left-3" />
          </div>

          <div className="space-y-3 divide-y divide-white/5 max-h-[350px] overflow-y-auto pr-1">
            {filteredBooks.length === 0 ? (
              <div className="text-slate-400 text-xs text-center py-6">No matching monographs found in digital logs.</div>
            ) : (
              filteredBooks.map((bk) => (
                <div key={bk.id} className="pt-3 first:pt-0 pb-1 flex justify-between items-start text-xs">
                  <div className="min-w-0 pr-2">
                    <h5 className="font-bold text-white truncate" title={bk.title}>{bk.title}</h5>
                    <span className="text-slate-350 block text-[10px] truncate">By: {bk.author}</span>
                    <span className="text-slate-400 block text-[10px] font-mono">ISBN: {bk.isbn}</span>
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                    bk.status === 'Available' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {bk.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Scholarship and government entrance resources */}
      <section className="space-y-8 border-t border-white/10 pt-12">
        <div className="space-y-2">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase block">Support Parameters</span>
          <h2 className="text-2.5xl font-display font-black text-white">Government Scholarships & Exams Counseling</h2>
          <p className="text-slate-350 text-sm max-w-xl">
            We actively coordinate with institutional and state-level welfare bureaus to waive fees for merit holders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scholarships.map((sch, i) => (
            <div
              key={i}
              className="bg-[#000c24]/30 border border-white/10 rounded-2.5xl p-6 shadow-xl hover:border-amber-400/40 hover:bg-white/5 transition-all flex flex-col justify-between space-y-4 text-white"
            >
              <div className="space-y-3">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Scheme Circular {i+1}
                </span>
                <h4 className="font-display font-bold text-white text-base leading-snug">
                  {sch.title}
                </h4>
                <p className="text-slate-300 text-xs">
                  <strong>Offered by:</strong> {sch.authority}
                </p>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-xs space-y-1">
                  <div className="text-emerald-300 font-bold">Reward: {sch.reward}</div>
                  <div className="text-rose-300 font-semibold font-mono text-[10px]">Deadline: {sch.deadline}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-semibold text-amber-300 flex items-center justify-between cursor-pointer hover:text-amber-400 transition-colors">
                <span>View Guidelines PDF</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
