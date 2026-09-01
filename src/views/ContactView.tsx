import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Send,
  Compass,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function ContactView() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [submittingMsg, setSubmittingMsg] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Simulated GPS details
  const [mapType, setMapType] = useState<'vector' | 'satellite'>('vector');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingMsg(true);
    setTimeout(() => {
      setSubmittingMsg(false);
      setFormSubmitted(true);
      // Reset
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormPhone('');
      setFormMsg('');
    }, 1800);
  };

  const contactRegistry = [
    { name: 'Junior College Administrative Office', email: 'registrar@ktescollege.edu', phone: '+91 22 2567-9034' },
    { name: 'Mahatma Gandhi Vidyalay desk', email: 'secretary@ktesmav.edu', phone: '+91 22 2568-9122' },
    { name: 'English Medium School admissions', email: 'admissions@ktesems.edu', phone: '+91 22 2569-8012' },
    { name: 'Sheth Kesharchand Parakh Prathamik Vidyalay', email: 'preschool@ktesskppv.edu', phone: '+91 22 2567-3341' }
  ];

  return (
    <div id="contact" className="space-y-16 pb-16 pt-6 text-slate-200 relative z-10">
      {/* Visual Header */}
      <section className="text-center space-y-4">
        <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center justify-center space-x-1">
          <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
          <span>Interactive Corridors</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
          Help Desk & Contacts Guild
        </h1>
        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          Need academic directions, transcript credentials, or fee waiver support guidelines? Reach out directly via desks.
        </p>
      </section>

      {/* Grid: Contact Info + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact form */}
        <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md space-y-6">
          <h3 className="font-display font-black text-white text-lg border-b border-white/10 pb-3">Send Board Message</h3>

          {formSubmitted ? (
            <div id="contact-form-success-box" className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-100 p-6 rounded-2xl text-center space-y-4">
              <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-display font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-xs leading-relaxed text-slate-300">
                Your circular was registered safely in K.T.E.S. dispatch log. A registrar officer will contact you within 24 working hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs text-secondary font-bold underline cursor-pointer"
              >
                Send another message...
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4 text-xs md:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-medium block text-slate-200">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Anand Joshi"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-450 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-medium block text-slate-200">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-455 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-medium block text-slate-200">Phone Code (Checklist)</label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. +91 90223"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-455 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-medium block text-slate-200">Correspondence Subject</label>
                  <input
                    type="text"
                    required
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Fees Refund enquiry"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-455 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium block text-slate-200">Write Detailed Query</label>
                <textarea
                  required
                  rows={4}
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  placeholder="Explain your student reference, department and core request..."
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-455 focus:border-transparent placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 text-right">
                <button
                  type="submit"
                  disabled={submittingMsg}
                  className="bg-secondary hover:bg-amber-500 text-primary-dark font-display font-extrabold transition-all px-8 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 ml-auto shadow cursor-pointer uppercase tracking-wider"
                >
                  {submittingMsg ? (
                    <span>Dispatching message...</span>
                  ) : (
                    <>
                      <span>Submit Query</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Location & satellite maps mockup */}
        <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md space-y-6 text-white">
          <div className="border-b border-white/10 pb-3 flex justify-between items-center">
            <div>
              <h3 className="font-display font-black text-white text-base">Campus GPS coordinates</h3>
              <p className="text-slate-300 text-[11px]">30-Acre Hills campus mapping</p>
            </div>
            {/* Map switcher */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex space-x-1">
              <button
                onClick={() => setMapType('vector')}
                className={`py-1 px-2.5 rounded-lg text-[9px] font-black uppercase transition-all tracking-wider cursor-pointer ${
                  mapType === 'vector' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                Vector
              </button>
              <button
                onClick={() => setMapType('satellite')}
                className={`py-1 px-2.5 rounded-lg text-[9px] font-black uppercase transition-all tracking-wider cursor-pointer ${
                  mapType === 'satellite' ? 'bg-secondary text-primary-dark shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                Satel
              </button>
            </div>
          </div>

          {/* Interactive Google Map Mockup */}
          <div className="relative rounded-2xl h-56 overflow-hidden border border-white/10 bg-[#000c24] flex items-center justify-center shadow-inner group">
            {mapType === 'vector' ? (
              <div className="absolute inset-0 bg-[#000c24] p-6 flex flex-col justify-between overflow-hidden">
                {/* Simulated streets, water bodies and blocks */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
                {/* Streets lines mockup in vector */}
                <div className="absolute top-1/3 left-0 w-full h-2.5 bg-[#001f4d]/85 border-y border-white/10 transform rotate-12"></div>
                <div className="absolute top-0 left-2/3 w-2.5 h-full bg-[#001f4d]/85 border-x border-white/10 transform -rotate-12"></div>
                {/* Central pin layout */}
                <div className="relative z-10 m-auto flex flex-col items-center justify-center text-center space-y-1 animate-bounce">
                  <MapPin className="h-8 w-8 text-rose-500 fill-rose-200" />
                  <span className="bg-secondary text-primary-dark font-mono font-black text-[9px] px-2.5 py-1 rounded-lg shadow-xl uppercase border border-white/10">
                    KTES HILLS CAMPUS
                  </span>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                  alt="Satellite mock view"
                  className="w-full h-full object-cover filter brightness-75 contrast-125"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center font-mono text-[9px] text-amber-300 space-y-1 bg-[#000c24]/90 p-2.5 border border-white/10 rounded-xl">
                    <Compass className="h-4 w-4 animate-spin-slow mx-auto text-amber-400" />
                    <div>GPS: 19.1128° N, 72.8220° E</div>
                    <div>Alt: 125 meters above sea level</div>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[8px] font-mono px-2 py-0.5 rounded backdrop-blur">
              Scale 1 : 12,000 meters
            </div>
          </div>

          <div className="space-y-3.5 text-xs text-slate-300">
            <div className="flex items-start space-x-3 leading-relaxed">
              <MapPin className="h-4 w-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <strong className="text-white">Central Address Location:</strong>
                <p className="text-slate-300 font-medium">VV4P+JPR, Rajgurunagar, Maharashtra 410505</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 leading-relaxed">
              <Clock className="h-4 w-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <strong className="text-white">Working Reception Hours:</strong>
                <p className="text-slate-300 font-medium">Monday to Saturday: 08:30 AM to 05:30 PM (Sundays Closed)</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 leading-relaxed">
              <Mail className="h-4 w-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <strong className="text-white">Official Board Dispatch:</strong>
                <p className="text-slate-300 font-medium font-mono">office@ktes_institutions.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory of Department Offices */}
      <section className="space-y-6 border-t border-white/10 pt-12 relative z-10">
        <h3 className="font-display font-bold text-white text-base">Section Contacts Registries</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactRegistry.map((reg, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-md space-y-3 text-white">
              <h4 className="font-semibold text-white text-xs leading-tight">{reg.name}</h4>
              <div className="space-y-1.5 text-[11px] text-slate-300 border-t border-white/10 pt-2.5">
                <div className="flex items-center space-x-1.5 font-medium">
                  <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{reg.phone}</span>
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-[10px] text-amber-300 truncate" title={reg.email}>
                  <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{reg.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
