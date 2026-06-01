import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, ArrowRight, Terminal as TerminalIcon } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

// Import images
import gdg1 from '../assets/Images/GDG1.jpeg';
import gdg2 from '../assets/Images/GDG2.jpeg';
import gdg3 from '../assets/Images/GDG3.jpeg';
import Viso1 from '../assets/Images/Viso1.jpeg';
import Viso2 from '../assets/Images/Viso2.jpeg';
import MT1 from '../assets/Images/MT1.jpeg';
import MT2 from '../assets/Images/MT2.jpeg';
import MT3 from '../assets/Images/MT3.jpeg';

interface ExperienceCardData {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  isExpandable?: boolean;
  metaLabels?: string[];
}

interface ArchiveItem {
  id: string;
  year: string;
  category: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
}

interface DetailVaultConfig {
  archiveTitle: string;
  intro: string;
  toneTag: string;
  systemTag: string;
  highlights: string[];
  timeline: { phase: string; detail: string }[];
  images: string[];
}

interface ExperienceNodeLayout {
  align: 'left' | 'right';
  widthPercent: number;
  translateXPercent: number;
  desktopTop: number;
  desktopParallaxShift: number;
  mobileSpacingClass: string;
  minHeightClass: string;
  baseRotate: number;
  revealRotate: number;
  floatShift: number;
  nodeLabel: string;
  coordinateLabel: string;
  shellLabel: string;
  accentClass: string;
}

