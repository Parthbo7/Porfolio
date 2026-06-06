import { motion } from 'framer-motion';
import { playClickTick } from '../../utils/SoundManager';
import { Activity, ShieldAlert, Check } from 'lucide-react';

const coreSkills = [
  { name: 'React', percentage: 92, status: 'EXPERT', color: 'from-emerald-400 to-emerald-500' },
  { name: 'Next.js', percentage: 88, status: 'ADVANCED', color: 'from-cyan-400 to-cyan-500' },
  { name: 'Python', percentage: 90, status: 'EXPERT', color: 'from-yellow-400 to-yellow-500' },
  { name: 'AI/ML & Prompt Eng.', percentage: 85, status: 'ADVANCED', color: 'from-purple-400 to-purple-500' },
  { name: 'UI/UX & Creative Code', percentage: 95, status: 'EXPERT', color: 'from-red-400 to-red-500' }
];

export const SkillsOverviewSection = () => {
  return (
    <section 
      id="skills-overview-section"
      className="w-full min-h-screen py-24 px-6 sm:px-12 lg:px-16 bg-[#0a0a0b] text-white relative flex flex-col justify-center items-center overflow-hidden border-t border-white/5"
    >
      {/* Visual background layers */}
      <div className="absolute inset-0 pointer-events-none custom-grid-lines opacity-[0.03]" />
      
      {/* Ambient background glow */}
      <div className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Segment Header */}
      <div className="w-full max-w-4xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-4 mb-3 opacity-45">
          <div className="h-[1.5px] w-12 bg-gradient-to-r from-emerald-500 to-transparent" />
          <span className="font-mono text-[9px] text-emerald-400 font-extrabold tracking-[0.28em] uppercase">SEC_02 // SYSTEM CAPABILITIES</span>
          <div className="h-[1.5px] w-12 bg-gradient-to-l from-emerald-500 to-transparent" />
        </div>
        <h2 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.85] tracking-tighter uppercase select-none text-left text-white">
          SKILLS OVERVIEW
        </h2>
      </div>

      {/* Progress Bars Container */}
      <div className="w-full max-w-4xl mx-auto space-y-8 relative z-10">
        
        {coreSkills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="group relative flex flex-col gap-2 p-5 bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all duration-300 rounded-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] cursor-default"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onMouseEnter={() => playClickTick(1200 + index * 100, 0.02)}
          >
            {/* Top row: Name, status and percentage label */}
            <div className="flex justify-between items-baseline">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] font-bold text-white/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {skill.name}
                </span>
              </div>

              <div className="flex items-center gap-4 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase">
                <span className="text-white/40 flex items-center gap-1">
                  <Activity size={10} className="animate-pulse" />
                  {skill.status}
                </span>
                <span className="font-extrabold text-emerald-400">{skill.percentage}%</span>
              </div>
            </div>

            {/* Progress bar line */}
            <div className="w-full h-2.5 bg-white/5 border border-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className={`h-full bg-gradient-to-r ${skill.color} shadow-[0_0_8px_rgba(0,255,102,0.15)]`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.15 + index * 0.05, ease: 'easeOut' }}
              />
            </div>

            {/* Sub-label details overlay */}
            <div className="flex justify-between items-center text-[7px] tracking-widest text-white/30 uppercase mt-1">
              <span>// PIPELINE INTEGRITY CHECK: NOMINAL</span>
              <span className="flex items-center gap-1 text-emerald-400/70">
                <Check size={9} />
                VERIFIED
              </span>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Footer OS Log console details */}
      <div className="w-full max-w-4xl mx-auto mt-12 border-t border-white/[0.08] pt-6 flex justify-between items-center z-10 font-mono text-[9px] tracking-wider text-white/40">
        <span className="flex items-center gap-2">
          <ShieldAlert size={12} className="text-[#FF3E6C]" />
          ALL CAPABILITIES VERIFIED BY LOCAL_OS COMPILER
        </span>
        <span className="sm:block hidden">LATENCY: NOMINAL // STABILITY: 100%</span>
      </div>
    </section>
  );
};
