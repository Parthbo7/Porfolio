import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';
import { MRFreshers } from './freshers/MRFreshers';
import { GDGExperience } from './gdg/GDGExperience';
import { StartupBootcamp } from './bootcamp/StartupBootcamp';
import { TPOCoordinator } from './tpo/TPOCoordinator';
import { MechanicsTopper } from './mechanics/MechanicsTopper';

// ─── Ambient floating dot ────────────────────────────────────────────────────
const AmbientDot = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-[#A8D3C8] pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, opacity: 0.15 }}
    animate={{ y: [0, -14, 0], opacity: [0.1, 0.25, 0.1] }}
    transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

// ─── Floating coordinate label ───────────────────────────────────────────────
const CoordLabel = ({ x, y, label, rotate = 0 }: { x: string; y: string; label: string; rotate?: number }) => (
  <motion.div
    className="absolute font-mono text-[7px] text-black/20 tracking-[0.25em] uppercase pointer-events-none select-none"
    style={{ left: x, top: y, rotate: `${rotate}deg` }}
    animate={{ opacity: [0.15, 0.4, 0.15] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  >
    {label}
  </motion.div>
);

// ─── Tiny directional arrow ───────────────────────────────────────────────────
const TinyArrow = ({ x, y, dir = 'right' }: { x: string; y: string; dir?: 'right' | 'left' | 'down' }) => {
  const arrows = { right: '→', left: '←', down: '↓' };
  return (
    <motion.div
      className="absolute font-mono text-[10px] text-[#A8D3C8]/30 pointer-events-none select-none"
      style={{ left: x, top: y }}
      animate={{ opacity: [0.2, 0.6, 0.2], x: dir === 'right' ? [0, 4, 0] : dir === 'left' ? [0, -4, 0] : 0, y: dir === 'down' ? [0, 4, 0] : 0 }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {arrows[dir]}
    </motion.div>
  );
};




// ─── Card config ─────────────────────────────────────────────────────────────
interface CardConfig {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  // layout
  side: 'left' | 'right';
  widthClass: string;
  marginLeft?: string;
  marginRight?: string;
  rotate: number;
  extraTop?: string;
  featured?: boolean;
  accentColor: string;
  sysLabel: string;
  nodeIndex: string;
}

const CARDS: CardConfig[] = [
  {
    id: 'exp-gdg',
    year: '2025 — PRESENT',
    title: 'GDG DESIGN COORDINATOR',
    subtitle: 'Community Design & Creative Systems',
    description:
      'Leading the visual identity and branding ecosystem for Google Developer Groups through campaigns, event systems, and digital community experiences.',
    tags: ['Creative Campaigns', 'Event Branding', 'Community Design', 'Hackathon Visuals'],
    side: 'left',
    widthClass: 'w-[90vw] sm:w-[62vw] lg:w-[52vw]',
    marginLeft: '2vw',
    rotate: -1.2,
    featured: true,
    accentColor: '#00FF66',
    sysLabel: 'SYSTEM_ACTIVE',
    nodeIndex: '01',
  },
  {
    id: 'exp-visotech',
    year: '2026',
    title: 'VISOTECH 2026',
    subtitle: 'Event volunteering, futuristic decoration systems, and live technical engagement experiences.',
    description:
      'Contributed as a volunteer during VISOTECH 2026 by working on event decoration systems and actively hosting the C-Striker engagement activity while helping create an immersive futuristic technical event atmosphere.',
    tags: ['Event Volunteering', 'Decoration Design', 'C-Striker Hosting', 'Technical Event', 'Community Engagement'],
    side: 'right',
    widthClass: 'w-[88vw] sm:w-[48vw] lg:w-[40vw]',
    marginRight: '4vw',
    rotate: 1.1,
    extraTop: '60px',
    accentColor: '#A8D3C8',
    sysLabel: 'VISOTECH_RUNTIME',
    nodeIndex: '02',
  },

  {
    id: 'exp-tpo',
    year: '2025',
    title: 'TPO COORDINATOR',
    subtitle: 'Managing student coordination systems, placement operations, and professional engagement workflows.',
    description:
      'Currently working as a TPO Coordinator at MGMCOE Nanded, handling placement coordination, communication systems, student engagement, and operational management activities. Also received the opportunity to pitch a project during the HR Summit professional event.',
    tags: ['TPO Operations', 'Placement Coordination', 'HR Summit', 'Project Pitching', 'Leadership', 'Communication'],
    side: 'left',
    widthClass: 'w-[88vw] sm:w-[56vw] lg:w-[44vw]',
    marginLeft: '6vw',
    rotate: -0.6,
    extraTop: '-30px',
    accentColor: '#B8C8FF',
    sysLabel: 'HR_SUMMIT_NODE',
    nodeIndex: '03',
  },
  {
    id: 'exp-mechanics',
    year: '2024',
    title: 'MECHANICS TOPPER',
    subtitle: "Academic excellence in one of engineering's most challenging foundational subjects.",
    description:
      'Achieved top academic performance in Engineering Mechanics — one of the toughest core engineering subjects — through analytical thinking, precision problem-solving, and conceptual mastery. Inspired juniors academically through consistency and strong engineering fundamentals.',
    tags: ['Engineering Mechanics', 'Academic Excellence', 'Problem Solving', 'Analytical Thinking', 'Student Inspiration'],
    side: 'right',
    widthClass: 'w-[88vw] sm:w-[44vw] lg:w-[36vw]',
    marginRight: '8vw',
    rotate: 1.4,
    extraTop: '40px',
    accentColor: '#C9D7D2',
    sysLabel: 'MECHANICS_PRECISION_LOG',
    nodeIndex: '04',
  },

  {
    id: 'exp-startup',
    year: '2025',
    title: 'IDEA TO PITCH — STARTUP BOOTCAMP',
    subtitle: 'Leading innovation teams and transforming startup concepts into structured product systems.',
    description:
      'Participated in the Idea to Pitch Startup Bootcamp focused on innovation strategy, entrepreneurial thinking, startup pitching, and product development. Led a 10-member team through collaborative ideation, leadership coordination, and startup execution activities.',
    tags: ['Team Leadership', 'Startup Thinking', 'Product Strategy', 'Innovation Systems', 'Pitching', 'Collaboration'],
    side: 'left',
    widthClass: 'w-[88vw] sm:w-[58vw] lg:w-[48vw]',
    marginLeft: '3vw',
    rotate: -0.9,
    extraTop: '20px',
    accentColor: '#FF8C69',
    sysLabel: 'TEAM_LEAD_NODE',
    nodeIndex: '05',
  },
  {
    id: 'exp-freshers',
    year: '2024',
    title: 'MR. FRESHERS — RUNNER UP',
    subtitle: 'Confidence, communication, leadership, and stage performance recognition.',
    description:
      'Successfully progressed through multiple competitive rounds including Group Discussion, Personal Interview, Talent Round, live Q&A, and stand-up comedy performance on stage — eventually achieving Runner Up in Mr. Freshers through confidence, communication skills, humor, and stage presence.',
    tags: ['Public Speaking', 'Group Discussion', 'Interview Skills', 'Stand-Up Comedy', 'Stage Presence', 'Leadership', 'Confidence'],
    side: 'right',
    widthClass: 'w-[88vw] sm:w-[46vw] lg:w-[38vw]',
    marginRight: '5vw',
    rotate: -1.0,
    extraTop: '50px',
    accentColor: '#B8C0C6',
    sysLabel: 'PERSONALITY_NODE',
    nodeIndex: '06',
  },

];

// ─── Individual card ──────────────────────────────────────────────────────────
const ExperienceCard = ({ card, index }: { card: CardConfig; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const handleClick = () => {
    playClickTick(1600, 0.08);
    const slugMap: Record<string, string> = {
      'exp-gdg': 'gdg',
      'exp-visotech': 'visotech',
      'exp-tpo': 'tpo-archive',
      'exp-mechanics': 'mechanics-archive',
      'exp-startup': 'startup',
      'exp-freshers': 'freshers',
    };
    window.location.hash = `#experience/${slugMap[card.id]}`;
  };

  const isLeft = card.side === 'left';

  return (
    <div
      ref={ref}
      className="relative w-full flex"
      style={{
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        marginTop: index === 0 ? '0' : card.extraTop ?? '0',
      }}
    >
      {/* Floating metadata label — far edge */}
      <motion.div
        className="absolute font-mono text-[7px] tracking-[0.22em] uppercase pointer-events-none select-none hidden lg:block"
        style={{
          color: card.accentColor,
          opacity: 0.5,
          [isLeft ? 'right' : 'left']: '2%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
      >
        {card.sysLabel}
      </motion.div>

      {/* Tiny arrows near card edge */}
      <motion.div
        className="absolute font-mono text-[9px] pointer-events-none select-none hidden lg:block"
        style={{
          color: card.accentColor,
          opacity: 0.4,
          [isLeft ? 'left' : 'right']: isLeft ? `calc(${card.marginLeft ?? '2vw'} + ${card.widthClass.match(/lg:w-\[(\S+)\]/)?.[1] ?? '45vw'} - 40px)` : `calc(${card.marginRight ?? '4vw'} + 10px)`,
          top: '-24px',
        }}
        animate={{ x: isLeft ? [0, 6, 0] : [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {isLeft ? '→' : '←'}
      </motion.div>

      {/* The card */}
      <motion.div
        className={`${card.widthClass} relative cursor-pointer select-none`}
        style={{
          marginLeft: isLeft ? card.marginLeft ?? '0' : undefined,
          marginRight: !isLeft ? card.marginRight ?? '0' : undefined,
        }}
        initial={{ opacity: 0, y: 60, rotate: card.rotate * 2, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, rotate: card.rotate, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
        whileHover={{
          y: -14,
          rotate: 0,
          scale: card.featured ? 1.025 : 1.018,
          filter: 'blur(0px)',
          transition: { duration: 0.35, ease: 'easeOut' },
        }}
        onClick={handleClick}
      >
        {/* Parallax wrapper */}
        <motion.div style={{ y: parallaxY }}>
          {/* Glow behind card */}
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-lg"
            style={{ background: card.accentColor, opacity: 0.06 }}
          />

          {/* Card body */}
          <div
            className="relative bg-white/95 backdrop-blur-sm border rounded-[2px] overflow-hidden transition-all duration-400 group"
            style={{
              borderColor: card.accentColor + '44',
              boxShadow: `inset 0 1px 1px rgba(255,255,255,0.8), 6px 6px 0px ${card.accentColor}18, 0 30px 60px rgba(0,0,0,0.06)`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = card.accentColor + 'aa';
              (e.currentTarget as HTMLElement).style.boxShadow = `0 30px 80px rgba(0,0,0,0.12), 8px 8px 0px ${card.accentColor}30`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = card.accentColor + '44';
              (e.currentTarget as HTMLElement).style.boxShadow = `inset 0 1px 1px rgba(255,255,255,0.8), 6px 6px 0px ${card.accentColor}18, 0 30px 60px rgba(0,0,0,0.06)`;
            }}
          >
            {/* Micro-grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.015] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />

            {/* Accent top bar */}
            <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${card.accentColor}, transparent)` }} />

            {/* Content */}
            <div className={card.featured ? 'p-8 sm:p-10' : 'p-6 sm:p-8'}>
              {/* Year + arrow row */}
              <div className="flex justify-between items-start mb-5">
                <span
                  className={`font-mono ${card.featured ? 'text-[11px]' : 'text-[9px]'} font-extrabold tracking-[0.2em] uppercase px-3 py-1 rounded-[2px] border`}
                  style={{ color: card.accentColor, borderColor: card.accentColor + '50', background: card.accentColor + '10' }}
                >
                  {card.year}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[7px] text-black/30 uppercase tracking-widest hidden sm:block">OPEN_ARCHIVE</span>
                  <ArrowUpRight
                    size={card.featured ? 16 : 13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: card.accentColor }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`font-display font-black tracking-tighter uppercase leading-none mb-2 transition-colors duration-300 ${card.featured ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}
                style={{ color: '#000' }}
              >
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="font-mono text-[8px] tracking-wider text-black/40 uppercase mb-4">
                {card.subtitle}
              </p>

              {/* Divider */}
              <div className="h-[1px] w-full bg-black/5 mb-4" />

              {/* Description */}
              <p className={`font-sans ${card.featured ? 'text-[13px] sm:text-[14px]' : 'text-[12px] sm:text-[13px]'} text-black/65 leading-relaxed mb-5 normal-case font-normal`}>
                {card.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[8px] tracking-wider uppercase px-2.5 py-0.5 border rounded-[2px] transition-all duration-300"
                    style={{ borderColor: card.accentColor + '40', color: '#00000070', background: card.accentColor + '08' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer metadata */}
              <div className="flex items-center justify-between pt-3 border-t border-black/5 opacity-40 group-hover:opacity-90 transition-opacity duration-300">
                <span className="font-mono text-[7px] text-black/40 tracking-[0.3em] uppercase">NODE_ARCHIVE_{card.nodeIndex}</span>
                <span className="font-mono text-[7px] text-black/40 tracking-[0.3em] uppercase">{card.featured ? 'FEATURED_ENTRY' : `ENTRY_${card.nodeIndex}`}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
export const ExperienceSection = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isDetailView = currentHash.startsWith('#experience/') && currentHash !== '#experience';



  return (
    <div className="w-full relative overflow-x-hidden min-h-screen bg-[#F6F6F7]">
      {/* ── Ambient background dots ── */}
      <AmbientDot x="5%" y="12%" size={6} delay={0} />
      <AmbientDot x="92%" y="22%" size={4} delay={1.5} />
      <AmbientDot x="15%" y="55%" size={8} delay={2.3} />
      <AmbientDot x="82%" y="68%" size={5} delay={0.8} />
      <AmbientDot x="48%" y="35%" size={3} delay={3.1} />
      <AmbientDot x="70%" y="80%" size={7} delay={1.2} />
      <AmbientDot x="28%" y="90%" size={4} delay={2.7} />

      {/* ── Coordinate labels ── */}
      <CoordLabel x="3%" y="8%" label="X:0042 Y:0091" rotate={-2} />
      <CoordLabel x="78%" y="15%" label="COORD_SYS_02" rotate={1} />
      <CoordLabel x="8%" y="70%" label="GRID_NODE_07" rotate={3} />
      <CoordLabel x="85%" y="60%" label="X:7731 Y:4420" rotate={-1} />

      {/* ── Tiny arrows ── */}
      <TinyArrow x="50%" y="5%" dir="down" />
      <TinyArrow x="12%" y="45%" dir="right" />
      <TinyArrow x="80%" y="75%" dir="left" />

      <AnimatePresence mode="wait">
        {!isDetailView ? (
          /* ════════════════════════════════════════════
             MAIN ANTI-GRAVITY ARCHIVE VIEW
          ════════════════════════════════════════════ */
          <motion.div
            key="main-experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* ── OVERSIZED TITLE ── */}
            <div className="w-full flex flex-col items-center mb-4 relative z-10 px-4">
              {/* Corner meta */}
              <div className="absolute right-[4%] top-0 font-mono text-[8px] sm:text-[9px] text-black/35 border border-black/10 px-2 py-0.5 rounded-[2px]">
                PARTH_05
              </div>
              <div className="absolute left-[4%] top-4 font-mono text-[7px] text-black/25 tracking-widest uppercase">
                SYS_ACTIVE
              </div>

              <h1 className="font-display font-black text-[13vw] sm:text-[9vw] lg:text-[7.5vw] leading-[0.88] tracking-tighter text-black uppercase select-none mt-2 text-center">
                EXPERIENCE
              </h1>

              <div className="mt-5 px-6 py-2.5 bg-white border border-black/8 text-center font-sans text-[11px] sm:text-[12px] tracking-widest text-black/60 max-w-md shadow-[4px_4px_0px_rgba(0,0,0,0.03)] rounded-[2px] uppercase font-semibold">
                Creative leadership, design systems, communities, and digital contributions.
              </div>
            </div>

            {/* ── ANTI-GRAVITY TIMELINE ── */}
            <div className="relative w-full flex flex-col z-10" style={{ gap: 'clamp(80px, 14vw, 180px)', paddingTop: '60px', paddingBottom: '120px' }}>

              {/* Faint vertical centre guide — purely decorative */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 pointer-events-none hidden lg:block"
                style={{ background: 'linear-gradient(to bottom, transparent 0%, #A8D3C8 20%, #A8D3C8 80%, transparent 100%)', opacity: 0.08 }}
              />

              {CARDS.map((card, i) => (
                <ExperienceCard key={card.id} card={card} index={i} />
              ))}
            </div>
          </motion.div>
        ) : currentHash === '#experience/freshers' ? (
          <MRFreshers onBack={() => { playClickTick(1600, 0.05); window.location.hash = '#experience'; }} />
        ) : currentHash === '#experience/gdg' ? (
          <GDGExperience onBack={() => { playClickTick(1600, 0.05); window.location.hash = '#experience'; }} />
        ) : currentHash === '#experience/startup' ? (
          <StartupBootcamp onBack={() => { playClickTick(1600, 0.05); window.location.hash = '#experience'; }} />
        ) : currentHash === '#experience/tpo-archive' ? (
          <TPOCoordinator onBack={() => { playClickTick(1600, 0.05); window.location.hash = '#experience'; }} />
        ) : currentHash === '#experience/mechanics-archive' ? (
          <MechanicsTopper onBack={() => { playClickTick(1600, 0.05); window.location.hash = '#experience'; }} />
        ) : (
          /* ════════════════════════════════════════════
             GENERIC DETAIL VIEW
          ════════════════════════════════════════════ */
          <motion.div
            key="experience-detail"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl mx-auto flex flex-col items-center pb-24 relative px-4"
          >
            <div className="w-full flex flex-col items-center mb-10 sm:mb-16 relative z-10">
              <button
                onClick={() => { playClickTick(1600, 0.05); window.location.hash = '#experience'; }}
                className="absolute left-0 top-0 font-mono text-[9px] sm:text-[10px] text-black/50 hover:text-black border border-black/10 hover:border-black px-3 py-1 rounded-[2px] bg-white shadow-sm flex items-center gap-1.5 transition-all duration-300"
              >
                <ArrowLeft size={11} />
                BACK_TO_ARCHIVE
              </button>

              <div className="absolute right-0 top-0 font-mono text-[8px] text-black/35 border border-black/10 px-2 py-0.5 rounded-[2px] bg-white shadow-sm">
                ARCHIVE_NODE
              </div>

              <h1 className="font-display font-black text-[10vw] sm:text-[7vw] lg:text-[6vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-12 sm:mt-8 text-center">
                EXPERIENCE ARCHIVE
              </h1>

              <div className="mt-4 px-6 py-2.5 bg-white border border-[#A8D3C8]/30 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/80 max-w-lg shadow-[4px_4px_0px_rgba(168,211,200,0.15)] rounded-[2px] uppercase font-bold">
                Detailed experience documentation and project insights.
              </div>
            </div>

            <div className="w-full max-w-3xl px-4 mb-16 sm:mb-24 z-10 text-center">
              <p className="font-sans text-sm sm:text-base text-black/70 leading-relaxed font-normal border-l-4 border-r-4 border-black/5 px-6 py-4 normal-case">
                This experience module contains detailed project documentation, workflows, and creative outcomes. Additional content sections coming soon for this experience node.
              </p>
            </div>

            <motion.button
              onClick={() => { playClickTick(1600, 0.05); window.location.hash = '#experience'; }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#A8D3C8] border border-[#A8D3C8]/50 px-6 py-3 rounded-[2px] hover:border-[#A8D3C8] transition-all group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              RETURN_TO_TIMELINE
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating draggable stickers ── */}
      {[
        { label: 'COMMUNITY_NODE', top: '18%', left: '-1%', rotate: 6, bg: '#E8E8E8' },
        { label: 'DESIGN_SYSTEM', bottom: '35%', right: '-1%', rotate: -3, bg: '#F5F5F5' },
        { label: 'VISUAL_ARCHIVE', top: '58%', left: '0%', rotate: 2, bg: '#E0E0E0' },
        { label: 'EXPERIENCE_MATRIX', top: '38%', right: '0%', rotate: -6, bg: '#F0F0F0' },
      ].map((s) => (
        <motion.div
          key={s.label}
          drag
          dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
          dragElastic={0.1}
          className="absolute font-mono text-[8px] border border-[#A9A9A9]/40 shadow-[2px_2px_4px_rgba(0,0,0,0.06)] px-2 py-1 font-extrabold uppercase tracking-widest select-none cursor-grab active:cursor-grabbing z-30 hidden lg:block text-[#6B6B6B] backdrop-blur-sm rounded-[2px]"
          style={{ background: s.bg, top: (s as any).top, bottom: (s as any).bottom, left: (s as any).left, right: (s as any).right, rotate: `${s.rotate}deg` } as React.CSSProperties}
          whileHover={{ scale: 1.1, rotate: 0 }}
        >
          {s.label}
        </motion.div>
      ))}
    </div>
  );
};
