import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

// Import images
import gdg1 from '../assets/Images/GDG1.jpeg';
import gdg2 from '../assets/Images/GDG2.jpeg';
import gdg3 from '../assets/Images/GDG3.jpeg';
import Viso1 from '../assets/Images/Viso1.jpeg';
import Viso2 from '../assets/Images/Viso2.jpeg';
import MT1 from '../assets/Images/MT1.jpeg';
import MT2 from '../assets/Images/MT2.jpeg';
import MT3 from '../assets/Images/MT3.jpeg';

interface GalleryPageProps {
  onBack: () => void;
}

const mediaItems = [
  { id: 'm-gdg1', src: gdg1, category: 'GDG', title: 'GDG Event Coordination' },
  { id: 'm-gdg2', src: gdg2, category: 'GDG', title: 'GDG Design Board Campaign' },
  { id: 'm-gdg3', src: gdg3, category: 'GDG', title: 'Community Networking' },
  { id: 'm-viso1', src: Viso1, category: 'VISOTECH', title: 'Visotech 2026 Volunteering' },
  { id: 'm-viso2', src: Viso2, category: 'VISOTECH', title: 'C-Striker Host setup' },
  { id: 'm-mt1', src: MT1, category: 'ACADEMICS', title: 'Engineering Mechanics prep' },
  { id: 'm-mt2', src: MT2, category: 'ACADEMICS', title: 'Mechanics Conceptual analysis' },
  { id: 'm-mt3', src: MT3, category: 'ACADEMICS', title: 'Academic Topper Recognition' }
];

export const GalleryPage = ({ onBack }: GalleryPageProps) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'GDG' | 'VISOTECH' | 'ACADEMICS'>('ALL');

  const filteredItems = activeCategory === 'ALL'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category: typeof activeCategory) => {
    playClickTick(1400, 0.05);
    setActiveCategory(category);
  };

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black select-none">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

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

      <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10 text-left">

        {/* HEADER SECTION */}
        <header className="mb-12 relative flex flex-col sm:flex-row justify-between sm:items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-4 mb-4 opacity-45">
              <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="font-mono text-[9px] text-[#D4AF37] font-extrabold tracking-[0.28em] uppercase">SEC_08 // MEDIA NODES</span>
              <div className="h-[1.5px] w-12 bg-gradient-to-l from-[#D4AF37] to-transparent" />
            </div>

            <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1">
              GALLERY
            </h1>
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase text-black/40 mt-3 max-w-xl">
              Photographic archives of design coordinations, volunteering setups, and community events.
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2.5 font-mono text-[8px] sm:text-[9.5px] font-extrabold uppercase tracking-widest">
            {(['ALL', 'GDG', 'VISOTECH', 'ACADEMICS'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 border rounded-sm transition-all cursor-pointer interactive-hover uppercase ${activeCategory === cat
                    ? 'bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,255,102,0.4)]'
                    : 'bg-white text-black/60 border-black/10 hover:border-black hover:text-black'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group border border-black/10 bg-white p-3 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.02)] hover:border-black hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between"
                onMouseEnter={() => playClickTick(1400 + index * 50, 0.015)}
              >
                {/* Photo frame */}
                <div className="aspect-[4/3] bg-black/[0.02] border border-black/5 rounded-sm overflow-hidden mb-4 relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-500 pointer-events-none select-none"
                  />
                  <span className="absolute top-2 left-2 bg-black/95 text-[#00FF66] font-mono text-[7px] tracking-widest px-2 py-0.5 rounded-sm uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="text-left mt-2">
                  <h4 className="font-display font-black text-sm uppercase tracking-tight text-black leading-tight group-hover:text-[#00CC52] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-black/5 font-mono text-[7px] text-black/35 uppercase">
                    <span>INDEX_{item.id}</span>
                    <span className="flex items-center gap-1">
                      <Check size={8} className="text-[#00CC52]" />
                      ARCHIVED
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};
