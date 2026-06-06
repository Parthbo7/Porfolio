import { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ExperienceHero,
  ExperienceOverview,
  ExperienceGallery,
  ExperienceTags,
  ExperienceFooter,
  ExperienceMetadata,
} from '../../components/ExperienceCommon';

// Import images
import gdg1 from '../../assets/Images/GDG1.jpeg';
import gdg2 from '../../assets/Images/GDG2.jpeg';
import gdg3 from '../../assets/Images/GDG3.jpeg';
import Viso1 from '../../assets/Images/Viso1.jpeg';
import Viso2 from '../../assets/Images/Viso2.jpeg';
import MT1 from '../../assets/Images/MT1.jpeg';
import MT2 from '../../assets/Images/MT2.jpeg';
import MT3 from '../../assets/Images/MT3.jpeg';

interface ExperienceCardData {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  isExpandable?: boolean;
  metaLabels?: string[];
}

interface DetailVaultConfig {
  archiveTitle: string;
  intro: string;
  toneTag: string;
  systemTag: string;
  highlights: string[];
  timeline: { phase: string; detail: string }[];
  images: string[];
}

const experienceCards: ExperienceCardData[] = [
  {
    id: 'exp-gdg',
    year: '2025 — PRESENT',
    title: 'GDG DESIGN COORDINATOR',
    subtitle: 'COMMUNITY DESIGN & CREATIVE SYSTEMS',
    description: 'Leading the visual identity and branding ecosystem for Google Developer Groups through campaigns, event systems, and digital community experiences.',
    tags: ['CREATIVE CAMPAIGNS', 'EVENT BRANDING', 'COMMUNITY DESIGN', 'HACKATHON VISUALS'],
    isExpandable: true
  },
  {
    id: 'exp-visotech',
    year: '2026',
    title: 'VISOTECH 2026',
    subtitle: 'Event volunteering, futuristic decoration systems, and live technical engagement experiences.',
    description: 'Contributed as a volunteer during VISOTECH 2026 by working on event decoration systems and actively hosting the C-Striker engagement activity while helping create an immersive futuristic technical event atmosphere.',
    tags: ['Event Volunteering', 'Decoration Design', 'C-Striker Hosting', 'Technical Event', 'Community Engagement'],
    metaLabels: ['EVENT_NODE', 'VISUAL_SETUP_ACTIVE', 'TECH_EVENT_PROTOCOL', 'LIVE_HOST_SYSTEM'],
    isExpandable: true
  },
  {
    id: 'exp-tpo',
    year: '2025',
    title: 'TPO COORDINATOR',
    subtitle: 'Managing student coordination systems, placement operations, and professional engagement workflows.',
    description: 'Currently working as a TPO Coordinator at MGMCOE Nanded, handling placement coordination, communication systems, student engagement, and operational management activities. Also received the opportunity to pitch a project during the HR Summit professional event.',
    tags: ['TPO Operations', 'Placement Coordination', 'HR Summit', 'Project Pitching', 'Leadership', 'Communication'],
    metaLabels: ['HR_SUMMIT_NODE', 'PLACEMENT_SYSTEM_ACTIVE', 'MGMCOE_COORDINATION', 'PROFESSIONAL_NETWORK'],
    isExpandable: true
  },
  {
    id: 'exp-mechanics',
    year: '2024',
    title: 'MECHANICS TOPPER',
    subtitle: "Academic excellence in one of engineering's most challenging foundational subjects.",
    description: 'Achieved top academic performance in Engineering Mechanics — one of the toughest core engineering subjects — through analytical thinking, precision problem-solving, and conceptual mastery. Inspired juniors academically through consistency and strong engineering fundamentals.',
    tags: ['Engineering Mechanics', 'Academic Excellence', 'Problem Solving', 'Analytical Thinking', 'Student Inspiration'],
    metaLabels: ['TOPPER_NODE', 'ANALYTICAL_SYSTEM', 'ENGINEERING_ARCHIVE', 'PRECISION_MODE_ACTIVE'],
    isExpandable: true
  },
  {
    id: 'exp-startup',
    year: '2025',
    title: 'IDEA TO PITCH — STARTUP BOOTCAMP',
    subtitle: 'Leading innovation teams and transforming startup concepts into structured product systems.',
    description: 'Participated in the Idea to Pitch Startup Bootcamp focused on innovation strategy, entrepreneurial thinking, startup pitching, and product development. Led a 10-member team through collaborative ideation, leadership coordination, and startup execution activities.',
    tags: ['Team Leadership', 'Startup Thinking', 'Product Strategy', 'Innovation Systems', 'Pitching', 'Collaboration'],
    metaLabels: ['TEAM_LEAD_NODE', 'STARTUP_PROTOCOL', 'IDEA_MATRIX_ACTIVE', 'INNOVATION_ARCHIVE'],
    isExpandable: true
  },
  {
    id: 'exp-freshers',
    year: '2024',
    title: 'MR. FRESHERS — RUNNER UP',
    subtitle: 'Confidence, communication, leadership, and stage performance recognition.',
    description: 'Successfully progressed through multiple competitive rounds including Group Discussion, Personal Interview, Talent Round, live Q&A, and stand-up comedy performance on stage — eventually achieving Runner Up in Mr. Freshers through confidence, communication skills, humor, and stage presence.',
    tags: ['PUBLIC SPEAKING', 'GROUP DISCUSSION', 'INTERVIEW SKILLS', 'STAND-UP COMEDY', 'STAGE PRESENCE', 'LEADERSHIP', 'CONFIDENCE'],
    metaLabels: ['PERSONALITY_NODE','STAGE_ACTIVE','LIVE_QNA_PROTOCOL','TALENT_SYSTEM','CONFIDENCE_MATRIX'],
    isExpandable: true
  }
];

