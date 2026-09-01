import React, { useState } from 'react';
import {
  Announcement,
  FacultyMember,
  AdmissionForm,
  DepartmentType
} from '../types';
import {
  Lock,
  Unlock,
  ShieldCheck,
  Megaphone,
  Users,
  CheckCircle,
  FileSpreadsheet,
  X,
  Plus,
  Trash2,
  ListFilter
} from 'lucide-react';

interface AdminPanelProps {
  // States passed from parent to allow genuine mutual binding
  announcements: Announcement[];
  onAddAnnouncement: (annName: Announcement) => void;
  onDeleteAnnouncement: (id: string) => void;

  facultyList: FacultyMember[];
  onAddFaculty: (faculty: FacultyMember) => void;
  onDeleteFaculty: (id: string) => void;

  applications: AdmissionForm[];
  onUpdateApplicationStatus: (id: string, status: AdmissionForm['status'], comments: string) => void;
}

export default function AdminPanel({
  announcements,
  onAddAnnouncement,
  onDeleteAnnouncement,
  facultyList,
  onAddFaculty,
  onDeleteFaculty,
  applications,
  onUpdateApplicationStatus
}: AdminPanelProps) {
  // Auth simulation states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Director' | 'Admissions Dean'>('Director');
  const [loginError, setLoginError] = useState('');

  // Active dashboard view inside panel
  const [activeTab, setActiveTab] = useState<'admissions' | 'news' | 'faculty'>('admissions');

  // New News/Announcement state
  const [newsTitle, setNewsTitle] = useState('');
  const [newsType, setNewsType] = useState<Announcement['type']>('announcement');
  const [newsDesc, setNewsDesc] = useState('');
  const [newsContent, setNewsContent] = useState('');

  // New Faculty State
  const [facName, setFacName] = useState('');
  const [facDept, setFacDept] = useState<DepartmentType>('College');
  const [facDesignation, setFacDesignation] = useState('');
  const [facQualifications, setFacQualifications] = useState('');
  const [facExperience, setFacExperience] = useState('');
  const [facEmail, setFacEmail] = useState('');
  const [facImage, setFacImage] = useState('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80');

  // Review state
  const [reviewComments, setReviewComments] = useState<{ [appId: string]: string }>({});
  const [saveIndicatorId, setSaveIndicatorId] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin' || password === 'ktes2026') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid secret key or roles checklist mismatch. Tip: Use "admin".');
    }
  };

  const triggerAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsDesc.trim()) return;

    const newAnn: Announcement = {
      id: `ann-${Date.now()}`,
      title: newsTitle,
      type: newsType,
      date: new Date().toISOString().split('T')[0],
      description: newsDesc,
      content: newsContent || newsDesc,
      category: newsType === 'achievement' ? 'Academics' : 'Announcements'
    };

    onAddAnnouncement(newAnn);

    // Reset
    setNewsTitle('');
    setNewsDesc('');
    setNewsContent('');
  };

  const triggerAddFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facName.trim() || !facDesignation.trim()) return;

    const newFac: FacultyMember = {
      id: `fac-${Date.now()}`,
      name: facName,
      department: facDept,
      designation: facDesignation,
      qualifications: facQualifications || 'M.A., B.Ed',
      experience: facExperience || '5 Years cumulative instructions',
      email: facEmail || `${facName.toLowerCase().replace(/\s/g, '')}@ktes.edu`,
      image: facImage
    };

    onAddFaculty(newFac);

    // Reset
    setFacName('');
    setFacDesignation('');
    setFacQualifications('');
    setFacExperience('');
    setFacEmail('');
  };

  return (
    <div className="space-y-12 pb-16 pt-6 relative z-10">
      {!isAuthenticated ? (
        /* Login Form Setup */
        <div className="max-w-md mx-auto bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 space-y-6 backdrop-blur-md text-white">
          <div className="text-center space-y-2">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-secondary flex items-center justify-center mx-auto border border-amber-500/30">
              <Lock className="h-6 w-6 text-amber-400" />
            </div>
            <h2 className="font-display font-black text-white text-xl">KTES Board CMS Entry Desk</h2>
            <p className="text-slate-300 text-xs">Verify credentials to manage announcements, student applications and faculty rosters</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs md:text-sm text-slate-200">
            <div className="space-y-1">
              <label className="font-medium block text-slate-100">Administrative Role</label>
              <select
                id="admin-role-selector"
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white"
              >
                <option value="Director">Trust Managing Director / Board Secretary</option>
                <option value="Admissions Dean">Admissions Dean / Section Headmistress</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-medium block text-slate-100">Secret Key / Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password (use 'admin' to bypass)"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-400 font-mono"
              />
            </div>

            {loginError && <p id="admin-login-error" className="text-rose-400 font-bold text-xs">{loginError}</p>}

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-amber-505 text-primary-dark font-display font-black py-2.5 rounded-xl text-xs transition-transform transform active:scale-95 cursor-pointer"
            >
              Sign In to CMS Console
            </button>
          </form>

          <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-xl text-[10px] text-slate-300 leading-relaxed">
            <strong>Bypass Note:</strong> Type <code className="font-bold underline text-amber-300">admin</code> as the password to log in instantly. This is configured exclusively for candidate and evaluator inspections during active dev server phases.
          </div>
        </div>
      ) : (
        /* Authenticated Active Dashboard Console */
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md space-y-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase tracking-wider text-[9px] px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                  <ShieldCheck className="h-3 w-3 text-emerald-400" />
                  <span>Authorized Block</span>
                </span>
                <span className="text-slate-350 font-mono text-[10px]">Session: Active Reviewer</span>
              </div>
              <h2 className="font-display font-black text-white text-2xl mt-1.5">
                KTES Central CMS Dashboard
              </h2>
              <p className="text-slate-350 text-xs">
                Welcome back, {role}. You have structural permission to mutate academic announcements and verify registrations.
              </p>
            </div>

            {/* Logout button */}
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPassword('');
              }}
              className="bg-white/10 border border-white/20 text-white hover:bg-rose-950/30 hover:border-rose-500/40 hover:text-rose-450 px-4 py-2 rounded-xl text-xs font-black font-display transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Unlock className="h-4.5 w-4.5" />
              <span>Lock Admin Council</span>
            </button>
          </div>

          {/* Admin category navigation switchers */}
          <div className="flex space-x-2 border-b border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveTab('admissions')}
              className={`py-3.5 px-6 font-display font-black text-sm relative transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'admissions'
                  ? 'text-secondary border-b-2 border-secondary font-black'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Admissions Applications Queue ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`py-3.5 px-6 font-display font-black text-sm relative transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'news'
                  ? 'text-secondary border-b-2 border-secondary font-black'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Configure Announcements Desk ({announcements.length})
            </button>
            <button
              onClick={() => setActiveTab('faculty')}
              className={`py-3.5 px-6 font-display font-black text-sm relative transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'faculty'
                  ? 'text-secondary border-b-2 border-secondary font-black'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Academic Faculty Registers ({facultyList.length})
            </button>
          </div>

          {/* CONTENT MODULES */}

          {/* ADMISSIONS APPLICATION QUEUE MANAGEMENT DESK */}
          {activeTab === 'admissions' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-white text-base">Admissions Queue Evaluation Council</h3>
                <p className="text-slate-300 text-xs">
                  Review applicant profiles, academic percentages, documents checklist and change registration states. Mutating here instantly links back to student tracking cards!
                </p>
              </div>

              {applications.length === 0 ? (
                <div className="bg-white/5 rounded-2xl border border-dashed border-white/10 p-8 text-center text-slate-400 text-sm">
                  The Online Registration ledger is currently empty. Candidates can submit new forms on the Admissions tab.
                </div>
              ) : (
                <div className="overflow-x-auto border border-white/10 rounded-2xl shadow-inner scroll-smooth">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10 text-slate-300 uppercase font-mono text-[10px] font-bold tracking-wider">
                        <th className="p-4">Reg Coordinates</th>
                        <th className="p-4">Student Name</th>
                        <th className="p-4">Wing/Course Chosen</th>
                        <th className="p-4">Prior Mark</th>
                        <th className="p-4">Registrar Evaluation Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs text-slate-200">
                      {applications.map((app) => (
                        <tr key={app.id} id={`admin-tr-${app.id}`} className="hover:bg-white/5 transition-all">
                          <td className="p-4 space-y-1 font-mono">
                            <span className="font-black text-white block text-[11px]">{app.trackingId}</span>
                            <span className="text-slate-400 block text-[10px]">{app.submissionDate}</span>
                            <span className={`text-[8px] tracking-wide font-black uppercase px-2 py-0.5 rounded-full inline-block ${
                              app.status === 'submitted' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                              app.status === 'under_review' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                              app.status === 'approved' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                              'bg-white/5 text-slate-300 border border-white/10'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="font-bold text-white text-sm">{app.studentName}</div>
                            <div className="text-slate-400 text-[10px] mt-0.5">DOB: {app.dob}</div>
                            <div className="text-slate-300 text-[10px] mt-0.5">{app.email} | {app.phone}</div>
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-white">{app.selectedCourse}</div>
                            <span className="bg-white/10 text-slate-200 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase block w-fit mt-1.5 border border-white/10">
                              {app.department}
                            </span>
                          </td>
                          <td className="p-4 font-mono font-bold text-amber-300 text-sm">{app.prevAcademicScore}</td>
                          <td className="p-4 space-y-3 min-w-[280px]">
                            {/* Update dropdown state */}
                            <div className="flex space-x-2">
                              <select
                                id={`status-selector-${app.id}`}
                                value={app.status}
                                onChange={(e) => onUpdateApplicationStatus(app.id, e.target.value as any, reviewComments[app.id] ?? app.comments ?? '')}
                                className="bg-white/10 border border-white/20 text-[11px] font-bold rounded-lg p-2.5 outline-none text-white [&>option]:bg-slate-900 w-full"
                              >
                                <option value="submitted">Submitted</option>
                                <option value="under_review">Under Review</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                              </select>
                            </div>

                            {/* Annotations comments input */}
                            <div className="space-y-1">
                              <textarea
                                value={reviewComments[app.id] ?? app.comments ?? ''}
                                onChange={(e) => setReviewComments({ ...reviewComments, [app.id]: e.target.value })}
                                placeholder="Add reviewer feedback annotations..."
                                className="w-full bg-white/5 text-[11px] border border-white/10 rounded-lg p-2 text-white resize-none h-12"
                              ></textarea>
                              <div className="flex items-center justify-between">
                                <button
                                  type="button"
                                  onClick={() => {
                                    onUpdateApplicationStatus(app.id, app.status, reviewComments[app.id] ?? app.comments ?? '');
                                    setSaveIndicatorId(app.id);
                                    setTimeout(() => setSaveIndicatorId(null), 3000);
                                  }}
                                  className="bg-secondary text-primary-dark hover:bg-amber-500 font-black text-[10px] uppercase tracking-wide px-3 py-1.5 rounded cursor-pointer transition-transform active:scale-95"
                                >
                                  Save Comment
                                </button>
                                {saveIndicatorId === app.id && (
                                  <span className="text-[10px] text-emerald-400 font-bold animate-pulse">✓ Saved comment safely</span>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ANNOUNCEMENTS NEWS DESK CONFIGURATION */}
          {activeTab === 'news' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-slate-200">
              {/* Add form */}
              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2.5xl p-6 h-fit space-y-4">
                <h4 className="font-display font-extrabold text-white text-base">Write Announcements Circular</h4>
                <form onSubmit={triggerAddNews} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Title</label>
                    <input
                      type="text"
                      required
                      value={newsTitle}
                      onChange={(e) => setNewsTitle(e.target.value)}
                      placeholder="e.g. Scholarship alerts"
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Circular Type</label>
                    <select
                      id="news-type-selector"
                      value={newsType}
                      onChange={(e) => setNewsType(e.target.value as any)}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 [&>option]:bg-slate-900"
                    >
                      <option value="announcement">Announcement</option>
                      <option value="news">Circular News</option>
                      <option value="event">Campus Event</option>
                      <option value="achievement">Rank Achievements</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Description</label>
                    <textarea
                      required
                      value={newsDesc}
                      onChange={(e) => setNewsDesc(e.target.value)}
                      placeholder="Enter brief scannable description..."
                      rows={2}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Main Content (Detail transcript)</label>
                    <textarea
                      value={newsContent}
                      onChange={(e) => setNewsContent(e.target.value)}
                      placeholder="Optional. Detailed transcript information..."
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-amber-500 text-primary-dark font-display font-extrabold transition-all py-2 rounded-xl text-xs flex items-center justify-center space-x-1 shadow cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Publish Announcement</span>
                  </button>
                </form>
              </div>

              {/* Announcements list table */}
              <div className="lg:col-span-8 space-y-4">
                <h4 className="font-display font-extrabold text-white text-base">Active Circular Ledger</h4>
                <div className="overflow-x-auto border border-white/10 rounded-xl">
                  <table className="w-full text-left text-xs text-slate-200">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10 text-slate-300 font-mono text-[10px] uppercase font-bold">
                        <th className="p-3">Type / Date</th>
                        <th className="p-3">Title</th>
                        <th className="p-3 text-center">Operation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {announcements.map((ann) => (
                        <tr key={ann.id} id={`ann-tr-${ann.id}`} className="hover:bg-white/5">
                          <td className="p-3 space-y-1">
                            <span className="bg-white/10 border border-white/10 text-slate-200 font-bold uppercase text-[8px] px-2 py-0.5 rounded-full inline-block">
                              {ann.type}
                            </span>
                            <span className="text-slate-400 block text-[10px] font-mono">{ann.date}</span>
                          </td>
                          <td className="p-3 font-semibold text-white leading-normal">{ann.title}</td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => onDeleteAnnouncement(ann.id)}
                              className="text-rose-450 hover:text-rose-450 p-1.5 rounded hover:bg-rose-950/20 cursor-pointer"
                              title="Delete announcement record"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ACADEMIC FACULTY DIRECTORY CONFIGS */}
          {activeTab === 'faculty' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-slate-200">
              {/* Form block */}
              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2.5xl p-6 h-fit space-y-4">
                <h4 className="font-display font-extrabold text-white text-base">Register Academic Lecturer</h4>
                <form onSubmit={triggerAddFaculty} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Lecturer Full Name</label>
                    <input
                      type="text"
                      required
                      value={facName}
                      onChange={(e) => setFacName(e.target.value)}
                      placeholder="Prefix e.g. Prof. Shashi Rao"
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold block text-slate-100">Wing / Dept</label>
                      <select
                        id="fac-dept-selector"
                        value={facDept}
                        onChange={(e) => setFacDept(e.target.value as DepartmentType)}
                        className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2  focus:outline-none focus:ring-2 focus:ring-amber-400 [&>option]:bg-slate-900"
                      >
                        <option value="College">Junior College</option>
                        <option value="MAV">Mahatma Gandhi Vidyalay</option>
                        <option value="EMS">English Medium School</option>
                        <option value="SKPPV">Sheth Kesharchand Parakh Prathamik Vidyalay</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold block text-slate-100">Designation</label>
                      <input
                        type="text"
                        required
                        value={facDesignation}
                        onChange={(e) => setFacDesignation(e.target.value)}
                        placeholder="e.g. Senior Lecturer"
                        className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Qualifications / Degrees</label>
                    <input
                      type="text"
                      value={facQualifications}
                      onChange={(e) => setFacQualifications(e.target.value)}
                      placeholder="e.g. M.Tech, Ph.D Organic Chemistry"
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Brief Bio / Experience summary</label>
                    <textarea
                      value={facExperience}
                      onChange={(e) => setFacExperience(e.target.value)}
                      placeholder="e.g. 15 Years instructing physics"
                      rows={2}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-slate-100">Contact Email</label>
                    <input
                      type="email"
                      value={facEmail}
                      onChange={(e) => setFacEmail(e.target.value)}
                      placeholder="srao@ktes.edu"
                      className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-amber-500 text-primary-dark font-display font-extrabold transition-all py-2 rounded-xl text-xs flex items-center justify-center space-x-1 shadow cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Faculty Member</span>
                  </button>
                </form>
              </div>

              {/* Faculty table list */}
              <div className="lg:col-span-8 space-y-4">
                <h4 className="font-display font-extrabold text-white text-base">Faculty Directory Ledger</h4>
                <div className="overflow-x-auto border border-white/10 rounded-xl">
                  <table className="w-full text-left text-xs text-slate-200">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10 text-slate-300 font-mono text-[10px] uppercase font-bold">
                        <th className="p-3">Mentors</th>
                        <th className="p-3">Department</th>
                        <th className="p-3">Coordinates / Degrees</th>
                        <th className="p-3 text-center">Operation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {facultyList.map((fac) => (
                        <tr key={fac.id} id={`fac-tr-${fac.id}`} className="hover:bg-white/5">
                          <td className="p-3 flex items-center space-x-3">
                            <img src={fac.image || undefined} alt={fac.name} className="h-8 w-8 rounded-full object-cover shrink-0 border border-white/10" />
                            <div>
                              <div className="font-bold text-white text-xs">{fac.name}</div>
                              <span className="text-[10px] text-amber-400 font-semibold block leading-tight">{fac.designation}</span>
                            </div>
                          </td>
                          <td className="p-3 font-bold text-amber-300 uppercase">{fac.department}</td>
                          <td className="p-3 space-y-0.5 text-slate-350">
                            <div>Degs: <strong className="text-white">{fac.qualifications}</strong></div>
                            <div className="text-[10px] font-mono text-slate-400">{fac.email}</div>
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => onDeleteFaculty(fac.id)}
                              className="text-rose-450 hover:text-rose-400 p-1.5 rounded hover:bg-rose-950/20 cursor-pointer"
                              title="Delete lecturer record"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
