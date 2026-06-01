import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

import Boot1 from '../../assets/Images/Boot1.jpeg';
import Boot2 from '../../assets/Images/Boot2.jpeg';
import Boot3 from '../../assets/Images/Boot3.jpeg';

// ─── Image logger + render helper (ensures correct image paths before render) ───
const LogImage = ({ src, alt, className, style }: { src: string; alt?: string; className?: string; style?: React.CSSProperties }) => {
  console.log('StartupBootcamp rendering imageSrc ->', src);
  return <img src={src} alt={alt} className={className} style={style} />;
};

interface StartupBootcampProps {
  onBack: () => void;
  isDarkMode?: boolean;
}

export const StartupBootcamp = ({ onBack, isDarkMode = false }: StartupBootcampProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax Transforms
  const { scrollYProgress } = useScroll({ target: containerRef });
  const titleParallaxY1 = useTransform(scrollYProgress, [0, 0.5], [0, -35]);
  const titleParallaxY2 = useTransform(scrollYProgress, [0, 0.5], [0, -15]);
  const subtitleParallax = useTransform(scrollYProgress, [0, 0.3], [0, -8]);

  // Theme Variables
  const themeText = isDarkMode ? 'text-white' : 'text-black';
  const themeTextMuted = isDarkMode ? 'text-white/70' : 'text-black/75';
  const themeTextSubtle = isDarkMode ? 'text-white/40' : 'text-black/35';
  const themeBgCard = isDarkMode ? 'bg-white/[0.02] border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.2)]' : 'bg-white/95 border-black/8 shadow-[0_12px_40px_rgba(0,0,0,0.03)]';
  const themeBgBtn = isDarkMode ? 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30' : 'bg-white border-black/10 text-black/50 hover:text-black hover:border-black';
  const themeBgBadge = isDarkMode ? 'bg-white/5 border-white/10 text-white/80' : 'bg-white border-black/8 text-black/80';

  // Strict Media Container Style helper (with soft glass border & neon green highlight option)
  const mediaContainerStyle = "p-[10px] rounded-[18px] border border-black/10 dark:border-white/10 hover:border-[#00CC52]/40 bg-white/5 dark:bg-white/[0.03] overflow-hidden flex items-center justify-center transition-colors duration-500 backdrop-blur-sm relative group";

  return (
    <div 
      ref={containerRef}
      className={`w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 ${isDarkMode ? 'bg-[#050505]' : 'bg-[#FAF9F6]'} ${themeText}`}
    >
      {/* ── Background Grid & Decos ── */}
      <div className={`absolute inset-0 pointer-events-none z-0 ${isDarkMode ? 'custom-dark-grid opacity-30' : 'custom-cream-grid opacity-60'}`} />
      
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
           SECTION 1: HERO (CINEMATIC STARTUP HEADER)
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
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">STARTUP_BOOTCAMP_ARCHIVE</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          {/* Layered Bold Main Heading */}
          <div className="relative mb-6">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tighter uppercase">
              <motion.span 
                style={{ y: titleParallaxY1 }}
                className="block select-none"
              >
                IDEA TO PITCH
              </motion.span>
              <motion.span 
                style={{ y: titleParallaxY2 }}
                className="block select-none opacity-90 text-[#00CC52]"
              >
                STARTUP ARCHIVE
              </motion.span>
            </h1>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[100px] opacity-[0.02] pointer-events-none font-display font-black tracking-widest text-[#00CC52]">PITCH</span>
          </div>

          {/* Subheading & Editorial Elements */}
          <motion.div
            style={{ y: subtitleParallax }}
            className="max-w-3xl mx-auto flex flex-col items-center mt-6"
          >
            {/* Thin divider */}
            <div className="h-[1px] w-36 bg-[#00CC52]/30 mb-6" />

            <p className="font-mono text-xs sm:text-sm tracking-[0.14em] uppercase leading-relaxed max-w-xl text-[#8B8B8B]">
              Leading innovation. Building startup systems. Collaborating with future entrepreneurs.
            </p>
            
            {/* Ambient tiny dots */}
            <div className="mt-6 flex items-center gap-2 pointer-events-none">
              <motion.span className="w-2 h-2 rounded-full bg-[#00CC52]/70" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.span className="w-1.5 h-1.5 rounded-full bg-[#A8D3C8]/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.span className="w-1 h-1 rounded-full bg-[#00CC52]/40" animate={{ y: [0, -2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
          </motion.div>

          {/* ── Floating OS Stickers (Monochrome Startup Accents) ── */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {[
              { label: 'TEAM_LEAD_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1 },
              { label: 'STARTUP_PROTOCOL', top: '24%', right: '4%', rotate: 3, delay: 0.3 },
              { label: 'IDEA_MATRIX_ACTIVE', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
              { label: 'INNOVATION_ARCHIVE', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
            ].map((sticker) => (
              <motion.div
                key={sticker.label}
                className="absolute bg-white/80 dark:bg-black/80 border border-[#D8D0C6] dark:border-white/10 shadow-[2px_2px_8px_rgba(0,0,0,0.03)] px-3 py-1.5 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing hover:border-[#00CC52]/40 transition-colors hidden md:block"
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

          {/* Floating startup UI texts */}
          <div className="absolute inset-x-0 bottom-[-40px] pointer-events-none hidden sm:flex justify-center gap-12 font-mono text-[7px] text-[#8B8B8B]/40 uppercase tracking-[0.3em]">
            <span>[ TEAM LEAD ACTIVE ]</span>
            <span>[ STARTUP SYSTEM INITIALIZED ]</span>
            <span>[ PITCH MODE ENABLED ]</span>
          </div>
        </header>

        {/* ════════════════════════════════════════════
           SECTION 2: LEADERSHIP NODE (TEXT LEFT, IMAGE RIGHT - BOOT1)
        ════════════════════════════════════════════ */}
        <section className="w-full max-w-5xl mx-auto mb-28 px-2 z-10">
          <div className={`relative backdrop-blur-md border rounded-md p-8 md:p-12 overflow-hidden ${themeBgCard} shadow-2xl`}>
            {/* Corner decorator */}
            <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
              LEADERSHIP_MATRIX_01
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center pt-4">
              
              {/* Text Column (Left) */}
              <div className="flex flex-col gap-6 text-left">
                <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block">
                  NODE 01 // TEAM COORDINATION
                </span>
                
                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
                  10 MEMBER TEAM LEADERSHIP
                </h3>
                
                <div className="h-[1.5px] w-24 bg-[#00CC52]/40" />
                
                <p className={`font-sans text-[14.5px] leading-relaxed font-light ${themeTextMuted}`}>
                  Led a 10-member startup team during the Idea to Pitch Bootcamp by managing collaboration, coordinating innovation tasks, and guiding concept execution throughout the entrepreneurial activities.
                </p>
                
                <p className={`font-sans text-[14.5px] leading-relaxed font-light ${themeTextMuted}`}>
                  Organized communication streams, delegated workload packets according to individual profiles, and structured the final pitch decks to demonstrate commercial feasibility and product viability under time constraints.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Team Leadership", "Coordination", "Collaboration", "Startup Execution"].map(tag => (
                    <span key={tag} className={`font-mono text-[9px] uppercase px-3 py-1 border rounded-sm ${themeBgBadge}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Column (Right - Boot1) */}
              <div className="w-full flex justify-center lg:justify-end">
                <motion.div
                  className={`${mediaContainerStyle} h-[360px] max-w-[480px] w-full border-[#00CC52]/15`}
                  whileHover={{ scale: 1.025, y: -6, rotate: 0.5 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {/* Subtle glare overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-30 pointer-events-none" />
                  
                  <LogImage 
                    src={Boot1} 
                    alt="10 Member Team Leadership" 
                    className="w-full h-full object-contain rounded-[12px]" 
                  />
                  
                  <div className="absolute bottom-4 right-4 bg-black/60 border border-white/10 text-white px-2 py-0.5 font-mono text-[7px] tracking-[0.2em] rounded-sm shadow-md">
                    RECORD_BOOT1_LEADERSHIP
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
           SECTION 3: STARTUP PARTICIPATION (CENTERED SHOWCASE - BOOT2)
        ════════════════════════════════════════════ */}
        <section className="w-full max-w-5xl mx-auto mb-28 px-2 z-10 text-center">
          <div className={`relative backdrop-blur-md border rounded-md p-8 sm:p-12 overflow-hidden ${themeBgCard} shadow-2xl`}>
            
            <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
              PARTICIPATION_NODE_02
            </div>

            <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-3">
              NODE 02 // ENTREPRENEURIAL PROCESS
            </span>

            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none mb-6">
              STARTUP INNOVATION EXPERIENCE
            </h3>

            <div className="h-[1.5px] w-20 bg-[#00CC52]/40 mx-auto mb-8" />

            <p className={`max-w-3xl mx-auto font-sans text-[14.5px] leading-relaxed mb-10 font-light ${themeTextMuted}`}>
              Participated in startup development activities focused on business thinking, product ideation, innovation frameworks, and entrepreneurial growth through collaborative sessions and startup-oriented challenges.
            </p>

            {/* Centered Large Showcase Panel (Boot2) */}
            <div className="flex justify-center w-full">
              <motion.div
                className={`${mediaContainerStyle} h-[420px] sm:h-[460px] max-w-[620px] w-full border-[#00CC52]/15 rotate-[-0.8deg]`}
                whileHover={{ scale: 1.02, rotate: 0.8, y: -8, boxShadow: '0 20px 40px rgba(0,204,82,0.06)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Stage glare simulation overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00CC52]/2 to-transparent opacity-40 pointer-events-none" />
                
                <LogImage 
                  src={Boot2} 
                  alt="Startup Innovation Experience" 
                  className="w-full h-full object-contain rounded-[12px]" 
                />

                <div className="absolute left-6 bottom-6 font-mono text-[7px] uppercase tracking-widest text-[#00CC52]">
                  PITCH_WORKSPACE_INITIALIZED
                </div>
                <div className="absolute right-4 bottom-4 bg-black/60 border border-white/10 text-white px-2 py-0.5 font-mono text-[7px] tracking-[0.2em] rounded-sm shadow-md">
                  RECORD_BOOT2_WORKSHOP
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mt-8">
              {["Innovation", "Startup Thinking", "Product Systems", "Entrepreneurship"].map(tag => (
                <span key={tag} className={`font-mono text-[9px] uppercase px-3 py-1 border rounded-sm ${themeBgBadge}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
           SECTION 4: CERTIFICATION ARCHIVE (CERTIFICATE SHOWCASE - BOOT3)
        ════════════════════════════════════════════ */}
        <section className="w-full max-w-5xl mx-auto mb-20 px-2 z-10">
          <div className={`relative backdrop-blur-md border rounded-md p-8 md:p-12 overflow-hidden ${themeBgCard} shadow-2xl`}>
            
            <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
              CERTIFICATE_NODE_03
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              
              {/* Image Frame (Boot3) - Left Column */}
              <div className="w-full lg:w-5/12 flex justify-center relative">
                {/* Behind structural shadow */}
                <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-br from-[#00CC52]/5 to-transparent border border-[#00CC52]/10 rounded-[18px] pointer-events-none -z-10" />

                <motion.div
                  className={`${mediaContainerStyle} w-[340px] h-[440px] border-[#00CC52]/20 rotate-[1deg]`}
                  whileHover={{ scale: 1.025, rotate: -1, y: -10, boxShadow: '0 30px 60px rgba(0,204,82,0.1)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <LogImage 
                    src={Boot3} 
                    alt="Certified Participation" 
                    className="w-full h-full object-contain rounded-[12px]" 
                  />
                  
                  <div className="absolute left-4 bottom-4 font-mono text-[7px] tracking-[0.15em] bg-black/60 text-white/90 px-2 py-0.5 border border-white/10 rounded-[2px]">
                    CERTIFICATE_BOOT3
                  </div>
                </motion.div>
              </div>

              {/* Text Column (Right) */}
              <div className="w-full lg:w-7/12 flex flex-col gap-6 text-left">
                <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block">
                  NODE 03 // ENDORSEMENT & CREDENTIALS
                </span>
                
                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
                  CERTIFIED PARTICIPATION
                </h3>
                
                <div className="h-[1.5px] w-24 bg-[#00CC52]/40" />
                
                <p className={`font-sans text-[14.5px] leading-relaxed font-light ${themeTextMuted}`}>
                  Successfully completed and participated in the Idea to Pitch Startup Bootcamp organized by MGM’s College of Engineering and ENSIN Forum Pune, gaining practical exposure to startup ecosystems, leadership systems, and entrepreneurial strategy.
                </p>
                
                <p className={`font-sans text-[14.5px] leading-relaxed font-light ${themeTextMuted}`}>
                  This certification credentials the leadership competence, innovative prototyping methodologies, and pitching frameworks developed during the bootcamp activities.
                </p>

                <div className="mt-6 p-6 border border-[#00CC52]/20 bg-[#00CC52]/5 rounded-sm relative overflow-hidden backdrop-blur-md">
                  <div className="absolute top-0 right-0 font-mono text-[6px] text-[#00CC52]/60 uppercase tracking-[0.3em] px-2 py-0.5">
                    ENSIN_FORUM_VERIFIED
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-3 h-3 rounded-full bg-[#00CC52] animate-pulse" />
                    <div className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">
                      ENSIN_FORUM // STARTUP_CERTIFIED // LEADERSHIP_MATRIX
                    </div>
                  </div>
                </div>
              </div>

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
        .custom-cream-grid {
          background-size: 80px 80px;
          background-image:
            linear-gradient(to right, rgba(216, 210, 198, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(216, 210, 198, 0.16) 1px, transparent 1px);
        }
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
