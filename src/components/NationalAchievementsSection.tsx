import { useState, useEffect } from 'react';
import {
  Trophy,
  Medal,
  Award,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Flame,
  Info
} from 'lucide-react';

// Import images from junior college folder
const teamNationalGames1 = '/images/junior_college/WhatsApp Image 2026-08-25 at 18.07.28.jpeg';
const teamNationalGames2 = '/images/junior_college/WhatsApp Image 2026-08-25 at 18.07.28 (1).jpeg';
const rutujaPodiumBronze1 = '/images/junior_college/WhatsApp Image 2026-08-25 at 18.07.29 (1).jpeg';
const rutujaPodiumBronze2 = '/images/junior_college/WhatsApp Image 2026-08-25 at 18.07.29 (2).jpeg';
const teamFelicitation = '/images/junior_college/WhatsApp Image 2026-08-25 at 18.07.29.jpeg';
const gunavantSanmanTrophies1 = '/images/junior_college/WhatsApp Image 2026-08-25 at 18.07.30.jpeg';
const gunavantSanmanTrophies2 = '/images/junior_college/WhatsApp Image 2026-08-25 at 18.07.30 (1).jpeg';

interface NationalAchievementsSectionProps {
  selectedLang?: 'en' | 'mr' | 'both';
}

export default function NationalAchievementsSection({
  selectedLang: initialLang = 'both'
}: NationalAchievementsSectionProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>(initialLang);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialLang) {
      setSelectedLang(initialLang);
    }
  }, [initialLang]);

  // All junior college folder images for full lightbox navigation
  const allJuniorCollegeImages = [
    {
      src: teamNationalGames1,
      titleEn: '68th SGFI National School Games - Team Championship',
      titleMr: '६८ वी राष्ट्रीय शालेय क्रीडा स्पर्धा - संघ व मार्गदर्शक',
      category: 'National Level',
      desc: 'Our talented athletes representing the institution at the National School Games Championship 2024-25 in Taekwondo.'
    },
    {
      src: rutujaPodiumBronze1,
      titleEn: 'National Bronze Medalist - Ku. Rutuja Vijay Rakshe',
      titleMr: 'कु. ऋतुजा विजय राक्षे - कांस्य पदक विजेती (३रा क्रमांक)',
      category: 'Bronze Medalist',
      desc: 'Ku. Rutuja Vijay Rakshe (Class 11th) secured 3rd Place (Bronze Medal) on the national podium at the 68th SGFI National School Games Taekwondo Championship.'
    },
    {
      src: gunavantSanmanTrophies1,
      titleEn: 'Gunavant Kheladu Sanman 2024-25 Felicitation',
      titleMr: 'गुणवंत खेळाडू सन्मान सोहळा २०२४-२५',
      category: 'State Honor',
      desc: 'Special state and institutional recognition presented to national players Ku. Rutuja Rakshe, Uday Retawade, and Aryan Barkade.'
    },
    {
      src: teamNationalGames2,
      titleEn: '68th National Games Delegation & Coaching Staff',
      titleMr: 'राष्ट्रीय शालेय क्रीडा स्पर्धा संघ व क्रीडा शिक्षक',
      category: 'National Delegation',
      desc: 'Institutional sports coaches and national participants posing with the 68th National School Games banner and championship awards.'
    },
    {
      src: rutujaPodiumBronze2,
      titleEn: 'Podium Medal Ceremony - Rutuja Vijay Rakshe',
      titleMr: 'पदक वितरण समारंभ - कु. ऋतुजा विजय राक्षे',
      category: 'National Podium',
      desc: 'State felicitation and bronze medal presentation at the SGFI National Championship 2024-25.'
    },
    {
      src: teamFelicitation,
      titleEn: 'State Taekwondo Achievers Honor Ceremony',
      titleMr: 'राज्यस्तरीय तायक्वांदो खेळाडूंचा विशेष गौरव',
      category: 'Institutional Pride',
      desc: 'Celebration of student athletes who excelled across division, state, and SGFI national athletic circuits.'
    },
    {
      src: gunavantSanmanTrophies2,
      titleEn: 'State Merit Trophies - Gunavant Kheladu Sanman',
      titleMr: 'गुणवंत खेळाडू सन्मान ट्रॉफी व प्रमाणपत्र वितरण',
      category: 'State Honor',
      desc: 'Presentation of prestigious commemorative trophies to national achievers by esteemed dignitaries.'
    }
  ];

  // The 3 primary cards specified in requirements
  const cards = [
    {
      id: 'card-1',
      imageIndex: 0,
      image: teamNationalGames1,
      badge: 'NATIONAL LEVEL',
      badgeColor: 'bg-amber-400 text-slate-950 border-amber-300 font-black shadow-md shadow-amber-400/20',
      badgeIcon: Trophy,
      headline: '68th SGFI National School Games | ६८ वी राष्ट्रीय शालेय क्रीडा स्पर्धा',
      headlineEn: '68th SGFI National School Games',
      headlineMr: '६८ वी राष्ट्रीय शालेय क्रीडा स्पर्धा',
      description: 'Our talented athletes representing the institution at the National School Games Championship 2024-25 in Taekwondo.',
      descriptionMr: 'आमच्या कुशल खेळाडूंनी राष्ट्रीय शालेय क्रीडा स्पर्धा २०२४-२५ (तायक्वांदो) मध्ये संस्थेचे यशस्वी प्रतिनिधित्व केले.',
      meta: 'Championship 2024-25 • Taekwondo Wing'
    },
    {
      id: 'card-2',
      imageIndex: 1,
      image: rutujaPodiumBronze1,
      badge: 'BRONZE MEDALIST',
      badgeColor: 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-amber-100 border-amber-400/40 font-black shadow-md',
      badgeIcon: Medal,
      headline: 'National Bronze Medalist - Rutuja Rakshe | कु. ऋतुजा विजय राक्षे (कांस्य पदक)',
      headlineEn: 'National Bronze Medalist - Rutuja Rakshe',
      headlineMr: 'कु. ऋतुजा विजय राक्षे (कांस्य पदक)',
      description: 'Ku. Rutuja Vijay Rakshe (Class 11th) secured 3rd Place (Bronze Medal) at the National School Games Taekwondo Championship.',
      descriptionMr: 'कु. ऋतुजा विजय राक्षे (इ. ११ वी) हिने ६८ व्या राष्ट्रीय शालेय क्रीडा स्पर्धा (तायक्वांदो) मध्ये ३रा क्रमांक (कांस्य पदक) पटकावले.',
      meta: 'Class 11th • SGFI Bronze Medal Winner'
    },
    {
      id: 'card-3',
      imageIndex: 2,
      image: gunavantSanmanTrophies1,
      badge: 'STATE HONOR',
      badgeColor: 'bg-blue-600/90 text-white border-blue-400/50 font-black shadow-md shadow-blue-500/20',
      badgeIcon: Award,
      headline: 'Gunavant Kheladu Sanman 2024-25 | गुणवंत खेळाडू सन्मान सोहळा',
      headlineEn: 'Gunavant Kheladu Sanman 2024-25',
      headlineMr: 'गुणवंत खेळाडू सन्मान सोहळा',
      description: 'Special state recognition presented to national players Ku. Rutuja Rakshe, Uday Retawade, and Aryan Barkade.',
      descriptionMr: 'राष्ट्रीय खेळाडू कु. ऋतुजा राक्षे, उदय रेटावडे आणि आर्यन बारकडे यांना विशेष राज्यस्तरीय व संस्थात्मक सन्मान प्रदान.',
      meta: 'Merit Honor • Ku. Rutuja, Uday & Aryan'
    }
  ];

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allJuniorCollegeImages.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < allJuniorCollegeImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, allJuniorCollegeImages.length]);

  return (
    <div id="national-achievements-sports-excellence" className="space-y-6 relative z-10">
      {/* 1. Main Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full">
            <Trophy className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span className="text-amber-300 font-bold text-[11px] uppercase tracking-wider font-mono">
              National Honors & SGFI Achievements
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white tracking-tight">
            National Achievements & Sports Excellence <span className="text-amber-400 block sm:inline">(राष्ट्रीय क्रीडा यश व प्राविण्य)</span>
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Celebrating our national-level Taekwondo medalists and state-felicitated student athletes.
          </p>
        </div>

        {/* Total Photos Badge & Lightbox Trigger */}
        <button
          onClick={() => setLightboxIndex(0)}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/15 text-slate-200 text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-300 shrink-0 cursor-pointer shadow-md group"
          title="Click to view all photos in fullscreen gallery"
        >
          <Maximize2 className="w-3.5 h-3.5 text-amber-400 group-hover:text-slate-950 transition-colors" />
          <span>View All Photos ({allJuniorCollegeImages.length})</span>
        </button>
      </div>

      {/* 2. 3-Column Feature Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {cards.map((card) => {
          const BadgeIcon = card.badgeIcon;
          return (
            <div
              key={card.id}
              className="bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-white/15 hover:border-amber-400/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-400/10 transition-all duration-500 flex flex-col justify-between group relative"
            >
              {/* Top Image Container with 16:9 Aspect Ratio & Hover Scale */}
              <div
                className="relative w-full aspect-video overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setLightboxIndex(card.imageIndex)}
                title="Click photo to enlarge in full-screen lightbox"
              >
                <img
                  src={card.image}
                  alt={card.headlineEn}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Gradient Shade on bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border ${card.badgeColor}`}
                  >
                    <BadgeIcon className="w-3 h-3 shrink-0" />
                    <span>{card.badge}</span>
                  </span>
                </div>

                {/* Click to Zoom Hover Overlay Indicator */}
                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-slate-950/80 text-amber-300 border border-amber-400/40 rounded-xl px-2.5 py-1 text-[10px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md">
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>Enlarge Photo</span>
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Category / Sub-meta */}
                  <div className="text-[11px] font-mono font-bold text-amber-400/90 tracking-wide">
                    {card.meta}
                  </div>

                  {/* Headline */}
                  <h4 className="text-base sm:text-lg font-display font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {card.headline}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>

                  {/* Marathi Description if 'both' or 'mr' selected */}
                  {(selectedLang === 'both' || selectedLang === 'mr') && (
                    <p className="text-slate-400 text-xs leading-relaxed border-t border-white/10 pt-2.5 mt-2 font-medium">
                      {card.descriptionMr}
                    </p>
                  )}
                </div>

                {/* Card Footer with Quick Lightbox Action */}
                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-400">Junior College Wing</span>
                  <button
                    onClick={() => setLightboxIndex(card.imageIndex)}
                    className="text-amber-300 hover:text-amber-400 font-bold flex items-center gap-1 text-xs transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Lightbox Top Bar */}
          <div
            className="flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                {allJuniorCollegeImages[lightboxIndex].category}
              </span>
              <span className="text-slate-400 text-xs sm:text-sm font-mono">
                {lightboxIndex + 1} of {allJuniorCollegeImages.length}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-rose-500/80 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Image & Navigation */}
          <div
            className="relative flex-grow flex items-center justify-center py-4 my-auto max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : allJuniorCollegeImages.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-30 h-12 w-12 rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-md"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Large Image */}
            <div className="max-w-5xl max-h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/80 flex items-center justify-center">
              <img
                src={allJuniorCollegeImages[lightboxIndex].src}
                alt={allJuniorCollegeImages[lightboxIndex].titleEn}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < allJuniorCollegeImages.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-30 h-12 w-12 rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-md"
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption & Thumbnails */}
          <div
            className="bg-slate-900/90 border border-white/15 rounded-2xl p-4 sm:p-5 max-w-4xl mx-auto w-full z-20 space-y-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-white font-display font-black text-sm sm:text-base">
                {allJuniorCollegeImages[lightboxIndex].titleEn}{' '}
                <span className="text-amber-400">| {allJuniorCollegeImages[lightboxIndex].titleMr}</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                {allJuniorCollegeImages[lightboxIndex].desc}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pt-2 border-t border-white/10">
              {allJuniorCollegeImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    lightboxIndex === idx
                      ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/30'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
