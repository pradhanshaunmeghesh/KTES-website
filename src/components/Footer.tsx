import React, { useState } from 'react';
import { Mail, Phone, MapPin, Youtube, ExternalLink, GraduationCap, CheckCircle, Navigation, Compass } from 'lucide-react';
import GoogleMapsLocation, { KTES_DIRECTIONS_URL, KTES_PLUS_CODE } from './GoogleMapsLocation';
const ktesLogo = '/images/ktes_official_logo_1783686643223.jpg';

interface FooterProps {
  onChangeTab: (tab: string) => void;
}

export default function Footer({ onChangeTab }: FooterProps) {
  const [emailValue, setEmailValue] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showFooterMap, setShowFooterMap] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setSubscribed(true);
      setEmailValue('');
    }
  };

  return (
    <footer id="app-footer" className="bg-slate-950/80 backdrop-blur-xl text-white pt-16 pb-8 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onChangeTab('home')}>
              <div className="bg-white p-0.5 rounded-full text-primary-dark overflow-hidden h-10 w-10 flex items-center justify-center">
                <img
                  src={ktesLogo || undefined}
                  alt="KTES Logo"
                  className="h-full w-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-xl tracking-wide">K.T.E.S.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Khed Taluka Education Society (Est. 1938) has stood as a bastion of premium learning, holistic development, and social leadership for over half a century.
            </p>
            <div className="pt-2 flex space-x-4">
              <a href="#" className="h-9 w-9 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-dark flex items-center justify-center transition-colors text-gray-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="h-9 w-9 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-dark flex items-center justify-center transition-colors text-gray-300 font-bold text-xs">
                in
              </a>
              <a href="#" className="h-9 w-9 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-dark flex items-center justify-center transition-colors text-gray-300 font-bold text-xs">
                f
              </a>
            </div>
          </div>

          {/* Quick links Column */}
          <div>
            <h3 className="font-display font-bold text-base text-amber-300 tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <button onClick={() => onChangeTab('about')} className="hover:text-amber-300 transition-colors cursor-pointer flex items-center space-x-1">
                  <span>About History & Timeline</span>
                </button>
              </li>
              <li>
                <button onClick={() => onChangeTab('academic')} className="hover:text-amber-300 transition-colors cursor-pointer flex items-center space-x-1">
                  <span>Class Schedules & Calndars</span>
                </button>
              </li>
              <li>
                <button onClick={() => onChangeTab('student')} className="hover:text-amber-300 transition-colors cursor-pointer flex items-center space-x-1">
                  <span>Sports, NCC & Fine Arts</span>
                </button>
              </li>
              <li>
                <button onClick={() => onChangeTab('portal')} className="hover:text-amber-300 transition-colors cursor-pointer flex items-center space-x-1">
                  <span>Study Notes & E-Books</span>
                </button>
              </li>
              <li>
                <button onClick={() => onChangeTab('admission')} className="hover:text-amber-300 transition-colors cursor-pointer flex items-center space-x-1">
                  <span className="font-semibold text-white hover:text-amber-300">Online Admissions 2026</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Departments Column */}
          <div>
            <h3 className="font-display font-bold text-base text-amber-300 tracking-wider uppercase mb-6">
              Departments & Wings
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <button onClick={() => onChangeTab('departments')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Science College
                </button>
              </li>
              <li>
                <button onClick={() => onChangeTab('departments')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Mahatma Gandhi Vidyalay
                </button>
              </li>
              <li>
                <button onClick={() => onChangeTab('departments')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Sheth Kesharchand Parakh Prathamik Vidyalay
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-amber-300 tracking-wider uppercase mb-4">
                Academic Gazette
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Subscribe to our newsletter for latest announcements, sports trials, results dates and exam checklists.
              </p>
              {subscribed ? (
                <div className="flex items-center space-x-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 p-3 rounded-xl text-xs">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex space-x-2">
                  <input
                    type="email"
                    required
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent placeholder:text-gray-500"
                  />
                  <button type="submit" className="bg-secondary hover:bg-amber-500 text-primary-dark px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer">
                    Join
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-2.5 text-xs text-gray-400 border-t border-white/10 pt-4">
              <a
                href={KTES_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-slate-300 hover:text-amber-300 transition-colors group"
                title="Get Google Maps Driving Directions"
              >
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-white font-medium">KTES Campus Location</span>
                  <span className="font-mono text-[11px] text-amber-300/90">{KTES_PLUS_CODE}</span>
                </div>
              </a>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <span>+91-2125-222054 / 225154</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <span>ktes@gmail.com</span>
              </div>

              {/* Direct Google Maps Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={KTES_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 text-amber-300 hover:text-amber-200 px-3 py-1.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Navigation className="h-3 w-3 text-amber-400" />
                  <span>Get Directions</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowFooterMap(!showFooterMap)}
                  className="bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white px-3 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Compass className="h-3 w-3 text-amber-400" />
                  <span>{showFooterMap ? 'Hide Campus Map' : 'View Campus Map'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Interactive Campus Google Map */}
        {showFooterMap && (
          <div className="mb-12 animate-fadeIn">
            <GoogleMapsLocation heightClass="h-64 sm:h-72 md:h-80" />
          </div>
        )}

        {/* Legal block */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <div>
            <span>© 2026 Khed Taluka Education Society & Colleges. All Rights Reserved. | Designed By: Sarthi Strategies</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-amber-300 transition-colors flex items-center space-x-1">
              <span>WCAG 2.1 Compliant</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
