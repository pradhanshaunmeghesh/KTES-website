import InfrastructureFacilitiesCarousel from '../components/InfrastructureFacilitiesCarousel';
import SportsAthleticsSection from '../components/SportsAthleticsSection';
import CommonGymSection from '../components/CommonGymSection';

export default function AcademicView() {
  const calendarEvents = [
    { date: 'June 15, 2026', title: 'Admissions registrations open online', type: 'Administrative' },
    { date: 'July 10, 2026', title: 'Grand science and technology exhibition (AURA)', type: 'Exhibitions' },
    { date: 'August 15, 2026', title: 'NCC Independence Day cadets parade & display', type: 'National Days' },
    { date: 'September 05, 2026', title: 'Teachers felicitation ceremony & award presentations', type: 'Holiday' },
    { date: 'October 12, 2026', title: 'First term term-end board examinations begin', type: 'Exams' }
  ];

  const academicHonors = [
    { year: '2025', award: 'State-Level Best Educational Society Green campus Shield', authority: 'State Educational Trust board' },
    { year: '2024', award: 'National Cadet Corps (NCC) Unit Excellence Roll of Honor', authority: 'Defense Cadets Directorate' },
    { year: '2023', award: 'Outstanding Biotech Research Innovation Grant', authority: 'National Science & Tech Council' },
    { year: '2021', award: 'Best Digital High School Implementation Trophy', authority: 'Lions Club District Awards' }
  ];

  return (
    <div className="space-y-20 pb-16 pt-6">
      {/* Infrastructure & Facilities Carousel Block */}
      <InfrastructureFacilitiesCarousel selectedLang="both" />

      {/* Sports & Athletics Section Block */}
      <SportsAthleticsSection selectedLang="both" />

      {/* Common Gym Facility Section Block */}
      <CommonGymSection selectedLang="both" />

      {/* Class Schedules & Academic Calendars block */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Class timetables */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-black text-secondary tracking-widest uppercase">Academic Calendar & Routines</span>
            <h2 className="text-2.5xl font-display font-black text-white">Class Timetables & Schedules</h2>
          </div>
        </div>

        {/* Dynamic Academic Calendar */}
        <div className="lg:col-span-5 space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md text-white">
          <h3 className="font-display font-bold text-white text-base border-b border-white/10 pb-3">
            Holidays & Circular Milestones 2026
          </h3>
          <div className="divide-y divide-white/5">
            {calendarEvents.map((item, i) => (
              <div key={i} className="py-3.5 first:pt-0 last:pb-0 flex items-start space-x-3 text-xs leading-normal">
                <span className="font-mono text-secondary font-bold shrink-0 w-24">{item.date}</span>
                <div className="space-y-0.5">
                  <h5 className="font-semibold text-white">{item.title}</h5>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Trophy / Recognition Showcase */}
      <section className="space-y-8 border-t border-white/10 pt-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase block">Laurels & Accents</span>
          <h2 className="text-3xl font-display font-black text-white">Awards & Institutional Achievements</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our historical recognition in sport drills, green architecture initiatives and academic boards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {academicHonors.map((hon, i) => (
            <div
              key={i}
              className="bg-[#000c24]/30 rounded-2xl p-6 border border-white/10 shadow-xl hover:border-amber-400/40 hover:bg-white/5 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-secondary flex items-center justify-center font-bold tracking-tight text-sm border border-amber-500/20">
                  {hon.year}
                </div>
                <h4 className="font-display font-bold text-white text-sm group-hover:text-amber-300 transition-colors leading-snug">
                  {hon.award}
                </h4>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] text-slate-350 font-semibold uppercase tracking-wider pt-2">
                {hon.authority}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
