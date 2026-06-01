import { motion } from 'framer-motion';
import { playClickTick } from '../utils/SoundManager';
import gdg1 from '../assets/Images/GDG1.jpeg';
import gdg2 from '../assets/Images/GDG2.jpeg';
import gdg3 from '../assets/Images/GDG3.jpeg';

export const ExperienceSection = () => {
  // GDG Events mapping based on user request
  const gdgEvents = [
    {
      title: 'GDG INFO SESSION',
      image: gdg1,
      description: 'Designed promotional campaigns, event creatives, and digital assets for the GDG Info Session to boost student engagement and community awareness. Focused on creating modern tech-focused visuals that matched the Google Developer ecosystem.',
      tags: ['Poster Design', 'Social Media Campaign', 'Community Branding'],
    },
    {
      title: 'GOOGLE CLOUD SESSION',
      image: gdg2,
      description: 'Created branding visuals and campaign creatives for the Google Cloud Session, helping communicate cloud technologies through clean and futuristic design language. Worked on audience-focused promotional content and event identity.',
      tags: ['Cloud Event Branding', 'Promotional Design', 'Digital Campaign'],
    },
    {
      title: 'HACKCITY HACKATHON',
      image: gdg3,
      description: 'Designed hackathon banners, promotional posters, and engagement creatives for Hackcity Hackathon. Focused on high-energy cyber visuals to attract participants and create a strong hacker-community atmosphere.',
      tags: ['Hackathon Branding', 'Banner Design', 'Creative Campaigns'],
    }
  ];

  // Zig-Zag modular sections based on user request
  const modularSections = [
    {
      title: 'CREATIVE LEADERSHIP',
      year: '2024',
      subtitle: 'Leading visual systems and creative execution.',
      tags: ['Team Direction', 'Creative Strategy', 'Visual Systems', 'Branding'],
      align: 'left',
      rotate: -1
    },
    {
      title: 'HACKATHON CAMPAIGNS',
      year: '2025',
      subtitle: 'Cyber-style campaigns and event engagement systems.',
      tags: ['Hackathon Branding', 'Campaign Design', 'Posters', 'Event Promotion'],
      align: 'right',
      rotate: 1
    },
    {
      title: 'COMMUNITY BUILDING',
      year: '2025',
      subtitle: 'Building engagement through design-driven experiences.',
      tags: ['Community Growth', 'Student Engagement', 'Event Design', 'Digital Presence'],
      align: 'left',
      rotate: -1
    },
    {
      title: 'DESIGN SYSTEMS',
      year: '2024 — PRESENT',
      subtitle: 'Creating scalable futuristic interface systems.',
      tags: ['UI Systems', 'Visual Identity', 'Design Language', 'Motion UI'],
      align: 'right',
      rotate: 1
    },
    {
      title: 'DIGITAL CREATIVE WORK',
      year: '2023 — PRESENT',
      subtitle: 'Experimental visual concepts and digital storytelling.',
      tags: ['Motion Design', 'Creative Coding', 'Posters', 'Futuristic Visuals'],
      align: 'left',
      rotate: -1
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-6xl flex flex-col items-center pb-32 relative"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] custom-grid-lines z-0" />
      <div className="grain-overlay opacity-[0.03] z-0 pointer-events-none" />

      {/* GDG EXPERIENCE HEADER */}
      <div className="w-full flex flex-col items-center mb-16 relative z-10">
        <div className="absolute right-[10%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm bg-white shadow-sm">
          EXP_ARCHIVE
        </div>

        <h1 className="font-display font-black text-[11vw] sm:text-[7vw] lg:text-[6vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-2 text-center drop-shadow-sm">
          GDG EXPERIENCE
        </h1>

        <div className="mt-4 px-6 py-2.5 bg-white/80 backdrop-blur-md border border-[#00FF66]/30 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/80 max-w-lg shadow-[4px_4px_0px_rgba(0,255,102,0.15)] rounded-sm uppercase font-bold relative group">
          <span className="absolute -left-1 -top-1 w-2 h-2 border-t border-l border-black/30" />
          <span className="absolute -right-1 -bottom-1 w-2 h-2 border-b border-r border-black/30" />
          Designing communities. Building engagement. Creating impact.
        </div>
      </div>

      {/* GDG ROLE CARD */}
      <motion.div 
        className="w-full max-w-4xl bg-black text-white p-8 sm:p-10 rounded-sm relative border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] mb-28 z-10"
        whileHover={{ y: -8, boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,255,102,0.2)' }}
        onMouseEnter={() => playClickTick(1500, 0.02)}
      >
        <div className="absolute -top-3 -left-3 bg-[#00FF66] text-black font-mono text-[9px] sm:text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest shadow-[3px_3px_0px_rgba(0,0,0,1)] -rotate-2">
          ROLE
        </div>
        
        <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-[#00FF66]/30" />
        <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-[#00FF66]/30" />

        <div className="flex flex-col sm:flex-row justify-between items-start border-b border-white/15 pb-8 mb-8 gap-4">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#00FF66] to-[#00CC52]">
              GDG DESIGN COORDINATOR
            </h2>
            <p className="font-mono text-[10px] sm:text-xs text-white/50 tracking-widest mt-2 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-pulse" />
              Google Developer Groups On Campus
            </p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <div className="font-mono text-[10px] sm:text-xs font-bold text-[#00FF66] tracking-widest bg-[#00FF66]/10 border border-[#00FF66]/20 px-3 py-1.5 rounded-sm">
              2025 — PRESENT
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2.5">
          {['Creative Campaigns', 'Event Branding', 'Community Design', 'Social Media Assets', 'Hackathon Visuals'].map(tag => (
            <span key={tag} className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase border border-white/15 text-white/80 px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 hover:border-[#00FF66]/50 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* GDG EVENTS (Images + Text) */}
      <div className="w-full max-w-5xl flex flex-col gap-28 mb-40 z-10">
        {gdgEvents.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}>
              
              {/* Image Block */}
              <motion.div 
                className="w-full md:w-1/2 relative group perspective-1000 cursor-crosshair"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 60, damping: 20 }}
              >
                {/* Neon blur behind image */}
                <div className="absolute inset-0 bg-[#00FF66] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700 pointer-events-none" />
                
                <motion.div 
                  className="relative border border-black/10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden bg-black"
                  style={{ rotateY: isEven ? 3 : -3, rotateZ: isEven ? -1 : 1 }}
                  whileHover={{ rotateY: 0, rotateZ: 0 }}
                >
                  <motion.img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Glitch/noise overlay on hover */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-30 mix-blend-overlay pointer-events-none transition-opacity" />
                </motion.div>
                
                {/* Floating UI Elements on Image */}
                <div className="absolute -bottom-3 -right-3 font-mono text-[8px] bg-black text-[#00FF66] border border-[#00FF66]/30 px-2 py-1 shadow-lg pointer-events-none flex items-center gap-1">
                  <span className="w-1 h-1 bg-[#00FF66] rounded-full animate-ping" />
                  EVENT_ID_{idx + 1}
                </div>
              </motion.div>

              {/* Text Block */}
              <motion.div 
                className="w-full md:w-1/2 flex flex-col"
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest mb-3">
                  EVENT LOG // 2025
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tighter mb-6 leading-none">
                  {event.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed mb-8 border-l-2 border-[#00FF66] pl-5 py-1">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map(tag => (
                    <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-widest uppercase border border-black/15 text-black/70 px-2.5 py-1.5 rounded-sm bg-black/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* MODULAR ZIG-ZAG SECTIONS */}
      <div className="w-full flex flex-col gap-12 sm:gap-20 relative z-10 max-w-5xl px-4 mt-10">
        {/* Subtle grid line down the middle for structure */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5 -translate-x-1/2 hidden md:block" />

        {modularSections.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -8, rotate: 0, scale: 1.01 }}
            style={{ rotate: section.rotate }}
            onMouseEnter={() => playClickTick(1600, 0.015)}
            className={`flex flex-col bg-white/90 backdrop-blur-xl border border-[#00FF66]/30 rounded-sm p-6 sm:p-10 w-full md:w-[85%] shadow-[0_15px_35px_rgba(0,0,0,0.06),4px_4px_0px_rgba(0,255,102,0.15)] interactive-hover cursor-crosshair relative ${
              section.align === 'left' ? 'self-start md:mr-auto' : 'self-end md:ml-auto'
            }`}
          >
            {/* Tiny Coordinates/Labels */}
            <div className="absolute -top-2.5 left-6 font-mono text-[7px] text-black/50 bg-white px-2 py-0.5 border border-black/10 shadow-sm uppercase tracking-widest z-10">
              SYS_NODE_{idx + 10}
            </div>
            
            <div className="absolute bottom-4 right-6 font-mono text-[7px] text-black/30 flex gap-1.5 items-center">
              <span className="w-1 h-1 bg-[#00FF66] rounded-full animate-pulse" />
              STATUS: NOMINAL
            </div>

            {/* Corner tech accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#00FF66]/40 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#00FF66]/40 opacity-50 pointer-events-none" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
              <h4 className="font-display font-black text-xl sm:text-3xl uppercase tracking-tighter text-black">
                {section.title}
              </h4>
              <div className="font-mono text-[9px] sm:text-[10px] text-[#00CC52] font-extrabold tracking-widest shrink-0 border border-[#00FF66]/20 bg-[#00FF66]/5 px-2 py-1 rounded-sm">
                {section.year}
              </div>
            </div>
            
            <p className="font-mono text-[9px] sm:text-[11px] text-black/60 uppercase tracking-widest mb-8 border-b border-black/5 pb-6">
              {section.subtitle}
            </p>

            <div className="flex flex-wrap gap-2.5 mt-auto">
              {section.tags.map(tag => (
                <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase bg-black/[0.03] border border-black/10 text-black/70 px-3 py-1.5 rounded-sm hover:border-black/30 hover:bg-black/[0.05] transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

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

    </motion.div>
  );
};
