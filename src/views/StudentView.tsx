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
  Dribbble,
  Award
} from 'lucide-react';

export default function StudentView() {
  const [activeSegment, setActiveSegment] = useState<'sports' | 'ncc' | 'arts'>('sports');
  const [isPlayingArtVideo, setIsPlayingArtVideo] = useState(false);

  // Sports items
  const sportsFacilities = [
    { title: 'Olympic Running Turf Track', desc: '400 meters synthetic athletic lane configuration certified for state track meets.' },
    { title: 'Football Stadium Bay', desc: 'Natural grass turf with seating gallery and automated twilight perimeter sports floodlights.' },
    { title: 'Indoor Badminton & Weights Pavilion', desc: 'High-density timber flooring courts paired with a dedicated physiological physical training ward.' }
  ];

  const sportsMatches = [
    { opponent: 'National Academy High', game: 'Under-19 Football Finals', date: 'June 28, 2026', venue: 'KTES Main Arena' },
    { opponent: 'District Combined College', game: 'Inter-Collegiate Volleyball League', date: 'July 05, 2026', venue: 'Trust Sports Complex' }
  ];

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
                <span>Athletics & Physical Cultivation</span>
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                Fostering Sportsmanship & Dynamic Physical Discipline
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Khed Taluka Education Society provides comprehensive coaching setups, Olympic-grade grounds tracking and professional clinical advisors, ensuring that mental academic performance enjoys a robust physical buffer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="border border-white/10 bg-[#000c24]/30 p-4 rounded-xl shadow-xl hover:bg-white/5 transition-all">
                  <div className="text-2xl md:text-3xl font-display font-black text-white">30 Acres</div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase">Sports Space</span>
                </div>
                <div className="border border-white/10 bg-[#000c24]/30 p-4 rounded-xl shadow-xl hover:bg-white/5 transition-all">
                  <div className="text-2xl md:text-3xl font-display font-black text-white">6+ Trophies</div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase">State Championships</span>
                </div>
                <div className="border border-white/10 bg-[#000c24]/30 p-4 rounded-xl shadow-xl hover:bg-white/5 transition-all">
                  <div className="text-2xl md:text-3xl font-display font-black text-white">5 Coaches</div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase">NIs Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2.5xl overflow-hidden shadow-2xl aspect-video border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
                alt="Track Fields"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Facilities */}
          <section className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg">Central Sports Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sportsFacilities.map((fac, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 hover:border-amber-400/40 transition-all space-y-3 text-white">
                  <div className="h-10 w-10 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-xl flex items-center justify-center font-bold">
                    <Dribbble className="h-5 w-5 text-blue-300" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">{fac.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{fac.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Match / Event Alerts block */}
          <section className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6 md:p-8 space-y-6">
            <h3 className="font-display font-bold text-amber-200 text-lg flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-secondary" />
              <span>Upcoming Inter-Institutional Fixtures 2026</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sportsMatches.map((match, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-lg text-sm space-y-1.5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">{match.game}</span>
                  <div className="font-display font-bold text-white">K.T.E.S vs {match.opponent}</div>
                  <div className="text-slate-300 text-xs">Date: {match.date} | Location: <span className="text-amber-300 font-semibold">{match.venue}</span></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* NCC VIEW */}
      {activeSegment === 'ncc' && (
        <div className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center space-x-1">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span>National Cadet Corps (K.T.E.S Army Wing)</span>
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                Discipline, Courage and Social Character
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our active National Cadet Corps unit operates under rigorous defense instruction guides, molding cadettes into values of community aid, weapon assembly, parade postures, and high-order leadership routines.
              </p>
              <div className="bg-[#000c24]/30 border-l-4 border-amber-400 border border-white/10 p-4 rounded-xl text-xs space-y-2 text-slate-300">
                <p><strong>Cadet Code:</strong> Duty, Unity, Discipline.</p>
                <p><strong>Training Grade:</strong> Authorized for Certificate A and B evaluation credentials.</p>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2.5xl overflow-hidden shadow-2xl aspect-video border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                alt="NCC Cadets"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </section>

          {/* NCC Programs & Campaigns */}
          <section className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg">NCC Camp Operations</h3>
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
