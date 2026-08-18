import { useState } from 'react';
import InfrastructureFacilitiesCarousel from '../components/InfrastructureFacilitiesCarousel';
import SportsAthleticsSection from '../components/SportsAthleticsSection';
import CommonGymSection from '../components/CommonGymSection';
import {
  Sparkles,
  Search,
  School,
  Milestone,
  Compass,
  Trophy,
  Calendar,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { CLASS_SCHEDULES } from '../data/mockData';
// @ts-ignore
import libraryImg2 from '../assets/images/library2.jpg';

export default function AcademicView() {
  const [activeTour, setActiveTour] = useState<'classroom' | 'lab' | 'library' | 'sports' | 'auditorium'>('lab');
  const [selectedScheduleDept, setSelectedScheduleDept] = useState<'All' | 'College' | 'MAV' | 'EMS'>('All');

  const getDeptLabel = (dept: string) => {
    if (dept === 'College') return 'Junior College';
    if (dept === 'MAV') return 'Mahatma Gandhi Vidyalaya';
    if (dept === 'EMS') return 'English Medium School';
    if (dept === 'SKPPV') return 'Sheth Kesharchand Parakh Prathamik Vidyalaya';
    return dept;
  };

  const tourLocations = {
    lab: {
      name: 'Advanced Biotechnology & BSL-2 Research Lab',
      desc: 'Featuring state-of-the-art diagnostic thermocycling equipment, sterile biosafety chambers, and cellular research microscopes.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      specs: ['BSL 2 Bio Safety Grade', '24 High-Precision Thermocyclers', 'Dedicated CRISPR Prototyping station', 'Pre-installed with medical gas pipelines']
    },
    classroom: {
      name: 'Smart Dynamic Acoustics Lecture Theatre',
      desc: 'Designed with custom state-optimized ergonomic seating, dual writing bays, sound insulation panels, and wireless high-definition screens.',
      img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
      specs: ['Seat Volume: 120 Candidates', 'Dual 4K Laser Projection Units', 'Surrounding acoustics configuration', 'Smart attendance scanner integrations']
    },
    library: {
      name: 'Digital Learning & Research Hub / डिजिटल लर्निंग आणि संशोधन केंद्र',
      desc: 'Equipped with computer workstations, high-speed internet terminals, and digital catalog search capabilities for modern research.',
      img: libraryImg2,
      specs: ['85,000+ Text Books', 'Direct IEEE & Elsevier subscription nodes', 'Quiet-Zone climate-controlled air layout', 'Automated RFID self-issue kiosk desk']
    },
    sports: {
      name: 'Olympic-Standard Track and Gymnasium Arena',
      desc: 'Equipped with an all-weather synthetic athletic track, football field block, tennis grids, and weights setup with certified sports physiologists.',
      img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
      specs: ['400m Synthetic Polyurethane Track', 'Professional football coaching bay', 'Full indoor badminton grids', 'Medical response cell with stretcher units']
    },
    auditorium: {
      name: 'Lotus Platinum Multi-Purpose Auditorium',
      desc: 'Central performing theatre hosting Kala Darpan dance festivals, guest academic roundtables, tech exhibitions and certificate assemblies.',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      specs: ['Comfort Capacity: 800 Spectators', 'State sound boards with JBL rigs', 'Motorized performance stage curtains', 'Eco-friendly central ventilation systems']
    }
  };

  const currentTour = tourLocations[activeTour];

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

  const filteredSchedules = selectedScheduleDept === 'All'
    ? CLASS_SCHEDULES
    : CLASS_SCHEDULES.filter(sch => sch.department.toLowerCase() === selectedScheduleDept.toLowerCase());

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-4 gap-4">
            <div>
              <span className="text-xs font-black text-secondary tracking-widest uppercase">Academic Calendar & Routines</span>
              <h2 className="text-2.5xl font-display font-black text-white">Class Timetables & Schedules</h2>
            </div>

            {/* Timetable tab filters */}
            <select
              id="schedule-dept-selector"
              value={selectedScheduleDept}
              onChange={(e) => setSelectedScheduleDept(e.target.value as any)}
              className="bg-white/10 border border-white/20 text-white rounded-xl text-xs px-3 py-2 font-display font-bold outline-none focus:ring-2 focus:ring-amber-400 [&>option]:bg-slate-900 [&>option]:text-white"
            >
              <option value="All">All Sections</option>
              <option value="College">Junior College</option>
              <option value="MAV">Mahatma Gandhi Vidyalaya</option>
              <option value="EMS">English Medium School</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredSchedules.map((sch) => (
              <div
                key={sch.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase text-[9px] font-bold px-2.5 py-0.5 rounded-full">
                      {getDeptLabel(sch.department)}
                    </span>
                    <span className="text-slate-300 text-xs font-medium">
                      Class: {sch.className}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base leading-tight">
                    {sch.subject}
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Teacher: {sch.teacher} | <strong>Location:</strong> <span className="text-amber-300">{sch.room}</span>
                  </p>
                </div>
                <div className="flex md:flex-col items-end shrink-0 bg-white/5 border border-white/10 p-3 rounded-xl gap-2 md:gap-0 font-medium">
                  <div className="text-slate-200 text-xs flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-secondary" />
                    <span>{sch.time}</span>
                  </div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider pt-0.5">
                    {sch.day}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-amber-200 text-xs flex items-start space-x-3">
            <Calendar className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
            <p className="leading-relaxed">
              <strong>Calendar Note:</strong> Download PDF timetables containing laboratory groups assignment lists on our student downloads portal tab below.
            </p>
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
