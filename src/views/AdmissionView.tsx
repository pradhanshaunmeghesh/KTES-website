import React, { useState } from 'react';
import { DepartmentType, AdmissionForm } from '../types';
import {
  FileText,
  DollarSign,
  Search,
  Upload,
  CheckCircle,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

interface AdmissionViewProps {
  applications: AdmissionForm[];
  onApply: (form: AdmissionForm) => void;
}

export default function AdmissionView({ applications, onApply }: AdmissionViewProps) {
  // Application Form States
  const [studentName, setStudentName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmailValue] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dept, setDept] = useState<DepartmentType>('College');
  const [selectedCourse, setSelectedCourse] = useState('11th Science');
  const [prevAcademicScore, setPrevAcademicScore] = useState('');
  const [isSuccess, setIsSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // File Upload emulation state
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // Tracking States
  const [trackingSearch, setTrackingSearch] = useState('');
  const [trackedApplication, setTrackedApplication] = useState<AdmissionForm | null>(null);

  const courseList: Record<DepartmentType, string[]> = {
    College: [
      '11th Science',
      '12th Science'
    ],
    MAV: [
      '5th Standard',
      '6th Standard',
      '7th Standard',
      '8th Standard',
      '9th Standard',
      '10th Standard'
    ],
    EMS: [
      'SSC Secondary (Classes 5-10)',
      'Primary School (Classes 1-4)'
    ],
    SKPPV: [
      'Nursery',
      'Jr KG',
      'Sr KG',
      '1st Standard',
      '2nd Standard',
      '3rd Standard',
      '4th Standard'
    ]
  };

  // Submit Application
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!uploadedFileName) {
      setFormError('Please select and upload your academic grade sheet or certificate file first.');
      return;
    }

    // Generate neat tracking key
    const uniqueNum = Math.floor(1000 + Math.random() * 9000);
    const trackingId = `KTES-2026-${uniqueNum}`;

    const newApp: AdmissionForm = {
      id: `app-${Date.now()}`,
      studentName,
      dob,
      email,
      phone,
      address,
      department: dept,
      selectedCourse: selectedCourse || courseList[dept][0],
      prevAcademicScore,
      documentUrl: uploadedFileName,
      status: 'submitted',
      trackingId,
      submissionDate: new Date().toISOString().split('T')[0],
      comments: 'Academic credentials verified by candidate. Queueing for board reviewer.'
    };

    onApply(newApp);

    setIsSuccess(trackingId);
    setTrackingSearch(trackingId); // populate the helper search automatically
    // Reset Form
    setStudentName('');
    setDob('');
    setEmailValue('');
    setPhone('');
    setAddress('');
    setPrevAcademicScore('');
    setUploadedFileName(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleTrackSearch = () => {
    const matched = applications.find(
      app => app.trackingId.trim().toUpperCase() === trackingSearch.trim().toUpperCase()
    );
    setTrackedApplication(matched || null);
  };

  return (
    <div className="space-y-16 pb-16 pt-6 relative z-10">
      {/* Intro Fee Guidelines Banner */}
      <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block">Counseling & Registrations</span>
            <h1 className="text-3xl font-display font-black text-white">Online Admissions Portal 2026-27</h1>
            <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
              Submit your academic transcripts, personal profiles and choose desired course parameters. Please review institutional fee schemas and scholarship waivers before clicking apply.
            </p>
          </div>
          <div className="lg:col-span-4 bg-secondary/10 border border-secondary/20 text-white p-5 rounded-2.5xl shadow-lg space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wide text-amber-300">Section Fee Guideline</h4>
            <div className="text-xs text-slate-200 leading-snug space-y-2">
              <p>
                Tuition Fees: Variable based on the specific Institutional Wing and Class of admission. (Refundable security deposits have separate parameters)
              </p>
              <p className="text-slate-350 font-sans text-[11px] leading-relaxed">
                शिक्षण शुल्क: प्रवेश घेण्याच्या शाखा (Wing) आणि इयत्तेनुसार बदलू शकते. (परतावायोग्य सुरक्षा ठेव रक्कमेचे स्वतंत्र निकष लागू आहेत)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application Form and Tracking Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form panel */}
        <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md space-y-6">
          <h3 className="font-display font-black text-white text-xl border-b border-white/10 pb-3">Online Admission Application</h3>

          {formError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-200 rounded-xl p-4 text-xs font-medium flex items-center justify-between">
              <span>{formError}</span>
              <button onClick={() => setFormError(null)} className="text-white hover:text-amber-300 font-bold ml-2">Dismiss</button>
            </div>
          )}

          {isSuccess ? (
            <div id="admission-application-success-box" className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-100 rounded-2xl p-6 text-sm text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-display font-bold text-white">Registration Successful!</h4>
              <p className="text-slate-300 text-xs">
                Your application has been appended recursively into local database. Your unique application tracking key is:
              </p>
              <div className="bg-white/5 border border-white/10 font-mono text-base font-black py-2.5 px-4 rounded-xl inline-block text-secondary">
                {isSuccess}
              </div>
              <p className="text-slate-400 text-[11px]">
                Copy this key into the Tracking Dashboard on the right panel to test live evaluation cycles.
              </p>
              <button
                onClick={() => setIsSuccess(null)}
                className="text-xs text-secondary font-bold underline block mx-auto cursor-pointer"
              >
                Register another new student...
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-slate-200 text-xs md:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-200 block">Student Full Name</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="First, Father & Surname"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>

                {/* DOB */}
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-200 block">Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-200 block">Email address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="mentor.parent@domain.com"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-200 block">Phone checklist number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 91223-XXXX"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <label className="font-medium text-slate-200 block">Residential Address</label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Complete postal address for future circular shipments"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Department Selection */}
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-200 block">Institutional Wing</label>
                  <select
                    id="admission-dept-selector"
                    value={dept}
                    onChange={(e) => {
                      const newDept = e.target.value as DepartmentType;
                      setDept(newDept);
                      setSelectedCourse(courseList[newDept][0]);
                    }}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent [&>option]:bg-slate-900 [&>option]:text-white"
                  >
                    <option value="College">Junior College</option>
                    <option value="MAV">Mahatma Gandhi Vidyalaya</option>
                    <option value="EMS">English Medium School</option>
                    <option value="SKPPV">Sheth Kesharchand Parakh Prathamik Vidyalaya</option>
                  </select>
                </div>

                {/* Course Selection */}
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-200 block">Selected Course</label>
                  <select
                    id="admission-course-selector"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent [&>option]:bg-slate-900 [&>option]:text-white"
                  >
                    {courseList[dept].map((c, idx) => (
                      <option key={idx} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Prior Academic Score */}
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-200 block">Prior Board/School Mark %</label>
                  <input
                    type="text"
                    required
                    value={prevAcademicScore}
                    onChange={(e) => setPrevAcademicScore(e.target.value)}
                    placeholder="e.g. 96.4%"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Document upload block */}
              <div className="border-2 border-dashed border-white/10 p-5 rounded-2xl bg-white/5 text-center space-y-3">
                <Upload className="h-8 w-8 text-slate-300 mx-auto" />
                <div className="space-y-1">
                  <span className="font-semibold text-white block text-xs">Upload Matriculation Grade sheet / Photo ID</span>
                  <p className="text-slate-300 text-[10px]">Select any mock image / PDF file to simulate upload verification.</p>
                </div>
                <div className="flex items-center justify-center">
                  <label className="bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2 text-xs font-bold font-display cursor-pointer hover:bg-white/20 flex items-center space-x-1 shadow transition-colors">
                    <span>Choose File</span>
                    <input
                      type="file"
                      id="admission-document-file-input"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {uploadedFileName && (
                  <div className="text-emerald-400 text-xs font-semibold flex items-center justify-center space-x-1 bg-emerald-950/40 py-1.5 rounded-lg border border-emerald-500/30">
                    <CheckCircle className="h-4 w-4 shrink-0 animate-bounce" />
                    <span>Mock Attachment uploaded: {uploadedFileName}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 text-right">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-amber-500 text-primary-dark font-display font-extrabold px-8 py-3 rounded-xl shadow-lg transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Live Tracking Dashboard panel */}
        <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md space-y-6 h-fit">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-display font-black text-white text-base">Application state Tracker</h3>
            <p className="text-slate-300 text-[11px]">Type your generated tracking code below to inspect live status</p>
          </div>

          <div className="space-y-4">
            {/* Search inputs */}
            <div className="space-y-2">
              <input
                type="text"
                value={trackingSearch}
                onChange={(e) => setTrackingSearch(e.target.value)}
                placeholder="KTES-2026-XXXX"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={handleTrackSearch}
                className="w-full bg-secondary hover:bg-amber-550 text-primary-dark font-display font-black py-2.5 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center space-x-1"
              >
                <Search className="h-4 w-4" />
                <span>Query Application Status</span>
              </button>
            </div>

            {/* Display matched tracked application details */}
            {trackedApplication ? (
              <div id="admission-application-tracker-results" className="border border-white/10 rounded-2xl p-4 bg-white/5 space-y-4 text-xs text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-slate-300 text-[10px]">{trackedApplication.trackingId}</span>
                  <span className={`text-[9px] font-bold uppercase px-2.5 py-1 rounded-full ${
                    trackedApplication.status === 'submitted' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    trackedApplication.status === 'under_review' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    trackedApplication.status === 'approved' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                    'bg-white/5 text-white border border-white/10'
                  }`}>
                    {trackedApplication.status}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-white text-sm">{trackedApplication.studentName}</div>
                  <div className="text-slate-300">Course Selected: <strong className="text-white">{trackedApplication.selectedCourse}</strong></div>
                  <div className="text-slate-300">Submitted at: <strong className="text-white">{trackedApplication.submissionDate}</strong></div>
                  <div className="text-slate-300">Board Annotations: 
                    <p className="text-slate-200 bg-[#000c24]/50 p-2.5 border border-white/10 rounded-lg mt-1 leading-normal italic">
                      "{trackedApplication.comments || 'Application registered. Awaiting manual board verify cycle.'}"
                    </p>
                  </div>
                </div>

                {/* Simulated timeline tracker step progress bar */}
                <div className="pt-2">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 mb-2">Stage Timeline</span>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono text-[8px] font-bold">
                    <div className="bg-secondary text-primary-dark py-1 rounded">SUBMITTED</div>
                    <div className={`${trackedApplication.status !== 'submitted' ? 'bg-secondary text-primary-dark' : 'bg-white/5 text-slate-400 border border-white/10'} py-1 rounded`}>UNDER_REV</div>
                    <div className={`${trackedApplication.status === 'approved' ? 'bg-emerald-500/30 border border-emerald-500/30 text-emerald-300' : 'bg-white/5 text-slate-400 border border-white/10'} py-1 rounded`}>APPROVED</div>
                    <div className="bg-white/5 text-slate-400 border border-white/10 py-1 rounded">FEE_PAID</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-amber-400/5 border border-amber-400/10 p-4 rounded-xl text-slate-300 text-xs leading-normal flex items-start space-x-2">
                <HelpCircle className="h-4 w-4 text-amber-300 shrink-0 mt-0.5" />
                <p>
                  Application credentials stored in standard browser memory. Try submitting the registration form on the left to see the generator tracking key appear instantly!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
