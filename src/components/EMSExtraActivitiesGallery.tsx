import { useState, useEffect } from 'react';
import {
  Sparkles,
  Trophy,
  Medal,
  Award,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Flame,
  Star,
  Activity,
  Flag
} from 'lucide-react';

// Imports of EMS and English Medium School extra activity images
// @ts-ignore
import emsImg01 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.02 PM.jpeg';
// @ts-ignore
import emsImg02 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.03 PM (1).jpeg';
// @ts-ignore
import emsImg03 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.03 PM (2).jpeg';
// @ts-ignore
import emsImg04 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.04 PM.jpeg';
// @ts-ignore
import emsImg05 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.04 PM (1).jpeg';
// @ts-ignore
import emsImg06 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.04 PM (2).jpeg';
// @ts-ignore
import emsImg07 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.05 PM.jpeg';
// @ts-ignore
import emsImg08 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.05 PM (1).jpeg';
// @ts-ignore
import emsImg09 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.06 PM.jpeg';
// @ts-ignore
import emsImg10 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.06 PM (1).jpeg';
// @ts-ignore
import emsImg11 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.07 PM.jpeg';
// @ts-ignore
import emsImg12 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.07 PM (1).jpeg';
// @ts-ignore
import emsImg13 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.07 PM (2).jpeg';
// @ts-ignore
import emsImg14 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.08 PM (1).jpeg';
// @ts-ignore
import emsImg15 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.08 PM (2).jpeg';
// @ts-ignore
import emsImg16 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.09 PM (1).jpeg';
// @ts-ignore
import emsImg17 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.09 PM (2).jpeg';
// @ts-ignore
import emsImg18 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.10 PM (2).jpeg';
// @ts-ignore
import emsImg19 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.10 PM (3).jpeg';
// @ts-ignore
import emsImg20 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.11 PM (1).jpeg';
// @ts-ignore
import emsImg21 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.12 PM.jpeg';
// @ts-ignore
import emsImg22 from '../assets/images/ems/WhatsApp Image 2026-07-03 at 1.22.12 PM (1).jpeg';
// @ts-ignore
import emsScoutImg from '../assets/images/ems/scout.jpg';
// @ts-ignore
import emsAssemblyImg from '../assets/images/ems/assembly.jpg';

interface EMSExtraActivitiesGalleryProps {
  selectedLang?: 'en' | 'mr' | 'both';
}

