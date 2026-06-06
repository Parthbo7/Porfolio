import { motion } from 'framer-motion';
import { BookOpen, Terminal, ChevronRight } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { SectionHeader } from '../../components/sections/SectionHeader';
import { playClickTick } from '../../utils/SoundManager';

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

export const ResearchPage = () => {
  return (
    <PageLayout
      onBack="/"
      backLabel="CLOSE_ARCHIVE"
      statusLabel="RESEARCH_MATRIX"
      glowColors={{
        left: 'bg-red-500/5',
        right: 'bg-emerald-500/5'
      }}
      initialLogs={[
        '> RESEARCH DATABASE ONLINE...',
        '> MODEL SCALES DEFINED // STATE: NOMINAL_'
      ]}
      telemetryLogs={[
        'COMPUTING COGNITIVE HYPOTHESES...',
        'PARSING MATH VECTOR ARRAYS...',
        'SYNCING ACCELEROMETER STACKS...',
        'SYSTEM CORE ON STANDBY...'
      ]}
    >
      <div className="max-w-4xl mx-auto w-full text-left">
        {/* HEADER SECTION */}
        <SectionHeader
          title="RESEARCH"
          categoryLabel="SEC_06 // RESEARCH NODES"
          statusNode="RESEARCH_OS_NODE_06"
          statusColor="#FF3E6C"
          description="Theoretical study systems, deep learning pipeline structures, and human-interface analysis logs."
          subtitle="THEORETICAL ANALYSIS & RESEARCH"
        />

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
    </PageLayout>
  );
};
export default ResearchPage;
