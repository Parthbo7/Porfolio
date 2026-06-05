import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickTick, playUnlockSuccess } from '../utils/SoundManager';
import { ArrowUpRight, ChevronRight, Cpu, Activity, Zap, GraduationCap, Mail, Github, Linkedin, Instagram, FileText } from 'lucide-react';

interface PortalItem {
  num: string;
  name: string;
  href: string;
  title: string;
  icon: any;
  subtopics: string[];
}

const portalItems: PortalItem[] = [
  { 
    num: '01', 
    name: 'PROJECTS', 
    href: '#projects',
    title: 'PROJECT DATABASE',
    icon: Cpu,
    subtopics: ['CampusConnect', 'Portfolio OS', 'AI Projects', 'Research Projects', 'Hackathon Projects']
  },
  { 
    num: '02', 
    name: 'EXPERIENCE', 
    href: '#experience',
    title: 'EXPERIENCE TIMELINE',
    icon: Activity,
    subtopics: ['Hackathons', 'Leadership', 'Development Journey', 'Achievements']
  },
  { 
    num: '03', 
    name: 'SKILL STACK', 
    href: '#stack',
    title: 'SYSTEM CAPABILITIES',
    icon: Zap,
    subtopics: ['Frontend', 'Backend', 'Programming Languages', 'Tools', 'AI & ML']
  },
  { 
    num: '04', 
    name: 'PROFILE', 
    href: '#profile',
    title: 'IDENTITY ARCHIVE',
    icon: GraduationCap,
    subtopics: ['About Me', 'Academic Archive', 'Personality Matrix', 'Mission Control', 'Timeline']
  },
  { 
    num: '05', 
    name: 'CONNECT', 
    href: '#contact',
    title: 'COMMUNICATION HUB',
    icon: Mail,
    subtopics: ['GitHub', 'LinkedIn', 'Instagram', 'Email', 'Resume', 'Contact Form']
  }
];

interface NavigationalOSPortalProps {
  onNavigate?: (href: string) => void;
  isOverlay?: boolean;
}

