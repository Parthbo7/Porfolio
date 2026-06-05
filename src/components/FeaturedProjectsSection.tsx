import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickTick } from '../utils/SoundManager';
import { Cpu, ShieldCheck, Code, ExternalLink, Calendar, RefreshCw } from 'lucide-react';

const featuredProjects = [
  {
    id: 'feat-it-2',
    title: 'InsightTube 2.0',
    category: 'YouTube Analytics Platform',
    status: 'LIVE',
    deploymentStatus: 'DEPLOYED',
    lastUpdated: 'JUN 2026',
    accentClass: 'hover:border-[#00D2FF] hover:shadow-[0_0_20px_rgba(0,210,255,0.15),8px_8px_0px_rgba(0,210,255,0.9)]',
    accentColor: '#00D2FF',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Charts', 'REST APIs'],
    description: 'A modern YouTube analytics platform providing channel intelligence, performance metrics, engagement insights, trend monitoring, and creator growth analytics through an interactive dashboard experience.',
    github: 'https://github.com/Parthbo7/InsightTube',
    live: 'https://insight-tube2-o.vercel.app/',
    icon: Cpu
  },
  {
    id: 'feat-ae-eval',
    title: 'AI Exam Evaluator',
    category: 'OCR + NLP EVALUATOR ENGINE',
    status: 'IN DEVELOPMENT',
    deploymentStatus: 'LOCAL ENVIRONMENT',
    lastUpdated: 'MAY 2026',
    accentClass: 'hover:border-[#00FF66] hover:shadow-[0_0_20px_rgba(0,255,102,0.15),8px_8px_0px_rgba(0,255,102,0.9)]',
    accentColor: '#00FF66',
    tech: ['Python', 'OpenCV', 'NLP', 'PyTorch', 'OCR Engine'],
    description: 'An advanced machine learning pipeline leveraging optical character recognition and semantic natural language processing models to grade handwritten exam copies.',
    github: 'https://github.com/Parthbo7/AI-Exam-Evaluator',
    live: null,
    icon: ShieldCheck
  },
  {
    id: 'feat-port-os',
    title: 'Portfolio OS',
    category: 'FUTURISTIC PORTFOLIO OS',
    status: 'ACTIVE',
    deploymentStatus: 'DEPLOYED',
    lastUpdated: 'APR 2026',
    accentClass: 'hover:border-[#FF3E6C] hover:shadow-[0_0_20px_rgba(255,62,108,0.15),8px_8px_0px_rgba(255,62,108,0.9)]',
    accentColor: '#FF3E6C',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'GSAP'],
    description: 'Interactive futuristic portfolio system inspired by operating system interfaces with immersive navigation, animated archives, and developer-focused storytelling.',
    github: 'https://github.com/Parthbo7/Portfolio',
    live: '#profile',
    icon: Code
  }
];

