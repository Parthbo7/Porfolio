import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowUpRight, Cpu, Layers, ShieldAlert } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';
import { InternshipsArchive } from './projects/InternshipsArchive';
import { HackathonsArchive } from './projects/HackathonsArchive';
import { ProjectsDatabase } from './projects/ProjectsDatabase';

type SubViewType = 'menu' | 'internships' | 'hackathons' | 'projects-list';

export const ProjectsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [subView, setSubView] = useState<SubViewType>('menu');
  const [logs, setLogs] = useState<string[]>([
    '> SYSTEM INITIALIZING PROJECTS MODULE...',
    '> NETWORK STABLE // ACTIVE PORT: 07_'
  ]);

  // Handle deep link routing if direct hash links contain sub-paths, or fallback
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (hash === '#projects-list' || hash === '#projects/list') {
        setSubView('projects-list');
      } else if (hash === '#projects/internships') {
        setSubView('internships');
      } else if (hash === '#projects/hackathons') {
        setSubView('hackathons');
      } else {
        setSubView('menu');
      }
    };
    
    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  // Update URL hash for each sub-view to support deep links and back button browser history
  const navigateToView = (view: SubViewType) => {
    playClickTick(1600, 0.05);
    setSubView(view);
    if (view === 'menu') {
      window.location.hash = '#projects';
    } else if (view === 'internships') {
      window.location.hash = '#projects/internships';
    } else if (view === 'hackathons') {
      window.location.hash = '#projects/hackathons';
    } else if (view === 'projects-list') {
      window.location.hash = '#projects-list';
    }
  };

  // Simulated live diagnostic console log stream
  useEffect(() => {
    if (subView !== 'menu') return;
    const systemLogs = [
      'MONITORING BUFFER STREAM 107...',
      'DEPLOYING INTERACTIVE CHANNELS...',
      'SHADERS: GLSL GRID SYNCS NOMINAL.',
      'ZERO-GRAVITY PROTOCOL ENGAGED.',
      'DECRYPTING PORT 07 CORE INTELLIGENCE.',
      'AWAITING INPUT_DECISION MATRIX...'
    ];

    const logInterval = setInterval(() => {
      const randomLog = systemLogs[Math.floor(Math.random() * systemLogs.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, [subView]);

  const rows = [
    { 
      num: '01', 
      title: 'INTERNSHIPS', 
      sub: 'Industrial Experience Archive', 
      desc: 'Professional experience systems, enterprise workflows, certifications, and technical contribution archives.',
      view: 'internships' as SubViewType,
      labels: ['SYSTEM_NODE', 'PROJECT_ARCHIVE'],
      align: 'left',
      widthPercent: 55,
      baseRotate: -1,
      floatShift: -10,
      coordinateLabel: 'X:-52 / Y:092',
      accentClass: 'border-[#00CC52]/20 hover:border-black',
      glowClass: 'bg-[#00CC52]/5',
      icon: Cpu
    },
    { 
      num: '02', 
      title: 'HACKATHONS', 
      sub: 'Competitive Innovation Systems', 
      desc: 'Hackathon builds, rapid problem-solving systems, startup experimentation, and collaborative engineering events.',
      view: 'hackathons' as SubViewType,
      labels: ['INNOVATION_MATRIX', 'BUILD_PROTOCOL'],
      align: 'right',
      widthPercent: 48,
      baseRotate: 1,
      floatShift: -8,
      coordinateLabel: 'X:+46 / Y:214',
      accentClass: 'border-[#D4AF37]/25 hover:border-black',
      glowClass: 'bg-[#D4AF37]/5',
      icon: ShieldAlert
    },
    { 
      num: '03', 
      title: 'PROJECTS', 
      sub: 'Experimental Digital Products', 
      desc: 'AI systems, web platforms, startup ideas, futuristic interfaces, and engineering-focused digital builds.',
      view: 'projects-list' as SubViewType,
      labels: ['EXPERIENCE_DATABASE', 'PORTFOLIO_ROOT'],
      align: 'left',
      widthPercent: 50,
      baseRotate: -0.6,
      floatShift: -9,
      coordinateLabel: 'X:-38 / Y:428',
      accentClass: 'border-[#A8D3C8]/30 hover:border-black',
      glowClass: 'bg-[#A8D3C8]/5',
      icon: Layers
    }
  ];

  if (subView === 'internships') {
    return <InternshipsArchive onBack={() => navigateToView('menu')} />;
  }

  if (subView === 'hackathons') {
    return <HackathonsArchive onBack={() => navigateToView('menu')} />;
  }

  if (subView === 'projects-list') {
    return <ProjectsDatabase onBack={() => navigateToView('menu')} />;
  }

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

      {/* Ambient background glow halos matching ExperiencePage */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute left-[5%] top-[15%] w-72 h-72 rounded-full bg-[#00CC52]/6 blur-[80px]" />
        <div className="absolute right-[10%] top-[45%] w-80 h-80 rounded-full bg-[#D4AF37]/6 blur-[90px]" />
        <div className="absolute left-[20%] top-[75%] w-64 h-64 rounded-full bg-[#A8D3C8]/8 blur-[80px]" />
      </div>

      {/* MASTER CONTAINER AREA */}
      <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* HERO SECTION */}
        <header className="w-full mb-16 lg:mb-24 relative text-left">
          {/* Metadata sticker on right */}
          <motion.div
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[8%] top-1 font-mono text-[8px] sm:text-[10px] text-black/45 border border-black/10 px-3 py-1.5 rounded-sm uppercase bg-white/65 backdrop-blur-sm shadow-[2px_2px_0px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#00CC52] rounded-full animate-pulse" />
              ARCHIVE_OS_NODE_07
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[3%] top-14 hidden md:flex items-center gap-2 font-mono text-[8px] text-black/35 uppercase tracking-[0.2em]"
          >
            <ArrowUpRight size={10} />
            GRID_COORDINATE_STREAM
          </motion.div>

          <div className="inline-flex items-center gap-4 mb-6 opacity-45">
            <div className="h-[1.5px] w-14 bg-gradient-to-r from-[#00CC52] to-transparent" />
            <span className="font-mono text-[8px] text-[#00CC52] font-bold tracking-[0.28em] uppercase">PROJECTS_DIRECTORY</span>
            <div className="h-[1.5px] w-14 bg-gradient-to-l from-[#00CC52] to-transparent" />
          </div>

          <h1 className="font-display font-black text-[14vw] sm:text-[9vw] lg:text-[8vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1 text-left">
            PROJECTS
          </h1>

          <motion.div
            className="mt-6 px-7 sm:px-9 py-4 bg-white/80 border border-black/10 font-sans text-[12px] sm:text-[14px] tracking-wide text-black/70 max-w-4xl shadow-[7px_7px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold backdrop-blur-xl relative overflow-hidden"
            whileHover={{ y: -2 }}
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: 'linear-gradient(90deg, #00CC52 1px, transparent 1px), linear-gradient(#00CC52 1px, transparent 1px)',
              backgroundSize: '15px 15px'
            }} />
            <span className="relative">A modular engineering archive containing internships, hackathons, startup systems, and digital product experiments.</span>
          </motion.div>
        </header>

        {/* ── DRAGGABLE OS BADGES ── */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[
            { label: 'DIRECTORY_ROOT_07', top: '12%', left: '4%', rotate: -5, delay: 0.1, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
            { label: 'OS_DECRYPTOR_ACTIVE', top: '26%', right: '4%', rotate: 4, delay: 0.3, style: 'bg-yellow-300 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' },
            { label: 'SECT_STATUS: NOMINAL', bottom: '22%', left: '5%', rotate: 3, delay: 0.2, style: 'bg-[#00FF66]/5 text-[#00CC52] border-[#00CC52]/30 shadow-[0_0_12px_rgba(0,255,102,0.08)]' },
          ].map((sticker) => (
            <motion.div
              key={sticker.label}
              className={`absolute border px-3 py-1.5 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing transition-colors hidden md:block ${sticker.style}`}
              style={{ top: sticker.top, bottom: sticker.bottom, left: sticker.left, right: sticker.right, rotate: `${sticker.rotate}deg` }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6 + sticker.delay * 8, repeat: Infinity, ease: 'easeInOut', delay: sticker.delay }}
              drag
              dragConstraints={containerRef}
              dragElastic={0.12}
              whileHover={{ scale: 1.06 }}
            >
              <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#00CC52] animate-pulse align-middle" />
              {sticker.label}
            </motion.div>
          ))}
        </div>

        {/* THREE VERTICAL SELECTION ROWS - ASYMMETRICAL ZIG-ZAG */}
        <div className="w-full relative z-20 flex flex-col gap-24 lg:gap-36 pb-32">
          {/* Vertical central timeline line matching ExperiencePage layout */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none hidden lg:block">
            <div className="h-full w-[2px] bg-gradient-to-b from-black/5 via-[#00CC52]/20 to-black/5" />
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#00CC52]/10 blur-2xl"
              animate={{ y: ['0%', '95%', '0%'], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {rows.map((row, idx) => {
            const isLeft = row.align === 'left';
            const alignmentClass = isLeft ? 'justify-start lg:pl-[4vw]' : 'justify-end lg:pr-[4vw]';
            const Icon = row.icon;

            return (
              <div 
                key={row.num}
                className={`w-full flex ${alignmentClass} relative z-10`}
              >
                {/* Timeline dot circle */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 z-20 pointer-events-none hidden lg:block">
                  <motion.span
                    className="w-3.5 h-3.5 rounded-full bg-[#00CC52] border-2 border-white shadow-[0_0_14px_rgba(0,204,82,0.45)]"
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 3 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                {/* Floating coordinate next to timeline dot */}
                <div 
                  className="absolute left-1/2 top-10 z-20 flex items-center gap-2 pointer-events-none hidden lg:flex"
                  style={{
                    transform: isLeft ? 'translate3d(8px, 0, 0)' : 'translate3d(calc(-100% - 8px), 0, 0)'
                  }}
                >
                  <span className="font-mono text-[8px] tracking-[0.2em] text-black/35 uppercase whitespace-nowrap">
                    {row.coordinateLabel}
                  </span>
                </div>

                {/* Card Container */}
                <motion.article
                  className="w-full lg:w-auto"
                  style={{
                    width: containerRef.current ? undefined : `${row.widthPercent}%`
                  }}
                  initial={{
                    opacity: 0,
                    y: 60,
                    filter: 'blur(8px)'
                  }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                >
                  <motion.div
                    onClick={() => navigateToView(row.view)}
                    onMouseEnter={() => {
                      playClickTick(1500, 0.015);
                    }}
                    className={`relative w-full lg:max-w-xl xl:max-w-2xl min-h-[220px] p-6 sm:p-8 bg-white/85 backdrop-blur-2xl border ${row.accentClass} rounded-sm shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500 cursor-pointer interactive-hover select-none overflow-hidden group/card`}
                    animate={{
                      y: [0, row.floatShift, 0],
                      rotate: [row.baseRotate, row.baseRotate + (isLeft ? -0.35 : 0.35), row.baseRotate],
                    }}
                    transition={{
                      y: { duration: 6 + idx * 0.7, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 8 + idx, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.02,
                      rotate: row.baseRotate + (isLeft ? 0.1 : -0.1),
                      boxShadow: '0 30px 60px rgba(0,0,0,0.08), 12px 12px 0px rgba(0,0,0,0.85)'
                    }}
                  >
                    {/* Golden/green grid outline on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.03] pointer-events-none transition-opacity duration-500" style={{
                      backgroundImage: 'linear-gradient(90deg, #00CC52 1px, transparent 1px), linear-gradient(#00CC52 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />

                    {/* Ambient glow inside card */}
                    <div className={`absolute ${isLeft ? '-right-16' : '-left-16'} top-1/2 w-28 h-28 rounded-full ${row.glowClass} blur-[40px] pointer-events-none`} />

                    {/* Draggable-like Node label pill */}
                    <div className={`absolute ${isLeft ? 'right-6' : 'left-6'} -top-7 z-20 flex items-center gap-1.5 bg-white/95 border border-black/10 px-3 py-1 rounded-sm font-mono text-[7px] tracking-[0.2em] text-black/50 uppercase`}>
                      <ArrowUpRight size={8} />
                      {row.labels[0]}
                    </div>

                    {/* Bottom shell label */}
                    <div className={`absolute ${isLeft ? '-right-8' : '-left-8'} bottom-6 flex items-center gap-2 font-mono text-[7px] text-black/30 uppercase tracking-[0.2em]`}>
                      <span className="w-6 h-[1px] bg-black/15" />
                      {row.labels[1]}
                    </div>

                    {/* Big background index number */}
                    <div className="absolute -bottom-8 right-4 font-display font-black text-9xl text-black/[0.02] pointer-events-none group-hover/card:text-[#00CC52]/[0.06] transition-colors leading-none">
                      {row.num}
                    </div>

                    {/* Content Stack */}
                    <div className="relative z-10 flex flex-col text-left">
                      <span className="font-mono text-[8px] text-[#00CC52] font-black tracking-[0.25em] uppercase block mb-1">
                        {row.sub}
                      </span>
                      
                      <div className="flex justify-between items-center w-full mb-4 pt-1 pr-6">
                        <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black leading-none">
                          {row.title}
                        </h2>
                        <Icon className="text-black/35 group-hover/card:text-[#00CC52] transition-colors duration-500" size={18} />
                      </div>

                      <p className="font-sans text-[13px] text-black/65 leading-relaxed font-light pr-4 max-w-lg">
                        {row.desc}
                      </p>
                    </div>
                  </motion.div>
                </motion.article>
              </div>
            );
          })}
        </div>

        {/* BOTTOM TERMINAL LOGS PANEL */}
        <footer className="w-full max-w-4xl mx-auto mt-12 px-2">
          <div className="border border-black/10 bg-white/60 backdrop-blur-md rounded-md p-5 font-mono text-[9px] sm:text-xs text-black/60 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/20 uppercase tracking-[0.25em] px-2 py-0.5">
              ROOT_MONITOR
            </div>
            
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-[#00CC52]" />
              <div className="leading-relaxed text-left">
                <div>{logs[0]}</div>
                <div className="text-[#00CC52] font-bold">{logs[1]}</div>
              </div>
            </div>
            
            <div className="font-bold text-[8px] sm:text-[10px] tracking-widest text-black/30 uppercase">
              SECT_ACCESS: NOMINAL
            </div>
          </div>
        </footer>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-beige-grid {
          background-size: 80px 80px;
          background-image:
            linear-gradient(to right, rgba(212, 175, 55, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.04) 1px, transparent 1px);
        }
      `}} />
    </div>
  );
};