export const NavigationalOSPortal = ({ onNavigate, isOverlay = false }: NavigationalOSPortalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip mouse events on mobile
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      container.style.setProperty('--portal-glow-x', `${x}px`);
      container.style.setProperty('--portal-glow-y', `${y}px`);
    };

    container.addEventListener('mousemove', onMouseMove);
    return () => container.removeEventListener('mousemove', onMouseMove);
  }, [isMobile]);

  const handleLinkClick = (href: string) => {
    playUnlockSuccess();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState(null, '', '/');
      window.location.hash = href;
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const renderPreviewContent = (index: number) => {
    const item = portalItems[index];
    const Icon = item.icon;

    switch (item.name) {
      case 'PROJECTS':
        return (
          <motion.div
            key="projects-preview"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Icon className="text-[#00FF66] animate-pulse" size={14} />
              <span className="font-mono text-[9px] tracking-widest font-bold text-white/40">
                // SYSTEM_PREVIEW_{item.num}
              </span>
            </div>
            <h3 className="font-display font-black text-2.5xl text-[#00FF66] uppercase tracking-tight">
              {item.title}
            </h3>
            <div className="font-mono text-[10px] space-y-3.5 text-white/80 bg-white/[0.015] border border-white/5 p-4 rounded-sm backdrop-blur-md">
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Active Projects:</span>
                <span className="text-white font-extrabold text-xs">8</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Featured Node:</span>
                <span className="text-[#00FF66] font-extrabold text-xs">CampusConnect</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Status:</span>
                <span className="text-emerald-400 font-extrabold text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Development Active
                </span>
              </div>
            </div>
          </motion.div>
        );
      case 'EXPERIENCE':
        return (
          <motion.div
            key="experience-preview"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Icon className="text-[#00FF66] animate-pulse" size={14} />
              <span className="font-mono text-[9px] tracking-widest font-bold text-white/40">
                // SYSTEM_PREVIEW_{item.num}
              </span>
            </div>
            <h3 className="font-display font-black text-2.5xl text-[#00FF66] uppercase tracking-tight">
              {item.title}
            </h3>
            <div className="font-mono text-[10px] space-y-3.5 text-white/80 bg-white/[0.015] border border-white/5 p-4 rounded-sm backdrop-blur-md">
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Primary Focus:</span>
                <span className="text-white font-extrabold text-xs">Full Stack & AI Systems</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Community Engagement:</span>
                <span className="text-white font-extrabold text-xs">GDG Nanded Design Lead</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Milestones:</span>
                <span className="text-[#00FF66] font-extrabold text-xs">Multiple Hackathon Wins</span>
              </div>
            </div>
          </motion.div>
        );
      case 'SKILL STACK':
        return (
          <motion.div
            key="skills-preview"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Icon className="text-[#00FF66] animate-pulse" size={14} />
              <span className="font-mono text-[9px] tracking-widest font-bold text-white/40">
                // SYSTEM_PREVIEW_{item.num}
              </span>
            </div>
            <h3 className="font-display font-black text-2.5xl text-[#00FF66] uppercase tracking-tight">
              {item.title}
            </h3>
            <div className="font-mono text-[10px] space-y-3.5 text-white/80 bg-white/[0.015] border border-white/5 p-4 rounded-sm backdrop-blur-md">
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Primary Tech Stack:</span>
                <span className="text-white font-extrabold text-xs">React / Next.js / Python</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Secondary Systems:</span>
                <span className="text-white font-extrabold text-xs">TypeScript / GSAP / PyTorch</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Visual Interface:</span>
                <span className="text-white font-extrabold text-xs">Figma / Tailwind CSS</span>
              </div>
            </div>
          </motion.div>
        );
      case 'PROFILE':
        return (
          <motion.div
            key="profile-preview"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Icon className="text-[#00FF66] animate-pulse" size={14} />
              <span className="font-mono text-[9px] tracking-widest font-bold text-white/40">
                // SYSTEM_PREVIEW_{item.num}
              </span>
            </div>
            <h3 className="font-display font-black text-2.5xl text-[#00FF66] uppercase tracking-tight">
              {item.title}
            </h3>
            <div className="font-mono text-[10px] space-y-3.5 text-white/80 bg-white/[0.015] border border-white/5 p-4 rounded-sm backdrop-blur-md">
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Name:</span>
                <span className="text-white font-extrabold text-xs">Parth Bulbule</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Role:</span>
                <span className="text-[#FF3E6C] font-extrabold text-xs">IT Engineer</span>
              </div>
              <div>
                <span className="text-white/40 block mb-0.5 uppercase text-[8.5px] tracking-wider">Status:</span>
                <span className="text-emerald-400 font-extrabold text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Online
                </span>
              </div>
            </div>
          </motion.div>
        );
      case 'CONNECT':
        return (
          <motion.div
            key="connect-preview"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Icon className="text-[#00FF66] animate-pulse" size={14} />
              <span className="font-mono text-[9px] tracking-widest font-bold text-white/40">
                // SYSTEM_PREVIEW_{item.num}
              </span>
            </div>
            <h3 className="font-display font-black text-2.5xl text-[#00FF66] uppercase tracking-tight">
              {item.title}
            </h3>
            <div className="font-mono text-[10px] space-y-2.5 text-white/80 bg-white/[0.015] border border-white/5 p-4 rounded-sm backdrop-blur-md">
              <div className="flex justify-between items-baseline gap-4 border-b border-white/[0.03] pb-1.5">
                <span className="text-white/40 uppercase text-[8.5px]">GitHub:</span>
                <span className="text-white font-bold">Parthbo7</span>
              </div>
              <div className="flex justify-between items-baseline gap-4 border-b border-white/[0.03] pb-1.5">
                <span className="text-white/40 uppercase text-[8.5px]">LinkedIn:</span>
                <span className="text-white font-bold">Parth Bulbule</span>
              </div>
              <div className="flex justify-between items-baseline gap-4 border-b border-white/[0.03] pb-1.5">
                <span className="text-white/40 uppercase text-[8.5px]">Instagram:</span>
                <span className="text-white font-bold">@parthbulbule</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-white/40 uppercase text-[8.5px]">Email:</span>
                <span className="text-[#00FF66] font-bold">parthbulbule7@gmail.com</span>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  if (isMobile) {
    return (
      <section
        id="navigational-os-portal-mobile"
        className={`w-full h-full min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#050506] text-white px-6 py-12 ${
          isOverlay ? 'inset-0 fixed z-40' : 'border-t border-white/5'
        }`}
      >
        <div className="absolute inset-0 pointer-events-none custom-grid-lines opacity-[0.02]" />
        
        {/* Simplified clean header */}
        <header className="flex justify-between items-center w-full border-b border-white/10 pb-3 z-10">
          <span className="font-mono text-[9px] tracking-widest text-[#00FF66] font-bold uppercase">
            / MOBILE_NAV_GATEWAY
          </span>
          <span className="font-mono text-[8px] tracking-widest text-white/30 uppercase">
            SYSTEM_OS_V3 // ONLINE
          </span>
        </header>

        {/* Clean 4 items vertical list with huge typography */}
        <div className="flex flex-col gap-5 my-auto text-left justify-center py-6 z-10">
          {[
            { num: '01', name: 'Projects', href: '#projects' },
            { num: '02', name: 'Profile', href: '#profile' },
            { num: '03', name: 'Skills', href: '#stack' },
            { num: '04', name: 'Connect', href: '#contact' }
          ].map((item) => (
            <div key={item.num} className="flex flex-col">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="group flex items-baseline gap-4 py-3 border-b border-white/[0.03] active:text-[#00FF66] transition-colors"
              >
                <span className="font-mono text-[10px] text-[#00FF66]/50">
                  {item.num}
                </span>
                <span className="font-display font-black text-[9vw] uppercase tracking-tighter leading-none">
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Simplified footer without any heavy rendering */}
        <footer className="flex flex-col gap-2 border-t border-white/10 pt-4 font-mono text-[8px] text-white/30 tracking-wider z-10">
          <div className="flex justify-between items-center w-full">
            <span>&copy; 2026 PARTH BULBULE</span>
            <span className="text-[#00FF66] font-bold">PORTAL NOMINAL</span>
          </div>
        </footer>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="navigational-os-portal"
      className={`w-full min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#050506] text-white px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 ${
        isOverlay ? 'inset-0 fixed z-40' : 'border-t border-white/5'
      }`}
      style={{
        '--portal-glow-x': '50%',
        '--portal-glow-y': '50%',
      } as React.CSSProperties}
    >
      {/* Visual cyber backgrounds */}
      <div className="absolute inset-0 pointer-events-none custom-grid-lines opacity-[0.04]" />
      <div className="footer-noise absolute inset-0 pointer-events-none" />
      <div 
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300" 
        style={{
          background: `radial-gradient(circle at var(--portal-glow-x) var(--portal-glow-y), rgba(0, 255, 102, 0.12), rgba(0, 255, 102, 0.02) 15rem, transparent 24rem)`
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between h-full flex-1 gap-10">
        
        {/* Portal Header */}
        <header className="flex justify-between items-center w-full border-b border-white/10 pb-4 z-10">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#00FF66] font-extrabold uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-ping" />
            / NAVIGATIONAL_OS_PORTAL
          </span>
          <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-white/30 uppercase">
            STATUS: ACTIVE // SYSTEM_OS_V3
          </span>
        </header>

        {/* Central split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center flex-1 my-auto z-10">
          
          {/* Left Column: 5 Massive navigation channels (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left justify-center">
            {portalItems.map((item, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => {
                    playClickTick(1100 + idx * 60, 0.02);
                    setHoveredIndex(idx);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex flex-col text-left"
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="group flex items-baseline gap-3 sm:gap-5 interactive-hover w-fit"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    {/* Number node */}
                    <span className="font-mono text-xs sm:text-sm text-[#00FF66]/50 group-hover:text-[#00FF66] transition-colors font-bold select-none">
                      {item.num}
                    </span>

                    {/* Oversized text block */}
                    <span className="font-display font-black text-[6.5vw] sm:text-[5vw] lg:text-[3.5vw] leading-none uppercase tracking-tighter transition-all duration-300 group-hover:text-[#00FF66] group-hover:translate-x-3 flex items-center gap-2 select-none group-hover:drop-shadow-[0_0_12px_rgba(0,255,102,0.35)]">
                      {item.name}
                      <ArrowUpRight size={22} className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#00FF66] translate-y-1.5 group-hover:translate-y-0" />
                    </span>
                  </motion.a>

                  {/* Expanding subtopics under hovered item */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="pl-7 sm:pl-10 mt-2 flex flex-wrap gap-x-4 gap-y-1 overflow-hidden"
                      >
                        {item.subtopics.map((sub, sIdx) => (
                          <div 
                            key={sIdx} 
                            className="font-mono text-[9px] sm:text-[10px] text-white/50 hover:text-[#00FF66] transition-colors flex items-center gap-1 cursor-default select-none"
                          >
                            <ChevronRight size={8} className="text-[#00FF66]" />
                            {sub}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Telemetry Panel (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full min-h-[320px] border-l border-white/5 pl-6 lg:pl-10 relative">
            <AnimatePresence mode="wait">
              {hoveredIndex === null ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4 text-left w-full justify-center h-full select-none pointer-events-none"
                >
                  <div className="font-mono text-[10px] text-[#00FF66]/40">// SYSTEM_IDLE_READY</div>
                  <h3 className="font-display font-black text-3xl uppercase tracking-tighter text-white/25">
                    PARTH_OS // V3
                  </h3>
                  <p className="font-mono text-[9px] text-white/20 leading-relaxed uppercase tracking-wider">
                    HOVER OVER PORTAL CHANNELS TO DECRYPT SYSTEM LOGS, ACCESS PORT TIMELINES, AND LOAD GRAPH TELEMETRIES.
                  </p>
                </motion.div>
              ) : (
                renderPreviewContent(hoveredIndex)
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Portal Footer with Social Icons */}
        <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 border-t border-white/10 pt-4 z-10">
          <div className="font-mono text-[9px] sm:text-xs text-white/40 tracking-wider text-left">
            <div>&copy; 2026 PARTH BULBULE</div>
            <div className="mt-1 flex items-center gap-1.5 font-bold text-white/60">
              <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-ping" />
              PORTAL OS NOMINAL
            </div>
          </div>

          {/* Bottom Social Icons */}
          <div className="flex items-center gap-5 text-white/40 z-20">
            <a 
              href="https://github.com/Parthbo7" 
              target="_blank" 
              rel="noopener noreferrer" 
              onMouseEnter={() => playClickTick(1500, 0.01)}
              className="hover:text-[#00FF66] transition-colors"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              onMouseEnter={() => playClickTick(1500, 0.01)}
              className="hover:text-[#00FF66] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              onMouseEnter={() => playClickTick(1500, 0.01)}
              className="hover:text-[#00FF66] transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="mailto:parthbulbule7@gmail.com" 
              onMouseEnter={() => playClickTick(1500, 0.01)}
              className="hover:text-[#00FF66] transition-colors"
            >
              <Mail size={16} />
            </a>
            <a 
              href="#resume" 
              onMouseEnter={() => playClickTick(1500, 0.01)}
              className="hover:text-[#00FF66] transition-colors"
            >
              <FileText size={16} />
            </a>
          </div>

          <span className="font-mono text-[8px] sm:text-[9.5px] text-white/20 tracking-widest uppercase">
            PARTH_OS // DECENTRALIZED IDENTITY SYSTEM NODE
          </span>
        </footer>

      </div>
    </section>
  );
};
