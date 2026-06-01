import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Calendar, Terminal, Check, ExternalLink, Activity } from 'lucide-react';
import { playClickTick } from '../../utils/SoundManager';

import intern1 from '../../assets/Images/intern1.jpg';
import intern2 from '../../assets/Images/intern2.jpg';

interface InfosysSpringboardProps {
  onBack: () => void;
}

export const InfosysSpringboard = ({ onBack }: InfosysSpringboardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([
    '> INFOSYS SPRINGBOARD ARCHIVE LINKED...',
    '> NETWORK STABLE // PROTOCOL: INSIGHTTUBE_ACTIVE_'
  ]);

  // Live system status console telemetry log stream
  useEffect(() => {
    const telemetries = [
      'RETRIEVING API SCHEMA MAPS...',
      'PANDAS DATAFRAMES SYNCHRONIZED.',
      'YOUTUBE DATA EXTRACTOR INGESTING...',
      'STREAMLIT UI LAYOUT: NOMINAL.',
      'AI ENGAGEMENT LOGICS COMPUTED.',
      'SOURCE ARCHIVE ON STANDBY...'
    ];

    const logInterval = setInterval(() => {
      const randomLog = telemetries[Math.floor(Math.random() * telemetries.length)];
      const now = new Date().toLocaleTimeString();
      setLogs((prev) => [
        prev[1],
        `> [${now}] ${randomLog}`
      ]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, []);

  const techStack = [
    "Python", "Pandas", "NumPy", "Streamlit", "YouTube Data API", "Machine Learning Concepts", "SQL"
  ];

  const keyFeatures = [
    { title: "Channel Performance Analysis", desc: "Aggregated stats, channel metrics, and interactive performance scores." },
    { title: "Trending Video Detection", desc: "Data-driven velocity calculation to detect high-performing trending uploads." },
    { title: "Engagement Rate Calculation", desc: "Ratio maps linking views, likes, and comment indices." },
    { title: "Subscriber Growth Insights", desc: "Predictive scaling models mapping subscriber trajectories." },
    { title: "Data Visualization Dashboard", desc: "Interactive Streamlit charts, graphs, and telemetry matrices." },
    { title: "Real-Time API Data Extraction", desc: "Direct integrations with official YouTube Data API endpoints." }
  ];

  const challenges = [
    { title: "API Request Limit Handling", solution: "Structured query caching mechanisms and exponential backoff queries to manage YouTube API quotas." },
    { title: "Scalable Database Design", solution: "Optimized relational tables indexing video telemetry keys and high-frequency queries." },
    { title: "Streamlit Navigation Debugging", solution: "Engineered robust state persistence parameters across sidebar triggers and tabs." },
    { title: "Dashboard UI Optimization", solution: "Constructed light warm editorial styling constraints inside Streamlit layouts." },
    { title: "Data Consistency Management", solution: "Structured data cleaning pipelines with Pandas to resolve missing API parameters." }
  ];

  const timeline = [
    { week: "Week 1", desc: "YouTube API research & architecture planning" },
    { week: "Week 2", desc: "Data extraction implementation" },
    { week: "Week 3", desc: "Dataset cleaning & structuring" },
    { week: "Week 4", desc: "Database integration" },
    { week: "Week 5", desc: "Analytics engine development" },
    { week: "Week 6", desc: "Interactive Streamlit dashboard creation" },
    { week: "Week 7", desc: "Testing, debugging & optimization" },
    { week: "Week 8", desc: "Deployment & documentation" }
  ];

  const learnings = [
    "Data Analysis", "API Integration", "Dashboard Development", "Debugging", "Problem Solving", "Project Management", "AI/Data-driven Systems"
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

      {/* Ambient Glow Halos */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute left-[8%] top-[14%] w-72 h-72 rounded-full bg-[#00CC52]/6 blur-[80px]" />
        <div className="absolute right-[12%] top-[48%] w-80 h-80 rounded-full bg-[#D4AF37]/6 blur-[90px]" />
      </div>

      {/* FIXED CLOSE HUD BUTTON */}
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

      <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10">
        
        {/* HERO SECTION */}
        <header className="mb-20 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6 opacity-85"
          >
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">INFOSYS_SPRINGBOARD_PROTOCOL</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl leading-tight uppercase mb-4 tracking-tighter text-black max-w-4xl">
            INFOSYS SPRINGBOARD INTERNSHIP
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-[0.14em] uppercase leading-relaxed max-w-2xl text-black/50 mb-8 px-4">
            Building data-driven analytics systems through AI, APIs, dashboards, and real-world engineering workflows.
          </p>

          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#00CC52] font-bold tracking-widest uppercase bg-white/70 border border-black/10 px-4 py-2 rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.1)]">
            <Calendar size={12} className="align-middle mr-1" />
            2026 • 8 WEEK VIRTUAL INTERNSHIP
          </div>
        </header>

        {/* ── DRAGGABLE OS BADGES ── */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[
            { label: 'INFOSYS_ACTIVE_NODE', top: '10%', left: '3%', rotate: -5, delay: 0.1, style: 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]' },
            { label: 'INSIGHT_TUBE_CORE', top: '24%', right: '3%', rotate: 4, delay: 0.3, style: 'bg-yellow-300 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' },
            { label: 'SECURE_API_07', bottom: '15%', left: '5%', rotate: 2, delay: 0.2, style: 'bg-[#00FF66]/5 text-[#00CC52] border-[#00CC52]/30 shadow-[0_0_12px_rgba(0,255,102,0.08)]' },
          ].map((sticker) => (
            <motion.div
              key={sticker.label}
              className={`absolute border px-3 py-1.5 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing hover:border-[#00CC52]/40 transition-colors hidden md:block ${sticker.style}`}
              style={{ top: sticker.top, bottom: sticker.bottom, left: sticker.left, right: sticker.right, rotate: `${sticker.rotate}deg` }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6 + sticker.delay * 8, repeat: Infinity, ease: 'easeInOut', delay: sticker.delay }}
              drag
              dragConstraints={containerRef}
              dragElastic={0.12}
              whileHover={{ scale: 1.06 }}
            >
              <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#00CC52] animate-pulse align-middle" />
              {sticker.label}
            </motion.div>
          ))}
        </div>

        {/* SECTION 1: PROJECT OVERVIEW */}
        <section className="w-full max-w-5xl mx-auto mb-20 text-left">
          <div className="relative backdrop-blur-md border border-black/10 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500">
            <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-black/30">
              LEDGER_NODE // CORE_OBJECTIVE
            </div>
            
            <div className="mb-8 pt-4">
              <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                PROJECT IDENTITY
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tighter leading-tight text-black max-w-3xl">
                Development of a YouTube Analytics and Insight Dashboard for Channel Performance Evaluation and Engagement Analysis
              </h3>
            </div>

            <div className="h-[1px] w-full bg-black/5 mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Objective list */}
              <div className="lg:col-span-8 flex flex-col gap-5 text-left">
                <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest block">[ CORE OBJECTIVES ]</span>
                <div className="flex flex-col gap-4 font-sans text-[14.5px] leading-relaxed font-light text-black/75">
                  {[
                    "Build a robust data-driven YouTube analytics platform to support creators.",
                    "Extract and process video metrics dynamically to evaluate real performance.",
                    "Develop interactive dashboard screens providing visual data breakdowns.",
                    "Supply creators with direct actionable audience engagement insights.",
                    "Simplify complex quantitative telemetry using custom charts and layout systems."
                  ].map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={14} className="text-[#00CC52] mt-1 shrink-0" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating tech stack sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="border border-black/10 bg-white/60 p-6 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5">
                    STACK_SPEC
                  </div>
                  <h4 className="font-mono text-[10px] text-[#00CC52] tracking-wider uppercase font-bold mb-4">// TELEMETRY_ENGINE</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="font-mono text-[9px] text-black/60 border border-black/10 bg-white/80 px-2.5 py-1 rounded-full hover:border-[#00CC52] hover:shadow-[0_0_8px_rgba(0,255,82,0.1)] transition-all duration-300 select-none cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FLOATING FEATURE CARDS */}
        <section className="w-full max-w-5xl mx-auto mb-20 text-left">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">INTELLIGENT_SYSTEMS</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
            SYSTEM CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                whileHover={{ y: -8, border: '1px solid rgba(0,255,82,0.3)' }}
                className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm text-left flex flex-col gap-4 relative transition-colors duration-300 shadow-[2px_2px_12px_rgba(0,0,0,0.02)] group"
              >
                <Activity className="text-[#00CC52] group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                  <h4 className="font-display font-bold text-base uppercase text-black leading-tight">{feat.title}</h4>
                  <p className="font-sans text-xs text-black/60 leading-relaxed mt-2">{feat.desc}</p>
                </div>
                <div className="absolute right-4 top-4 font-mono text-[7px] text-black/20 select-none">
                  [NODE_0{idx + 1}]
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: IMAGE SHOWCASE */}
        <section className="w-full max-w-5xl mx-auto mb-20 px-2 text-center">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">VISUAL_PROOF</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
            SHOWCASE ARCHIVES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {[
              { img: intern1, caption: "INTERNSHIP CERTIFICATION", sizeClass: "h-[320px] sm:h-[400px]" },
              { img: intern2, caption: "TEAM COLLABORATION & REVIEW SESSION", sizeClass: "h-[320px] sm:h-[400px]" }
            ].map((slide, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="flex flex-col gap-3 group"
              >
                <div className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                  <div className="w-full flex items-center justify-center overflow-hidden rounded-[12px] bg-black/[0.02]">
                    <img 
                      src={slide.img} 
                      alt={slide.caption}
                      className={`w-full ${slide.sizeClass} object-contain transition-transform duration-700 group-hover:scale-102`}
                    />
                  </div>
                </div>
                <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-black/45 block text-center font-bold mt-2">
                  {slide.caption}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: DEVELOPMENT TIMELINE */}
        <section className="w-full max-w-4xl mx-auto mb-20 text-left">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">TIMELINE_PROCESS</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-12">
            DEVELOPMENT PROCESS
          </h2>

          <div className="relative pl-6 sm:pl-8 border-l border-black/10 flex flex-col gap-8">
            {timeline.map((step, idx) => (
              <motion.div 
                key={step.week}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[29px] sm:-left-[37px] top-1 w-3 h-3 rounded-full bg-[#00CC52] border-2 border-white shadow-sm" />
                <span className="font-mono text-[9px] text-[#00CC52] font-black tracking-widest uppercase block mb-1">
                  {step.week}
                </span>
                <p className="font-sans text-sm text-black/70 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5: REAL WORLD IMPACT */}
        <section className="w-full max-w-5xl mx-auto mb-20 text-left">
          <div className="relative backdrop-blur-md border border-black/10 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500">
            <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-black/30">
              IMPACT_METRICS // SYSTEM
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
              <div className="lg:col-span-8">
                <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                  REAL WORLD IMPACT
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-4">
                  CREATOR INTELLIGENCE SYSTEM
                </h3>
                <p className="font-sans text-[14.5px] leading-relaxed font-light text-black/70">
                  InsightTube was designed to help creators and marketers make data-driven decisions through advanced YouTube analytics, engagement tracking, and performance visualization systems.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center gap-3">
                {["Trend Analysis", "Audience Engagement", "Creator Optimization", "Growth Insights"].map(item => (
                  <div key={item} className="flex items-center gap-2 font-mono text-[10px] text-black/60 bg-black/[0.02] border border-black/5 px-3 py-1.5 rounded-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00CC52]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CHALLENGES */}
        <section className="w-full max-w-5xl mx-auto mb-20 text-left">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">OBSTACLE_HANDLING</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
            CHALLENGES & RESOLUTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((chal, idx) => (
              <div
                key={chal.title}
                className="p-6 border border-black/10 bg-white/80 rounded-sm text-left flex flex-col gap-3 shadow-[2px_2px_12px_rgba(0,0,0,0.02)]"
              >
                <div className="font-mono text-[9px] text-[#00CC52] font-black tracking-widest block uppercase mb-1">
                  CHALLENGE_0{idx + 1}
                </div>
                <h4 className="font-display font-bold text-base uppercase text-black leading-tight">{chal.title}</h4>
                <p className="font-sans text-xs text-black/60 leading-relaxed mt-2 border-t border-black/5 pt-3">
                  <span className="font-mono text-[7px] text-[#00CC52] font-bold block mb-1">RESOLVED //</span>
                  {chal.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: LEARNING INDEX */}
        <section className="w-full max-w-5xl mx-auto mb-20 text-left">
          <div className="border border-black/10 bg-white/80 backdrop-blur-md rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-[4px_4px_0px_rgba(0,0,0,0.02)]">
            <div className="text-left">
              <span className="font-mono text-[9px] text-[#00CC52] font-black tracking-widest block uppercase mb-1">
                COMPETENCY_ACQUIRED
              </span>
              <h4 className="font-display font-black text-lg sm:text-xl uppercase text-black leading-none mb-1">
                KEY LEARNING SPECIFICATIONS
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 max-w-xl">
              {learnings.map(item => (
                <span key={item} className="font-mono text-[9px] text-[#00CC52] font-bold border border-[#00CC52]/20 bg-[#00FF66]/5 px-3 py-1 rounded-sm uppercase select-none">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: GITHUB SOURCE CODE ARCHIVE */}
        <section className="w-full max-w-5xl mx-auto mb-16">
          <div className="relative border border-[#00CC52]/30 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/90 shadow-[10px_10px_0px_rgba(0,255,82,0.05)] text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5 bg-white border-l border-b border-black/10">
              GIT_REPOSITORY
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                SOURCE CODE ARCHIVE
              </span>
              <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black leading-none mb-4 pt-1">
                INSIGHTTUBE REPOSITORY
              </h3>
              <p className="font-sans text-[13.5px] text-black/65 leading-relaxed font-light max-w-xl">
                Access the InsightTube analytics platform repository including dashboard systems, API integrations, and visualization modules.
              </p>
            </div>

            <motion.a
              href="https://github.com/Parthbo7/InsightTube.git"
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickTick(1600, 0.08)}
              className="bg-black text-white hover:bg-[#00CC52] hover:text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-6 py-3 border border-black rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.15)] flex items-center gap-2 cursor-pointer transition-colors duration-300 self-stretch md:self-center justify-center shrink-0 interactive-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={14} />
              <span>EXPLORE_REPOS</span>
              <ExternalLink size={10} className="stroke-[3]" />
            </motion.a>
          </div>
        </section>

        {/* BOTTOM TELEMETRY BAR */}
        <section className="w-full max-w-5xl mx-auto px-2">
          <div className="border border-black/10 bg-white/60 backdrop-blur-md rounded-md p-5 font-mono text-[9px] sm:text-xs text-black/60 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/20 uppercase tracking-[0.25em] px-2 py-0.5">
              SYS_TELEMETRY
            </div>
            
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-[#00CC52]" />
              <div className="leading-relaxed text-left">
                <div>{logs[0]}</div>
                <div className="text-[#00CC52] font-bold">{logs[1]}</div>
              </div>
            </div>
            
            <div className="font-bold text-[8px] sm:text-[10px] tracking-widest text-black/30 uppercase">
              STATUS: OS_ARCHIVE_SECURE
            </div>
          </div>
        </section>

      </div>

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
