import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickTick, playBeep } from '../utils/SoundManager';

interface TransitionOverlayProps {
  isVisible: boolean;
  destination: 'hero' | 'experiments' | 'footer' | 'profile' | 'vault' | 'connect';
}

export const TransitionOverlay = ({ isVisible, destination }: TransitionOverlayProps) => {
  const [dots, setDots] = useState('');
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // 1. Loading Text Mapping
  const loadingTexts = {
    hero: 'RETURNING TO CORE INTERFACE',
    experiments: 'INITIALIZING EXPERIMENT ARCHIVE',
    footer: 'INITIALIZING EXPERIENCE ARCHIVE',
    profile: 'LOADING HUMAN ARCHIVE',
    vault: 'VAULT AUTHENTICATION IN PROGRESS',
    connect: 'INITIALIZING COMMUNICATION SYSTEM',
  };

  const logsPool = {
    hero: [
      '> DISCONNECTING MODULE SECTORS...',
      '> FLUSHING TEMPORARY BUFFER INDEX...',
      '> SYNCHRONIZING CORE GRAVITY PARALLEL...',
      '> REBUILDING EDITORIAL GRID DESCRIPTOR...',
      '> RETRIEVAL SEQUENCING SUCCESSFUL.'
    ],
    experiments: [
      '> CONNECTING SECURE_PORT_07...',
      '> DECRYPTING PRIVATE WORKSPACES...',
      '> SCANNING ENGINES & STICKER FRAGMENTS...',
      '> LAUNCHING ASYMMETRICAL CARD SCHEMAS...',
      '> ARCHIVE COMPILE COMPLETED // NOMINAL_V2.'
    ],
    footer: [
      '> CONNECTING SECURE_PORT_08...',
      '> DECRYPTING PRIVATE CAREER SEGMENTS...',
      '> SCANNING EXPERIENCE TIMELINES & BADGES...',
      '> COMPILING ASYMMETRICAL GRID LAYOUTS...',
      '> ARCHIVE COMPILE COMPLETED // TELEMETRY NOMINAL.'
    ],
    profile: [
      '> CONNECTING IDENTITY_NODE_V3...',
      '> DECRYPTING BIOMETRIC HASH REGISTRY...',
      '> SYNCHRONIZING HUMAN TELEMETRY MATRIX...',
      '> LOADING PERSONALITY SUB-SYSTEMS...',
      '> PROFILE MODULE INITIATION COMPLETED // ACTIVE.'
    ],
    vault: [
      '> AUTHENTICATING USER...',
      '> VERIFYING TRUST LEVEL...',
      '> UNLOCKING PREMIUM SIDE OF PARTH...',
      '> ACCESS LEVEL VERIFIED // GRANTED.',
      '> DECRYPTING RESTRICTED VAULT LAYER...'
    ],
    connect: [
      '> ENABLING COMMUNICATIONS MODULE...',
      '> VERIFYING DECENTRALIZED PROTOCOLS...',
      '> DETECTING SIGNAL_ID GATEWAY...',
      '> ENCRYPTING TRANSMISSION PORT...',
      '> COMMUNICATION INTERFACE ONLINE // NOMINAL_V3.'
    ]
  };

  // Dot bouncing animation
  useEffect(() => {
    if (!isVisible) return;
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);
    return () => clearInterval(dotInterval);
  }, [isVisible]);

  // BIOS kernel boot log typewriter simulation & Progress bar
  useEffect(() => {
    if (!isVisible) {
      setBootLogs([]);
      setProgress(0);
      return;
    }

    // Play startup beep
    playBeep(980, 0.12);
    setTimeout(() => playBeep(1480, 0.08), 80);

    const activeLogs = logsPool[destination];
    let logIndex = 0;
    
    // Add logs step-by-step
    const logTimer = setInterval(() => {
      if (logIndex < activeLogs.length) {
        setBootLogs((prev) => [...prev, activeLogs[logIndex]]);
        // Play typing tick
        playClickTick(1600 + logIndex * 150, 0.02);
        logIndex++;
      } else {
        clearInterval(logTimer);
      }
    }, 180);

    // Smooth progress bar counter
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        // Small random clicks while loading progress bar moves
        if (Math.random() > 0.7) {
          playClickTick(1800 + Math.random() * 400, 0.015);
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 80);

    return () => {
      clearInterval(logTimer);
      clearInterval(progressTimer);
    };
  }, [isVisible, destination]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 w-screen h-screen bg-[#070708] text-[#00FF66] z-[999] flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none overflow-hidden"
        >
          {/* Neon Scanline effect */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#00FF66] opacity-40 shadow-[0_0_15px_#00FF66] pointer-events-none animate-scanline" />

          {/* High-tech matrix cyber grid overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none custom-grid-lines" />
          <div className="grain-overlay opacity-[0.025]" />

          {/* TOP OS DETAILS */}
          <div className="flex justify-between items-center w-full border-b border-[#00FF66]/10 pb-4 font-mono text-[9px] sm:text-xs tracking-widest text-[#00FF66]/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00FF66] rounded-full animate-ping" />
              SYSTEM_STATE_TRANSITION
            </span>
            <span>OS_NODE: SEC_PORTAL_v2.26</span>
          </div>

          {/* MIDDLE DYNAMIC LOGS AREA */}
          <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col justify-center gap-8 py-10 font-mono">
            
            {/* Massive Telemetry Scanning Text */}
            <div className="flex flex-col gap-2">
              <div className="text-[10px] tracking-[0.3em] text-[#00FF66]/50 uppercase font-semibold">
                // CRITICAL LOAD SEQUENCE
              </div>
              <h2 className="font-display font-black text-xl sm:text-3xl lg:text-4xl tracking-tighter text-[#00FF66] uppercase leading-none drop-shadow-[0_0_8px_rgba(0,255,102,0.3)]">
                {loadingTexts[destination]}{dots}
              </h2>
            </div>

            {/* Bios-like terminal log compilation box */}
            <div className="w-full bg-[#0a0a0c] border border-[#00FF66]/15 rounded p-4 h-48 sm:h-56 overflow-y-auto no-scrollbar flex flex-col gap-1.5 text-[10px] sm:text-xs text-[#00FF66]/70 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] relative">
              {bootLogs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={idx === bootLogs.length - 1 ? 'text-[#00FF66] font-bold' : ''}
                >
                  {log}
                </motion.div>
              ))}
              
              {/* Flashing terminal cursor at the end */}
              {bootLogs.length < activeLogsLength(destination) && (
                <div className="w-2 h-4 bg-[#00FF66] animate-pulse mt-0.5" />
              )}
            </div>

            {/* Premium high-tech grid percentage progress bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] sm:text-xs tracking-widest text-[#00FF66]/60">
                <span>PARSING INTEGRATION PROTOCOL...</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
              <div className="w-full h-2 bg-[#00FF66]/5 border border-[#00FF66]/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#00FF66]/40 to-[#00FF66] shadow-[0_0_8px_#00FF66]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>

          </div>

          {/* BOTTOM OS HUD METRICS */}
          <div className="flex justify-between items-end w-full border-t border-[#00FF66]/10 pt-4 font-mono text-[8px] sm:text-[10px] text-[#00FF66]/50 tracking-wider">
            <div>TEMP: 38.6°C // VOLTAGE: 1.18V</div>
            <div className="sm:block hidden">SECTOR: LOAD_BUFF_0xFF23D</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Simple helper to count logs based on destination
const activeLogsLength = (_destination: 'hero' | 'experiments' | 'footer' | 'profile' | 'vault' | 'connect') => {
  return 5;
};
