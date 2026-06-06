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

import F1 from '../../assets/Images/F1.jpeg';
import F2 from '../../assets/Images/F2.jpeg';
import F3 from '../../assets/Images/F3.jpeg';
import F4 from '../../assets/Images/F4.jpeg';

export const FreshersPage = () => {
  const navigate = useRef(useNavigate()).current;
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([
    '> PERSONALITY VAULT ACCESSED...',
    '> NETWORK STABLE // PROTOCOL: CONFIDENCE_MATRIX_NOMINAL'
  ]);

  useEffect(() => {
    const telemetries = [
      'RETRIEVING STAGE MILESTONES...',
      'ANALYZING PUBLIC SPEAKING PARAMETERS...',
      'GROUP DISCUSSION LOGS NOMINAL.',
      'TALENT STAGE NODE VERIFIED.',
      'DEPLOYING RUNNER UP RECOGNITION CEREMONY...',
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
    { label: 'PERSONALITY_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1 },
    { label: 'STAGE_ACTIVE', top: '24%', right: '4%', rotate: 3, delay: 0.3 },
    { label: 'LIVE_QNA_PROTOCOL', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
    { label: 'CONFIDENCE_MATRIX', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
  ];

  const overviewPoints = [
    "Successfully progressed through highly competitive Group Discussion panels.",
    "Demonstrated rapid logical reasoning and structured verbal arguments.",
    "Delivered a high-confidence live stand-up comedy performance onstage.",
    "Honored with the Runner-Up title for the entire Mr. Freshers 2024 competition."
  ];

  const overviewSidebar = [
    "PUBLIC SPEAKING", "GROUP DISCUSSION", "INTERVIEW SKILLS", "STAND-UP COMEDY", "STAGE PRESENCE", "CONFIDENCE"
  ];

  const galleryImages = [
    { src: F1, caption: "STAGE ONE // GROUP DISCUSSION ROUND", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1.5 },
    { src: F2, caption: "STAGE TWO // PERSONAL INTERVIEW CONVEX", sizeClass: "h-[320px] sm:h-[400px]", rotate: 1 },
    { src: F3, caption: "STAGE THREE // LIVE STAND-UP PERFORMANCE", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1 },
    { src: F4, caption: "STAGE FOUR // RUNNER UP RECOGNITION CEREMONY", sizeClass: "h-[320px] sm:h-[400px]", rotate: 1.8 }
  ];

  const stageRounds = [
    {
      title: "GD & INTERVIEW ROUNDS",
      desc: "Demonstrated quick analytical reasoning during the critical GD panel, followed by high-composure communication with senior judges in the personal interview round. Focused on articulation, logic, and professional presence.",
      tags: ["Group Discussion", "Interview Skills", "Communication", "Composure"]
    },
    {
      title: "LIVE TALENT PERFORMANCE",
      desc: "Delivered an authentic, high-confidence stand-up comedy performance on stage. Managed mic dynamics, stage presence, lighting adjustments, and humor coordination to engage a large student and faculty audience.",
      tags: ["Stand-up Comedy", "Stage Confidence", "Live Engagement", "Artistic Presence"]
    },
    {
      title: "RUNNER-UP RECOGNITION",
      desc: "Validated across multiple intensive parameters including presentation, witty Q&A, and live engagement. Awarded the Runner-Up title for showcasing excellent communication, leadership potential, and artistic charisma.",
      tags: ["Stage Excellence", "Witty Q&A", "Charisma", "Merit Award"]
    }
  ];

  const learnings = [
    "Public Speaking", "Intellectual Wit", "Stage Presence", "Audience Engagement", "Communication Composure", "Team Leadership"
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
            protocolLabel="PERSONALITY_STAGE_PROTOCOL"
            title={["MR", "FRESHERS", "RUNNER UP"]}
            subtitle="Confidence, communication, leadership, and stage performance recognition."
            infoLabel="2024 • PERSONALITY & STAGE PERFORMANCE MILESTONE"
          />

          {/* OVERVIEW */}
          <ExperienceOverview
            ledgerLabel="LEDGER_NODE // CORE_ACHIEVEMENT"
            identityLabel="COMPETITION IDENTITY"
            headline="MR. FRESHERS COMPETITION RUNNER UP"
            points={overviewPoints}
            pointsTitle="[ ELIMINATION CHRONICLES ]"
            sidebarTitle="// COMPETENCY_MATRIX"
            sidebarLabel="STACK_SPEC"
            sidebarItems={overviewSidebar}
          />

          {/* ROUNDS SUMMARY */}
          <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
            <div className="inline-flex items-center gap-3 mb-8 opacity-45">
              <div className="h-[1.5px] w-8 bg-[#00CC52]" />
              <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">COMPETITION_STAGES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
              STAGE RESOLUTION LOGS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stageRounds.map((round, idx) => (
                <motion.div
                  key={round.title}
                  whileHover={{ y: -8, border: '1px solid rgba(0,255,82,0.3)' }}
                  className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm text-left flex flex-col justify-between min-h-[220px] transition-colors duration-300 shadow-[2px_2px_12px_rgba(0,0,0,0.02)] group"
                >
                  <div>
                    <span className="font-mono text-[8px] text-[#00CC52] font-black tracking-widest block uppercase mb-2">
                      STAGE_NODE_0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base uppercase text-black leading-tight mb-3">
                      {round.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-700 leading-relaxed font-light">
                      {round.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 border-t border-black/5 pt-4">
                    {round.tags.map((tag) => (
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
            conclusionTitle="STAGE EXCELLENCE CHECKPOINT"
            conclusionText="A premium cinematic memory archive documenting stage presence, personality, confidence, and live performance moments. Evaluated, structured, and archived under strict OS database guidelines."
            logs={logs}
          />
        </div>
      </main>
    </div>
  );
};

export default FreshersPage;
