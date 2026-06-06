import { motion } from 'framer-motion';
import { Cpu, Users } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';

// Import image assets with exact extensions
import fusion1 from '../../assets/Images/fusion1.jpg';
import fusion2 from '../../assets/Images/fusion2.jpg';
import fusion3 from '../../assets/Images/fusion3.jpg';
import fusion4 from '../../assets/Images/fusion4.jpg';
import fusion5 from '../../assets/Images/fusion5.jpeg';

export const HackfusionPage = () => {
  const fusionFeatures = [
    "Smart AI-triggered workflow automations",
    "Dynamic data processing",
    "LLM contextual response generation",
    "Real-time backend integration",
    "Scalable database architecture",
    "Regulation-aware pharmacy intelligence"
  ];

  const fusionStack = ["n8n", "Supabase", "Llama", "Google Antigravity", "Claude", "ChatGPT", "Canva"];

  const fusionTeam = [
    { name: "Parth Bulbule", role: "Database Architecture" },
    { name: "Shruti Daware", role: "Frontend / UI" },
    { name: "Sampada Ujlambkar", role: "Research & Presentation" },
    { name: "Sushrut Deshpande", role: "AI Automation & System Integration" }
  ];

  const fusionImages = [
    { img: fusion1, title: "DRAV AI Core Terminal Interface" },
    { img: fusion2, title: "Prescription Scan Analysis Dashboard" },
    { img: fusion3, title: "Llama Context Verification Log" },
    { img: fusion4, title: "Pharmacist Decryption Portal" },
    { img: fusion5, title: "HackFusion Direct Showcase Team Panel" }
  ];

  const fusionTags = ["AI Systems", "Automation", "LLM", "Database", "Pharmacy Tech", "Innovation"];

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
            <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">HACKFUSION // SYSTEM_NODE</span>
            <div className="h-[1px] w-8 bg-[#00CC52]/40" />
          </motion.div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-4 tracking-tighter text-black max-w-4xl">
            DRAV AI
          </h1>
          <h3 className="font-mono text-xs sm:text-sm text-[#00CC52] font-bold tracking-widest uppercase mb-8">
            Agentic Pharmacist & Pharmacy Intelligence System
          </h3>
          <p className="font-sans text-sm sm:text-base leading-relaxed max-w-3xl text-zinc-700 font-normal px-4">
            Built an intelligent pharmacy intelligence platform focused on prescription verification, dosage validation, drug safety analysis, expiry monitoring, and real-time inventory intelligence while maintaining pharmacist-supervised decision systems.
          </p>
        </header>

        {/* FEATURE GRID */}
        <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">INTELLIGENT_WORKFLOWS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fusionFeatures.map((feat, idx) => (
              <motion.div
                key={feat}
                whileHover={{ y: -8, border: '1px solid rgba(0, 204, 82, 0.3)' }}
                className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm text-left flex flex-col gap-4 relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] transition-colors group"
              >
                <Cpu className="text-[#00CC52] group-hover:scale-110 transition-transform" size={20} />
                <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">{feat}</p>
                <div className="absolute right-4 top-4 font-mono text-[7px] text-black/20">
                  [SECTOR_0{idx + 1}]
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECH STACK & CONTRIBUTORS */}
        <section className="w-full max-w-5xl mx-auto mb-24 text-left relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* TECH STACK */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">CORE_ENGINEERING_STACK</span>
              </div>

              <div className="border border-black/10 bg-white/80 p-8 rounded-sm relative overflow-hidden flex flex-wrap gap-3 shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                <div className="absolute top-0 right-0 font-mono text-[6px] text-black/35 uppercase tracking-[0.25em] px-2 py-0.5">
                  ENGINE_NODE
                </div>
                {fusionStack.map(node => (
                  <span 
                    key={node} 
                    className="font-mono text-[10px] text-black/70 border border-black/10 bg-white px-3.5 py-1.5 rounded-full hover:border-[#00CC52] hover:text-[#00FF66] transition-colors"
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>

            {/* TEAM */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-3 mb-8 opacity-45">
                <div className="h-[1.5px] w-8 bg-[#00CC52]" />
                <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">CREATOR_TEAM</span>
              </div>

              <div className="flex flex-col gap-3">
                {fusionTeam.map(member => (
                  <div key={member.name} className="p-4 border border-black/10 bg-white/80 rounded-sm flex items-center gap-3 relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]">
                    <Users size={16} className="text-[#00CC52]" />
                    <div>
                      <h4 className="font-mono text-[10px] font-bold text-black uppercase">{member.name}</h4>
                      <span className="font-sans text-[9px] text-black/45 uppercase tracking-widest">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="w-full max-w-5xl mx-auto mb-24 px-2 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 opacity-45">
            <div className="h-[1.5px] w-8 bg-[#00CC52]" />
            <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">IMAGE_LEDGER</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
            SYSTEM SCREEN CAPTURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {fusionImages.map((slide, idx) => {
              const colSpan = idx === 0 ? "md:col-span-7" : idx === 1 ? "md:col-span-5" : idx === 2 ? "md:col-span-5" : idx === 3 ? "md:col-span-7" : "md:col-span-12";
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

        {/* BOTTOM PANEL & ACHIEVEMENT */}
        <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
          <div className="relative border border-black/10 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/85 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5 bg-white border-l border-b border-black/10">
              RESOLVED_METRICS
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                ACHIEVEMENT_RESOLUTION
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-4">
                “Built systems that think, respond, and adapt.”
              </h3>
              <p className="font-sans text-[13.5px] text-neutral-700 leading-relaxed font-light max-w-xl">
                Represented MGMCOE Nanded during the regional engineering challenges, showcasing Drav AI as a blueprint for pharmacist-supervised intelligent medicine automation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-w-xs justify-start md:justify-end">
              {fusionTags.map(tag => (
                <span key={tag} className="font-mono text-[9px] text-[#00CC52] font-bold border border-[#00CC52]/20 bg-[#00FF66]/5 px-3 py-1.5 rounded-sm uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
