/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import DepartmentsView from './views/DepartmentsView';
import AcademicView from './views/AcademicView';
import StudentView from './views/StudentView';
import PortalView from './views/PortalView';
import AdmissionView from './views/AdmissionView';
import GalleryView from './views/GalleryView';
import ContactView from './views/ContactView';
import AdminPanel from './components/AdminPanel';
import SplashScreen from './components/SplashScreen';

import {
  Announcement,
  FacultyMember,
  AdmissionForm,
  DepartmentType
} from './types';
import {
  INITIAL_ANNOUNCEMENTS,
  INITIAL_FACULTY
} from './data/mockData';
import { Calendar, X, GraduationCap, ArrowRight } from 'lucide-react';

const INITIAL_APPLICATIONS: AdmissionForm[] = [
  {
    id: 'app-init-1',
    studentName: 'Prasanna S. Joshi',
    dob: '2008-04-12',
    email: 'prasanna.joshi@gmail.com',
    phone: '+91 98450-98311',
    address: 'Block 402, Lotus Residency, Near Central Park, MH-400080',
    department: 'College',
    selectedCourse: 'B.Sc. Computer Science',
    prevAcademicScore: '94.6%',
    documentUrl: 'Grade_12_Transcript_Joshi.pdf',
    status: 'submitted',
    trackingId: 'KTES-2026-8012',
    submissionDate: '2026-06-18',
    comments: 'Awaiting board registrar review.'
  },
  {
    id: 'app-init-2',
    studentName: 'Chinmay M. Vaze',
    dob: '2010-11-20',
    email: 'vaze.chinmay@gmail.com',
    phone: '+91 91120-77622',
    address: 'A-22, Sadashiv Heights, Kelkar Marg, MH-400080',
    department: 'MAV',
    selectedCourse: 'XI Science Junior College',
    prevAcademicScore: '91.2%',
    documentUrl: 'SSC_Certificate_Vaze.pdf',
    status: 'under_review',
    trackingId: 'KTES-2026-4401',
    submissionDate: '2026-06-19',
    comments: 'Prior schools sheet verified. Section head check underway.'
  }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [initialDept, setInitialDept] = useState<DepartmentType | undefined>(undefined);

  const handleTabChange = (tab: string, dept?: DepartmentType) => {
    if (dept) {
      setInitialDept(dept);
    }
    setCurrentTab(tab);
  };

  // Multi-entity states with localStorage backing for dynamic CMS capability
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    try {
      const saved = localStorage.getItem('ktes_announcements');
      return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
    } catch {
      return INITIAL_ANNOUNCEMENTS;
    }
  });

  const [facultyList, setFacultyList] = useState<FacultyMember[]>(() => {
    try {
      const saved = localStorage.getItem('ktes_faculty');
      return saved ? JSON.parse(saved) : INITIAL_FACULTY;
    } catch {
      return INITIAL_FACULTY;
    }
  });

  const [applications, setApplications] = useState<AdmissionForm[]>(() => {
    try {
      const saved = localStorage.getItem('ktes_applications');
      return saved ? JSON.parse(saved) : INITIAL_APPLICATIONS;
    } catch {
      return INITIAL_APPLICATIONS;
    }
  });

  // Slide-over Announcement Details Drawer
  const [selectedAnn, setSelectedAnn] = useState<Announcement | null>(null);
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuota = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuota);
  }, []);

  // Sync state mutations to local storage for realistic persistence
  useEffect(() => {
    localStorage.setItem('ktes_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('ktes_faculty', JSON.stringify(facultyList));
  }, [facultyList]);

  useEffect(() => {
    localStorage.setItem('ktes_applications', JSON.stringify(applications));
  }, [applications]);

  // MUTATOR FUNCTIONS (passed to CMS panel)
  const handleAddAnnouncement = (newAnn: Announcement) => {
    setAnnouncements((prev) => [newAnn, ...prev]);
  };

  const handleDeleteAnnouncement = (id: string) => {
    if (confirm('Are you sure you want to permanently delete this announcement?')) {
      setAnnouncements((prev) => prev.filter((ann) => ann.id !== id));
    }
  };

  const handleAddFaculty = (newFac: FacultyMember) => {
    setFacultyList((prev) => [newFac, ...prev]);
  };

  const handleDeleteFaculty = (id: string) => {
    if (confirm('Are you sure you want to delete this faculty member from directories?')) {
      setFacultyList((prev) => prev.filter((fac) => fac.id !== id));
    }
  };

  const handleAddApplication = (newApp: AdmissionForm) => {
    setApplications((prev) => [newApp, ...prev]);
  };

  const handleUpdateApplicationStatus = (
    id: string,
    status: AdmissionForm['status'],
    comments: string
  ) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status, comments } : app))
    );
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomeView
            announcements={announcements}
            onChangeTab={setCurrentTab}
            onSelectAnnouncement={setSelectedAnn}
          />
        );
      case 'about':
        return (
          <HomeView
            announcements={announcements}
            onChangeTab={setCurrentTab}
            onSelectAnnouncement={setSelectedAnn}
            scrollToAbout={true}
          />
        );
      case 'departments':
        return <DepartmentsView facultyList={facultyList} initialDept={initialDept} onNavigateTab={handleTabChange} />;
      case 'academic':
        return <AcademicView />;
      case 'student':
        return <StudentView />;
      case 'portal':
        return <PortalView />;
      case 'admission':
        return (
          <AdmissionView
            applications={applications}
            onApply={handleAddApplication}
          />
        );
      case 'gallery':
        return <GalleryView />;
      case 'contact':
        return <ContactView />;
      case 'admin':
        return (
          <AdminPanel
            announcements={announcements}
            onAddAnnouncement={handleAddAnnouncement}
            onDeleteAnnouncement={handleDeleteAnnouncement}
            facultyList={facultyList}
            onAddFaculty={handleAddFaculty}
            onDeleteFaculty={handleDeleteFaculty}
            applications={applications}
            onUpdateApplicationStatus={handleUpdateApplicationStatus}
          />
        );
      default:
        return (
          <HomeView
            announcements={announcements}
            onChangeTab={setCurrentTab}
            onSelectAnnouncement={setSelectedAnn}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 relative font-sans antialiased overflow-x-hidden">
      {/* Full-screen Splash Screen Preloader */}
      <SplashScreen />

      {/* Google Maps Platform Quota Notice (Demo Key) */}
      {quotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Background radial glow spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] -left-[10%] w-[50%] h-[50%] bg-[#D4AF37] opacity-[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[0%] w-[60%] h-[60%] bg-[#87CEEB] opacity-[0.05] rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[45%] h-[45%] bg-[#D4AF37] opacity-[0.03] rounded-full blur-[130px]" />
      </div>

      {/* Top Navigation Bar */}
      <Header currentTab={currentTab} onChangeTab={handleTabChange} />

      {/* Main Screen Stage */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-12 w-full relative z-10">
        {/* Render View */}
        {renderActiveView()}
      </main>

      {/* Global Bottom Footer */}
      <Footer onChangeTab={setCurrentTab} />

      {/* Slide-over Immersive Announcements Detail Overlay */}
      {selectedAnn && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex justify-end">
          <div className="bg-slate-950/95 border-l border-white/10 w-full max-w-lg h-full p-8 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-in text-white">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="bg-secondary/10 border border-secondary/30 text-amber-300 uppercase font-bold tracking-wider text-[10px] px-3 py-1 rounded-full">
                  Board {selectedAnn.type}
                </span>
                <button
                  onClick={() => setSelectedAnn(null)}
                  className="p-2 hover:bg-white/10 rounded-full cursor-pointer transition-colors"
                >
                  <X className="h-5 w-5 text-slate-400 hover:text-white" />
                </button>
              </div>

              <div className="space-y-3">
                <span className="text-xs text-slate-400 flex items-center space-x-1 font-mono">
                  <Calendar className="h-4 w-4 text-amber-400" />
                  <span>Circular Published: {selectedAnn.date}</span>
                </span>
                <h3 className="font-display font-black text-white text-xl md:text-2xl leading-snug">
                  {selectedAnn.title}
                </h3>
                <p className="text-amber-200/90 text-sm leading-relaxed font-sans font-medium italic">
                  "{selectedAnn.description}"
                </p>
                <div className="text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4 space-y-4 font-sans">
                  <p>{selectedAnn.content}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-white font-bold text-xs uppercase">
                <GraduationCap className="h-5 w-5 text-secondary animate-pulse" />
                <span>KTES Administration Desk</span>
              </div>
              <button
                onClick={() => {
                  setSelectedAnn(null);
                  setCurrentTab('admission');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-secondary text-primary-dark hover:bg-amber-500 transition-colors px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>Apply for admissions</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

