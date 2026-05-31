import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { FloatingStickers } from './components/FloatingStickers';
import { HeroTypography } from './components/HeroTypography';
import { MinimalUI } from './components/MinimalUI';
import { FuturisticFooter } from './components/FuturisticFooter';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal main interface elements smoothly on load
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <>
      {/* Visual background layers */}
      <BackgroundCanvas />
      
      {/* Screen Golden Wireframe Grid Overlay */}
      <GridOverlay />
      
      {/* Moving Organic film grain noise */}
      <div className="grain-overlay" />
      
      {/* Smooth morphing custom cursor pointer */}
      <CustomCursor />
      
      {/* Fullscreen scroll snap mandatory container */}
      <div 
        ref={containerRef}
        className="w-screen h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative bg-[#EFE5E0] select-none no-scrollbar"
      >
        
        {/* SCREEN 1: HERO VIEWPORT PLAYGROUND (100vh, snapped) */}
        <section className="w-screen h-screen snap-start snap-always relative overflow-hidden flex flex-col justify-center items-center select-none bg-transparent">
          
          {/* Centered Editorial Oversized Headline (V3 Stack) */}
          <HeroTypography />
          
          {/* Zero-Gravity Draggable Sticker Fragments (V5 Coordinates) */}
          <FloatingStickers />
          
          {/* Minimalist Editorial Corner Frame Navigation OS Menu */}
          <MinimalUI />

          {/* Dynamic Drag Prompt Indicator */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 z-30 select-none pointer-events-none">
            <span className="font-mono text-[9px] tracking-[0.22em] text-black uppercase font-semibold">
              SCROLL FOR ARCHIVE
            </span>
            {/* Stylized Computer Mouse wireframe scroll wheel indicator */}
            <div className="w-4 h-6 border border-black rounded-full flex justify-center p-1">
              <span className="w-1 h-1 bg-black rounded-full animate-bounce" />
            </div>
          </div>

        </section>

        {/* SCREEN 2: THE FUTURISTIC SKILLS MATRIX FOOTER (100vh, snapped) */}
        <FuturisticFooter />

      </div>
    </>
  );
}

export default App;
