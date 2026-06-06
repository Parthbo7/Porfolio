import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Cpu, Users, Database, Terminal, Check, AlertTriangle, ArrowUpRight, Github, Globe, ExternalLink } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

// Import image assets with exact extensions
import fusion1 from '../../assets/Images/fusion1.jpg';
import fusion2 from '../../assets/Images/fusion2.jpg';
import fusion3 from '../../assets/Images/fusion3.jpg';
import fusion4 from '../../assets/Images/fusion4.jpg';
import fusion5 from '../../assets/Images/fusion5.jpeg';

import spectra1 from '../../assets/Images/spectra1.jpg';
import spectra2 from '../../assets/Images/spectra2.jpg';
import spectra3 from '../../assets/Images/spectra3.jpg';
import spectra4 from '../../assets/Images/spectra4.jpg';
import spectra5 from '../../assets/Images/spectra5.jpeg';

interface HackathonsArchiveProps {
  onBack: () => void;
}

type HackathonSubViewType = 'menu' | 'hackfusion' | 'hackspectra';

export const HackathonsArchive = ({ onBack }: HackathonsArchiveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [subView, setSubView] = useState<HackathonSubViewType>('menu');
  const [logs, setLogs] = useState<string[]>([
    '> REGISTRY_NODES DECRYPTED...',
    '> NET NOMINAL // HACKATHON_OS_ACTIVE_'
  ]);

  // Handle deep link routing if direct path or hash links contain sub-paths
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#projects/hackathons/hackfusion' || path === '/projects/hackathons/hackfusion' || path === '/projects/hackathons/hackfusion/') {
        setSubView('hackfusion');
      } else if (hash === '#projects/hackathons/hackspectra' || path === '/projects/hackathons/hackspectra' || path === '/projects/hackathons/hackspectra/') {
        setSubView('hackspectra');
      } else {
        setSubView('menu');
      }
    };
    
    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    window.addEventListener('popstate', handleHashCheck);
    return () => {
      window.removeEventListener('hashchange', handleHashCheck);
      window.removeEventListener('popstate', handleHashCheck);
    };
  }, []);

  // Update deep URL history or hash for clean sharing
  const navigateToLocalView = (view: HackathonSubViewType) => {
    playClickTick(1600, 0.05);
    setSubView(view);
    if (view === 'menu') {
      window.location.hash = '#projects/hackathons';
      window.history.pushState(null, '', '/projects/hackathons');
    } else if (view === 'hackfusion') {
      window.location.hash = '#projects/hackathons/hackfusion';
      window.history.pushState(null, '', '/projects/hackathons/hackfusion');
    } else if (view === 'hackspectra') {
      window.location.hash = '#projects/hackathons/hackspectra';
      window.history.pushState(null, '', '/projects/hackathons/hackspectra');
    }
  };

  // Live telemetry status logs simulator
  useEffect(() => {
    const telemetryStrings = [
      'SCANNING CONTEXTUAL LLM PIPELINES...',
      'INDEXING RELATIONAL DB TELEMETRIES...',
      'PARSING n8n AGENTIC WORKFLOW MAPS...',
      'REALTIME SLOT DETECTORS: NOMINAL.',
      'DOPARKING METRIC SCHEMAS RESOLVED.',
      'AWAITING OS_DECISION SECTORS...'
    ];

    const logInterval = setInterval(() => {
      const randomLog = telemetryStrings[Math.floor(Math.random() * telemetryStrings.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, []);

  // HackFusion Content Definitions
  const fusionFeatures = [
    "Smart AI-triggered workflow automations",
    "Dynamic data processing",
    "LLM contextual response generation",
    "Real-time backend integration",
    "Scalable database architecture",
    "Regulation-aware pharmacy intelligence"
  ];

  const fusionStack = ["n8n", "Supabase", "Llama", "Google Antigravity", "Claude", "ChatGPT", "Canva"];

  const fusionTeam = [
    { name: "Parth Bulbule", role: "Database Architecture" },
    { name: "Shruti Daware", role: "Frontend / UI" },
    { name: "Sampada Ujlambkar", role: "Research & Presentation" },
    { name: "Sushrut Deshpande", role: "AI Automation & System Integration" }
  ];

  const fusionImages = [
    { img: fusion1, title: "DRAV AI Core Terminal Interface" },
    { img: fusion2, title: "Prescription Scan Analysis Dashboard" },
    { img: fusion3, title: "Llama Context Verification Log" },
    { img: fusion4, title: "Pharmacist Decryption Portal" },
    { img: fusion5, title: "HackFusion Direct Showcase Team Panel" }
  ];

  const fusionTags = ["AI Systems", "Automation", "LLM", "Database", "Pharmacy Tech", "Innovation"];

  // HackSpectra Content Definitions
  const spectraProblems = [
    { title: "Traffic Congestion", desc: "Street clogging from cruisers searching for empty parking nodes." },
    { title: "Fuel Wastage", desc: "Excess CO2 footprints caused by prolonged, circular routes." },
    { title: "Urban Parking Inefficiency", desc: "Mishandled lots with zero public slots occupancy visibility." },
    { title: "User Frustration", desc: "Anxiety spikes due to random, cluttered city parking blocks." }
  ];

  const spectraUserPanel = [
    "Nearby parking discovery",
    "Real-time slot availability",
    "Slot reservation system",
    "Live parking timer",
    "Automatic pricing",
    "Digital ticket generation"
  ];

  const spectraAdminPanel = [
    { title: "Slot Monitoring", desc: "Granular UI layouts showing sensor occupancy mapping." },
    { title: "Real-Time Analytics", desc: "Dynamic charts plotting slot utilization velocities." },
    { title: "Revenue Tracking", desc: "Live cash ledger sync matching time meters." },
    { title: "Auto/Manual Controls", desc: "Manual overrides for maintenance and VIP nodes." }
  ];

  const spectraAutomations = [
    "Automatic slot allocation",
    "Entry/Exit tracking",
    "Dynamic pricing engine",
    "AI-ready infrastructure",
    "Smart space optimization"
  ];

  const spectraStack = [
    { type: "Frontend", tech: "React 19 + Vite 8" },
    { type: "Backend", tech: "Supabase" },
    { type: "Database", tech: "PostgreSQL" },
    { type: "Styling", tech: "Tailwind CSS" },
    { type: "Realtime", tech: "Supabase Realtime" }
  ];

  const spectraImages = [
    { img: spectra1, title: "DoParking Live Analytics HUD" },
    { img: spectra2, title: "Sensor-Assigned Slot Node Matrix" },
    { img: spectra3, title: "Reservation Verification Ticket" },
    { img: spectra4, title: "Space Utilization Heatmap Screen" },
    { img: spectra5, title: "Smart City Parking Physical Installation" }
  ];

  const spectraWorkflow = [
    { step: "Vehicle enters", desc: "Camera detects plate node" },
    { step: "Slot auto-assign", desc: "Optimal coordinate sent to HUD" },
    { step: "Timer starts", desc: "Sensor locks occupancy state" },
    { step: "Exit detected", desc: "Space marked empty realtime" },
    { step: "Price calculated", desc: "Accurate ledger tally completed" },
    { step: "Notification sent", desc: "Ledger transaction updated" }
  ];

  const rows = [
    {
      num: '01',
      title: 'HACKFUSION',
      sub: 'AGENTIC PHARMACY AI SYSTEM',
      desc: 'AI-powered pharmacist intelligence system with automation workflows, prescription verification, and smart backend orchestration.',
      view: 'hackfusion' as HackathonSubViewType,
      labels: ['INNOVATION_NODE', 'DRAV_AI_CORE'],
      align: 'left',
      widthPercent: 55,
      baseRotate: -1,
      floatShift: -10,
      coordinateLabel: 'X:-46 / Y:108',
      accentClass: 'border-[#00CC52]/20 hover:border-black',
      glowClass: 'bg-[#00CC52]/5',
      icon: Cpu
    },
    {
      num: '02',
      title: 'HACKSPECTRA',
      sub: 'SMART CITY PARKING SYSTEM',
      desc: 'Real-time AI parking infrastructure focused on automation, dynamic pricing, and intelligent urban mobility systems.',
      view: 'hackspectra' as HackathonSubViewType,
      labels: ['AI_SYSTEMS', 'DOPARKING_OS'],
      align: 'right',
      widthPercent: 48,
      baseRotate: 1,
      floatShift: -8,
      coordinateLabel: 'X:+58 / Y:236',
      accentClass: 'border-[#D4AF37]/25 hover:border-black',
      glowClass: 'bg-[#D4AF37]/5',
      icon: Database
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-full overflow-y-auto no-scrollbar relative flex flex-col bg-transparent text-black z-10"
    >
      <main className="min-h-screen w-full relative overflow-x-hidden pb-32">
        {/* Spacing Background Grid Pattern matching ProjectsPage */}
        <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

        {/* Ambient background glow halos */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          <div className="absolute left-[5%] top-[15%] w-72 h-72 rounded-full bg-[#00CC52]/6 blur-[80px]" />
          <div className="absolute right-[10%] top-[45%] w-80 h-80 rounded-full bg-[#D4AF37]/6 blur-[90px]" />
        </div>

        {/* FIXED BACK HUD BUTTON */}
        <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
          <motion.button
            onClick={() => {
              playClickTick(1600, 0.05);
              if (subView === 'menu') {
                onBack();
              } else {
                navigateToLocalView('menu');
              }
            }}
            onMouseEnter={() => playClickTick(1600, 0.02)}
            className="flex items-center gap-3 interactive-hover group backdrop-blur-2xl border border-black/10 bg-white/70 px-5 py-2.5 rounded-sm transition-all duration-300 text-black/60 hover:text-black hover:border-black/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#6B6B6B]" />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-black/70">
              {subView === 'menu' ? 'CLOSE_ARCHIVE' : 'BACK_TO_ARCHIVE'}
            </span>
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          
          {/* VIEW 1: MASTER LIGHT SYSTEM MENU */}
          {subView === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10"
            >
              
              {/* HERO SECTION */}
              <header className="w-full mb-16 lg:mb-24 relative text-left">
                {/* Metadata status node sticker */}
                <motion.div
                  animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-[8%] top-1 font-mono text-[8px] sm:text-[10px] text-black/45 border border-black/10 px-3 py-1.5 rounded-sm uppercase bg-white/65 backdrop-blur-sm shadow-[2px_2px_0px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#00CC52] rounded-full animate-pulse" />
                    HACK_OS_NODE_07
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-[3%] top-14 hidden md:flex items-center gap-2 font-mono text-[8px] text-black/35 uppercase tracking-[0.2em]"
                >
                  <ArrowUpRight size={10} />
                  GRID_INNOVATION_FLOW
                </motion.div>

                <div className="inline-flex items-center gap-4 mb-6 opacity-45">
                  <div className="h-[1.5px] w-14 bg-gradient-to-r from-[#00CC52] to-transparent" />
                  <span className="font-mono text-[8px] text-[#00CC52] font-bold tracking-[0.28em] uppercase">HACKATHON_DIRECTORY</span>
                  <div className="h-[1.5px] w-14 bg-gradient-to-l from-[#00CC52] to-transparent" />
                </div>

                <h1 className="font-display font-black text-[14vw] sm:text-[9vw] lg:text-[8vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1 text-left">
                  HACKATHONS
                </h1>

                <motion.div
                  className="mt-6 px-7 sm:px-9 py-4 bg-white/80 border border-black/10 font-sans text-[12px] sm:text-[14px] tracking-wide text-black/70 max-w-4xl shadow-[7px_7px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold backdrop-blur-xl relative overflow-hidden"
                  whileHover={{ y: -2 }}
                >
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(90deg, #00CC52 1px, transparent 1px), linear-gradient(#00CC52 1px, transparent 1px)',
                    backgroundSize: '15px 15px'
                  }} />
                  <span className="relative">An innovation archive containing AI systems, smart-city solutions, automation experiments, and competitive engineering builds.</span>
                </motion.div>
              </header>

              {/* ── DRAGGABLE OS BADGES ── */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {[
                  { label: 'INNOVATION_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
                  { label: 'AI_SYSTEMS', top: '26%', right: '4%', rotate: 4, delay: 0.3, style: 'bg-yellow-300 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' },
                  { label: 'BUILD_ARCHIVE', bottom: '22%', left: '5%', rotate: 3, delay: 0.2, style: 'bg-[#00FF66]/5 text-[#00CC52] border-[#00CC52]/30 shadow-[0_0_12px_rgba(0,255,102,0.08)]' },
                  { label: 'COMPETITIVE_ENGINEERING', bottom: '12%', right: '8%', rotate: -3, delay: 0.4, style: 'bg-white text-black border-black/15 shadow-[3px_3px_0px_rgba(0,0,0,0.04)]' }
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

              {/* TWO LARGE ASYMMETRICAL FLOATING ARCHIVE CARDS (SAME PROPORTIONS AS PROJECTS SECTIONS) */}
              <div className="w-full relative z-20 flex flex-col gap-24 lg:gap-36 pb-32">
                {/* Vertical timeline connector */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none hidden lg:block">
                  <div className="h-full w-[2px] bg-gradient-to-b from-black/5 via-[#00CC52]/20 to-black/5" />
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
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 top-10 -translate-x-1/2 z-20 pointer-events-none hidden lg:block">
                        <motion.span
                          className="w-3.5 h-3.5 rounded-full bg-[#00CC52] border-2 border-white shadow-[0_0_14px_rgba(0,204,82,0.45)]"
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{ duration: 3 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </div>

                      {/* Timeline Coordinate Label */}
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
                          onClick={() => navigateToLocalView(row.view)}
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
                          {/* Ambient grid overlay */}
                          <div className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.03] pointer-events-none transition-opacity duration-500" style={{
                            backgroundImage: 'linear-gradient(90deg, #00CC52 1px, transparent 1px), linear-gradient(#00CC52 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }} />

                          {/* Ambient glow inside card */}
                          <div className={`absolute ${isLeft ? '-right-16' : '-left-16'} top-1/2 w-28 h-28 rounded-full ${row.glowClass} blur-[40px] pointer-events-none`} />

                          {/* Sticker-like Node label */}
                          <div className={`absolute ${isLeft ? 'right-6' : 'left-6'} -top-7 z-20 flex items-center gap-1.5 bg-white/95 border border-black/10 px-3 py-1 rounded-sm font-mono text-[7px] tracking-[0.2em] text-black/50 uppercase`}>
                            <ArrowUpRight size={8} />
                            {row.labels[0]}
                          </div>

                          {/* Bottom metadata tag */}
                          <div className={`absolute ${isLeft ? '-right-8' : '-left-8'} bottom-6 flex items-center gap-2 font-mono text-[7px] text-black/30 uppercase tracking-[0.2em]`}>
                            <span className="w-6 h-[1px] bg-black/15" />
                            {row.labels[1]}
                          </div>

                          {/* Background index number */}
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

                            <p className="font-sans text-[13px] text-black/65 leading-relaxed font-light pr-4 max-w-lg mb-6">
                              {row.desc}
                            </p>

                            <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#00CC52] tracking-wider font-extrabold group-hover/card:translate-x-1.5 transition-transform duration-300">
                              OPEN ARCHIVE <span className="text-[#00CC52] font-bold">&rarr;</span>
                            </div>
                          </div>
                        </motion.div>
                      </motion.article>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          )}

          {/* VIEW 2: HACKFUSION (LIGHT CINEMATIC SPEC) */}
          {subView === 'hackfusion' && (
            <motion.div
              key="hackfusion"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
              className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10"
            >
              {/* HERO SECTION */}
              <header className="mb-20 flex flex-col items-center text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 mb-6 opacity-75"
                >
                  <div className="h-[1px] w-8 bg-[#00CC52]/40" />
                  <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">HACKFUSION // SYSTEM_NODE</span>
                  <div className="h-[1px] w-8 bg-[#00CC52]/40" />
                </motion.div>

                <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-4 tracking-tighter text-black max-w-4xl">
                  DRAV AI
                </h1>
                <h3 className="font-mono text-xs sm:text-sm text-[#00CC52] font-bold tracking-widest uppercase mb-8">
                  Agentic Pharmacist & Pharmacy Intelligence System
                </h3>
                <p className="font-sans text-sm sm:text-base leading-relaxed max-w-3xl text-zinc-700 font-normal px-4">
                  Built an intelligent pharmacy intelligence platform focused on prescription verification, dosage validation, drug safety analysis, expiry monitoring, and real-time inventory intelligence while maintaining pharmacist-supervised decision systems.
                </p>
              </header>

              {/* FEATURE GRID */}
              <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
                <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                  <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                  <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">INTELLIGENT_WORKFLOWS</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fusionFeatures.map((feat, idx) => (
                    <motion.div
                      key={feat}
                      whileHover={{ y: -8, border: '1px solid rgba(0, 204, 82, 0.3)' }}
                      className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm text-left flex flex-col gap-4 relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] transition-colors group"
                    >
                      <Cpu className="text-[#00CC52] group-hover:scale-110 transition-transform" size={20} />
                      <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">{feat}</p>
                      <div className="absolute right-4 top-4 font-mono text-[7px] text-black/20">
                        [SECTOR_0{idx + 1}]
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* TECH STACK & CONTRIBUTORS */}
              <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* TECH STACK (8 COLS) */}
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                      <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                      <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">CORE_ENGINEERING_STACK</span>
                    </div>

                    <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative overflow-hidden flex flex-wrap gap-3 shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                      <div className="absolute top-0 right-0 font-mono text-[6px] text-black/35 uppercase tracking-[0.25em] px-2 py-0.5">
                        ENGINE_NODE
                      </div>
                      {fusionStack.map(node => (
                        <span 
                          key={node} 
                          className="font-mono text-[10px] text-black/70 border border-black/10 bg-white px-3.5 py-1.5 rounded-full hover:border-[#00CC52] hover:text-[#00FF66] transition-colors"
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TEAM (4 COLS) */}
                  <div className="lg:col-span-4">
                    <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                      <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                      <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">CREATOR_TEAM</span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {fusionTeam.map(member => (
                        <div key={member.name} className="p-4 border border-black/10 bg-white/80 rounded-sm flex items-center gap-3 relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                          <Users size={16} className="text-[#00CC52]" />
                          <div>
                            <h4 className="font-mono text-[10px] font-bold text-black uppercase">{member.name}</h4>
                            <span className="font-sans text-[9px] text-black/45 uppercase tracking-widest">{member.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              {/* IMAGE GALLERY */}
              <section className="w-full max-w-5xl mx-auto mb-24 px-2 text-center relative z-10">
                <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                  <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                  <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">IMAGE_LEDGER</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
                  SYSTEM SCREEN CAPTURES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  {fusionImages.map((slide, idx) => {
                    const colSpan = idx === 0 ? "md:col-span-7" : idx === 1 ? "md:col-span-5" : idx === 2 ? "md:col-span-5" : idx === 3 ? "md:col-span-7" : "md:col-span-12";
                    const sizeClass = idx === 4 ? "h-[300px] sm:h-[450px]" : "h-[250px] sm:h-[350px]";

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -8 }}
                        className={`${colSpan} flex flex-col gap-3 group`}
                      >
                        <div className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                          <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[12px] bg-black/[0.02]">
                            <img 
                              src={slide.img} 
                              alt={slide.title}
                              className={`w-full ${sizeClass} object-cover transition-transform duration-700 group-hover:scale-103`}
                            />
                          </div>
                        </div>
                        <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-black/45 block text-center font-bold mt-2">
                          {slide.title}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              {/* BOTTOM PANEL & ACHIEVEMENT */}
              <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
                <div className="relative border border-black/10 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/85 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5 bg-white border-l border-b border-black/10">
                    RESOLVED_METRICS
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                      ACHIEVEMENT_RESOLUTION
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-4">
                      “Built systems that think, respond, and adapt.”
                    </h3>
                    <p className="font-sans text-[13.5px] text-neutral-700 leading-relaxed font-light max-w-xl">
                      Represented MGMCOE Nanded during the regional engineering challenges, showcasing Drav AI as a blueprint for pharmacist-supervised intelligent medicine automation.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 max-w-xs justify-start md:justify-end">
                    {fusionTags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] text-[#00CC52] font-bold border border-[#00CC52]/20 bg-[#00FF66]/5 px-3 py-1.5 rounded-sm uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* VIEW 3: HACKSPECTRA (LIGHT CINEMATIC SPEC) */}
          {subView === 'hackspectra' && (
            <motion.div
              key="hackspectra"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
              className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10"
            >
              {/* HERO SECTION */}
              <header className="mb-20 flex flex-col items-center text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 mb-6 opacity-75"
                >
                  <div className="h-[1px] w-8 bg-[#00CC52]/40" />
                  <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">HACKSPECTRA // SYSTEM_NODE</span>
                  <div className="h-[1px] w-8 bg-[#00CC52]/40" />
                </motion.div>

                <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-4 tracking-tighter text-black">
                  DOPARKING
                </h1>
                <h3 className="font-mono text-xs sm:text-sm text-[#00CC52] font-bold tracking-widest uppercase mb-8">
                  Smart AI-Based Parking Management System
                </h3>
                <p className="font-sans text-sm sm:text-base leading-relaxed max-w-3xl text-zinc-700 font-normal px-4">
                  Developed a real-time intelligent parking ecosystem focused on automation, smart city innovation, dynamic slot allocation, and scalable parking intelligence infrastructure.
                </p>
              </header>

              {/* PROBLEM STATEMENTS */}
              <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
                <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                  <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                  <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">PROBLEM_STATEMENTS</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
                  URBAN OBSTACLES IDENTIFIED
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {spectraProblems.map((prob, idx) => (
                    <div 
                      key={prob.title} 
                      className="p-6 border border-black/10 bg-white/80 rounded-sm flex flex-col gap-3 relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-colors"
                    >
                      <AlertTriangle className="text-red-500 animate-pulse animate-duration-1000" size={18} />
                      <h4 className="font-mono text-[10px] font-bold text-black uppercase">{prob.title}</h4>
                      <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">{prob.desc}</p>
                      <div className="absolute right-4 top-4 font-mono text-[7px] text-black/20">
                        [ERR_0{idx + 1}]
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PANEL SCHEMAS */}
              <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* USER PANEL MODULE (6 COLS) */}
                  <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                    <div className="absolute top-0 right-0 font-mono text-[6px] text-[#00CC52] uppercase tracking-[0.25em] px-2 py-0.5 bg-[#00FF66]/5 border-l border-b border-black/10">
                      USER_VIEWPORT
                    </div>
                    
                    <span className="font-mono text-[10px] text-[#00CC52] tracking-wider uppercase font-bold mb-4 block">// DRIVER_HUD_CAPABILITIES</span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {spectraUserPanel.map((obj, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check size={12} className="text-[#00CC52] shrink-0" />
                          <span className="font-sans text-xs text-neutral-600 leading-relaxed font-light">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ADMIN PANEL MODULE (6 COLS) */}
                  <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                    <div className="absolute top-0 right-0 font-mono text-[6px] text-yellow-500 uppercase tracking-[0.25em] px-2 py-0.5 bg-yellow-400/5 border-l border-b border-black/10">
                      ADMIN_CONSOLE
                    </div>
                    
                    <span className="font-mono text-[10px] text-yellow-600 tracking-wider uppercase font-bold mb-4 block">// MONITOR_INTERFACE</span>
                    
                    <div className="flex flex-col gap-4 mt-6">
                      {spectraAdminPanel.map(mod => (
                        <div key={mod.title} className="flex items-start gap-3 border-b border-black/5 pb-3 last:border-0 last:pb-0">
                          <Database size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                          <div>
                            <h4 className="font-mono text-[9px] font-bold text-black uppercase">{mod.title}</h4>
                            <p className="font-sans text-[11px] text-neutral-600 font-light mt-0.5">{mod.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              {/* AUTOMATIONS & TECH STACK */}
              <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* AUTOMATIONS (6 COLS) */}
                  <div className="lg:col-span-6">
                    <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                      <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                      <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">SMART_AUTOMATION_ROBOTICS</span>
                    </div>

                    <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative overflow-hidden shadow-[10px_10px_0px_rgba(168,211,200,0.12)] flex flex-col gap-4">
                      {spectraAutomations.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-[#00CC52] rounded-full animate-pulse shrink-0" />
                          <span className="font-mono text-[10px] text-zinc-700 font-bold uppercase">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TECH STACK (6 COLS) */}
                  <div className="lg:col-span-6">
                    <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                      <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                      <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">SYSTEM_STACK_MATRIX</span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {spectraStack.map(stack => (
                        <div key={stack.type} className="p-4 border border-black/10 bg-white/80 rounded-sm flex justify-between items-center relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{stack.type}</span>
                          <span className="font-mono text-[10px] font-bold text-[#00CC52] uppercase">{stack.tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              {/* UI/UX GLASSMORPHISM PREVIEWS */}
              <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
                <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                  <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                  <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">INTERFACE_SPECIFICATION</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
                  UI/UX PREVIEW CAPSULES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Dynamic Adaptive Slots Grid", desc: "Sensors transmit coordinates to custom dashboard maps, providing realtime spot discovery and booking layouts." },
                    { title: "Interactive Timer HUD", desc: "Digital ticketing dashboard featuring counting visual bars, live billing rates, and micro-interactions." }
                  ].map((card, i) => (
                    <div 
                      key={i} 
                      className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-colors"
                    >
                      <h4 className="font-mono text-[10px] font-bold text-black uppercase mb-2">// {card.title}</h4>
                      <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SYSTEM WORKFLOW */}
              <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
                <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                  <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                  <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">WORKFLOW_SEQUENCE</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-12">
                  TELEMETRY SEQUENCE FLOW
                </h2>

                <div className="relative pl-6 sm:pl-8 border-l border-black/10 flex flex-col gap-8">
                  {spectraWorkflow.map((step, idx) => (
                    <motion.div 
                      key={step.step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="relative"
                    >
                      <div className="absolute -left-[29px] sm:-left-[37px] top-1 w-3 h-3 rounded-full bg-[#00CC52] border-2 border-white shadow-sm" />
                      <span className="font-mono text-[9px] text-[#00CC52] font-black tracking-widest uppercase block mb-1">
                        NODE 0{idx + 1} &mdash; {step.step}
                      </span>
                      <p className="font-sans text-sm text-neutral-600 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* IMAGE GALLERY */}
              <section className="w-full max-w-5xl mx-auto mb-24 px-2 text-center relative z-10">
                <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                  <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                  <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">GALLERY_ARCHIVE</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
                  SYSTEM SCREEN CAPTURES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  {spectraImages.map((slide, idx) => {
                    const colSpan = idx === 0 ? "md:col-span-5" : idx === 1 ? "md:col-span-7" : idx === 2 ? "md:col-span-7" : idx === 3 ? "md:col-span-5" : "md:col-span-12";
                    const sizeClass = idx === 4 ? "h-[300px] sm:h-[450px]" : "h-[250px] sm:h-[350px]";

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -8 }}
                        className={`${colSpan} flex flex-col gap-3 group`}
                      >
                        <div className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                          <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[12px] bg-black/[0.02]">
                            <img 
                              src={slide.img} 
                              alt={slide.title}
                              className={`w-full ${sizeClass} object-cover transition-transform duration-700 group-hover:scale-103`}
                            />
                          </div>
                        </div>
                        <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-black/45 block text-center font-bold mt-2">
                          {slide.title}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              {/* SECTION: LINKS & REPOSITORY */}
              <section className="w-full max-w-5xl mx-auto mb-24 relative z-10">
                <div className="relative border border-[#00CC52]/30 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/90 shadow-[10px_10px_0px_rgba(0,255,82,0.05)] text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5 bg-white border-l border-b border-black/10">
                    PROJECT_LINKS
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                      SOURCE & DEPLOYMENT
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black leading-none mb-4 pt-1">
                      DOPARKING SOURCE ARCHIVES
                    </h3>
                    <p className="font-sans text-[13.5px] text-neutral-700 leading-relaxed font-light max-w-xl">
                      Explore the live smart parking application dashboard or review the repository codebase for automation scripts, slot allocation matrices, and styling guidelines.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                    <motion.a
                      href="https://github.com/Parthbo7/dopark.git"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClickTick(1600, 0.08)}
                      className="bg-black text-white hover:bg-[#00CC52] hover:text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-6 py-3 border border-black rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.15)] flex items-center gap-2 cursor-pointer transition-colors duration-300 justify-center shrink-0 interactive-hover"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      <span>EXPLORE_REPOS</span>
                      <ExternalLink size={10} className="stroke-[3]" />
                    </motion.a>

                    <motion.a
                      href="https://dopark.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClickTick(1600, 0.08)}
                      className="bg-white text-black hover:bg-[#00CC52] hover:text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-6 py-3 border border-black rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,0.15)] flex items-center gap-2 cursor-pointer transition-colors duration-300 justify-center shrink-0 interactive-hover"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe size={14} />
                      <span>LIVE_DASHBOARD</span>
                      <ExternalLink size={10} className="stroke-[3]" />
                    </motion.a>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

        </AnimatePresence>

        {/* BOTTOM TERMINAL LOGS PANEL */}
        <section className="w-full max-w-4xl mx-auto mt-20 px-4 relative z-10">
          <div className="border border-black/10 bg-white/60 backdrop-blur-md rounded-md p-5 font-mono text-[9px] sm:text-xs text-black/60 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/25 uppercase tracking-[0.25em] px-2 py-0.5">
              TELEMETRY_LOG
            </div>
            
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-[#00CC52]" />
              <div className="leading-relaxed text-left">
                <div>{logs[0]}</div>
                <div className="text-[#00CC52] font-bold">{logs[1]}</div>
              </div>
            </div>
            
            <div className="font-bold text-[8px] sm:text-[10px] tracking-widest text-black/30 uppercase">
              STATUS: SEC_NOMINAL
            </div>
          </div>
        </section>

      </main>

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
