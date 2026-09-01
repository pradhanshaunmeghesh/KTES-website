import { useState, useEffect } from 'react';
// @ts-ignore
import splashVideo from '../assets/splash_video.mp4';

const videoSrc = splashVideo;

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smoothly fade out after 3.5 seconds (3500 ms)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3500);

    // Unmount from DOM after transition completes (3500 ms + 700 ms)
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="splash-screen-overlay"
      style={{ backgroundColor: '#030816', zIndex: 9999 }}
      className={`fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={() => setIsFading(true)}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
