import { useState, useEffect } from 'react';
import { Trophy, Target, Award, Users, Flame, Dumbbell, Medal } from 'lucide-react';
import NationalAchievementsSection from './NationalAchievementsSection';

interface SportsAthleticsSectionProps {
  selectedLang?: 'en' | 'mr' | 'both';
}

export default function SportsAthleticsSection({
  selectedLang: initialLang = 'both'
}: SportsAthleticsSectionProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>(initialLang);

  useEffect(() => {
    if (initialLang) {
      setSelectedLang(initialLang);
    }
  }, [initialLang]);

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  // Achievement Stats Counter Grid (2025–26 Highlights)
  const achievementStats = [
    {
      id: 'taluka',
      badgeEn: 'Taluka Level',
      badgeMr: 'तालुकास्तर',
      metricEn: '450 Participants',
      metricMr: '४५० विद्यार्थी',
      descEn: '450 Participants (55 Qualified for District Level).',
      descMr: '४५० सहभागी विद्यार्थी (५५ जिल्हास्तरासाठी पात्र).'
    },
    {
      id: 'district',
      badgeEn: 'District Level',
      badgeMr: 'जिल्हास्तर',
      metricEn: '220 Participants',
      metricMr: '२२० विद्यार्थी',
      descEn: '220 Participants showcasing merit performances.',
      descMr: '२२० विद्यार्थ्यांची उल्लेखनीय कामगिरी.'
    },
    {
      id: 'state',
      badgeEn: 'Division & State',
      badgeMr: 'विभाग व राज्यस्तर',
      metricEn: '35 Div | 19 State',
      metricMr: '३५ विभाग | १९ राज्य',
      descEn: '35 Division Level | 19 State Level Achievements.',
      descMr: '३५ विद्यार्थी विभागस्तर | १९ विद्यार्थी राज्यस्तर.'
    },
    {
      id: 'national',
      badgeEn: 'National Level',
      badgeMr: 'राष्ट्रीय स्तर',
      metricEn: '4 National Stars',
      metricMr: '४ राष्ट्रीय खेळाडू',
      descEn: '4 Students achieved National Level Excellence.',
      descMr: '४ विद्यार्थ्यांनी राष्ट्रीय स्तरावर यश संपादन केले.'
    }
  ];

  const highlights = [
    {
      id: 'outdoor',
      icon: Trophy,
      titleEn: 'Outdoor Sports',
      titleMr: 'मैदानी खेळ',
      descEn: 'Spacious sports ground for Cricket, Kho-Kho, Kabaddi, Volleyball, and Athletics.',
      descMr: 'क्रिकेट, खो-खो, कबड्डी, व्हॉलीबॉल आणि अॅथलेटिक्ससाठी मोठे क्रीडांगण.',
      badgeEn: 'Ground & Field',
      badgeMr: 'क्रीडांगण सुविधा'
    },
    {
      id: 'indoor',
      icon: Target,
      titleEn: 'Indoor Games',
      titleMr: 'इनडोअर खेळ',
      descEn: 'Dedicated indoor complex for Table Tennis, Chess, Carrom, and Martial Arts/Karate practice.',
      descMr: 'टेबल टेनिस, बुद्धिबळ (Chess), कॅरम आणि कराटे सरावाची सोय.',
      badgeEn: 'Indoor Complex',
      badgeMr: 'इनडोअर संकुल'
    },
    {
      id: 'coaching',
      icon: Award,
      titleEn: 'Professional Coaching',
      titleMr: 'विशेष क्रीडा मार्गदर्शक',
      descEn: 'Expert sports guidance preparing students for taluka, district, and state-level tournaments.',
      descMr: 'क्रीडा शिक्षकांचे विशेष मार्गदर्शन आणि तालुका, जिल्हास्तरीय स्पर्धांची तयारी.',
      badgeEn: 'Expert Training',
      badgeMr: 'मार्गदर्शन'
    },
    {
      id: 'sports-meet',
      icon: Flame,
      titleEn: 'Annual Sports Meet',
      titleMr: 'वार्षिक क्रीडा महोत्सव',
      descEn: 'Annual sports meet encouraging healthy competition and honoring student athletes.',
      descMr: 'दरवर्षी भव्य क्रीडा स्पर्धांचे आयोजन करून गुणवंत खेळाडूंचा गौरव.',
      badgeEn: 'Championships',
      badgeMr: 'वार्षिक स्पर्धा'
    }
  ];

  return (
    <section className="bg-slate-900/90 text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden space-y-8 border border-white/10 backdrop-blur-md">
      {/* Glow background effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header & Language Toggle Switch */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 relative z-10">
        <div className="space-y-1.5">
          <span className="text-amber-400 font-display font-bold text-xs uppercase tracking-widest flex items-center space-x-2 font-sans">
            <Dumbbell className="h-4 w-4 text-amber-400 shrink-0" />
            <span>
              {selectedLang === 'en' && 'Sports & Athletic Facilities (Mahatma Gandhi Vidyalay Wing)'}
              {selectedLang === 'mr' && 'क्रीडा विभाग व यश (Mahatma Gandhi Vidyalay Wing)'}
              {selectedLang === 'both' && 'क्रीडा व शारीरिक शिक्षण (Sports & Athletics)'}
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white">
            {showEn && !showMr && 'Sports & Athletic Achievements (Mahatma Gandhi Vidyalay Wing)'}
            {!showEn && showMr && 'क्रीडा विभाग व यश (Mahatma Gandhi Vidyalay Wing)'}
            {showEn && showMr && 'Sports & Athletic Achievements / क्रीडा विभाग व यश'}
          </h2>
        </div>

        {/* Language Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10 shrink-0">
          <span className="text-[10px] text-slate-400 font-bold uppercase px-2 font-mono">Lang:</span>
          {(['en', 'mr', 'both'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedLang === lang
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {lang === 'en' && 'English'}
              {lang === 'mr' && 'मराठी'}
              {lang === 'both' && 'English / मराठी'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Overview Description Block */}
      <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-5 md:p-6 space-y-3 relative z-10 shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono uppercase tracking-wider">
          <Users className="w-4 h-4 text-amber-400" />
          <span>Department Vision & Excellence Overview / क्रीडा विभाग भूमिका व संकल्पना</span>
        </div>
        {showEn && (
          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans">
            At Mahatma Gandhi Vidyalay & Junior College, Rajgurunagar, sports are given high priority for holistic development. Through regular practice and structured coaching, students actively participate across Taluka, District, Division, State, and National level competitions, nurturing confidence, athletic skills, and leadership qualities.
          </p>
        )}
        {showMr && (
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans border-t border-white/10 pt-2.5 mt-2">
            महात्मा गांधी विद्यालय व कनिष्ठ महाविद्यालय, राजगुरूनगर येथे विद्यार्थ्यांच्या सर्वांगीण विकासासाठी क्रीडा क्षेत्राला विशेष प्राधान्य देण्यात येते. नियमित सराव, तज्ज्ञ मार्गदर्शन व नियोजनबद्ध प्रशिक्षणाच्या माध्यमातून विद्यार्थ्यांना तालुका, जिल्हा, विभाग, राज्य आणि राष्ट्रीय स्तरावरील विविध क्रीडा स्पर्धांमध्ये सहभागी होण्याची संधी उपलब्ध करून दिली जाते. नियमित सराव, शिस्तबद्ध प्रशिक्षण आणि शिक्षकांचे योग्य मार्गदर्शन यामुळे विद्यार्थ्यांमध्ये आत्मविश्वास, क्रीडा कौशल्य, नेतृत्वगुण व स्पर्धात्मक वृत्ती विकसित झाली असून विद्यालयात उत्कृष्ट दर्जाचे खेळाडू घडविण्याची परंपरा अधिक बळकट झाली आहे.
          </p>
        )}
      </div>

      {/* National Achievements & Sports Excellence Component */}
      <NationalAchievementsSection selectedLang={selectedLang} />

      {/* Achievement Stats Counter Grid (2025–26 Highlights) */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Medal className="w-4 h-4 text-amber-400" />
          <h3 className="font-display font-extrabold text-white text-lg">
            {selectedLang === 'en' && 'Sports Achievements (2025–26 Highlights)'}
            {selectedLang === 'mr' && 'क्रीडा यश व प्राविण्य (२०२५–२६)'}
            {selectedLang === 'both' && 'Sports Achievements (क्रीडा यश व प्राविण्य २०२५–२६)'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievementStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-950/80 border border-amber-400/30 rounded-2xl p-5 space-y-3 hover:border-amber-400 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full uppercase">
                  {selectedLang === 'en' ? stat.badgeEn : stat.badgeMr}
                </span>
                <Medal className="w-4 h-4 text-amber-400" />
              </div>

              <div className="font-display font-black text-amber-400 text-xl sm:text-2xl tracking-tight">
                {selectedLang === 'en' ? stat.metricEn : stat.metricMr}
              </div>

              <div className="space-y-1 text-xs text-slate-300 leading-relaxed font-sans border-t border-white/10 pt-2">
                {showEn && <p className="text-slate-200">{stat.descEn}</p>}
                {showMr && <p className="text-slate-400">{stat.descMr}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Card Highlights Grid */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Trophy className="w-4 h-4 text-amber-400" />
          <h3 className="font-display font-extrabold text-white text-lg">
            {selectedLang === 'en' && 'Key Sports Facilities & Programs'}
            {selectedLang === 'mr' && 'महत्त्वाच्या क्रीडा सुविधा व उपक्रम'}
            {selectedLang === 'both' && 'Key Sports Facilities (क्रीडा सुविधा व उपक्रम)'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-slate-950/60 border border-white/10 rounded-2.5xl p-6 hover:border-amber-400/40 hover:bg-white/5 transition-all duration-300 space-y-4 group relative overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full uppercase">
                      {selectedLang === 'en' ? item.badgeEn : item.badgeMr}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-white text-base sm:text-lg group-hover:text-amber-300 transition-colors">
                    {selectedLang === 'en' && item.titleEn}
                    {selectedLang === 'mr' && item.titleMr}
                    {selectedLang === 'both' && `${item.titleEn} (${item.titleMr})`}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {showEn && (
                      <p className="font-sans text-slate-200">{item.descEn}</p>
                    )}
                    {showMr && (
                      <p className="font-sans text-slate-350 border-t border-white/10 pt-2 mt-2">
                        {item.descMr}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-amber-400/80 font-mono font-medium">
                  <span>Active Facility</span>
                  <span>• • •</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

