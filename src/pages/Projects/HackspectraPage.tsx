import { motion } from 'framer-motion';
import { AlertTriangle, Check, Database, Github, Globe, ExternalLink } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { playClickTick } from '../../utils/SoundManager';

// Import image assets with exact extensions
import spectra1 from '../../assets/Images/spectra1.jpg';
import spectra2 from '../../assets/Images/spectra2.jpg';
import spectra3 from '../../assets/Images/spectra3.jpg';
import spectra4 from '../../assets/Images/spectra4.jpg';
import spectra5 from '../../assets/Images/spectra5.jpeg';

export const HackspectraPage = () => {
  const spectraProblems = [
    { title: "Traffic Congestion", desc: "Street clogging from cruisers searching for empty parking nodes." },
    { title: "Fuel Wastage", desc: "Excess CO2 footprints caused by prolonged, circular routes." },
    { title: "Urban Parking Inefficiency", desc: "Mishandled lots with zero public slots occupancy visibility." },
    { title: "User Frustration", desc: "Anxiety spikes due to random, cluttered city parking blocks." }
  ];

  const spectraUserPanel = [
    "Nearby parking discovery",
    "Real-time slot availability",
    "Slot reservation system",
    "Live parking timer",
    "Automatic pricing",
    "Digital ticket generation"
  ];

  const spectraAdminPanel = [
    { title: "Slot Monitoring", desc: "Granular UI layouts showing sensor occupancy mapping." },
    { title: "Real-Time Analytics", desc: "Dynamic charts plotting slot utilization velocities." },
    { title: "Revenue Tracking", desc: "Live cash ledger sync matching time meters." },
    { title: "Auto/Manual Controls", desc: "Manual overrides for maintenance and VIP nodes." }
  ];

  const spectraAutomations = [
    "Automatic slot allocation",
    "Entry/Exit tracking",
    "Dynamic pricing engine",
    "AI-ready infrastructure",
    "Smart space optimization"
  ];

  const spectraStack = [
    { type: "Frontend", tech: "React 19 + Vite 8" },
    { type: "Backend", tech: "Supabase" },
    { type: "Database", tech: "PostgreSQL" },
    { type: "Styling", tech: "Tailwind CSS" },
    { type: "Realtime", tech: "Supabase Realtime" }
  ];

  const spectraImages = [
    { img: spectra1, title: "DoParking Live Analytics HUD" },
    { img: spectra2, title: "Sensor-Assigned Slot Node Matrix" },
    { img: spectra3, title: "Reservation Verification Ticket" },
    { img: spectra4, title: "Space Utilization Heatmap Screen" },
    { img: spectra5, title: "Smart City Parking Physical Installation" }
  ];

  const spectraWorkflow = [
    { step: "Vehicle enters", desc: "Camera detects plate node" },
    { step: "Slot auto-assign", desc: "Optimal coordinate sent to HUD" },
    { step: "Timer starts", desc: "Sensor locks occupancy state" },
    { step: "Exit detected", desc: "Space marked empty realtime" },
    { step: "Price calculated", desc: "Accurate ledger tally completed" },
    { step: "Notification sent", desc: "Ledger transaction updated" }
  ];

  return (
    <PageLayout
      onBack="/projects/hackathons"
      backLabel="BACK_TO_ARCHIVE"
      initialLogs={[
        '> REGISTRY_NODES DECRYPTED...',
        '> NET NOMINAL // HACKATHON_OS_ACTIVE_'
      ]}
      telemetryLogs={[
        'SCANNING CONTEXTUAL LLM PIPELINES...',
        'INDEXING RELATIONAL DB TELEMETRIES...',
        'PARSING n8n AGENTIC WORKFLOW MAPS...',
        'REALTIME SLOT DETECTORS: NOMINAL.',
        'DOPARKING METRIC SCHEMAS RESOLVED.',
        'AWAITING OS_DECISION SECTORS...'
      ]}
      statusLabel="SEC_NOMINAL"
      glowColors={{
        left: 'bg-[#00CC52]/6',
        right: 'bg-[#D4AF37]/6'
      }}
    >
      <div className="w-full flex-1 flex flex-col justify-between">
        {/* HERO SECTION */}
        <header className="mb-20 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 opacity-75"
          >
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">HACKSPECTRA // SYSTEM_NODE</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-4 tracking-tighter text-black">
            DOPARKING
          </h1>
          <h3 className="font-mono text-xs sm:text-sm text-[#00CC52] font-bold tracking-widest uppercase mb-8">
            Smart AI-Based Parking Management System
          </h3>
          <p className="font-sans text-sm sm:text-base leading-relaxed max-w-3xl text-zinc-700 font-normal px-4">
            Developed a real-time intelligent parking ecosystem focused on automation, smart city innovation, dynamic slot allocation, and scalable parking intelligence infrastructure.
          </p>
        </header>

        {/* PROBLEM STATEMENTS */}
        <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">PROBLEM_STATEMENTS</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
            URBAN OBSTACLES IDENTIFIED
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spectraProblems.map((prob, idx) => (
              <div 
                key={prob.title} 
                className="p-6 border border-black/10 bg-white/80 rounded-sm flex flex-col gap-3 relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-colors"
              >
                <AlertTriangle className="text-red-500 animate-pulse" size={18} />
                <h4 className="font-mono text-[10px] font-bold text-black uppercase">{prob.title}</h4>
                <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">{prob.desc}</p>
                <div className="absolute right-4 top-4 font-mono text-[7px] text-black/20">
                  [ERR_0{idx + 1}]
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PANEL SCHEMAS */}
        <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* USER PANEL MODULE */}
            <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
              <div className="absolute top-0 right-0 font-mono text-[6px] text-[#00CC52] uppercase tracking-[0.25em] px-2 py-0.5 bg-[#00FF66]/5 border-l border-b border-black/10">
                USER_VIEWPORT
              </div>
              
              <span className="font-mono text-[10px] text-[#00CC52] tracking-wider uppercase font-bold mb-4 block">// DRIVER_HUD_CAPABILITIES</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {spectraUserPanel.map((obj, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={12} className="text-[#00CC52] shrink-0" />
                    <span className="font-sans text-xs text-neutral-600 leading-relaxed font-light">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ADMIN PANEL MODULE */}
            <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
              <div className="absolute top-0 right-0 font-mono text-[6px] text-yellow-500 uppercase tracking-[0.25em] px-2 py-0.5 bg-yellow-400/5 border-l border-b border-black/10">
                ADMIN_CONSOLE
              </div>
              
              <span className="font-mono text-[10px] text-yellow-600 tracking-wider uppercase font-bold mb-4 block">// MONITOR_INTERFACE</span>
              
              <div className="flex flex-col gap-4 mt-6">
                {spectraAdminPanel.map(mod => (
                  <div key={mod.title} className="flex items-start gap-3 border-b border-black/5 pb-3 last:border-0 last:pb-0">
                    <Database size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-mono text-[9px] font-bold text-black uppercase">{mod.title}</h4>
                      <p className="font-sans text-[11px] text-neutral-600 font-light mt-0.5">{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* AUTOMATIONS & TECH STACK */}
        <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* AUTOMATIONS */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">SMART_AUTOMATION_ROBOTICS</span>
              </div>

              <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative overflow-hidden shadow-[10px_10px_0px_rgba(168,211,200,0.12)] flex flex-col gap-4">
                {spectraAutomations.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#00CC52] rounded-full animate-pulse shrink-0" />
                    <span className="font-mono text-[10px] text-zinc-700 font-bold uppercase">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">SYSTEM_STACK_MATRIX</span>
              </div>

              <div className="flex flex-col gap-3">
                {spectraStack.map(stack => (
                  <div key={stack.type} className="p-4 border border-black/10 bg-white/80 rounded-sm flex justify-between items-center relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{stack.type}</span>
                    <span className="font-mono text-[10px] font-bold text-[#00CC52] uppercase">{stack.tech}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* UI/UX PREVIEWS */}
        <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">INTERFACE_SPECIFICATION</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
            UI/UX PREVIEW CAPSULES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Dynamic Adaptive Slots Grid", desc: "Sensors transmit coordinates to custom dashboard maps, providing realtime spot discovery and booking layouts." },
              { title: "Interactive Timer HUD", desc: "Digital ticketing dashboard featuring counting visual bars, live billing rates, and micro-interactions." }
            ].map((card, i) => (
              <div 
                key={i} 
                className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-colors"
              >
                <h4 className="font-mono text-[10px] font-bold text-black uppercase mb-2">// {card.title}</h4>
                <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM WORKFLOW */}
        <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">WORKFLOW_SEQUENCE</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-12">
            TELEMETRY SEQUENCE FLOW
          </h2>

          <div className="relative pl-6 sm:pl-8 border-l border-black/10 flex flex-col gap-8">
            {spectraWorkflow.map((step, idx) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[29px] sm:-left-[37px] top-1 w-3 h-3 rounded-full bg-[#00CC52] border-2 border-white shadow-sm" />
                <span className="font-mono text-[9px] text-[#00CC52] font-black tracking-widest uppercase block mb-1">
                  NODE 0{idx + 1} &mdash; {step.step}
                </span>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="w-full max-w-5xl mx-auto mb-24 px-2 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">GALLERY_ARCHIVE</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
            SYSTEM SCREEN CAPTURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {spectraImages.map((slide, idx) => {
              const colSpan = idx === 0 ? "md:col-span-5" : idx === 1 ? "md:col-span-7" : idx === 2 ? "md:col-span-7" : idx === 3 ? "md:col-span-5" : "md:col-span-12";
              const sizeClass = idx === 4 ? "h-[300px] sm:h-[450px]" : "h-[250px] sm:h-[350px]";

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className={`${colSpan} flex flex-col gap-3 group`}
                >
                  <div className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[12px] bg-black/[0.02]">
                      <img 
                        src={slide.img} 
                        alt={slide.title}
                        className={`w-full ${sizeClass} object-cover transition-transform duration-700 group-hover:scale-103`}
                      />
                    </div>
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-black/45 block text-center font-bold mt-2">
                    {slide.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SOURCE & DEPLOYMENT */}
        <section className="w-full max-w-5xl mx-auto mb-24 relative z-10">
          <div className="relative border border-[#00CC52]/30 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/90 shadow-[10px_10px_0px_rgba(0,255,82,0.05)] text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5 bg-white border-l border-b border-black/10">
              PROJECT_LINKS
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                SOURCE & DEPLOYMENT
              </span>
              <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black leading-none mb-4 pt-1">
                DOPARKING SOURCE ARCHIVES
              </h3>
              <p className="font-sans text-[13.5px] text-neutral-700 leading-relaxed font-light max-w-xl">
                Explore the live smart parking application dashboard or review the repository codebase for automation scripts, slot allocation matrices, and styling guidelines.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <motion.a
                href="https://github.com/Parthbo7/dopark.git"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickTick(1600, 0.08)}
                className="bg-black text-white hover:bg-[#00CC52] hover:text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-6 py-3 border border-black rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.15)] flex items-center gap-2 cursor-pointer transition-colors duration-300 justify-center shrink-0 interactive-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} />
                <span>EXPLORE_REPOS</span>
                <ExternalLink size={10} className="stroke-[3]" />
              </motion.a>

              <motion.a
                href="https://dopark.vercel.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickTick(1600, 0.08)}
                className="bg-white text-black hover:bg-[#00CC52] hover:text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-6 py-3 border border-black rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,0.15)] flex items-center gap-2 cursor-pointer transition-colors duration-300 justify-center shrink-0 interactive-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={14} />
                <span>LIVE_DASHBOARD</span>
                <ExternalLink size={10} className="stroke-[3]" />
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
