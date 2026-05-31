import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Disc, 
  Layers,
  ChevronRight,
  Instagram,
  Terminal,
  Activity,
  Cpu,
  Feather,
  Wrench,
  Users,
  Award
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  subName: string;
  icon: any;
  skills: string[];
}

// dynamic tactile audio tick
const playHapticTick = (freq = 1500, dur = 0.035) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const audioCtx = new AudioContextClass();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + dur);
    
    gain.gain.setValueAtTime(0.007, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + dur);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + dur + 0.01);
  } catch (e) {}
};

export const FuturisticFooter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSocial, setActiveSocial] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      id: 'cat-1',
      name: 'PROGRAMMING',
      subName: 'LANGUAGES & ALGORITHMS',
      icon: <Terminal size={14} />,
      skills: [
        'Python',
        'C++',
        'C',
        'Java',
        'JavaScript',
        'TypeScript',
        'SQL',
        'OOP Principles',
        'Data Structures & Algorithms'
      ]
    },
    {
      id: 'cat-2',
      name: 'WEB / FRONTEND',
      subName: 'ENGINES & INTERACTION',
      icon: <Layers size={14} />,
      skills: [
        'React',
        'Next.js',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'GSAP Animation',
        'Framer Motion',
        'Three.js',
        'WebGL'
      ]
    },
    {
      id: 'cat-3',
      name: 'BACKEND / DB',
      subName: 'PIPELINES & DATABASES',
      icon: <Activity size={14} />,
      skills: [
        'Node.js',
        'Firebase',
        'MongoDB',
        'MySQL'
      ]
    },
    {
      id: 'cat-4',
      name: 'AI / COGNITIVE',
      subName: 'DATA & INTELLIGENCE',
      icon: <Cpu size={14} />,
      skills: [
        'Artificial Intelligence',
        'Prompt Engineering',
        'Streamlit',
        'AI Tools',
        'Analytics Dashboards'
      ]
    },
    {
      id: 'cat-5',
      name: 'DESIGN / CREATIVE',
      subName: 'BRAND & INTERFACES',
      icon: <Feather size={14} />,
      skills: [
        'Figma',
        'Canva',
        'UI/UX Design',
        'Creative Coding',
        'Motion Design',
        'Branding'
      ]
    },
    {
      id: 'cat-6',
      name: 'TOOLS / WORKFLOW',
      subName: 'ECOSYSTEMS & ENGINE',
      icon: <Wrench size={14} />,
      skills: [
        'Git & GitHub',
        'VS Code',
        'Blender',
        'Framer',
        'Responsive Design'
      ]
    },
    {
      id: 'cat-7',
      name: 'SOFT SKILLS',
      subName: 'COLLABORATIVE LAYER',
      icon: <Users size={14} />,
      skills: [
        'Communication',
        'Team Leadership',
        'Event Coordination',
        'Community Building',
        'Problem Solving',
        'Creative Thinking'
      ]
    }
  ];

  const experiences = [
    { label: 'GDG Design Coordinator', role: 'COMMUNITY_LEAD', status: 'ACTIVE', color: 'text-emerald-400 border-emerald-400/20 bg-emerald-500/[0.03]' },
    { label: 'Python Developer Intern', role: 'WORK_EXPERIENCE', status: 'COMPLETED', color: 'text-yellow-400 border-yellow-400/20 bg-yellow-500/[0.03]' },
    { label: 'TPO LinkedIn Handler', role: 'CONTENT_STRATEGY', status: 'ACTIVE', color: 'text-fuchsia-400 border-fuchsia-400/20 bg-fuchsia-500/[0.03]' },
    { label: 'Engineering Mechanics Topper', role: 'ACADEMIC_TOPPER', status: 'TOPPER', color: 'text-cyan-400 border-cyan-400/20 bg-cyan-500/[0.03]' },
    { label: 'Hackathon Participation', role: 'COMPETITIVE_CODE', status: 'PARTICIPANT', color: 'text-orange-400 border-orange-400/20 bg-orange-500/[0.03]' },
    { label: 'CampusConnect Builder', role: 'PRODUCT_SHIPPED', status: 'RELEASED', color: 'text-[#00FF66] border-[#00FF66]/20 bg-[#00FF66]/[0.03]' }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate outline backdrop texts subtly on scroll trigger
    const bgInfo = container.querySelector('.faded-info-text');
    const bgNum = container.querySelector('.faded-info-num');

    gsap.fromTo([bgInfo, bgNum], 
      { opacity: 0, y: 30 },
      { 
        opacity: 0.08, 
        y: 0, 
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const socials = [
    { name: 'LinkedIn', handle: '@parthbulbule', icon: <Linkedin size={14} />, href: 'https://linkedin.com' },
    { name: 'GitHub', handle: '@parthbulbule', icon: <Github size={14} />, href: 'https://github.com' },
    { name: 'Instagram', handle: '@parth.dev', icon: <Instagram size={14} />, href: 'https://instagram.com' },
    { name: 'Twitter/X', handle: '@parth_coder', icon: <Twitter size={14} />, href: 'https://twitter.com' },
    { name: 'Discord', handle: 'parth#404', icon: <Disc size={14} />, href: 'https://discord.com' },
    { name: 'Gmail', handle: 'contact@parth.dev', icon: <Mail size={14} />, href: 'mailto:contact@parth.dev' },
  ];

  return (
    <section 
      ref={containerRef}
      id="skill-portal-footer"
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none bg-[#050505] text-white snap-start snap-always"
    >
      {/* Film grain procedural overlay & thin grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none custom-grid-lines" />
      
      {/* Dynamic atmospheric radial blurs */}
      <div className="absolute top-[30%] right-[20%] w-[35vw] h-[35vw] bg-yellow-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[45vw] h-[45vw] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Cinematic backdrop layers */}
      <div className="absolute right-[4%] bottom-[12%] select-none pointer-events-none z-0 hidden lg:flex flex-col items-end opacity-10">
        <div className="faded-info-text font-display font-extrabold uppercase text-[6.5vw] leading-[0.8] text-stroke-gold select-none">
          <div>SKILL</div>
          <div>STACK</div>
          <div>INFO</div>
        </div>
        <div className="faded-info-num font-display font-black text-[#D4AF37] text-[9vw] leading-none select-none mt-2">
          02
        </div>
      </div>

      {/* TOP HUD ROW */}
      <div className="flex justify-between items-center z-10 w-full border-b border-white/5 pb-4">
        <span className="font-mono text-[9px] sm:text-xs tracking-[0.25em] text-[#00FF66] font-bold uppercase flex items-center gap-1.5">
          <Layers size={12} className="animate-pulse" />
          CREATIVE DEVELOPER
        </span>
        
        {/* Monogram OS status */}
        <div className="font-mono text-[9px] sm:text-xs tracking-widest text-white/30 hidden sm:flex items-center gap-2 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
          <span>SYSTEM_OS</span>
          <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
          <span>[ P / B ]</span>
        </div>

        {/* Console Archive marker */}
        <span className="font-mono text-[9px] sm:text-xs tracking-widest text-white/40">
          SEC_02 // SYSTEM_ARCHIVE
        </span>
      </div>

      {/* CENTER WORKSPACE: DYNAMIC TELEMETRY GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch z-10 w-full my-auto gap-6 lg:gap-10 relative min-h-[55vh] max-h-[60vh] overflow-hidden">
        
        {/* COLUMN 1: CATEGORIES NAV (Col Span 3) */}
        <div className="lg:col-span-3 flex flex-col gap-1.5 justify-center border-r border-white/5 pr-4 select-none">
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-2">
            // ARCHIVE_DIRECTORY
          </span>
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => {
                playHapticTick(1400 + i * 40, 0.02);
                setActiveTab(i);
              }}
              onMouseEnter={() => playHapticTick(1500, 0.015)}
              className={`flex items-center gap-3 p-2 rounded border text-left transition-all duration-300 w-full interactive-hover ${
                activeTab === i 
                  ? 'border-[#00FF66]/30 bg-[#00FF66]/5 text-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.06)]' 
                  : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.01]'
              }`}
            >
              <div className={`p-1.5 rounded transition-colors ${activeTab === i ? 'bg-[#00FF66]/10 text-[#00FF66]' : 'bg-white/[0.02]'}`}>
                {cat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-[11px] sm:text-xs tracking-tight uppercase leading-none">
                  {cat.name}
                </span>
                <span className="font-mono text-[7px] text-white/20 uppercase tracking-widest mt-0.5 whitespace-nowrap">
                  {cat.subName}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* COLUMN 2: ACTIVE CATEGORY SKILLS GRID (Col Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-center border-r border-white/5 px-4 sm:px-6">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#00FF66] font-bold uppercase mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-ping" />
            // DYNAMIC_INSPECT: {categories[activeTab].name}
          </span>
          
          <div className="h-[42vh] overflow-y-auto no-scrollbar pr-2 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex flex-col gap-1.5 sm:gap-2 lg:gap-2.5"
              >
                {categories[activeTab].skills.map((skill) => (
                  <div 
                    key={skill}
                    onMouseEnter={() => playHapticTick(1600, 0.015)}
                    className="group flex items-center gap-2.5 interactive-hover py-0.5 cursor-pointer"
                  >
                    <ChevronRight size={11} className="text-[#00FF66] opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-display font-extrabold text-[13px] sm:text-[16px] lg:text-[18px] text-zinc-400 group-hover:text-white uppercase tracking-tighter transition-all duration-300 group-hover:translate-x-2 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* COLUMN 3: EXPERIENCE ARCHIVE TELEMETRY LOGS (Col Span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-center pl-4 sm:pl-6 relative">
          <span className="font-mono text-[9px] tracking-[0.2em] text-yellow-400 font-bold uppercase mb-4 flex items-center gap-1.5">
            <Award size={10} className="animate-pulse" />
            // EXPERIENCE_ARCHIVE_STATUS
          </span>
          
          <div className="flex flex-col gap-1.5 max-h-[42vh] overflow-y-auto no-scrollbar pr-2">
            {experiences.map((exp, expIdx) => (
              <div 
                key={expIdx}
                className="p-2 sm:p-2.5 rounded border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] flex justify-between items-center gap-4 transition-all duration-300 interactive-hover cursor-default"
                onMouseEnter={() => playHapticTick(1300 + expIdx * 50, 0.01)}
              >
                <div className="flex flex-col">
                  <span className="font-display font-black text-[11px] sm:text-xs text-white uppercase tracking-tight">
                    {exp.label}
                  </span>
                  <span className="font-mono text-[7px] text-white/30 tracking-widest mt-0.5">
                    {exp.role}
                  </span>
                </div>
                <span className={`font-mono text-[7px] tracking-widest font-bold px-2 py-0.5 rounded border ${exp.color} whitespace-nowrap`}>
                  {exp.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER HUD ROW */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0 z-10 w-full border-t border-white/5 pt-4">
        
        {/* Left trademark branding */}
        <div className="font-mono text-[9px] sm:text-xs text-white/40 tracking-wider text-left">
          <div>© 2026 PARTH BULBULE</div>
          <div className="mt-1 flex items-center gap-1.5 font-bold text-emerald-400">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            ENGINEERED FOR PREMIUM SCALABILITY
          </div>
        </div>

        {/* Right sliding handle social rings */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 z-10">
          <AnimatePresence>
            {activeSocial !== null && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                className="hidden sm:block px-3 py-1 font-mono text-[10px] tracking-widest text-[#00FF66] border border-[#00FF66]/20 bg-[#00FF66]/5 rounded bg-opacity-10 shadow-[0_0_10px_rgba(0,255,102,0.1)] mr-1"
              >
                {activeSocial}
              </motion.div>
            )}
          </AnimatePresence>

          {socials.map((soc, i) => (
            <motion.a
              key={i}
              href={soc.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                playHapticTick(1300 + i * 80, 0.015);
                setActiveSocial(soc.handle);
              }}
              onMouseLeave={() => setActiveSocial(null)}
              className="interactive-hover w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/10 rounded-full bg-white/[0.01] hover:border-[#00FF66] hover:text-[#00FF66] hover:drop-shadow-[0_0_8px_rgba(0,255,102,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              {soc.icon}
            </motion.a>
          ))}
        </div>

      </div>

    </section>
  );
};
