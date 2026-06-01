import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

import TPO1 from '../../assets/Images/TPO1.jpeg';
import TPO2 from '../../assets/Images/TPO2.jpeg';

// ─── Image logger + render helper (ensures correct image paths before render) ───
const LogImage = ({ src, alt, className, style }: { src: string; alt?: string; className?: string; style?: React.CSSProperties }) => {
  console.log('TPOCoordinator rendering imageSrc ->', src);
  return <img src={src} alt={alt} className={className} style={style} />;
};

interface TPOCoordinatorProps {
  onBack: () => void;
}

export const TPOCoordinator = ({ onBack }: TPOCoordinatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax Transforms
  const { scrollYProgress } = useScroll({ target: containerRef });
  const titleParallaxY1 = useTransform(scrollYProgress, [0, 0.5], [0, -35]);
  const titleParallaxY2 = useTransform(scrollYProgress, [0, 0.5], [0, -15]);
  const subtitleParallax = useTransform(scrollYProgress, [0, 0.3], [0, -8]);

  // Theme Variables (Enforce dark cinematic by default)
  const themeText = 'text-white';
  const themeTextMuted = 'text-white/70';
  const themeTextSubtle = 'text-white/40';
  const themeBgCard = 'bg-white/[0.02] border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.2)]';
  const themeBgBtn = 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30';
  const themeBgBadge = 'bg-white/5 border-white/10 text-white/80';

  // Strict Media Container Style helper (with soft glass border & neon green highlights)
  const mediaContainerStyle = "p-[10px] rounded-[18px] border border-white/10 hover:border-[#00CC52]/40 bg-white/[0.03] overflow-hidden flex items-center justify-center transition-colors duration-500 backdrop-blur-sm relative group";

  return (
    <div 
      ref={containerRef}
      className={`w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-[#050505] ${themeText}`}
    >
      {/* ── Background Grid & Decos ── */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-dark-grid opacity-30" />
      
      {/* Ambient background dots/glowing nodes */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <motion.div 
          className="absolute left-1/4 top-1/4 w-80 h-80 rounded-full bg-[#00CC52]/5 blur-[90px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute right-1/4 top-2/3 w-96 h-96 rounded-full bg-[#A8D3C8]/5 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ── Fixed Back Button (Futuristic OS Style) ── */}
      <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
        <motion.button
          onClick={() => {
            playClickTick(1600, 0.05);
            onBack();
          }}
          onMouseEnter={() => playClickTick(1600, 0.02)}
          className={`flex items-center gap-3 interactive-hover group backdrop-blur-2xl border px-5 py-2.5 rounded-sm transition-all duration-300 ${themeBgBtn}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#6B6B6B]" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold">CLOSE_ARCHIVE</span>
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10">
        
        {/* ════════════════════════════════════════════
           SECTION 1: HERO (CINEMATIC TPO HEADER)
        ════════════════════════════════════════════ */}
        <header className="mb-24 flex flex-col items-center text-center relative">
          
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8 opacity-85"
          >
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">TPO_OPERATIONS_ARCHIVE</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          {/* Layered Bold Main Heading */}
          <div className="relative mb-6">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tighter uppercase">
              <motion.span 
                style={{ y: titleParallaxY1 }}
                className="block select-none"
              >
                TPO COORDINATOR
              </motion.span>
              <motion.span 
                style={{ y: titleParallaxY2 }}
                className="block select-none opacity-90 text-[#00CC52]"
              >
                OPERATIONS ARCHIVE
              </motion.span>
            </h1>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[100px] opacity-[0.02] pointer-events-none font-display font-black tracking-widest text-[#00CC52]">SUMMIT</span>
          </div>

          {/* Subheading & Editorial Elements */}
          <motion.div
            style={{ y: subtitleParallax }}
            className="max-w-3xl mx-auto flex flex-col items-center mt-6"
          >
            {/* Thin divider */}
            <div className="h-[1px] w-36 bg-[#00CC52]/30 mb-6" />

            <p className="font-mono text-xs sm:text-sm tracking-[0.14em] uppercase leading-relaxed max-w-2xl text-[#8B8B8B]">
              Professional coordination systems, placement operations, leadership communication, and HR summit experiences.
            </p>
            
            {/* Ambient tiny dots */}
            <div className="mt-6 flex items-center gap-2 pointer-events-none">
              <motion.span className="w-2 h-2 rounded-full bg-[#00CC52]/70" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.span className="w-1.5 h-1.5 rounded-full bg-[#A8D3C8]/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.span className="w-1 h-1 rounded-full bg-[#00CC52]/40" animate={{ y: [0, -2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
          </motion.div>

          {/* ── Floating OS Stickers (Monochrome TPO Accents) ── */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {[
              { label: 'HR_SUMMIT_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1 },
              { label: 'PLACEMENT_SYSTEM_ACTIVE', top: '24%', right: '4%', rotate: 3, delay: 0.3 },
              { label: 'MGMCOE_COORDINATION', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
              { label: 'PROFESSIONAL_NETWORK', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
            ].map((sticker) => (
              <motion.div
                key={sticker.label}
                className="absolute bg-black/80 border border-white/10 shadow-[2px_2px_8px_rgba(0,0,0,0.03)] px-3 py-1.5 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing hover:border-[#00CC52]/40 transition-colors hidden md:block"
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

          {/* Floating TPO UI texts */}
          <div className="absolute inset-x-0 bottom-[-40px] pointer-events-none hidden sm:flex justify-center gap-12 font-mono text-[7px] text-[#8B8B8B]/40 uppercase tracking-[0.3em]">
            <span>[ PLACEMENT LEAD ACTIVE ]</span>
            <span>[ OPERATIONS SYSTEM INITIALIZED ]</span>
            <span>[ HR SUMMIT PITCH MODE ENABLED ]</span>
          </div>
        </header>

        {/* ════════════════════════════════════════════
           SECTION 2: MGMCOE TPO OPERATIONS (TEXT LEFT, IMAGE RIGHT - TPO1)
        ════════════════════════════════════════════ */}
        <section className="w-full max-w-5xl mx-auto mb-28 px-2 z-10">
          <div className={`relative backdrop-blur-md border rounded-md p-8 md:p-12 overflow-hidden ${themeBgCard} shadow-2xl`}>
            {/* Corner decorator */}
            <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
              TPO_SYSTEM_NODE_01
            </div>

            <div className="flex flex-col gap-6 text-left pt-4 max-w-3xl">
              
              {/* Text Column */}
              <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block">
                NODE 01 // OPERATIONS & LOGISTICS
              </span>
              
              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
                MGMCOE TPO OPERATIONS
              </h3>
              
              <div className="h-[1.5px] w-24 bg-[#00CC52]/40" />
              
              <p className={`font-sans text-[14.5px] leading-relaxed font-light ${themeTextMuted}`}>
                Working as a TPO Coordinator at MGM College of Engineering, Nanded, managing communication systems, placement coordination activities, and student interaction workflows while contributing to professional organizational operations.
              </p>
              
              <p className={`font-sans text-[14.5px] leading-relaxed font-light ${themeTextMuted}`}>
                Facilitated smooth information flows between the placement department and student cohorts, managed schedule updates for recruitment events, and structured operational coordination systems to enhance engagement levels during drives.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Student Coordination", "Communication Systems", "Placement Activities", "Leadership Operations"].map(tag => (
                  <span key={tag} className={`font-mono text-[9px] uppercase px-3 py-1 border rounded-sm ${themeBgBadge}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
           SECTION 3: HR SUMMIT PROJECT PITCH (DUAL IMAGE SHOWCASE - TPO1 & TPO2)
        ════════════════════════════════════════════ */}
        <section className="w-full max-w-5xl mx-auto mb-28 px-2 z-10 text-center">
          <div className={`relative backdrop-blur-md border rounded-md p-8 sm:p-12 overflow-hidden ${themeBgCard} shadow-2xl`}>
            
            <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
              PITCH_NODE_02
            </div>

            <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-3">
              NODE 02 // PROFESSIONAL ENGAGEMENT
            </span>

            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none mb-6">
              HR SUMMIT PROJECT PITCH
            </h3>

            <div className="h-[1.5px] w-20 bg-[#00CC52]/40 mx-auto mb-8" />

            <p className={`max-w-3xl mx-auto font-sans text-[14.5px] leading-relaxed mb-10 font-light ${themeTextMuted}`}>
              Represented MGMCOE Nanded during the HR Summit experience and received the opportunity to pitch a project in a professional event environment. The experience enhanced communication skills, presentation confidence, leadership exposure, and professional interaction abilities.
            </p>

            {/* Cinematic Dual Image Showcase Panel (TPO1 and TPO2 side-by-side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mt-10">
              
              {/* Left Image Card (TPO1) */}
              <div className="w-full flex justify-center">
                <motion.div
                  className={`${mediaContainerStyle} h-[340px] sm:h-[380px] w-full border-[#00CC52]/15 rotate-[-0.8deg]`}
                  whileHover={{ scale: 1.025, rotate: 0.5, y: -8, boxShadow: '0 20px 40px rgba(0,204,82,0.06)' }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                    scale: { duration: 0.35, ease: 'easeOut' },
                    rotate: { duration: 0.35, ease: 'easeOut' },
                    boxShadow: { duration: 0.35, ease: 'easeOut' }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00CC52]/2 to-transparent opacity-40 pointer-events-none" />
                  <LogImage 
                    src={TPO1} 
                    alt="HR Summit Pitch Node A" 
                    className="w-full h-full object-contain rounded-[12px]" 
                  />
                  <div className="absolute left-6 bottom-6 font-mono text-[7px] uppercase tracking-widest text-[#00CC52]">
                    SUMMIT_PITCH_A_NODE
                  </div>
                  <div className="absolute right-4 bottom-4 bg-black/60 border border-white/10 text-white px-2 py-0.5 font-mono text-[7px] tracking-[0.2em] rounded-sm shadow-md">
                    RECORD_TPO1_SUMMIT
                  </div>
                </motion.div>
              </div>

              {/* Right Image Card (TPO2) */}
              <div className="w-full flex justify-center">
                <motion.div
                  className={`${mediaContainerStyle} h-[340px] sm:h-[380px] w-full border-[#00CC52]/15 rotate-[0.8deg]`}
                  whileHover={{ scale: 1.025, rotate: -0.5, y: -8, boxShadow: '0 20px 40px rgba(0,204,82,0.06)' }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.35 },
                    scale: { duration: 0.35, ease: 'easeOut' },
                    rotate: { duration: 0.35, ease: 'easeOut' },
                    boxShadow: { duration: 0.35, ease: 'easeOut' }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00CC52]/2 to-transparent opacity-40 pointer-events-none" />
                  <LogImage 
                    src={TPO2} 
                    alt="HR Summit Pitch Node B" 
                    className="w-full h-full object-contain rounded-[12px]" 
                  />
                  <div className="absolute left-6 bottom-6 font-mono text-[7px] uppercase tracking-widest text-[#00CC52]">
                    SUMMIT_PITCH_B_NODE
                  </div>
                  <div className="absolute right-4 bottom-4 bg-black/60 border border-white/10 text-white px-2 py-0.5 font-mono text-[7px] tracking-[0.2em] rounded-sm shadow-md">
                    RECORD_TPO2_SUMMIT
                  </div>
                </motion.div>
              </div>

            </div>

            <div className="flex justify-center flex-wrap gap-2 mt-8">
              {["HR Summit", "Project Pitching", "Professional Communication", "Leadership Exposure", "Public Presentation", "MGMCOE Nanded"].map(tag => (
                <span key={tag} className={`font-mono text-[9px] uppercase px-3 py-1 border rounded-sm ${themeBgBadge}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
           FOOTER EXIT SYSTEM
        ════════════════════════════════════════════ */}
        <footer className="mt-48 flex flex-col items-center gap-12 text-center">
          <div className="h-[1px] w-24 bg-[#00CC52]/30" />
          
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-black text-2xl uppercase tracking-tighter">END_OF_ARCHIVE_DATA</h3>
            <p className="font-mono text-[9px] text-[#8B8B8B]/60 tracking-[0.4em] uppercase">SYSTEM PORTAL FLUID RECOVERY</p>
          </div>

          <motion.button
            onClick={() => {
              playClickTick(1600, 0.05);
              onBack();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group flex items-center gap-4 border px-10 py-3.5 font-mono text-[10px] font-black tracking-[0.35em] uppercase transition-all duration-300 shadow-[2px_2px_8px_rgba(0,0,0,0.02)] interactive-hover rounded-sm ${themeBgBtn}`}
          >
            RETURN_TO_SYSTEM_VAULT <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </footer>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-dark-grid {
          background-size: 80px 80px;
          background-image:
            linear-gradient(to right, rgba(0, 204, 82, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 204, 82, 0.025) 1px, transparent 1px);
        }
      `}} />
    </div>
  );
};
