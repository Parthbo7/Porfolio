import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';

import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { FloatingStickers } from './components/FloatingStickers';
import { HeroTypography } from './components/HeroTypography';
import { MinimalUI } from './components/MinimalUI';
import { VaultPortal } from './components/VaultPortal';
import { ExperimentsPage } from './components/ExperimentsPage';
import { FuturisticFooter } from './components/FuturisticFooter';
import { ProfilePage } from './components/ProfilePage';
import { ConnectPage } from './components/ConnectPage';
import { TransitionOverlay } from './components/TransitionOverlay';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  
  const [activeSection, setActiveSection] = useState<'hero' | 'experiments' | 'footer' | 'profile' | 'connect'>('hero');
  const [targetSection, setTargetSection] = useState<'hero' | 'experiments' | 'footer' | 'profile' | 'connect' | 'vault'>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitioningRef = useRef(false);
  const activeSectionRef = useRef<'hero' | 'experiments' | 'footer' | 'profile' | 'connect'>('hero');

  useEffect(() => {
    transitioningRef.current = isTransitioning;
    activeSectionRef.current = activeSection;
  }, [isTransitioning, activeSection]);

  const triggerTransition = (section: 'hero' | 'experiments' | 'footer' | 'profile' | 'connect') => {
    if (section === activeSectionRef.current) return;
    if (transitioningRef.current) return;

    setTargetSection(section);
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSection(section);
    }, 1100); // Switch components halfway through

    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  // Exclusive dark vault cinematic load portal
  const triggerVaultTransition = () => {
    if (transitioningRef.current) return;

    setTargetSection('vault');
    setIsTransitioning(true);

    setTimeout(() => {
      setIsVaultOpen(true); // reveal vault portal
    }, 1300); // mount halfway

    setTimeout(() => {
      setIsTransitioning(false);
    }, 2300);
  };

  useEffect(() => {
    // Reveal main interface smoothly on load
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  // Set up mysterious keyboard key sequence listener & custom window event listener
  useEffect(() => {
    let keyBuffer: string[] = [];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keyBuffer.push(e.key.toLowerCase());
      if (keyBuffer.length > 12) {
        keyBuffer.shift();
      }
      
      const keystrokeSequence = keyBuffer.join('');
      if (keystrokeSequence.includes('vault') || keystrokeSequence.includes('secret')) {
        window.dispatchEvent(new Event('trigger-vault-decryption'));
        keyBuffer = []; // reset key logs buffer
      }
    };

    const handleEventTrigger = () => {
      triggerVaultTransition();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('trigger-vault-decryption', handleEventTrigger);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('trigger-vault-decryption', handleEventTrigger);
    };
  }, []);



  // URL Hash Sync for OS state router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#experiments') {
        triggerTransition('experiments');
      } else if (hash === '#stack') {
        triggerTransition('footer');
      } else if (hash === '#about') {
        triggerTransition('profile');
      } else if (hash === '#contact') {
        triggerTransition('connect');
      } else {
        triggerTransition('hero');
      }
    };

    // Initialize state on first load based on direct links
    const initialHash = window.location.hash;
    if (initialHash === '#experiments') {
      setActiveSection('experiments');
      setTargetSection('experiments');
    } else if (initialHash === '#stack') {
      setActiveSection('footer');
      setTargetSection('footer');
    } else if (initialHash === '#about') {
      setActiveSection('profile');
      setTargetSection('profile');
    } else if (initialHash === '#contact') {
      setActiveSection('connect');
      setTargetSection('connect');
    } else {
      setActiveSection('hero');
      setTargetSection('hero');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
      
      {/* Minimalist Editorial Corner Frame Navigation OS Menu (Persistent HUD) */}
      <MinimalUI activeSection={activeSection} />
      
      {/* State-Controlled Fullscreen OS Node Viewport - GPU Optimized */}
      <div 
        ref={containerRef}
        className="w-screen h-screen overflow-hidden relative bg-[#EFE5E0] select-none no-scrollbar transform-gpu"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section 
              key="hero"
              id="landing-scroll-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="landing-scroll-shell w-screen h-screen overflow-y-auto relative scroll-smooth bg-transparent select-none no-scrollbar transform-gpu"
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              {/* SCREEN 1: HERO VIEWPORT PLAYGROUND */}
              <div className="landing-hero-stage w-full h-screen relative flex flex-col justify-center items-center overflow-hidden">
                {/* Centered Editorial Oversized Headline (V3 Stack) */}
                <HeroTypography />
                
                {/* Zero-Gravity Draggable Sticker Fragments (V5 Coordinates) */}
                <FloatingStickers />
                
                {/* Dynamic Drag/Scroll Prompt Indicator - Scrolls down to footer */}
                <div 
                  onClick={() => {
                    const container = document.getElementById('landing-scroll-container');
                    if (container) {
                      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
                    }
                  }}
                  className="landing-scroll-prompt absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-30 select-none cursor-pointer hover:opacity-80 transition-all pointer-events-auto interactive-hover"
                >
                  <span className="font-mono text-[9px] tracking-[0.22em] text-black uppercase font-semibold">
                    SCROLL FOR FOOTER
                  </span>
                  {/* Stylized Computer Mouse wireframe scroll wheel indicator */}
                  <div className="w-4 h-6 border border-black rounded-full flex justify-center p-1">
                    <span className="w-1 h-1 bg-black rounded-full animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Telemetry Divider grid line */}
              <div className="landing-telemetry-divider w-full flex items-center justify-between px-8 sm:px-12 select-none mt-10 mb-4">
                <span className="font-mono text-[7px] sm:text-[8px] text-black/40 tracking-widest">// ROOT_SYSTEM_FLOW_07</span>
                <div className="flex-1 h-[1px] bg-black/10 mx-6 border-dashed border-t" />
                <span className="font-mono text-[7px] sm:text-[8px] text-black/40 tracking-widest">LATENCY: NOMINAL // STATE: ACTIVE</span>
              </div>

              {/* Landing Page Editorial Footer Row (Visible in flow, fully accessible) */}
              <motion.div 
                id="landing-footer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="landing-footer-row w-full grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center py-10 pb-16 px-8 sm:px-12 border-t border-black/5 bg-[#EFE5E0]/40 backdrop-blur-sm z-20 font-mono text-[9px] sm:text-xs text-black/50 select-none gap-3 sm:gap-0"
              >
                <div className="text-center sm:text-left sm:justify-self-start font-bold uppercase tracking-wider">
                  PARTH BULBULE &mdash; 2026
                </div>
                <div className="text-center sm:justify-self-center font-bold uppercase tracking-wider text-[#FF3E6C]">
                  ACTIVE VERIFIED SYSTEM NODE
                </div>
                <div className="text-center sm:text-right sm:justify-self-end font-bold uppercase tracking-wider">
                  BASED IN INDIA
                </div>
              </motion.div>
            </motion.section>
          )}

          {activeSection === 'experiments' && (
            <motion.section 
              key="experiments"
              id="experiments" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-transparent select-none"
            >
              <ExperimentsPage initialFilter="experiments" />
            </motion.section>
          )}

          {activeSection === 'footer' && (
            <motion.section 
              key="footer"
              id="skill-stack"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-[#050505] select-none"
            >
              <FuturisticFooter />
            </motion.section>
          )}

          {activeSection === 'profile' && (
            <motion.section 
              key="profile"
              id="profile" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-transparent select-none"
            >
              <ProfilePage />
            </motion.section>
          )}

          {activeSection === 'connect' && (
            <motion.section 
              key="connect"
              id="connect" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-transparent select-none"
            >
              <ConnectPage />
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Cinematic OS loading/telemetry transition overlay */}
      <TransitionOverlay isVisible={isTransitioning} destination={targetSection} />

      {/* Atmospheric Password-Protected Secret Archive Vault */}
      <VaultPortal isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} />
    </>
  );
}

export default App;
