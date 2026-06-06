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

import gdg0 from '../../assets/Images/GDG0.jpeg';
import gdg1 from '../../assets/Images/GDG1.jpeg';
import gdg2 from '../../assets/Images/GDG2.jpeg';
import gdg3 from '../../assets/Images/GDG3.jpeg';

export const GDGPage = () => {
  const navigate = useRef(useNavigate()).current;
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([
    '> GDG ARCHIVE DECRYPTED...',
    '> NETWORK STABLE // PROTOCOL: GDG_CREATIVE_LEAD_ACTIVE'
  ]);

  useEffect(() => {
    const telemetries = [
      'LOADED GRAPHIC & WEB DESIGN MODULES...',
      'CREATIVE BRANDING CAMPAIGN SYNCHRONIZED.',
      'DEPLOYING EVENT BRANDING ECOSYSTEM...',
      'HACKATHON VISUALS LOADED: NOMINAL.',
      'COMMUNITY BUILDING NETWORKS STANDBY...',
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
    { label: 'COMMUNITY_NODE', top: '12%', left: '4%', rotate: -5, delay: 0.1 },
    { label: 'DESIGN_SYSTEM_ACTIVE', top: '24%', right: '4%', rotate: 3, delay: 0.3 },
    { label: 'CREATIVE_ARCHIVE', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
    { label: 'VISUAL_PROTOCOL', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
  ];

  const teamPoints = [
    "Leading the visual identity and branding ecosystem for Google Developer Groups.",
    "Designing promotional creatives, event posters, and high-energy banners.",
    "Creating futuristic event themes and digital campaign systems.",
    "Bridging developer community pathways by building unique digital portals and interactive spaces."
  ];

  const teamSidebar = [
    "CREATIVE CAMPAIGNS", "EVENT BRANDING", "COMMUNITY DESIGN", "HACKATHON VISUALS"
  ];

  const galleryImages = [
    { src: gdg0, caption: "GDG DESIGN & COMMUNITY TEAM WORKSPACE", sizeClass: "h-[320px] sm:h-[400px]", rotate: -1.2 },
    { src: gdg1, caption: "GDG INFO SESSION PROMOTIONAL CAMPAIGN", sizeClass: "h-[320px] sm:h-[400px]", rotate: 1 },
    { src: gdg2, caption: "GOOGLE CLOUD SESSION BRANDING SETUP", sizeClass: "h-[320px] sm:h-[400px]", rotate: -0.8 },
    { src: gdg3, caption: "HACKCITY HACKATHON CYBER PROMOTIONS", sizeClass: "h-[320px] sm:h-[400px]", rotate: 1.5 }
  ];

  const learnings = [
    "Branding Identity", "Creative Campaigns", "Digital Assets Design", "Team Leadership", "Event Coordination", "Community Outreach"
  ];

  const campaigns = [
    {
      title: "GDG INFO SESSION",
      desc: "Designed promotional creatives, event posters, and digital branding assets to improve awareness and student engagement during the GDG onboarding and info session campaign.",
      tags: ["POSTER DESIGN", "COMMUNITY BRANDING", "SOCIAL MEDIA ASSETS"]
    },
    {
      title: "GOOGLE CLOUD SESSION",
      desc: "Created futuristic cloud-themed promotional visuals and digital campaign systems for the Google Cloud developer session.",
      tags: ["CLOUD BRANDING", "EVENT CAMPAIGN", "UI VISUALS"]
    },
    {
      title: "HACKCITY HACKATHON",
      desc: "Designed high-energy hackathon banners, cyber-style promotional posters, and engagement creatives to build excitement and participation during Hackcity Hackathon.",
      tags: ["HACKATHON BRANDING", "BANNER DESIGN", "CREATIVE CAMPAIGNS"]
    }
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
            protocolLabel="GDG_DESIGN_PROTOCOL"
            title={["GDG", "DESIGN", "COORDINATOR"]}
            subtitle="Leading the visual identity and branding ecosystem for Google Developer Groups through campaigns, event systems, and digital community experiences."
            infoLabel="2025 — PRESENT • COMMUNITY DESIGN & CREATIVE SYSTEMS"
          />

          {/* TEAM OVERVIEW */}
          <ExperienceOverview
            ledgerLabel="LEDGER_NODE // CORE_DIRECTIVE"
            identityLabel="PROJECT IDENTITY"
            headline="COMMUNITY DESIGN & CREATIVE OPERATIONS"
            points={teamPoints}
            pointsTitle="[ CORE RESPONSIBILITIES ]"
            sidebarTitle="// TELEMETRY_ENGINE"
            sidebarLabel="STACK_SPEC"
            sidebarItems={teamSidebar}
          />

          {/* CAMPAIGNS LIST (REPLACING OLD CYBER PANELS WITH MINIMAL WARM CARDS) */}
          <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
            <div className="inline-flex items-center gap-3 mb-8 opacity-45">
              <div className="h-[1.5px] w-8 bg-[#00CC52]" />
              <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">CREATIVE_CAMPAIGNS</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
              INDIVIDUAL SHOWCASE ARCHIVES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {campaigns.map((camp, idx) => (
                <motion.div
                  key={camp.title}
                  whileHover={{ y: -8, border: '1px solid rgba(0,255,82,0.3)' }}
                  className="p-6 border border-black/10 bg-white/80 backdrop-blur-md rounded-sm text-left flex flex-col justify-between min-h-[220px] transition-colors duration-300 shadow-[2px_2px_12px_rgba(0,0,0,0.02)] group"
                >
                  <div>
                    <span className="font-mono text-[8px] text-[#00CC52] font-black tracking-widest block uppercase mb-2">
                      CAMPAIGN_NODE_0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base uppercase text-black leading-tight mb-3">
                      {camp.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-700 leading-relaxed font-light">
                      {camp.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 border-t border-black/5 pt-4">
                    {camp.tags.map((tag) => (
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
            conclusionTitle="FINAL DIRECTIVE RESOLUTION"
            conclusionText="Through the GDG Design Coordinator role, visual identity channels were systematically planned and deployed. The output was a highly optimized, developer-centric promotional ecosystem that maximized community onboarding and session retention."
            logs={logs}
          />
        </div>
      </main>
    </div>
  );
};

export default GDGPage;
