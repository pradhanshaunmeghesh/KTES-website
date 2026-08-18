import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Building2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// @ts-ignore
import computerLabImg from '../assets/images/computer_lab.jpg';
// @ts-ignore
import scienceLabImg from '../assets/images/science_lab.jpg';
// @ts-ignore
import scienceLabImg1 from '../assets/images/Science_lab1.jpg';
// @ts-ignore
import libraryImg from '../assets/images/library1.jpg';

interface InfrastructureFacilitiesCarouselProps {
  selectedLang?: 'en' | 'mr' | 'both';
}

export default function InfrastructureFacilitiesCarousel({
  selectedLang: initialLang = 'both'
}: InfrastructureFacilitiesCarouselProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>(initialLang);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (initialLang) {
      setSelectedLang(initialLang);
    }
  }, [initialLang]);

  const slides = [
    {
      id: 'computer-lab',
      image: computerLabImg,
      overlayHeadingBoth: 'Computer Lab (संगणक प्रयोगशाळा)',
      leftCardTitleEn: '1. Computer Lab',
      leftCardTitleMr: '१. Computer Lab (संगणक प्रयोगशाळा)',
      rightPanelEn: 'Equipped with modern technology, our computer lab provides students with hands-on practical knowledge, coding, and essential digital skills.',
      rightPanelMr: 'आधुनिक तंत्रज्ञानाची ओळख करून देण्यासाठी सुसज्ज अशी संगणक लॅब उपलब्ध आहे. येथे विद्यार्थ्यांना प्रॅक्टिकल ज्ञान, कोडिंग आणि डिजिटल कौशल्यांचे (Digital Skills) उत्तम शिक्षण दिले जाते.',
      specsEn: [
        'High-speed internet & modern workstations',
        'Practical coding & digital literacy curriculum',
        'Interactive learning modules & computer applications'
      ],
      specsMr: [
        'हाय-स्पीड इंटरनेट आणि आधुनिक संगणक लॅब',
        'प्रात्यक्षिक कोडिंग आणि डिजिटल कौशल्य शिक्षण',
        'डिजिटल शिक्षण प्रणाली व संगणक उपक्रम'
      ]
    },
    {
      id: 'science-lab',
      image: scienceLabImg,
      altImage: scienceLabImg1,
      overlayHeadingBoth: 'Science Lab (विज्ञान प्रयोगशाळा)',
      leftCardTitleEn: '2. Science Lab',
      leftCardTitleMr: '२. Science Lab (विज्ञान प्रयोगशाळा)',
      rightPanelEn: 'A state-of-the-art science lab designed for Physics, Chemistry, and Biology experiments, enabling students to grasp scientific concepts through direct practical learning.',
      rightPanelMr: 'भौतिकशास्त्र (Physics), रसायनशास्त्र (Chemistry) आणि जीवशास्त्र (Biology) या विषयांचे प्रयोग करण्यासाठी अत्याधुनिक विज्ञान प्रयोगशाळा उपलब्ध आहे. यामुळे विद्यार्थ्यांना विज्ञानातील संकल्पना प्रत्यक्ष प्रयोगांद्वारे समजून घेणे सोपे जाते.',
      specsEn: [
        'Dedicated Physics, Chemistry, and Biology lab apparatus',
        'Direct practical experimentation & concept clarity',
        'Comprehensive safety standards & expert lab guidance'
      ],
      specsMr: [
        'भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्रासाठी सुसज्ज उपकरणे',
        'प्रत्यक्ष प्रयोगाद्वारे विज्ञान संकल्पनांचे सुलभ आकलन',
        'उत्कृष्ट सुरक्षा मानके आणि अनुभवी प्रयोगशाळा मार्गदर्शन'
      ]
    },
    {
      id: 'central-library',
      image: libraryImg,
      overlayHeadingBoth: 'Central Library (ग्रंथालय)',
      leftCardTitleEn: '3. Central Library',
      leftCardTitleMr: '३. Library (ग्रंथालय)',
      rightPanelEn: 'To cultivate a reading culture and foster overall personality development, Mahatma Gandhi Vidyalaya & Junior College, Rajgurunagar maintains a well-equipped library with over 11,611 books. Dedicated reading sessions are held every Wednesday and Sunday.',
      rightPanelMr: 'महात्मा गांधी विद्यालय व कनिष्ठ महाविद्यालय, राजगुरूनगर येथे विद्यार्थ्यांमध्ये वाचन संस्कृती रुजवणे, ज्ञानसंपादनाची आवड निर्माण करणे व व्यक्तिमत्त्व विकासाला चालना देणे या उद्देशाने समृद्ध ग्रंथालय प्रभावीपणे कार्यरत असून त्यामध्ये सुमारे ११,६११ पुस्तके उपलब्ध आहेत. विद्यार्थ्यांसाठी वयोगटानुसार विविध विषयांवरील पुस्तके उपलब्ध करून देण्यात आली असून आठवड्यातील बुधवार व रविवार या दिवशी नियमित वाचन तास आयोजित केले जातात.',
      specsEn: [
        'Rich repository of 11,611+ age-appropriate books across various subjects.',
        'Enhances language fluency, critical thinking, and intellectual development.',
        'Dedicated reading sessions scheduled every Wednesday and Sunday.'
      ],
      specsMr: [
        '११,६११+ पेक्षा जास्त पुस्तकांचा समृद्ध संग्रह (वयोगटानुसार वर्गवारी).',
        'भाषिक कौशल्य, विचारसरणी आणि सर्वांगीण ज्ञानवृद्धीस प्रोत्साहन.',
        'आठवड्यातील बुधवार व रविवार या दिवशी नियमित वाचन तास.'
      ]
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];
  const showEn = selectedLang === 'both' || selectedLang === 'en';
  const showMr = selectedLang === 'both' || selectedLang === 'mr';

  return (
    <section className="bg-slate-900/90 text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden space-y-8 border border-white/10 backdrop-blur-md">
      {/* Header & Language Toggle Switch */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1.5">
          <span className="text-amber-400 font-display font-bold text-xs uppercase tracking-widest flex items-center space-x-2 font-sans">
            <Building2 className="h-4 w-4 text-amber-400" />
            <span>Infrastructure & Campus Facilities / पायाभूत सोयी-सुविधा</span>
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white">
            {showEn && !showMr && 'Infrastructure & Facilities Showcase'}
            {!showEn && showMr && 'पायाभूत सुविधा व ग्रंथालय'}
            {showEn && showMr && 'Infrastructure & Facilities (पायाभूत सुविधा व प्रयोगशाळा / ग्रंथालय)'}
          </h2>
        </div>

        {/* Language Toggle Controls */}
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

      {/* Main Grid: Left Image Slider + Right Specifications Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Image Carousel */}
        <div className="lg:col-span-7 space-y-4">
          <div
            className="relative h-[300px] sm:h-[380px] md:h-[440px] rounded-2.5xl overflow-hidden border border-white/10 shadow-2xl group bg-slate-950"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
                  src={currentSlide.image}
                  alt={currentSlide.overlayHeadingBoth}
                  className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay & Heading Banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6 sm:p-8 flex flex-col justify-end space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md font-mono">
                      Slide {currentIndex + 1} of {slides.length}
                    </span>
                  </div>

                  {/* Image Overlay Heading */}
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white">
                    {selectedLang === 'en' && currentSlide.leftCardTitleEn}
                    {selectedLang === 'mr' && currentSlide.leftCardTitleMr}
                    {selectedLang === 'both' && currentSlide.overlayHeadingBoth}
                  </h3>

                  {/* Left Card Title Indicator */}
                  <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-amber-400/30 px-3 py-1.5 rounded-xl text-amber-300 font-bold text-xs sm:text-sm w-fit mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>
                      {selectedLang === 'en' && currentSlide.leftCardTitleEn}
                      {selectedLang === 'mr' && currentSlide.leftCardTitleMr}
                      {selectedLang === 'both' && `${currentSlide.leftCardTitleEn} / ${currentSlide.leftCardTitleMr}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/70 hover:bg-slate-950 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 transition-all cursor-pointer backdrop-blur opacity-80 group-hover:opacity-100 z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/70 hover:bg-slate-950 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 hover:scale-105 transition-all cursor-pointer backdrop-blur opacity-80 group-hover:opacity-100 z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
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

          {/* Quick Select Buttons Below Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  currentIndex === idx
                    ? 'bg-amber-400/10 border-amber-400/50 text-amber-300 shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    Option {idx + 1}
                  </span>
                  <span className="text-xs font-bold block">
                    {selectedLang === 'en' && slide.leftCardTitleEn}
                    {selectedLang === 'mr' && slide.leftCardTitleMr}
                    {selectedLang === 'both' && slide.leftCardTitleMr}
                  </span>
                </div>
                {currentIndex === idx && (
                  <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Synchronized Infrastructure Specifications Panel */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-white/10 rounded-2.5xl p-6 md:p-8 space-y-6 shadow-2xl backdrop-blur-md">
          {/* Section Heading */}
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono block">
              Specifications & Overview
            </span>
            <h3 className="font-display font-extrabold text-white text-lg sm:text-xl">
              {selectedLang === 'en' && 'Infrastructure Specifications'}
              {selectedLang === 'mr' && 'पायाभूत सुविधा तपशील'}
              {selectedLang === 'both' && 'Infrastructure Specifications (पायाभूत सुविधा तपशील)'}
            </h3>
          </div>

          {/* Active Slide Synchronized Title Card */}
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-4 space-y-2">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider font-mono block">
              Active Facility Card
            </span>
            <h4 className="font-display font-bold text-white text-base sm:text-lg">
              {selectedLang === 'en' && currentSlide.leftCardTitleEn}
              {selectedLang === 'mr' && currentSlide.leftCardTitleMr}
              {selectedLang === 'both' && `${currentSlide.leftCardTitleEn} / ${currentSlide.leftCardTitleMr}`}
            </h4>
          </div>

          {/* Right Panel Content / Description */}
          <div className="space-y-3 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
            <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider font-mono">
              Description / वर्णन:
            </span>
            {showEn && (
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
                {currentSlide.rightPanelEn}
              </p>
            )}
            {showMr && (
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans border-t border-white/10 pt-2 mt-2">
                {currentSlide.rightPanelMr}
              </p>
            )}
          </div>

          {/* Key Features Bullet List */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Key Highlights & Features:
            </h5>
            <ul className="space-y-2.5">
              {selectedLang === 'en' &&
                currentSlide.specsEn.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="h-4 w-4 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{spec}</span>
                  </li>
                ))}
              {selectedLang === 'mr' &&
                currentSlide.specsMr.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="h-4 w-4 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{spec}</span>
                  </li>
                ))}
              {selectedLang === 'both' &&
                currentSlide.specsEn.map((enSpec, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="h-4 w-4 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="space-y-0.5 leading-relaxed">
                      <div>{enSpec}</div>
                      <div className="text-slate-400 text-[11px]">{currentSlide.specsMr[idx]}</div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

