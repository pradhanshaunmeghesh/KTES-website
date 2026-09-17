import { useState } from 'react';
import { GalleryItem } from '../types';
import { INITIAL_GALLERY } from '../data/mockData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Flame,
  Building,
  Calendar,
  Sparkles,
  Camera,
  Layers
} from 'lucide-react';
import SKPPVGallery from '../components/SKPPVGallery';

interface GalleryViewProps {
  galleryItems?: GalleryItem[];
}

export default function GalleryView({ galleryItems = INITIAL_GALLERY }: GalleryViewProps) {
  const [activeGallerySection, setActiveGallerySection] = useState<'skppv' | 'general'>('skppv');
  const [items, setItems] = useState<GalleryItem[]>(galleryItems);
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'campus' | 'sports' | 'cultural' | 'events'
  >('all');

  // Lightbox States
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Filter items
  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus & Architecture' },
    { id: 'sports', label: 'Sports Tournaments' },
    { id: 'cultural', label: 'Kala Darpan (Arts)' },
    { id: 'events', label: 'News & Achievements' },
  ];

  const handleOpenLightbox = (index: number) => {
    setLightboxIdx(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIdx(null);
  };

  const handlePrev = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="space-y-10 pb-16 pt-6">
      {/* Top Main Section Switcher */}
      <section className="text-center space-y-4">
        <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center justify-center space-x-1">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <span>KTES Visual Archive & Galleries</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
          Photo & Media Gallery
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
          अधिकृत छायाचित्र दालन: वार्षिक स्नेहसंमेलन, क्रीडा स्पर्धा, प्रयोगशाळा व शाळा परिसरातील उपक्रम.
        </p>

        {/* Gallery Archive Mode Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            onClick={() => setActiveGallerySection('skppv')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeGallerySection === 'skppv'
                ? 'bg-amber-400 text-slate-950 shadow-xl ring-2 ring-amber-300 font-extrabold scale-105'
                : 'bg-slate-900 border border-white/10 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>१) शेठ के. पारख प्राथमिक विद्यालय (Website Photos)</span>
          </button>

          <button
            onClick={() => setActiveGallerySection('general')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeGallerySection === 'general'
                ? 'bg-amber-400 text-slate-950 shadow-xl ring-2 ring-amber-300 font-extrabold scale-105'
                : 'bg-slate-900 border border-white/10 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>२) कनिष्ठ महाविद्यालय व परिसर आर्काइव्ह</span>
          </button>
        </div>
      </section>

      {/* Render SKPPV Gallery or General Gallery */}
      {activeGallerySection === 'skppv' ? (
        <div className="animate-fadeIn">
          <SKPPVGallery />
        </div>
      ) : (
        <div className="space-y-8 animate-fadeIn">
          {/* Dynamic Category Switcher for General */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-secondary text-primary-dark shadow-lg ring-2 ring-amber-400'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => handleOpenLightbox(index)}
                className="group bg-white/5 border border-white/10 hover:border-amber-400/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="h-56 w-full relative overflow-hidden bg-slate-900">
                  <img
                    src={item.mediaUrl || undefined}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-secondary/90 backdrop-blur text-primary-dark text-[9px] font-black tracking-wide px-2.5 py-1 rounded-full uppercase z-10">
                    {item.category}
                  </div>
                  {/* Zoom overlay element */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="h-10 w-10 text-white animate-pulse" />
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="font-display font-bold text-white text-sm group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs truncate">
                    {item.description || 'Khed Taluka Education Society activities archives.'}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* Advanced Lightbox Overlay */}
      {lightboxIdx !== null && (
        <div
          id="gallery-lightbox-overlay"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur flex flex-col justify-between p-6 text-white"
        >
          {/* Top close panel */}
          <div className="flex justify-between items-center z-10">
            <span className="font-mono text-xs text-gray-400">
              Image {lightboxIdx + 1} of {filteredItems.length} | Category:{' '}
              <strong className="text-amber-300 uppercase">{filteredItems[lightboxIdx].category}</strong>
            </span>
            <button
              onClick={handleCloseLightbox}
              className="p-2 border border-white/20 bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Core visual layout */}
          <div className="flex-1 flex items-center justify-between relative max-w-5xl mx-auto w-full">
            {/* Left Prev Arrow */}
            <button
              onClick={handlePrev}
              className="p-2 border border-white/20 hover:bg-white/10 rounded-full transition-colors absolute left-0 z-10 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Core Image Display with responsive size limits */}
            <div className="mx-auto max-h-[70vh] flex flex-col justify-center items-center relative z-0">
              <img
                src={filteredItems[lightboxIdx].mediaUrl || undefined}
                alt={filteredItems[lightboxIdx].title}
                className="max-h-[60vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Right Next Arrow */}
            <button
              onClick={handleNext}
              className="p-2 border border-white/20 hover:bg-white/10 rounded-full transition-colors absolute right-0 z-10 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom descriptions */}
          <div className="text-center space-y-2 max-w-xl mx-auto z-10">
            <h3 className="font-display font-extrabold text-white text-lg">
              {filteredItems[lightboxIdx].title}
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              {filteredItems[lightboxIdx].description ||
                'Preserved event records from Khed Taluka Educational Archive database.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
