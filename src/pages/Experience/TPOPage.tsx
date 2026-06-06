import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ExperienceHero,
  ExperienceOverview,
  ExperienceGallery,
  ExperienceTags,
  ExperienceFooter,
  ExperienceMetadata,
} from '../../components/ExperienceCommon';

import TPO1 from '../../assets/Images/TPO1.jpeg';
import TPO2 from '../../assets/Images/TPO2.jpeg';

export const TPOPage = () => {
  const navigate = useRef(useNavigate()).current;
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([
    '> TPO COMMAND ENGINE ACTIVE...',
    '> NETWORK STABLE // PROTOCOL: PLACEMENT_SYNC_VERIFIED'
  ]);

  useEffect(() => {
    const telemetries = [
      'RETRIEVING MGMCOE STUDENT DIRECTORIES...',
      'LOGGING OPERATIONS MATRIX SYNC...',
      'COMMUNICATION STREAM: ENCRYPTED.',
      'HR SUMMIT SECTOR: SECURE.',
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

  const handleBack = () => {
    navigate('/experience');
  };

  const badges = [
    { label: 'HR_SUMMIT_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1 },
    { label: 'PLACEMENT_SYSTEM_ACTIVE', top: '24%', right: '4%', rotate: 3, delay: 0.3 },
    { label: 'MGMCOE_COORDINATION', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
    { label: 'PROFESSIONAL_NETWORK', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
  ];

  const overviewPoints = [
    "Manage communication logs linking placement offices and engineering departments.",
    "Sync placement operational databases and schedule drive coordination tasks.",
    "Facilitated student onboarding and placement preparation workshops.",
    "Represented the college placement department at professional HR Summit events."
  ];

  const overviewSidebar = [
    "TPO OPERATIONS", "STUDENT COORDINATION", "HR SUMMIT PITCHING", "PROFESSIONAL COMMUNICATION", "LEADERSHIP SYNCS"
  ];

  const galleryImages = [
    { src: TPO1, caption: "NODE 01 // HR SUMMIT PITCH PRESENTATION", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1.2 },
    { src: TPO2, caption: "NODE 02 // CORPORATE NETWORKING SYNC", sizeClass: "h-[320px] sm:h-[400px]", rotate: 1.5 }
  ];

  const segments = [
    {
      title: "MGMCOE TPO OPERATIONS",
      desc: "Administered recruitment logistics, coordinated recruiter hospitality, and synced recruitment calendars. Set up student query helpdesks and streamlined notifications for recruitment announcements.",
      tags: ["Student Coordination", "Communication Systems", "Placement Activities", "Leadership Operations"]
    },
    {
      title: "HR SUMMIT PROJECT PITCH",
      desc: "Delivered a project pitch directly to corporate executives during the HR Summit. Highlighted MGMCOE innovation capabilities and established valuable recruitment connections for the student body.",
      tags: ["HR Summit", "Project Pitching", "Professional Network", "Leadership Exposure"]
    }
  ];

  const learnings = [
    "Placement Logistics", "Corporate Relations", "Presentation Pitching", "Team Synchronization", "Conflict Resolution", "Public Representation"
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
            onBack={handleBack}
            protocolLabel="TPO_COORDINATOR_PROTOCOL"
            title={["TPO", "COORDINATOR"]}
            subtitle="Managing student coordination systems, placement operations, and professional engagement workflows."
            infoLabel="2025 • PLACEMENT COORDINATION OPERATIONS"
          />

          {/* OVERVIEW */}
          <ExperienceOverview
            ledgerLabel="LEDGER_NODE // CORE_OPERATIONS"
            identityLabel="OPERATIONS IDENTITY"
            headline="PLACEMENT COORDINATION MANAGEMENT"
            points={overviewPoints}
            pointsTitle="[ CORE RESPONSIBILITIES ]"
            sidebarTitle="// OPERATIONS_SYSTEM"
            sidebarLabel="STACK_SPEC"
            sidebarItems={overviewSidebar}
          />

          {/* DEVELOPMENT SEGMENTS */}
          <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
            <div className="inline-flex items-center gap-3 mb-8 opacity-45">
              <div className="h-[1.5px] w-8 bg-[#00CC52]" />
              <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">OPERATIONS_STAGES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
              OPERATIONAL PHASES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {segments.map((seg, idx) => (
                <motion.div
                  key={seg.title}
                  whileHover={{ y: -8, border: '1px solid rgba(0,255,82,0.3)' }}
                  className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm text-left flex flex-col justify-between min-h-[200px] transition-colors duration-300 shadow-[2px_2px_12px_rgba(0,0,0,0.02)] group"
                >
                  <div>
                    <span className="font-mono text-[8px] text-[#00CC52] font-black tracking-widest block uppercase mb-2">
                      PHASE_0{idx + 1}
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
            onBack={handleBack}
            conclusionTitle="OPERATIONAL RESOLUTION LOG"
            conclusionText="As a TPO Coordinator, professional logistics and corporate pitching capabilities were successfully integrated, validating student coordination systems and bridging campus placement opportunities with industry standards."
            logs={logs}
          />
        </div>
      </main>
    </div>
  );
};

export default TPOPage;
