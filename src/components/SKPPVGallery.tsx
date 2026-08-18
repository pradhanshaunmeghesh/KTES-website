import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Trophy,
  Building,
  Image as ImageIcon,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  Upload,
  Info,
  Layers,
  Camera,
  CheckCircle2
} from 'lucide-react';

export type GalleryCategory = 'all' | 'annual_gathering' | 'sports_cocurricular' | 'campus_events';

export interface SKPPVPhotoItem {
  id: string;
  filename: string;
  category: 'annual_gathering' | 'sports_cocurricular' | 'campus_events';
  titleMr: string;
  titleEn: string;
  descMr: string;
  descEn: string;
  eventDateMr?: string;
  eventDateEn?: string;
  customMediaUrl?: string; // For user uploaded or preview media
}

// Initial 22 official image mapping targets reflecting the Website Fotos folder
const INITIAL_FOTOS: SKPPVPhotoItem[] = [
  // ==========================================
  // Category 1: Annual Gathering & Cultural Events (वार्षिक स्नेहसम्मेलन व सांस्कृतिक कार्यक्रम)
  // ==========================================
  {
    id: 'ag-1',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.04 PM.jpeg',
    category: 'annual_gathering',
    titleMr: 'पारंपरिक लोकनृत्य सादरीकरण',
    titleEn: 'Traditional Folk Dance Performance',
    descMr: 'वार्षिक स्नेहसंमेलनात प्राथमिक विभागातील विद्यार्थ्यांचे मनमोहक लोकनृत्य सादरीकरण.',
    descEn: 'Captivating Maharashtrian folk dance performance by primary school students at the Annual Gathering.',
    eventDateMr: 'वार्षिक स्नेहसंमेलन २०२५-२६',
    eventDateEn: 'Annual Gathering 2025-26'
  },
  {
    id: 'ag-2',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.05 PM (1).jpeg',
    category: 'annual_gathering',
    titleMr: 'सांस्कृतिक समूहगान व स्वागत गीत',
    titleEn: 'Cultural Choir & Welcome Song Ensemble',
    descMr: 'समारंभाच्या सुरुवातीला विद्यार्थ्यांनी सादर केलेले सुरेल स्वागतगीत व ईशस्तवन.',
    descEn: 'Students performing the opening prayer and melodious welcome song for esteemed guests.',
    eventDateMr: 'वार्षिक स्नेहसंमेलन',
    eventDateEn: 'Annual Gathering'
  },
  {
    id: 'ag-3',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.07 PM (2).jpeg',
    category: 'annual_gathering',
    titleMr: 'नाट्य व प्रबोधनात्मक एकांकिका',
    titleEn: 'Drama & Social Awareness Skit',
    descMr: 'सामाजिक प्रबोधनपर नाट्यकृती आणि पर्यावरण संवर्धनाचा संदेश देणारा अभिनय.',
    descEn: 'Educational and social awareness dramatic skit performed on stage by young scholars.',
    eventDateMr: 'वार्षिक स्नेहसंमेलन',
    eventDateEn: 'Annual Gathering'
  },
  {
    id: 'ag-4',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.05 PM.jpeg',
    category: 'annual_gathering',
    titleMr: 'गुणवंत विद्यार्थी बक्षीस वितरण सोहळा',
    titleEn: 'Merit Prize Distribution Ceremony',
    descMr: 'शैक्षणिक व सहशालेय क्षेत्रात उल्लेखनीय यश मिळवणाऱ्या विद्यार्थ्यांचा मान्यवरांच्या हस्ते गौरव.',
    descEn: 'Academic excellence and talent award distribution felicitated by executive trustees.',
    eventDateMr: 'गुणगौरव सोहळा',
    eventDateEn: 'Prize Distribution'
  },
  {
    id: 'ag-5',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.06 PM (1).jpeg',
    category: 'annual_gathering',
    titleMr: 'पारंपरिक वेशभूषा स्पर्धा (बालवाडी व प्राथमिक)',
    titleEn: 'Fancy Dress & Traditional Attire Showcase',
    descMr: 'भारतीय संस्कृती आणि थोर महापुरुषांच्या वेशभूषेत सहभागी झालेले चिमुकले विद्यार्थी.',
    descEn: 'Pre-primary & primary kids adorned in vibrant historical attire of national icons.',
    eventDateMr: 'सांस्कृतिक सप्ताह',
    eventDateEn: 'Cultural Week'
  },
  {
    id: 'ag-6',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.08 PM (2).jpeg',
    category: 'annual_gathering',
    titleMr: 'दीपप्रज्वलन व स्नेहसंमेलन उद्घाटन',
    titleEn: 'Lighting of the Lamp & Ceremony Inauguration',
    descMr: 'संस्थेचे पदाधिकारी व मान्यवरांच्या शुभहस्ते दीपप्रज्वलन करून कार्यक्रमाचा शुभारंभ.',
    descEn: 'Dignitaries lighting the traditional lamp to inaugurate the grand annual gathering stage.',
    eventDateMr: 'वार्षिक स्नेहसंमेलन',
    eventDateEn: 'Annual Gathering'
  },
  {
    id: 'ag-7',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.03 PM (1).jpeg',
    category: 'annual_gathering',
    titleMr: 'देशभक्तीपर गीत व नृत्य सादरीकरण',
    titleEn: 'Patriotic Song & Choreography',
    descMr: 'तिरंगा ध्वज फडकवत विद्यार्थ्यांनी सादर केलेले राष्ट्रभक्तीपर समूह नृत्य.',
    descEn: 'Inspiring patriotic musical performance presented with tricolor flags and synchrony.',
    eventDateMr: 'सांस्कृतिक मंच',
    eventDateEn: 'Cultural Stage'
  },

  // ==========================================
  // Category 2: Sports & Co-Curricular Activities (क्रीडा व सहशालेय उपक्रम)
  // ==========================================
  {
    id: 'sp-1',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.02 PM.jpeg',
    category: 'sports_cocurricular',
    titleMr: 'वार्षिक क्रीडा स्पर्धा - धावणे व मैदानी खेळ',
    titleEn: 'Annual Athletic Sprint & Track Events',
    descMr: 'विद्यालयाच्या भव्य क्रीडांगणावर रंगलेल्या धावणे व मैदानी खेळांच्या स्पर्धा.',
    descEn: 'Primary students competing enthusiastically in track sprints on the school grounds.',
    eventDateMr: 'क्रीडा महोत्सव',
    eventDateEn: 'Sports Meet'
  },
  {
    id: 'sp-2',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.03 PM (2).jpeg',
    category: 'sports_cocurricular',
    titleMr: 'कबड्डी व खो-खो सामने',
    titleEn: 'Inter-House Kabaddi & Kho-Kho Matches',
    descMr: 'विद्यार्थ्यांमधील सांघिक भावना आणि शारीरिक चपळाई वाढवणारे पारंपरिक मैदानी सामने.',
    descEn: 'Traditional team sports promoting agility, stamina, and camaraderie among pupils.',
    eventDateMr: 'क्रीडा महोत्सव',
    eventDateEn: 'Sports Meet'
  },
  {
    id: 'sp-3',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.04 PM (1).jpeg',
    category: 'sports_cocurricular',
    titleMr: 'सामूहिक योगासन व सूर्यनमस्कार प्रात्यक्षिके',
    titleEn: 'Mass Yoga & Surya Namaskar Session',
    descMr: 'आंतरराष्ट्रीय योग दिनानिमित्त आणि दैनंदिन परिपाठात विद्यार्थ्यांचे सामूहिक सूर्यनमस्कार.',
    descEn: 'Synchronized morning yoga posture demonstration promoting health and mental focus.',
    eventDateMr: 'योग दिन उपक्रम',
    eventDateEn: 'Yoga Day Session'
  },
  {
    id: 'sp-4',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.07 PM.jpeg',
    category: 'sports_cocurricular',
    titleMr: 'आनंददायी शनिवार - मातीकाम व हस्तकला निर्मिती',
    titleEn: 'Joyful Saturday Clay Modeling & Origami Art',
    descMr: 'हस्तकला, कागदी काम आणि मातीकामातून विद्यार्थ्यांच्या कल्पकतेला मिळालेली मुक्त संधी.',
    descEn: 'Expressive creative craft workshop conducted during Joyful Saturday sessions.',
    eventDateMr: 'आनंददायी शनिवार',
    eventDateEn: 'Joyful Saturday'
  },
  {
    id: 'sp-5',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.08 PM (1).jpeg',
    category: 'sports_cocurricular',
    titleMr: 'कब्ज व बुलबुल - सामाजिक सेवा व रक्षाबंधन',
    titleEn: 'Cubs & Bulbul Outreach & Raksha Bandhan',
    descMr: 'कब्ज-बुलबुल पथकाचे अनाथआश्रमात रक्षाबंधन व सामाजिक जाणीव उपक्रम.',
    descEn: 'Scouting unit outreach initiative sharing festive affection and community service.',
    eventDateMr: 'कब्ज-बुलबुल उपक्रम',
    eventDateEn: 'Cubs & Bulbul'
  },
  {
    id: 'sp-6',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.09 PM (1).jpeg',
    category: 'sports_cocurricular',
    titleMr: 'प्राथमिक शालेय विज्ञान प्रदर्शन व प्रकल्प',
    titleEn: 'Primary Science Exhibition & Experiment Fair',
    descMr: 'वैज्ञानिक दृष्टिकोन रुजवण्यासाठी विद्यार्थ्यांनी तयार केलेले विविध वैज्ञानिक मॉडेल्स.',
    descEn: 'Hands-on scientific exhibits and interactive models presented by young researchers.',
    eventDateMr: 'विज्ञान दिन',
    eventDateEn: 'Science Fair'
  },
  {
    id: 'sp-7',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.10 PM (2).jpeg',
    category: 'sports_cocurricular',
    titleMr: 'क्रीडा चषक व पदके वितरण',
    titleEn: 'Sports Trophy & Medal Ceremony',
    descMr: 'विजेत्या संघांना व खेळाडूंना सुवर्ण व रौप्य पदके प्रदान करून गौरव.',
    descEn: 'Cheering victorious sports houses with athletic medals and championship shields.',
    eventDateMr: 'क्रीडा पारितोषिक',
    eventDateEn: 'Sports Ceremony'
  },

  // ==========================================
  // Category 3: Campus & School Events (शाळा परिसर व उपक्रम)
  // ==========================================
  {
    id: 'cp-1',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.04 PM (2).jpeg',
    category: 'campus_events',
    titleMr: 'स्वातंत्र्य दिन व प्रजासत्ताक दिन ध्वजारोहण',
    titleEn: 'Independence Day & Republic Day Flag Hoisting',
    descMr: 'विद्यालयाच्या भव्य प्रांगणात राष्ट्रध्वज वंदन व राष्ट्रभक्तीपर घोषणांचा सोहळा.',
    descEn: 'National tri-color flag hoisting ceremony and patriotic march in the school quadrangle.',
    eventDateMr: 'राष्ट्रीय सण',
    eventDateEn: 'National Festival'
  },
  {
    id: 'cp-2',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.06 PM.jpeg',
    category: 'campus_events',
    titleMr: 'शाळा परिसर, इमारत व सुसज्ज वर्गखोल्या',
    titleEn: 'School Campus, Building & Smart Classrooms',
    descMr: 'शेठ केशरचंद पारख प्राथमिक विद्यालयाची विस्तीर्ण इमारत व निसर्गरम्य परिसर.',
    descEn: 'Panoramic view of the SKPPV educational wing with airy, well-equipped classrooms.',
    eventDateMr: 'शाळा परिसर',
    eventDateEn: 'Campus Architecture'
  },
  {
    id: 'cp-3',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.07 PM (1).jpeg',
    category: 'campus_events',
    titleMr: 'मराठी भाषा संवर्धन पंधरवडा व अभिजात गौरव',
    titleEn: 'Marathi Classical Language Celebration Project',
    descMr: 'मराठी भाषेला मिळालेल्या अभिजात दर्जामुळे विद्यार्थ्यांनी केलेले विशेष प्रकल्प सादरीकरण.',
    descEn: 'Special project presentation celebrating Marathi conferred with Classical Language status.',
    eventDateMr: 'मराठी भाषा गौरव',
    eventDateEn: 'Marathi Heritage Project'
  },
  {
    id: 'cp-4',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.09 PM (2).jpeg',
    category: 'campus_events',
    titleMr: 'स्वच्छता पंधरवडा व वृक्षारोपण मोहीम',
    titleEn: 'Campus Cleanliness & Tree Plantation Drive',
    descMr: 'पर्यावरण संवर्धनासाठी शिक्षक व विद्यार्थ्यांनी एकत्र येऊन केलेले वृक्षारोपण.',
    descEn: 'Eco-club cleanliness drive and sapling plantation enhancing campus green cover.',
    eventDateMr: 'पर्यावरण उपक्रम',
    eventDateEn: 'Green Initiative'
  },
  {
    id: 'cp-5',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.10 PM (3).jpeg',
    category: 'campus_events',
    titleMr: 'वाचन प्रेरणा दिन व ग्रंथालय उपक्रम',
    titleEn: 'Vachan Prerana Reading Movement & Library',
    descMr: 'डॉ. ए. पी. जे. अब्दुल कलाम यांच्या जयंतीनिमित्त सामूहिक वाचन उपक्रम.',
    descEn: 'Mass reading hour in the school library commemorating Dr. A.P.J. Abdul Kalam.',
    eventDateMr: 'वाचन प्रेरणा दिन',
    eventDateEn: 'Reading Day'
  },
  {
    id: 'cp-6',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.11 PM (1).jpeg',
    category: 'campus_events',
    titleMr: 'शालेय पोषण आहार व आरोग्य तपासणी शिबिर',
    titleEn: 'Nutritious Mid-Day Meal & Health Checkup',
    descMr: 'विद्यार्थ्यांच्या सर्वांगीण विकासासाठी नियमित आरोग्य व दंत तपासणी शिबिर.',
    descEn: 'Annual pediatric health checkup and nutritious mid-day meals for primary scholars.',
    eventDateMr: 'आरोग्य शिबिर',
    eventDateEn: 'Health Camp'
  },
  {
    id: 'cp-7',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.12 PM.jpeg',
    category: 'campus_events',
    titleMr: 'बालवाडी व प्राथमिक विभाग प्रवेशोत्सव',
    titleEn: 'Balwadi & Primary Praveshotsav Welcome',
    descMr: 'पहिल्या दिवशी नवागतांचे औक्षण करून आणि गुलाबपुष्प देऊन केलेले जल्लोषात स्वागत.',
    descEn: 'Heartwarming floral welcome celebration welcoming kindergarten & grade 1 entrants.',
    eventDateMr: 'प्रवेशोत्सव',
    eventDateEn: 'School Reopening'
  },
  {
    id: 'cp-8',
    filename: 'WhatsApp Image 2026-07-03 at 1.22.12 PM (1).jpeg',
    category: 'campus_events',
    titleMr: 'पालक-शिक्षक मेळावा व मार्गदर्शन सभा',
    titleEn: 'Parent-Teacher Meet (PTA) & Seminar',
    descMr: 'विद्यार्थ्यांच्या प्रगतीसाठी आयोजित केलेली पालक-शिक्षक संवाद सभा.',
    descEn: 'Collaborative parent-teacher general body meeting fostering child development.',
    eventDateMr: 'पालक सभा',
    eventDateEn: 'PTA Conference'
  }
];

