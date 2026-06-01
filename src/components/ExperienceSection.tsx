import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';
import gdg1 from '../assets/Images/GDG1.jpeg';
import gdg2 from '../assets/Images/GDG2.jpeg';
import gdg3 from '../assets/Images/GDG3.jpeg';

export const ExperienceSection = () => {
  // Listen to hash changes for deep linking to sub-sections
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isGDGDetail = currentHash === '#experience/gdg';

  // Mini showcase cards for GDG Detail View
  const gdgShowcases = [
    {
      title: 'GDG INFO SESSION',
      tagline: 'SECTION 1 // EVENT LAUNCH',
      image: gdg1,
      description: 'Designed promotional creatives, social media assets, and event branding materials for the GDG Info Session. Focused on increasing awareness, engagement, and visual consistency across the campaign.',
      tags: ['Poster Design', 'Social Media Campaign', 'Community Branding', 'Event Promotion']
    },
    {
      title: 'GOOGLE CLOUD SESSION',
      tagline: 'SECTION 2 // DEV EDUCATION',
      image: gdg2,
      description: 'Created futuristic campaign visuals and clean digital branding assets for the Google Cloud Session, helping communicate technical concepts through engaging visual storytelling.',
      tags: ['Cloud Branding', 'Campaign Design', 'Event Identity', 'Visual Systems']
    },
    {
      title: 'HACKCITY HACKATHON',
      tagline: 'SECTION 3 // BUILDING SPACES',
      image: gdg3,
      description: 'Designed high-energy hackathon banners, cyber-style promotional posters, and engagement creatives to build excitement and participation during Hackcity Hackathon.',
      tags: ['Hackathon Branding', 'Banner Design', 'Creative Campaigns', 'Cyber Visuals']
    }
  ];

  // Rest of the experience cards for Main View
  const cards = [
    {
      id: 'exp-lead',
      year: '2024',
      title: 'CREATIVE LEADERSHIP',
      subtitle: 'Leading visual systems and creative execution.',
      tags: ['Team Direction', 'Creative Strategy', 'Visual Systems', 'Branding'],
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-2'
    },
    {
      id: 'exp-camp',
      year: '2025',
      title: 'HACKATHON CAMPAIGNS',
      subtitle: 'Cyber-style campaigns and event engagement systems.',
      tags: ['Hackathon Branding', 'Campaign Design', 'Posters', 'Event Promotion'],
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-2'
    },
    {
      id: 'exp-ds',
      year: '2024 — PRESENT',
      title: 'DESIGN SYSTEMS',
      subtitle: 'Creating scalable futuristic interface systems.',
      tags: ['UI Systems', 'Visual Identity', 'Design Language', 'Motion UI'],
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-3'
    },
    {
      id: 'exp-comm',
      year: '2025',
      title: 'COMMUNITY BUILDING',
      subtitle: 'Building engagement through design-driven experiences.',
      tags: ['Community Growth', 'Student Engagement', 'Event Design', 'Digital Presence'],
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-3'
    }
  ];

  return (
    <div className="w-full flex justify-center relative min-h-[70vh]">
      <AnimatePresence mode="wait">
        {!isGDGDetail ? (
          /* MAIN EXPERIENCE ARCHIVE VIEW */
          <motion.div 
            key="main-experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-6xl flex flex-col items-center pb-12"
          >
            {/* OVERSZIED TITLE STACK */}
            <div className="w-full flex flex-col items-center mb-6 relative z-10">
              {/* Sticker marker */}
              <div className="absolute right-[5%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm">
                PARTH_05
              </div>

              <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-2 text-center">
                EXPERIENCE
              </h1>

              {/* Subtitle Description Pill */}
              <div className="mt-4 px-6 py-2.5 bg-white border border-black/10 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/70 max-w-lg shadow-[4px_4px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold">
                Creative leadership, design systems, communities, and digital contributions.
              </div>
            </div>

            {/* ASYMMETRICAL EDITORIAL GRID OR RESPONSIVE SCROLL */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-x-6 gap-y-12 lg:gap-y-16 px-4 py-8 relative z-10">
              
              {/* MAIN FEATURED CARD: GDG DESIGN COORDINATOR */}
              <motion.div
                onClick={() => {
                  playClickTick(1600, 0.08);
                  window.location.hash = '#experience/gdg';
                }}
                className="lg:col-start-2 lg:col-span-8 lg:row-start-1 w-full bg-white border border-[#A8D3C8] rounded-sm p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),3px_3px_0px_rgba(168,211,200,0.2)] hover:border-black transition-all duration-300 cursor-pointer interactive-hover select-none group"
                whileHover={{ 
                  y: -8,
                  scale: 1.01,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.04), 6px 6px 0px rgba(0,0,0,0.8)' 
                }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 16 }}
              >
                {/* Top Row: Year and Diagonal Link Action Indicator */}
                <div className="flex justify-between items-center w-full mb-6">
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#00CC52] font-extrabold tracking-widest bg-[#00FF66]/10 px-2.5 py-1 border border-[#00CC52]/20 rounded-sm">
                    2025 — PRESENT
                  </span>
                  <div className="flex items-center gap-1.5 text-[#00CC52] font-mono text-[8px] sm:text-[9px] tracking-widest font-bold">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">OPEN_ARCHIVE</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Middle Stack: Title, Subtitle, & Description */}
                <div className="flex flex-col mb-6">
                  <h3 className="font-display font-black text-2xl sm:text-4xl tracking-tighter text-black uppercase leading-none group-hover:text-[#00CC52] transition-colors duration-300">
                    GDG DESIGN COORDINATOR
                  </h3>
                  <p className="font-mono text-[8px] sm:text-[9px] tracking-wider text-black/40 uppercase mt-2">
                    Community Design & Creative Systems
                  </p>
                  <p className="font-sans text-[11px] sm:text-[13px] text-black/75 mt-4 leading-relaxed normal-case font-normal border-t border-black/5 pt-4">
                    Leading the visual identity and design landscape for Google Developer Groups. Directing branding strategy, digital assets, and high-impact campaigns to foster community growth and developer engagement. Click to open detailed digital archive.
                  </p>
                </div>

                {/* Core Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {['Creative Campaigns', 'Event Branding', 'Community Design', 'Hackathon Visuals'].map(tag => (
                    <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-sm border border-black/10 text-black/50 bg-black/[0.01] transition-all duration-300 group-hover:border-black/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* OTHER EXPERIENCE CARDS */}
              {cards.map((card) => {
                return (
                  <motion.div
                    key={card.id}
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
                      <ArrowUpRight size={14} className="text-[#00CC52] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>

                    {/* Middle Stack: Project Header Title, Subtitle */}
                    <div className="flex flex-col mb-6">
                      <h3 className="font-display font-black text-lg sm:text-2xl tracking-tighter text-black uppercase leading-tight">
                        {card.title}
                      </h3>
                      <p className="font-mono text-[8px] sm:text-[9px] tracking-wider text-black/40 uppercase mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row: Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {card.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-sm border border-black/10 text-black/50 bg-black/[0.01] transition-all duration-300 group-hover:border-black/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* DETAILED IMMERSIVE GDG EXPERIENCE PAGE */
          <motion.div
            key="gdg-detail-archive"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl flex flex-col items-center pb-24 relative"
          >
            {/* HERO SECTION */}
            <div className="w-full flex flex-col items-center mb-10 sm:mb-16 relative z-10">
              <button 
                onClick={() => {
                  playClickTick(1600, 0.05);
                  window.location.hash = '#experience';
                }}
                className="absolute left-[2%] top-[-10px] font-mono text-[9px] sm:text-[11px] text-black/50 hover:text-black border border-black/10 hover:border-black px-3 py-1 rounded-sm bg-white shadow-sm flex items-center gap-1.5 transition-all duration-300"
              >
                <ArrowLeft size={12} />
                BACK_TO_ARCHIVE
              </button>

              <div className="absolute right-[2%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm bg-white shadow-sm">
                CAMPAIGN_FILES
              </div>

              <h1 className="font-display font-black text-[10vw] sm:text-[7vw] lg:text-[6vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-12 sm:mt-4 text-center">
                GDG EXPERIENCE
              </h1>

              <div className="mt-4 px-6 py-2.5 bg-white border border-[#00FF66]/30 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/80 max-w-lg shadow-[4px_4px_0px_rgba(0,255,102,0.15)] rounded-sm uppercase font-bold">
                Designing communities. Building engagement. Creating impact.
              </div>
            </div>

            {/* TOP INTRO BLOCK */}
            <div className="w-full max-w-3xl px-6 mb-16 sm:mb-24 z-10 text-center">
              <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-normal border-l-4 border-r-4 border-black/5 px-6 py-2 normal-case">
                As GDG Design Coordinator, I worked on event branding, digital campaigns, hackathon creatives, and community-focused visual systems to strengthen engagement and create impactful developer experiences.
              </p>
            </div>

            {/* TIMELINE ARCHIVE LAYOUT */}
            <div className="relative w-full px-4 flex flex-col gap-24 sm:gap-32 pb-12 z-10">
              {/* Central Timeline Dotted Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-[#A8D3C8] -translate-x-1/2 hidden md:block" />

              {gdgShowcases.map((showcase, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                    
                    {/* Central timeline node dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                      <div className="w-5 h-5 bg-white border border-[#A8D3C8] rounded-full flex items-center justify-center shadow-md">
                        <div className="w-2.5 h-2.5 bg-[#00CC52] rounded-full animate-pulse" />
                      </div>
                    </div>

                    {/* Content Block (Alternating column order on desktop) */}
                    <motion.div
                      className={`w-full flex flex-col ${isEven ? 'md:order-1' : 'md:order-2 md:pl-8'}`}
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {/* Glassmorphism Card */}
                      <div className="bg-white border border-[#A8D3C8] rounded-sm p-5 sm:p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),3px_3px_0px_rgba(168,211,200,0.25)] hover:border-black transition-all duration-300">
                        <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase mb-2 block">
                          {showcase.tagline}
                        </span>
                        <h3 className="font-display font-black text-xl sm:text-2xl tracking-tighter text-black uppercase mb-4 leading-tight">
                          {showcase.title}
                        </h3>
                        <p className="font-sans text-[11.5px] sm:text-[13px] text-black/75 leading-relaxed mb-6 normal-case font-normal border-t border-black/5 pt-4">
                          {showcase.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {showcase.tags.map(tag => (
                            <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-sm border border-black/10 text-black/50 bg-black/[0.01]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Image Block (Alternating column order on desktop) */}
                    <motion.div
                      className={`w-full ${isEven ? 'md:order-2 md:pl-8' : 'md:order-1'}`}
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <div className="relative group cursor-crosshair">
                        <div className="absolute inset-0 bg-[#00FF66] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 pointer-events-none" />
                        <div className="relative border border-[#A8D3C8] hover:border-black rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.06),3px_3px_0px_rgba(168,211,200,0.2)] overflow-hidden bg-black transition-all duration-500">
                          <img 
                            src={showcase.image} 
                            alt={showcase.title}
                            className="w-full h-auto object-cover opacity-85 group-hover:opacity-100 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-20 mix-blend-overlay pointer-events-none transition-opacity duration-500" />
                        </div>
                        {/* Corner tech tag */}
                        <div className="absolute -bottom-2 -right-2 font-mono text-[7px] bg-black text-[#00FF66] border border-[#00FF66]/20 px-2 py-0.5 shadow-md">
                          SHOWCASE_IMG_{idx+1}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING DECORATIVE LABELS */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.1}
        className="absolute top-[20%] left-[-5%] font-mono text-[8px] bg-yellow-300 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-1 font-extrabold uppercase tracking-widest rotate-6 select-none cursor-grab active:cursor-grabbing z-30 hidden lg:block"
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        CREATIVE SYSTEM
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.1}
        className="absolute bottom-[40%] right-[-5%] font-mono text-[8px] bg-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-1 font-extrabold uppercase tracking-widest -rotate-3 select-none cursor-grab active:cursor-grabbing z-30 hidden lg:block"
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        DESIGN MODE ACTIVE
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.1}
        className="absolute top-[60%] left-[-2%] font-mono text-[8px] bg-indigo-500 text-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-1 font-extrabold uppercase tracking-widest rotate-2 select-none cursor-grab active:cursor-grabbing z-30 hidden lg:block"
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        COMMUNITY BUILDER
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.1}
        className="absolute top-[40%] right-[-2%] font-mono text-[8px] bg-black text-[#00FF66] border border-black/20 shadow-[2px_2px_0px_rgba(0,255,102,0.5)] px-2 py-1 font-extrabold uppercase tracking-widest -rotate-6 select-none cursor-grab active:cursor-grabbing z-30 hidden lg:block"
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        VISUAL ENGINEER
      </motion.div>
    </div>
  );
};
