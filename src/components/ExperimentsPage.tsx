import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRight, Lock, Terminal, Check } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

interface CardData {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  link?: string;
  isLocked?: boolean;
  highlightTag?: { name: string; style: string };
  alignment: 'left' | 'right';
  gridArea: string; // positioning class
}

interface ExperimentsPageProps {
  initialFilter?: 'experiments' | 'archive' | 'system';
}

export const ExperimentsPage = ({ initialFilter = 'experiments' }: ExperimentsPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<'experiments' | 'archive' | 'system'>(initialFilter);
  const [glitchText, setGlitchText] = useState('SECRET VAULT');
  const [logs, setLogs] = useState<string[]>([
    '> EXPERIMENT DATABASE SYNCHRONIZED...',
    '> BUILD: ACTIVE // NETWORK: STABLE // SYSTEM STATUS: NOMINAL_'
  ]);

  // Sync activeFilter with prop changes (e.g. when clicking global nav triggers hash router)
  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [initialFilter]);

  // Glitch effect on Secret Vault title
  useEffect(() => {
    if (activeFilter !== 'experiments') return;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let interval: any;
    
    const startGlitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchText(() => 
          'SECRET VAULT'
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iterations) return 'SECRET VAULT'[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
        iterations += 1 / 3;
        if (iterations >= 'SECRET VAULT'.length) {
          clearInterval(interval);
          setGlitchText('SECRET VAULT');
        }
      }, 30);
    };

    const glitchTrigger = setInterval(startGlitch, 5000);
    return () => {
      clearInterval(glitchTrigger);
      clearInterval(interval);
    };
  }, [activeFilter]);

  // Synchronize bottom terminal status text based on active tab
  useEffect(() => {
    if (activeFilter === 'archive') {
      setLogs([
        '> EXPERIENCE DATABASE SYNCHRONIZED...',
        'COMMUNITY: ACTIVE // NETWORK: STABLE // SYSTEM STATUS: VERIFIED_'
      ]);
    } else {
      setLogs([
        '> EXPERIMENT DATABASE SYNCHRONIZED...',
        'BUILD: ACTIVE // NETWORK: STABLE // SYSTEM STATUS: NOMINAL_'
      ]);
    }
  }, [activeFilter]);

  // Generate live simulated system logs for the terminal overlay
  useEffect(() => {
    const systemLogs = {
      archive: [
        'RETRIEVING CAREER SEGMENTS...',
        'LEADERSHIP MATRIX SYNCHRONIZED.',
        'LOADING GRAPHIC & WEB DESIGN MODULES...',
        'COMPETITIONS AND HACKATHON RECORDS NOMINAL.',
        'COMMUNITY BUILDING NETWORK CHANNELS STANDBY...',
        'DEPLOYING EXPERIENCE TIMELINES...',
      ],
      experiments: [
        'SECURE_PORT_07 ENABLED...',
        'VAULT DECRYPTION CORE READY.',
        'COMPILING SHADERS FOR GRID OVERLAY...',
        'TACTILE AUDIO CHANNELS SYNCHRONIZED.',
        'MEMORY MATRIX DETECTED NOMINAL TEMPERATURE.',
        'GSAP ANIMATION SEQUENCE INITIALIZED.',
        'UI COMPONENT SECTORS STANDBY...'
      ],
      system: [
        'DIAGNOSTICS SEQUENCE ENGAGED...',
        'MONITORING BUFFER STREAM 104...',
        'OS METRIC OVERLAY AT FULL FPS.',
        'TACTILE INTERACTION CHANNELS ON STANDBY...',
        'SHADERS: GLSL GRID SYNCS NOMINAL.'
      ]
    };

    const logInterval = setInterval(() => {
      const activeLogs = systemLogs[activeFilter === 'experiments' ? 'experiments' : activeFilter === 'archive' ? 'archive' : 'system'];
      const randomLog = activeLogs[Math.floor(Math.random() * activeLogs.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, [activeFilter]);

  // Card definitions for experiments filter
  const cards: CardData[] = [
    {
      id: 'exp-1',
      year: '2025 - PRESENT',
      title: 'CAMPUSCONNECT',
      subtitle: 'DIGITAL STUDENT ECOSYSTEM',
      tags: ['FULL STACK', 'COMMUNITY', 'STARTUP'],
      link: 'https://github.com/Parthbo7/CampusConnect',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-1'
    },
    {
      id: 'exp-2',
      year: '2025',
      title: 'AI EXAM EVALUATOR',
      subtitle: 'OCR + NLP SYSTEM',
      tags: ['AI', 'OCR', 'PYTHON'],
      link: 'https://github.com/Parthbo7/AI-Exam-Evaluator',
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-2'
    },
    {
      id: 'exp-3',
      year: '2025',
      title: 'INSIGHTTUBE',
      subtitle: 'YOUTUBE ANALYTICS DASHBOARD',
      tags: ['PYTHON', 'ANALYTICS', 'DASHBOARD'],
      highlightTag: { name: 'ANALYTICS', style: 'bg-[#00FF66] text-black border-[#00FF66] font-extrabold' },
      link: 'https://github.com/Parthbo7/InsightTube',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-3'
    },
    {
      id: 'exp-4',
      year: '2025',
      title: 'SECRET VAULT',
      subtitle: 'PRIVATE INTERACTIVE SYSTEM',
      tags: ['EXPERIMENTAL', 'PRIVATE', 'INTERACTIVE'],
      highlightTag: { name: 'PRIVATE', style: 'bg-black text-white border-black font-extrabold' },
      isLocked: true,
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-4'
    },
    {
      id: 'exp-5',
      year: '2024',
      title: 'CREATIVE DEV LAB',
      subtitle: 'MOTION & UI EXPERIMENTS',
      tags: ['GSAP', 'FRAMER', 'MOTION'],
      highlightTag: { name: 'MOTION', style: 'bg-[#FFB7B2] text-black border-[#FFB7B2] font-extrabold' },
      link: 'https://github.com/Parthbo7/creative-dev-lab',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-5'
    }
  ];

  // Card definitions for experience filter (mockup replica)
  const experienceCards: CardData[] = [
    {
      id: 'experience-1',
      year: '2023 - PRESENT',
      title: 'GDG DESIGN COORDINATOR',
      subtitle: 'GDG ON CAMPUS - MGACOET, NANDED',
      description: 'Spearheading design initiatives, managing creative teams, and orchestrating visual experiences for community tech events.',
      tags: ['LEADERSHIP', 'DESIGN', 'COMMUNITY'],
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-1'
    },
    {
      id: 'experience-2',
      year: '2023',
      title: 'PYTHON DEVELOPER INTERN',
      subtitle: 'INFOSYS SPRINGBOARD',
      description: 'Developed backend systems, automated workflows, and contributed to scalable Python-based microservices.',
      tags: ['PYTHON', 'BACK-END', 'AUTOMATION'],
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-2'
    },
    {
      id: 'experience-3',
      year: '2022 - 2023',
      title: 'TPO LINKEDIN HANDLER',
      subtitle: 'COLLEGE TPO CELL',
      description: 'Managed digital presence, coordinated corporate communications, and amplified placement drive reach.',
      tags: ['COMMUNICATION', 'SOCIAL'],
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-3'
    },
    {
      id: 'experience-4',
      year: '2022',
      title: 'HACKATHON PARTICIPANT',
      subtitle: 'HACKSPECTRA',
      description: 'Built rapid prototype solutions under intense time pressure focusing on accessibility and fast iteration.',
      tags: ['PROTOTYPING', 'HACKATHON'],
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-4'
    },
    {
      id: 'experience-5',
      year: '2021',
      title: 'ENG. MECHANICS TOPPER',
      subtitle: 'ACADEMIC ACHIEVEMENT',
      description: 'Achieved top rank in Engineering Mechanics, demonstrating strong analytical and structural problem-solving skills.',
      tags: ['ANALYTICAL', 'ACADEMICS'],
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-5'
    }
  ];

  const handleCardClick = (card: CardData) => {
    playClickTick(1600, 0.08);
    if (card.isLocked) {
      // Dispatch mysterious vault decryption event
      window.dispatchEvent(new Event('trigger-vault-decryption'));
    } else if (card.link) {
      window.open(card.link, '_blank');
    }
  };

  const handleFilterChange = (filter: 'experiments' | 'archive' | 'system') => {
    playClickTick(1400, 0.05);
    setActiveFilter(filter);
    
    // Update hash for deep link routing
    if (filter === 'experiments') {
      window.location.hash = '#experiments';
    } else if (filter === 'archive') {
      window.location.hash = '#stack';
    }
    
    // Animate grid elements on filter switch
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll('.experiment-card'), 
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
      {/* 1. TOP HEADER LOCAL OVERLAY (PINK ACCENTS) */}
      <div className="flex justify-between items-center w-full z-30 pt-2 border-b border-black/5 pb-4">
        {/* Top Left Stacked Title */}
        <div className="text-left font-mono text-[9px] sm:text-xs tracking-widest text-[#FF3E6C] font-extrabold uppercase">
          <div>CREATIVE DEVELOPER</div>
          <div className="mt-0.5 text-[#FF3E6C]/70">AVAILABLE FULL-TIME</div>
        </div>

        {/* Top Center Sub-Navigation Links */}
        <div className="flex items-center gap-6 sm:gap-8 font-mono text-[10px] sm:text-[11px] tracking-widest font-extrabold">
          {(['experiments', 'archive', 'system'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              onMouseEnter={() => playClickTick(1600, 0.015)}
              className={`relative py-1 transition-all duration-300 uppercase interactive-hover cursor-pointer ${
                activeFilter === filter ? 'text-[#FF3E6C]' : 'text-black/40 hover:text-black'
              }`}
            >
              {filter === 'archive' ? 'archive' : filter}
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF3E6C]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Top Right Spacer to keep center elements centered (interactive menu resides globally in HUD layer) */}
        <div className="w-[45px] sm:w-[60px] hidden sm:block" />
      </div>

      {/* DRAGGABLE FLOATING DECORATIVE STICKERS/BADGES */}
      {activeFilter === 'experiments' && (
        <>
          {/* BUILD_MODE Sticker */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute left-[8%] top-[14%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-yellow-300 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest -rotate-6 select-none"
            whileHover={{ scale: 1.1, rotate: -3 }}
            onHoverStart={() => playClickTick(1500, 0.02)}
          >
            BUILD_MODE
          </motion.div>

          {/* SYSTEM_ACTIVE Sticker */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute right-[10%] top-[34%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-3 select-none"
            whileHover={{ scale: 1.1, rotate: 6 }}
            onHoverStart={() => playClickTick(1500, 0.02)}
          >
            SYSTEM_ACTIVE
          </motion.div>

          {/* Version badge */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute left-[3%] bottom-[30%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-transparent border border-black/20 text-black/50 px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-semibold uppercase tracking-widest rounded-sm rotate-2 select-none"
            whileHover={{ scale: 1.1, border: '1px solid rgba(0,0,0,0.5)' }}
            onHoverStart={() => playClickTick(1400, 0.02)}
          >
            v2.0.2
          </motion.div>

          {/* ACCESS: VERIFIED Badge */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute right-[5%] bottom-[14%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-[#00FF66]/5 text-[#00CC52] border border-[#00CC52]/30 px-3 py-1 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider rounded-sm -rotate-2 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,255,102,0.08)] select-none"
            whileHover={{ scale: 1.1, rotate: 0 }}
            onHoverStart={() => playClickTick(1600, 0.02)}
          >
            <Check size={10} className="stroke-[3]" />
            ACCESS: VERIFIED
          </motion.div>
        </>
      )}

      {/* Floating stickers themed for Experience/Archive page */}
      {activeFilter === 'archive' && (
        <>
          {/* PARTH_OS Badge */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute left-[8%] top-[14%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest -rotate-6 select-none"
            whileHover={{ scale: 1.1, rotate: -3 }}
            onHoverStart={() => playClickTick(1500, 0.02)}
          >
            PARTH_OS
          </motion.div>

          {/* SYS_ACTIVE Sticker */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute left-[22%] top-[12%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-yellow-300 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-2 select-none"
            whileHover={{ scale: 1.1, rotate: 6 }}
            onHoverStart={() => playClickTick(1500, 0.02)}
          >
            SYS_ACTIVE
          </motion.div>

          {/* COMMUNITY_NODE Sticker */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute right-[12%] top-[10%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-indigo-500 text-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-3 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-6 select-none"
            whileHover={{ scale: 1.1, rotate: -3 }}
            onHoverStart={() => playClickTick(1500, 0.02)}
          >
            COMMUNITY_NODE
          </motion.div>

          {/* ACCESS: VERIFIED Badge */}
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="absolute right-[8%] bottom-[12%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-[#00FF66]/5 text-[#00CC52] border border-[#00CC52]/30 px-3 py-1 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider rounded-sm rotate-2 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,255,102,0.08)] select-none"
            whileHover={{ scale: 1.1, rotate: 0 }}
            onHoverStart={() => playClickTick(1600, 0.02)}
          >
            <Check size={10} className="stroke-[3]" />
            ACCESS: VERIFIED
          </motion.div>
        </>
      )}

      {/* 2. MAIN CENTER CONTAINER: SCROLLER OR ABSOLUTE CANVAS */}
      <div className="flex-1 w-full overflow-y-auto no-scrollbar py-6 relative z-20 flex flex-col items-center">
        
        {/* Dynamic content rendering based on active filters */}
        <AnimatePresence mode="wait">
          {(activeFilter === 'experiments' || activeFilter === 'archive') && (
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-6xl flex flex-col items-center"
            >
              {/* OVERSZIED TITLE STACK */}
              <div className="w-full flex flex-col items-center mb-6 relative">
                {/* Sticker marker */}
                <div className="absolute right-[5%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm">
                  PARTH_05
                </div>

                <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-2 text-center">
                  {activeFilter === 'experiments' ? 'EXPERIMENTS' : 'EXPERIENCE'}
                </h1>

                {/* Subtitle Description Pill */}
                <div className="mt-4 px-6 py-2.5 bg-white border border-black/10 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/70 max-w-lg shadow-[4px_4px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold">
                  {activeFilter === 'experiments' 
                    ? 'Creative engineering systems, rapid prototypes, and experimental digital concepts.'
                    : 'LEADERSHIP SYSTEMS, COMMUNITY BUILDING, CREATIVE COORDINATION, AND ENGINEERING EXPERIENCES.'
                  }
                </div>
              </div>

              {/* ASYMMETRICAL EDITORIAL GRID OR RESPONSIVE SCROLL */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-x-6 gap-y-12 lg:gap-y-16 px-4 py-8 relative min-h-[60vh]">
                {(activeFilter === 'experiments' ? cards : experienceCards).map((card) => {
                  return (
                    <motion.div
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      onMouseEnter={() => playClickTick(1500, 0.02)}
                      className={`experiment-card group w-full bg-white border border-[#A8D3C8] rounded-sm p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),3px_3px_0px_rgba(168,211,200,0.2)] hover:border-black transition-all duration-300 cursor-pointer interactive-hover select-none ${card.gridArea}`}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.015,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.04), 6px 6px 0px rgba(0,0,0,0.8)' 
                      }}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 80, damping: 16 }}
                    >
                      {/* Top Row: Year and Diagonal Link Action Indicator */}
                      <div className="flex justify-between items-center w-full mb-6">
                        <span className="font-mono text-[9px] sm:text-[10px] text-[#00CC52] font-extrabold tracking-widest">
                          {card.year}
                        </span>
                        
                        {card.isLocked ? (
                          <Lock size={12} className="text-[#00CC52] group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <ArrowUpRight size={14} className="text-[#00CC52] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        )}
                      </div>

                      {/* Middle Stack: Project Header Title, Subtitle, & Description */}
                      <div className="flex flex-col mb-6">
                        <h3 className={`font-display font-black text-lg sm:text-2xl tracking-tighter text-black uppercase leading-tight ${
                          card.isLocked ? 'blur-[0.5px] hover:blur-none transition-all duration-300' : ''
                        }`}>
                          {card.isLocked ? glitchText : card.title}
                        </h3>
                        <p className="font-mono text-[8px] sm:text-[9px] tracking-wider text-black/40 uppercase mt-0.5">
                          {card.subtitle}
                        </p>

                        {/* Asymmetrical Editorial Card Paragraph Description */}
                        {card.description && (
                          <p className="font-sans text-[11px] sm:text-[12.5px] text-black/75 mt-4 leading-relaxed normal-case font-normal border-t border-black/5 pt-4">
                            {card.description}
                          </p>
                        )}
                      </div>

                      {/* Bottom Row: Tech / Architecture Monospace Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {card.tags.map((tag) => {
                          const isHighlighted = card.highlightTag?.name === tag;
                          let customStyle = 'border border-black/10 text-black/50 bg-black/[0.01]';
                          
                          if (isHighlighted && card.highlightTag) {
                            customStyle = card.highlightTag.style;
                          }

                          return (
                            <span 
                              key={tag} 
                              className={`font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-sm transition-all duration-300 group-hover:border-black/30 ${customStyle}`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
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
                SYSTEM DIAGNOSTIC CONSOLE
              </h2>
              <p className="font-mono text-[10px] text-black/40 uppercase tracking-widest max-w-md text-center leading-relaxed mb-8">
                Live environment diagnostics, telemetry logs, performance metrics, and organic active sub-structures.
              </p>

              {/* Grid of System status widgets */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px] text-black/70 mb-6">
                {[
                  { title: 'AUDIO_CHANNELS', value: '4 TACTILE OSCILLATORS', status: 'SYNCHRONIZED', color: 'text-emerald-600' },
                  { title: 'SHADERS_LOAD', value: 'GRID MESH v2.2', status: 'NOMINAL', color: 'text-emerald-600' },
                  { title: 'REFRESH_RATE', value: '60 FPS STABLE', status: 'ACTIVE', color: 'text-emerald-600' },
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

      {/* 3. BOTTOM TERMINAL & STATUS BAR ROW */}
      <div className="w-full z-20 mt-auto border-t border-black/5 pt-4 pb-2">
        <div className="flex justify-between items-end w-full">
          {/* Monospace Simulated Terminal Readout */}
          <div className="text-left font-mono text-[8px] sm:text-[9px] tracking-wider text-black/50 leading-normal">
            <div>{logs[0]}</div>
            <div className="text-[#FF3E6C] font-semibold">{logs[1]}</div>
          </div>

          {/* access verification logo sticker */}
          <div className="text-right font-mono text-[8px] sm:text-[10px] tracking-widest text-black/30 font-bold uppercase sm:block hidden">
            SEC_STATUS: SECURE_OS_NODE_05
          </div>
        </div>
      </div>
    </div>
  );
};
