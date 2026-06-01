import { motion } from 'framer-motion';
import { playClickTick } from '../utils/SoundManager';

interface FloatingHomeButtonProps {
  onBack?: () => void;
  label?: string;
  subtext?: string;
}

export const FloatingHomeButton = ({ onBack, label, subtext }: FloatingHomeButtonProps) => {
  const isBack = !!onBack;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickTick(900, 0.08);
    if (isBack && onBack) {
      onBack();
    } else {
      window.history.pushState(null, '', '/');
      window.location.hash = '#';
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const displayText = label || (isBack ? 'BACK' : 'HOME');
  const displaySubtext = subtext || (isBack ? 'RETURN_TO_PREVIOUS' : 'RETURN_TO_ROOT');

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => playClickTick(1600, 0.015)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-8 left-8 sm:bottom-10 sm:left-10 z-[120] pointer-events-auto flex flex-col items-start gap-1 select-none text-left interactive-hover cursor-pointer group"
    >
      {/* Visual premium glass pill shape */}
      <motion.div 
        className="flex items-center gap-2.5 px-4 py-2 bg-white/75 backdrop-blur-md border border-[#00FF66]/30 group-hover:border-[#00FF66] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04),0_0_15px_rgba(0,255,102,0.1)] group-hover:shadow-[0_8px_30px_rgba(0,255,102,0.15),0_0_20px_rgba(0,255,102,0.3)] text-black transition-all duration-300 transform-gpu"
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-mono text-xs text-[#00CC52] font-black group-hover:translate-x-[-2px] transition-transform">&larr;</span>
        <span className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest">{displayText}</span>
        <span className="w-1.5 h-1.5 bg-[#00CC52] rounded-full animate-ping ml-1" />
      </motion.div>
      
      {/* Operating system subtext */}
      <span className="font-mono text-[7px] text-zinc-400 tracking-widest uppercase pl-3 select-none group-hover:text-black transition-colors">
        {displaySubtext} // NOM_07
      </span>
    </motion.button>
  );
};
