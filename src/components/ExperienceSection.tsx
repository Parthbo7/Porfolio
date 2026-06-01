import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';
import gdg1 from '../assets/Images/GDG1.jpeg';
import gdg2 from '../assets/Images/GDG2.jpeg';
import gdg3 from '../assets/Images/GDG3.jpeg';

export const ExperienceSection = () => {
  // Mini showcase cards for GDG
  const gdgShowcases = [
    {
      title: 'GDG INFO SESSION',
      image: gdg1,
      description: 'Designed promotional creatives and community branding assets to increase student engagement and event visibility.',
      tags: ['Poster Design', 'Social Media Campaign', 'Community Branding']
    },
    {
      title: 'GOOGLE CLOUD SESSION',
      image: gdg2,
      description: 'Created futuristic campaign visuals and digital branding assets for cloud-focused developer events.',
      tags: ['Cloud Event Branding', 'Promotional Design', 'Digital Campaign']
    },
    {
      title: 'HACKCITY HACKATHON',
      image: gdg3,
      description: 'Designed hackathon banners, posters, and high-energy cyber visuals for participant engagement.',
      tags: ['Hackathon Branding', 'Banner Design', 'Creative Campaigns']
    }
  ];

  // Rest of the experience cards
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
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
      <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-x-6 gap-y-12 lg:gap-y-16 px-4 py-8 relative min-h-[60vh] z-10">
        
        {/* MAIN FEATURED CARD: GDG DESIGN COORDINATOR */}
        <motion.div
          className="lg:col-start-2 lg:col-span-8 lg:row-start-1 w-full bg-white border border-[#A8D3C8] rounded-sm p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),3px_3px_0px_rgba(168,211,200,0.2)] hover:border-black transition-all duration-300 cursor-pointer interactive-hover select-none"
          whileHover={{ 
            y: -4,
            boxShadow: '0 20px 40px rgba(0,0,0,0.04), 6px 6px 0px rgba(0,0,0,0.8)' 
          }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
        >
          {/* Top Row: Year and Diagonal Link Action Indicator */}
          <div className="flex justify-between items-center w-full mb-6">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#00CC52] font-extrabold tracking-widest bg-[#00FF66]/10 px-2 py-0.5 border border-[#00CC52]/20 rounded-sm">
              2025 — PRESENT
            </span>
            <ArrowUpRight size={14} className="text-[#00CC52] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>

          {/* Middle Stack: Title, Subtitle, & Description */}
          <div className="flex flex-col mb-6">
            <h3 className="font-display font-black text-2xl sm:text-4xl tracking-tighter text-black uppercase leading-none">
              GDG DESIGN COORDINATOR
            </h3>
            <p className="font-mono text-[8px] sm:text-[9px] tracking-wider text-black/40 uppercase mt-2">
              Community Design & Creative Systems
            </p>
            <p className="font-sans text-[11px] sm:text-[13px] text-black/75 mt-4 leading-relaxed normal-case font-normal border-t border-black/5 pt-4">
              Leading the visual identity and design landscape for Google Developer Groups. Directing branding strategy, digital assets, and high-impact campaigns to foster community growth and developer engagement.
            </p>
          </div>

          {/* Core Tags */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {['Creative Campaigns', 'Event Branding', 'Community Design', 'Social Media Assets', 'Hackathon Visuals'].map(tag => (
              <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-sm border border-black/10 text-black/50 bg-black/[0.01]">
                {tag}
              </span>
            ))}
          </div>

          {/* SUB-SECTION: GDG EVENT SHOWCASE */}
          <div className="border-t border-[#A8D3C8]/30 pt-8">
            <div className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest mb-6">
              // RECENT CAMPAIGN ARCHIVES
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gdgShowcases.map((showcase, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-[#A8D3C8]/40 hover:border-black rounded-sm p-4 flex flex-col shadow-[2px_2px_0px_rgba(168,211,200,0.1)] transition-all duration-300"
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.03), 4px 4px 0px rgba(0,0,0,0.8)' 
                  }}
                  onMouseEnter={() => playClickTick(1500, 0.02)}
                >
                  {/* Image container */}
                  <div className="w-full h-36 bg-black rounded-sm overflow-hidden mb-4 relative group">
                    <img 
                      src={showcase.image} 
                      alt={showcase.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-[#00FF66] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                  </div>

                  <h4 className="font-display font-black text-sm sm:text-base tracking-tight text-black uppercase mb-1.5">
                    {showcase.title}
                  </h4>
                  <p className="font-sans text-[11px] text-black/60 leading-relaxed mb-4 normal-case font-normal">
                    {showcase.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {showcase.tags.map(t => (
                      <span key={t} className="font-mono text-[7px] tracking-wider uppercase px-2 py-0.5 border border-black/5 text-black/40 bg-black/[0.005]">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
