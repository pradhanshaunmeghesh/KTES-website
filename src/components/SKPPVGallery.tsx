import React, { useState, useEffect } from 'react';
import {
  Camera,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Image as ImageIcon
} from 'lucide-react';

export interface SKPPPhotoCard {
  id: string;
  filename: string;
  url: string;
  fallbackUrl: string;
}

// Dynamically iterate through the entire src/assets/images/SKPP/ directory
const skppAssetModules: Record<string, string> = import.meta.glob(
  '../assets/images/SKPP/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

// Map discovered image modules into structured photo card items
const INITIAL_SKPP_PHOTOS: SKPPPhotoCard[] = Object.entries(skppAssetModules).map(
  ([filePath, assetUrl], index) => {
    const filename = filePath.split('/').pop() || `photo-${index + 1}`;
    return {
      id: `skpp-asset-${index + 1}-${filename}`,
      filename,
      url: typeof assetUrl === 'string' ? assetUrl : (assetUrl as any)?.default || assetUrl,
      fallbackUrl: `/images/SKPP/${encodeURIComponent(filename)}`
    };
  }
);

export default function SKPPVGallery() {
  const [photos] = useState<SKPPPhotoCard[]>(INITIAL_SKPP_PHOTOS);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIdx((prev) => (prev === null || prev === 0 ? photos.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIdx((prev) => (prev === null || prev === photos.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx, photos.length]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIdx(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIdx(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === 0 ? photos.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === photos.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div
      id="skppv-website-fotos-gallery"
      className="space-y-8 text-slate-100 rounded-3xl p-4 sm:p-6 lg:p-8"
      style={{ backgroundColor: '#0a0e1a' }}
    >
      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-3 py-1 rounded-full text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              style={{ backgroundColor: '#ffc107' }}
            >
              <Camera className="w-3.5 h-3.5 text-slate-950" />
              SKPP Media Gallery
            </span>
            <span className="text-xs text-amber-300/90 font-mono bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
              {photos.length} Photos
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
            <span className="block text-amber-400 font-sans text-xl sm:text-2xl font-bold">
              ५) छायाचित्र दालन - अधिकृत फोटो संग्रह
            </span>
            <span className="block text-slate-100 text-lg sm:text-xl font-semibold mt-0.5">
              Sheth Kesharchand Parakh Prathamik Vidyalay, Rajgurunagar
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            विद्यालयातील विविध सांस्कृतिक, क्रीडा व शैक्षणिक उपक्रमांचे अधिकृत छायाचित्र दालन.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
          <Layers className="w-4 h-4 text-amber-400" />
          <span>Click any image to expand in lightbox</span>
        </div>
      </div>

      {/* Clean Responsive Photo Cards Grid (No titles, captions, or headlines below) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6">
        {photos.length === 0 ? (
          <div
            className="col-span-full py-16 text-center text-slate-400 font-sans"
            style={{ backgroundColor: '#1e293b', borderRadius: '1.5rem' }}
          >
            <ImageIcon className="w-10 h-10 mx-auto mb-3 text-slate-500" />
            <p className="text-sm font-semibold text-slate-200">कोणतीही छायाचित्रे उपलब्ध नाहीत.</p>
            <p className="text-xs text-slate-400 mt-1">No images currently found in the folder.</p>
          </div>
        ) : (
          photos.map((photo, index) => (
            <div
              key={photo.id}
              id={`skpp-photo-card-${index}`}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-amber-400/50 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <img
                src={photo.url}
                alt={photo.filename}
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  const rawFallback = `/images/SKPP/${photo.filename}`;
                  const encodedFallback = photo.fallbackUrl;
                  if (target.src !== rawFallback && !target.src.endsWith(rawFallback)) {
                    target.src = rawFallback;
                  } else if (target.src !== encodedFallback && !target.src.endsWith(encodedFallback)) {
                    target.src = encodedFallback;
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Clean Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="p-3 rounded-full bg-slate-950/80 text-amber-300 border border-amber-400/40 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Lightbox Preview Viewer */}
      {lightboxIdx !== null && photos[lightboxIdx] && (
        <div
          id="skppv-lightbox-modal"
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-fadeIn"
          style={{ backgroundColor: 'rgba(10, 14, 26, 0.96)' }}
        >
          {/* Top Bar */}
          <div
            className="flex justify-between items-center z-10 border-b border-white/10 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-amber-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Photo {lightboxIdx + 1} of {photos.length}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline truncate max-w-xs">
                {photos[lightboxIdx].filename}
              </span>
            </div>

            <button
              onClick={handleCloseLightbox}
              className="p-2 border border-white/20 bg-white/5 hover:bg-white/15 rounded-full transition-colors cursor-pointer text-white hover:text-amber-400"
              title="Close (Esc)"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Core Image Display Area */}
          <div className="flex-1 flex items-center justify-between relative max-w-6xl mx-auto w-full py-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="p-3.5 border border-white/20 bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 rounded-full transition-all cursor-pointer z-10 shadow-2xl"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Photo View */}
            <div
              className="flex-1 flex items-center justify-center px-2 sm:px-6 max-h-[82vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIdx].url}
                alt={photos[lightboxIdx].filename}
                onError={(e) => {
                  const target = e.currentTarget;
                  const rawFallback = `/images/SKPP/${photos[lightboxIdx].filename}`;
                  const encodedFallback = photos[lightboxIdx].fallbackUrl;
                  if (target.src !== rawFallback && !target.src.endsWith(rawFallback)) {
                    target.src = rawFallback;
                  } else if (target.src !== encodedFallback && !target.src.endsWith(encodedFallback)) {
                    target.src = encodedFallback;
                  }
                }}
                className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/15"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-3.5 border border-white/20 bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 rounded-full transition-all cursor-pointer z-10 shadow-2xl"
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Bar Indicator */}
          <div
            className="flex items-center justify-center z-10 pt-2 text-xs text-slate-400 font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Use Left / Right arrow keys to navigate, Esc to close</span>
          </div>
        </div>
      )}
    </div>
  );
}
