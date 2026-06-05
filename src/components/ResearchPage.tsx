import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Terminal, ChevronRight } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

interface ResearchPageProps {
  onBack: () => void;
}

const researchNodes = [
  {
    num: '01',
    title: 'Semantic Handwriting copy Evaluation via NLP',
    category: 'NATURAL LANGUAGE PROCESSING',
    status: 'Drafting Spec',
    desc: 'Investigating deep learning pipelines that translate handwritten textual student replies via specialized OCR and compare semantic vectors against key answer sheets using cosine similarity models.',
    details: [
      { key: 'Pipeline', val: 'ResNet50 + Transformer NLP Encoder' },
      { key: 'Dataset', val: 'Curated university handwritten papers' },
      { key: 'Target Accuracy', val: '86% semantic validation' }
    ]
  },
  {
    num: '02',
    title: 'Hardware-Accelerated Web UI Rendering Layers',
    category: 'HUMAN-COMPUTER INTERACTION',
    status: 'Archived Spec',
    desc: 'Performance audits measuring GPU compilation thresholds, debouncing mouse-following coordinate states, and running 3D canvas shaders smoothly on mobile aspect ratios.',
    details: [
      { key: 'Accelerations', val: 'GSAP + Three.js shader pipelines' },
      { key: 'Throttle Rates', val: '30% event debouncing nominal' },
      { key: 'FPS Metrics', val: 'Constant 60fps mobile execution' }
    ]
  }
];

export const ResearchPage = ({ onBack }: ResearchPageProps) => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black select-none">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute left-[8%] top-[20%] w-72 h-72 rounded-full bg-red-500/5 blur-[80px]" />
        <div className="absolute right-[12%] top-[50%] w-80 h-80 rounded-full bg-emerald-500/5 blur-[90px]" />
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
            <span className="font-mono text-[9px] text-red-500 font-extrabold tracking-[0.28em] uppercase">SEC_06 // RESEARCH NODES</span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-red-500 to-transparent" />
          </div>

          <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1">
            RESEARCH
          </h1>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase text-black/40 mt-3 max-w-xl">
            Theoretical study systems, deep learning pipeline structures, and human-interface analysis logs.
          </p>
        </header>

        {/* Research Nodes Grid */}
        <div className="grid grid-cols-1 gap-8">
          {researchNodes.map((node, index) => (
            <motion.div
              key={node.num}
              className="border border-black/10 bg-white/80 backdrop-blur-xl rounded-sm p-6 sm:p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => playClickTick(1400, 0.02)}
            >
              <div className="absolute -bottom-10 -right-4 font-display font-black text-9xl text-black/[0.02] pointer-events-none">
                {node.num}
              </div>

              {/* Title & metadata */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 border-b border-black/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-full text-red-500">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-black leading-tight">
                      {node.title}
                    </h3>
                    <span className="font-mono text-[8.5px] text-red-500 font-extrabold uppercase tracking-widest mt-1 block">
                      {node.category}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[8px] sm:text-[9.5px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 border border-red-500/20 bg-red-500/5 text-red-500">
                  {node.status}
                </span>
              </div>

              <p className="font-sans text-[13px] sm:text-[14.5px] text-black/70 leading-relaxed font-light mb-6 text-left">
                {node.desc}
              </p>

              {/* Specs logs list */}
              <div className="bg-black/95 text-emerald-400 p-4 rounded-sm font-mono text-[9px] sm:text-[10px] space-y-1.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] text-left">
                <div className="flex items-center gap-1.5 font-bold text-red-500 border-b border-white/10 pb-1.5 mb-2">
                  <Terminal size={12} />
                  SYSTEM_SPECIFICATIONS
                </div>
                {node.details.map((detail) => (
                  <div key={detail.key} className="flex items-center gap-2">
                    <ChevronRight size={10} className="text-red-500" />
                    <span className="text-emerald-400/55 uppercase">{detail.key}:</span>
                    <span>{detail.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
