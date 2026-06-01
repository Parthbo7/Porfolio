import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

interface HackathonsArchiveProps {
  onBack: () => void;
}

export const HackathonsArchive = ({ onBack }: HackathonsArchiveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

      {/* Ambient background glow halos matching ExperiencePage */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute left-[5%] top-[15%] w-72 h-72 rounded-full bg-[#00CC52]/6 blur-[80px]" />
        <div className="absolute right-[10%] top-[45%] w-80 h-80 rounded-full bg-[#D4AF37]/6 blur-[90px]" />
        <div className="absolute left-[20%] top-[75%] w-64 h-64 rounded-full bg-[#A8D3C8]/8 blur-[80px]" />
      </div>

      {/* FIXED CLOSE HUD BUTTON */}
      <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
        <motion.button
          onClick={() => {
            playClickTick(1600, 0.05);
            onBack();
          }}
          onMouseEnter={() => playClickTick(1600, 0.02)}
          className="flex items-center gap-3 interactive-hover group backdrop-blur-2xl border border-black/10 bg-white/70 px-5 py-2.5 rounded-sm transition-all duration-300 text-black/60 hover:text-black hover:border-black/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#6B6B6B]" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-black/70">CLOSE_ARCHIVE</span>
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10">
        
        {/* HERO SECTION */}
        <header className="mb-20 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6 opacity-85"
          >
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">COMPETITIVE_INNOVATION_SYSTEMS</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-4 tracking-tighter text-black">
            HACKATHON <span className="text-[#00CC52]">LAB</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-[0.14em] uppercase leading-relaxed max-w-xl text-black/50 mb-8">
            Rapid prototyping, high-intensity team coordination, and system engineering challenges.
          </p>

          <div className="h-[1px] w-36 bg-[#00CC52]/30" />
        </header>

        {/* ── DRAGGABLE OS BADGES ── */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[
            { label: 'HACKATHON_RUNTIME', top: '10%', left: '3%', rotate: -5, delay: 0.1, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
            { label: 'INNOVATION_PROTOCOL', top: '22%', right: '3%', rotate: 4, delay: 0.3, style: 'bg-yellow-300 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' },
            { label: 'EVENT_ARCHIVE', bottom: '15%', left: '5%', rotate: -3, delay: 0.2, style: 'bg-[#00FF66]/5 text-[#00CC52] border-[#00CC52]/30 shadow-[0_0_12px_rgba(0,255,102,0.08)]' },
          ].map((sticker) => (
            <motion.div
              key={sticker.label}
              className={`absolute border px-3 py-1.5 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing hover:border-[#00CC52]/40 transition-colors hidden md:block ${sticker.style}`}
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

        {/* HACKATHON LOGS & STATS */}
        <section className="w-full max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Live diagnostic block */}
            <div className="lg:col-span-1 border border-black/10 bg-white/60 p-6 rounded-sm relative overflow-hidden h-fit text-left">
              <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5">
                TELEMETRY_LOG
              </div>
              <h4 className="font-mono text-[10px] text-[#00CC52] tracking-wider uppercase font-bold mb-6">// COMPETITIVE_METRICS</h4>
              
              <div className="flex flex-col gap-5 text-[12px] font-mono text-black/80">
                <div>
                  <span className="text-black/45 block mb-1">TOTAL HACKATHONS</span>
                  <span className="text-xl font-bold font-display text-black">4 COMPLETED</span>
                </div>
                <div>
                  <span className="text-black/45 block mb-1">PROTOTYPES COMPILED</span>
                  <span className="text-xl font-bold font-display text-[#00CC52]">4 SYSTEMS ACTIVE</span>
                </div>
                <div>
                  <span className="text-black/45 block mb-1">TEAM ROLES</span>
                  <span className="text-xl font-bold font-display text-black">TECH LEAD / FULL-STACK</span>
                </div>
              </div>
            </div>

            {/* Event Records list */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {[
                {
                  title: "Google DevFest Hackathon",
                  year: "2024",
                  role: "Team Technology Coordinator",
                  problem: "OCR processing latency inside local exam sheet evaluations. Manual input pipelines were slow and error-prone.",
                  solution: "Engineered an AI OCR parsing script and integrated dynamic Tailwind grid layouts, shortening evaluation sync cycles.",
                  badge: "REGIONAL FINALIST"
                },
                {
                  title: "Smart India Hackathon",
                  year: "2024",
                  role: "Full-Stack System Lead",
                  problem: "Decentralized information silos between campus teams and lack of collaborative operations platforms.",
                  solution: "Scaffolded a centralized digital ecosystem with dynamic JSON sync ports and Framer-motion interaction nodes.",
                  badge: "MGMCOE REPRESENTATIVE"
                }
              ].map(event => (
                <div key={event.title} className="relative backdrop-blur-md border border-black/10 rounded-sm p-8 overflow-hidden bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500">
                  <div className="flex justify-between items-start mb-4 text-left">
                    <div>
                      <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-widest block uppercase mb-1">
                        HACKATHON // {event.year}
                      </span>
                      <h3 className="font-display font-bold text-xl uppercase text-black leading-tight">{event.title}</h3>
                    </div>
                    <span className="bg-[#00FF66]/5 border border-[#00CC52]/30 text-[#00CC52] font-mono text-[7px] sm:text-[8px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">
                      {event.badge}
                    </span>
                  </div>

                  <div className="h-[1px] w-full bg-black/5 my-4" />

                  <div className="flex flex-col gap-4 font-sans text-sm text-black/75 text-left">
                    <div>
                      <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest block mb-1">[ PROBLEM STATEMENT ]</span>
                      <p className="font-light leading-relaxed">{event.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest block mb-1">[ INVENTIVE SOLUTION ]</span>
                      <p className="font-light leading-relaxed text-[#00CC52]/90">{event.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-beige-grid {
          background-size: 80px 80px;
          background-image:
            linear-gradient(to right, rgba(212, 175, 55, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.04) 1px, transparent 1px);
        }
      `}} />
    </div>
  );
};
