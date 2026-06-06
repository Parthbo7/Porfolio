import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { playClickTick } from '../../utils/SoundManager';

interface PageLayoutProps {
  children: React.ReactNode;
  onBack?: (() => void) | string;
  backLabel?: string;
  initialLogs?: string[];
  telemetryLogs?: string[];
  statusLabel?: string;
  glowColors?: {
    left?: string;
    right?: string;
    center?: string;
  };
}

export const PageLayout = ({
  children,
  onBack,
  backLabel = 'CLOSE_ARCHIVE',
  initialLogs = [
    '> OS DATABASE SYNCHRONIZED...',
    '> BUILD: ACTIVE // NETWORK: STABLE // SYSTEM STATUS: NOMINAL_'
  ],
  telemetryLogs = [
    'RETRIEVING SCHEMAS...',
    'SYNCING LOCAL ARCHIVES...',
    'VERIFYING CRYPTO GATEWAYS...',
    'UI RENDER PROCESS NOMINAL.',
    'AWAITING INPUT_DECISION MATRIX...',
    'OS METRIC OVERLAY AT FULL FPS.'
  ],
  statusLabel = 'SECURE_OS_NODE',
  glowColors = {
    left: 'bg-[#00CC52]/6',
    right: 'bg-[#D4AF37]/6'
  }
}: PageLayoutProps) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>(initialLogs);

  // Live simulated telemetry stream
  useEffect(() => {
    if (!telemetryLogs || telemetryLogs.length === 0) return;

    const logInterval = setInterval(() => {
      const randomLog = telemetryLogs[Math.floor(Math.random() * telemetryLogs.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1] || '',
        `> [${now}] ${randomLog}`
      ]);
    }, 5000);

    return () => clearInterval(logInterval);
  }, [telemetryLogs]);

  const handleBackClick = () => {
    playClickTick(1600, 0.05);
    if (onBack) {
      if (typeof onBack === 'function') {
        onBack();
      } else {
        navigate(onBack);
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto no-scrollbar relative flex flex-col bg-transparent text-black z-10"
    >
      <main className="min-h-screen w-full relative overflow-x-hidden pb-32 flex flex-col">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

        {/* Ambient glow halos */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          {glowColors.left && (
            <div className={`absolute left-[5%] top-[15%] w-72 h-72 rounded-full ${glowColors.left} blur-[80px]`} />
          )}
          {glowColors.right && (
            <div className={`absolute right-[10%] top-[45%] w-80 h-80 rounded-full ${glowColors.right} blur-[90px]`} />
          )}
          {glowColors.center && (
            <div className={`absolute left-[30%] top-[70%] w-72 h-72 rounded-full ${glowColors.center} blur-[85px]`} />
          )}
        </div>

        {/* FIXED CLOSE HUD BUTTON */}
        <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
          <motion.button
            onClick={handleBackClick}
            onMouseEnter={() => playClickTick(1600, 0.02)}
            className="flex items-center gap-3 interactive-hover group backdrop-blur-2xl border border-black/10 bg-white/70 px-5 py-2.5 rounded-sm transition-all duration-300 text-black/60 hover:text-black hover:border-black/30 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#6B6B6B]" />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-black/70">{backLabel}</span>
          </motion.button>
        </div>

        {/* PAGE CONTENT */}
        <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10 flex-1 flex flex-col justify-between">
          {children}

          {/* BOTTOM TERMINAL LOGS PANEL */}
          <section className="w-full max-w-5xl mx-auto mt-20 px-2 relative z-10">
            <div className="border border-black/10 bg-white/60 backdrop-blur-md rounded-md p-5 font-mono text-[9px] sm:text-xs text-black/60 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="absolute top-0 right-0 font-mono text-[6px] text-black/25 uppercase tracking-[0.25em] px-2 py-0.5">
                TELEMETRY_LOG
              </div>
              
              <div className="flex items-center gap-3">
                <Terminal size={14} className="text-[#00CC52]" />
                <div className="leading-relaxed text-left">
                  <div>{logs[0]}</div>
                  <div className="text-[#00CC52] font-bold">{logs[1]}</div>
                </div>
              </div>
              
              <div className="font-bold text-[8px] sm:text-[10px] tracking-widest text-black/30 uppercase">
                STATUS: {statusLabel}
              </div>
            </div>
          </section>
        </div>
      </main>

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