export const ExperienceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [logs, setLogs] = useState<string[]>([
    '> ARCHIVE DATABASE ACCESS NOMINAL...',
    '> SYSTEM METRICS DECRYPTED // SECURITY PROTOCOL NOMINAL'
  ]);

  useEffect(() => {
    const telemetries = [
      'PULLING CAREER DATA SEGMENTS...',
      'LOGGING OPERATIONS MATRIX NOMINAL.',
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

  const card = experienceCards.find(c => c.id === id || c.id === `exp-${id}`);

  if (!card) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#FAF9F6]">
        <span className="text-black/50 font-mono">Experience not found</span>
      </div>
    );
  }

  const cardId = card.id;

  const vaultConfigs: Record<string, DetailVaultConfig> = {
    'exp-visotech': {
      archiveTitle: 'VISOTECH 2026 ARCHIVE',
      intro: 'A futuristic event memory archive documenting volunteering, event creativity, and technical engagement.',
      toneTag: 'EVENT_MEMORY_ARCHIVE',
      systemTag: 'VISOTECH_RUNTIME',
      highlights: ['Event Volunteering', 'Decoration Systems', 'Live Technical Hosting', 'Audience Engagement'],
      timeline: [
        { phase: 'DECORATION_SYSTEMS', detail: 'Designed immersive visual environments and coordinated decoration execution.' },
        { phase: 'C_STRIKER_ENGAGEMENT', detail: 'Hosted live C-Striker interactions and maintained participant engagement.' },
        { phase: 'COMMUNITY_IMPACT', detail: 'Contributed to event atmosphere and volunteer-driven technical storytelling.' }
      ],
      images: [Viso1, Viso2]
    },
    'exp-tpo': {
      archiveTitle: 'TPO COORDINATOR ARCHIVE',
      intro: 'A logistics and communication command center for student-placement operations and coordination flows.',
      toneTag: 'OPERATIONS_COMMAND',
      systemTag: 'TPO_NETWORK_NODE',
      highlights: ['Student coordination', 'Communication systems', 'Operational execution'],
      timeline: [
        { phase: 'INTAKE_LOGS', detail: 'Consolidated requirements and schedule dependencies.' },
        { phase: 'SYNC_ENGINE', detail: 'Coordinated participants, updates, and support channels.' },
        { phase: 'DELIVERY_NODE', detail: 'Executed placement communication with high consistency.' }
      ],
      images: [gdg1, gdg2, gdg3]
    },
    'exp-mechanics': {
      archiveTitle: 'ENGINEERING MECHANICS ARCHIVE',
      intro: 'An archived engineering achievement system documenting academic excellence, recognition, and student inspiration.',
      toneTag: 'ENGINEERING_ARCHIVE_LAYER',
      systemTag: 'MECHANICS_PRECISION_LOG',
      highlights: ['Engineering Fundamentals', 'Problem Solving', 'Academic Recognition'],
      timeline: [
        { phase: 'ENGINEERING_EXCELLENCE', detail: 'Secured top academic performance through conceptual mastery.' },
        { phase: 'STUDENT_INSPIRATION', detail: 'Shared knowledge and motivated future engineers through academic sessions.' },
        { phase: 'RECOGNITION_MOMENT', detail: 'Received recognition for consistent performance and contribution.' }
      ],
      images: [MT1, MT2, MT3]
    },
    'exp-startup': {
      archiveTitle: 'BOOTCAMP INNOVATION ARCHIVE',
      intro: 'A startup simulation layer where ideas were transformed into product narratives and pitch-ready systems.',
      toneTag: 'STARTUP_PROTO_LAYER',
      systemTag: 'INNOVATION_BOOT_NODE',
      highlights: ['Startup strategy', 'Pitch architecture', 'Product framing'],
      timeline: [
        { phase: 'IDEATION_SCAN', detail: 'Generated concepts and assessed problem-value alignment.' },
        { phase: 'PITCH_MATRIX', detail: 'Converted concepts into concise pitch systems.' },
        { phase: 'DEMO_STORY', detail: 'Presented product logic with narrative clarity.' }
      ],
      images: [gdg2, gdg3, gdg1]
    },
  };

  const activeVault = vaultConfigs[cardId] || {
    archiveTitle: `${card.title} ARCHIVE`,
    intro: card.description || 'Professional experience and contribution details.',
    toneTag: 'ARCHIVE_LAYER',
    systemTag: 'EXPERIENCE_NODE',
    highlights: card.tags.slice(0, 3),
    timeline: [
      { phase: 'INTAKE', detail: 'Profile data synchronized.' },
      { phase: 'EXECUTION', detail: 'Experience module rendered.' },
      { phase: 'ARCHIVE', detail: 'Memory node archived and available.' }
    ],
    images: [gdg1, gdg2, gdg3]
  };

  const badges = [
    { label: activeVault.systemTag, top: '12%', left: '4%', rotate: -5, delay: 0.1 },
    { label: activeVault.toneTag, top: '24%', right: '4%', rotate: 3, delay: 0.3 },
    { label: 'SECURE_NODE', bottom: '8%', left: '8%', rotate: 4, delay: 0.2 },
    { label: 'OS_VAULT_ACTIVE', bottom: '18%', right: '8%', rotate: -4, delay: 0.5 }
  ];

  const isVisotech = cardId === 'exp-visotech';

  const handleBack = () => {
    navigate('/experience');
  };

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
            protocolLabel={`${activeVault.systemTag}_PROTOCOL`}
            title={activeVault.archiveTitle}
            subtitle={card.subtitle}
            infoLabel={`${card.year} • SYSTEM VAULT SECURE`}
          />

          {/* OVERVIEW */}
          <ExperienceOverview
            ledgerLabel="LEDGER_NODE // SYSTEM_VAULT"
            identityLabel="ARCHIVE IDENTITY"
            headline={activeVault.intro}
            points={activeVault.timeline.map((t) => `${t.phase}: ${t.detail}`)}
            pointsTitle="[ ARCHIVE PROCESSING TIMELINE ]"
            sidebarTitle="// HIGHLIGHTS"
            sidebarLabel="STACK_SPEC"
            sidebarItems={activeVault.highlights}
          />

          {/* VISOTECH CUSTOM SPECIFIC SECTIONS */}
          {isVisotech && (
            <div className="flex flex-col gap-20 w-full mb-20">
              <section className="w-full max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center text-left">
                <div className="w-full lg:w-7/12 relative flex justify-center">
                  <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-br from-[#00CC52]/5 to-transparent border border-black/5 rounded-[18px] pointer-events-none -z-10" />
                  <motion.div
                    className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] group"
                    whileHover={{ scale: 1.015, y: -6 }}
                  >
                    <div className="w-full rounded-[10px] overflow-hidden bg-black/5">
                      <img
                        src={Viso1}
                        alt="Decoration Systems"
                        className="w-full h-[320px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="w-full lg:w-5/12 flex flex-col gap-6 text-left">
                  <h3 className="font-display font-black text-3xl uppercase tracking-tighter leading-none">
                    DECORATION SYSTEMS
                  </h3>
                  <div className="h-[2px] w-12 bg-[#00CC52]" />
                  <p className="font-sans text-[14px] leading-relaxed text-[#5A5A5A] font-light">
                    Worked as a volunteer in the decoration team for VISOTECH 2026, helping create a
                    futuristic space-themed event environment using creative visual setups, entrance
                    structures, and immersive display concepts. Contributed to improving the overall
                    event atmosphere and audience experience through coordinated decoration execution.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Event Decoration', 'Visual Setup', 'Creative Execution', 'Team Coordination'].map(
                      (t) => (
                        <span
                          key={t}
                          className="font-mono text-[8px] uppercase border border-black/10 bg-white/80 px-2 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </section>

              <section className="w-full max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row-reverse gap-12 items-center text-left">
                <div className="w-full lg:w-7/12 relative flex justify-center">
                  <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-br from-[#00CC52]/5 to-transparent border border-black/5 rounded-[18px] pointer-events-none -z-10" />
                  <motion.div
                    className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)] group"
                    whileHover={{ scale: 1.015, y: -6 }}
                  >
                    <div className="w-full rounded-[10px] overflow-hidden bg-black/5">
                      <img
                        src={Viso2}
                        alt="C-Striker Engagement"
                        className="w-full h-[320px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="w-full lg:w-5/12 flex flex-col gap-6 text-left">
                  <h3 className="font-display font-black text-3xl uppercase tracking-tighter leading-none">
                    C-STRIKER ENGAGEMENT
                  </h3>
                  <div className="h-[2px] w-12 bg-[#00CC52]" />
                  <p className="font-sans text-[14px] leading-relaxed text-[#5A5A5A] font-light">
                    Actively hosted and managed the C-Striker engagement activity during VISOTECH
                    2026, interacting with participants and maintaining audience engagement
                    throughout the technical showcase. Helped create an energetic and interactive
                    event environment while representing the volunteer team.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Event Hosting', 'Public Interaction', 'Technical Engagement', 'Live Coordination'].map(
                      (t) => (
                        <span
                          key={t}
                          className="font-mono text-[8px] uppercase border border-black/10 bg-white/80 px-2 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* GALLERY (FOR NON-VISOTECH generic pages) */}
          {!isVisotech && activeVault.images && activeVault.images.length > 0 && (
            <ExperienceGallery
              images={activeVault.images.map((img, i) => ({
                src: img,
                caption: `ARCHIVE IMAGE PROOF 0${i + 1}`,
              }))}
            />
          )}

          {/* TAGS */}
          <ExperienceTags tags={card.tags} />

          {/* FOOTER */}
          <ExperienceFooter onBack={handleBack} logs={logs} />
        </div>
      </main>
    </div>
  );
};

export default ExperienceDetailsPage;
