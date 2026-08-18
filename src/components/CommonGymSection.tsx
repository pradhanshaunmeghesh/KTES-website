import React, { useState } from 'react';
import { Dumbbell, Sparkles, ChevronLeft, ChevronRight, X, Maximize2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import images from assets/images/gym
// @ts-ignore
import gymImg1 from '../assets/images/gym/WhatsApp Image 2024-08-14 at 10.34.54 AM.jpeg';
// @ts-ignore
import gymImg2 from '../assets/images/gym/WhatsApp Image 2024-11-28 at 1.30.29 PM.jpeg';
// @ts-ignore
import gymImg3 from '../assets/images/gym/WhatsApp Image 2024-11-28 at 1.30.30 PM (1).jpeg';
// @ts-ignore
import gymImg4 from '../assets/images/gym/WhatsApp Image 2024-11-28 at 1.30.30 PM.jpeg';
// @ts-ignore
import gymImg5 from '../assets/images/gym/WhatsApp Image 2024-11-28 at 1.30.32 PM (2).jpeg';
// @ts-ignore
import gymImg6 from '../assets/images/gym/WhatsApp Image 2025-03-04 at 10.40.13 AM (2).jpeg';

interface CommonGymSectionProps {
  selectedLang?: 'en' | 'mr' | 'both';
}

interface GymImageItem {
  id: string;
  src: string;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
}

export default function CommonGymSection({ selectedLang: initialLang = 'both' }: CommonGymSectionProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>(initialLang);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  const gymImages: GymImageItem[] = [
    {
      id: 'gym-1',
      src: gymImg1,
      titleEn: 'Cardio & Strength Training Setup',
      titleMr: 'कार्डिओ व स्ट्रेंथ ट्रेनिंग विभाग',
      descEn: 'Modern weight stations and cardiovascular workout equipment.',
      descMr: 'अत्याधुनिक वजन उचलण्याची साधने आणि कार्डिओ वर्कआउट उपकरणे.'
    },
    {
      id: 'gym-2',
      src: gymImg2,
      titleEn: 'Multi-Station Workout Arena',
      titleMr: 'मल्टी-स्टेशन वर्कआउट विभाग',
      descEn: 'All-round strength machines engineered for student athletes.',
      descMr: 'विद्यार्थी खेळाडूंसाठी सर्वसमावेशक फिटनेस उपकरणे.'
    },
    {
      id: 'gym-3',
      src: gymImg3,
      titleEn: 'Free Weights & Dumbbells Section',
      titleMr: 'फ्री वेट्स व डंबेल विभाग',
      descEn: 'Heavy duty weight racks and professional fitness setups.',
      descMr: 'विविध वजनांचे डंबेल, बारबेल व सुरक्षित रॅक व्यवस्था.'
    },
    {
      id: 'gym-4',
      src: gymImg4,
      titleEn: 'Athletic Conditioning & Warmup Zone',
      titleMr: 'अॅथलेटिक कंडिशनिंग व वॉर्मअप झोन',
      descEn: 'Dedicated space for stretching, core strengthening, and mobility.',
      descMr: 'स्ट्रेचिंग, कोअर स्ट्रेंग्थ व लवचिकतेसाठी राखीव जागा.'
    },
    {
      id: 'gym-5',
      src: gymImg5,
      titleEn: 'Advanced Resistance & Cable Machines',
      titleMr: 'अॅडव्हान्स रेझिस्टन्स व केबल मशीन्स',
      descEn: 'Ergonomic cable pull stations for muscle development and power.',
      descMr: 'स्नायूंच्या अचूक विकासासाठी आधुनिक केबल व पुली सिस्टीम.'
    },
    {
      id: 'gym-6',
      src: gymImg6,
      titleEn: 'Fitness & Physical Discipline Hall',
      titleMr: 'फिटनेस व शारीरिक शिस्त संकुल',
      descEn: 'Clean, well-ventilated sports hall guided by experienced coaches.',
      descMr: 'हवेशीर, स्वच्छ वातावरण आणि अनुभवी मार्गदर्शकांचे सानिध्य.'
    }
  ];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + gymImages.length) % gymImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % gymImages.length);
    }
  };

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
            <span>Active Facility / कार्यन्वित सुविधा</span>
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white">
            Common Gym | सर्वसाधारण व्यायामशाळा
          </h2>
        </div>

        {/* Language Switcher */}
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

      {/* Overview Description Box */}
      <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-5 md:p-6 space-y-3 relative z-10 shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Facility Overview / व्यायामशाळा परिचय व वैशिष्ट्ये</span>
        </div>
        {showEn && (
          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans">
            Our state-of-the-art Common Gym is equipped with modern fitness equipment, cardio stations, and strength training setups to encourage physical fitness, athletic discipline, and healthy living among all students and staff.
          </p>
        )}
        {showMr && (
          <p className={`text-slate-300 text-sm md:text-base leading-relaxed font-sans ${showEn ? 'border-t border-white/10 pt-2.5 mt-2' : ''}`}>
            आमची आधुनिक सर्वसाधारण व्यायामशाळा (Common Gym) सर्व अत्याधुनिक तंदुरुस्ती साधने, कार्डिओ आणि स्ट्रेंथ ट्रेनिंग उपकरणांनी सज्ज आहे. विद्यार्थ्यांमध्ये आणि कर्मचाऱ्यांमध्ये शारीरिक सुदृढता, क्रीडा शिस्त आणि निरोगी जीवनशैलीला प्रोत्साहन देणे हा यामागचा मुख्य उद्देश आहे.
          </p>
        )}

        {/* Feature bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3 border-t border-white/10">
          <div className="flex items-center space-x-2 text-xs text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Modern Fitness & Cardio Stations</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Strength & Resistance Training</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Open for All Students & Staff</span>
          </div>
        </div>
      </div>

      {/* Interactive Gym Image Gallery Grid */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-amber-400" />
            <h3 className="font-display font-extrabold text-white text-lg">
              {selectedLang === 'en' && 'Gymnasium Photo Gallery'}
              {selectedLang === 'mr' && 'व्यायामशाळा छायाचित्रे'}
              {selectedLang === 'both' && 'Gymnasium Photo Gallery (व्यायामशाळा छायाचित्रे)'}
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            Click any photo to enlarge
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymImages.map((imgItem, idx) => (
            <div
              key={imgItem.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2.5xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl flex flex-col justify-end cursor-pointer transition-all duration-300 hover:border-amber-400/60 hover:shadow-amber-400/10 hover:shadow-2xl"
            >
              {/* Image with zoom on hover */}
              <img
                src={imgItem.src}
                alt={selectedLang === 'en' ? imgItem.titleEn : imgItem.titleMr}
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 filter brightness-[0.85] group-hover:brightness-95 contrast-[1.05]"
                referrerPolicy="no-referrer"
              />

              {/* Subtle bottom gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

              {/* Active Facility Tag Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block text-[10px] font-mono font-bold text-amber-300 bg-slate-950/80 border border-amber-400/40 px-2.5 py-1 rounded-lg uppercase tracking-wider backdrop-blur-md shadow-lg">
                  Active Facility
                </span>
              </div>

              {/* Zoom badge icon */}
              <div className="absolute top-4 right-4 h-9 w-9 rounded-xl bg-slate-950/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm shadow-lg z-10">
                <Maximize2 className="h-4 w-4 text-amber-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 select-none"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 z-50 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-colors shadow-2xl"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Photo Counter */}
            <div className="absolute top-6 left-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-amber-300 shadow-xl">
              {lightboxIndex + 1} / {gymImages.length}
            </div>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all shadow-2xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[75vh] flex flex-col items-center justify-center"
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={gymImages[lightboxIndex].src}
                alt={gymImages[lightboxIndex].titleEn}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Caption Bar */}
              <div className="mt-4 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-full max-w-2xl text-center space-y-1">
                <h3 className="text-base sm:text-lg font-display font-bold text-white">
                  {gymImages[lightboxIndex].titleEn} | {gymImages[lightboxIndex].titleMr}
                </h3>
                <p className="text-xs text-slate-300">
                  {gymImages[lightboxIndex].descEn} • {gymImages[lightboxIndex].descMr}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all shadow-2xl"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