export const FeaturedProjectsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section 
      id="featured-projects-section"
      className="w-full min-h-screen py-24 px-6 sm:px-12 lg:px-16 bg-[#faf9f6] text-black relative flex flex-col justify-center items-center border-t border-black/5"
    >
      <div className="absolute inset-0 pointer-events-none custom-beige-grid opacity-[0.4]" />

      {/* Segment Header */}
      <div className="w-full max-w-6xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-4 mb-3 opacity-45">
          <div className="h-[1.5px] w-12 bg-gradient-to-r from-cyan-600 to-transparent" />
          <span className="font-mono text-[9px] text-cyan-600 font-extrabold tracking-[0.28em] uppercase">SEC_03 // REPOSITORIES</span>
          <div className="h-[1.5px] w-12 bg-gradient-to-l from-cyan-600 to-transparent" />
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left">
            <h2 className="font-display font-black text-[10vw] sm:text-[7vw] lg:text-[5.5vw] leading-[0.85] tracking-tighter uppercase select-none">
              FEATURED BUILDS
            </h2>
            <p className="font-sans text-[11px] sm:text-xs text-black/50 tracking-wider uppercase mt-3 font-semibold max-w-xl">
              Selected projects showcasing development, design, analytics, and AI experimentation.
            </p>
          </div>
          <button 
            onClick={() => {
              playClickTick(1600, 0.05);
              window.location.hash = '#projects';
            }}
            className="font-mono text-[10px] sm:text-xs tracking-widest font-extrabold text-[#FF3E6C] hover:text-black border border-black/10 hover:border-black bg-white px-5 py-3 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300 w-fit cursor-pointer uppercase interactive-hover"
          >
            OPEN PROJECT REPOSITORY &rarr;
          </button>
        </div>
      </div>

      {/* Main Responsive Layout: Stack cards on left, preview on right */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: Repository Cards Stack */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {featuredProjects.map((project, idx) => {
            const Icon = project.icon;
            
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  playClickTick(1500, 0.015);
                }}
                className={`group flex flex-col sm:flex-row justify-between p-6 sm:p-8 bg-white border border-[#A8D3C8] rounded-sm transition-all duration-500 cursor-default relative overflow-hidden text-left ${project.accentClass}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* Accent Border Line */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-500" 
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Left Card Details */}
                <div className="flex-1 pr-0 sm:pr-8 flex flex-col justify-between">
                  <div>
                    {/* Category & Icon */}
                    <div className="flex items-center gap-2 mb-3">
                      <div 
                        className="p-1.5 rounded-sm border border-black/5 bg-black/[0.01] text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-300"
                        style={{ borderColor: `${project.accentColor}25` }}
                      >
                        <Icon size={13} />
                      </div>
                      <span className="font-mono text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-widest text-black/45">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black mb-3 leading-none group-hover:text-black transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[12.5px] sm:text-[13px] text-black/65 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-black/[0.04]">
                    {project.live && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickTick(1650, 0.07);
                          if (project.live?.startsWith('#')) {
                            window.location.hash = project.live;
                          } else {
                            window.open(project.live, '_blank');
                          }
                        }}
                        className="font-mono text-[9px] sm:text-[10px] tracking-wider font-extrabold uppercase px-4 py-2 border border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm cursor-pointer flex items-center gap-1.5"
                      >
                        <ExternalLink size={10} />
                        LIVE DEMO
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playClickTick(1600, 0.05);
                        window.open(project.github, '_blank');
                      }}
                      className="font-mono text-[9px] sm:text-[10px] tracking-wider font-extrabold uppercase px-4 py-2 border border-black/15 bg-white text-black/70 hover:border-black hover:text-black transition-all duration-300 rounded-sm cursor-pointer flex items-center gap-1.5"
                    >
                      VIEW PROJECT
                    </button>
                  </div>
                </div>

                {/* Right Card Status & Tech */}
                <div className="mt-6 sm:mt-0 flex flex-col justify-between items-start sm:items-end text-left sm:text-right sm:min-w-[150px] border-t sm:border-t-0 sm:border-l border-black/[0.05] pt-6 sm:pt-0 sm:pl-6">
                  <div className="space-y-4 w-full">
                    {/* Status Badge */}
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="font-mono text-[7px] text-black/30 tracking-widest uppercase">STATUS</span>
                      <span 
                        className="font-mono text-[8px] font-black uppercase tracking-widest px-2 py-0.5 border rounded-sm w-fit"
                        style={{ 
                          color: project.accentColor, 
                          borderColor: `${project.accentColor}40`,
                          backgroundColor: `${project.accentColor}08`
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Tech List */}
                    <div className="flex flex-wrap sm:justify-end gap-1">
                      {project.tech.slice(0, 4).map((tag) => (
                        <span 
                          key={tag}
                          className="font-mono text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-sm border border-black/5 text-black/45 bg-black/[0.01]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="font-mono text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-sm text-black/35 font-bold">
                          +{project.tech.length - 4} MORE
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-[8px] text-black/25 uppercase tracking-widest mt-auto pt-4">
                    LAST UPDATED: {project.lastUpdated}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Project Telemetry Preview Panel */}
        <div className="lg:col-span-4 h-full">
          <div className="sticky top-24 border border-black/10 bg-white/60 backdrop-blur-xl p-6 sm:p-8 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.02)] text-left flex flex-col justify-between min-h-[420px] transition-all duration-300">
            
            <AnimatePresence mode="wait">
              {featuredProjects[hoveredIdx] && (
                <motion.div
                  key={hoveredIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center pb-3 border-b border-black/[0.06] mb-6">
                      <span className="font-mono text-[9px] font-black tracking-widest uppercase text-black/40">
                        // TELEMETRY_STREAM_0{hoveredIdx + 1}
                      </span>
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: featuredProjects[hoveredIdx].accentColor }} />
                    </div>

                    {/* Project Title Block */}
                    <div>
                      <span className="font-mono text-[8px] tracking-wider uppercase text-black/35 font-bold block mb-1">
                        ACTIVE PROJECT NODE
                      </span>
                      <h4 
                        className="font-display font-black text-2xl uppercase tracking-tighter leading-none"
                        style={{ color: featuredProjects[hoveredIdx].accentColor }}
                      >
                        {featuredProjects[hoveredIdx].title}
                      </h4>
                    </div>

                    {/* Metadata list */}
                    <div className="mt-6 space-y-4 font-mono text-[10px] text-black/75">
                      <div className="flex justify-between py-1.5 border-b border-black/[0.03]">
                        <span className="text-black/40 uppercase">PROJECT STATUS:</span>
                        <span className="font-bold uppercase" style={{ color: featuredProjects[hoveredIdx].accentColor }}>
                          {featuredProjects[hoveredIdx].status}
                        </span>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-black/[0.03]">
                        <span className="text-black/40 uppercase">DEPLOYMENT STATUS:</span>
                        <span className="font-bold uppercase text-black">
                          {featuredProjects[hoveredIdx].deploymentStatus}
                        </span>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-black/[0.03]">
                        <span className="text-black/40 uppercase">LAST UPDATED:</span>
                        <span className="font-bold text-black flex items-center gap-1">
                          <Calendar size={11} className="text-black/40" />
                          {featuredProjects[hoveredIdx].lastUpdated}
                        </span>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="text-black/40 uppercase block">COMPUTATIONAL STACK:</span>
                        <div className="flex flex-wrap gap-1">
                          {featuredProjects[hoveredIdx].tech.map((tag) => (
                            <span 
                              key={tag}
                              className="font-mono text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-sm border border-black/5 text-black/55 bg-black/[0.015] font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* High tech wireframe diagnostics block */}
                  <div className="mt-8 p-4 bg-black/95 rounded-sm text-emerald-400 font-mono text-[8.5px] space-y-1.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] border border-emerald-500/10">
                    <div className="text-red-500 font-bold uppercase tracking-widest text-[7.5px] border-b border-white/5 pb-1 mb-1.5 flex items-center gap-1.5">
                      <RefreshCw size={10} className="animate-spin text-red-500" />
                      STREAMING DIAGNOSTICS...
                    </div>
                    <div className="flex justify-between">
                      <span>&gt; PACKET_LOSS:</span>
                      <span>0.0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>&gt; CONNECTION:</span>
                      <span className="text-emerald-500 font-bold">SECURE_SSL</span>
                    </div>
                    <div className="flex justify-between text-yellow-500">
                      <span>&gt; INTEGRATION:</span>
                      <span>READY_TO_DEPLOY</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};
