import { useState } from 'react';
import { Quote, Sparkles, GraduationCap, Award, BookOpen, HeartHandshake, ShieldCheck } from 'lucide-react';
import ganeshDethePhoto from '../assets/images/EMS/Prof. Ganesh Dethe.jpeg';

interface EMSPrincipalMessageDeskProps {
  className?: string;
  customPhotoUrl?: string;
}

export default function EMSPrincipalMessageDesk({
  className = '',
  customPhotoUrl
}: EMSPrincipalMessageDeskProps) {
  const [activeLang, setActiveLang] = useState<'both' | 'mr' | 'en'>('both');
  const [imgError, setImgError] = useState(false);

  // Official portrait asset path
  const photoSrc = customPhotoUrl || ganeshDethePhoto;

  return (
    <section
      id="ems-principal-message-section"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-8 ${className}`}
    >
      <div className="bg-gradient-to-br from-[#08152e] via-[#0d1d3d] to-[#081124] border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
        {/* Subtle Ambient Background Glowing Accents */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* ========================================================================= */}
          {/* 1. LEFT COLUMN: Principal Profile Card (4 cols on lg)                     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-full max-w-[260px] sm:max-w-[280px]">
              {/* Outer glowing decorative border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-600 rounded-3xl blur-xs opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Photo Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-400/60 bg-slate-950 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 border-2 border-amber-400/60 bg-slate-950 flex items-center justify-center mb-3.5 shadow-xl overflow-hidden shrink-0">
                    {!imgError ? (
                      <img
                        src={photoSrc}
                        alt="Mr. Ganesh Dethe - Principal, English Medium School"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 shadow-inner">
                        <GraduationCap className="h-12 w-12 text-amber-400" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-display font-bold text-white tracking-wide">
                    Mr. Ganesh Dethe
                  </span>
                  <span className="text-xs text-amber-400 font-sans mt-0.5">
                    (श्री. गणेश देठे)
                  </span>
                </div>

                {/* Floating Principal Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Award className="h-3 w-3 text-amber-400" />
                    Principal
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Info Details */}
            <div className="mt-5 space-y-1.5 w-full max-w-[280px]">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Head of School | मुख्याध्यापक</span>
              </div>

              <h3 className="text-xl font-display font-black text-white tracking-wide pt-1">
                Mr. Ganesh Dethe
              </h3>
              <p className="text-amber-400 font-medium text-sm">
                श्री. गणेश देठे
              </p>

              <div className="pt-2 border-t border-white/10 space-y-0.5">
                <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Principal, English Medium School
                </p>
                <p className="text-xs text-slate-400">
                  मुख्याध्यापक, इंग्रजी माध्यम शाळा
                </p>
                <p className="text-[11px] text-amber-400/80 font-medium pt-1">
                  Khed Taluka Education Society
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. RIGHT COLUMN: Message Body & Highlights (8 cols on lg)                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header with Tag Badge and Language Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 tracking-widest uppercase mb-1.5 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/25 shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  PRINCIPAL'S DESK | प्राचार्य संदेश
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                  Inspiring Excellence, Character & Innovation
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                  Khed Taluka Education Society's English Medium School (EMS)
                </p>
              </div>

              {/* Language Switcher Buttons */}
              <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/10 self-start sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveLang('both')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeLang === 'both'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Both / दोन्ही
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLang('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeLang === 'en'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLang('mr')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeLang === 'mr'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  मराठी
                </button>
              </div>
            </div>

            {/* Marathi Summary Box (Highlighted Card) */}
            {(activeLang === 'both' || activeLang === 'mr') && (
              <div className="relative bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent border-l-4 border-amber-400 bg-slate-900/70 p-5 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300 shrink-0 mt-0.5">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      प्रमुख संदेश / Core Vision (मराठी सारांश)
                    </span>
                    <p className="text-slate-100 text-sm sm:text-base font-sans leading-relaxed italic">
                      "इंग्रजी माध्यम शाळेत आम्ही विद्यार्थ्यांना केवळ पुस्तकी ज्ञान न देता, त्यांच्यात वैज्ञानिक दृष्टिकोन, क्रीडा कौशल्ये आणि नैतिक मूल्यांची रुजवणूक करतो. प्रत्येक विद्यार्थ्याचा सर्वांगीण विकास साधणे हेच आमचे उद्दिष्ट आहे."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* English Full Message */}
            {(activeLang === 'both' || activeLang === 'en') && (
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  Welcome to the English Medium School wing of Khed Taluka Education Society. Our mission is to provide a vibrant learning environment that nurtures curiosity, critical thinking, and holistic excellence.
                </p>
                <p>
                  In today’s rapidly changing world, we emphasize a balanced education that merges modern academic standards with rich extracurricular opportunities—from sports and defense training to digital literacy and cultural arts. We are dedicated to building confident, compassionate, and responsible global citizens who are well-prepared for future challenges.
                </p>
              </div>
            )}

            {/* Key Pillars Highlights Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Academic Rigor & SSC Honors</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Sports & Extracurriculars</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Values & Life Skills</span>
              </div>
            </div>

            {/* Closing Signature Block */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-medium">
                  Warm Regards,
                </span>
                <p className="text-base font-display font-black text-amber-300">
                  Mr. Ganesh Dethe
                </p>
                <p className="text-xs text-slate-300 font-sans">
                  Principal, EMS | मुख्याध्यापक, इंग्रजी माध्यम शाळा
                </p>
              </div>

              <div className="text-left sm:text-right text-xs text-slate-400">
                <span className="font-semibold text-slate-300 block">Khed Taluka Education Society</span>
                <span className="text-[11px] text-amber-400/80">Rajgurunagar, Pune 410505</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
