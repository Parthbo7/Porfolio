import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

import F1 from "../../assets/Images/F1.jpeg";
import F2 from "../../assets/Images/F2.jpeg";
import F3 from "../../assets/Images/F3.jpeg";
import F4 from "../../assets/Images/F4.jpeg";

// ─── Image logger + render helper (ensures correct image paths before render) ───
const LogImage = ({ src, alt, className, style }: { src: string; alt?: string; className?: string; style?: React.CSSProperties }) => {
  // Runtime verification for auditing in browser console
  console.log('Cinematic MRFreshers rendering imageSrc ->', src);
  return <img src={src} alt={alt} className={className} style={style} />;
};

const mrFreshersImages = [
  { image: F1, title: "GROUP DISCUSSION ROUND" },
  { image: F2, title: "INTERVIEW & CONFIDENCE ROUND" },
  { image: F3, title: "STAND-UP COMEDY PERFORMANCE" },
  { image: F4, title: "RUNNER-UP RECOGNITION" }
];

interface MRFreshersProps {
  onBack: () => void;
  isDarkMode?: boolean;
}

export const MRFreshers = ({ onBack, isDarkMode = false }: MRFreshersProps) => {
  // Theme Variables
  const themeText = isDarkMode ? 'text-white' : 'text-black';
  const themeTextMuted = isDarkMode ? 'text-white/70' : 'text-black/75';
  const themeTextSubtle = isDarkMode ? 'text-white/40' : 'text-black/35';
  const themeBgCard = isDarkMode ? 'bg-white/[0.02] border-white/10' : 'bg-white/95 border-black/8';
  const themeBgBtn = isDarkMode ? 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30' : 'bg-white border-black/10 text-black/50 hover:text-black hover:border-black';
  const themeBgBadge = isDarkMode ? 'bg-white/5 border-white/10 text-white/80' : 'bg-white border-black/8 text-black/80';
  const themeShadow = isDarkMode ? 'shadow-[4px_4px_0px_rgba(255,255,255,0.05)]' : 'shadow-[4px_4px_0px_rgba(0,0,0,0.03)]';

  // Strict Media Container Style helper
  const mediaContainerStyle = "p-[10px] rounded-[18px] border border-black/10 dark:border-white/10 bg-white/5 dark:bg-white/[0.03] overflow-hidden flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm relative group";

  return (
    <div className={`w-full max-w-6xl mx-auto flex flex-col items-center pb-24 relative px-4 ${themeText}`}>
      {/* ── Background Decos ── */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <motion.div 
          className="absolute left-1/4 top-1/3 w-72 h-72 rounded-full bg-[#A8D3C8]/10 blur-[80px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute right-1/4 top-2/3 w-80 h-80 rounded-full bg-[#D4AF37]/8 blur-[90px]"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* HEADER SECTION */}
      <div className="w-full flex flex-col items-center mb-16 sm:mb-20 relative z-10">
        <button 
          onClick={() => { 
            playClickTick(1600, 0.05); 
            onBack(); 
          }} 
          className={`absolute left-0 top-0 font-mono text-[9px] sm:text-[10px] border px-3 py-1 rounded-[2px] shadow-sm flex items-center gap-1.5 transition-all duration-300 ${themeBgBtn}`}
        >
          <ArrowLeft size={11} />BACK_TO_ARCHIVE
        </button>
        
        <div className={`absolute right-0 top-0 font-mono text-[8px] border px-2 py-0.5 rounded-[2px] shadow-sm ${themeBgBtn}`}>
          PERSONALITY_VAULT
        </div>
        
        <h1 className="font-display font-black text-[9vw] sm:text-[6.5vw] lg:text-[5vw] leading-[0.9] tracking-tighter uppercase select-none mt-12 sm:mt-8 text-center">
          MR FRESHERS EXPERIENCE
        </h1>
        
        <div className={`mt-4 px-6 py-2.5 border text-center font-sans text-[12px] sm:text-[13px] tracking-wide max-w-xl rounded-[2px] uppercase font-bold ${themeBgBadge} ${themeShadow}`}>
          Confidence. Communication. Presence. Performance.
        </div>
      </div>

      {/* ════════════════════════════════════════════
         SECTION 1: GD & INTERVIEW ROUND (TEXT LEFT, IMAGE RIGHT)
      ════════════════════════════════════════════ */}
      <section className="w-full max-w-5xl mx-auto mb-24 px-4 z-10">
        <div className={`relative backdrop-blur-sm border rounded-md p-8 md:p-12 overflow-hidden ${themeBgCard} shadow-xl`}>
          {/* Glass reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.04] pointer-events-none" />
          
          <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
            SPEAKING_PROTOCOL_01
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-12 items-center pt-6">
            
            {/* TEXT COLUMN (LEFT) */}
            <div className="flex flex-col gap-6 text-left">
              <span className="font-mono text-[10px] text-[#A8D3C8] font-bold tracking-[0.3em] uppercase block">
                STAGE ONE // LOGISTICS & SYNC
              </span>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
                GD & INTERVIEW ROUNDS
              </h2>
              
              <div className="h-[1px] w-full bg-gradient-to-r from-[#A8D3C8]/40 to-transparent" />
              
              <p className={`font-sans text-[14px] leading-relaxed ${themeTextMuted}`}>
                Successfully progressed through the highly selective Group Discussion and Personal Interview segments. Demonstrated quick analytical reasoning and structured arguments during the critical GD panel, followed by high-composure communication with senior judges in the interview round.
              </p>
              
              <p className={`font-sans text-[14px] leading-relaxed ${themeTextMuted}`}>
                Focused on stage confidence, clarity of speech, posture, and technical eloquence, receiving high scores across presentation, body posture, and audience coordination.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["Group Discussion", "Interview Skills", "Communication", "Composure"].map(t => (
                  <span key={t} className={`font-mono text-[9px] uppercase px-3 py-1 border rounded-sm ${themeBgBadge}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGES COLUMN (RIGHT) */}
            <div className="flex flex-col gap-8 w-full items-center lg:items-end">
              {/* Image F1 Container (420px height, 520px max-width) */}
              <motion.div 
                className={`${mediaContainerStyle} h-[420px] max-w-[520px] w-full`}
                whileHover={{ y: -8, rotate: -1, scale: 1.018 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Spotlight Reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />
                <LogImage 
                  src={mrFreshersImages[0].image} 
                  alt="GD & Interview Round" 
                  className="w-full h-full object-contain" 
                />
                <div className={`absolute right-4 bottom-4 font-mono text-[7px] uppercase tracking-wider px-2 py-0.5 border rounded-[2px] bg-black/60 text-white/80 border-white/10`}>
                  FRAME_F1_GD_STAGE
                </div>
              </motion.div>

              {/* Image F2 Container (16:9 aspect-ratio, 560px max-width) */}
              <motion.div 
                className={`${mediaContainerStyle} aspect-video w-full max-w-[560px]`}
                whileHover={{ y: -8, rotate: 1, scale: 1.018 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <LogImage 
                  src={mrFreshersImages[1].image} 
                  alt="Communication & Microphones" 
                  className="w-full h-full object-contain" 
                />
                <div className={`absolute right-4 bottom-4 font-mono text-[7px] uppercase tracking-wider px-2 py-0.5 border rounded-[2px] bg-black/60 text-white/80 border-white/10`}>
                  FRAME_F2_COMMUNICATION_16_9
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         SECTION 2: TALENT ROUND (CENTERED CINEMATIC SHOWCASE)
      ════════════════════════════════════════════ */}
      <section className="w-full max-w-5xl mx-auto mb-24 px-4 z-10 text-center">
        <div className={`relative backdrop-blur-sm border rounded-md p-8 sm:p-12 overflow-hidden ${themeBgCard} shadow-xl`}>
          {/* Neon Spotlight Background Aura */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[280px] h-[280px] rounded-full bg-[#D4AF37]/10 blur-[80px]" />
          </div>

          <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
            TALENT_STAGE_NODE_02
          </div>

          <span className="font-mono text-[10px] text-[#D4AF37] font-bold tracking-[0.3em] uppercase block mb-3">
            STAGE TWO // TALENT SHOWCASE & STAND-UP
          </span>

          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none mb-6">
            LIVE TALENT PERFORMANCE
          </h2>

          <div className="h-[1px] w-24 bg-[#D4AF37]/40 mx-auto mb-8" />

          <p className={`max-w-2xl mx-auto font-sans text-[14px] leading-relaxed mb-10 ${themeTextMuted}`}>
            Cleared the talent round by delivering an authentic, high-confidence stand-up comedy performance on stage. Retained full traditional attire visibility and posture while managing the stage lighting, mic setup, and physical expressions to captivate a large student and faculty audience.
          </p>

          {/* Centered Large Spotlight Image Frame (max-height: 520px, contain) */}
          <div className="flex justify-center w-full">
            <motion.div 
              className={`${mediaContainerStyle} h-[480px] sm:h-[520px] max-w-[640px] w-full border-[#D4AF37]/25 shadow-[0_20px_50px_rgba(212,175,55,0.05)]`}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.025, rotate: -0.5, transition: { duration: 0.3 } }}
            >
              {/* Stage glare simulation overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/3 to-transparent opacity-40 pointer-events-none" />
              
              <LogImage 
                src={mrFreshersImages[2].image} 
                alt="Stand-up comedy talent round" 
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center top' }}
              />

              <div className="absolute left-6 bottom-6 font-mono text-[7px] uppercase tracking-widest text-[#D4AF37]">
                SPOTLIGHT_BEAM_ACTIVE
              </div>
              <div className={`absolute right-4 bottom-4 font-mono text-[7px] uppercase tracking-wider px-2 py-0.5 border rounded-[2px] bg-black/60 text-white/80 border-white/10`}>
                FRAME_F3_FULL_POSTURE
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {["Stand-up Comedy", "Stage Confidence", "Live Audience Engagement", "Comedic Rhythm"].map(t => (
              <span key={t} className={`font-mono text-[9px] uppercase px-3 py-1 border rounded-sm ${themeBgBadge}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         SECTION 3: PERSONALITY ARCHIVE (PORTRAIT CARD, OFFSET POSITION, LAYERED DEPTH)
      ════════════════════════════════════════════ */}
      <section className="w-full max-w-5xl mx-auto mb-20 px-4 z-10">
        <div className={`relative backdrop-blur-sm border rounded-md p-8 md:p-12 overflow-hidden ${themeBgCard} shadow-xl`}>
          <div className={`absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
            PERSONALITY_VAULT_NODE_03
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* PORTRAIT IMAGE CARD (LEFT / OFFSET) */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start relative">
              {/* Layered shadow element behind */}
              <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-br from-[#A8D3C8]/10 to-transparent border border-black/5 dark:border-white/5 rounded-[18px] pointer-events-none -z-10" />
              
              <motion.div 
                className={`${mediaContainerStyle} w-[320px] h-[420px] border-[#A8D3C8]/30 rotate-[-1deg]`}
                whileHover={{ rotate: 1, y: -10, scale: 1.025, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <LogImage 
                  src={mrFreshersImages[3].image} 
                  alt="Runner Up Personality Frame" 
                  className="w-full h-full object-cover" 
                />
                
                {/* Subtle vignette/reflection glow */}
                <div className="absolute inset-0 bg-radial-vignette opacity-20 pointer-events-none" />
                <div className="absolute left-4 bottom-4 font-mono text-[8px] tracking-[0.15em] bg-black/60 text-white/90 px-2 py-0.5 border border-white/10 rounded-[2px]">
                  PORTRAIT_F4_ARCHIVE
                </div>
              </motion.div>
            </div>

            {/* TEXT COLUMN (RIGHT) */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6 text-left">
              <span className="font-mono text-[10px] text-[#A8D3C8] font-bold tracking-[0.3em] uppercase block">
                STAGE THREE // RUNNER-UP RECOGNITION
              </span>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
                MR. FRESHERS RUNNER UP
              </h2>
              
              <div className="h-[1px] w-full bg-gradient-to-r from-[#A8D3C8]/40 to-transparent" />
              
              <p className={`font-sans text-[14px] leading-relaxed ${themeTextMuted}`}>
                Honored with the Runner-Up title for the entire Mr. Freshers 2024 competition. Validated across several intense parameters including stage presentation, group logic, communication elegance, witty Q&A response, and artistic presence.
              </p>
              
              <p className={`font-sans text-[14px] leading-relaxed ${themeTextMuted}`}>
                This cinematic portrait frame captures the live onstage recognition ceremony, capturing the confidence, humor, and expressive personality that defined this academic event milestone.
              </p>

              <div className="mt-6 p-6 border border-[#A8D3C8]/25 bg-[#A8D3C8]/5 rounded-sm relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 font-mono text-[6px] text-[#A8D3C8]/60 uppercase tracking-[0.3em] px-2 py-0.5">
                  VAULT_RECOGNITION
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#A8D3C8] animate-pulse" />
                  <div className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">
                    Runner Up Title — Personality Merit System Checked
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL ACHIEVEMENT CALLOUT */}
      <section className="w-full max-w-3xl mx-auto mb-20 px-4 z-10">
        <div className={`relative backdrop-blur-sm border rounded-md p-10 text-center overflow-hidden ${themeBgCard}`}>
          <div className={`absolute left-4 top-4 font-mono text-[8px] uppercase tracking-[0.25em] ${themeTextSubtle}`}>
            CONFIDENCE_MATRIX_ACTIVE
          </div>
          
          <h3 className="font-display font-black text-2xl uppercase mb-3">
            STAGE EXCELLENCE CHECKPOINT
          </h3>
          
          <p className={`max-w-2xl mx-auto mb-6 text-sm leading-relaxed ${themeTextMuted}`}>
            A premium cinematic memory archive documenting stage presence, personality, confidence, and live performance moments. Evaluated, structured, and archived under strict OS database guidelines.
          </p>
          
          <button 
            onClick={() => { 
              playClickTick(1600, 0.05); 
              onBack(); 
            }}
            className={`inline-block px-8 py-3.5 border rounded-full shadow-lg font-mono text-[9px] sm:text-[10px] tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 ${themeBgBtn}`}
          >
            RETURN_TO_ARCHIVE_VAULT
          </button>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .bg-radial-vignette {
          background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);
        }
      `}} />
    </div>
  );
};
