import React, { useState, useEffect, useMemo } from 'react';
import { Plane, Sparkles, ChevronLeft, ChevronRight, X, Maximize2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Dynamically import all images from NCC folders
const nccFolderModules = import.meta.glob<{ default: string }>(
  [
    '../assets/images/NCC/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
    '../assets/images/Gym/NCC/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}'
  ],
  { eager: true }
);

interface NCCGallerySectionProps {
  selectedLang?: 'en' | 'mr' | 'both';
}

interface NCCImageItem {
  id: string;
  src: string;
  filename: string;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
}

export default function NCCGallerySection({ selectedLang: initialLang = 'both' }: NCCGallerySectionProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>(initialLang);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  // Process and memoize all imported NCC images
  const nccImages: NCCImageItem[] = useMemo(() => {
    const uniqueEntries: NCCImageItem[] = [];
    const seenFilenames = new Set<string>();

    Object.entries(nccFolderModules).forEach(([filePath, mod], index) => {
      const src = typeof mod === 'string' ? mod : (mod as { default?: string })?.default;
      if (!src) return;

      const filename = filePath.split('/').pop() || `ncc-photo-${index + 1}`;
      if (seenFilenames.has(filename)) return;
      seenFilenames.add(filename);

      // Clean, professional title formatting for cadets gallery
      const photoNumber = uniqueEntries.length + 1;
      let titleEn = `NCC Air Wing Cadet Activity #${photoNumber}`;
      let titleMr = `एन.सी.सी. एअर विंग छात्र सेना उपक्रम #${photoNumber}`;
      let descEn = 'Cadet parade, aviation orientation, and leadership discipline training.';
      let descMr = 'कॅडेट्सचे संचलन, हवाई दल मार्गदर्शन आणि नेतृत्व शिस्त प्रशिक्षण.';

      if (filename.includes('GAP00501')) {
        titleEn = 'NCC Air Wing Cadets Formal Drill & Uniform Inspection';
        titleMr = 'एन.सी.सी. एअर विंग गणवेश व संचलन पाहणी';
      } else if (filename.includes('GAP00502')) {
        titleEn = 'Air Wing Troop Contingent Formation & Briefing';
        titleMr = 'एअर विंग तुकडी संचलन व मार्गदर्शक सत्र';
      } else if (filename.includes('GAP00510')) {
        titleEn = 'National Cadet Corps Troop No. 10 Honor Roll';
        titleMr = 'राष्ट्रीय छात्र सेना तुकडी क्र. १० गौरव क्षण';
      }

      uniqueEntries.push({
        id: `ncc-img-${photoNumber}`,
        src,
        filename,
        titleEn,
        titleMr,
        descEn,
        descMr,
      });
    });

    return uniqueEntries;
  }, []);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null && nccImages.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + nccImages.length) % nccImages.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null && nccImages.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % nccImages.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nccImages.length]);

  return (
    <section
      id="ncc-gallery-section"
      className="bg-slate-900/90 text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden space-y-8 border border-white/10 backdrop-blur-md"
    >
      {/* Glow background effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Language Toggle Switch */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 relative z-10">
        <div className="space-y-1.5">
          <span className="text-amber-400 font-display font-bold text-xs uppercase tracking-widest flex items-center space-x-2 font-sans">
            <Plane className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Active Unit / राष्ट्रीय छात्र सेना (एअर विंग)</span>
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white">
            NCC Air Wing | राष्ट्रीय छात्र सेना (एअर विंग)
          </h2>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10 shrink-0">
          <span className="text-[10px] text-slate-400 font-bold uppercase px-2 font-mono">Lang:</span>
          {(['en', 'mr', 'both'] as const).map((lang) => (
            <button
              key={lang}
              type="button"
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

      {/* Upper Information Card */}
      <div
        id="ncc-info-overview-card"
        className="bg-slate-950/70 border border-white/10 rounded-2xl p-5 md:p-6 space-y-3 relative z-10 shadow-lg"
      >
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Cadet Wing Overview / छात्र सेना परिचय व उद्दिष्टे</span>
        </div>

        {showMr && (
          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans font-medium">
            आमची राष्ट्रीय छात्र सेना (NCC Air Wing) तुकडी विद्यार्थ्यांना शिस्त, देशसेवा, हवाई दल प्रशिक्षण आणि नेतृत्वाचे धडे देते. विद्यार्थ्यांमध्ये देशभक्ती आणि आत्मविश्वासाची भावना निर्माण करणे हा या उपक्रमाचा मुख्य उद्देश आहे.
          </p>
        )}

        {showEn && (
          <p className={`text-slate-300 text-sm md:text-base leading-relaxed font-sans ${showMr ? 'border-t border-white/10 pt-2.5 mt-2' : ''}`}>
            Our National Cadet Corps (NCC Air Wing) unit provides students with lessons in discipline, national service, aviation training, and leadership. The primary objective of this initiative is to instill a spirit of patriotism and self-confidence in cadets.
          </p>
        )}

        {/* Key Feature Checkmarks (Yellow Accent) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3 border-t border-white/10">
          <div className="flex items-center space-x-2 text-xs text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">Air Wing Training & Drill</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">Leadership & Defense Discipline</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">Open for All Eligible Cadets</span>
          </div>
        </div>
      </div>

      {/* Photo Gallery Header & Grid */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Plane className="w-4 h-4 text-amber-400" />
            <h3 className="font-display font-extrabold text-white text-lg">
              NCC Air Wing Photo Gallery (राष्ट्रीय छात्र सेना छायाचित्रे)
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            click any photo to enlarge ({nccImages.length} photos)
          </span>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nccImages.map((imgItem, idx) => (
            <div
              key={imgItem.id}
              id={`ncc-gallery-card-${idx}`}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2.5xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl flex flex-col justify-end cursor-pointer transition-all duration-300 hover:border-amber-400/60 hover:shadow-amber-400/10 hover:shadow-2xl"
            >
              {/* Image with zoom on hover */}
              <img
                src={imgItem.src}
                alt={selectedLang === 'en' ? imgItem.titleEn : imgItem.titleMr}
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 filter brightness-[0.9] group-hover:brightness-100 contrast-[1.03]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Subtle bottom gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />

              {/* ONLY the Active Facility Tag Overlay at Top-Left (No text at bottom) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block text-[10px] font-mono font-bold text-amber-300 bg-slate-950/80 border border-amber-400/40 px-2.5 py-1 rounded-lg uppercase tracking-wider backdrop-blur-md shadow-lg">
                  ACTIVE FACILITY
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
        {lightboxIndex !== null && nccImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 select-none"
          >
            {/* Close Button */}
            <button
              type="button"
              id="ncc-lightbox-close-btn"
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 z-50 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-colors shadow-2xl"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Photo Counter */}
            <div className="absolute top-6 left-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-amber-300 shadow-xl">
              {lightboxIndex + 1} / {nccImages.length}
            </div>

            {/* Prev Button */}
            <button
              type="button"
              id="ncc-lightbox-prev-btn"
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
                src={nccImages[lightboxIndex].src}
                alt={nccImages[lightboxIndex].titleEn}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Caption Bar inside Lightbox */}
              <div className="mt-4 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-full max-w-2xl text-center space-y-1">
                <h3 className="text-base sm:text-lg font-display font-bold text-white">
                  {nccImages[lightboxIndex].titleEn} | {nccImages[lightboxIndex].titleMr}
                </h3>
                <p className="text-xs text-slate-300">
                  {nccImages[lightboxIndex].descEn} • {nccImages[lightboxIndex].descMr}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              id="ncc-lightbox-next-btn"
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

