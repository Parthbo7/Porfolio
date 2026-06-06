import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../../components/layout/PageLayout';
import { playClickTick } from '../../utils/SoundManager';
export const HackathonsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const rows = [
    {
      num: '01',
      title: 'HACKFUSION',
      sub: 'AGENTIC PHARMACY AI SYSTEM',
      desc: 'AI-powered pharmacist intelligence system with automation workflows, prescription verification, and smart backend orchestration.',
      route: '/projects/hackfusion',
      labels: ['INNOVATION_NODE', 'DRAV_AI_CORE'],
      align: 'left',
      baseRotate: -1,
      floatShift: -10,
      coordinateLabel: 'X:-46 / Y:108',
      accentClass: 'border-[#00CC52]/20 hover:border-black',
      glowClass: 'bg-[#00CC52]/5',
      icon: Cpu
    },
    {
      num: '02',
      title: 'HACKSPECTRA',
      sub: 'SMART CITY PARKING SYSTEM',
      desc: 'Real-time AI parking infrastructure focused on automation, dynamic pricing, and intelligent urban mobility systems.',
      route: '/projects/hackspectra',
      labels: ['AI_SYSTEMS', 'DOPARKING_OS'],
      align: 'right',
      baseRotate: 1,
      floatShift: -8,
      coordinateLabel: 'X:+58 / Y:236',
      accentClass: 'border-[#D4AF37]/25 hover:border-black',
      glowClass: 'bg-[#D4AF37]/5',
      icon: Database
    }
  ];

  return (
    <PageLayout
      onBack="/projects"
      backLabel="CLOSE_ARCHIVE"
      initialLogs={[
        '> REGISTRY_NODES DECRYPTED...',
        '> NET NOMINAL // HACKATHON_OS_ACTIVE_'
      ]}
      telemetryLogs={[
        'SCANNING CONTEXTUAL LLM PIPELINES...',
        'INDEXING RELATIONAL DB TELEMETRIES...',
        'PARSING n8n AGENTIC WORKFLOW MAPS...',
        'REALTIME SLOT DETECTORS: NOMINAL.',
        'DOPARKING METRIC SCHEMAS RESOLVED.',
        'AWAITING OS_DECISION SECTORS...'
      ]}
      statusLabel="SEC_NOMINAL"
      glowColors={{
        left: 'bg-[#00CC52]/6',
        right: 'bg-[#D4AF37]/6'
      }}
    >
      <div ref={containerRef} className="w-full flex-1 flex flex-col justify-between">
        {/* HERO SECTION */}
        <header className="w-full mb-16 lg:mb-24 relative text-left">
          {/* Metadata status node sticker */}
          <motion.div
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[8%] top-1 font-mono text-[8px] sm:text-[10px] text-black/45 border border-black/10 px-3 py-1.5 rounded-sm uppercase bg-white/65 backdrop-blur-sm shadow-[2px_2px_0px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#00CC52] rounded-full animate-pulse" />
              HACK_OS_NODE_07
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[3%] top-14 hidden md:flex items-center gap-2 font-mono text-[8px] text-black/35 uppercase tracking-[0.2em]"
          >
            <ArrowUpRight size={10} />
            GRID_INNOVATION_FLOW
          </motion.div>

          <div className="inline-flex items-center gap-4 mb-6 opacity-45">
            <div className="h-[1.5px] w-14 bg-gradient-to-r from-[#00CC52] to-transparent" />
            <span className="font-mono text-[8px] text-[#00CC52] font-bold tracking-[0.28em] uppercase">HACKATHON_DIRECTORY</span>
            <div className="h-[1.5px] w-14 bg-gradient-to-l from-[#00CC52] to-transparent" />
          </div>

          <h1 className="font-display font-black text-[14vw] sm:text-[9vw] lg:text-[8vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1 text-left">
            HACKATHONS
          </h1>

          <motion.div
            className="mt-6 px-7 sm:px-9 py-4 bg-white/80 border border-black/10 font-sans text-[12px] sm:text-[14px] tracking-wide text-black/70 max-w-4xl shadow-[7px_7px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold backdrop-blur-xl relative overflow-hidden"
            whileHover={{ y: -2 }}
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: 'linear-gradient(90deg, #00CC52 1px, transparent 1px), linear-gradient(#00CC52 1px, transparent 1px)',
              backgroundSize: '15px 15px'
            }} />
            <span className="relative">An innovation archive containing AI systems, smart-city solutions, automation experiments, and competitive engineering builds.</span>
          </motion.div>
        </header>

        {/* DRAGGABLE OS BADGES */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[
            { label: 'INNOVATION_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
            { label: 'AI_SYSTEMS', top: '26%', right: '4%', rotate: 4, delay: 0.3, style: 'bg-yellow-300 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' },
            { label: 'BUILD_ARCHIVE', bottom: '22%', left: '5%', rotate: 3, delay: 0.2, style: 'bg-[#00FF66]/5 text-[#00CC52] border-[#00CC52]/30 shadow-[0_0_12px_rgba(0,255,102,0.08)]' },
            { label: 'COMPETITIVE_ENGINEERING', bottom: '12%', right: '8%', rotate: -3, delay: 0.4, style: 'bg-white text-black border-black/15 shadow-[3px_3px_0px_rgba(0,0,0,0.04)]' }
          ].map((sticker) => (
            <motion.div
              key={sticker.label}
              className={`absolute border px-3 py-1.5 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing transition-colors hidden md:block ${sticker.style}`}
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

        {/* TWO LARGE ASYMMETRICAL FLOATING ARCHIVE CARDS */}
        <div className="w-full relative z-20 flex flex-col gap-24 lg:gap-36 pb-32">
          {/* Vertical timeline connector */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none hidden lg:block">
            <div className="h-full w-[2px] bg-gradient-to-b from-black/5 via-[#00CC52]/20 to-black/5" />
          </div>

          {rows.map((row, idx) => {
            const isLeft = row.align === 'left';
            const alignmentClass = isLeft ? 'justify-start lg:pl-[4vw]' : 'justify-end lg:pr-[4vw]';
            const Icon = row.icon;

            return (
              <div 
                key={row.num}
                className={`w-full flex ${alignmentClass} relative z-10`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 z-20 pointer-events-none hidden lg:block">
                  <motion.span
                    className="w-3.5 h-3.5 rounded-full bg-[#00CC52] border-2 border-white shadow-[0_0_14px_rgba(0,204,82,0.45)]"
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 3 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                {/* Timeline Coordinate Label */}
                <div 
                  className="absolute left-1/2 top-10 z-20 flex items-center gap-2 pointer-events-none hidden lg:flex"
                  style={{
                    transform: isLeft ? 'translate3d(8px, 0, 0)' : 'translate3d(calc(-100% - 8px), 0, 0)'
                  }}
                >
                  <span className="font-mono text-[8px] tracking-[0.2em] text-black/35 uppercase whitespace-nowrap">
                    {row.coordinateLabel}
                  </span>
                </div>

                {/* Card Container */}
                <motion.article
                  className="w-full lg:w-[50%]"
                  initial={{
                    opacity: 0,
                    y: 60,
                    filter: 'blur(8px)'
                  }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                >
                  <motion.div
                    onClick={() => {
                      playClickTick(1600, 0.05);
                      navigate(row.route);
                    }}
                    onMouseEnter={() => {
                      playClickTick(1500, 0.015);
                    }}
                    className={`relative w-full p-6 sm:p-8 bg-white/85 backdrop-blur-2xl border ${row.accentClass} rounded-sm shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500 cursor-pointer interactive-hover select-none overflow-hidden group/card`}
                    animate={{
                      y: [0, row.floatShift, 0],
                      rotate: [row.baseRotate, row.baseRotate + (isLeft ? -0.35 : 0.35), row.baseRotate],
                    }}
                    transition={{
                      y: { duration: 6 + idx * 0.7, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 8 + idx, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.02,
                      rotate: row.baseRotate + (isLeft ? 0.1 : -0.1),
                      boxShadow: '0 30px 60px rgba(0,0,0,0.08), 12px 12px 0px rgba(0,0,0,0.85)'
                    }}
                  >
                    {/* Ambient grid overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.03] pointer-events-none transition-opacity duration-500" style={{
                      backgroundImage: 'linear-gradient(90deg, #00CC52 1px, transparent 1px), linear-gradient(#00CC52 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />

                    {/* Ambient glow inside card */}
                    <div className={`absolute ${isLeft ? '-right-16' : '-left-16'} top-1/2 w-28 h-28 rounded-full ${row.glowClass} blur-[40px] pointer-events-none`} />

                    {/* Sticker-like Node label */}
                    <div className={`absolute ${isLeft ? 'right-6' : 'left-6'} -top-7 z-20 flex items-center gap-1.5 bg-white/95 border border-black/10 px-3 py-1 rounded-sm font-mono text-[7px] tracking-[0.2em] text-black/50 uppercase`}>
                      <ArrowUpRight size={8} />
                      {row.labels[0]}
                    </div>

                    {/* Bottom metadata tag */}
                    <div className={`absolute ${isLeft ? '-right-8' : '-left-8'} bottom-6 flex items-center gap-2 font-mono text-[7px] text-black/30 uppercase tracking-[0.2em]`}>
                      <span className="w-6 h-[1px] bg-black/15" />
                      {row.labels[1]}
                    </div>

                    {/* Background index number */}
                    <div className="absolute -bottom-8 right-4 font-display font-black text-9xl text-black/[0.02] pointer-events-none group-hover/card:text-[#00CC52]/[0.06] transition-colors leading-none">
                      {row.num}
                    </div>

                    {/* Content Stack */}
                    <div className="relative z-10 flex flex-col text-left">
                      <span className="font-mono text-[8px] text-[#00CC52] font-black tracking-[0.25em] uppercase block mb-1">
                        {row.sub}
                      </span>
                      
                      <div className="flex justify-between items-center w-full mb-4 pt-1 pr-6">
                        <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black leading-none">
                          {row.title}
                        </h2>
                        <Icon className="text-black/35 group-hover/card:text-[#00CC52] transition-colors duration-500" size={18} />
                      </div>

                      <p className="font-sans text-[13px] text-black/65 leading-relaxed font-light pr-4 max-w-lg mb-6">
                        {row.desc}
                      </p>

                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#00CC52] tracking-wider font-extrabold group-hover/card:translate-x-1.5 transition-transform duration-300">
                        OPEN ARCHIVE <span className="text-[#00CC52] font-bold">&rarr;</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};
