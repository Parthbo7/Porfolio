import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { X, ArrowUpRight, Github, Linkedin, Mail, Twitter, ChevronRight, Activity, Instagram } from 'lucide-react';

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
  activeSection: 'hero' | 'experiments' | 'footer' | 'profile' | 'connect';
}

export const MinimalUI = ({ activeSection }: MinimalUIProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [time, setTime] = useState('');
  const isExperimentsActive = activeSection !== 'hero';
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

  // Update clock telemetry inside dashboard
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toTimeString().split(' ')[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
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

  const navLinks = [
    { 
      num: '01', 
      name: 'EXPERIMENTS', 
      href: '#experiments',
      tags: ['CAMPUSCONNECT', 'AI IDEAS', 'HACKATHONS', 'UI CONCEPTS', 'WEB EXPERIMENTS', 'CREATIVE CODING']
    },
    { 
      num: '02', 
      name: 'SKILL STACK',
      href: '#stack',
      tags: ['PYTHON', 'REACT', 'THREE.JS', 'TYPESCRIPT', 'GSAP', 'PROMPT ENGINEERING']
    },
    { 
      num: '03', 
      name: 'PROFILE', 
      href: '#about',
      tags: ['ABOUT ME', 'PERSONALITY', 'CREATIVE MINDSET', 'DESIGN VIBE', 'MUSIC & GAMING', 'VISION & PHILOSOPHY']
    },
    { 
      num: '04', 
      name: 'CONNECT', 
      href: '#contact',
      tags: ['LINKEDIN', 'GITHUB', 'TWITTER / X', 'DIRECT EMAIL', 'RESUME', 'COLLAB PORTAL']
    },
  ];

  return (
    <>
      {/* FRAME CONTROLS */}
      {/* TOP LEFT: TITLE OR NAVIGATION NODE */}
      <AnimatePresence mode="wait">
        {isFooterSection ? null : !isExperimentsActive ? (
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
        ) : (
          <motion.button
            key="home-button"
            onClick={() => {
              playTick(900, 0.08);
              window.location.hash = '#';
            }}
            onMouseEnter={() => playTick(1500, 0.01)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-6 left-6 sm:top-10 sm:left-10 z-50 pointer-events-auto flex flex-col items-start gap-1 select-none text-left interactive-hover cursor-pointer"
          >
            {/* Visual futuristic glass capsule button with thin green border */}
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 bg-[#EFE5E0]/80 backdrop-blur-md border border-[#00FF66]/30 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.03),2px_2px_0px_rgba(0,255,102,0.15)] text-black hover:border-[#00FF66] hover:shadow-[0_0_12px_rgba(0,255,102,0.25)] transition-all duration-300 transform-gpu will-change-transform font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              <span className="text-[#00CC52]">←</span> HOME
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse ml-0.5" />
            </motion.div>
            
            {/* Subtle tilted terminal-style metadata */}
            <span className="font-mono text-[7px] text-zinc-400 tracking-widest uppercase pl-1 sm:block hidden select-none">
              EXIT_TO_ROOT // NOM_07
            </span>
          </motion.button>
          )}
      </AnimatePresence>

      {/* TOP CENTER: MONOGRAM SECURE NODE STATUS (HIDDEN VAULT LAUNCHER) */}
      <div 
        onClick={() => {
          playTick(2000, 0.08);
          window.dispatchEvent(new Event('trigger-vault-decryption'));
        }}
        onMouseEnter={() => playTick(1500, 0.01)}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 font-mono text-[8px] sm:text-[10px] tracking-widest text-black/40 flex items-center gap-2 border border-black/10 px-3 py-1 rounded-full bg-black/[0.01] hover:bg-black/[0.04] hover:text-black hover:border-black/30 transition-all duration-300 cursor-pointer interactive-hover ${
          isExperimentsActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span>SYSTEM_OS</span>
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
        <span>[ P / B ]</span>
      </div>

      {/* TOP RIGHT: ME NU TOGGLE */}
      <div className={`fixed top-6 right-6 sm:top-10 sm:right-10 z-50 transition-opacity duration-300 ${
        isFooterSection && !isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}>
        <button
          ref={menuBtnRef}
          onClick={handleMenuClick}
          className={`interactive-hover magnetic flex flex-col items-end gap-1.5 p-3 text-right font-mono text-[10px] sm:text-xs font-bold leading-none tracking-widest transition-all duration-300 rounded-sm active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${
            isExperimentsActive && !isOpen
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
              {isExperimentsActive ? (
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
            className="fixed inset-0 w-screen h-screen bg-[#0a0a0b] text-white z-40 flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none overflow-hidden"
          >
            {/* Animated organic grain overlay inside menu */}
            <div className="grain-overlay opacity-[0.03]" />
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none custom-grid-lines" />

            {/* Glowing moving background blobs */}
            <div className="absolute top-[20%] left-[20%] w-[45vw] h-[45vw] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
            <div className="absolute bottom-[20%] right-[15%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '13s' }} />

            {/* Menu Header / Telemetry console */}
            <div className="flex justify-between items-center z-10 w-full border-b border-white/5 pb-4">
              <span className="font-mono text-[10px] tracking-widest text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                / NAVIGATIONAL_OS_PORTAL
              </span>
              <div className="font-mono text-[10px] tracking-widest text-white/40 hidden sm:flex gap-6">
                <div>SYS_TIME: <span className="text-white font-bold">{time}</span></div>
                <div>SEC_LOAD: <span className="text-emerald-400 font-bold">100% SUCCESS</span></div>
              </div>
            </div>

            {/* Central content layout: 2-column flex */}
            <div className="flex flex-col lg:flex-row gap-12 justify-between items-stretch my-auto z-10 w-full max-w-7xl mx-auto h-[60vh]">
              
              {/* Left Column: Massive links */}
              <div className="flex flex-col gap-3 sm:gap-4 justify-center flex-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.num}
                    href={link.href}
                    onClick={handleMenuClick}
                    onMouseEnter={() => {
                      playTick(1100 + idx * 80, 0.02);
                      setHoveredIndex(idx);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group flex items-baseline gap-4 sm:gap-6 interactive-hover w-fit"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.06 }}
                  >
                    {/* Number block */}
                    <span className="font-mono text-[10px] sm:text-xs text-emerald-400/60 font-semibold group-hover:text-emerald-400 transition-colors">
                      {link.num}
                    </span>
                    
                    {/* Oversized stacked title */}
                    <span className="font-display font-extrabold text-[8vw] sm:text-[6vw] lg:text-[4.5vw] leading-none uppercase tracking-tighter transition-all duration-300 group-hover:text-[#00FF66] group-hover:translate-x-4 flex items-center gap-3 group-hover:drop-shadow-[0_0_15px_rgba(0,255,102,0.4)]">
                      {link.name}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#00FF66] translate-y-2 group-hover:translate-y-0" size={32} />
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Right Column: Dynamic Preview Telemetry Dashboard */}
              <div className="hidden lg:flex flex-col justify-center items-end w-[400px] text-right border-l border-white/5 pl-12 h-full relative">
                <AnimatePresence mode="wait">
                  {hoveredIndex !== null ? (
                    <motion.div
                      key={hoveredIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="flex flex-col gap-6 w-full text-left"
                    >
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                        <Activity className="text-emerald-400 animate-pulse" size={14} />
                        <span className="font-mono text-xs tracking-widest font-bold text-white/50">
                          // SECTOR_PREVIEW_{navLinks[hoveredIndex].num}
                        </span>
                      </div>

                      <div className="font-display font-extrabold text-2xl text-emerald-400 uppercase tracking-tight">
                        {navLinks[hoveredIndex].name} DETECTOR
                      </div>

                      {/* Display Purposed tags inside a sleek glass container */}
                      <div className="flex flex-col gap-3 font-mono text-xs text-white/80 bg-white/[0.02] border border-white/5 p-4 rounded-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md">
                        {navLinks[hoveredIndex].tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ChevronRight size={10} className="text-emerald-400" />
                            <span className="tracking-wider uppercase">{tag}</span>
                          </div>
                        ))}
                      </div>

                      <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
                        TAP LINK TO DRIFT AND COMPILE
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-4 text-left w-full justify-center h-full select-none pointer-events-none"
                    >
                      <div className="font-mono text-xs text-emerald-400/40">// SYSTEM_IDLE</div>
                      <div className="font-display font-extrabold text-3xl uppercase tracking-tighter text-white/20">
                        PARTH_OS V2.26
                      </div>
                      <div className="font-mono text-[10px] text-white/20 leading-relaxed">
                        HOVER OVER NAVIGATION SEGMENTS TO EXPAND PERSONALITY telemetry PANELS AND SCAN SYSTEM CHANNELS.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Menu Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 z-10 w-full border-t border-white/5 pt-4">
              <div className="font-mono text-[10px] sm:text-xs text-white/40 tracking-wider">
                <div>© 2026 PARTH BULBULE</div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  ENGINEERED FOR PREMIUM SCALABILITY
                </div>
              </div>
              
              {/* Animated Social Channels */}
              <div className="flex gap-3">
                {[
                  { icon: <Github size={15} />, href: 'https://github.com/Parthbo7' },
                  { icon: <Linkedin size={15} />, href: 'https://www.linkedin.com/in/parth-bulbule/' },
                  { icon: <Instagram size={15} />, href: 'https://www.instagram.com/parthb_o7' },
                  { icon: <Twitter size={15} />, href: 'https://x.com/BulbuleParth' },
                  { icon: <Mail size={15} />, href: 'mailto:contact@parth.dev' }
                ].map((soc, i) => (
                  <motion.a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => playTick(1300, 0.015)}
                    className="interactive-hover p-2.5 border border-white/10 rounded-full bg-white/[0.02] hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-300"
                    whileHover={{ scale: 1.15, rotate: 12 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {soc.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
