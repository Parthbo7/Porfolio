import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Calendar, MapPin, BookOpen, Terminal } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

interface EducationPageProps {
  onBack: () => void;
}

export const EducationPage = ({ onBack }: EducationPageProps) => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black select-none">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute left-[10%] top-[20%] w-72 h-72 rounded-full bg-emerald-500/5 blur-[80px]" />
        <div className="absolute right-[15%] top-[50%] w-80 h-80 rounded-full bg-red-500/5 blur-[90px]" />
      </div>

      {/* CLOSE HUD BUTTON */}
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

      <div className="max-w-4xl mx-auto px-6 pt-32 w-full relative z-10 text-left">
        
        {/* HEADER SECTION */}
        <header className="mb-16 relative">
          <div className="inline-flex items-center gap-4 mb-4 opacity-45">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-red-500 to-transparent" />
            <span className="font-mono text-[9px] text-red-500 font-extrabold tracking-[0.28em] uppercase">SEC_04 // ACADEMIC REGISTRY</span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-red-500 to-transparent" />
          </div>

          <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1">
            EDUCATION
          </h1>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase text-black/40 mt-3 max-w-xl">
            Formal engineering registry, curriculum specifications, and computational analytics focus nodes.
          </p>
        </header>

        {/* Timeline block */}
        <div className="space-y-12">
          
          {/* MGM COE NANDED */}
          <motion.div
            className="border border-black/10 bg-white/80 backdrop-blur-xl rounded-sm p-6 sm:p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          >
            <div className="absolute -bottom-10 -right-4 font-display font-black text-9xl text-black/[0.02] pointer-events-none">
              IT
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-full text-red-500">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
                    Bachelor of Engineering
                  </h3>
                  <p className="font-mono text-[9px] sm:text-[10px] tracking-wider text-black/40 uppercase mt-0.5">
                    MGM College of Engineering, Nanded
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 font-mono text-[8px] sm:text-[9.5px] text-black/60 sm:text-right">
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <Calendar size={12} className="text-red-500" />
                  2023 - 2027
                </span>
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin size={12} className="text-red-500" />
                  Nanded, India
                </span>
              </div>
            </div>

            {/* Core details */}
            <div className="space-y-4 font-sans text-[13px] sm:text-[14.5px] text-black/70 leading-relaxed font-light border-t border-black/5 pt-6">
              <p>
                Currently pursuing a Bachelor's degree in <strong className="font-bold text-black">Information Technology</strong>. My coursework centers around advanced systems design, data structures and algorithms, object-oriented concepts, and human-computer interactions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 font-mono text-[9.5px] sm:text-xs">
                <div className="p-4 bg-black/[0.015] border border-black/5 rounded-sm flex items-center gap-3">
                  <BookOpen size={16} className="text-emerald-500" />
                  <div>
                    <div className="text-black/40">// SPECIALTIES</div>
                    <div className="font-extrabold uppercase">Algorithms & Web Tech</div>
                  </div>
                </div>
                
                <div className="p-4 bg-black/[0.015] border border-black/5 rounded-sm flex items-center gap-3">
                  <Terminal size={16} className="text-cyan-500" />
                  <div>
                    <div className="text-black/40">// ACTIVE SCORE</div>
                    <div className="font-extrabold uppercase text-emerald-500">GPA NOMINAL</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
