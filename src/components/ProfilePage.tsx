import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Terminal, ShieldAlert, HeartPulse, ArrowLeft, Code, ChevronRight, CheckCircle2 } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

// Custom Animated Counter component for System Stats
const AnimatedCounter = ({ value, suffix = '', duration = 1.2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end); // Ensure exact end value is set
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="font-mono text-3xl sm:text-4xl font-black text-emerald-500">
      {count}{suffix}
    </span>
  );
};

interface ProfilePageProps {
  onBack?: () => void;
}

export const ProfilePage = ({ onBack }: ProfilePageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<'profile' | 'identity' | 'system'>('profile');
  const [logs, setLogs] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const clicksRef = useRef(0);

  // Live fluctuating mock telemetry stats for stats panel
  const [synapseRate, setSynapseRate] = useState(88);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setSynapseRate((prev) => Math.floor(prev + (Math.random() * 6 - 3)));
    }, 1500);

    return () => clearInterval(tempInterval);
  }, []);

  // Sequential boot logs
  useEffect(() => {
    const logTimeline = [
      '[SYSTEM] Identity Archive Loaded',
      '[SYSTEM] Academic Records Synced',
      '[SYSTEM] Skill Matrix Verified',
      '[SYSTEM] Project Database Online',
      '[SYSTEM] Portfolio Status: ACTIVE'
    ];

    setLogs([logTimeline[0]]);

    const timers = logTimeline.slice(1).map((log, idx) => {
      return setTimeout(() => {
        setLogs((prev) => [...prev, log]);
      }, (idx + 1) * 500);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleFilterChange = (filter: 'profile' | 'identity' | 'system') => {
    playClickTick(1400, 0.05);
    setActiveFilter(filter);
    
    // Animate grid elements on filter switch
    if (containerRef.current) {
      setTimeout(() => {
        gsap.fromTo(containerRef.current?.querySelectorAll('.profile-card') || [], 
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
        );
      }, 50);
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
        {onBack ? (
          <motion.button
            onClick={() => {
              playClickTick(1600, 0.05);
              onBack();
            }}
            onMouseEnter={() => playClickTick(1600, 0.02)}
            className="flex items-center gap-3 interactive-hover group backdrop-blur-2xl border border-black/10 bg-white/70 px-5 py-2 rounded-sm transition-all duration-300 text-black/60 hover:text-black hover:border-black/30 pointer-events-auto cursor-pointer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#6B6B6B]" />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-black/70">CLOSE_ARCHIVE</span>
          </motion.button>
        ) : (
          <div className="text-left font-mono text-[9px] sm:text-xs tracking-widest text-[#FF3E6C] font-extrabold uppercase">
            <div>CREATIVE DEVELOPER</div>
            <div className="mt-0.5 text-[#FF3E6C]/70">AVAILABLE FULL-TIME</div>
          </div>
        )}

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

        {/* Top Right Spacer */}
        <div className="w-[45px] sm:w-[60px] hidden sm:block" />
      </div>

      {/* DRAGGABLE FLOATING STICKERS */}
      <div className="absolute inset-0 pointer-events-none z-35 overflow-hidden">
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

        {/* PARTH_OS Sticker (Easter egg trigger) */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute left-[24%] top-[11%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-yellow-300 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-2 select-none will-change-transform"
          whileHover={{ scale: 1.05, rotate: 6 }}
          onHoverStart={() => playClickTick(1500, 0.02)}
          onTap={() => {
            playClickTick(1400, 0.05);
            clicksRef.current += 1;
            if (clicksRef.current >= 5) {
              setShowEasterEgg(true);
              playClickTick(1800, 0.1);
              clicksRef.current = 0;
            }
          }}
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
              className="w-full max-w-6xl flex flex-col items-center px-4"
            >
              
              {/* OVERSZIED TITLE STACK */}
              <div className="w-full flex flex-col items-center mb-10 relative">
                <div className="absolute right-[5%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm">
                  PORTAL_V3
                </div>

                <h1 
                  className="font-display font-black leading-[0.9] tracking-tighter text-black uppercase select-none mt-2"
                  style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
                >
                  PROFILE
                </h1>

                {/* Subtext description */}
                <div className="mt-4 px-6 py-2.5 bg-white/70 backdrop-blur-md border border-black/10 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/70 max-w-lg shadow-[4px_4px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold">
                  Identity systems, academic timelines, and technology vaults loading...
                </div>
              </div>

              {/* CORE OS PROFILE CONTAINER */}
              <div className="w-full flex flex-col gap-10">

                {/* TOP HEADER: PORTRAIT IMAGE & IDENTITY INFO (SECTION 01) */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)]">
                  
                  {/* Left Column: Portrait image with scanningContour frame */}
                  <div className="lg:col-span-5 flex flex-col justify-center items-center relative overflow-hidden group min-h-[320px] bg-black/[0.02] border border-black/5 rounded-sm p-4">
                    {/* Futuristic wireframe contours */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
                      <svg className="w-full h-full text-black" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2, 2" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
                      </svg>
                    </div>

                    {/* Sweeping green laser scanline */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500 opacity-70 shadow-[0_0_8px_#10B981] pointer-events-none animate-scanline z-20" />

                    <div className="w-full h-full max-w-[280px] max-h-[340px] aspect-[3/4] border border-black/10 rounded-sm overflow-hidden relative shadow-[4px_4px_0px_rgba(0,0,0,0.08)] bg-white p-1">
                      <img 
                        src="/assets/og/parth.jpg" 
                        alt="Parth Pandurang Bulbule Portrait"
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 select-none pointer-events-none"
                      />
                      {/* Telemetry labels on corners */}
                      <span className="absolute bottom-2.5 left-2.5 bg-black/95 text-emerald-400 font-mono text-[7px] tracking-widest px-2 py-0.5 rounded-sm uppercase">
                        TARGET: PARTH_B
                      </span>
                    </div>

                    <div className="mt-4 font-mono text-[8px] text-black/40 uppercase tracking-widest">
                      BIOMETRIC SCAN: COMPLETED NOMINAL
                    </div>
                  </div>

                  {/* Right Column: Identity details */}
                  <div className="lg:col-span-7 flex flex-col justify-between text-left">
                    <div>
                      {/* Section Title */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="font-mono text-[9px] text-red-500 font-extrabold tracking-widest uppercase">
                          SECTION 01 — IDENTITY ARCHIVE
                        </span>
                        <div className="h-[1px] w-8 bg-red-500/30" />
                      </div>

                      <h2 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tight mb-6">
                        PARTH PANDURANG BULBULE
                      </h2>

                      <div className="space-y-4 font-sans text-xs text-black/70">
                        <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-black/[0.04] pb-2.5">
                          <span className="font-mono text-[9px] text-black/40 font-bold uppercase sm:pt-0.5">ROLE:</span>
                          <span className="sm:col-span-3 text-black font-extrabold text-[12.5px] tracking-tight leading-tight">
                            B.Tech Information Technology Student
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-black/[0.04] pb-2.5">
                          <span className="font-mono text-[9px] text-black/40 font-bold uppercase sm:pt-0.5">COLLEGE:</span>
                          <span className="sm:col-span-3 text-black font-extrabold text-[12px] tracking-tight leading-tight">
                            MGM's College of Engineering
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-black/[0.04] pb-2.5">
                          <span className="font-mono text-[9px] text-black/40 font-bold uppercase sm:pt-0.5">UNIVERSITY:</span>
                          <span className="sm:col-span-3 text-black font-extrabold leading-tight text-[11.5px]">
                            Dr. Babasaheb Ambedkar Technological University (DBATU)
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-black/[0.04] pb-2.5">
                          <span className="font-mono text-[9px] text-black/40 font-bold uppercase sm:pt-0.5">LOCATION:</span>
                          <span className="sm:col-span-3 text-black font-extrabold">
                            Maharashtra, India
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-black/[0.04] pb-2.5">
                          <span className="font-mono text-[9px] text-black/40 font-bold uppercase sm:pt-0.5">STATUS:</span>
                          <span className="sm:col-span-3 text-emerald-600 font-extrabold">
                            Active Student & Developer
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4">
                          <span className="font-mono text-[9px] text-black/40 font-bold uppercase">FOCUS:</span>
                          <div className="sm:col-span-3 flex flex-wrap gap-x-4 gap-y-1 mt-1 sm:mt-0 font-bold text-black text-[11px]">
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={10} className="text-emerald-500" /> Web Development</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={10} className="text-emerald-500" /> Artificial Intelligence</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={10} className="text-emerald-500" /> UI/UX Design</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={10} className="text-emerald-500" /> Problem Solving</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-black/5 flex justify-between items-center text-mono font-mono text-[8px] text-black/30 uppercase">
                      <span>OS_INDEX_SEC_01</span>
                      <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                        <HeartPulse size={9} className="animate-pulse" />
                        BIOMETRIC FREQ: {synapseRate} HZ
                      </span>
                    </div>
                  </div>

                </div>

                {/* SECTION 02 & 03: ACADEMIC ARCHIVE & SKILL MATRIX */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* SECTION 02: ACADEMIC ARCHIVE */}
                  <motion.div
                    onMouseEnter={() => playClickTick(1500, 0.015)}
                    className="profile-card bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 text-left flex flex-col justify-between"
                    whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0,0,0,0.02), 4px 4px 0px rgba(0,0,0,0.9)' }}
                  >
                    <div>
                      <div className="flex justify-between items-center w-full mb-5">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 02 — ACADEMIC ARCHIVE
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_02
                        </div>
                      </div>

                      <div className="space-y-4 font-mono text-[10.5px] text-black/70 bg-[#fcfcfd] border border-black/[0.04] p-4 rounded-sm">
                        <div className="grid grid-cols-3 border-b border-black/[0.03] pb-2">
                          <span className="text-black/40">PROGRAM:</span>
                          <span className="col-span-2 text-black font-extrabold text-[9.5px] leading-tight">Bachelor of Technology (Information Technology)</span>
                        </div>
                        <div className="grid grid-cols-3 border-b border-black/[0.03] pb-2">
                          <span className="text-black/40">COLLEGE:</span>
                          <span className="col-span-2 text-black font-extrabold">MGM's College of Engineering</span>
                        </div>
                        <div className="grid grid-cols-3 border-b border-black/[0.03] pb-2">
                          <span className="text-black/40">UNIVERSITY:</span>
                          <span className="col-span-2 text-black font-extrabold">DBATU</span>
                        </div>
                        <div className="grid grid-cols-3 border-b border-black/[0.03] pb-2">
                          <span className="text-black/40">CURRENT SEMESTER:</span>
                          <span className="col-span-2 text-[#FF3E6C] font-extrabold">Semester III</span>
                        </div>
                        <div className="grid grid-cols-3 border-b border-black/[0.03] pb-2">
                          <span className="text-black/40">SGPA:</span>
                          <span className="col-span-2 text-emerald-600 font-extrabold">
                            8.31
                          </span>
                        </div>
                        <div className="grid grid-cols-3">
                          <span className="text-black/40">GOAL:</span>
                          <span className="col-span-2 text-black font-extrabold leading-tight text-[9.5px]">Consistent Academic Excellence and Practical Innovation</span>
                        </div>
                      </div>

                      {/* Academic timeline cards */}
                      <div className="mt-6 space-y-3">
                        <span className="font-mono text-[8.5px] text-black/40 font-bold uppercase block tracking-wider">
                          // ACADEMIC_MILESTONES:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="bg-[#fcfcfd] border border-black/5 p-3 rounded-sm text-left flex flex-col justify-between min-h-[110px]">
                            <div>
                              <span className="font-mono text-[8.5px] font-black text-[#FF3E6C] block uppercase tracking-wider">CBSE</span>
                              <span className="font-sans text-[10.5px] font-bold text-black block mt-0.5">Oxford The Global School</span>
                              <div className="mt-2 flex justify-between items-baseline border-t border-black/[0.03] pt-2">
                                <span className="font-mono text-sm font-black text-black">88%</span>
                                <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase">Completed</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-[#fcfcfd] border border-black/5 p-3 rounded-sm text-left flex flex-col justify-between min-h-[110px]">
                            <div>
                              <span className="font-mono text-[8.5px] font-black text-emerald-600 block uppercase tracking-wider">HSC</span>
                              <span className="font-sans text-[10.5px] font-bold text-black block mt-0.5">JNV Junior College</span>
                              <div className="mt-2 flex justify-between items-baseline border-t border-black/[0.03] pt-2">
                                <span className="font-mono text-sm font-black text-black">90%</span>
                                <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase">Completed</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-[#fcfcfd] border border-black/5 p-3 rounded-sm text-left flex flex-col justify-between min-h-[110px]">
                            <div>
                              <span className="font-mono text-[8.5px] font-black text-blue-600 block uppercase tracking-wider">B.Tech IT</span>
                              <span className="font-sans text-[10.5px] font-bold text-black block mt-0.5">MGM's College of Engineering</span>
                              <div className="mt-2 flex justify-between items-baseline border-t border-black/[0.03] pt-2">
                                <span className="font-mono text-[10.5px] font-black text-black">Semester III</span>
                                <span className="font-mono text-[8px] font-bold text-yellow-600 uppercase">In Progress</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* SECTION 03: SKILL MATRIX */}
                  <motion.div
                    onMouseEnter={() => playClickTick(1500, 0.015)}
                    className="profile-card bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 text-left flex flex-col justify-between"
                    whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0,0,0,0.02), 4px 4px 0px rgba(0,0,0,0.9)' }}
                  >
                    <div>
                      <div className="flex justify-between items-center w-full mb-5">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 03 — SKILL MATRIX
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_03
                        </div>
                      </div>

                      {/* Skill Grid as System Scan Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
                          { category: 'Backend', skills: ['Node.js', 'Firebase'] },
                          { category: 'Programming', skills: ['Python', 'C', 'C++'] },
                          { category: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Figma'] }
                        ].map((grp, idx) => (
                          <div key={idx} className="bg-black/95 text-emerald-400 p-3.5 rounded-sm font-mono text-[9px] sm:text-[10px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] flex flex-col justify-between min-h-[120px] relative overflow-hidden group/scan">
                            {/* Sweeping scan bar */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/80 shadow-[0_0_5px_#10B981] pointer-events-none group-hover/scan:animate-scanline" />
                            
                            <div className="flex items-center gap-1.5 font-bold text-red-500 border-b border-white/10 pb-1.5 mb-2 uppercase text-[8.5px] tracking-wider">
                              <Code size={11} />
                              {grp.category}
                            </div>
                            <div className="space-y-1 flex-1 text-left">
                              {grp.skills.map((s) => (
                                <div key={s} className="flex items-center gap-1.5 text-emerald-400/90 hover:text-emerald-300 font-bold transition-colors">
                                  <ChevronRight size={8} className="text-red-500" />
                                  <span>{s}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                </div>

                {/* SECTION 04 & 05: FEATURED PROJECTS & EXPERIENCE LOG */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* SECTION 04: FEATURED PROJECTS (8 columns on desktop) */}
                  <div className="lg:col-span-8 bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center w-full mb-6">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 04 — FEATURED PROJECTS
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_04
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            id: 'P01',
                            title: 'CampusConnect',
                            desc: 'Student networking and resource-sharing platform designed to connect juniors and seniors.',
                            status: 'In Development',
                            color: 'text-yellow-600 bg-yellow-400/10 border-yellow-500/20'
                          },
                          {
                            id: 'P02',
                            title: 'Portfolio OS',
                            desc: 'Interactive futuristic portfolio experience inspired by operating systems.',
                            status: 'Active',
                            color: 'text-emerald-600 bg-emerald-400/10 border-emerald-500/20'
                          },
                          {
                            id: 'P03',
                            title: 'AI Research',
                            desc: 'Exploring the impact of Artificial Intelligence on Human Intelligence.',
                            status: 'Research Phase',
                            color: 'text-purple-600 bg-purple-400/10 border-purple-500/20'
                          }
                        ].map((proj) => (
                          <div 
                            key={proj.id}
                            className="bg-[#fcfcfd] border border-black/5 rounded-sm p-4 text-left flex flex-col justify-between min-h-[170px] hover:border-black transition-all duration-300 shadow-[2px_2px_0px_rgba(0,0,0,0.01)]"
                          >
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-[8px] font-black text-black/40">{proj.id} // SEC_PR</span>
                                <span className={`font-mono text-[7px] font-extrabold uppercase px-1.5 py-0.5 border rounded-sm ${proj.color}`}>
                                  {proj.status}
                                </span>
                              </div>
                              <h4 className="font-display font-black text-base uppercase tracking-tight text-black mb-2 leading-tight">
                                {proj.title}
                              </h4>
                              <p className="font-sans text-[11px] text-black/60 leading-normal font-light">
                                {proj.desc}
                              </p>
                            </div>
                            <span className="font-mono text-[8px] text-[#00CC52] font-bold tracking-widest mt-4 block">
                              METRICS: ARCHIVED
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 05: EXPERIENCE LOG (4 columns on desktop) */}
                  <div className="lg:col-span-4 bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] flex flex-col justify-between text-left">
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex justify-between items-center w-full mb-5">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 05 — EXPERIENCE LOG
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_05
                        </div>
                      </div>

                      <div className="bg-black/95 text-emerald-400 p-4 rounded-sm font-mono text-[9.5px] sm:text-[10px] space-y-2.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] flex-1 flex flex-col justify-center">
                        <div className="text-red-500 font-bold border-b border-white/10 pb-1.5 mb-2 uppercase tracking-widest text-[8.5px] flex items-center gap-1.5">
                          <Terminal size={11} />
                          guest@parth_os:~$ experience --list
                        </div>
                        {[
                          'Hackathon Participant',
                          'Independent Project Developer',
                          'Research Enthusiast',
                          'Team Collaborator'
                        ].map((log, idx) => (
                          <div key={idx} className="flex items-center gap-2 font-bold hover:text-emerald-300 transition-colors">
                            <ChevronRight size={10} className="text-red-500" />
                            <span>• {log}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* SECTION 06 & 07: PERSONALITY MATRIX & TECH STACK VAULT */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  
                  {/* SECTION 06: PERSONALITY MATRIX */}
                  <motion.div
                    onMouseEnter={() => playClickTick(1500, 0.015)}
                    className="profile-card bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 text-left flex flex-col justify-between"
                    whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0,0,0,0.02), 4px 4px 0px rgba(0,0,0,0.9)' }}
                  >
                    <div>
                      <div className="flex justify-between items-center w-full mb-5">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 06 — PERSONALITY MATRIX
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_06
                        </div>
                      </div>

                      <div className="w-full bg-[#fcfcfd] border border-black/[0.04] p-4 rounded-sm font-mono text-[9.5px] text-black/75 space-y-3.5 flex-1 flex flex-col justify-center">
                        {[
                          { name: 'Creative Thinking', val: 98 },
                          { name: 'Problem Solving', val: 94 },
                          { name: 'Leadership', val: 88 },
                          { name: 'Communication', val: 92 },
                          { name: 'Adaptability', val: 90 },
                          { name: 'Continuous Learning', val: 100 }
                        ].map((trait, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-[8.5px] font-bold">
                              <span className="text-black/50">{trait.name}:</span>
                              <span className="text-emerald-600 font-extrabold">{trait.val}%</span>
                            </div>
                            <div className="w-full h-1 bg-black/[0.03] border border-black/5 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-emerald-500 rounded-full" 
                                initial={{ width: 0 }}
                                animate={{ width: `${trait.val}%` }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.1 * idx }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* SECTION 07: TECH STACK VAULT */}
                  <motion.div
                    onMouseEnter={() => playClickTick(1500, 0.015)}
                    className="profile-card bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 text-left flex flex-col justify-between"
                    whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0,0,0,0.02), 4px 4px 0px rgba(0,0,0,0.9)' }}
                  >
                    <div>
                      <div className="flex justify-between items-center w-full mb-5">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 07 — TECH STACK VAULT
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_07
                        </div>
                      </div>

                      <div className="w-full bg-[#fcfcfd] border border-black/[0.04] p-4 rounded-sm flex flex-wrap gap-2.5 flex-1 items-center justify-center min-h-[220px]">
                        {[
                          'React',
                          'JavaScript',
                          'Python',
                          'Firebase',
                          'Node.js',
                          'Tailwind CSS',
                          'Git',
                          'GitHub',
                          'Figma'
                        ].map((tech, idx) => (
                          <motion.span 
                            key={tech} 
                            className="px-3 py-2 bg-white border border-black/5 hover:border-[#FF3E6C] font-mono text-[9.5px] font-bold text-black/75 hover:text-black rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.01)] transition-all cursor-default flex items-center gap-1.5"
                            whileHover={{ 
                              y: -4, 
                              scale: 1.05, 
                              boxShadow: '2px 6px 12px rgba(0,0,0,0.05), 2px 2px 0px rgba(0,0,0,0.8)' 
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.04 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E6C]/65" />
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                </div>

                {/* SECTION 08 & 09: TIMELINE & SYSTEM STATS */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* SECTION 08: TIMELINE (7 columns on desktop) */}
                  <div className="lg:col-span-7 bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center w-full mb-6">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 08 — TIMELINE
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_08
                        </div>
                      </div>

                      <div className="w-full bg-[#fcfcfd] border border-black/[0.04] p-5 rounded-sm font-mono text-[10px] text-black/70 flex-1">
                        <div className="relative border-l border-black/10 pl-5 ml-2 space-y-4 py-1 text-left">
                          {[
                            { year: '2024', event: 'Started B.Tech Information Technology' },
                            { year: '2025', event: 'Built Multiple Academic and Personal Projects' },
                            { year: '2025', event: 'Participated in Hackathons' },
                            { year: '2026', event: 'Developed Portfolio OS' },
                            { year: '2026', event: 'Working on CampusConnect' },
                            { year: 'Future', event: 'Build Impactful Technology Products', highlight: true }
                          ].map((item, idx) => (
                            <div key={idx} className="relative group/time">
                              <div className={`absolute -left-[24.5px] top-1.5 w-2 h-2 rounded-full border bg-white transition-colors duration-300 ${
                                item.highlight 
                                  ? 'border-[#FF3E6C] bg-[#FF3E6C]/10 shadow-[0_0_6px_rgba(255,62,108,0.4)] animate-pulse' 
                                  : 'border-black/30 group-hover/time:border-black'
                              }`} />
                              <div className="flex flex-col sm:flex-row sm:gap-2 leading-relaxed">
                                <span className={`font-black uppercase text-[9.5px] ${item.highlight ? 'text-[#FF3E6C]' : 'text-black/50'}`}>
                                  {item.year} →
                                </span>
                                <span className={`font-bold text-[10.5px] ${item.highlight ? 'text-[#FF3E6C]' : 'text-black/80'}`}>
                                  {item.event}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 09: SYSTEM STATS (5 columns on desktop) */}
                  <div className="lg:col-span-5 bg-white/45 backdrop-blur-xl border border-black/10 rounded-sm p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center w-full mb-6">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase">
                          SECTION 09 — SYSTEM STATS
                        </span>
                        <div className="font-mono text-[9px] tracking-widest text-black/35 font-bold border border-black/5 px-2 py-0.5 rounded-sm">
                          // SEC_09
                        </div>
                      </div>

                      {/* Animated counters grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { title: 'Projects Completed', value: 15, suffix: '+' },
                          { title: 'Technologies Learned', value: 20, suffix: '+' },
                          { title: 'Hackathons Attended', value: 5, suffix: '+' },
                          { title: 'Academic Achievements', value: 4, suffix: '' }
                        ].map((stat, idx) => (
                          <div 
                            key={idx}
                            className="bg-[#fcfcfd] border border-black/5 rounded-sm p-4 text-left flex flex-col justify-between h-[95px] shadow-[1px_1px_0px_rgba(0,0,0,0.01)]"
                          >
                            <span className="font-mono text-[8.5px] font-bold text-black/40 uppercase leading-none mb-2">
                              {stat.title}
                            </span>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

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
                  { title: 'HARDWARE_ACCEL', value: 'will-change LAYERS ACTIVE', status: 'GPU ENFORCED', color: 'text-[#00CC52]' },
                  { title: 'EVENT_THROTTLE', value: '30% MOUSE EVENTS DEBOUNCED', status: 'NOMINAL', color: 'text-[#00CC52]' },
                  { title: 'MOTION_OVERHEAD', value: 'NO BLUR OVERLAYS ACTIVATED', status: 'OPTIMIZED', color: 'text-[#00CC52]' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-black/10 p-4 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.02)] text-left">
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

      {/* 3. SECTION 10: BOTTOM TERMINAL LOGS */}
      <div className="w-full z-20 mt-auto border-t border-black/5 pt-4 pb-2">
        <div className="flex justify-between items-end w-full">
          {/* Monospace simulated terminal logs */}
          <div className="text-left font-mono text-[8.5px] sm:text-[9.5px] tracking-wider leading-relaxed">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className={index === logs.length - 1 ? 'text-[#FF3E6C] font-semibold' : 'text-black/40'}
              >
                {log}
              </div>
            ))}
          </div>

          <div className="text-right font-mono text-[8px] sm:text-[10px] tracking-widest text-[#FF3E6C] font-bold uppercase sm:block hidden">
            OS_ID: IDENTITY_SCANNER_NODE_07
          </div>
        </div>
      </div>

      {/* SECRET EASTER EGG MODAL */}
      <AnimatePresence>
        {showEasterEgg && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md bg-black border border-[#00FF66] rounded-sm p-6 text-left font-mono text-emerald-400 shadow-[0_0_25px_rgba(0,255,102,0.25)] relative"
            >
              <div className="flex justify-between items-center border-b border-[#00FF66]/20 pb-3 mb-4">
                <span className="font-extrabold text-[#00FF66] text-[10px] tracking-widest uppercase">
                  &gt; SYSTEM_DECRYPT: DEV_MODE
                </span>
                <button 
                  onClick={() => {
                    playClickTick(1600, 0.05);
                    setShowEasterEgg(false);
                  }}
                  className="text-emerald-500 hover:text-emerald-300 font-extrabold text-[10px] tracking-wider uppercase border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/10 cursor-pointer"
                >
                  CLOSE
                </button>
              </div>

              <div className="space-y-4 text-xs select-none">
                <div className="text-[#00FF66] font-extrabold uppercase animate-pulse mb-3">
                  DEVELOPER MODE ENABLED
                </div>
                
                <div className="space-y-1">
                  <div className="text-emerald-600 uppercase text-[9px] font-bold">MISSION:</div>
                  <div className="text-[#00FF66]">Create technology that solves meaningful problems.</div>
                </div>

                <div className="space-y-1">
                  <div className="text-emerald-600 uppercase text-[9px] font-bold">CURRENT OBJECTIVE:</div>
                  <div className="text-[#00FF66]">CampusConnect Development</div>
                </div>

                <div className="space-y-1">
                  <div className="text-emerald-600 uppercase text-[9px] font-bold">STATUS:</div>
                  <div className="text-yellow-500 font-extrabold">Always Learning.</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
