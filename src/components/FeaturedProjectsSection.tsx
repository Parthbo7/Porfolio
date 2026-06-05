import { motion } from 'framer-motion';
import { playClickTick } from '../utils/SoundManager';
import { ArrowUpRight, Code, ShieldCheck, Cpu } from 'lucide-react';

const featuredProjects = [
  {
    id: 'feat-cc',
    title: 'CampusConnect',
    subtitle: 'STUDENT NETWORKING PLATFORM',
    status: 'Building',
    statusColor: 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5',
    tech: ['React', 'Firebase', 'Tailwind', 'Context API'],
    description: 'A comprehensive networking platform designed to bridge student communication, resource sharing, and hackathon organization pathways within campus structures.',
    link: 'https://github.com/Parthbo7/CampusConnect',
    icon: Cpu
  },
  {
    id: 'feat-ae',
    title: 'AI Exam Evaluator',
    subtitle: 'OCR + NLP EVALUATOR ENGINE',
    status: 'Verified',
    statusColor: 'text-[#00FF66] border-[#00CC52]/20 bg-[#00FF66]/5',
    tech: ['Python', 'OpenCV', 'NLP', 'PyTorch'],
    description: 'An advanced machine learning pipeline leveraging optical character recognition and semantic natural language processing models to grade handwritten exam copies.',
    link: 'https://github.com/Parthbo7/AI-Exam-Evaluator',
    icon: ShieldCheck
  },
  {
    id: 'feat-it',
    title: 'InsightTube',
    subtitle: 'YOUTUBE METRIC MONITOR',
    status: 'Active',
    statusColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-500/[0.03]',
    tech: ['Python', 'Django', 'YouTube API', 'Chart.js'],
    description: 'An analytics dashboard offering creators deep telemetry, performance projections, engagement mapping, and competitive analysis benchmarks.',
    link: 'https://github.com/Parthbo7/InsightTube',
    icon: Code
  }
];

export const FeaturedProjectsSection = () => {
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
          <h2 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.85] tracking-tighter uppercase select-none text-left">
            FEATURED BUILDS
          </h2>
          <button 
            onClick={() => {
              playClickTick(1600, 0.05);
              window.location.hash = '#projects';
            }}
            className="font-mono text-[10px] sm:text-xs tracking-widest font-extrabold text-[#FF3E6C] hover:text-black border border-black/10 hover:border-black bg-white px-5 py-3 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300 w-fit cursor-pointer uppercase interactive-hover"
          >
            view projects database &rarr;
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10">
        {featuredProjects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              onClick={() => {
                playClickTick(1600, 0.08);
                window.open(project.link, '_blank');
              }}
              className="group flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#A8D3C8] rounded-sm shadow-[8px_8px_0px_rgba(168,211,200,0.2)] hover:border-black hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all duration-500 cursor-pointer overflow-hidden relative interactive-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => playClickTick(1500, 0.02)}
            >
              {/* Inner ambient glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-cyan-400/5 group-hover:bg-cyan-400/10 blur-xl pointer-events-none transition-colors duration-500" />
              
              {/* Top Row: Icon and diagonal action */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 border border-black/5 bg-black/[0.01] rounded-full text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </div>
                <ArrowUpRight size={16} className="text-black/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>

              {/* Title area */}
              <div className="text-left mb-6">
                <span className="font-mono text-[8px] sm:text-[9.5px] text-[#00CC52] font-black tracking-widest block mb-1">
                  {project.subtitle}
                </span>
                <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black leading-none group-hover:text-[#00CC52] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-[13px] text-black/65 leading-relaxed font-light text-left mb-8">
                {project.description}
              </p>

              {/* Bottom: Tech tags and status indicator */}
              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm border border-black/5 text-black/40 bg-black/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-black/5">
                  <span className="font-mono text-[8px] text-black/30 tracking-widest uppercase">
                    // BUILD_TARGET_07
                  </span>
                  
                  <span className={`font-mono text-[8.5px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 border rounded-sm ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
