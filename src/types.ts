export type DepartmentType = 'MAV' | 'College' | 'EMS' | 'SKPPV';

export interface Announcement {
  id: string;
  title: string;
  type: 'news' | 'event' | 'announcement' | 'achievement';
  date: string;
  description: string;
  content?: string;
  category?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  department: DepartmentType;
  designation: string;
  qualifications: string;
  experience: string;
  image: string;
  email: string;
}

export interface Founder {
  id: string;
  name: string;
  designation: string;
  biography: string;
  contribution: string;
  image: string;
}

export interface Director {
  id: string;
  name: string;
  position: string;
  qualifications: string;
  experience: string;
  image: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  department: DepartmentType;
  courseOrClass: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  uploadedAt: string;
}

export interface ResultDoc {
  id: string;
  examName: string;
  academicYear: string;
  department: DepartmentType;
  overallPercentage: number;
  topRankers: Array<{
    name: string;
    score: string;
    rank: number;
  }>;
  attachmentUrl: string;
}

export interface AdmissionForm {
  id: string;
  studentName: string;
  dob: string;
  email: string;
  phone: string;
  address: string;
  department: DepartmentType;
  selectedCourse: string;
  prevAcademicScore: string;
  documentUrl?: string;
  status: 'submitted' | 'under_review' | 'approved' | 'rejected';
  trackingId: string;
  submissionDate: string;
  comments?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'sports' | 'cultural' | 'events';
  mediaUrl: string;
  mediaType: 'image' | 'video';
  description?: string;
}

export interface ClassSchedule {
  id: string;
  department: DepartmentType;
  className: string;
  day: string;
  subject: string;
  time: string;
  room: string;
  teacher: string;
}

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  status: 'Available' | 'Reserved';
}
