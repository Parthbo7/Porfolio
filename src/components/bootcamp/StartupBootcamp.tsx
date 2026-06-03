import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExperienceHero,
  ExperienceOverview,
  ExperienceGallery,
  ExperienceTags,
  ExperienceFooter,
  ExperienceMetadata,
} from '../ExperienceCommon';

import Boot1 from '../../assets/Images/Boot1.jpeg';
import Boot2 from '../../assets/Images/Boot2.jpeg';
import Boot3 from '../../assets/Images/Boot3.jpeg';

interface StartupBootcampProps {
  onBack: () => void;
  isDarkMode?: boolean;
}

export const StartupBootcamp = ({ onBack }: StartupBootcampProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([
    '> BOOTCAMP DATABASE INITIALIZED...',
    '> NETWORK STABLE // PROTOCOL: INNOVATION_ARCHIVE_SECURE'
  ]);

  useEffect(() => {
    const telemetries = [
      'SCANNING STARTUP FEASIBILITY MAPPING...',
      'IDEATION SHADER INITIALIZED...',
      'INCUBATION PIPELINE COMPILED.',
      'ENSIN FORUM PROTOCOL STABLE.',
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

  const badges = [
    { label: 'TEAM_LEAD_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1 },
    { label: 'STARTUP_PROTOCOL', top: '24%', right: '4%', rotate: 3, delay: 0.3 },
    { label: 'IDEA_MATRIX_ACTIVE', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
    { label: 'INNOVATION_ARCHIVE', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
  ];

  const overviewPoints = [
    "Led a 10-member startup team through rapid collaborative ideation.",
    "Formulated problem-solving startup concepts and product strategy parameters.",
    "Drafted structured business pitch systems demonstrating commercial feasibility.",
    "Validated product-market fit metrics under experienced entrepreneurial mentors."
  ];

  const overviewSidebar = [
    "TEAM LEADERSHIP", "STARTUP STRATEGY", "PRODUCT PROTOTYPING", "INNOVATION SYSTEMS", "PITCH ARCHITECTURE"
  ];

  const galleryImages = [
    { src: Boot1, caption: "NODE 01 // 10 MEMBER TEAM LEADERSHIP", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1 },
    { src: Boot2, caption: "NODE 02 // STARTUP IDEATION & COLLABORATION", sizeClass: "h-[320px] sm:h-[400px]", rotate: 1.5 },
    { src: Boot3, caption: "NODE 03 // ENSIN FORUM CERTIFICATION", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1.2 }
  ];

  const segments = [
    {
      title: "10-MEMBER TEAM LEADERSHIP",
      desc: "Directed a cross-functional student group, orchestrating ideation sessions, task delegations, and workload distribution. Managed team communication pipelines and leadership syncing under tight submission deadlines.",
      tags: ["Team Leadership", "Coordination", "Collaboration", "Startup Execution"]
    },
    {
      title: "STARTUP INNOVATION LAB",
      desc: "Explored structured business model canvas development, customer discovery methodologies, and market-problem validation loops. Converted raw ideas into organized product narrative paths.",
      tags: ["Innovation", "Startup Thinking", "Product Systems", "Entrepreneurship"]
    },
    {
      title: "CERTIFIED CREDENTIAL",
      desc: "Awarded validation credentials by MGM's College of Engineering and ENSIN Forum Pune for successfully completing all bootcamp deliverables and delivering a viable startup pitch.",
      tags: ["ENSIN Forum", "Incubation", "Pitch Deck", "Certified Topper"]
    }
  ];

  const learnings = [
    "Startup Strategy", "Pitch Architecture", "Product Framing", "Team Synergy", "Entrepreneurial Operations", "Business Validation"
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto no-scrollbar relative flex flex-col bg-transparent text-black z-10"
    >
      <main className="min-h-screen w-full relative overflow-x-hidden pb-32">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

        {/* Ambient Glow Halos */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          <div className="absolute left-[8%] top-[14%] w-72 h-72 rounded-full bg-[#00CC52]/6 blur-[80px]" />
          <div className="absolute right-[12%] top-[48%] w-80 h-80 rounded-full bg-[#D4AF37]/6 blur-[90px]" />
        </div>

        {/* Draggable Badges */}
        <ExperienceMetadata badges={badges} containerRef={containerRef} />

        <div className="max-w-6xl mx-auto px-6 pt-32 w-full relative z-10">
          {/* HERO */}
          <ExperienceHero
            onBack={onBack}
            protocolLabel="STARTUP_BOOTCAMP_PROTOCOL"
            title={["STARTUP", "BOOTCAMP", "PITCH"]}
            subtitle="Leading innovation teams and transforming startup concepts into structured product systems."
            infoLabel="2025 • STARTUP INNOVATION & PITCH BOOTCAMP"
          />

          {/* OVERVIEW */}
          <ExperienceOverview
            ledgerLabel="LEDGER_NODE // CORE_INNOVATION"
            identityLabel="BOOTCAMP IDENTITY"
            headline="IDEA TO PITCH BOOTCAMP"
            points={overviewPoints}
            pointsTitle="[ INNOVATION CORE OBJECTIVES ]"
            sidebarTitle="// STRATEGY_ENGINE"
            sidebarLabel="STACK_SPEC"
            sidebarItems={overviewSidebar}
          />

          {/* WORKSHOP CAPABILITIES */}
          <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
            <div className="inline-flex items-center gap-3 mb-8 opacity-45">
              <div className="h-[1.5px] w-8 bg-[#00CC52]" />
              <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">BOOTCAMP_STAGES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
              DEVELOPMENT SEGMENTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {segments.map((seg, idx) => (
                <motion.div
                  key={seg.title}
                  whileHover={{ y: -8, border: '1px solid rgba(0,255,82,0.3)' }}
                  className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm text-left flex flex-col justify-between min-h-[220px] transition-colors duration-300 shadow-[2px_2px_12px_rgba(0,0,0,0.02)] group"
                >
                  <div>
                    <span className="font-mono text-[8px] text-[#00CC52] font-black tracking-widest block uppercase mb-2">
                      SEGMENT_0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base uppercase text-black leading-tight mb-3">
                      {seg.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-700 leading-relaxed font-light">
                      {seg.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 border-t border-black/5 pt-4">
                    {seg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[7px] text-black/50 border border-black/5 bg-black/[0.01] px-2 py-0.5 rounded-sm uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <ExperienceGallery images={galleryImages} />

          {/* LEARNING INDEX */}
          <ExperienceTags tags={learnings} />

          {/* FOOTER */}
          <ExperienceFooter
            onBack={onBack}
            conclusionTitle="BOOTCAMP COMPILING SUMMARY"
            conclusionText="The Startup Bootcamp simulated real-world entrepreneurial pipelines, validating ideation frameworks and pitching systems under strict milestone gates. Gained critical experience in leadership, strategy, and business narration."
            logs={logs}
          />
        </div>
      </main>
    </div>
  );
};

export default StartupBootcamp;
