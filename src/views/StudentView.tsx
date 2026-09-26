import { useState } from 'react';
import {
  Trophy,
  Flame,
  ShieldCheck,
  Palette,
  Play,
  RotateCw,
  Search,
  ExternalLink,
  Target,
  Award
} from 'lucide-react';
import fosteringSportsImg from '../assets/images/Fostering.jpg';
import NationalSportsAchievers from '../components/NationalSportsAchievers';
import NCCCarousel from '../components/NCCCarousel';
import NCCGallerySection from '../components/NCCGallerySection';

export default function StudentView() {
  const [activeSegment, setActiveSegment] = useState<'sports' | 'ncc' | 'arts'>('sports');
  const [isPlayingArtVideo, setIsPlayingArtVideo] = useState(false);

  // NCC activities
  const nccPrograms = [
    { title: 'Republic Day Parade representation (RDC)', desc: 'Guiding cadettes to pass the arduous state selection rounds to march at New Delhi.' },
    { title: 'Integrated Drill & Tactical Combat Camp', desc: 'A 10-day field camp dealing with map navigation, physical endurance, and air-rifle shooting.' },
    { title: 'Local Flood Relief & Community Outreaches', desc: 'Cadets dispatched under disaster management alerts to distribute medical supplies.' }
  ];

  // Kala Darpan Items
  const artsPerformances = [
    { title: 'Bharatanatyam Recital - Kala Darpan Finals', artist: 'S.Y. College Arts dance team', date: 'April 2026' },
    { title: 'Indian Classical Vocal Fusion Concert', artist: 'HSC Junior Commerce Music group', date: 'January 2026' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-6">
      {/* Category selector */}
      <section className="bg-white/5 border border-white/10 rounded-2.5xl p-4 shadow-2xl max-w-xl mx-auto backdrop-blur-md">
        <div className="flex bg-black/35 p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setActiveSegment('sports')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeSegment === 'sports'
                ? 'bg-secondary text-primary-dark shadow-md font-black'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Sports Excellence
          </button>
          <button
            onClick={() => setActiveSegment('ncc')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeSegment === 'ncc'
                ? 'bg-secondary text-primary-dark shadow-md font-black'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            NCC Cadet Unit
          </button>
          <button
            onClick={() => setActiveSegment('arts')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeSegment === 'arts'
                ? 'bg-secondary text-primary-dark shadow-md font-black'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Kala Darpan (Arts)
          </button>
        </div>
      </section>

      {/* Dynamic Content Views based on active segment */}

      {/* SPORTS VIEW */}
      {activeSegment === 'sports' && (
        <div className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center space-x-1">
                <Flame className="h-4 w-4 text-amber-500" />
                <span>Athletics & Physical Cultivation | क्रीडा व शारीरिक विकास</span>
              </span>
              
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4.5xl font-display font-black text-white leading-tight">
                  Fostering Sportsmanship & Athletic Excellence
                </h1>
                <p className="text-lg sm:text-xl font-display font-bold text-amber-400">
                  क्रीडावृत्ती आणि उत्कृष्ट खेळाडूवृत्तीचा विकास
                </p>
              </div>

              <div className="space-y-2.5 text-slate-300 text-sm leading-relaxed font-sans">
                <p>
                  Khed Taluka Education Society provides vast sports grounds, professional coaching, and modern athletic facilities—ensuring our students build physical strength, discipline, and strong academic focus.
                </p>
                <p className="text-slate-300/90 font-medium">
                  खेड तालुका एज्युकेशन सोसायटी विशाल क्रीडांगणे, व्यावसायिक प्रशिक्षण आणि आधुनिक क्रीडा सुविधा उपलब्ध करून देते—ज्यामुळे विद्यार्थ्यांमध्ये शारीरिक क्षमता, शिस्त आणि अभ्यासावर उत्तम लक्ष केंद्रित करण्याची क्षमता निर्माण होते.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2.5xl overflow-hidden shadow-2xl aspect-video border border-white/10 bg-slate-900 group">
              <img
                src={fosteringSportsImg}
                alt="School Sports Ground & Assembly"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </section>

          {/* National Level Sports Achievers & Participants */}
          <NationalSportsAchievers />
        </div>
      )}

      {/* NCC VIEW */}
      {activeSegment === 'ncc' && (
        <div className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center space-x-1.5 font-sans">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>NATIONAL CADET CORPS (NO. 3 MAH AIR SQN NCC, PUNE)</span>
              </span>
              
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4.5xl font-display font-black text-white leading-tight">
                  Discipline, Courage and Leadership
                </h1>
                <p className="text-lg sm:text-xl font-display font-bold text-amber-400">
                  शिस्त, धैर्य आणि नेतृत्व
                </p>
              </div>

              <div className="space-y-2.5 text-slate-300 text-sm leading-relaxed font-sans">
                <p>
                  Our active National Cadet Corps Air Wing (Troop No. 10 / No. 3 MAH Air Sqn NCC, Pune) operates under defense instruction guides, molding cadets into values of national service, aviation awareness, drill discipline, and high-order leadership routines.
                </p>
                <p className="text-slate-300/90 font-medium">
                  आमची सक्रिय राष्ट्रीय छात्र सेना (एअर विंग - तुकडी क्र. १० / ३ महा एअर स्क्वाड्रन एनसीसी, पुणे) संरक्षण दलाच्या मार्गदर्शनाखाली कार्य करते; ज्यामुळे विद्यार्थ्यांमध्ये राष्ट्रसेवा, हवाई दल व विमान उड्डाणविषयक ज्ञान, संचलन शिस्त आणि उत्तम नेतृत्वगुण विकसित होतात.
                </p>
              </div>

              <div className="bg-[#000c24]/40 border-l-4 border-amber-400 border border-white/10 p-4 rounded-xl text-xs space-y-1.5 text-slate-300">
                <p><strong className="text-amber-300">Cadet Motto:</strong> Unity and Discipline (एकता आणि शिस्त).</p>
                <p><strong className="text-amber-300">Troop Affiliation:</strong> Troop No. 10 / No. 3 Maharashtra Air Squadron NCC, Pune.</p>
                <p><strong className="text-amber-300">Certification:</strong> Authorized for NCC 'A' Certificate Examination.</p>
              </div>
            </div>

            <div className="lg:col-span-6 w-full">
              <NCCCarousel />
            </div>
          </section>

          {/* NCC Programs & Campaigns */}
          <section className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg">NCC Air Wing Training & Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nccPrograms.map((prog, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 hover:border-amber-400/40 transition-all space-y-3 text-white">
                  <div className="h-10 w-10 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl flex items-center justify-center font-bold text-sm">
                    {i+1}
                  </div>
                  <h4 className="font-display font-bold text-white text-base">{prog.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{prog.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NCC Air Wing Photo Gallery Section */}
          <NCCGallerySection />
        </div>
      )}

      {/* KALA DARPAN (ARTS) Segments */}
      {activeSegment === 'arts' && (
        <div className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center space-x-1">
                <Palette className="h-4 w-4 text-amber-500" />
                <span>Kala Darpan Fine Arts Society</span>
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                Nurturing Cultural Talents & Performing Arts Heritage
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kala Darpan is K.T.E.S.'s integrated cultural wing, training students in Indian classical dances (Kathak, Bharatanatyam), vocal percussion structures, theatrical dramas, and traditional canvas easel painting boards.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#000c24]/30 text-indigo-300 border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full">Classical Instruments</span>
                <span className="bg-[#000c24]/30 text-indigo-300 border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full">Drama Theatres</span>
                <span className="bg-[#000c24]/30 text-indigo-300 border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full">Canvas Painting Exhibits</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2.5xl overflow-hidden shadow-2xl aspect-video bg-slate-900 border border-white/10 flex flex-col justify-center items-center">
              {isPlayingArtVideo ? (
                <div className="p-6 text-center text-white space-y-3">
                  <RotateCw className="h-8 w-8 text-indigo-400 animate-spin-slow mx-auto" strokeWidth={2.5} />
                  <div className="text-xs font-mono">Stream: KALA_DARPAN_FINALS_2026</div>
                  <button onClick={() => setIsPlayingArtVideo(false)} className="text-xs text-amber-300 underline font-semibold cursor-pointer">
                    Rewind to Frame Placeholder
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
                    alt="Kala Darpan dance"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <button
                    onClick={() => setIsPlayingArtVideo(true)}
                    className="relative bg-white text-indigo-600 h-14 w-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-115 transition-transform cursor-pointer"
                  >
                    <Play className="h-6 w-6 fill-current ml-1" />
                  </button>
                  <span className="relative text-white font-bold text-xs mt-4">Play performance clip...</span>
                </>
              )}
            </div>
          </section>

          {/* Performances logs */}
          <section className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg">Notable Performances & Events Log</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artsPerformances.map((perf, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 text-white space-y-2">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-indigo-300 block">Performance</span>
                  <h4 className="font-display font-bold text-white text-base">{perf.title}</h4>
                  <p className="text-slate-350 text-xs">Conducted by: <strong>{perf.artist}</strong> ({perf.date})</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
