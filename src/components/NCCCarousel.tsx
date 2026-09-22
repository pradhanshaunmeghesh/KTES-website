import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const nccPilotInteraction = '/images/ncc_pilot_interaction_1787651755440.jpg';
const nccPilotTarmac = '/images/ncc_pilot_tarmac_1787651772635.jpg';
const nccAirForceGallery = '/images/air_force_gallery_1787651788607.jpg';
const nccTroopTen = '/images/ncc_troop_ten_1787651805916.jpg';

export default function NCCCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'ncc-slide-1',
      path: nccPilotInteraction,
      alt: 'Cadets interacting with IAF Pilot next to fighter aircraft',
      headline: 'Empowering Future Leaders | एन.सी.सी. एअर विंग द्वारे भावी नेतृत्वाचा पाया',
    },
    {
      id: 'ncc-slide-2',
      path: nccPilotTarmac,
      alt: 'School Cadets posing with IAF Fighter Pilot on airbase tarmac',
      headline: 'Inspiring Patriotism & Service | देशसेवा आणि शिस्तीचे धडे',
    },
    {
      id: 'ncc-slide-3',
      path: nccAirForceGallery,
      alt: 'Air Force Day informational gallery and aircraft display board',
      headline: 'Aviation Awareness & Technical Knowledge | हवाई दल आणि तंत्रज्ञानाची ओळख',
    },
    {
      id: 'ncc-slide-4',
      path: nccTroopTen,
      alt: 'National Cadet Corps Troop No. 10 / No. 3 MAH Air Sqn NCC Pune unit',
      headline: 'National Cadet Corps (Troop No. 10) | राष्ट्रीय छात्र सेना (एअर विंग)',
    },
  ];

  // Autoplay 4.5s
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4500);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      id="ncc-hero-carousel"
      className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-2.5xl overflow-hidden shadow-2xl border border-white/15 group bg-slate-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Image & Headline */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentIndex].path}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />

            {/* Bottom Overlay with Only Bold Headline - No subtext */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 sm:p-7 flex flex-col justify-end">
              <div className="space-y-1 max-w-2xl">
                <span className="text-[10px] sm:text-xs font-bold text-amber-400 tracking-wider uppercase font-mono bg-amber-400/15 border border-amber-400/25 px-2.5 py-0.5 rounded inline-block">
                  Air Wing Slide {currentIndex + 1} / {slides.length}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-display font-black text-white leading-snug drop-shadow-md">
                  {slides[currentIndex].headline}
                </h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        id="ncc-carousel-prev"
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 transition-all cursor-pointer backdrop-blur opacity-80 group-hover:opacity-100 focus:opacity-100 z-10"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        id="ncc-carousel-next"
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 transition-all cursor-pointer backdrop-blur opacity-80 group-hover:opacity-100 focus:opacity-100 z-10"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 right-4 flex space-x-1.5 z-10 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? 'w-6 bg-amber-400'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
