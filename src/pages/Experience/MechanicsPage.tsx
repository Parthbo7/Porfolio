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

import MT1 from '../../assets/Images/MT1.jpeg';
import MT2 from '../../assets/Images/MT2.jpeg';
import MT3 from '../../assets/Images/MT3.jpeg';

export const MechanicsPage = () => {
  const navigate = useRef(useNavigate()).current;
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([
    '> MECHANICS DATABASE SYNC ACTIVE...',
    '> NETWORK STABLE // PROTOCOL: PRECISION_LOG_VERIFIED'
  ]);

  useEffect(() => {
    const telemetries = [
      'RESOLVING TRUSS EQUILIBRIUM MATRICES...',
      'CALCULATING DYNAMIC FRICTION COEFFICIENTS...',
      'LOADED VECTOR LOGIC SCHEMAS.',
      'RECOGNITION STACK: SECURE.',
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
    { label: 'TOPPER_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1 },
    { label: 'ANALYTICAL_SYSTEM', top: '24%', right: '4%', rotate: 3, delay: 0.3 },
    { label: 'ENGINEERING_ARCHIVE', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
    { label: 'PRECISION_MODE_ACTIVE', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
  ];

  const overviewPoints = [
    "Achieved top performance metrics in core foundational Engineering Mechanics.",
    "Mastered complex static structures, truss equilibriums, and friction dynamics.",
    "Mentored junior student cohorts to bridge foundational conceptual gaps.",
    "Recognized for analytical approach, consistency, and problem-solving speed."
  ];

  const overviewSidebar = [
    "STATIC STRUCTURES", "DYNAMICS & VECTORS", "PEER MENTORSHIP", "PRECISION PROBLEM SOLVING", "ACADEMIC EXCELLENCE"
  ];

  const galleryImages = [
    { src: MT1, caption: "NODE 01 // CLASSROOM KINEMATICS MATRIX", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1.5 },
    { src: MT2, caption: "NODE 02 // STUDENT ENGAGEMENT & GUIDANCE", sizeClass: "h-[320px] sm:h-[400px]", rotate: 1.2 },
    { src: MT3, caption: "NODE 03 // FACULTY ACADEMIC RECOGNITION", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1 }
  ];

  const segments = [
    {
      title: "FOUNDATIONAL TOPPER RECORD",
      desc: "Secured maximum grade evaluation scores in foundational mechanics. Solved complex multi-force dynamic equilibrium matrices, truss frame loads, and friction variables with extreme accuracy.",
      tags: ["Engineering Mechanics", "Analytical Thinking", "Academic Excellence", "Precision Solving"]
    },
    {
      title: "JUNIOR COHORT MENTORSHIP",
      desc: "Drafted concept summaries and hosted interactive whiteboard walkthroughs for first-year engineering students. Simplified vector algebra and rigid-body mechanics modules.",
      tags: ["Student Guidance", "Mentorship", "Knowledge Sharing", "Engineering Basics"]
    },
    {
      title: "ACADEMIC ENDORSEMENT",
      desc: "Received official faculty commendations at MGMCOE Nanded for demonstrating excellent analytical approach and peer-collaborative mentorship efforts.",
      tags: ["Faculty Endorsement", "Academic Honors", "Leadership Node", "MGMCOE Verified"]
    }
  ];

  const learnings = [
    "Analytical Precision", "Structural Physics", "Dynamic Kinematics", "Mentorship Delivery", "Concept Simplification", "Peer Leadership"
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
            protocolLabel="ACADEMIC_EXCELLENCE_PROTOCOL"
            title={["MECHANICS", "TOPPER"]}
            subtitle="Academic excellence in one of engineering's most challenging foundational subjects."
            infoLabel="2024 • FOUNDATIONAL ENGINEERING MECHANICS CHAMPION"
          />

          {/* OVERVIEW */}
          <ExperienceOverview
            ledgerLabel="LEDGER_NODE // CORE_ACADEMICS"
            identityLabel="ACHIEVEMENT IDENTITY"
            headline="ENGINEERING MECHANICS TOPPER RECORD"
            points={overviewPoints}
            pointsTitle="[ PRECISION HIGHLIGHTS ]"
            sidebarTitle="// EVALUATION_METRICS"
            sidebarLabel="STACK_SPEC"
            sidebarItems={overviewSidebar}
          />

          {/* ACADEMIC PHASES */}
          <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
            <div className="inline-flex items-center gap-3 mb-8 opacity-45">
              <div className="h-[1.5px] w-8 bg-[#00CC52]" />
              <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">ACHIEVEMENT_PHASES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
              ACADEMIC SEGMENTS
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
            onBack={handleBack}
            conclusionTitle="PRECISION RESOLUTION REPORT"
            conclusionText="Securing foundational mechanics excellence validated core logical frameworks and set up a systematic approach to advanced engineering systems. Peer mentorship successfully expanded collaborative engagement index thresholds."
            logs={logs}
          />
        </div>
      </main>
    </div>
  );
};

export default MechanicsPage;
