import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

interface CardProps {
  year?: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  index?: number;
  nodeLabel?: string;
  coordinateLabel?: string;
  shellLabel?: string;
  accentClass?: string;
  glowClass?: string;
  align?: 'left' | 'right';
  isLocked?: boolean;
  onClick?: () => void;
  icon?: any;
  highlightTag?: { name: string; style: string };
  actionText?: string;
  accentColor?: string; // e.g. '#00CC52' or '#D4AF37'
  className?: string;
  floatShift?: number;
  baseRotate?: number;
}

export const Card = ({
  year,
  title,
  subtitle,
  description,
  tags = [],
  index,
  nodeLabel,
  coordinateLabel,
  shellLabel,
  accentClass = 'border-black/10',
  glowClass = 'bg-[#00CC52]/5',
  align = 'left',
  isLocked = false,
  onClick,
  icon: Icon,
  highlightTag,
  actionText = 'OPEN ARCHIVE',
  accentColor = '#00CC52',
  className = '',
  floatShift = -8,
  baseRotate = 0
}: CardProps) => {
  const isLeft = align === 'left';
  const displayIndex = index !== undefined ? String(index).padStart(2, '0') : undefined;

  const handleClick = () => {
    playClickTick(1600, 0.08);
    if (onClick) onClick();
  };

  return (
    <motion.div
      onClick={handleClick}
      onMouseEnter={() => playClickTick(1500, 0.02)}
      className={`relative w-full p-6 sm:p-8 bg-white/85 backdrop-blur-2xl border ${accentClass} rounded-sm shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500 cursor-pointer interactive-hover select-none overflow-hidden group/card ${className}`}
      animate={{
        y: [0, floatShift, 0],
        rotate: [baseRotate, baseRotate + (isLeft ? -0.35 : 0.35), baseRotate],
      }}
      transition={{
        y: { duration: 6 + (index || 0) * 0.7, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 8 + (index || 0), repeat: Infinity, ease: 'easeInOut' },
      }}
      whileHover={{
        y: floatShift - 10,
        scale: 1.02,
        rotate: baseRotate + (isLeft ? 0.1 : -0.1),
        boxShadow: '0 30px 60px rgba(0,0,0,0.08), 12px 12px 0px rgba(0,0,0,0.85)'
      }}
    >
      {/* Grid pattern on hover */}
      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.03] pointer-events-none transition-opacity duration-500" style={{
        backgroundImage: `linear-gradient(90deg, ${accentColor} 1px, transparent 1px), linear-gradient(${accentColor} 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />

      {/* Ambient glow inside card */}
      <div className={`absolute ${isLeft ? '-right-16' : '-left-16'} top-1/2 w-28 h-28 rounded-full ${glowClass} blur-[40px] pointer-events-none`} />

      {/* Draggable-like Node label pill */}
      {nodeLabel && (
        <div className={`absolute ${isLeft ? 'right-6' : 'left-6'} -top-7 z-20 flex items-center gap-1.5 bg-white/95 border border-black/10 px-3 py-1 rounded-sm font-mono text-[7px] tracking-[0.2em] text-black/50 uppercase`}>
          <ArrowUpRight size={8} />
          {nodeLabel}
        </div>
      )}

      {/* Bottom shell label */}
      {shellLabel && (
        <div className={`absolute ${isLeft ? '-right-8' : '-left-8'} bottom-6 flex items-center gap-2 font-mono text-[7px] text-black/30 uppercase tracking-[0.2em]`}>
          <span className="w-6 h-[1px] bg-black/15" />
          {shellLabel}
        </div>
      )}

      {/* Coordinate label if provided */}
      {coordinateLabel && (
        <div className={`absolute ${isLeft ? 'left-6' : 'right-6'} top-6 font-mono text-[7px] text-black/20 tracking-widest uppercase`}>
          {coordinateLabel}
        </div>
      )}

      {/* Big background index number */}
      {displayIndex && (
        <div className="absolute -bottom-8 right-4 font-display font-black text-9xl text-black/[0.02] pointer-events-none group-hover/card:text-[#00CC52]/[0.06] transition-colors leading-none">
          {displayIndex}
        </div>
      )}

      {/* Top Row: Year/Icon */}
      <div className="relative z-10 flex justify-between items-center mb-6">
        {year && (
          <span className="font-mono text-[9px] sm:text-[10px] text-zinc-500 font-extrabold tracking-widest" style={{ color: accentColor }}>
            {year}
          </span>
        )}
        <div className="flex items-center gap-2">
          {isLocked ? (
            <Lock size={12} className="text-zinc-400 group-hover:scale-110 transition-transform duration-300" style={{ color: accentColor }} />
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                {actionText}
              </span>
              <ArrowRight size={14} className="text-zinc-400 group-hover/card:translate-x-0.5 transition-transform duration-300" style={{ color: accentColor }} />
            </div>
          )}
        </div>
      </div>

      {/* Content Stack */}
      <div className="relative z-10 flex flex-col mb-6 text-left">
        {subtitle && (
          <span className="font-mono text-[8px] font-black tracking-[0.25em] uppercase block mb-1" style={{ color: accentColor }}>
            {subtitle}
          </span>
        )}
        
        <div className="flex justify-between items-center w-full mb-3 pr-4">
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black leading-none group-hover/card:text-zinc-800 transition-colors" style={{ color: isLocked ? undefined : undefined }}>
            {title}
          </h2>
          {Icon && <Icon className="text-black/35 group-hover/card:text-zinc-800 transition-colors duration-500" style={{ color: accentColor }} size={18} />}
        </div>

        {description && (
          <p className="font-sans text-[13px] text-black/65 leading-relaxed font-light pr-4 max-w-lg mt-2">
            {description}
          </p>
        )}
      </div>

      {/* Bottom Row: Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {tags.map((tag) => {
            const isHighlighted = highlightTag?.name === tag;
            let customStyle = 'border border-black/5 text-black/40 bg-black/[0.01]';
            
            if (isHighlighted && highlightTag) {
              customStyle = highlightTag.style;
            }

            return (
              <span 
                key={tag} 
                className={`font-mono text-[8px] sm:text-[9px] tracking-widest uppercase px-3 py-1 rounded-sm transition-all duration-300 group-hover/card:border-black/20 ${customStyle}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};
