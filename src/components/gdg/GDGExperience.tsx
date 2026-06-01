import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

import gdg0 from '../../assets/Images/GDG0.jpeg';
import gdg1 from '../../assets/Images/GDG1.jpeg';
import gdg2 from '../../assets/Images/GDG2.jpeg';
import gdg3 from '../../assets/Images/GDG3.jpeg';

// ─── Image logger + render helper (ensures correct image paths before render) ───
const LogImage = ({ src, alt, className, style }: { src: string; alt?: string; className?: string; style?: React.CSSProperties }) => {
  console.log('GDGExperience rendering imageSrc ->', src);
  return <img src={src} alt={alt} className={className} style={style} />;
};

interface GDGExperienceProps {
  onBack: () => void;
}

export const GDGExperience = ({ onBack }: GDGExperienceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const gdgArchive = [
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

  // Parallax scroll controls
  const { scrollYProgress } = useScroll({ target: containerRef });
  const titleParallaxY1 = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const titleParallaxY2 = useTransform(scrollYProgress, [0, 0.5], [0, -20]);
  const subtitleParallax = useTransform(scrollYProgress, [0, 0.3], [0, -10]);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen relative overflow-x-hidden bg-[#FAF9F6] text-[#2C2C2C] flex flex-col font-sans select-none pb-32"
    >
      {/* ── Minimal micro-grid background ── */}
      <div className="absolute inset-0 pointer-events-none custom-cream-grid z-0" />
      
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNzUiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] shadow-inner" />

      {/* ── Fixed Back Button (Futuristic OS Style) ── */}
      <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
        <motion.button
          onClick={() => {
            playClickTick(1600, 0.05);
            onBack();
          }}
          onMouseEnter={() => playClickTick(1600, 0.02)}
          className="flex items-center gap-3 interactive-hover group bg-white/60 hover:bg-[#FAF9F6] backdrop-blur-2xl border border-[#D8D0C6] px-5 py-2.5 rounded-sm shadow-[2px_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#6B6B6B]" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-[#4A4A4A]">CLOSE_ARCHIVE</span>
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10">
        
        {/* ════════════════════════════════════════════
           NEW HERO SECTION (CINEMATIC EDITORIAL)
        ════════════════════════════════════════════ */}
        <header className="mb-20 flex flex-col items-center text-center relative">
          
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8 opacity-80"
          >
            <div className="h-[1px] w-8 bg-[#D8D0C6]" />
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#6B6B6B] font-extrabold">GDG_COMMUNITY_ARCHIVE</span>
            <div className="h-[1px] w-8 bg-[#D8D0C6]" />
          </motion.div>

          {/* Layered Bold Main Heading */}
          <div className="relative mb-6">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tighter uppercase text-[#2C2C2C]">
              <motion.span 
                style={{ y: titleParallaxY1 }}
                className="block select-none"
              >
                GDG DESIGN
              </motion.span>
              <motion.span 
                style={{ y: titleParallaxY2 }}
                className="block select-none opacity-90 text-[#3F3F3E]"
              >
                EXPERIENCE
              </motion.span>
            </h1>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[100px] opacity-[0.03] pointer-events-none font-display font-black tracking-widest text-[#2C2C2C]">GDG</span>
          </div>

          {/* Subheading & Editorial Elements */}
          <motion.div
            style={{ y: subtitleParallax }}
            className="max-w-2xl mx-auto flex flex-col items-center mt-6"
          >
            {/* Thin beige divider */}
            <div className="h-[1px] w-36 bg-[#D8D0C6]/60 mb-6" />

            <p className="font-mono text-xs sm:text-sm text-[#5A5A5A] tracking-[0.14em] uppercase leading-relaxed max-w-xl">
              Designing communities. Building engagement. Creating impact.
            </p>
            
            {/* Ambient tiny dots */}
            <div className="mt-6 flex items-center gap-2 pointer-events-none">
              <motion.span className="w-2 h-2 rounded-full bg-[#A8D3C8]/70" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" animate={{ y: [0, -3, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.span className="w-1 h-1 rounded-full bg-[#A8D3C8]/40" animate={{ y: [0, -2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
          </motion.div>

          {/* ── Hero Visual System (Floating Stickers) ── */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {[
              { label: 'COMMUNITY_NODE', top: '15%', left: '8%', rotate: -6, delay: 0.1 },
              { label: 'DESIGN_SYSTEM_ACTIVE', top: '28%', right: '6%', rotate: 4, delay: 0.4 },
              { label: 'CREATIVE_ARCHIVE', bottom: '2%', left: '10%', rotate: 3, delay: 0.2 },
              { label: 'VISUAL_PROTOCOL', bottom: '15%', right: '12%', rotate: -5, delay: 0.6 }
            ].map((sticker) => (
              <motion.div
                key={sticker.label}
                className="absolute bg-white/80 border border-[#D8D0C6] shadow-[2px_2px_8px_rgba(0,0,0,0.03)] px-3 py-1 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing text-[#5C5C5C] hover:border-black/30 transition-colors hidden md:block"
                style={{ top: sticker.top, bottom: sticker.bottom, left: sticker.left, right: sticker.right, rotate: `${sticker.rotate}deg` }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5 + sticker.delay * 10, repeat: Infinity, ease: 'easeInOut', delay: sticker.delay }}
                drag
                dragConstraints={containerRef}
                dragElastic={0.15}
                whileHover={{ scale: 1.08 }}
              >
                <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#A8D3C8] animate-pulse align-middle" />
                {sticker.label}
              </motion.div>
            ))}
          </div>
        </header>

        {/* ════════════════════════════════════════════
           NEW FEATURED GDG TEAM SECTION
        ════════════════════════════════════════════ */}
        <section className="w-full max-w-5xl mx-auto mb-32 z-10 px-2">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[9px] text-[#A8D3C8] font-bold tracking-[0.4em] uppercase">SECTION 00 // GDG TEAM</span>
            <div className="h-[1px] flex-1 bg-[#D8D0C6]/50" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Large horizontal floating image panel (Anti-gravity glassmorphism frame) */}
            <div className="w-full lg:w-7/12 relative flex justify-center">
              {/* Backing structural shadow */}
              <div className="absolute top-6 left-6 -right-6 -bottom-6 bg-gradient-to-br from-[#A8D3C8]/5 to-transparent border border-[#D8D0C6]/30 rounded-[24px] pointer-events-none -z-10" />

              <motion.div
                className="p-[12px] rounded-[24px] border border-white/80 bg-white/30 backdrop-blur-2xl overflow-hidden flex items-center justify-center shadow-[0_24px_50px_rgba(0,0,0,0.03)] relative w-full group cursor-crosshair"
                animate={{ y: [-6, 6, -6], rotate: [-0.5, 0.5, -0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.015, y: -12, transition: { duration: 0.35 } }}
              >
                {/* Soft reflection/glare overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-60 pointer-events-none z-10" />
                
                <div className="w-full h-[320px] rounded-[14px] overflow-hidden">
                  <LogImage 
                    src={gdg0} 
                    alt="GDG Design & Community Team" 
                    className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-700 opacity-95 group-hover:opacity-100" 
                  />
                </div>
                
                {/* Float metadata labels inside */}
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-white border border-white/10 px-3 py-1 font-mono text-[7px] tracking-[0.2em] rounded-sm shadow-md">
                  GDG_TEAM_COGNITIVE_RECORD_00
                </div>
                
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md border border-[#D8D0C6] text-[#2C2C2C] px-2 py-0.5 font-mono text-[7px] tracking-[0.15em] rounded-[2px] shadow-sm">
                  STABLE_PORT_ACTIVE
                </div>
              </motion.div>
            </div>

            {/* DESCRIPTION COLUMN (RIGHT) */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6 text-left">
              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
                COMMUNITY DESIGN TEAM
              </h3>
              
              <div className="h-[2px] w-16 bg-[#A8D3C8]" />
              
              <p className="font-sans text-[14px] leading-relaxed text-[#5A5A5A] font-light">
                A collaborative creative team contributing toward community engagement, technical events, branding systems, and digital experiences inside the Google Developer Groups ecosystem.
              </p>
              
              <p className="font-sans text-[14px] leading-relaxed text-[#5A5A5A] font-light">
                Bridging developer community pathways by building unique, highly polished visual campaigns, digital portals, event setups, and interactive spaces.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Community Building", "Event Design", "Creative Collaboration", "Developer Ecosystem", "Team Leadership"].map(tag => (
                  <span key={tag} className="font-mono text-[8px] tracking-wider uppercase px-2.5 py-1 rounded-[2px] border border-[#D8D0C6] text-[#6B6B6B] bg-white/40 hover:border-black/35 hover:text-[#2C2C2C] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════
           INDIVIDUAL SHOWCASE ARCHIVE GRID
        ════════════════════════════════════════════ */}
        <section className="w-full max-w-5xl mx-auto z-10 px-2">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[9px] text-[#A8D3C8] font-bold tracking-[0.4em] uppercase">SECTION 01 // INDIVIDUAL CAMPAIGNS</span>
            <div className="h-[1px] flex-1 bg-[#D8D0C6]/50" />
          </div>

          <div className="flex flex-col gap-32 pb-12 w-full">
            {gdgArchive.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 w-full`}
                >
                  
                  {/* Image Showcase Panel */}
                  <div className="w-full lg:w-1/2 relative flex justify-center">
                    <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-br from-[#A8D3C8]/5 to-transparent border border-[#D8D0C6]/20 rounded-[18px] pointer-events-none -z-10" />
                    
                    <motion.div
                      className="p-[10px] rounded-[18px] border border-white/80 bg-white/35 backdrop-blur-2xl overflow-hidden flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.02)] relative w-full group cursor-zoom-in"
                      whileHover={{ scale: 1.015, y: -6 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <div className="w-full rounded-[10px] overflow-hidden bg-black">
                        <LogImage 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" 
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 font-mono text-[7px] bg-black text-[#00FF66] border border-[#00FF66]/20 px-2.5 py-0.5 shadow-md rounded-[2px]">
                        CAMPAIGN_IMG_0{index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Showcase Panel */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left justify-center">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-[#A8D3C8] font-extrabold tracking-[0.3em] uppercase">NODE_0{index + 1}</span>
                      <div className="h-[1px] flex-1 bg-[#D8D0C6]/40" />
                    </div>

                    <div className="flex items-baseline gap-4">
                      <h4 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-tight">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[9px] text-[#8B8B8B]/60 whitespace-nowrap">{item.year}</span>
                    </div>

                    <div className="h-[1px] w-full bg-gradient-to-r from-[#D8D0C6]/60 to-transparent" />

                    <p className="font-sans text-[13.5px] leading-relaxed text-[#5A5A5A] font-light">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag) => (
                        <div 
                          key={tag} 
                          className="flex items-center gap-2 bg-white/60 border border-[#D8D0C6]/50 px-3 py-1.5 rounded-[2px] transition-all hover:border-black/30 cursor-default"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A8D3C8]" />
                          <span className="font-mono text-[8px] text-[#5C5C5C] uppercase tracking-wider">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════
           FOOTER EXIT SYSTEM
        ════════════════════════════════════════════ */}
        <footer className="mt-48 flex flex-col items-center gap-12 text-center">
          <div className="h-[1px] w-24 bg-[#D8D0C6]" />
          
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-[#2C2C2C]">END_OF_ARCHIVE_DATA</h3>
            <p className="font-mono text-[9px] text-[#8B8B8B]/60 tracking-[0.4em] uppercase">SYSTEM PORTAL FLUID RECOVERY</p>
          </div>

          <motion.button
            onClick={() => {
              playClickTick(1600, 0.05);
              onBack();
            }}
            whileHover={{ scale: 1.05, backgroundColor: "#FAF9F6" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 border border-[#D8D0C6] px-10 py-3.5 font-mono text-[10px] font-black tracking-[0.35em] uppercase transition-all duration-300 text-[#4A4A4A] hover:text-[#2C2C2C] hover:border-black shadow-[2px_2px_8px_rgba(0,0,0,0.02)] interactive-hover bg-white/40 backdrop-blur-md rounded-sm"
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
      `}} />
    </div>
  );
};
