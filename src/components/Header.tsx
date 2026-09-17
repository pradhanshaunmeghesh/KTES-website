import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, GraduationCap, ShieldAlert, Award, School } from 'lucide-react';
import ktesLogo from '../assets/images/ktes_official_logo_1783686643223.jpg';
import NewsTicker from './NewsTicker';

interface HeaderProps {
  currentTab: string;
  onChangeTab: (tab: string, dept?: any) => void;
}

export default function Header({ currentTab, onChangeTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'departments', label: 'Departments' },
    { id: 'academic', label: 'Academics & Life' },
    { id: 'student', label: 'Student Dev' },
    { id: 'portal', label: 'Student Portal' },
    { id: 'admission', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tabId: string) => {
    onChangeTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubDeptClick = (dept: string) => {
    onChangeTab('departments', dept);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-dark/85 text-white shadow-xl backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-primary-dark/45 text-white backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Shield */}
          <div
            id="brand-logo-trigger"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-white p-0.5 rounded-full text-primary-dark shadow-lg ring-2 ring-white/20 transition-transform group-hover:scale-110 overflow-hidden h-10 w-10 flex items-center justify-center">
              <img
                src={ktesLogo || undefined}
                alt="KTES Logo"
                className="h-full w-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-bold text-base md:text-lg tracking-tight block uppercase text-white leading-tight">
                Khed Taluka Education Society
              </span>
              <span className="text-[10px] md:text-xs text-amber-300 font-sans tracking-wide block font-semibold">
                ज्ञान, संस्कार आणि प्रगतीचे केंद्र
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.id === 'departments') {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      id={`nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                        currentTab === 'departments'
                          ? 'bg-secondary text-primary-dark shadow-md font-bold'
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg className="h-3.5 w-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-1 w-64 rounded-xl bg-slate-900/95 border border-white/10 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 z-50 backdrop-blur-md">
                      {[
                        { label: 'Junior College', dept: 'College' },
                        { label: 'Mahatma Gandhi Vidyalay', dept: 'MAV' },
                        { label: 'English Medium School', dept: 'EMS' },
                        { label: 'Sheth Kesharchand Parakh Prathamik Vidyalay', dept: 'SKPPV' }
                      ].map((sub, i) => (
                        <button
                          key={i}
                          onClick={() => handleSubDeptClick(sub.dept)}
                          className="w-full text-left px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                          <span className="text-[10px] text-amber-300 font-bold opacity-0 group-hover:opacity-100 font-mono">»</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    currentTab === item.id || (item.id === 'home' && currentTab === 'about')
                      ? 'bg-secondary text-primary-dark shadow-md font-bold'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Quick Actions (Admin CMS Desk) */}
            <button
              id="admin-cms-desk-button"
              onClick={() => handleNavClick('admin')}
              className={`ml-4 flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-semibold border transition-all cursor-pointer ${
                currentTab === 'admin'
                  ? 'bg-white text-primary-dark border-white shadow-lg'
                  : 'border-amber-400/55 text-amber-300 hover:bg-amber-400 hover:text-primary-dark hover:border-amber-400'
              }`}
            >
              <ShieldAlert className="h-4 w-4" />
              <span>Admin Desk</span>
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              id="mobile-admin-desk-icon"
              onClick={() => handleNavClick('admin')}
              className={`p-2 rounded-lg border text-xs ${
                currentTab === 'admin'
                  ? 'bg-amber-400 text-primary-dark border-amber-400'
                  : 'border-amber-400/40 text-amber-300'
              }`}
            >
              <ShieldAlert className="h-4 w-4" />
            </button>
            <button
              id="mobile-menu-burger-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[56px] bg-primary-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-y-auto max-h-[calc(100vh-60px)]"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              if (item.id === 'departments') {
                return (
                  <div key={item.id} className="space-y-1 bg-white/5 p-3 rounded-2xl border border-white/5">
                    <button
                      id={`mobile-nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left py-2 text-base font-bold text-amber-300 transition-all`}
                    >
                      {item.label}
                    </button>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {[
                        { label: 'Junior College', dept: 'College' },
                        { label: 'Mahatma Gandhi Vidyalay', dept: 'MAV' },
                        { label: 'English Medium School', dept: 'EMS' },
                        { label: 'SKPPV Primary', dept: 'SKPPV' }
                      ].map((sub, i) => (
                        <button
                          key={i}
                          onClick={() => handleSubDeptClick(sub.dept)}
                          className="text-left px-3 py-2 bg-white/5 border border-white/5 text-[11px] font-semibold text-slate-350 rounded-lg hover:text-white"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    currentTab === item.id || (item.id === 'home' && currentTab === 'about')
                      ? 'bg-secondary text-primary-dark font-bold shadow-lg'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <button
                id="mobile-nav-admin-cms"
                onClick={() => handleNavClick('admin')}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-base font-semibold border ${
                  currentTab === 'admin'
                    ? 'bg-white text-primary-dark border-white'
                    : 'border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-primary-dark'
                }`}
              >
                <ShieldAlert className="h-5 w-5" />
                <span>Admin CMS Desk</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breaking News Continuous Ticker Banner */}
      <NewsTicker />
    </header>
  );
}
