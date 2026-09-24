// Source: Google Maps Platform Code Assist
import React, { useState, useCallback } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
  useMap
} from '@vis.gl/react-google-maps';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Layers,
  RotateCcw,
  Sparkles,
  Compass,
  CheckCircle,
  Building2,
  Clock,
  Phone
} from 'lucide-react';

export const KTES_LOCATION = {
  lat: 18.8566125,
  lng: 73.886766
};

export const KTES_PLUS_CODE = 'VV4P+JPR, Rajgurunagar, Maharashtra 410505';
export const KTES_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=18.8566125,73.886766';
export const KTES_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=18.8566125,73.886766';

// Recenter Map Helper Button
function MapCustomControls({ onRecenter, mapType, onToggleMapType }: {
  onRecenter: () => void;
  mapType: 'roadmap' | 'satellite';
  onToggleMapType: () => void;
}) {
  return (
    <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 pointer-events-auto">
      <button
        type="button"
        onClick={onToggleMapType}
        title={`Switch to ${mapType === 'roadmap' ? 'Satellite' : 'Roadmap'} view`}
        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-white/20 shadow-lg backdrop-blur-md flex items-center gap-1.5 transition-all cursor-pointer hover:border-amber-400/50"
      >
        <Layers className="w-3.5 h-3.5 text-amber-400" />
        <span className="capitalize">{mapType === 'roadmap' ? 'Satellite' : 'Map'}</span>
      </button>

      <button
        type="button"
        onClick={onRecenter}
        title="Recenter on KTES Campus"
        className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-amber-300 border border-white/20 shadow-lg backdrop-blur-md flex items-center justify-center transition-all cursor-pointer hover:border-amber-400/50"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

// Inner interactive map canvas
function InteractiveMapCanvas({
  mapType,
  setMapType
}: {
  mapType: 'roadmap' | 'satellite';
  setMapType: React.Dispatch<React.SetStateAction<'roadmap' | 'satellite'>>;
}) {
  const map = useMap();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);

  const handleRecenter = useCallback(() => {
    if (map) {
      map.panTo(KTES_LOCATION);
      map.setZoom(16);
    }
  }, [map]);

  const toggleMapType = useCallback(() => {
    setMapType((prev) => (prev === 'roadmap' ? 'satellite' : 'roadmap'));
  }, [setMapType]);

  return (
    <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner">
      <Map
        mapId="DEMO_MAP_ID"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        defaultCenter={KTES_LOCATION}
        defaultZoom={16}
        mapTypeId={mapType}
        gestureHandling="greedy"
        disableDefaultUI={false}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      >
        <AdvancedMarker
          ref={markerRef}
          position={KTES_LOCATION}
          title="Khed Taluka Education Society (KTES)"
          onClick={() => setInfoOpen(true)}
        >
          <Pin
            background="#d97706"
            borderColor="#78350f"
            glyphColor="#ffffff"
            scale={1.25}
          />
        </AdvancedMarker>

        {infoOpen && marker && (
          <InfoWindow
            anchor={marker}
            onCloseClick={() => setInfoOpen(false)}
            maxWidth={320}
          >
            <div className="p-2 text-slate-900 space-y-2">
              <div className="border-b border-slate-200 pb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-1">
                  Educational Headquarters
                </span>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">
                  खेड तालुका शिक्षण प्रसारक मंडळ
                </h4>
                <p className="text-xs font-semibold text-slate-700">
                  Khed Taluka Education Society (KTES)
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-600">
                <p className="flex items-start gap-1.5">
                  <span className="font-semibold text-slate-800">Plus Code:</span>
                  <span className="font-mono text-amber-800 font-bold">{KTES_PLUS_CODE}</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Rajgurunagar, Khed, Pune District, Maharashtra 410505
                </p>
              </div>

              <div className="pt-1 flex gap-2">
                <a
                  href={KTES_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg text-center flex items-center justify-center gap-1 shadow-sm transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={KTES_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-center flex items-center justify-center transition-colors"
                  title="Open full Google Maps page"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </InfoWindow>
        )}
      </Map>

      {/* Floating control buttons inside map */}
      <MapCustomControls
        onRecenter={handleRecenter}
        mapType={mapType}
        onToggleMapType={toggleMapType}
      />

      {/* Campus GPS Tag Overlay */}
      <div className="absolute bottom-2 left-2 z-10 pointer-events-none bg-slate-950/85 text-slate-200 border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-md text-[10px] font-mono flex items-center gap-1.5 shadow">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>18.8566° N, 73.8868° E</span>
      </div>
    </div>
  );
}

interface GoogleMapsLocationProps {
  className?: string;
  heightClass?: string;
  showHeader?: boolean;
  showDetails?: boolean;
  compact?: boolean;
}

export default function GoogleMapsLocation({
  className = '',
  heightClass = 'h-72 sm:h-80 md:h-[400px]',
  showHeader = true,
  showDetails = true,
  compact = false
}: GoogleMapsLocationProps) {
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  return (
    <div
      id="google-maps-location-section"
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 shadow-2xl text-white ${className}`}
    >
      {showHeader && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
          <div>
            <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase flex items-center gap-1.5 mb-1">
              <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              <span>Interactive Campus Locator</span>
            </span>
            <h3 className="font-display font-black text-white text-lg sm:text-xl flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Khed Taluka Education Society</span>
            </h3>
            <p className="text-slate-300 text-xs mt-0.5">
              खेड तालुका शिक्षण प्रसारक मंडळ, राजगुरूनगर, पुणे
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={KTES_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs shadow transition-all cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>

            <a
              href={KTES_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white font-medium px-3 py-2 rounded-xl text-xs border border-white/10 transition-colors"
              title="Open in Google Maps App"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Maps</span>
            </a>
          </div>
        </div>
      )}

      {/* Map Embed Frame */}
      <div className={`relative w-full ${heightClass} rounded-2xl overflow-hidden`}>
        {apiKey ? (
          <APIProvider apiKey={apiKey}>
            <InteractiveMapCanvas mapType={mapType} setMapType={setMapType} />
          </APIProvider>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/90 rounded-2xl border border-white/10 p-6 text-center space-y-3">
            <MapPin className="w-10 h-10 text-amber-400 animate-bounce" />
            <h4 className="font-bold text-white text-base">Khed Taluka Education Society</h4>
            <p className="text-slate-300 text-xs max-w-md">
              {KTES_PLUS_CODE}
            </p>
            <a
              href={KTES_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Navigate on Google Maps</span>
            </a>
          </div>
        )}
      </div>

      {showDetails && (
        <div className={`mt-5 pt-4 border-t border-white/10 grid grid-cols-1 ${compact ? 'gap-3 text-xs' : 'sm:grid-cols-3 gap-4 text-xs'}`}>
          <div className="flex items-start gap-2.5 text-slate-300">
            <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <strong className="block text-white font-semibold">Address & Plus Code</strong>
              <p className="text-slate-300 font-mono text-[11px] mt-0.5">{KTES_PLUS_CODE}</p>
              <p className="text-slate-400 text-[10px]">District Pune, Maharashtra 410505</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-300">
            <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <strong className="block text-white font-semibold">Campus Office Hours</strong>
              <p className="text-slate-300 text-[11px] mt-0.5">Mon - Sat: 08:30 AM – 05:30 PM</p>
              <p className="text-slate-400 text-[10px]">Visiting hours for parents & students</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-300">
            <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <strong className="block text-white font-semibold">Contact & Reception</strong>
              <p className="text-slate-300 text-[11px] mt-0.5">+91 22 2567-9034 / 2568-9122</p>
              <a
                href={KTES_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 text-[11px] inline-flex items-center gap-1 font-semibold mt-0.5"
              >
                <span>Navigate using Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
