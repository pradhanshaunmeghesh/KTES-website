import React, { useState } from 'react';
import { Quote, Sparkles, GraduationCap, ChevronDown, ChevronUp, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import defaultPrincipalPhoto from '../assets/images/principal junior and MGV/Smt. Rekha Jadhav.jpeg';

interface PrincipalMessageDeskProps {
  className?: string;
  principalNameEn?: string;
  principalNameMr?: string;
  designationEn?: string;
  designationMr?: string;
  photoUrl?: string;
}

export default function PrincipalMessageDesk({
  className = '',
  principalNameEn = 'Principal Smt. Rekha Jadhav',
  principalNameMr = 'प्राचार्य सौ. रेखा जाधव / Principal Smt. Rekha Jadhav',
  designationEn = 'Principal, MGV & Junior College',
  designationMr = 'प्राचार्य, महात्मा गांधी विद्यालय व जूनियर कॉलेज',
  photoUrl
}: PrincipalMessageDeskProps) {
  const [showFullMessage, setShowFullMessage] = useState(true);
  const [activeTab, setActiveTab] = useState<'both' | 'mr' | 'en'>('both');

  const resolvedPhoto = photoUrl || defaultPrincipalPhoto;

  return (
    <section
      id="principal-message-section"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-8 ${className}`}
    >
      <div className="bg-gradient-to-br from-[#08152e] via-[#0d1d3d] to-[#081124] border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
        {/* Subtle Ambient Background Glowing Accents */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header & Main Banner */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
          {/* Avatar / Photo Column */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-600 rounded-2xl blur-xs opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-slate-950 shadow-2xl relative flex items-center justify-center">
                {resolvedPhoto ? (
                  <img
                    src={resolvedPhoto}
                    alt={principalNameEn}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('public/images') && !target.src.includes('/images/principal')) {
                        target.src = '/images/principal junior and MGV/Smt. Rekha Jadhav.jpeg';
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-400/30 flex items-center justify-center mb-2 text-amber-400 shadow-inner">
                      <GraduationCap className="h-8 w-8 text-amber-400" />
                    </div>
                    <span className="text-[11px] font-sans font-bold text-slate-300 tracking-tight leading-tight">
                      Principal Photo
                    </span>
                    <span className="text-[9px] text-amber-400/80 font-sans mt-0.5">
                      (छायाचित्र जागा)
                    </span>
                  </div>
                )}
              </div>

              {/* Principal Badge */}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 text-[10px] font-black uppercase px-3.5 py-1 rounded-full shadow-lg border border-amber-300/40 whitespace-nowrap flex items-center gap-1">
                <Award className="h-3 w-3" />
                Principal
              </span>
            </div>

            {/* Sub-label under photo */}
            <div className="mt-5 text-center max-w-[240px]">
              <h4 className="text-sm md:text-base font-display font-bold text-white tracking-wide">
                {principalNameEn}
              </h4>
              <p className="text-xs font-sans font-semibold text-amber-300 mt-1">
                {principalNameMr}
              </p>
              <div className="mt-2.5 pt-2 border-t border-amber-500/30">
                <p className="text-[11px] font-sans font-medium text-slate-200 leading-snug">
                  {designationEn}
                </p>
                <p className="text-[10px] font-sans text-amber-400/90 mt-0.5 leading-snug">
                  {designationMr}
                </p>
              </div>
            </div>
          </div>

          {/* Core Content & Quotation Block */}
          <div className="space-y-5 text-center lg:text-left flex-1">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 tracking-widest uppercase mb-1 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20 shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  Junior College Desk | कनिष्ठ महाविद्यालय
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                  Principal's Message / प्राचार्यांचे मनोगत
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans font-semibold">
                  Mahatma Gandhi Vidyalay & Junior College, Rajgurunagar
                </p>
              </div>

              {/* Language Switch Pills */}
              <div className="flex items-center justify-center lg:justify-end gap-1.5 bg-slate-950/80 p-1.5 rounded-xl border border-white/10 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab('both')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'both'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Both / दोन्ही
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('mr')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'mr'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  मराठी
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'en'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Spotlight Quote Card with Gold Brand Accent Quote Icon */}
            <div className="bg-slate-950/70 border-l-4 border-amber-400 p-4 sm:p-5 rounded-r-2xl shadow-inner text-left relative overflow-hidden">
              <div className="absolute top-2 right-3 opacity-15 pointer-events-none">
                <Quote className="h-16 w-16 text-amber-400 rotate-180" />
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 shrink-0 mt-0.5">
                  <Quote className="h-5 w-5 fill-amber-400/20 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-amber-100 text-xs sm:text-sm md:text-base font-medium italic font-sans leading-relaxed">
                    "Guided by our core motto 'Knowledge, Values, and Progress', our institution is committed to holistic development through academic excellence, NCC, sports, art galleries, and modern digital education."
                  </p>
                  <p className="text-amber-300/90 text-xs font-sans font-medium not-italic">
                    "'ज्ञान, संस्कार आणि प्रगती' या ब्रीदवाक्याला स्मरूण दर्जेदार, मुल्याधिष्ठित शिक्षण व विद्यार्थ्यांचा सर्वांगीण विकास साधणे हेच आमचे मुख्य ध्येय आहे."
                  </p>
                </div>
              </div>
            </div>

            {/* Toggle Full Message Button */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => setShowFullMessage(!showFullMessage)}
                className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 hover:border-amber-400 font-display font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-amber-500/10"
              >
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>
                  {showFullMessage
                    ? 'संदेश संकुचित करा | Collapse Message'
                    : 'संपूर्ण मनोगत वाचा | Read Full Principal Message'}
                </span>
                {showFullMessage ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Full Bilingual Detailed Message Section */}
        {showFullMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 pt-8 border-t border-amber-500/20 relative z-10"
          >
            <div className={`grid grid-cols-1 ${activeTab === 'both' ? 'lg:grid-cols-2' : 'max-w-4xl mx-auto'} gap-8 items-stretch`}>
              {/* Box 1 - Marathi Content */}
              {(activeTab === 'both' || activeTab === 'mr') && (
                <div className="bg-slate-950/65 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>
                  
                  <div className="space-y-4 relative z-10">
                    <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="text-base sm:text-lg font-display font-black text-amber-400">
                          प्राचार्यांचे मनोगत
                        </h4>
                        <p className="text-[11px] text-slate-400 font-sans font-medium uppercase tracking-wider">
                          महात्मा गांधी विद्यालय व ज्युनिअर कॉलेज
                        </p>
                      </div>
                      <span className="text-[10px] bg-amber-400/10 text-amber-300 px-2.5 py-1 rounded-md border border-amber-400/20 font-bold">
                        मराठी
                      </span>
                    </div>

                    <h5 className="font-sans font-bold text-white text-sm">
                      प्रिय विद्यार्थी, पालक आणि ग्रामस्थ बंधू-भगिनींनो,
                    </h5>

                    <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                      <p className="text-amber-200/90 font-medium">
                        खेड तालुका शिक्षण संस्था संचलित महात्मा गांधी विद्यालय व ज्युनियर कॉलेजच्या वतीने सर्वांचे मनःपूर्वक स्वागत!
                      </p>
                      <p>
                        <strong>'ज्ञान, संस्कार आणि प्रगती'</strong> या ब्रीदवाक्याला स्मरूण आमची संस्था गेली अनेक दशके ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार व मुल्याधिष्ठित शिक्षण देण्यासाठी कटिबद्ध आहे. इयत्ता ५ वी ते १२ वी पर्यंतच्या विद्यार्थ्यांना केवळ अभ्यासातच नव्हे, तर एन.सी.सी. (NCC), क्रीडा, कला-संस्कृती आणि आधुनिक संगणक शिक्षणाच्या माध्यमातून सर्वांगीण विकासाची संधी आम्ही उपलब्ध करून देत आहोत.
                      </p>
                      <p>
                        शालांत परीक्षांमधील (SSC & HSC) सातत्यपूर्ण १००% यश, शिष्यवृत्ती परीक्षांतील घवघवीत यश आणि राज्यस्तरीय क्रीडा व कला क्षेत्रातील यश हे आपल्या विद्यार्थ्यांच्या कष्टांचे आणि शिक्षकांच्या समर्पणाचे फलित आहे. गुणवत्तेसोबतच विद्यार्थ्यांमध्ये राष्ट्रभक्ती, शिस्त आणि नैतिक मूल्यांची रुजवणूक करणे हेच आमचे मुख्य ध्येय आहे.
                      </p>
                      <p>
                        पालकांनी आमच्यावर दाखवलेला दृढ विश्वास आणि संस्थेच्या मार्गदर्शनाखाली आम्ही भविष्यातही यशाची नवनवीन शिखरे पादाक्रांत करत राहू, हा मला पूर्ण विश्वास आहे.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-display font-black text-white text-sm">
                        {principalNameMr}
                      </p>
                      <p className="text-[10px] text-amber-400/90 font-sans uppercase font-bold tracking-wider">
                        {designationMr}
                      </p>
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans">
                      राजगुरूनगर (खेड)
                    </div>
                  </div>
                </div>
              )}

              {/* Box 2 - English Content */}
              {(activeTab === 'both' || activeTab === 'en') && (
                <div className="bg-slate-950/65 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>

                  <div className="space-y-4 relative z-10">
                    <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="text-base sm:text-lg font-display font-black text-amber-400">
                          Principal's Message
                        </h4>
                        <p className="text-[11px] text-slate-400 font-sans font-medium uppercase tracking-wider">
                          Mahatma Gandhi Vidyalay & Junior College
                        </p>
                      </div>
                      <span className="text-[10px] bg-blue-400/10 text-blue-300 px-2.5 py-1 rounded-md border border-blue-400/20 font-bold">
                        English
                      </span>
                    </div>

                    <h5 className="font-sans font-bold text-white text-sm">
                      Dear Students, Parents, and Well-Wishers,
                    </h5>

                    <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                      <p className="text-amber-200/90 font-medium">
                        A warm welcome to Mahatma Gandhi Vidyalay and Junior College, managed by the Khed Taluka Education Society!
                      </p>
                      <p>
                        Guided by our core motto <strong>'Knowledge, Values, and Progress'</strong>, our institution has been dedicated to offering quality, value-based education to rural students for decades. From Classes 5th to 12th, we focus not only on academic excellence but also on overall personality development through NCC, sports, art galleries, and modern computer education.
                      </p>
                      <p>
                        Our consistent 100% SSC & HSC board results, stellar performance in scholarship exams, and state-level achievements in sports reflect the hard work of our students and the dedication of our faculty. Beyond academics, our key objective is to instill strong moral values, discipline, and patriotism in every student.
                      </p>
                      <p>
                        With the unshakeable trust of our parents and the visionary leadership of our management, I am confident that our institution will continue to achieve new milestones of excellence.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-display font-black text-white text-sm">
                        {principalNameEn}
                      </p>
                      <p className="text-[10px] text-amber-400/90 font-sans uppercase font-bold tracking-wider">
                        {designationEn}
                      </p>
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans">
                      Rajgurunagar (Khed)
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Transition Bridge Divider */}
      <div className="flex items-center justify-center pt-8 pb-2 opacity-70">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent w-full max-w-lg"></div>
      </div>
    </section>
  );
}
