import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { NavigationalOSPortal } from './NavigationalOSPortal';

// Dynamic synthesize audio click
const playTick = (freq = 1500, dur = 0.035) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const audioCtx = new AudioContextClass();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + dur);
    
    gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + dur);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + dur + 0.01);
  } catch (e) {}
};

interface MinimalUIProps {
  activeSection: string;
}

export const MinimalUI = ({ activeSection }: MinimalUIProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isProjectsActive = activeSection !== 'hero';
  const isFooterSection = activeSection === 'footer';
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Magnetic Button Effect for Menu button
  useEffect(() => {
    const btn = menuBtnRef.current;
    if (!btn) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
      
      const dx = e.clientX - btnX;
      const dy = e.clientY - btnY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 75) {
        gsap.to(btn, {
          x: dx * 0.35,
          y: dy * 0.35,
          scale: 1.05,
          duration: 0.35,
          ease: "power2.out"
        });
      } else {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)"
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)"
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (btn) btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  useEffect(() => {
    const openNavigationMenu = () => {
      playTick(1800, 0.05);
      setIsOpen(true);
    };

    window.addEventListener('open-navigation-menu', openNavigationMenu);
    return () => window.removeEventListener('open-navigation-menu', openNavigationMenu);
  }, []);

  const handleMenuClick = () => {
    playTick(isOpen ? 900 : 1800, 0.05);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* FRAME CONTROLS */}
      {/* TOP LEFT: TITLE OR NAVIGATION NODE */}
      <AnimatePresence mode="wait">
        {isFooterSection ? null : !isProjectsActive ? (
          <motion.div 
            key="title-hud"
            id="ui-top-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-6 sm:top-10 sm:left-10 text-left font-mono text-[9px] sm:text-xs tracking-widest z-30 select-none pointer-events-none uppercase text-black/60"
          >
            <div>CREATIVE DEVELOPER</div>
            <div className="flex items-center gap-1.5 mt-0.5 text-emerald-600 font-bold">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              AVAILABLE FULL-TIME
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* TOP CENTER: MONOGRAM SECURE NODE STATUS (HIDDEN VAULT LAUNCHER) */}
      <div 
        onClick={() => {
          playTick(2000, 0.08);
          window.dispatchEvent(new Event('trigger-vault-decryption'));
        }}
        onMouseEnter={() => playTick(1500, 0.01)}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 font-mono text-[8px] sm:text-[10px] tracking-widest text-black/40 flex items-center gap-2 border border-black/10 px-3 py-1 rounded-full bg-black/[0.01] hover:bg-black/[0.04] hover:text-black hover:border-black/30 transition-all duration-300 cursor-pointer interactive-hover ${
          isProjectsActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span>SYSTEM_OS</span>
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
        <span>[ P / B ]</span>
      </div>

      {/* TOP RIGHT: MENU TOGGLE */}
      <div className={`fixed top-6 right-6 sm:top-10 sm:right-10 z-50 transition-opacity duration-300 ${
        isFooterSection && !isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}>
        <button
          ref={menuBtnRef}
          onClick={handleMenuClick}
          className={`interactive-hover magnetic flex flex-col items-end gap-1.5 p-3 text-right font-mono text-[10px] sm:text-xs font-bold leading-none tracking-widest transition-all duration-300 rounded-sm active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${
            isProjectsActive && !isOpen
              ? 'bg-transparent text-[#FF3E6C] hover:text-black border border-transparent shadow-none p-0 mt-2 sm:mt-0 font-extrabold text-[12px]'
              : 'bg-black text-white hover:bg-[#00FF66] hover:text-black border border-black/10 shadow-[3px_3px_0px_0px_rgba(0,255,102,0.4)]'
          }`}
        >
          {isOpen ? (
            <span className="flex items-center gap-1">
              CLOSE <X size={12} />
            </span>
          ) : (
            <div className="flex flex-col items-end">
              {isProjectsActive ? (
                <span className="font-extrabold tracking-widest text-xs">MENU</span>
              ) : (
                <>
                  <span>ME</span>
                  <span className="mt-0.5">NU</span>
                </>
              )}
            </div>
          )}
        </button>
      </div>

      {/* BOTTOM LEFT & RIGHT HUD LABELS */}
      <AnimatePresence>
        {activeSection !== 'hero' && !isFooterSection && (
          <>
            {/* BOTTOM LEFT: CREDIT */}
            <motion.div 
              id="ui-bottom-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 text-left font-mono text-[9px] sm:text-xs tracking-widest text-black/50 z-30 select-none pointer-events-none uppercase"
            >
              PARTH BULBULE — 2026
            </motion.div>

            {/* BOTTOM RIGHT: REGION */}
            <motion.div 
              id="ui-bottom-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 right-6 sm:bottom-10 sm:left-10 text-right font-mono text-[9px] sm:text-xs tracking-widest text-black/50 z-30 select-none pointer-events-none uppercase"
            >
              BASED IN INDIA
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FULL-SCREEN NAVIGATION PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            className="fixed inset-0 w-screen h-screen z-40 select-none overflow-hidden"
          >
            <NavigationalOSPortal 
              isOverlay={true} 
              onNavigate={(href) => {
                setIsOpen(false);
                window.history.pushState(null, '', '/');
                window.location.hash = href;
                window.dispatchEvent(new PopStateEvent('popstate'));
              }} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