export const ExperiencePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<'list' | 'gdg' | 'detail'>('list');
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([
    '> EXPERIENCE DATABASE SYNCHRONIZED...',
    'COMMUNITY: ACTIVE // NETWORK: STABLE // SYSTEM STATUS: VERIFIED_'
  ]);

  useEffect(() => {
    const activeLogs = [
      'RETRIEVING CAREER SEGMENTS...',
      'LEADERSHIP MATRIX SYNCHRONIZED.',
      'LOADING GRAPHIC & WEB DESIGN MODULES...',
      'COMPETITIONS AND HACKATHON RECORDS NOMINAL.',
      'COMMUNITY BUILDING NETWORK CHANNELS STANDBY...',
      'DEPLOYING EXPERIENCE TIMELINES...',
      'SECURE_PORT_07 ENABLED...',
      'COMPILING SHADERS FOR GRID OVERLAY...',
      'TACTILE AUDIO CHANNELS SYNCHRONIZED.',
      'MEMORY MATRIX DETECTED NOMINAL TEMPERATURE.',
    ];

    const logInterval = setInterval(() => {
      const randomLog = activeLogs[Math.floor(Math.random() * activeLogs.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, []);

  const experienceCards: ExperienceCardData[] = [
    {
      id: 'exp-gdg',
      year: '2025 — PRESENT',
      title: 'GDG DESIGN COORDINATOR',
      subtitle: 'COMMUNITY DESIGN & CREATIVE SYSTEMS',
      description: 'Leading the visual identity and branding ecosystem for Google Developer Groups through campaigns, event systems, and digital community experiences.',
      tags: ['CREATIVE CAMPAIGNS', 'EVENT BRANDING', 'COMMUNITY DESIGN', 'HACKATHON VISUALS'],
      isExpandable: true
    },
    {
      id: 'exp-visotech',
      year: '2026',
      title: 'VISOTECH 2026',
      subtitle: 'Event volunteering, futuristic decoration systems, and live technical engagement experiences.',
      description: 'Contributed as a volunteer during VISOTECH 2026 by working on event decoration systems and actively hosting the C-Striker engagement activity while helping create an immersive futuristic technical event atmosphere.',
      tags: ['Event Volunteering', 'Decoration Design', 'C-Striker Hosting', 'Technical Event', 'Community Engagement'],
      metaLabels: ['EVENT_NODE', 'VISUAL_SETUP_ACTIVE', 'TECH_EVENT_PROTOCOL', 'LIVE_HOST_SYSTEM'],
      isExpandable: true
    },
    {
      id: 'exp-tpo',
      year: '2025',
      title: 'TPO COORDINATOR',
      subtitle: 'MANAGING STUDENT COORDINATION',
      description: 'Handled placement coordination, communication workflows, and operational management for training and placement activities.',
      tags: ['LEADERSHIP', 'COORDINATION', 'COMMUNICATION', 'MANAGEMENT'],
      isExpandable: true
    },
    {
      id: 'exp-mechanics',
      year: '2024',
      title: 'MECHANICS TOPPER',
      subtitle: "Academic excellence in one of engineering's most challenging foundational subjects.",
      description: 'Achieved top academic performance in Engineering Mechanics — one of the toughest core engineering subjects — through analytical thinking, precision problem-solving, and conceptual mastery. Inspired juniors academically through consistency and strong engineering fundamentals.',
      tags: ['Engineering Mechanics', 'Academic Excellence', 'Problem Solving', 'Analytical Thinking', 'Student Inspiration'],
      metaLabels: ['TOPPER_NODE', 'ANALYTICAL_SYSTEM', 'ENGINEERING_ARCHIVE', 'PRECISION_MODE_ACTIVE'],
      isExpandable: true
    },
    {
      id: 'exp-startup',
      year: '2025',
      title: 'IDEA TO PITCH START BOOTCAMP',
      subtitle: 'TRANSFORMING STARTUP CONCEPTS INTO PRODUCTS',
      description: 'Participated in startup bootcamp activities focused on innovation strategy, pitching systems, and entrepreneurial development.',
      tags: ['STARTUP THINKING', 'PITCHING', 'INNOVATION', 'PRODUCT STRATEGY'],
      isExpandable: true
    },
    {
      id: 'exp-freshers',
      year: '2024',
      title: 'MR. FRESHERS — RUNNER UP',
      subtitle: 'STAGE PRESENCE & PERSONALITY RECOGNITION',
      description: 'Recognized as Runner Up in Mr. Freshers for confidence, communication skills, personality, and stage presence during the college fresher experience.',
      tags: ['PUBLIC SPEAKING', 'STAGE PRESENCE', 'CONFIDENCE', 'LEADERSHIP', 'PERSONALITY'],
      isExpandable: true
    }
  ];

  const experienceNodeLayouts: Record<string, ExperienceNodeLayout> = {
    'exp-gdg': {
      align: 'left',
      widthPercent: 58,
      translateXPercent: -4,
      desktopTop: 0,
      desktopParallaxShift: -24,
      mobileSpacingClass: 'mt-0',
      minHeightClass: 'min-h-[340px]',
      baseRotate: -1,
      revealRotate: -2.4,
      floatShift: -10,
      nodeLabel: 'PRIMARY_GDG_NODE',
      coordinateLabel: 'X:-44 / Y:018',
      shellLabel: 'FEATURED_LEDGER',
      accentClass: 'border-[#D4AF37]/45'
    },
    'exp-visotech': {
      align: 'right',
      widthPercent: 46,
      translateXPercent: 8,
      desktopTop: 540,
      desktopParallaxShift: -18,
      mobileSpacingClass: 'mt-44',
      minHeightClass: 'min-h-[280px]',
      baseRotate: 1,
      revealRotate: 2.4,
      floatShift: -8,
      nodeLabel: 'VISOTECH_RUNTIME',
      coordinateLabel: 'X:+38 / Y:146',
      shellLabel: 'SYSTEM_NODE_BETA',
      accentClass: 'border-[#A8D3C8]/60'
    },
    'exp-tpo': {
      align: 'left',
      widthPercent: 42,
      translateXPercent: -6,
      desktopTop: 1110,
      desktopParallaxShift: -14,
      mobileSpacingClass: 'mt-44',
      minHeightClass: 'min-h-[250px]',
      baseRotate: -0.6,
      revealRotate: -2,
      floatShift: -7,
      nodeLabel: 'TPO_COORDINATION_GRID',
      coordinateLabel: 'X:-34 / Y:262',
      shellLabel: 'COMPACT_WIDE_UNIT',
      accentClass: 'border-[#8AB8A9]/45'
    },
    'exp-mechanics': {
      align: 'right',
      widthPercent: 40,
      translateXPercent: 5,
      desktopTop: 1660,
      desktopParallaxShift: -12,
      mobileSpacingClass: 'mt-44',
      minHeightClass: 'min-h-[270px]',
      baseRotate: 0.8,
      revealRotate: 2.2,
      floatShift: -9,
      nodeLabel: 'MECHANICS_PRECISION_LOG',
      coordinateLabel: 'X:+30 / Y:388',
      shellLabel: 'CINEMATIC_CHANNEL',
      accentClass: 'border-[#C9D7D2]/55'
    },
    'exp-startup': {
      align: 'left',
      widthPercent: 50,
      translateXPercent: -3,
      desktopTop: 2220,
      desktopParallaxShift: -16,
      mobileSpacingClass: 'mt-48',
      minHeightClass: 'min-h-[310px]',
      baseRotate: -1.15,
      revealRotate: -2.6,
      floatShift: -8,
      nodeLabel: 'PITCH_BOOTCAMP_PROTO',
      coordinateLabel: 'X:-36 / Y:514',
      shellLabel: 'FUTURE_STARTUP_MODE',
      accentClass: 'border-[#00CC52]/35'
    },
    'exp-freshers': {
      align: 'right',
      widthPercent: 45,
      translateXPercent: 6,
      desktopTop: 2810,
      desktopParallaxShift: -14,
      mobileSpacingClass: 'mt-48',
      minHeightClass: 'min-h-[290px]',
      baseRotate: 1,
      revealRotate: 2.2,
      floatShift: -10,
      nodeLabel: 'STAGE_PERSONA_NODE',
      coordinateLabel: 'X:+42 / Y:662',
      shellLabel: 'PERSONALITY_CLUSTER',
      accentClass: 'border-[#B7CCD5]/50'
    }
  };

  const ambientDots = [
    { left: '4%', top: '6%' },
    { left: '18%', top: '18%' },
    { left: '86%', top: '14%' },
    { left: '72%', top: '29%' },
    { left: '10%', top: '41%' },
    { left: '92%', top: '47%' },
    { left: '16%', top: '63%' },
    { left: '80%', top: '68%' },
    { left: '8%', top: '82%' },
    { left: '90%', top: '88%' }
  ];

  const { scrollYProgress: listScrollProgress } = useScroll({ container: containerRef });
  const gridDriftY = useTransform(listScrollProgress, [0, 1], [0, -90]);
  const haloDriftY = useTransform(listScrollProgress, [0, 1], [0, 140]);
  const metadataDriftY = useTransform(listScrollProgress, [0, 1], [0, -60]);

  const handleCardClick = (cardId: string) => {
    playClickTick(1600, 0.08);
    if (cardId === 'exp-gdg') {
      setView('gdg');
    } else {
      setSelectedCardId(cardId);
      setView('detail');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full overflow-y-auto no-scrollbar flex flex-col justify-between select-none relative"
    >
      <AnimatePresence mode="wait">
        {view === 'list' ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 w-full flex flex-col"
          >
            {/* TOP HEADER LOCAL OVERLAY */}
            <div className="flex justify-between items-center w-full z-30 pt-2 border-b border-black/5 pb-4">
              <div className="text-left font-mono text-[9px] sm:text-xs tracking-widest text-[#FF3E6C] font-extrabold uppercase">
                <div>CREATIVE DEVELOPER</div>
                <div className="mt-0.5 text-[#FF3E6C]/70">AVAILABLE FULL-TIME</div>
              </div>

              <div className="flex items-center gap-6 sm:gap-8 font-mono text-[10px] sm:text-[11px] tracking-widest font-extrabold">
                <span className="text-[#FF3E6C] relative py-1 uppercase">
                  EXPERIENCE
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF3E6C]" />
                </span>
                <button 
                  onClick={() => window.location.hash = '#experiments'}
                  className="text-black/40 hover:text-black transition-all duration-300 uppercase interactive-hover cursor-pointer"
                >
                  experiments
                </button>
              </div>

              <div className="w-[45px] sm:w-[60px] hidden sm:block" />
            </div>

            {/* DRAGGABLE FLOATING STICKERS */}
            <>
              <motion.div
                drag
                dragConstraints={containerRef}
                className="absolute left-[8%] top-[14%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest -rotate-6 select-none"
                whileHover={{ scale: 1.1, rotate: -3 }}
                onHoverStart={() => playClickTick(1500, 0.02)}
              >
                PARTH_OS
              </motion.div>

              <motion.div
                drag
                dragConstraints={containerRef}
                className="absolute left-[22%] top-[12%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-yellow-300 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-2 select-none"
                whileHover={{ scale: 1.1, rotate: 6 }}
                onHoverStart={() => playClickTick(1500, 0.02)}
              >
                COMMUNITY_NODE
              </motion.div>

              <motion.div
                drag
                dragConstraints={containerRef}
                className="absolute right-[5%] bottom-[14%] z-30 pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-[#00FF66]/5 text-[#00CC52] border border-[#00CC52]/30 px-3 py-1 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider rounded-sm -rotate-2 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,255,102,0.08)] select-none"
                whileHover={{ scale: 1.1, rotate: 0 }}
                onHoverStart={() => playClickTick(1600, 0.02)}
              >
                <Check size={10} className="stroke-[3]" />
                ACCESS: VERIFIED
              </motion.div>
            </>

            {/* MAIN ANTI-GRAVITY TIMELINE ARCHIVE */}
            <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14 pb-28 pt-10 relative z-20">
              <motion.div style={{ y: gridDriftY }} className="absolute inset-0 pointer-events-none">
                {ambientDots.map((dot, index) => (
                  <motion.div
                    key={`${dot.left}-${dot.top}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-black/20"
                    style={{ left: dot.left, top: dot.top }}
                    animate={{ opacity: [0.1, 0.55, 0.1], scale: [1, 1.6, 1] }}
                    transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </motion.div>
              <motion.div style={{ y: haloDriftY }} className="absolute inset-0 pointer-events-none hidden lg:block">
                <div className="absolute left-[8%] top-[20%] w-64 h-64 rounded-full bg-[#00CC52]/10 blur-[80px]" />
                <div className="absolute right-[10%] top-[55%] w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-[90px]" />
                <div className="absolute left-[32%] top-[76%] w-56 h-56 rounded-full bg-[#A8D3C8]/14 blur-[75px]" />
              </motion.div>

              {/* OVERSIZED TITLE STACK */}
              <div className="w-full mb-16 lg:mb-24 relative">
                <motion.div
                  animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-[8%] top-1 font-mono text-[8px] sm:text-[10px] text-black/45 border border-black/10 px-3 py-1.5 rounded-sm uppercase bg-white/65 backdrop-blur-sm shadow-[2px_2px_0px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    TIMELINE_OS_NODE_05
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
                  <div className="h-[1.5px] w-14 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                  <span className="font-mono text-[8px] text-[#D4AF37] font-bold tracking-[0.28em] uppercase">EXPERIENCE_ARCHIVE</span>
                  <div className="h-[1.5px] w-14 bg-gradient-to-l from-[#D4AF37] to-transparent" />
                </div>

                <h1 className="font-display font-black text-[14vw] sm:text-[9vw] lg:text-[8vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1 text-left">
                  EXPERIENCE
                </h1>

                <motion.div
                  className="mt-6 px-7 sm:px-9 py-4 bg-white/80 border border-black/10 font-sans text-[12px] sm:text-[14px] tracking-wide text-black/70 max-w-4xl shadow-[7px_7px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold backdrop-blur-xl relative overflow-hidden"
                  whileHover={{ y: -2 }}
                >
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(90deg, #D4AF37 1px, transparent 1px), linear-gradient(#D4AF37 1px, transparent 1px)',
                    backgroundSize: '15px 15px'
                  }} />
                  <span className="relative">A floating cinematic operating-system archive where modular experience nodes drift independently across a database canvas.</span>
                </motion.div>
              </div>

              {/* DESKTOP: TRUE FULL-WIDTH FLOATING EXPERIENCE DATABASE */}
              <section className="experience-database relative hidden lg:block w-full pb-40 flex flex-col gap-32 xl:gap-48">
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none">
                  <div className="h-full w-[2px] bg-gradient-to-b from-black/5 via-[#D4AF37]/20 to-black/5" />
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#D4AF37]/20 blur-2xl"
                    animate={{ y: ['0%', '94%', '0%'], opacity: [0.2, 0.65, 0.2] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                <motion.div
                  style={{ y: metadataDriftY }}
                  className="absolute left-[10%] top-[12%] font-mono text-[8px] text-black/35 uppercase tracking-[0.22em] flex items-center gap-2 pointer-events-none"
                  animate={{ x: [0, -6, 0], y: [0, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowUpRight size={10} />
                  FLOATING_COORD_MAP
                </motion.div>
                <motion.div
                  className="absolute right-[8%] top-[41%] font-mono text-[8px] text-black/35 uppercase tracking-[0.22em] flex items-center gap-2 pointer-events-none"
                  animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="w-6 h-[1px] bg-black/20" />
                  SYSTEM_METADATA
                </motion.div>

                {experienceCards.map((card, index) => {
                  const layout = experienceNodeLayouts[card.id];
                  const isLeft = layout.align === 'left';
                  const isFeatured = card.id === 'exp-gdg';
                  const isStartup = card.id === 'exp-startup';
                  const isStageNode = card.id === 'exp-freshers';
                  const cardPaddingClass = isFeatured ? 'p-8 xl:p-12' : 'p-6 xl:p-8';
                  const typographyClass = isFeatured ? 'text-4xl' : 'text-3xl';
                  const alignmentClass = isLeft ? 'justify-start lg:pl-[4vw]' : 'justify-end lg:pr-[4vw]';

                  return (
                    <div 
                      key={card.id} 
                      className={`w-full flex ${alignmentClass} relative z-10`}
                    >
                      {/* Connection node/dot on the timeline line */}
                      <div className="absolute left-1/2 top-12 -translate-x-1/2 z-20 pointer-events-none">
                        <motion.span
                          className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-white shadow-[0_0_14px_rgba(212,175,55,0.45)]"
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </div>

                      {/* Floating Coordinate Label positioned next to the dot */}
                      <div 
                        className="absolute left-1/2 top-12 z-20 flex items-center gap-2 pointer-events-none hidden lg:flex"
                        style={{
                          transform: isLeft ? 'translate3d(8px, 0, 0)' : 'translate3d(calc(-100% - 8px), 0, 0)'
                        }}
                      >
                        <span className="font-mono text-[8px] tracking-[0.2em] text-black/35 uppercase whitespace-nowrap">
                          {layout.coordinateLabel}
                        </span>
                      </div>

                      <motion.article
                        style={{
                          width: `${layout.widthPercent}%`,
                        }}
                        initial={{
                          opacity: 0,
                          y: 82,
                          rotate: layout.revealRotate,
                          filter: 'blur(11px)'
                        }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
                      >
                        <motion.div
                          onClick={() => handleCardClick(card.id)}
                          onMouseEnter={() => playClickTick(1500, 0.02)}
                          className={`relative w-full ${layout.minHeightClass} ${cardPaddingClass} bg-white/85 backdrop-blur-2xl border ${layout.accentClass} rounded-sm shadow-[10px_10px_0px_rgba(168,211,200,0.15)] hover:border-black transition-all duration-500 cursor-pointer interactive-hover select-none overflow-hidden group/card`}
                          animate={{
                            y: [0, layout.floatShift, 0],
                            rotate: [layout.baseRotate, layout.baseRotate + (isLeft ? -0.45 : 0.45), layout.baseRotate],
                            x: [0, layout.desktopParallaxShift, 0]
                          }}
                          transition={{
                            y: { duration: 6 + index * 0.7, repeat: Infinity, ease: 'easeInOut' },
                            rotate: { duration: 9 + index, repeat: Infinity, ease: 'easeInOut' },
                            x: { duration: 10 + index, repeat: Infinity, ease: 'easeInOut' }
                          }}
                          whileHover={{
                            y: -20,
                            scale: isFeatured ? 1.028 : 1.02,
                            rotate: layout.baseRotate + (isLeft ? 0.12 : -0.12),
                            boxShadow: '0 44px 80px rgba(0,0,0,0.12), 13px 13px 0px rgba(0,0,0,0.88)'
                          }}
                        >
                          <div className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.04] pointer-events-none transition-opacity duration-500" style={{
                            backgroundImage: 'linear-gradient(90deg, #D4AF37 1px, transparent 1px), linear-gradient(#D4AF37 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }} />

                          <motion.div
                            className={`absolute ${isLeft ? '-right-20' : '-left-20'} top-1/2 w-32 h-32 rounded-full bg-[#A8D3C8]/25 blur-[48px] pointer-events-none`}
                            animate={{ x: [0, isLeft ? -12 : 12, 0], y: [0, -10, 0] }}
                            transition={{ duration: 6.5 + index, repeat: Infinity, ease: 'easeInOut' }}
                          />

                          <div className={`absolute ${isLeft ? 'right-6' : 'left-6'} -top-7 z-20 flex items-center gap-2 bg-white/90 border border-black/10 px-3 py-1 rounded-sm font-mono text-[7px] tracking-[0.2em] text-black/45 uppercase`}>
                            <ArrowUpRight size={10} />
                            {layout.nodeLabel}
                          </div>

                          <div className={`absolute ${isLeft ? '-right-12' : '-left-12'} bottom-8 flex items-center gap-2 font-mono text-[8px] text-black/35 uppercase tracking-[0.2em]`}>
                            <span className="w-8 h-[1px] bg-black/20" />
                            {layout.shellLabel}
                          </div>

                          <div className={`absolute -bottom-8 ${isLeft ? '-right-5' : '-left-5'} font-display font-black text-9xl text-black/[0.03] pointer-events-none group-hover/card:text-[#00CC52]/[0.08] transition-colors`}>
                            0{index + 1}
                          </div>

                          {isStartup && (
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#00CC52]/10 border border-[#00CC52]/35 px-3 py-1 rounded-sm font-mono text-[7px] tracking-[0.2em] text-[#00CC52] uppercase">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00CC52] animate-pulse" />
                              STARTUP_PROTOCOL
                            </div>
                          )}

                          {isStageNode && (
                            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/35 px-3 py-1 rounded-sm font-mono text-[7px] tracking-[0.2em] text-[#D4AF37] uppercase">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                              STAGE_SIGNAL
                            </div>
                          )}

                          {card.id === 'exp-visotech' && (
                            <div className="absolute top-4 left-6 z-30 flex flex-col gap-2 pointer-events-none">
                              {card.metaLabels?.map((label) => (
                                <div key={label} className="transform transition-transform duration-300 group-hover/card:-translate-y-2 group-hover/card:rotate-1 bg-white/80 backdrop-blur-md border border-black/8 px-2 py-0.5 rounded-sm font-mono text-[8px] tracking-[0.12em] text-black/60 uppercase shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                                  <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#A8D3C8] animate-pulse align-middle" />
                                  {label}
                                </div>
                              ))}
                            </div>
                          )}

                          {card.id === 'exp-mechanics' && (
                            <div className="absolute top-4 right-6 z-30 flex flex-col gap-2 pointer-events-none items-end">
                              {card.metaLabels?.map((label) => (
                                <div key={label} className="transform transition-transform duration-300 group-hover/card:-translate-y-2 group-hover/card:rotate-1 bg-white/80 backdrop-blur-md border border-black/8 px-2 py-0.5 rounded-sm font-mono text-[8px] tracking-[0.12em] text-black/60 uppercase shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                                  <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#C9D7D2] animate-pulse align-middle" />
                                  {label}
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="relative z-10 flex justify-between items-center mb-8">
                            <span className={`font-mono ${isFeatured ? 'text-[12px]' : 'text-[10px]'} text-[#00CC52] font-black tracking-[0.2em] uppercase`}>
                              {card.year}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[8px] text-[#00CC52]/60 uppercase tracking-widest">OPEN_ARCHIVE</span>
                              <div className="p-1.5 bg-[#00CC52]/5 rounded-full group-hover/card:bg-[#00CC52] transition-colors">
                                <ArrowRight size={14} className="text-[#00CC52] group-hover/card:text-white transition-all" />
                              </div>
                            </div>
                          </div>

                          <div className="relative z-10 flex flex-col mb-8">
                            <h3 className={`font-display font-black ${typographyClass} tracking-tighter text-black uppercase leading-none group-hover/card:text-[#00CC52] transition-colors`}>
                              {card.title}
                            </h3>
                            <div className="flex items-center gap-3 mt-2">
                              <div className="h-[1px] w-6 bg-black/10" />
                              <p className={`font-mono ${isFeatured ? 'text-[10px]' : 'text-[9px]'} tracking-[0.2em] text-black/50 uppercase`}>
                                {card.subtitle}
                              </p>
                            </div>

                            {card.description && (
                              <p className={`font-sans ${isFeatured ? 'text-[14.5px]' : 'text-[12.5px]'} text-black/70 mt-6 leading-relaxed normal-case font-light border-t border-black/5 pt-6`}>
                                {card.description}
                              </p>
                            )}
                          </div>

                          <div className="relative z-10 flex flex-wrap gap-2">
                            {card.tags.map((tag) => (
                              <motion.span
                                key={tag}
                                whileHover={{ scale: 1.05 }}
                                className={`font-mono ${isFeatured ? 'text-[9.5px]' : 'text-[9px]'} tracking-wider uppercase px-3 py-1 rounded-sm border border-black/10 text-black/50 bg-black/[0.01] group-hover/card:border-black/30 group-hover/card:text-black/70 transition-all cursor-default`}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>

                          <div className="mt-8 pt-6 border-t border-black/5 relative z-10 flex items-center justify-between opacity-55 group-hover/card:opacity-100 transition-opacity">
                            <span className="font-mono text-[7px] text-black/45 tracking-[0.3em] uppercase">
                              FLOATING_DATABASE_NODE
                            </span>
                            <span className="font-mono text-[7px] text-black/45 tracking-[0.3em] uppercase">
                              NODE_{String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </motion.div>
                      </motion.article>
                    </div>
                  );
                })}
              </section>

              {/* MOBILE: RESPONSIVE FALLBACK */}
              <section className="experience-database lg:hidden relative w-full pb-24">
                {experienceCards.map((card, index) => {
                  const layout = experienceNodeLayouts[card.id];
                  const isLeft = layout.align === 'left';
                  const isFeatured = card.id === 'exp-gdg';
                  const cardPaddingClass = isFeatured ? 'p-7 sm:p-9' : 'p-6 sm:p-7';
                  const mobileOffsetStyle = isLeft
                    ? { marginLeft: '-2%', marginRight: 'auto' as const }
                    : { marginLeft: 'auto' as const, marginRight: '-2%' };

                  return (
                    <motion.article
                      key={card.id}
                      initial={{ opacity: 0, y: 64, rotate: layout.revealRotate, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.9, delay: index * 0.06, ease: 'easeOut' }}
                      className={`relative w-full ${layout.mobileSpacingClass}`}
                    >
                      <motion.div
                        onClick={() => handleCardClick(card.id)}
                        onMouseEnter={() => playClickTick(1500, 0.02)}
                        className={`relative w-[96%] ${layout.minHeightClass} ${cardPaddingClass} bg-white/85 backdrop-blur-2xl border ${layout.accentClass} rounded-sm shadow-[8px_8px_0px_rgba(168,211,200,0.15)] hover:border-black transition-all duration-500 cursor-pointer interactive-hover select-none overflow-hidden group/card ${isLeft ? '' : 'ml-auto'}`}
                        style={mobileOffsetStyle}
                        animate={{ y: [0, layout.floatShift, 0] }}
                        transition={{ y: { duration: 5.6 + index * 0.6, repeat: Infinity, ease: 'easeInOut' } }}
                        whileHover={{ y: -12, scale: 1.018, rotate: layout.baseRotate / 2 }}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.04] pointer-events-none transition-opacity duration-500" style={{
                          backgroundImage: 'linear-gradient(90deg, #D4AF37 1px, transparent 1px), linear-gradient(#D4AF37 1px, transparent 1px)',
                          backgroundSize: '18px 18px'
                        }} />

                        <div className="relative z-10 flex justify-between items-center mb-7">
                          <span className="font-mono text-[10px] text-[#00CC52] font-black tracking-[0.2em] uppercase">{card.year}</span>
                          <ArrowRight size={13} className="text-[#00CC52]" />
                        </div>

                        <div className="relative z-10 flex flex-col mb-7">
                          <h3 className={`font-display font-black ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} tracking-tighter text-black uppercase leading-none group-hover/card:text-[#00CC52] transition-colors`}>
                            {card.title}
                          </h3>
                          <p className="font-mono text-[9px] tracking-[0.18em] text-black/50 uppercase mt-2">{card.subtitle}</p>
                          {card.description && (
                            <p className={`font-sans ${isFeatured ? 'text-[14px]' : 'text-[12.5px]'} text-black/70 mt-6 leading-relaxed normal-case font-light border-t border-black/5 pt-6`}>
                              {card.description}
                            </p>
                          )}
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-2">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[9px] tracking-wider uppercase px-3 py-1 rounded-sm border border-black/10 text-black/50 bg-black/[0.01]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.article>
                  );
                })}
              </section>
            </div>
          </motion.div>
        ) : view === 'gdg' ? (
          <motion.div
            key="gdg"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full bg-[#050505] text-white p-0 relative"
          >
            <GDGDetailedView onBack={() => {
              playClickTick(1400, 0.05);
              setView('list');
            }} />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full bg-[#050505] text-white p-0 relative"
          >
            <DetailedExperienceView
              cardId={selectedCardId || ''}
              card={experienceCards.find(c => c.id === selectedCardId)}
              onBack={() => {
                playClickTick(1400, 0.05);
                setView('list');
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full z-20 mt-auto border-t border-black/5 pt-4 pb-2">
        <div className="flex justify-between items-end w-full">
          <div className="text-left font-mono text-[8px] sm:text-[9px] tracking-wider text-black/50 leading-normal">
            <div>{logs[0]}</div>
            <div className="text-[#FF3E6C] font-semibold">{logs[1]}</div>
          </div>

          <div className="text-right font-mono text-[8px] sm:text-[10px] tracking-widest text-black/30 font-bold uppercase sm:block hidden">
            SEC_STATUS: SECURE_OS_NODE_05
          </div>
        </div>
      </div>
    </div>
  );
};

const GDGDetailedView = ({ onBack }: { onBack: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const gdgArchive: ArchiveItem[] = [
    {
      id: 'gdg-1',
      year: '2025',
      category: 'GDG_INFO_SESSION',
      title: 'GDG INFO SESSION',
      image: gdg1,
      description: 'Designed promotional creatives, event posters, and digital branding assets to improve awareness and student engagement during the GDG onboarding and info session campaign.',
      tags: ['POSTER DESIGN', 'COMMUNITY BRANDING', 'SOCIAL MEDIA ASSETS']
    },
    {
      id: 'gdg-2',
      year: '2025',
      category: 'GOOGLE_CLOUD_SESSION',
      title: 'GOOGLE CLOUD SESSION',
      image: gdg2,
      description: 'Created futuristic cloud-themed promotional visuals and digital campaign systems for the Google Cloud developer session.',
      tags: ['CLOUD BRANDING', 'EVENT CAMPAIGN', 'UI VISUALS']
    },
    {
      id: 'gdg-3',
      year: '2025',
      category: 'HACKCITY_HACKATHON',
      title: 'HACKCITY HACKATHON',
      image: gdg3,
      description: 'Designed high-energy hackathon banners, cyber-style promotional posters, and engagement creatives to build excitement and participation during Hackcity Hackathon.',
      tags: ['HACKATHON BRANDING', 'BANNER DESIGN', 'CREATIVE CAMPAIGNS']
    }
  ];

  return (
    <div ref={containerRef} className="w-full min-h-screen relative overflow-x-hidden bg-[#F8F7F5] flex flex-col text-[#3F3F3F]">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] custom-dark-grid z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F8F7F5]/0 via-[#F5F5F5]/20 to-[#F2F1EF] pointer-events-none z-0" />
      
      {/* Animated Scanline (Muted) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#A9A9A9]/8 animate-scanline z-10 pointer-events-none" />

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNzUiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] shadow-inner" />

      {/* Navigation */}
      <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
        <motion.button
          onClick={onBack}
          onMouseEnter={() => playClickTick(1600, 0.02)}
          className="flex items-center gap-3 interactive-hover group bg-white/40 backdrop-blur-2xl border border-[#A9A9A9]/30 px-5 py-2.5 rounded-sm hover:border-[#A8D3C8]/50 transition-all"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-[#8B8B8B]" />
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold text-[#4A4A4A] group-hover:text-[#2A2A2A] transition-colors">CLOSE_ARCHIVE</span>
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-48 relative z-10 w-full">
        {/* HERO SECTION - SINGLE TONE REFINEMENT */}
        <header className="mb-48 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-10 opacity-60">
              <div className="h-[1px] w-10 bg-[#A9A9A9]/60" />
              <span className="font-mono text-[9px] tracking-[0.6em] uppercase text-[#8B8B8B] font-bold">GDG_COMMUNITY_ARCHIVE</span>
              <div className="h-[1px] w-10 bg-[#A9A9A9]/60" />
            </div>

            <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-tight mb-6 text-[#2A2A2A]">
              GDG DESIGN EXPERIENCE
            </h1>

            <p className="max-w-2xl font-mono text-xs md:text-sm text-[#6B6B6B] tracking-[0.15em] uppercase leading-relaxed mx-auto">
              Designing communities. Building engagement. Creating impact.
            </p>
          </motion.div>
        </header>

        {/* DETAILED EVENT TIMELINE - SPLIT LAYOUT */}
        <div className="flex flex-col gap-32 lg:gap-56 w-full">
          {gdgArchive.map((item, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <motion.section
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-16 lg:gap-24 w-full`}
              >
                {/* IMAGE BLOCK */}
                <div className="w-full lg:w-1/2 perspective-1000 relative group">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotateX: [0, 0.5, 0, -0.5, 0],
                      rotateY: [0, -1, 0, 1, 0]
                    }}
                    transition={{
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative overflow-hidden border border-[#A9A9A9]/30 shadow-[0_20px_40px_rgba(0,0,0,0.04)] group-hover:border-[#A8D3C8]/50 transition-all duration-700 h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                    />

                    {/* Hover scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A8D3C8]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none translate-y-[-100%] animate-scanline" />

                    {/* Image corner deco */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#8B8B8B]/40 group-hover:border-[#A8D3C8]/60 transition-all" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#8B8B8B]/40 group-hover:border-[#A8D3C8]/60 transition-all" />
                  </motion.div>
                </div>

                {/* CONTENT BLOCK */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left justify-center">
                  {/* Header */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-[#8B8B8B] font-bold tracking-[0.3em] uppercase">EVENT_{index + 1}</span>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-[#A9A9A9]/30 to-transparent" />
                    </div>

                    <div className="flex items-baseline gap-4">
                      <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight text-[#2A2A2A]">
                        {item.title}
                      </h2>
                      <span className="font-mono text-[10px] text-[#8B8B8B]/60 whitespace-nowrap">{item.year}</span>
                    </div>

                    <span className="font-mono text-[8px] text-[#A9A9A9]/70 tracking-[0.2em] uppercase">{item.category}</span>
                  </div>

                  {/* Description */}
                  <div className="relative py-6 border-y border-[#A9A9A9]/15">
                    <p className="font-sans text-[#5A5A5A] leading-relaxed text-sm md:text-base font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Contributions */}
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[8px] text-[#A9A9A9]/50 uppercase tracking-[0.3em]">CONTRIBUTIONS</span>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <motion.div
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 bg-[#E8E8E8]/40 border border-[#A9A9A9]/30 px-3 py-2 hover:border-[#A8D3C8]/50 transition-all group/tag interactive-hover"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A8D3C8] group-hover/tag:scale-150 transition-transform" />
                          <span className="font-mono text-[8px] text-[#6B6B6B] group-hover/tag:text-[#3F3F3F] uppercase tracking-wider">{tag}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* System Metadata */}
                  <div className="mt-4 flex items-center gap-2 opacity-40 group-hover:opacity-60 transition-opacity">
                    <TerminalIcon size={10} className="text-[#A8D3C8]" />
                    <span className="font-mono text-[7px] text-[#8B8B8B] tracking-[0.2em] uppercase">NODE_0{index + 1}</span>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* FOOTER */}
        <footer className="mt-64 flex flex-col items-center gap-12 text-center">
          <div className="h-[1px] w-24 bg-[#A8D3C8]/30" />
          
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-3xl uppercase tracking-tighter text-[#2A2A2A]">END_OF_ARCHIVE_DATA</h3>
            <p className="font-mono text-[9px] text-[#A9A9A9]/60 tracking-[0.4em] uppercase">READY FOR SYSTEM_EXIT</p>
          </div>

          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 211, 200, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 border border-[#A8D3C8]/50 px-12 py-4 font-mono text-[10px] font-black tracking-[0.4em] uppercase transition-all text-[#8B8B8B] hover:text-[#A8D3C8] interactive-hover"
          >
            RETURN_TO_SYSTEM <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-dark-grid {
          background-size: 100px 100px;
          background-image:
            linear-gradient(to right, rgba(169, 169, 169, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(169, 169, 169, 0.08) 1px, transparent 1px);
        }

        .text-stroke-green {
          -webkit-text-stroke: 1px rgba(168, 211, 200, 0.15);
          color: transparent;
        }

        @keyframes scanline-anim {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-scanline {
          animation: scanline-anim 12s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .bg-radial-vignette {
          background: radial-gradient(ellipse at center, transparent 0%, rgba(169, 169, 169, 0.04) 100%);
        }
      `}} />
    </div>
  );
};

const DetailedExperienceView = ({
  cardId,
  card,
  onBack
}: {
  cardId: string
  card?: ExperienceCardData
  onBack: () => void
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!card) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="text-white/50 font-mono">Experience not found</span>
      </div>
    );
  }

  const vaultConfigs: Record<string, DetailVaultConfig> = {
    'exp-visotech': {
      archiveTitle: 'VISOTECH 2026 ARCHIVE',
      intro: 'A futuristic event memory archive documenting volunteering, event creativity, and technical engagement.',
      toneTag: 'EVENT_MEMORY_ARCHIVE',
      systemTag: 'VISOTECH_RUNTIME',
      highlights: ['Event Volunteering', 'Decoration Systems', 'Live Technical Hosting', 'Audience Engagement'],
      timeline: [
        { phase: 'DECORATION_SYSTEMS', detail: 'Designed immersive visual environments and coordinated decoration execution.' },
        { phase: 'C_STRIKER_ENGAGEMENT', detail: 'Hosted live C-Striker interactions and maintained participant engagement.' },
        { phase: 'COMMUNITY_IMPACT', detail: 'Contributed to event atmosphere and volunteer-driven technical storytelling.' }
      ],
      images: [Viso1, Viso2]
    },

    'exp-tpo': {
      archiveTitle: 'TPO COORDINATOR ARCHIVE',
      intro: 'A logistics and communication command center for student-placement operations and coordination flows.',
      toneTag: 'OPERATIONS_COMMAND',
      systemTag: 'TPO_NETWORK_NODE',
      highlights: ['Student coordination', 'Communication systems', 'Operational execution'],
      timeline: [
        { phase: 'INTAKE_LOGS', detail: 'Consolidated requirements and schedule dependencies.' },
        { phase: 'SYNC_ENGINE', detail: 'Coordinated participants, updates, and support channels.' },
        { phase: 'DELIVERY_NODE', detail: 'Executed placement communication with high consistency.' }
      ],
      images: [gdg1, gdg2, gdg3]
    },
    'exp-mechanics': {
      archiveTitle: 'ENGINEERING MECHANICS ARCHIVE',
      intro: 'An archived engineering achievement system documenting academic excellence, recognition, and student inspiration.',
      toneTag: 'ENGINEERING_ARCHIVE_LAYER',
      systemTag: 'MECHANICS_PRECISION_LOG',
      highlights: ['Engineering Fundamentals', 'Problem Solving', 'Academic Recognition'],
      timeline: [
        { phase: 'ENGINEERING_EXCELLENCE', detail: 'Secured top academic performance through conceptual mastery.' },
        { phase: 'STUDENT_INSPIRATION', detail: 'Shared knowledge and motivated future engineers through academic sessions.' },
        { phase: 'RECOGNITION_MOMENT', detail: 'Received recognition for consistent performance and contribution.' }
      ],
      images: [MT1, MT2, MT3]
    },
    'exp-startup': {
      archiveTitle: 'BOOTCAMP INNOVATION ARCHIVE',
      intro: 'A startup simulation layer where ideas were transformed into product narratives and pitch-ready systems.',
      toneTag: 'STARTUP_PROTO_LAYER',
      systemTag: 'INNOVATION_BOOT_NODE',
      highlights: ['Startup strategy', 'Pitch architecture', 'Product framing'],
      timeline: [
        { phase: 'IDEATION_SCAN', detail: 'Generated concepts and assessed problem-value alignment.' },
        { phase: 'PITCH_MATRIX', detail: 'Converted concepts into concise pitch systems.' },
        { phase: 'DEMO_STORY', detail: 'Presented product logic with narrative clarity.' }
      ],
      images: [gdg2, gdg3, gdg1]
    },
    'exp-freshers': {
      archiveTitle: 'MR FRESHERS STAGE VAULT',
      intro: 'A personality-performance archive centered around stage confidence, presence, and communication energy.',
      toneTag: 'STAGE_PERSONA_FIELD',
      systemTag: 'CONFIDENCE_RUNTIME',
      highlights: ['Stage presence', 'Public communication', 'Personality impact'],
      timeline: [
        { phase: 'ENTRY_SIGNAL', detail: 'Activated presence and confidence in live stage context.' },
        { phase: 'PERSONA_STREAM', detail: 'Sustained energy, clarity, and audience connection.' },
        { phase: 'RESULT_NODE', detail: 'Secured runner-up recognition in final evaluation.' }
      ],
      images: [gdg1, gdg3, gdg2]
    }
  };

  const activeVault = vaultConfigs[cardId] || {
    archiveTitle: `${card.title} ARCHIVE`,
    intro: card.description || 'Professional experience and contribution details.',
    toneTag: 'ARCHIVE_LAYER',
    systemTag: 'EXPERIENCE_NODE',
    highlights: card.tags.slice(0, 3),
    timeline: [
      { phase: 'INTAKE', detail: 'Profile data synchronized.' },
      { phase: 'EXECUTION', detail: 'Experience module rendered.' },
      { phase: 'ARCHIVE', detail: 'Memory node archived and available.' }
    ],
    images: [gdg1, gdg2, gdg3]
  };

  return (
    <div ref={containerRef} className="w-full min-h-screen relative overflow-x-hidden bg-[#050505] flex flex-col text-white">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] custom-dark-grid z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050505]/0 via-[#0a0a0c]/20 to-[#0e0e12] pointer-events-none z-0" />

      {/* Animated Scanline */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#A9A9A9]/8 animate-scanline z-10 pointer-events-none" />

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNzUiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] shadow-inner" />

      {/* Navigation */}
      <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
        <motion.button
          onClick={onBack}
          onMouseEnter={() => playClickTick(1600, 0.02)}
          className="flex items-center gap-3 interactive-hover group bg-white/5 backdrop-blur-2xl border border-white/10 px-5 py-2.5 rounded-sm hover:border-[#D4AF37]/50 transition-all"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-white/60 group-hover:text-white" />
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold text-white/60 group-hover:text-white transition-colors">CLOSE_ARCHIVE</span>
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-48 relative z-10 w-full">
        {/* HERO SECTION */}
        <header className="mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex items-center gap-4 mb-10 opacity-30">
              <div className="h-[1px] w-10 bg-[#D4AF37]/40" />
              <span className="font-mono text-[9px] tracking-[0.6em] uppercase text-[#D4AF37] font-bold">{activeVault.systemTag}</span>
              <div className="h-[1px] w-10 bg-[#D4AF37]/40" />
            </div>

            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none mb-8 text-white">
              {activeVault.archiveTitle}
            </h1>

            <p className="max-w-2xl font-mono text-xs md:text-sm text-white/40 tracking-[0.15em] uppercase leading-relaxed mx-auto">
              {card.subtitle}
            </p>

            {/* Intro Block */}
            <div className="mt-16 relative py-8 px-12 max-w-3xl border-l border-[#D4AF37]/10 bg-[#D4AF37]/[0.02] backdrop-blur-sm">
              <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed text-left font-light">
                {activeVault.intro}
              </p>
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#D4AF37]/20" />
              <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-[#D4AF37]/20" />
            </div>
          </motion.div>
        </header>

        {/* DETAILS SECTION */}
        <div className="flex flex-col gap-24 w-full mb-32">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-4 mb-8 border border-[#D4AF37]/20 px-8 py-4 bg-[#D4AF37]/[0.02] backdrop-blur-sm">
              <div className="h-[1px] w-8 bg-[#D4AF37]/40" />
              <span className="font-mono text-[11px] md:text-[12px] text-[#D4AF37] font-black tracking-[0.3em] uppercase">{card.year}</span>
              <div className="h-[1px] w-8 bg-[#D4AF37]/40" />
            </div>
            <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/45 border border-white/10 px-3 py-1 rounded-sm">
              {activeVault.toneTag}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start"
          >
            <div className="w-full">
              <div className="mb-6">
                <span className="font-mono text-[9px] text-[#D4AF37]/60 font-black tracking-[0.4em] uppercase">CONTRIBUTIONS</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {card.tags.map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-white/[0.02] border border-white/10 px-5 py-3 hover:border-[#D4AF37]/30 transition-all group interactive-hover backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full group-hover:bg-[#00FF66] group-hover:scale-150 transition-all" />
                    <span className="font-mono text-[10px] text-white/40 group-hover:text-white uppercase tracking-wider">{tag}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
              <div className="font-mono text-[8px] tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-4">TIMELINE_STORY</div>
              <div className="flex flex-col gap-4">
                {activeVault.timeline.map((step) => (
                  <div key={step.phase} className="border-l border-[#D4AF37]/20 pl-4">
                    <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D4AF37]">{step.phase}</div>
                    <p className="font-sans text-sm text-white/70 mt-1">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {activeVault.images.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                className={`${index === 0 ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-12'} border border-white/10 bg-white/[0.02] p-2 backdrop-blur-sm`}
                whileHover={{ y: -10, rotate: index === 1 ? 1.2 : -0.8 }}
                animate={{ y: [0, index % 2 === 0 ? -6 : -4, 0], rotate: [0, index === 1 ? 0.4 : -0.4, 0] }}
                transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={image} alt={`${activeVault.archiveTitle} showcase ${index + 1}`} className="w-full h-[260px] lg:h-[320px] object-cover opacity-85 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.section>

          {/* Custom storytelling sections for specific archives */}
          {cardId === 'exp-visotech' && (
            <div className="flex flex-col gap-24 w-full mb-12">
              <motion.section initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9}} className="lg:flex lg:items-start lg:gap-12">
                <div className="lg:w-6/12">
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-3">DECORATION SYSTEMS</h2>
                  <p className="font-mono text-sm text-white/40 uppercase mb-4">Designing immersive visual environments for VISOTECH 2026.</p>
                  <p className="font-sans text-white/70 leading-relaxed">Worked as a volunteer in the decoration team for VISOTECH 2026, helping create a futuristic space-themed event environment using creative visual setups, entrance structures, and immersive display concepts. Contributed to improving the overall event atmosphere and audience experience through coordinated decoration execution.</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Event Decoration','Visual Setup','Creative Execution','Team Coordination'].map(t => (
                      <span key={t} className="font-mono text-[10px] uppercase bg-white/[0.02] border border-white/10 px-3 py-1 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-6/12 mt-6 lg:mt-0 flex justify-center lg:justify-end">
                  <motion.div whileHover={{scale:1.02, y:-8, rotate:-2}} className="w-[420px] lg:w-[520px] transform -rotate-6 shadow-lg border border-white/8 bg-white/[0.02] backdrop-blur-sm">
                    <img src={Viso1} alt="Decoration Systems" className="w-full h-[320px] object-cover filter-grain" />
                  </motion.div>
                </div>
              </motion.section>

              <motion.section initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9, delay:0.08}} className="lg:flex lg:items-start lg:gap-12">
                <div className="lg:w-6/12 order-2 lg:order-1 mt-6 lg:mt-0 flex items-center lg:justify-start">
                  <motion.div whileInView={{x:[-12,0,6]}} className="w-[420px] lg:w-[480px] transform rotate-2 shadow-lg border border-white/8 bg-white/[0.02] backdrop-blur-sm">
                    <img src={Viso2} alt="C-Striker Engagement" className="w-full h-[320px] object-cover" />
                  </motion.div>
                </div>

                <div className="lg:w-6/12 order-1 lg:order-2">
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-3">C-STRIKER ENGAGEMENT</h2>
                  <p className="font-mono text-sm text-white/40 uppercase mb-4">Live interaction, technical hosting, and event engagement.</p>
                  <p className="font-sans text-white/70 leading-relaxed">Actively hosted and managed the C-Striker engagement activity during VISOTECH 2026, interacting with participants and maintaining audience engagement throughout the technical showcase. Helped create an energetic and interactive event environment while representing the volunteer team.</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Event Hosting','Public Interaction','Technical Engagement','Live Coordination'].map(t => (
                      <span key={t} className="font-mono text-[10px] uppercase bg-white/[0.02] border border-white/10 px-3 py-1 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.section>
            </div>
          )}

          {cardId === 'exp-mechanics' && (
            <div className="flex flex-col gap-20 w-full mb-12">
              <motion.section initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9}} className="">
                <div>
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-3">ENGINEERING EXCELLENCE</h2>
                  <p className="font-mono text-sm text-white/40 uppercase mb-4">Mastering one of the toughest engineering foundations.</p>
                  <p className="font-sans text-white/70 leading-relaxed">Secured top academic performance in Engineering Mechanics through deep conceptual understanding, analytical problem-solving, and disciplined preparation. Recognized among peers for strong engineering fundamentals and consistent academic focus.</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Engineering Fundamentals','Problem Solving','Academic Excellence','Precision Thinking'].map(t => (
                      <span key={t} className="font-mono text-[10px] uppercase bg-white/[0.02] border border-white/10 px-3 py-1 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <img src={MT1} alt="Engineering Excellence" className="w-full max-w-xl object-cover rounded-sm border border-white/10 shadow-sm" />
                </div>
              </motion.section>

              <motion.section initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9, delay:0.06}} className="lg:flex lg:gap-12 items-center">
                <div className="lg:w-6/12">
                  <img src={MT2} alt="Student Inspiration" className="w-full object-cover rounded-sm border border-white/10 shadow-sm" />
                </div>
                <div className="lg:w-6/12">
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-3">STUDENT INSPIRATION</h3>
                  <p className="font-mono text-sm text-white/40 uppercase mb-4">Sharing knowledge and motivating future engineers.</p>
                  <p className="font-sans text-white/70 leading-relaxed">Delivered motivational and academic interaction sessions that inspired juniors to approach engineering subjects with confidence, discipline, and curiosity. Encouraged analytical learning methods and conceptual clarity.</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Public Speaking','Student Leadership','Mentorship','Academic Motivation'].map(t => (
                      <span key={t} className="font-mono text-[10px] uppercase bg-white/[0.02] border border-white/10 px-3 py-1 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9, delay:0.12}} className="">
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-3">ACADEMIC RECOGNITION</h3>
                <p className="font-mono text-sm text-white/40 uppercase mb-4">Recognition for performance, consistency, and engineering dedication.</p>
                <p className="font-sans text-white/70 leading-relaxed">Received recognition during academic and student events for outstanding performance in Engineering Mechanics and active contribution toward student motivation and academic excellence.</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {['Recognition','Engineering Achievement','Student Excellence','Academic Leadership'].map(t => (
                    <span key={t} className="font-mono text-[10px] uppercase bg-white/[0.02] border border-white/10 px-3 py-1 rounded-sm">{t}</span>
                  ))}
                </div>

                <div className="mt-6">
                  <img src={MT3} alt="Recognition Moment" className="w-full max-w-xl object-cover rounded-sm border border-white/10 shadow-sm" />
                </div>
              </motion.section>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <footer className="mt-48 flex flex-col items-center gap-12 text-center">
          <div className="h-[1px] w-24 bg-[#D4AF37]/20" />

          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-3xl uppercase tracking-tighter text-white/90">END_OF_ARCHIVE_DATA</h3>
            <p className="font-mono text-[9px] text-white/20 tracking-[0.4em] uppercase">READY FOR SYSTEM_EXIT</p>
          </div>

          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 border border-[#D4AF37]/30 px-12 py-4 font-mono text-[10px] font-black tracking-[0.4em] uppercase transition-all text-[#D4AF37] interactive-hover"
          >
            RETURN_TO_EXPERIENCE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-dark-grid {
          background-size: 100px 100px;
          background-image:
            linear-gradient(to right, rgba(212, 175, 55, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.015) 1px, transparent 1px);
        }

        .text-stroke-gold {
          -webkit-text-stroke: 1px rgba(212, 175, 55, 0.2);
          color: transparent;
        }

        @keyframes scanline-anim {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        .animate-scanline {
          animation: scanline-anim 12s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
};

export default ExperiencePage;
