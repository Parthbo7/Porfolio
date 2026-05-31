import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Lock, Terminal, ShieldAlert, Cpu, HeartPulse } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

interface PlaceholderCard {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  year: string;
  type: 'wireframe' | 'holographic' | 'telemetry' | 'locked' | 'scan';
  gridArea: string;
  alignment: 'left' | 'right';
}

export const ProfilePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<'profile' | 'identity' | 'system'>('profile');
  const [logs, setLogs] = useState<string[]>([
    '> PROFILE DATABASE INITIALIZING...',
    'SECURITY_KEY: GRANTED // LAYER_INDEX: NOMINAL_'
  ]);

  // Live fluctuating mock telemetry stats for the telemetry card
  const [coreTemp, setCoreTemp] = useState(36.5);
  const [synapseRate, setSynapseRate] = useState(88);
  const [authProgress, setAuthProgress] = useState(0);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setCoreTemp((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setSynapseRate((prev) => Math.floor(prev + (Math.random() * 6 - 3)));
    }, 1500);

    const authInterval = setInterval(() => {
      setAuthProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 200);

    return () => {
      clearInterval(tempInterval);
      clearInterval(authInterval);
    };
  }, []);

  // Generate live simulated system logs for the profile terminal overlay
  useEffect(() => {
    const systemLogs = {
      profile: [
        'PARSING BIOMETRIC MATRIX...',
        'ESTABLISHING COGNITIVE NEURAL PIPELINE...',
        'MEM_NODE_01 ACCESSED WITH ROOT PRIVILEGES...',
        'GATHERING INTERACTIVE COORDINATE MATRIX...',
        'HUMAN GRAPH SYNCS READY.'
      ],
      identity: [
        'SYNCHRONIZING VERIFIED CORE REGISTRY...',
        'RESOLVING MULTI-LAYER SOCIAL KEYS...',
        'DECRYPTING BRAND PERSISTENCE DATA...',
        'COGNITIVE WEIGHTS ENGAGED SUCCESSFULLY.',
        'ACCESS MATRIX SIGNED BY LOCAL_OS.'
      ],
      system: [
        'THROTTLING EVENT LISTENERS BY 30%...',
        'enabling hardware acceleration layers...',
        'OPTIMIZING GSAP ANIMATION OVERHEAD...',
        'GPU COMPILING RENDER BUFFER MATRIX...',
        'UI NOMINAL STATUS: STABLE.'
      ]
    };

    const logInterval = setInterval(() => {
      const activeLogs = systemLogs[activeFilter];
      const randomLog = activeLogs[Math.floor(Math.random() * activeLogs.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, [activeFilter]);

  const cards: PlaceholderCard[] = [
    {
      id: 'prof-1',
      num: '01',
      title: 'MEMORY NODE',
      subtitle: 'CORE DATA ARCHIVE',
      year: 'SEC_INDEX_01',
      type: 'wireframe',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-1'
    },
    {
      id: 'prof-2',
      num: '02',
      title: 'PERSONALITY SYSTEM',
      subtitle: 'COGNITIVE ARCHITECTURE',
      year: 'FREQ_LATCH_02',
      type: 'holographic',
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-2'
    },
    {
      id: 'prof-3',
      num: '03',
      title: 'HUMAN TELEMETRY',
      subtitle: 'BIOMETRIC STREAM',
      year: 'TELEMETRY_03',
      type: 'telemetry',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-3'
    },
    {
      id: 'prof-4',
      num: '04',
      title: 'ARCHIVE LOCKED',
      subtitle: 'ENCRYPTED DATA BLOCK',
      year: 'RESTRICTED_04',
      type: 'locked',
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-4'
    },
    {
      id: 'prof-5',
      num: '05',
      title: 'IDENTITY SCAN',
      subtitle: 'BIOMETRIC VERIFICATION',
      year: 'SCAN_SYS_05',
      type: 'scan',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-5'
    }
  ];

  const handleFilterChange = (filter: 'profile' | 'identity' | 'system') => {
    playClickTick(1400, 0.05);
    setActiveFilter(filter);
    
    // Animate grid elements on filter switch
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll('.profile-card'), 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex flex-col justify-between select-none relative"
    >
      {/* 1. TOP HEADER LOCAL OVERLAY */}
      <div className="flex justify-between items-center w-full z-30 pt-2 border-b border-black/5 pb-4">
        {/* Top Left Title */}
        <div className="text-left font-mono text-[9px] sm:text-xs tracking-widest text-[#FF3E6C] font-extrabold uppercase">
          <div>CREATIVE DEVELOPER</div>
          <div className="mt-0.5 text-[#FF3E6C]/70">AVAILABLE FULL-TIME</div>
        </div>

        {/* Top Center Sub-Navigation */}
        <div className="flex items-center gap-6 sm:gap-8 font-mono text-[10px] sm:text-[11px] tracking-widest font-extrabold">
          {(['profile', 'identity', 'system'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              onMouseEnter={() => playClickTick(1600, 0.015)}
              className={`relative py-1 transition-all duration-300 uppercase interactive-hover cursor-pointer ${
                activeFilter === filter ? 'text-[#FF3E6C]' : 'text-black/40 hover:text-black'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeProfileFilterUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF3E6C]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Top Right Spacer to keep center elements centered */}
        <div className="w-[45px] sm:w-[60px] hidden sm:block" />
      </div>

      {/* DRAGGABLE FLOATING STICKERS (PROFILE SPECIALTIES) - OPTIMIZED: Redundancy cut for performance */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {/* PROFILE_NODE Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute left-[8%] top-[13%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-black text-white border border-black px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest -rotate-6 select-none shadow-[2px_2px_0px_rgba(0,255,102,0.3)] will-change-transform"
          whileHover={{ scale: 1.05, rotate: -2 }}
          onHoverStart={() => playClickTick(1500, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          PROFILE_NODE
        </motion.div>

        {/* PARTH_OS Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute left-[24%] top-[11%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-yellow-300 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-2 select-none will-change-transform"
          whileHover={{ scale: 1.05, rotate: 6 }}
          onHoverStart={() => playClickTick(1500, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          PARTH_OS
        </motion.div>

        {/* HUMAN_ARCHIVE Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute right-[12%] top-[12%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-purple-500 text-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-6 select-none will-change-transform"
          whileHover={{ scale: 1.05, rotate: -3 }}
          onHoverStart={() => playClickTick(1500, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          HUMAN_ARCHIVE
        </motion.div>

        {/* ACCESS_GRANTED Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute right-[5%] bottom-[12%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-[#00FF66]/10 text-[#00CC52] border border-[#00CC52]/40 px-3 py-1 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider rounded-sm -rotate-2 select-none will-change-transform"
          whileHover={{ scale: 1.05, rotate: 0 }}
          onHoverStart={() => playClickTick(1600, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          ACCESS_GRANTED
        </motion.div>
      </div>

      {/* 2. MAIN SCROLLER */}
      <div className="flex-1 w-full overflow-y-auto no-scrollbar py-6 relative z-20 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {activeFilter === 'profile' && (
            <motion.div 
              key="profile-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-6xl flex flex-col items-center"
            >
              {/* OVERSZIED TITLE STACK */}
              <div className="w-full flex flex-col items-center mb-6 relative">
                <div className="absolute right-[5%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm">
                  PORTAL_V3
                </div>

                <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-2">
                  PROFILE
                </h1>

                {/* Subtext description */}
                <div className="mt-4 px-6 py-2.5 bg-white border border-black/10 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/70 max-w-lg shadow-[4px_4px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold">
                  Identity systems, personality archives, and human-interface layers initializing...
                </div>
              </div>

              {/* ASYMMETRICAL EDITORIAL GRID FOR PROFILE PLACEHOLDERS */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-x-6 gap-y-12 lg:gap-y-16 px-4 py-8 relative min-h-[60vh]">
                {cards.map((card) => {
                  return (
                    <motion.div
                      key={card.id}
                      onMouseEnter={() => playClickTick(1500, 0.015)}
                      className={`profile-card group w-full bg-white border border-[#A8D3C8] rounded-sm p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),3px_3px_0px_rgba(168,211,200,0.2)] hover:border-black transition-all duration-300 cursor-default select-none will-change-transform ${card.gridArea}`}
                      whileHover={{ 
                        y: -5,
                        scale: 1.01,
                        boxShadow: '0 15px 30px rgba(0,0,0,0.03), 4px 4px 0px rgba(0,0,0,0.8)' 
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 90, damping: 18 }}
                      style={{ transform: 'translate3d(0,0,0)' }}
                    >
                      {/* Top Row */}
                      <div className="flex justify-between items-center w-full mb-4">
                        <span className="font-mono text-[9px] sm:text-[10px] text-[#00CC52] font-extrabold tracking-widest">
                          {card.year}
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/30 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_{card.num}
                        </div>
                      </div>

                      {/* Middle Title Area */}
                      <div className="flex flex-col mb-4">
                        <h3 className="font-display font-black text-lg sm:text-2xl tracking-tighter text-black uppercase leading-tight">
                          {card.title}
                        </h3>
                        <p className="font-mono text-[8px] sm:text-[9px] tracking-wider text-black/40 uppercase mt-0.5">
                          {card.subtitle}
                        </p>
                      </div>

                      {/* 3. CORE PLACEHOLDER CONTENTS (OS-Aesthetic Wireframes) */}
                      <div className="w-full bg-[#fcfcfd] border border-black/[0.04] p-4 rounded-sm min-h-[140px] flex flex-col justify-center items-center relative overflow-hidden font-mono text-[10px] text-black/50">
                        {/* Custom visual rendering based on Card Type */}
                        
                        {/* TYPE 1: WIREFRAME MATRIX PLACEHOLDER */}
                        {card.type === 'wireframe' && (
                          <div className="w-full flex flex-col gap-2.5">
                            {/* Dotted grid dots */}
                            <div className="grid grid-cols-6 gap-2 opacity-25">
                              {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-black rounded-full" />
                              ))}
                            </div>
                            {/* Fake kernel registry statements */}
                            <div className="flex flex-col gap-1 text-[8px] sm:text-[9px] font-mono leading-none opacity-60">
                              <div>&gt; STACK_POINTER: 0x7FFF3B82</div>
                              <div>&gt; THREAD_0: STATUS_STANDBY</div>
                              <div>&gt; SYSTEM_DECRYPT: OK [v3]</div>
                            </div>
                            {/* Small loading progression indicator */}
                            <div className="w-full flex items-center gap-2 mt-1">
                              <div className="flex-1 h-1 bg-black/5 border border-black/10 rounded-full overflow-hidden">
                                <div className="h-full bg-black rounded-full" style={{ width: '45%' }} />
                              </div>
                              <span className="text-[8px] opacity-40">45%</span>
                            </div>
                          </div>
                        )}

                        {/* TYPE 2: ROTATING HOLOGRAPHIC GEOM SVG */}
                        {card.type === 'holographic' && (
                          <div className="flex justify-center items-center relative h-28 w-28">
                            {/* Rotating thin vector border circles */}
                            <motion.svg 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                              className="absolute w-full h-full text-black/15 group-hover:text-[#FF3E6C]/30 transition-colors"
                              viewBox="0 0 100 100"
                            >
                              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3, 3" fill="none" />
                              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            </motion.svg>
                            <motion.svg 
                              animate={{ rotate: -360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                              className="absolute w-20 h-20 text-[#00FF66]/20"
                              viewBox="0 0 100 100"
                            >
                              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10, 5" fill="none" />
                            </motion.svg>
                            <Cpu size={18} className="text-black/30 animate-pulse z-10" />
                          </div>
                        )}

                        {/* TYPE 3: LIVE METRIC TELEMETRY SCHEMATICS */}
                        {card.type === 'telemetry' && (
                          <div className="w-full flex flex-col gap-2.5">
                            <div className="flex items-center gap-1.5 border-b border-black/5 pb-2 font-mono text-[9px] tracking-wider font-extrabold uppercase text-[#FF3E6C]/70">
                              <HeartPulse size={11} className="animate-pulse" />
                              LIVE_OS_STREAM
                            </div>
                            <div className="flex flex-col gap-1.5 font-mono text-[9px] text-black/60">
                              <div className="flex justify-between">
                                <span>CORE_TEMPERATURE:</span>
                                <span className="font-extrabold text-black">{coreTemp}°C</span>
                              </div>
                              <div className="flex justify-between">
                                <span>SYNAPSE_FREQ:</span>
                                <span className="font-extrabold text-black">{synapseRate} Hz</span>
                              </div>
                              <div className="flex justify-between">
                                <span>COGNITIVE_LOAD:</span>
                                <span className="font-extrabold text-black flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                  NOMINAL
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TYPE 4: SECURE LOCKED ARCHIVE */}
                        {card.type === 'locked' && (
                          <div className="flex flex-col items-center justify-center gap-3 w-full py-2">
                            <div className="p-2.5 bg-black/5 border border-black/10 rounded-full text-black/40 group-hover:text-yellow-600 group-hover:border-yellow-500/20 group-hover:bg-yellow-500/5 transition-all duration-300">
                              <Lock size={16} className="stroke-[2.5]" />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-black/30 font-bold uppercase">
                                // AUTH_REQUIRED
                              </span>
                              <span className="font-mono text-[7px] text-yellow-600 font-extrabold uppercase tracking-wider bg-yellow-300/10 border border-yellow-500/20 px-1.5 py-0.5 rounded-sm">
                                [ DECRYPTING: {authProgress}% ]
                              </span>
                            </div>
                          </div>
                        )}

                        {/* TYPE 5: BIOMETRIC IDENTITY SCANNERS */}
                        {card.type === 'scan' && (
                          <div className="w-full h-[100px] border border-black/5 rounded bg-black/[0.01] flex items-center justify-center relative overflow-hidden group">
                            {/* Horizontal sweeping laser line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 opacity-60 shadow-[0_0_8px_#EF4444] pointer-events-none animate-scanline" />
                            {/* Visual face scanner wireframe contour lines */}
                            <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center">
                              <svg className="w-14 h-14 text-black" viewBox="0 0 100 100">
                                <path d="M10,25 C10,10 90,10 90,25" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M10,75 C10,90 90,90 90,75" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3, 3" />
                                <line x1="50" y1="20" x2="50" y2="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2, 2" />
                              </svg>
                            </div>
                            <span className="font-mono text-[8px] tracking-[0.25em] text-red-500 font-bold uppercase z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                              SCANNING ID...
                            </span>
                          </div>
                        )}

                      </div>

                      {/* Bottom Row Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        <span className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm border border-black/5 text-black/40 bg-black/[0.01]">
                          PLACEHOLDER
                        </span>
                        <span className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm border border-black/5 text-black/40 bg-black/[0.01]">
                          SYSTEM_CORE
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeFilter === 'identity' && (
            <motion.div 
              key="identity-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full max-w-4xl px-6 py-12 flex flex-col items-center text-center"
            >
              <Terminal className="text-[#FF3E6C] animate-pulse mb-4" size={32} />
              <h2 className="font-display font-extrabold text-2xl text-black uppercase tracking-tight mb-2">
                IDENTITY LAYER LOCKED
              </h2>
              <p className="font-mono text-[10px] text-black/40 uppercase tracking-widest max-w-md leading-relaxed mb-6">
                Security key encryption verification required. Biometric, professional credentials, and core identity maps stored in restricting sectors.
              </p>
              <div className="w-full bg-[#0a0a0c] border border-black/10 rounded-sm overflow-hidden font-mono text-[9px] text-[#00FF66]/70 shadow-[4px_4px_0px_rgba(0,0,0,0.03)] p-4 max-w-md text-left flex flex-col gap-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] relative">
                <div>&gt; AUTHENTICATING ID_HASH_STREAM...</div>
                <div className="text-yellow-500">&gt; WARNING: PRIVATE DECRYPT REQUISITE.</div>
                <div>&gt; KEYPASS: ******************</div>
                <div className="text-red-500 flex items-center gap-1.5 font-bold mt-2">
                  <ShieldAlert size={12} />
                  IDENTITY SCANNER LOCKED.
                </div>
              </div>
            </motion.div>
          )}

          {activeFilter === 'system' && (
            <motion.div 
              key="system-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full max-w-4xl px-6 py-12 flex flex-col items-center"
            >
              <Terminal className="text-[#00FF66] animate-bounce mb-4" size={32} />
              <h2 className="font-display font-extrabold text-2xl text-black uppercase tracking-tight mb-2">
                SYSTEM DIAGNOSTIC MATRIX
              </h2>
              <p className="font-mono text-[10px] text-black/40 uppercase tracking-widest max-w-md text-center leading-relaxed mb-8">
                Operating system performance indicators, hardware rendering optimizations, and active GPU processing diagnostics.
              </p>

              {/* Status parameters */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px] text-black/70 mb-6">
                {[
                  { title: 'HARDWARE_ACCEL', value: 'will-change LAYERS ACTIVE', status: 'GPU ENFORCED', color: 'text-emerald-600' },
                  { title: 'EVENT_THROTTLE', value: '30% MOUSE EVENTS DEBOUNCED', status: ' NOMINAL', color: 'text-emerald-600' },
                  { title: 'MOTION_OVERHEAD', value: 'NO BLUR OVERLAYS ACTIVATED', status: 'OPTIMIZED', color: 'text-emerald-600' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-black/10 p-4 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.02)]">
                    <div className="opacity-40 mb-1">// {stat.title}</div>
                    <div className="font-extrabold text-xs mb-2">{stat.value}</div>
                    <div className={`font-bold flex items-center gap-1.5 ${stat.color}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
                      {stat.status}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. BOTTOM TERMINAL HUD */}
      <div className="w-full z-20 mt-auto border-t border-black/5 pt-4 pb-2">
        <div className="flex justify-between items-end w-full">
          {/* Monospace simulated terminal logs */}
          <div className="text-left font-mono text-[8px] sm:text-[9px] tracking-wider text-black/50 leading-normal">
            <div>{logs[0]}</div>
            <div className="text-[#FF3E6C] font-semibold">{logs[1]}</div>
          </div>

          <div className="text-right font-mono text-[8px] sm:text-[10px] tracking-widest text-black/30 font-bold uppercase sm:block hidden">
            OS_ID: IDENTITY_SCANNER_NODE_07
          </div>
        </div>
      </div>

    </div>
  );
};
