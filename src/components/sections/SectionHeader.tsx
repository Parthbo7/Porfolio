import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  categoryLabel?: string;
  statusNode?: string;
  statusColor?: string; // e.g. '#D4AF37' or '#00CC52' or '#FF3E6C'
  subtitle?: string;
  description?: string;
  gridColor?: string; // e.g. '#D4AF37'
  coordinateLabel?: string;
}

export const SectionHeader = ({
  title,
  categoryLabel = 'ARCHIVE_LEDGER',
  statusNode = 'SYSTEM_NODE_05',
  statusColor = '#D4AF37',
  subtitle,
  description,
  gridColor = '#D4AF37',
  coordinateLabel = 'GRID_COORDINATE_STREAM'
}: SectionHeaderProps) => {
  return (
    <header className="w-full mb-16 lg:mb-24 relative text-left select-none">
      {/* Metadata status node sticker */}
      {statusNode && (
        <motion.div
          animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[8%] top-1 font-mono text-[8px] sm:text-[10px] text-black/45 border border-black/10 px-3 py-1.5 rounded-sm uppercase bg-white/65 backdrop-blur-sm shadow-[2px_2px_0px_rgba(0,0,0,0.03)] z-10"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: statusColor }} />
            {statusNode}
          </div>
        </motion.div>
      )}

      {/* Floating Coordinate Label */}
      {coordinateLabel && (
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[3%] top-14 hidden md:flex items-center gap-2 font-mono text-[8px] text-black/35 uppercase tracking-[0.2em] z-10"
        >
          <ArrowUpRight size={10} />
          {coordinateLabel}
        </motion.div>
      )}

      {/* Category Tag Row */}
      {categoryLabel && (
        <div className="inline-flex items-center gap-4 mb-6 opacity-45">
          <div className="h-[1.5px] w-14 bg-gradient-to-r from-neutral-400 to-transparent" style={{ backgroundImage: `linear-gradient(to right, ${statusColor}, transparent)` }} />
          <span className="font-mono text-[8px] font-bold tracking-[0.28em] uppercase" style={{ color: statusColor }}>
            {categoryLabel}
          </span>
          <div className="h-[1.5px] w-14 bg-gradient-to-l from-neutral-400 to-transparent" style={{ backgroundImage: `linear-gradient(to left, ${statusColor}, transparent)` }} />
        </div>
      )}

      {/* H1 Headline */}
      <h1 className="font-display font-black text-[14vw] sm:text-[9vw] lg:text-[8vw] leading-[0.9] tracking-tighter text-black uppercase mt-1 text-left">
        {title}
      </h1>

      {/* Description Panel */}
      {description && (
        <motion.div
          className="mt-6 px-7 sm:px-9 py-4 bg-white/80 border border-black/10 font-sans text-[12px] sm:text-[14px] tracking-wide text-black/70 max-w-4xl shadow-[7px_7px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold backdrop-blur-xl relative overflow-hidden"
          whileHover={{ y: -2 }}
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `linear-gradient(90deg, ${gridColor} 1px, transparent 1px), linear-gradient(${gridColor} 1px, transparent 1px)`,
            backgroundSize: '15px 15px'
          }} />
          {subtitle && (
            <span className="font-mono text-[9px] sm:text-[10px] block mb-1.5" style={{ color: statusColor }}>
              // {subtitle}
            </span>
          )}
          <span className="relative font-light text-zinc-800">{description}</span>
        </motion.div>
      )}
    </header>
  );
};
