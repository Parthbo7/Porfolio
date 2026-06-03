import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';
import { MRFreshers } from './freshers/MRFreshers';
import { GDGExperience } from './gdg/GDGExperience';
import { StartupBootcamp } from './bootcamp/StartupBootcamp';
import { TPOCoordinator } from './tpo/TPOCoordinator';
import { MechanicsTopper } from './mechanics/MechanicsTopper';
import {
  ExperienceHero,
  ExperienceOverview,
  ExperienceGallery,
  ExperienceTags,
  ExperienceFooter,
  ExperienceMetadata
} from './ExperienceCommon';

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
      subtitle: 'Managing student coordination systems, placement operations, and professional engagement workflows.',
      description: 'Currently working as a TPO Coordinator at MGMCOE Nanded, handling placement coordination, communication systems, student engagement, and operational management activities. Also received the opportunity to pitch a project during the HR Summit professional event.',
      tags: ['TPO Operations', 'Placement Coordination', 'HR Summit', 'Project Pitching', 'Leadership', 'Communication'],
      metaLabels: ['HR_SUMMIT_NODE', 'PLACEMENT_SYSTEM_ACTIVE', 'MGMCOE_COORDINATION', 'PROFESSIONAL_NETWORK'],
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
      title: 'IDEA TO PITCH — STARTUP BOOTCAMP',
      subtitle: 'Leading innovation teams and transforming startup concepts into structured product systems.',
      description: 'Participated in the Idea to Pitch Startup Bootcamp focused on innovation strategy, entrepreneurial thinking, startup pitching, and product development. Led a 10-member team through collaborative ideation, leadership coordination, and startup execution activities.',
      tags: ['Team Leadership', 'Startup Thinking', 'Product Strategy', 'Innovation Systems', 'Pitching', 'Collaboration'],
      metaLabels: ['TEAM_LEAD_NODE', 'STARTUP_PROTOCOL', 'IDEA_MATRIX_ACTIVE', 'INNOVATION_ARCHIVE'],
      isExpandable: true
    },
    {
      id: 'exp-freshers',
      year: '2024',
      title: 'MR. FRESHERS — RUNNER UP',
      subtitle: 'Confidence, communication, leadership, and stage performance recognition.',
      description: 'Successfully progressed through multiple competitive rounds including Group Discussion, Personal Interview, Talent Round, live Q&A, and stand-up comedy performance on stage — eventually achieving Runner Up in Mr. Freshers through confidence, communication skills, humor, and stage presence.',
      tags: ['PUBLIC SPEAKING', 'GROUP DISCUSSION', 'INTERVIEW SKILLS', 'STAND-UP COMEDY', 'STAGE PRESENCE', 'LEADERSHIP', 'CONFIDENCE'],
      metaLabels: ['PERSONALITY_NODE','STAGE_ACTIVE','LIVE_QNA_PROTOCOL','TALENT_SYSTEM','CONFIDENCE_MATRIX'],
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
      baseRotate: -1,
      revealRotate: -1.2,
      floatShift: -10,
      nodeLabel: 'PERSONALITY_NODE',
      coordinateLabel: 'X:+42 / Y:662',
      shellLabel: 'PERSONALITY_ARCHIVE',
      accentClass: 'border-[#BCC3C8]/40'
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
                  onClick={() => window.location.hash = '#projects'}
                  className="text-black/40 hover:text-black transition-all duration-300 uppercase interactive-hover cursor-pointer"
                >
                  projects
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

                          {card.id === 'exp-startup' && (
                            <div className="absolute top-4 left-6 z-30 flex flex-col gap-2 pointer-events-none">
                              {card.metaLabels?.map((label) => (
                                <div key={label} className="transform transition-transform duration-300 group-hover/card:-translate-y-2 group-hover/card:rotate-1 bg-white/85 dark:bg-black/80 backdrop-blur-md border border-black/8 dark:border-white/10 px-2 py-0.5 rounded-sm font-mono text-[8px] tracking-[0.12em] text-[#00CC52] uppercase shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                                  <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#00CC52] animate-pulse align-middle" />
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
            className="w-full bg-[#FAF9F6] text-black p-0 relative"
          >
            <GDGExperience onBack={() => {
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
            className="w-full bg-[#FAF9F6] text-black p-0 relative"
          >
            {selectedCardId === 'exp-freshers' ? (
              <MRFreshers
                onBack={() => {
                  playClickTick(1400, 0.05);
                  setView('list');
                }}
                isDarkMode={true}
              />
            ) : selectedCardId === 'exp-startup' ? (
              <StartupBootcamp
                onBack={() => {
                  playClickTick(1400, 0.05);
                  setView('list');
                }}
                isDarkMode={true}
              />
            ) : selectedCardId === 'exp-tpo' ? (
              <TPOCoordinator
                onBack={() => {
                  playClickTick(1400, 0.05);
                  setView('list');
                }}
              />
            ) : selectedCardId === 'exp-mechanics' ? (
              <MechanicsTopper
                onBack={() => {
                  playClickTick(1400, 0.05);
                  setView('list');
                }}
              />
            ) : (
              <DetailedExperienceView
                cardId={selectedCardId || ''}
                card={experienceCards.find(c => c.id === selectedCardId)}
                onBack={() => {
                  playClickTick(1400, 0.05);
                  setView('list');
                }}
              />
            )}
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
  const [logs, setLogs] = useState<string[]>([
    '> ARCHIVE DATABASE ACCESS NOMINAL...',
    '> SYSTEM METRICS DECRYPTED // SECURITY PROTOCOL NOMINAL'
  ]);

  useEffect(() => {
    const telemetries = [
      'PULLING CAREER DATA SEGMENTS...',
      'LOGGING OPERATIONS MATRIX NOMINAL.',
      'SOURCE ARCHIVE ON STANDBY...'
    ];

    const logInterval = setInterval(() => {
      const randomLog = telemetries[Math.floor(Math.random() * telemetries.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, []);

  if (!card) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#FAF9F6]">
        <span className="text-black/50 font-mono">Experience not found</span>
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

  const badges = [
    { label: activeVault.systemTag, top: '12%', left: '4%', rotate: -5, delay: 0.1 },
    { label: activeVault.toneTag, top: '24%', right: '4%', rotate: 3, delay: 0.3 },
    { label: 'SECURE_NODE', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
    { label: 'OS_VAULT_ACTIVE', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
  ];

  const isVisotech = cardId === 'exp-visotech';

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto no-scrollbar relative flex flex-col bg-transparent text-black z-10"
    >
      <main className="min-h-screen w-full relative overflow-x-hidden pb-32">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

        {/* Ambient Glow Halos */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          <div className="absolute left-[8%] top-[14%] w-72 h-72 rounded-full bg-[#00CC52]/6 blur-[80px]" />
          <div className="absolute right-[12%] top-[48%] w-80 h-80 rounded-full bg-[#D4AF37]/6 blur-[90px]" />
        </div>

        {/* Draggable Badges */}
        <ExperienceMetadata badges={badges} containerRef={containerRef} />

        <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10">
          {/* HERO */}
          <ExperienceHero
            onBack={onBack}
            protocolLabel={`${activeVault.systemTag}_PROTOCOL`}
            title={activeVault.archiveTitle}
            subtitle={card.subtitle}
            infoLabel={`${card.year} • SYSTEM VAULT SECURE`}
          />

          {/* OVERVIEW */}
          <ExperienceOverview
            ledgerLabel="LEDGER_NODE // SYSTEM_VAULT"
            identityLabel="ARCHIVE IDENTITY"
            headline={activeVault.intro}
            points={activeVault.timeline.map((t) => `${t.phase}: ${t.detail}`)}
            pointsTitle="[ ARCHIVE PROCESSING TIMELINE ]"
            sidebarTitle="// HIGHLIGHTS"
            sidebarLabel="STACK_SPEC"
            sidebarItems={activeVault.highlights}
          />

          {/* VISOTECH CUSTOM SPECIFIC SECTIONS */}
          {isVisotech && (
            <div className="flex flex-col gap-20 w-full mb-20">
              <section className="w-full max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center text-left">
                <div className="w-full lg:w-7/12 relative flex justify-center">
                  <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-br from-[#00CC52]/5 to-transparent border border-black/5 rounded-[18px] pointer-events-none -z-10" />
                  <motion.div
                    className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] group"
                    whileHover={{ scale: 1.015, y: -6 }}
                  >
                    <div className="w-full rounded-[10px] overflow-hidden bg-black/5">
                      <img
                        src={Viso1}
                        alt="Decoration Systems"
                        className="w-full h-[320px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="w-full lg:w-5/12 flex flex-col gap-6 text-left">
                  <h3 className="font-display font-black text-3xl uppercase tracking-tighter leading-none">
                    DECORATION SYSTEMS
                  </h3>
                  <div className="h-[2px] w-12 bg-[#00CC52]" />
                  <p className="font-sans text-[14px] leading-relaxed text-[#5A5A5A] font-light">
                    Worked as a volunteer in the decoration team for VISOTECH 2026, helping create a
                    futuristic space-themed event environment using creative visual setups, entrance
                    structures, and immersive display concepts. Contributed to improving the overall
                    event atmosphere and audience experience through coordinated decoration execution.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Event Decoration', 'Visual Setup', 'Creative Execution', 'Team Coordination'].map(
                      (t) => (
                        <span
                          key={t}
                          className="font-mono text-[8px] uppercase border border-black/10 bg-white/80 px-2 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </section>

              <section className="w-full max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row-reverse gap-12 items-center text-left">
                <div className="w-full lg:w-7/12 relative flex justify-center">
                  <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-br from-[#00CC52]/5 to-transparent border border-black/5 rounded-[18px] pointer-events-none -z-10" />
                  <motion.div
                    className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] group"
                    whileHover={{ scale: 1.015, y: -6 }}
                  >
                    <div className="w-full rounded-[10px] overflow-hidden bg-black/5">
                      <img
                        src={Viso2}
                        alt="C-Striker Engagement"
                        className="w-full h-[320px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="w-full lg:w-5/12 flex flex-col gap-6 text-left">
                  <h3 className="font-display font-black text-3xl uppercase tracking-tighter leading-none">
                    C-STRIKER ENGAGEMENT
                  </h3>
                  <div className="h-[2px] w-12 bg-[#00CC52]" />
                  <p className="font-sans text-[14px] leading-relaxed text-[#5A5A5A] font-light">
                    Actively hosted and managed the C-Striker engagement activity during VISOTECH
                    2026, interacting with participants and maintaining audience engagement
                    throughout the technical showcase. Helped create an energetic and interactive
                    event environment while representing the volunteer team.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Event Hosting', 'Public Interaction', 'Technical Engagement', 'Live Coordination'].map(
                      (t) => (
                        <span
                          key={t}
                          className="font-mono text-[8px] uppercase border border-black/10 bg-white/80 px-2 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* GALLERY (FOR NON-VISOTECH generic pages) */}
          {!isVisotech && activeVault.images && activeVault.images.length > 0 && (
            <ExperienceGallery
              images={activeVault.images.map((img, i) => ({
                src: img,
                caption: `ARCHIVE IMAGE PROOF 0${i + 1}`,
              }))}
            />
          )}

          {/* TAGS */}
          <ExperienceTags tags={card.tags} />

          {/* FOOTER */}
          <ExperienceFooter onBack={onBack} logs={logs} />
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;
