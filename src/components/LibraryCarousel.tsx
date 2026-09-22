import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const library1 = '/images/library1.jpg';
const library2 = '/images/library2.jpg';

interface LibraryCarouselProps {
  selectedLang: 'en' | 'mr' | 'both';
}

export default function LibraryCarousel({ selectedLang }: LibraryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'slide-1',
      path: library1,
      altEn: 'Spacious school library reading room',
      altMr: 'प्रशस्त शालेय ग्रंथालय वाचन कक्ष',
      titleEn: 'Main Study & Reading Hall',
      titleMr: 'मुख्य अभ्यास आणि वाचन कक्ष',
      descEn: 'A silent, spacious, and climate-controlled library holding over 15,000 monographs, academic reference guides, and leading journals.',
      descMr: '१५,००० हून अधिक ग्रंथ, शैक्षणिक संदर्भ पुस्तके आणि आघाडीच्या नियतकालिकांचा साठा असलेला शांत, प्रशस्त आणि वातानुकूलित अभ्यास कक्ष.',
    },
    {
      id: 'slide-2',
      path: library2,
      altEn: 'Curated reference books and study materials',
      altMr: 'निवडक संदर्भ पुस्तके आणि अभ्यास साहित्य',
      titleEn: 'Curated Academic Resources',
      titleMr: 'शैक्षणिक संदर्भ संसाधने',
      descEn: 'Featuring dedicated sections for competitive exam prep (scholarship, MTSE, Olympiad) alongside foundational curriculum guides.',
      descMr: 'पायाभूत अभ्यासक्रम पुस्तकांसोबतच स्पर्धा परीक्षांच्या तयारीसाठी (शिष्यवृत्ती, MTSE, ऑलिम्पियाड) विशेष आणि समृद्ध विभाग.',
    }
  ];

  // Start autoplay timer (4 seconds)
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 4000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  return (
    <section 
      className="space-y-6 border-t border-white/10 pt-10"
      id="library-facilities-section"
    >
      {/* Section Title Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 font-sans">
            <BookOpen className="h-4 w-4 text-amber-400" />
            <span>Campus Infrastructure / पायाभूत सोयी-सुविधा</span>
          </span>
          <h2 className="text-2xl font-display font-black text-white" id="library-section-heading">
            {showEn && <span className="block">Campus Facilities: Library</span>}
            {showMr && <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans">शालेय सोयी-सुविधा: ग्रंथालय</span>}
          </h2>
        </div>
        <div className="bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-xl text-amber-300 text-xs font-semibold shrink-0">
          📍 Central Wing (Ground Floor)
        </div>
      </div>

      {/* Carousel Core Body */}
      <div 
        className="relative h-[280px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-950"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides Presentation Container */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentIndex].path || undefined}
                alt={showEn ? slides[currentIndex].altEn : slides[currentIndex].altMr}
                className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              
              {/* Slide Text Banner & Captions */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6 sm:p-10 flex flex-col justify-end space-y-2 text-white">
                <div className="max-w-3xl space-y-1 sm:space-y-2">
                  <span className="text-[10px] sm:text-xs font-bold text-amber-400 tracking-wider uppercase font-mono bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md inline-block mb-1">
                    Slide {currentIndex + 1} of {slides.length}
                  </span>
                  
                  <h3 className="font-display font-black text-lg sm:text-2xl md:text-3xl text-white">
                    {showEn && <span className="block">{slides[currentIndex].titleEn}</span>}
                    {showMr && <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans">{slides[currentIndex].titleMr}</span>}
                  </h3>

                  <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-medium line-clamp-2 sm:line-clamp-none">
                    {showEn && <span className="block">{slides[currentIndex].descEn}</span>}
                    {showMr && <span className="block text-slate-300 font-normal italic mt-1 font-sans">{slides[currentIndex].descMr}</span>}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrow buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/60 hover:bg-slate-950/90 border border-white/10 flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 transition-all cursor-pointer backdrop-blur opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/60 hover:bg-slate-950/90 border border-white/10 flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 transition-all cursor-pointer backdrop-blur opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Indicator Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-8 bg-amber-400 border border-amber-500' 
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Library Stats / Additional context */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white pt-2">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start space-x-3 shadow-inner hover:border-amber-400/25 transition-all">
          <div className="h-8 w-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold font-mono text-sm shrink-0">
            15K+
          </div>
          <div>
            <h4 className="text-xs text-amber-400 font-bold uppercase tracking-wider font-mono">Book Collection</h4>
            <p className="text-xs text-slate-350 mt-1 leading-normal">Covering syllabus textbooks, classic literature, science fiction, and journals.</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start space-x-3 shadow-inner hover:border-amber-400/25 transition-all">
          <div className="h-8 w-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold font-mono text-sm shrink-0">
            200+
          </div>
          <div>
            <h4 className="text-xs text-amber-400 font-bold uppercase tracking-wider font-mono">Seating Capacity</h4>
            <p className="text-xs text-slate-350 mt-1 leading-normal">Spacious, air-cooled seating area designed to promote comfortable, long hours of study.</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start space-x-3 shadow-inner hover:border-amber-400/25 transition-all">
          <div className="h-8 w-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold font-mono text-sm shrink-0">
            E-Lib
          </div>
          <div>
            <h4 className="text-xs text-amber-400 font-bold uppercase tracking-wider font-mono">Digital Terminals</h4>
            <p className="text-xs text-slate-350 mt-1 leading-normal">Providing students with digital research workstations and online encyclopedia catalogs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