export default function EMSExtraActivitiesGallery({
  selectedLang: initialLang = 'both'
}: EMSExtraActivitiesGalleryProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>(initialLang);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialLang) {
      setSelectedLang(initialLang);
    }
  }, [initialLang]);

  // Gallery item collection with 24 photos
  const activityItems = [
    {
      id: 'ems-act-1',
      src: emsImg01,
      badge: 'SPORTS DAY',
      badgeColor: 'bg-emerald-500/90 text-white border-emerald-400/50',
      category: 'Sports',
      titleEn: 'Annual Athletic Sports Meet & Drill Display',
      titleMr: 'वार्षिक क्रीडा महोत्सव व कवायत सादरीकरण',
      descEn: 'Students enthusiastically participating in track and field sprints, drill choreography, and teamwork sports events.',
      descMr: 'मैदानी खेळ, धावण्याच्या शर्यती व शिस्तबद्ध कवायतींमध्ये विद्यार्थ्यांचा सक्रिय सहभाग.'
    },
    {
      id: 'ems-act-2',
      src: emsImg02,
      badge: 'CAMPUS EVENT',
      badgeColor: 'bg-amber-400 text-slate-950 border-amber-300 font-black',
      category: 'Celebration',
      titleEn: 'Cultural Gathering & Student Celebrations',
      titleMr: 'सांस्कृतिक स्नेहसंमेलन व पारितोषिक वितरण',
      descEn: 'Vibrant cultural performances highlighting folk dances, theatrical drama, and multi-talented school performers.',
      descMr: 'पारंपरिक लोकनृत्य, नाटक आणि विविध गुणदर्शन सादरीकरण.'
    },
    {
      id: 'ems-act-3',
      src: emsImg03,
      badge: 'STATE HONOR',
      badgeColor: 'bg-blue-600/90 text-white border-blue-400/50',
      category: 'Achievement',
      titleEn: 'Felicitation of Outstanding Student Achievers',
      titleMr: 'गुणवंत खेळाडू व विद्यार्थ्यांचा सन्मान सोहळा',
      descEn: 'Honoring state-level rank holders and young champions with commemorative merit trophies.',
      descMr: 'राज्यस्तरीय खेळाडू आणि गुणवंत विद्यार्थ्यांचा मान्यवरांच्या हस्ते गौरव.'
    },
    {
      id: 'ems-act-4',
      src: emsImg04,
      badge: 'NATIONAL LEVEL',
      badgeColor: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 border-amber-300 font-black',
      category: 'Sports',
      titleEn: 'Martial Arts & Taekwondo Championship Wing',
      titleMr: 'तायक्वांदो व स्वसंरक्षण प्रशिक्षण स्पर्धा',
      descEn: 'National and state medalists demonstrating technical kicks and competitive sparring techniques.',
      descMr: 'राष्ट्रीय व राज्य पातळीवरील पदके जिंकणाऱ्या खेळाडूंचे प्रात्यक्षिक.'
    },
    {
      id: 'ems-act-5',
      src: emsImg05,
      badge: 'SCOUTS & GUIDES',
      badgeColor: 'bg-indigo-600/90 text-white border-indigo-400/50',
      category: 'Discipline',
      titleEn: 'Bharat Scouts and Guides Camp Session',
      titleMr: 'भारत स्काऊट आणि गाईड शिबिर',
      descEn: 'Leadership outdoor drills, knot tying, and life safety training under experienced state trainers.',
      descMr: 'नेतृत्व गुण, शिस्त आणि सामाजिक सेवेचे प्रशिक्षण देणारे स्काऊट-गाईड शिबिर.'
    },
    {
      id: 'ems-act-6',
      src: emsImg06,
      badge: 'BRONZE MEDALIST',
      badgeColor: 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-amber-100 border-amber-400/40 font-black',
      category: 'Achievement',
      titleEn: 'Podium Medal Celebrations & Merit Trophies',
      titleMr: 'क्रीडा यश व पदक वितरण सोहळा',
      descEn: 'Student sports prodigies proudly displaying bronze and silver division medals.',
      descMr: 'क्रीडा स्पर्धांमध्ये जिंकलेली पदके व स्मृतिचिन्हे.'
    },
    {
      id: 'ems-act-7',
      src: emsImg07,
      badge: 'YOGA & FITNESS',
      badgeColor: 'bg-teal-600/90 text-white border-teal-400/50',
      category: 'Wellness',
      titleEn: 'International Yoga Day & Mass Asana Sessions',
      titleMr: 'आंतरराष्ट्रीय योग दिन व सामूहिक योगाभ्यास',
      descEn: 'School-wide morning yoga, Pranayama, and concentration exercises cultivating physical and mental vitality.',
      descMr: 'शारीरिक व मानसिक एकाग्रतेसाठी नियमित योगासने व प्राणायाम.'
    },
    {
      id: 'ems-act-8',
      src: emsImg08,
      badge: 'CAMPUS EVENT',
      badgeColor: 'bg-rose-600/90 text-white border-rose-400/50',
      category: 'Celebration',
      titleEn: 'Annual Sports Award Presentation',
      titleMr: 'वार्षिक क्रीडा पारितोषिक वितरण',
      descEn: 'Best athlete of the year presentations and shield distribution ceremonies.',
      descMr: 'उत्कृष्ट खेळाडू आणि विजेत्या संघांचा सन्मान.'
    },
    {
      id: 'ems-act-9',
      src: emsImg09,
      badge: 'SCIENCE EXHIBITION',
      badgeColor: 'bg-cyan-600/90 text-white border-cyan-400/50',
      category: 'Academic',
      titleEn: 'Science Fair & Innovation Model Expo',
      titleMr: 'विज्ञान प्रदर्शन व नवकल्पना मॉडेल सादरीकरण',
      descEn: 'Young scientists showcasing automated robotics, renewable energy grids, and physics experiments.',
      descMr: 'विद्यार्थ्यांनी तयार केलेले वैज्ञानिक प्रकल्प व प्रयोग.'
    },
    {
      id: 'ems-act-10',
      src: emsImg10,
      badge: 'SPORTS DAY',
      badgeColor: 'bg-emerald-500/90 text-white border-emerald-400/50',
      category: 'Sports',
      titleEn: 'March Past & House Championship Parade',
      titleMr: 'शिस्तबद्ध संचलन व हाऊस स्पर्धा',
      descEn: 'Inter-house march past squads commanded by student council captains.',
      descMr: 'शालेय तुकड्यांचे आकर्षक संचलन व मानवंदना.'
    },
    {
      id: 'ems-act-11',
      src: emsImg11,
      badge: 'DISTRICT MERIT',
      badgeColor: 'bg-purple-600/90 text-white border-purple-400/50',
      category: 'Achievement',
      titleEn: 'District Championship Winners Delegation',
      titleMr: 'जिल्हास्तरीय अजिंक्यपद विजेते संघ',
      descEn: 'Khed Taluka and Pune District victorious teams recognized at school assembly.',
      descMr: 'जिल्हास्तरीय स्पर्धांमध्ये वर्चस्व गाजवणारे विद्यार्थी.'
    },
    {
      id: 'ems-act-12',
      src: emsImg12,
      badge: 'CULTURAL FEST',
      badgeColor: 'bg-amber-500/90 text-slate-950 border-amber-300 font-black',
      category: 'Celebration',
      titleEn: 'Traditional Folk Dance & Musical Rhythms',
      titleMr: 'पारंपरिक लोकनृत्य व संगीत सादरीकरण',
      descEn: 'Students honoring regional Marathi heritage and classical arts through coordinated performances.',
      descMr: 'महाराष्ट्राच्या लोककलेचे व संस्कृतीचे दिमाखदार सादरीकरण.'
    },
    {
      id: 'ems-act-13',
      src: emsImg13,
      badge: 'MARTIAL ARTS',
      badgeColor: 'bg-red-600/90 text-white border-red-400/50',
      category: 'Sports',
      titleEn: 'Self-Defense Training & Karate Grading',
      titleMr: 'स्वसंरक्षण व कराटे प्रात्यक्षिके',
      descEn: 'Empowering students with vital self-defense reflexes and belt progression examinations.',
      descMr: 'मुलींसाठी स्वसंरक्षण व कराटे बेल्ट परीक्षांचे आयोजन.'
    },
    {
      id: 'ems-act-14',
      src: emsImg14,
      badge: 'ATHLETIC MEET',
      badgeColor: 'bg-emerald-600/90 text-white border-emerald-400/50',
      category: 'Sports',
      titleEn: 'Inter-School Relay Race & Field Finals',
      titleMr: 'आंतरशालेय रिले स्पर्धा व अंतिम सामने',
      descEn: 'High-energy 4x100m baton handoffs and sportsmanship in action.',
      descMr: 'रोमांचक रिले शर्यती आणि मैदानी स्पर्धांचे क्षण.'
    },
    {
      id: 'ems-act-15',
      src: emsImg15,
      badge: 'CAMPUS EVENT',
      badgeColor: 'bg-blue-500/90 text-white border-blue-300 font-bold',
      category: 'Celebration',
      titleEn: 'National Festivals & Independence Day Parades',
      titleMr: 'राष्ट्रीय सण व स्वातंत्र्य दिन संचलन',
      descEn: 'Tricolor flag hoisting, patriotic choruses, and solemn honor salutes.',
      descMr: 'ध्वजारोहण आणि देशभक्तिपर सांस्कृतिक कार्यक्रम.'
    },
    {
      id: 'ems-act-16',
      src: emsImg16,
      badge: 'STATE HONOR',
      badgeColor: 'bg-amber-400 text-slate-950 border-amber-300 font-black',
      category: 'Achievement',
      titleEn: 'State Level Sports Medal Presentation',
      titleMr: 'राज्यस्तरीय क्रीडा पदक वितरण',
      descEn: 'Commending our students who brought laurels across Maharashtra sports circuits.',
      descMr: 'महाराष्ट्र राज्य क्रीडा स्पर्धांमध्ये उज्ज्वल यश मिळवणारे खेळाडू.'
    },
    {
      id: 'ems-act-17',
      src: emsImg17,
      badge: 'YOGA & FITNESS',
      badgeColor: 'bg-teal-500/90 text-white border-teal-300 font-bold',
      category: 'Wellness',
      titleEn: 'Surya Namaskar & Mindfulness Sessions',
      titleMr: 'सूर्यनमस्कार व ध्यानधारणा उपक्रम',
      descEn: 'Fostering daily discipline and mental clarity with synchronised postures.',
      descMr: 'दररोज सकाळी सामूहिक सूर्यनमस्कार व एकाग्रता सत्रे.'
    },
    {
      id: 'ems-act-18',
      src: emsImg18,
      badge: 'SPORTS DAY',
      badgeColor: 'bg-emerald-500/90 text-white border-emerald-400/50',
      category: 'Sports',
      titleEn: 'Fun Games & Pre-Primary Sports Carnival',
      titleMr: 'बालवाडी व प्राथमिक क्रीडा महोत्सव',
      descEn: 'Joyful recreational racing, lemon-spoon sprints, and agility games for primary kids.',
      descMr: 'लहान मुलांसाठी मनोरंजक खेळ व क्रीडा स्पर्धा.'
    },
    {
      id: 'ems-act-19',
      src: emsImg19,
      badge: 'CAMPUS EVENT',
      badgeColor: 'bg-indigo-500/90 text-white border-indigo-300 font-bold',
      category: 'Celebration',
      titleEn: 'Art & Craft Exhibition - Srujan Gallery',
      titleMr: 'चित्रकला व हस्तकला प्रदर्शन',
      descEn: 'Vibrant sketches, origami structures, and eco-friendly handicrafts by young creators.',
      descMr: 'विद्यार्थ्यांच्या हस्तकला व चित्रकलेचे प्रदर्शन.'
    },
    {
      id: 'ems-act-20',
      src: emsImg20,
      badge: 'NATIONAL LEVEL',
      badgeColor: 'bg-amber-400 text-slate-950 border-amber-300 font-black',
      category: 'Achievement',
      titleEn: 'National Delegation Champions Trophy Pose',
      titleMr: 'राष्ट्रीय विजेत्यांची विजयी मुद्रा व चषक',
      descEn: 'The pride of K.T.E.S English Medium School holding their national tournament laurels.',
      descMr: 'राष्ट्रीय स्तरावर शाळेचे नाव उज्ज्वल करणारे खेळाडू व मार्गदर्शक.'
    },
    {
      id: 'ems-act-21',
      src: emsImg21,
      badge: 'SCOUTS & GUIDES',
      badgeColor: 'bg-indigo-600/90 text-white border-indigo-400/50',
      category: 'Discipline',
      titleEn: 'Scouts Patrol Flag Hoisting & Campfire Drills',
      titleMr: 'स्काऊट ध्वजवंदन व शिबिर प्रात्यक्षिके',
      descEn: 'Evening campfire camaraderie, oath-taking, and character-building exercises.',
      descMr: 'स्काऊट-गाईड प्रतिज्ञा व शिबिर उपक्रम.'
    },
    {
      id: 'ems-act-22',
      src: emsImg22,
      badge: 'CULTURAL FEST',
      badgeColor: 'bg-rose-500/90 text-white border-rose-300 font-bold',
      category: 'Celebration',
      titleEn: 'Theatrical Drama & Roleplay Performances',
      titleMr: 'नाट्य सादरीकरण व वक्तृत्व स्पर्धा',
      descEn: 'Historical skits and moral storytelling enacted by talented students.',
      descMr: 'विद्यार्थ्यांचे प्रभावी नाट्य व अभिनय सादरीकरण.'
    },
    {
      id: 'ems-act-23',
      src: emsScoutImg,
      badge: 'SCOUTS & GUIDES',
      badgeColor: 'bg-blue-600/90 text-white border-blue-400/50',
      category: 'Discipline',
      titleEn: 'Official Bharat Scout Uniform Squad',
      titleMr: 'स्काऊट गणवेशधारी पथक व शिस्त',
      descEn: 'Ceremonial parade inspection and state merit badges presentation.',
      descMr: 'शिस्तबद्ध स्काऊट पथक आणि पदक विजेते.'
    },
    {
      id: 'ems-act-24',
      src: emsAssemblyImg,
      badge: 'CAMPUS EVENT',
      badgeColor: 'bg-amber-400 text-slate-950 border-amber-300 font-black',
      category: 'Celebration',
      titleEn: 'Morning Assembly & Value Education Gathering',
      titleMr: 'दैनिक शालेय परिपाठ व संस्कार मूल्ये',
      descEn: 'Daily prayer chants, news reading, thoughts for the day, and collective national anthem.',
      descMr: 'शांत व शिस्तप्रिय वातावरणात होणारा दैनिक परिपाठ.'
    }
  ];

  // Lightbox keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : activityItems.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < activityItems.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activityItems.length]);

  return (
    <section
      id="ems-extra-activities-gallery"
      className="space-y-8 relative z-10 bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl"
    >
      {/* 1. Scoped Section Header for English Medium School */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 border-b border-white/10 pb-6">
        <div className="space-y-2.5">
          <div className="inline-flex items-center space-x-2 bg-amber-400/15 border border-amber-400/30 px-3.5 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span className="text-amber-300 font-bold text-[11px] uppercase tracking-wider font-mono">
              EXTRACURRICULAR & SPORTS GALLERY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight">
            Extra Activities <span className="text-amber-400">(अतिरिक्त उपक्रम)</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Showcasing student participation, sports excellence, and diverse extracurricular activities at English Medium School.
          </p>
        </div>

        {/* View Fullscreen & Count Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setLightboxIndex(0)}
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-amber-400/20 group"
            title="Open interactive fullscreen gallery"
          >
            <Maximize2 className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
            <span>Open Lightbox ({activityItems.length} Photos)</span>
          </button>
        </div>
      </div>

      {/* 2. Multi-Photo Gallery Grid (Clean Full-Frame Photo Boxes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {activityItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              const fullIndex = activityItems.findIndex((a) => a.id === item.id);
              setLightboxIndex(fullIndex !== -1 ? fullIndex : 0);
            }}
            className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/15 hover:border-amber-400/60 shadow-lg hover:shadow-2xl hover:shadow-amber-400/15 transition-all duration-300 cursor-pointer"
            title="Click to view photo in full resolution"
          >
            {/* Full-Frame Image with Hover Scale */}
            <img
              src={item.src}
              alt={item.titleEn}
              className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-500 filter brightness-[0.95] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Zoom Icon Indicator on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/25 backdrop-blur-[1px] pointer-events-none">
              <div className="bg-slate-950/80 text-amber-300 border border-amber-400/40 rounded-full p-2.5 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Lightbox Header Bar */}
          <div
            className="flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                {activityItems[lightboxIndex].badge}
              </span>
              <span className="text-slate-400 text-xs sm:text-sm font-mono">
                {lightboxIndex + 1} of {activityItems.length}
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

          {/* Lightbox Center Image & Controls */}
          <div
            className="relative flex-grow flex items-center justify-center py-4 my-auto max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Photo Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : activityItems.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-30 h-12 w-12 rounded-full bg-black/70 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-md"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Large Photo */}
            <div className="max-w-5xl max-h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/80 flex items-center justify-center">
              <img
                src={activityItems[lightboxIndex].src}
                alt={activityItems[lightboxIndex].titleEn}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Photo Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < activityItems.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-30 h-12 w-12 rounded-full bg-black/70 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-md"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption & Thumbnail Strip */}
          <div
            className="bg-slate-900/95 border border-white/15 rounded-2xl p-4 sm:p-5 max-w-4xl mx-auto w-full z-20 space-y-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-white font-display font-black text-sm sm:text-base">
                {activityItems[lightboxIndex].titleEn}{' '}
                <span className="text-amber-400">| {activityItems[lightboxIndex].titleMr}</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                {activityItems[lightboxIndex].descEn}
              </p>
            </div>

            {/* Scrollable Thumbnails Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-white/10 pb-1">
              {activityItems.map((img, idx) => (
                <button
                  key={img.id}
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
    </section>
  );
}
