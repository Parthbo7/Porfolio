import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Terminal, Cpu, Database, Layout } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

export const CampusConnectPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    playClickTick(1600, 0.05);
    navigate('/projects');
  };

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black select-none">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

      {/* CLOSE HUD BUTTON */}
      <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
        <motion.button
          onClick={handleBack}
          onMouseEnter={() => playClickTick(1600, 0.02)}
          className="flex items-center gap-3 interactive-hover group backdrop-blur-2xl border border-black/10 bg-white/70 px-5 py-2.5 rounded-sm transition-all duration-300 text-black/60 hover:text-black hover:border-black/30 cursor-pointer"
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
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="font-mono text-[9px] text-emerald-500 font-extrabold tracking-[0.28em] uppercase">SEC_07 // PROJECT SPOTLIGHT</span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-emerald-500 to-transparent" />
          </div>

          <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1">
            CAMPUSCONNECT
          </h1>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase text-black/40 mt-3 max-w-xl">
            A comprehensive student networking, collaboration, and rapid prototyping hub.
          </p>
        </header>

        {/* Detailed Spotlight Description */}
        <div className="space-y-8">
          
          <motion.div
            className="border border-black/10 bg-white/80 backdrop-blur-xl rounded-sm p-6 sm:p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            onMouseEnter={() => playClickTick(1400, 0.02)}
          >
            <div className="absolute -bottom-10 -right-4 font-display font-black text-9xl text-black/[0.02] pointer-events-none">
              CC
            </div>

            <div className="flex justify-between items-start mb-6 border-b border-black/5 pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#00CC52]/5 border border-[#00CC52]/10 rounded-full text-[#00CC52]">
                  <Share2 size={20} />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-black">
                    Student Networking Portal
                  </h3>
                  <span className="font-mono text-[8.5px] text-[#00CC52] font-extrabold uppercase tracking-widest mt-1 block">
                    STATUS: BUILDING // v2.0
                  </span>
                </div>
              </div>
            </div>

            <p className="font-sans text-[13.5px] sm:text-[15px] text-black/70 leading-relaxed font-light mb-6 text-left">
              CampusConnect is engineered to resolve communication gaps in developer communities and academic institutions. By providing real-time channels, student-to-student project collaboration registries, and a central workspace to organize hackathons, it streamlines campus innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[9px] sm:text-xs">
              <div className="p-4 bg-black/[0.01] border border-black/5 rounded-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-cyan-500 font-bold">
                  <Layout size={15} />
                  <span>INTERFACE</span>
                </div>
                <div className="text-black/60 uppercase">React Stack, Context API, Tailwind</div>
              </div>

              <div className="p-4 bg-black/[0.01] border border-black/5 rounded-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-yellow-500 font-bold">
                  <Database size={15} />
                  <span>DATABASE</span>
                </div>
                <div className="text-black/60 uppercase">Firebase Firestore Real-time keys</div>
              </div>

              <div className="p-4 bg-black/[0.01] border border-black/5 rounded-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#00CC52] font-bold">
                  <Cpu size={15} />
                  <span>EXECUTION</span>
                </div>
                <div className="text-black/60 uppercase">86% completed, private repos</div>
              </div>
            </div>
          </motion.div>

          {/* Secure logs terminal */}
          <motion.div
            className="border border-black/10 bg-black text-[#00FF66] rounded-sm p-6 shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-1.5 font-bold text-red-500 border-b border-white/10 pb-2 mb-3 font-mono text-[10px] sm:text-xs">
              <Terminal size={12} />
              SYSTEM_BUILD_LOGS_CC
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] space-y-1 opacity-85">
              <div>&gt; Syncing CampusConnect repo structures...</div>
              <div>&gt; Authenticating Firestore connection credentials...</div>
              <div>&gt; Establishing real-time listener indexes... [PASS]</div>
              <div className="text-yellow-500">&gt; Building v2.0 secure node integrations...</div>
              <div>&gt; Connection status: NOMINAL (Active)</div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CampusConnectPage;