export default function SKPPVGallery() {
  const [photos, setPhotos] = useState<SKPPVPhotoItem[]>(INITIAL_FOTOS);
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Category Configuration with Dual-Language titles
  const categoryFilters = [
    {
      id: 'all' as const,
      labelMr: 'सर्व छायाचित्रे',
      labelEn: 'All Photos',
      icon: Layers,
      count: photos.length
    },
    {
      id: 'annual_gathering' as const,
      labelMr: 'वार्षिक स्नेहसम्मेलन व सांस्कृतिक कार्यक्रम',
      labelEn: 'Annual Gathering & Cultural Events',
      icon: Sparkles,
      count: photos.filter((p) => p.category === 'annual_gathering').length
    },
    {
      id: 'sports_cocurricular' as const,
      labelMr: 'क्रीडा व सहशालेय उपक्रम',
      labelEn: 'Sports & Co-Curricular Activities',
      icon: Trophy,
      count: photos.filter((p) => p.category === 'sports_cocurricular').length
    },
    {
      id: 'campus_events' as const,
      labelMr: 'शाळा परिसर व उपक्रम',
      labelEn: 'Campus & School Events',
      icon: Building,
      count: photos.filter((p) => p.category === 'campus_events').length
    }
  ];

  // Filtered Photos
  const filteredPhotos = photos.filter((photo) => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    if (!matchesCategory) return false;

    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;

    return (
      photo.titleMr.toLowerCase().includes(q) ||
      photo.titleEn.toLowerCase().includes(q) ||
      photo.descMr.toLowerCase().includes(q) ||
      photo.descEn.toLowerCase().includes(q) ||
      photo.filename.toLowerCase().includes(q) ||
      (photo.eventDateMr && photo.eventDateMr.toLowerCase().includes(q)) ||
      (photo.eventDateEn && photo.eventDateEn.toLowerCase().includes(q))
    );
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIdx(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIdx(null);
  };

  const handlePrev = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev! - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev! + 1));
    }
  };

  // Optional manual file upload / replacement handler for interactive exploration
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, photoId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPhotos((prev) =>
        prev.map((p) => (p.id === photoId ? { ...p, customMediaUrl: objectUrl } : p))
      );
    }
  };

  return (
    <div
      id="skppv-website-fotos-gallery"
      className="space-y-8 text-slate-100 rounded-3xl p-4 sm:p-6 lg:p-8"
      style={{ backgroundColor: '#0a0e1a' }}
    >
      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-3 py-1 rounded-full text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              style={{ backgroundColor: '#ffc107' }}
            >
              <Camera className="w-3.5 h-3.5 text-slate-950" />
              Website Fotos Archive
            </span>
            <span className="text-xs text-amber-300/80 font-mono bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
              {photos.length} Total Slots
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
            <span className="block text-amber-400 font-sans text-xl sm:text-2xl font-bold">
              ५) छायाचित्र दालन - अधिकृत फोटो संग्रह
            </span>
            <span className="block text-slate-100 text-lg sm:text-xl font-semibold mt-0.5">
              Sheth Kesharchand Parakh Primary School Media Gallery
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            वार्षिक स्नेहसंमेलन, क्रीडा स्पर्धा आणि शाळा परिसरातील विविध उपक्रमांचे डिजिटल छायाचित्र दालन.
            (Target: <span className="font-mono text-amber-300">Website Fotos.zip</span>)
          </p>
        </div>

        {/* Real-time Search Box */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search gallery / छायाचित्र शोधा..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none transition-all shadow-inner"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 193, 7, 0.3)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categoryFilters.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-4 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'shadow-xl ring-2'
                  : 'hover:bg-opacity-80'
              }`}
              style={{
                backgroundColor: isSelected ? '#1e293b' : 'rgba(30, 41, 59, 0.55)',
                borderColor: isSelected ? '#ffc107' : 'rgba(255, 255, 255, 0.1)',
                borderWidth: '1px',
                borderStyle: 'solid',
                outline: 'none',
                boxShadow: isSelected ? '0 8px 24px rgba(255, 193, 7, 0.15)' : undefined
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: isSelected ? '#ffc107' : 'rgba(255, 255, 255, 0.08)',
                    color: isSelected ? '#0a0e1a' : '#ffc107'
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className="text-xs font-mono font-black px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isSelected ? '#ffc107' : 'rgba(255, 255, 255, 0.1)',
                    color: isSelected ? '#0a0e1a' : '#ffc107'
                  }}
                >
                  {cat.count}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-amber-300 font-sans leading-snug">
                  {cat.labelMr}
                </h4>
                <p className="text-[11px] text-slate-300 font-medium leading-snug mt-0.5">
                  {cat.labelEn}
                </p>
              </div>

              {isSelected && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: '#ffc107' }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Gallery Photos Count & Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-slate-400 font-sans">
        <div>
          <span>दर्शविलेली छायाचित्रे: </span>
          <strong style={{ color: '#ffc107' }}>{filteredPhotos.length}</strong> / {photos.length}
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ffc107' }}></span>
            <span>अधिकृत वर्गवारी</span>
          </span>
          <span className="inline-flex items-center gap-1 text-slate-400">
            <span>द्वैभाषिक मथळे (Marathi / English)</span>
          </span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-400 font-sans" style={{ backgroundColor: '#1e293b', borderRadius: '1.5rem' }}>
            <ImageIcon className="w-10 h-10 mx-auto mb-3 text-slate-500" />
            <p className="text-sm font-semibold text-slate-200">कोणतीही छायाचित्रे सापडली नाहीत.</p>
            <p className="text-xs text-slate-400 mt-1">No matching photos found in this category.</p>
          </div>
        ) : (
          filteredPhotos.map((photo, index) => {
            const hasCustomMedia = !!photo.customMediaUrl;

            return (
              <div
                key={photo.id}
                id={`skppv-foto-${photo.id}`}
                className="group rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between border"
                style={{
                  backgroundColor: '#1e293b',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Media Container or Blank Placeholder Container */}
                <div
                  className="relative h-56 w-full cursor-pointer overflow-hidden flex flex-col items-center justify-center"
                  onClick={() => handleOpenLightbox(index)}
                >
                  {hasCustomMedia ? (
                    <img
                      src={photo.customMediaUrl}
                      alt={photo.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Blank Placeholder Container matching specification: <div class="img-placeholder"></div> */
                    <div className="img-placeholder w-full h-full flex flex-col items-center justify-center p-6 text-center group-hover:border-amber-400 transition-colors">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: 'rgba(255, 193, 7, 0.12)',
                          border: '1px solid rgba(255, 193, 7, 0.3)'
                        }}
                      >
                        <ImageIcon className="w-6 h-6" style={{ color: '#ffc107' }} />
                      </div>
                      <span className="text-xs font-mono font-semibold text-amber-300/90 truncate max-w-full px-2">
                        {photo.filename}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-sans">
                        [Website Fotos Asset Slot]
                      </span>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <div
                    className="absolute top-3 left-3 text-[10px] font-black tracking-wide px-3 py-1 rounded-full uppercase z-10 shadow-md backdrop-blur"
                    style={{
                      backgroundColor: 'rgba(10, 14, 26, 0.85)',
                      color: '#ffc107',
                      border: '1px solid rgba(255, 193, 7, 0.3)'
                    }}
                  >
                    {photo.category === 'annual_gathering'
                      ? 'स्नेहसंमेलन / Gathering'
                      : photo.category === 'sports_cocurricular'
                      ? 'क्रीडा / Sports'
                      : 'परिसर / Campus'}
                  </div>

                  {/* Hover Zoom Prompt */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg text-slate-950"
                      style={{ backgroundColor: '#ffc107' }}
                    >
                      <ZoomIn className="w-4 h-4" />
                      पहा / Zoom
                    </span>
                  </div>
                </div>

                {/* Dual Language Captions: Marathi / English Subtitle Slots */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Dual-language Main Title */}
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                      <span className="block text-amber-300 font-sans">{photo.titleMr}</span>
                      <span className="block text-slate-100 font-medium text-xs mt-0.5">
                        {photo.titleEn}
                      </span>
                    </h3>

                    {/* Dual-language Subtitle & Description */}
                    <div className="text-xs text-slate-300 space-y-1 pt-1 border-t border-white/5 font-sans leading-relaxed">
                      <p className="text-slate-300 line-clamp-2">{photo.descMr}</p>
                      <p className="text-slate-400 text-[11px] line-clamp-2 italic font-normal">
                        {photo.descEn}
                      </p>
                    </div>
                  </div>

                  {/* Slot Footer & Direct Local Photo Uplink */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1 text-amber-400/90 font-sans">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{photo.eventDateMr || 'SKPPV Event'}</span>
                    </div>

                    {/* Uplink upload button so user can attach or replace file right here */}
                    <label
                      title="Upload or preview an image for this slot"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-300 border border-white/10 cursor-pointer transition-colors text-[10px]"
                    >
                      <Upload className="w-3 h-3 text-amber-400" />
                      <span>{hasCustomMedia ? 'Change' : 'Attach'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(e, photo.id)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && filteredPhotos[lightboxIdx] && (
        <div
          id="skppv-lightbox-modal"
          className="fixed inset-0 z-50 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-fadeIn"
          style={{ backgroundColor: 'rgba(10, 14, 26, 0.96)' }}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center z-10 border-b border-white/10 pb-4">
            <div className="space-y-0.5">
              <span className="font-mono text-xs text-amber-300">
                Slot {lightboxIdx + 1} of {filteredPhotos.length} | Category:{' '}
                <strong className="uppercase">
                  {filteredPhotos[lightboxIdx].category.replace('_', ' ')}
                </strong>
              </span>
              <p className="text-xs text-slate-400 font-mono">
                {filteredPhotos[lightboxIdx].filename}
              </p>
            </div>

            <button
              onClick={handleCloseLightbox}
              className="p-2 border border-white/20 bg-white/5 hover:bg-white/15 rounded-full transition-colors cursor-pointer text-white hover:text-amber-400"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Core Image Display Layout */}
          <div className="flex-1 flex items-center justify-between relative max-w-5xl mx-auto w-full py-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="p-3 border border-white/20 bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 rounded-full transition-all cursor-pointer z-10 shadow-xl"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image or Placeholder View */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 max-h-[60vh] w-full">
              {filteredPhotos[lightboxIdx].customMediaUrl ? (
                <img
                  src={filteredPhotos[lightboxIdx].customMediaUrl}
                  alt={filteredPhotos[lightboxIdx].titleEn}
                  className="max-h-[58vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/15"
                />
              ) : (
                <div
                  className="img-placeholder max-h-[55vh] w-full max-w-xl h-80 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-2xl"
                  style={{
                    backgroundColor: '#1e293b',
                    borderColor: '#ffc107'
                  }}
                >
                  <ImageIcon className="w-16 h-16 mb-4" style={{ color: '#ffc107' }} />
                  <span className="text-base font-bold text-amber-300 font-sans">
                    {filteredPhotos[lightboxIdx].titleMr}
                  </span>
                  <span className="text-sm font-semibold text-slate-200 mt-1">
                    {filteredPhotos[lightboxIdx].titleEn}
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-3 px-3 py-1 rounded bg-black/40 border border-white/10">
                    Target: Website Fotos/{filteredPhotos[lightboxIdx].filename}
                  </span>
                </div>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-3 border border-white/20 bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 rounded-full transition-all cursor-pointer z-10 shadow-xl"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Dual Language Description Panel */}
          <div
            className="max-w-4xl mx-auto w-full p-5 rounded-2xl border border-white/10 z-10 shadow-2xl"
            style={{ backgroundColor: '#1e293b' }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
              <div>
                <h4 className="text-lg font-bold text-amber-300 font-sans">
                  {filteredPhotos[lightboxIdx].titleMr}
                </h4>
                <h5 className="text-sm font-semibold text-white">
                  {filteredPhotos[lightboxIdx].titleEn}
                </h5>
              </div>
              <div
                className="px-3 py-1 rounded-full text-xs font-bold text-slate-950 shrink-0"
                style={{ backgroundColor: '#ffc107' }}
              >
                {filteredPhotos[lightboxIdx].eventDateMr || 'SKPPV Event'}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-amber-400 font-bold block mb-1">मराठी वर्णन:</span>
                <p className="text-slate-200 leading-relaxed">
                  {filteredPhotos[lightboxIdx].descMr}
                </p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-amber-400 font-bold block mb-1">English Description:</span>
                <p className="text-slate-300 leading-relaxed">
                  {filteredPhotos[lightboxIdx].descEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
