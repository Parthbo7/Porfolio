import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Lock, Terminal, Check } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

interface CardData {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  link?: string;
  isLocked?: boolean;
  highlightTag?: { name: string; style: string };
  alignment: 'left' | 'right';
  gridArea: string; // positioning class
}

interface ProjectsDatabaseProps {
  onBack: () => void;
}

export const ProjectsDatabase = ({ onBack }: ProjectsDatabaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glitchText, setGlitchText] = useState('SECRET VAULT');
  const [logs, setLogs] = useState<string[]>([
    '> PROJECT DATABASE SYNCHRONIZED...',
    '> BUILD: ACTIVE // NETWORK: STABLE // SYSTEM STATUS: NOMINAL_'
  ]);

  // Glitch effect on Secret Vault title
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let interval: any;
    
    const startGlitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchText(() => 
          'SECRET VAULT'
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iterations) return 'SECRET VAULT'[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
        iterations += 1 / 3;
        if (iterations >= 'SECRET VAULT'.length) {
          clearInterval(interval);
          setGlitchText('SECRET VAULT');
        }
      }, 30);
    };

    const glitchTrigger = setInterval(startGlitch, 5000);
    return () => {
      clearInterval(glitchTrigger);
      clearInterval(interval);
    };
  }, []);

  // Live simulated system logs for the terminal readout
  useEffect(() => {
    const projectLogs = [
      'SECURE_PORT_07 ENABLED...',
      'VAULT DECRYPTION CORE READY.',
      'COMPILING SHADERS FOR GRID OVERLAY...',
      'TACTILE AUDIO CHANNELS SYNCHRONIZED.',
      'MEMORY MATRIX DETECTED NOMINAL TEMPERATURE.',
      'GSAP ANIMATION SEQUENCE INITIALIZED.',
      'PROJECT REPOS ARCHIVE ONLINE...',
      'INTERACTIVE GLITCH PROTOCOLS LOADED.',
      'OS METRIC OVERLAY AT FULL FPS.'
    ];

    const logInterval = setInterval(() => {
      const randomLog = projectLogs[Math.floor(Math.random() * projectLogs.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 5000);

    return () => clearInterval(logInterval);
  }, []);

  const cards: CardData[] = [
    {
      id: 'exp-1',
      year: '2025 - PRESENT',
      title: 'CAMPUSCONNECT',
      subtitle: 'DIGITAL STUDENT ECOSYSTEM',
      tags: ['FULL STACK', 'COMMUNITY', 'STARTUP'],
      link: 'https://github.com/Parthbo7/CampusConnect',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-1'
    },
    {
      id: 'exp-2',
      year: '2025',
      title: 'AI EXAM EVALUATOR',
      subtitle: 'OCR + NLP SYSTEM',
      tags: ['AI', 'OCR', 'PYTHON'],
      link: 'https://github.com/Parthbo7/AI-Exam-Evaluator',
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-2'
    },
    {
      id: 'exp-3',
      year: '2025',
      title: 'INSIGHTTUBE',
      subtitle: 'YOUTUBE ANALYTICS DASHBOARD',
      tags: ['PYTHON', 'ANALYTICS', 'DASHBOARD'],
      highlightTag: { name: 'ANALYTICS', style: 'bg-[#00CC52] text-white border-[#00CC52] font-extrabold' },
      link: 'https://github.com/Parthbo7/InsightTube',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-3'
    },
    {
      id: 'exp-4',
      year: '2025',
      title: 'SECRET VAULT',
      subtitle: 'PRIVATE INTERACTIVE SYSTEM',
      tags: ['EXPERIMENTAL', 'PRIVATE', 'INTERACTIVE'],
      highlightTag: { name: 'PRIVATE', style: 'bg-black text-white border-black font-extrabold animate-pulse' },
      isLocked: true,
      alignment: 'right',
      gridArea: 'lg:col-start-6 lg:col-span-4 lg:row-start-4'
    },
    {
      id: 'exp-5',
      year: '2024',
      title: 'CREATIVE DEV LAB',
      subtitle: 'MOTION & UI EXPERIMENTS',
      tags: ['GSAP', 'FRAMER', 'MOTION'],
      highlightTag: { name: 'MOTION', style: 'bg-[#FFB7B2] text-black border-[#FFB7B2] font-extrabold' },
      link: 'https://github.com/Parthbo7/creative-dev-lab',
      alignment: 'left',
      gridArea: 'lg:col-start-2 lg:col-span-4 lg:row-start-5'
    }
  ];

  const handleCardClick = (card: CardData) => {
    playClickTick(1600, 0.08);
    if (card.isLocked) {
      window.dispatchEvent(new Event('trigger-vault-decryption'));
    } else if (card.link) {
      window.open(card.link, '_blank');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black select-none"
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
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">EXPERIMENTAL_DIGITAL_PRODUCTS</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-4 tracking-tighter text-black">
            PROJECT <span className="text-[#00CC52]">DATABASE</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-[0.14em] uppercase leading-relaxed max-w-xl text-black/50 mb-8">
            Decentralized repositories, custom interactive systems, and creative technology experiments.
          </p>

          <div className="h-[1px] w-36 bg-[#00CC52]/30" />
        </header>

        {/* ── DRAGGABLE OS BADGES ── */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[
            { label: 'PROJECT_MATRIX_ACTIVE', top: '8%', left: '4%', rotate: -6, delay: 0.15, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
            { label: 'SECURE_PORT_07', top: '24%', right: '4%', rotate: 3, delay: 0.25, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
            { label: 'v2.0.2', bottom: '20%', left: '6%', rotate: 4, delay: 0.35, style: 'bg-yellow-300 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' },
            { label: 'ACCESS: VERIFIED', bottom: '12%', right: '8%', rotate: -2, delay: 0.05, isVerified: true, style: 'bg-[#00FF66]/5 text-[#00CC52] border-[#00CC52]/30 shadow-[0_0_12px_rgba(0,255,102,0.08)]' },
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
              {sticker.isVerified ? (
                <Check size={10} className="stroke-[3] inline-block mr-1.5 align-middle" />
              ) : (
                <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#00CC52] animate-pulse align-middle" />
              )}
              {sticker.label}
            </motion.div>
          ))}
        </div>

        {/* ASYMMETRICAL GRID */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-x-8 gap-y-12 lg:gap-y-20 px-2 py-8 relative min-h-[60vh] z-20">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => playClickTick(1500, 0.02)}
              className={`group w-full border border-black/10 rounded-[18px] p-6 sm:p-8 bg-white/80 hover:border-black shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:shadow-[12px_12px_0px_rgba(0,0,0,0.85)] transition-all duration-500 cursor-pointer interactive-hover backdrop-blur-md flex flex-col justify-between relative overflow-hidden ${card.gridArea}`}
              whileHover={{ 
                y: -10, 
                scale: 1.015,
                boxShadow: '0 30px 60px rgba(0,0,0,0.08), 12px 12px 0px rgba(0,0,0,0.85)' 
              }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 16 }}
            >
              {/* Card background glowing gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00CC52]/0 via-[#00CC52]/0 to-[#00CC52]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top Row: Year and Diagonal Link Action Indicator */}
              <div className="flex justify-between items-center w-full mb-8 relative z-10">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#00CC52] font-extrabold tracking-widest">
                  {card.year}
                </span>
                
                {card.isLocked ? (
                  <Lock size={12} className="text-[#00CC52] group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <ArrowUpRight size={14} className="text-[#00CC52] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                )}
              </div>

              {/* Middle Stack: Project Header Title & Subtitle */}
              <div className="flex flex-col mb-8 relative z-10 text-left">
                <h3 className={`font-display font-black text-2xl sm:text-3xl tracking-tighter text-black uppercase leading-tight ${
                  card.isLocked ? 'blur-[0.5px] group-hover:blur-none transition-all duration-500' : ''
                }`}>
                  {card.isLocked ? glitchText : card.title}
                </h3>
                <p className="font-mono text-[8px] sm:text-[9px] tracking-wider text-black/40 uppercase mt-1">
                  {card.subtitle}
                </p>
              </div>

              {/* Bottom Row: Tech / Architecture Monospace Tags */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {card.tags.map((tag) => {
                  const isHighlighted = card.highlightTag?.name === tag;
                  let customStyle = 'border border-black/5 text-black/40 bg-black/[0.01]';
                  
                  if (isHighlighted && card.highlightTag) {
                    customStyle = card.highlightTag.style;
                  }

                  return (
                    <span 
                      key={tag} 
                      className={`font-mono text-[8px] sm:text-[9px] tracking-widest uppercase px-3 py-1 rounded-sm transition-all duration-300 group-hover:border-black/20 ${customStyle}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM TERMINAL ROW */}
        <section className="w-full max-w-5xl mx-auto mt-16 px-2">
          <div className="border border-black/10 bg-white/60 backdrop-blur-md rounded-md p-5 font-mono text-[9px] sm:text-xs text-black/60 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/20 uppercase tracking-[0.25em] px-2 py-0.5">
              HUD_TERMINAL
            </div>
            
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-[#00CC52]" />
              <div className="leading-relaxed text-left">
                <div>{logs[0]}</div>
                <div className="text-[#00CC52] font-bold">{logs[1]}</div>
              </div>
            </div>
            
            <div className="font-bold text-[8px] sm:text-[10px] tracking-widest text-black/30 uppercase">
              STATUS: OS_DATABASE_SECURE
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
