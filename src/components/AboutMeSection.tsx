import { motion } from 'framer-motion';
import { playClickTick } from '../utils/SoundManager';
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';

export const AboutMeSection = () => {
  return (
    <section 
      id="about-me-section"
      className="w-full min-h-screen py-24 px-6 sm:px-12 lg:px-16 bg-[#faf9f6] text-black relative flex flex-col justify-center items-center border-t border-black/5"
    >
      {/* Editorial Grid and Background accents */}
      <div className="absolute inset-0 pointer-events-none custom-beige-grid opacity-[0.4]" />
      
      {/* Segment Header */}
      <div className="w-full max-w-6xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-4 mb-3 opacity-45">
          <div className="h-[1.5px] w-12 bg-gradient-to-r from-red-500 to-transparent" />
          <span className="font-mono text-[9px] text-red-500 font-extrabold tracking-[0.28em] uppercase">SEC_01 // IDENTITY</span>
          <div className="h-[1.5px] w-12 bg-gradient-to-l from-red-500 to-transparent" />
        </div>
        <h2 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.85] tracking-tighter uppercase select-none text-left">
          ABOUT PARTH
        </h2>
      </div>

      {/* Main Content Layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Photo with sweep laser scanner (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div 
            className="relative w-full max-w-[360px] aspect-[4/5] bg-white border-2 border-black rounded-sm p-4 shadow-[12px_12px_0px_rgba(0,0,0,0.9)] overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            whileHover={{ y: -6, scale: 1.01, boxShadow: '16px 16px 0px rgba(0,0,0,1)' }}
            onMouseEnter={() => playClickTick(1400, 0.02)}
          >
            {/* Visual Laser Sweeping Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-500 shadow-[0_0_12px_#10B981] z-20 pointer-events-none animate-scanline" />
            
            {/* Hologram Grid Overlay */}
            <div className="absolute inset-0 bg-[#000]/[0.02] opacity-[0.15] z-10 pointer-events-none custom-beige-grid" />

            {/* Corner Bracket Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-black z-20" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-black z-20" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-black z-20" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-black z-20" />

            {/* Image Container with scanner blur */}
            <div className="w-full h-full bg-[#f3f3f3] relative overflow-hidden flex items-center justify-center">
              <img 
                src="/assets/og/parth.jpg" 
                alt="Parth Bulbule" 
                className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 transition-all duration-700 select-none pointer-events-none"
              />
              {/* Telemetry data overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-black/95 text-emerald-400 p-3 font-mono text-[8px] sm:text-[9px] tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="flex justify-between">
                  <span>BIOMETRIC: PASS</span>
                  <span>STATUS: ACTIVE</span>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <Activity size={10} className="animate-pulse" />
                  <span>neural connection: nominal</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bio / Editorial Terminal Console (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Header OS parameters */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-black/10 bg-white p-4 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.03)] flex items-center gap-3">
              <Cpu className="text-red-500" size={18} />
              <div className="font-mono text-[9px] sm:text-[10px] text-left">
                <div className="text-black/40">// SPECIFICATION</div>
                <div className="font-extrabold uppercase">IT STUDENT & DEV</div>
              </div>
            </div>

            <div className="border border-black/10 bg-white p-4 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.03)] flex items-center gap-3">
              <Shield className="text-emerald-500" size={18} />
              <div className="font-mono text-[9px] sm:text-[10px] text-left">
                <div className="text-black/40">// COGNITION</div>
                <div className="font-extrabold uppercase">AI ENTHUSIAST</div>
              </div>
            </div>
          </div>

          {/* Editorial bio card */}
          <motion.div
            className="border border-black/10 bg-white/70 backdrop-blur-md rounded-sm p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,0.02)] relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Terminal prompt header */}
            <div className="flex items-center justify-between border-b border-black/5 pb-3 mb-6 font-mono text-[9px] sm:text-xs text-black/50">
              <span className="flex items-center gap-1.5 font-bold text-red-500">
                <Terminal size={13} />
                CONSOLE_PROMPT_v1.07
              </span>
              <span>STATE: PARSED_NOMINAL</span>
            </div>

            {/* Biography details */}
            <div className="space-y-6 text-left">
              <p className="font-sans text-sm sm:text-base text-black/80 leading-relaxed font-light">
                Hello, I'm <strong className="font-black text-black">Parth Bulbule</strong>, an Information Technology student and creative developer based in India. I specialize in building highly visual, interactive systems and AI-powered interfaces that push the boundaries of standard web design.
              </p>
              
              <p className="font-sans text-sm sm:text-base text-black/80 leading-relaxed font-light">
                With a deep interest in <strong className="font-bold text-black">Human-Computer Interaction (HCI)</strong> and intelligent middleware, I lead community design at GDG, engineer startup platforms like CampusConnect, and volunteer for large-scale technology events to create futuristic digital atmospheres.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
                {['IT Student', 'Frontend Designer', 'AI Architect', 'Community Lead', 'Creative Coder'].map((tag) => (
                  <span 
                    key={tag}
                    className="font-mono text-[8px] sm:text-[9.5px] uppercase tracking-wider px-3 py-1 rounded-sm border border-black/10 text-black/60 bg-black/[0.015]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
