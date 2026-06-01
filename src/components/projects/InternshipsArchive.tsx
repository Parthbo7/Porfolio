import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Check } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';
import { InfosysSpringboard } from './InfosysSpringboard';

interface InternshipsArchiveProps {
  onBack: () => void;
}

export const InternshipsArchive = ({ onBack }: InternshipsArchiveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<'list' | 'infosys'>('list');

  if (view === 'infosys') {
    return <InfosysSpringboard onBack={() => {
      playClickTick(1600, 0.05);
      setView('list');
    }} />;
  }

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
          className="flex items-center gap-3 interactive-hover group backdrop-blur-2xl border border-black/10 bg-white/70 px-5 py-2.5 rounded-sm transition-all duration-300 text-black/60 hover:text-white hover:border-black/30"
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
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">INDUSTRIAL_EXPERIENCE_ARCHIVE</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-4 tracking-tighter text-black">
            INTERNSHIPS <span className="text-[#00CC52]">&</span> INDUSTRIAL ROLES
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-[0.14em] uppercase leading-relaxed max-w-xl text-black/50 mb-8">
            Documenting engineering internships, product workflows, and corporate systems integrations.
          </p>

          <div className="h-[1px] w-36 bg-[#00CC52]/30" />
        </header>

        {/* ── DRAGGABLE OS BADGES ── */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[
            { label: 'INTERN_NODE_01', top: '10%', left: '3%', rotate: -4, delay: 0.1, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
            { label: 'PLACEMENT_SYNC', top: '22%', right: '3%', rotate: 5, delay: 0.3, style: 'bg-yellow-300 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' },
            { label: 'OS_ENTERPRISE', bottom: '15%', left: '5%', rotate: 3, delay: 0.2, style: 'bg-[#00FF66]/5 text-[#00CC52] border-[#00CC52]/30 shadow-[0_0_12px_rgba(0,255,102,0.08)]' },
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

        {/* TIMELINE TIMING LOGS */}
        <section className="w-full max-w-5xl mx-auto mb-20">
          <div className="flex flex-col gap-10">
            
            {/* ROLE 1: CLICKABLE INFOSYS SPRINGBOARD INTERNSHIP CARD */}
            <motion.div 
              onClick={() => {
                playClickTick(1600, 0.08);
                setView('infosys');
              }}
              onMouseEnter={() => playClickTick(1500, 0.015)}
              className="relative backdrop-blur-md border border-black/10 rounded-sm p-8 md:p-12 overflow-hidden bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-[#00CC52] hover:shadow-[13px_13px_0px_rgba(0,255,82,0.15)] cursor-pointer group transition-all duration-500 text-left"
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-black/35">
                INTEGRATION_NODE_01 // CLICK TO OPEN ARCHIVE
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pt-4">
                <div>
                  <span className="font-mono text-[10px] text-[#00CC52] font-black tracking-[0.3em] uppercase block mb-1">
                    ROLE // AI & ANALYTICS INTERN
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-none text-black group-hover:text-[#00CC52] transition-colors">
                    INFOSYS SPRINGBOARD INTERNSHIP →
                  </h3>
                </div>
                <div className="bg-white text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-4 py-2 border border-black/10 rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.15)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00CC52] animate-pulse" />
                  INFOSYS SPRINGBOARD
                </div>
              </div>

              <div className="h-[1px] w-full bg-black/10 mb-8" />

              <p className="font-sans text-[14.5px] leading-relaxed font-light text-black/75">
                Building data-driven analytics platforms through AI, Streamlit dashboards, and YouTube Data API pipelines. Coordinated real-world workflows inside Infosys Springboard virtual internship ecosystems. Click to decrypt full archive.
              </p>
            </motion.div>

            {/* ROLE 2 CARD: PYTHON DEVELOPER INTERN */}
            <div className="relative backdrop-blur-md border border-black/10 rounded-sm p-8 md:p-12 overflow-hidden bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500">
              <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-black/30">
                INTEGRATION_NODE_02 // FLAT_CARD
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pt-4">
                <div className="text-left">
                  <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                    ROLE // PYTHON DEVELOPER INTERN
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-none text-black">
                    TECH OPERATIONS & WEB INTEGRATION
                  </h3>
                </div>
                <div className="bg-white text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-4 py-2 border border-black/10 rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.15)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00CC52] animate-pulse" />
                  MGMCOE OPERATIONS
                </div>
              </div>

              <div className="h-[1px] w-full bg-black/10 mb-8" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Description Column */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <p className="font-sans text-[14.5px] leading-relaxed font-light text-black/75">
                    Contributed directly to technological operational improvements and student database coordination matrices. Managed web systems, streamlined communication schedules, and participated in corporate HR coordination drives.
                  </p>
                  <p className="font-sans text-[14.5px] leading-relaxed font-light text-black/75">
                    Integrated Python-driven scripts to filter participant database intakes, constructed clean responsive front-end dashboards, and coordinated with professional enterprise partners to enhance career placement syncs.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 border border-black/5 bg-black/[0.01] rounded-sm">
                      <div className="font-mono text-[8px] uppercase tracking-widest text-[#00CC52] mb-1">KEY_ACHIEVEMENT</div>
                      <p className="font-sans text-xs text-black/60 leading-relaxed">Streamlined communications database, reducing sync latencies for placement alerts by over 40%.</p>
                    </div>
                    <div className="p-4 border border-black/5 bg-black/[0.01] rounded-sm">
                      <div className="font-mono text-[8px] uppercase tracking-widest text-[#00CC52] mb-1">ENTERPRISE_PITCH</div>
                      <p className="font-sans text-xs text-black/60 leading-relaxed">Represented Nanded region in professional HR Summit pitches to senior talent acquisition executives.</p>
                    </div>
                  </div>
                </div>

                {/* Tech specifications side-bar */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="border border-black/10 bg-white/60 p-6 rounded-sm relative overflow-hidden text-left">
                    <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5">
                      TECH_INDEX
                    </div>
                    <h4 className="font-mono text-[10px] text-[#00CC52] tracking-wider uppercase font-bold mb-4">// CORE_INTEGRATION_STACK</h4>
                    
                    <div className="flex flex-col gap-3 font-mono text-[11px] text-black/60">
                      {["Python Database Engine", "Git Version Control", "Tailwind & Frontend UI", "JSON Sync APIs", "Dynamic Grid Frameworks"].map(tech => (
                        <div key={tech} className="flex items-center gap-2">
                          <Check size={12} className="text-[#00CC52]" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: INTERACTIVE CERTIFICATES SHOWCASE */}
        <section className="w-full max-w-5xl mx-auto mb-20 px-2 text-center">
          <div className="relative backdrop-blur-md border border-black/10 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500">
            <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-black/30">
              CREDENTIAL_NODE_02
            </div>

            <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-3">
              NODE 02 // ENDORSEMENT SYSTEMS
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-none mb-6 text-black">
              CREDENTIALS & ENDORSEMENTS
            </h3>
            <div className="h-[1.5px] w-20 bg-[#00CC52]/40 mx-auto mb-10" />

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Python Integration Cert", org: "MGMCOE Placement Team", date: "2025", desc: "Awarded for structural database optimization scripts and coordinator logs." },
                { title: "HR Summit Pitch", org: "ENSIN Forum & MGM COE", date: "2025", desc: "Recognition of presentation competency and corporate relations pitching." },
                { title: "Operations Coordination", org: "TPO Placement Office", date: "2024", desc: "Awarded for exceptional execution of large-scale career operational syncs." }
              ].map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ y: -8, border: '1px solid rgba(0,204,82,0.3)' }}
                  className="p-6 border border-black/10 bg-white/60 rounded-sm text-left flex flex-col gap-4 relative transition-colors duration-300 shadow-[2px_2px_12px_rgba(0,0,0,0.03)] group"
                >
                  <Award className="text-[#00CC52] group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <span className="font-mono text-[8px] text-black/45 tracking-widest block mb-1">{cert.org} // {cert.date}</span>
                    <h4 className="font-display font-bold text-base uppercase text-black leading-tight">{cert.title}</h4>
                    <p className="font-sans text-xs text-black/60 leading-relaxed mt-2">{cert.desc}</p>
                  </div>
                  <div className="absolute right-4 top-4 font-mono text-[8px] text-black/20 select-none">
                    [0{idx + 1}]
                  </div>
                </motion.div>
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
