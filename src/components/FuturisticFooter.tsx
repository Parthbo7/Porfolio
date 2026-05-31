import { useEffect, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowUpRight,
  Braces,
  Disc,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Twitter,
} from 'lucide-react';

type SkillSide = 'left' | 'right';

interface SocialLink {
  name: string;
  handle: string;
  href: string;
  icon: ReactNode;
}

const leftSkills = [
  'Python',
  'React',
  'GSAP',
  'Three.js',
  'WebGL',
  'Framer Motion',
  'Blender',
  'UI/UX',
  'Creative Coding',
  'Motion Design',
];

const rightSkills = [
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'MongoDB',
  'Firebase',
  'Figma',
  'Framer',
  'AI Tools',
  'Prompt Engineering',
];

const socials: SocialLink[] = [
  { name: 'LinkedIn', handle: '/in/parth-bulbule', href: 'https://www.linkedin.com/in/parth-bulbule/', icon: <Linkedin size={15} /> },
  { name: 'GitHub', handle: '@Parthbo7', href: 'https://github.com/Parthbo7', icon: <Github size={15} /> },
  { name: 'Instagram', handle: '@parthb_o7', href: 'https://www.instagram.com/parthb_o7', icon: <Instagram size={15} /> },
  { name: 'Twitter/X', handle: '@BulbuleParth', href: 'https://x.com/BulbuleParth', icon: <Twitter size={15} /> },
  { name: 'Discord', handle: 'parth.system', href: 'https://discord.com', icon: <MessageCircle size={15} /> },
  { name: 'Gmail', handle: 'contact@parth.dev', href: 'mailto:contact@parth.dev', icon: <Mail size={15} /> },
];

const accentColors = ['#00FF66', '#FF3E6C', '#D4AF37', '#8DEBFF'];

const playSoftTick = (freq = 1400) => {
  try {
    const audioWindow = window as Window & typeof globalThis & {
      webkitAudioContext?: typeof AudioContext;
    };
    const AudioContextClass = window.AudioContext || audioWindow.webkitAudioContext;
    if (!AudioContextClass) return;

    const audioCtx = new AudioContextClass();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(360, audioCtx.currentTime + 0.03);

    gain.gain.setValueAtTime(0.006, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch {
    // Audio context can be blocked until user interaction.
  }
};

export const FuturisticFooter = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeSkill, setActiveSkill] = useState('Python');
  const [activeSocial, setActiveSocial] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parallaxItems = container.querySelectorAll<HTMLElement>('.footer-parallax');
    const floatingItems = container.querySelectorAll<HTMLElement>('.footer-float');

    floatingItems.forEach((item, index) => {
      gsap.to(item, {
        y: index % 2 === 0 ? -10 : 10,
        rotate: index % 2 === 0 ? 1.5 : -1.5,
        duration: 4.8 + index * 0.35,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    const onMouseMove = (event: globalThis.MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      container.style.setProperty('--footer-glow-x', `${x}px`);
      container.style.setProperty('--footer-glow-y', `${y}px`);

      const moveX = (x / rect.width - 0.5) * 18;
      const moveY = (y / rect.height - 0.5) * 18;

      parallaxItems.forEach((item) => {
        const depth = Number(item.dataset.depth || 1);
        gsap.to(item, {
          x: moveX * depth,
          y: moveY * depth,
          duration: 0.9,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    };

    container.addEventListener('mousemove', onMouseMove);
    return () => container.removeEventListener('mousemove', onMouseMove);
  }, []);

  const handleMagneticMove = (event: ReactMouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    gsap.to(target, {
      x: x * 0.06,
      y: y * 0.14,
      duration: 0.35,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const handleMagneticLeave = (event: ReactMouseEvent<HTMLElement>) => {
    gsap.to(event.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.45)',
      overwrite: 'auto',
    });
  };

  const openMenu = () => {
    playSoftTick(1800);
    window.dispatchEvent(new Event('open-navigation-menu'));
  };

  const renderSkill = (skill: string, index: number, side: SkillSide) => {
    const accent = accentColors[index % accentColors.length];
    const number = side === 'left' ? index + 1 : index + 11;
    const isActive = activeSkill === skill;
    const isLongSkill = skill.length > 15;

    return (
      <motion.button
        type="button"
        key={skill}
        onMouseMove={handleMagneticMove}
        onMouseLeave={handleMagneticLeave}
        onMouseEnter={() => {
          setActiveSkill(skill);
          playSoftTick(1180 + index * 48);
        }}
        className="footer-skill-row group relative flex w-full items-center justify-between overflow-hidden border-b border-white/[0.08] py-1 text-left outline-none transition-colors duration-300 hover:border-white/25 sm:py-1.5"
        style={{ '--skill-accent': accent } as CSSProperties}
        whileHover={{ scale: 1.018 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="font-mono text-[8px] font-bold tracking-[0.28em] text-white/22 transition-colors duration-300 group-hover:text-[var(--skill-accent)]">
            {String(number).padStart(2, '0')}
          </span>
          <span
            className={`footer-skill-label whitespace-nowrap font-display font-black uppercase leading-none tracking-[0em] transition-all duration-300 ${
              isLongSkill
                ? 'text-[0.92rem] sm:text-[1.08rem] lg:text-[1.22rem] xl:text-[1.34rem]'
                : 'text-[1.14rem] sm:text-[1.28rem] lg:text-[1.45rem] xl:text-[1.62rem]'
            } ${
              isActive ? 'text-white' : 'text-white/72'
            } group-hover:text-white group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]`}
          >
            {skill}
          </span>
        </span>
        <ArrowUpRight
          size={18}
          className="mr-1 shrink-0 text-white/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--skill-accent)]"
        />
      </motion.button>
    );
  };

  return (
    <section
      ref={containerRef}
      id="skill-portal-footer"
      className="footer-portal no-scrollbar relative h-full min-h-screen w-full overflow-y-auto bg-[#050505] px-6 py-5 text-white sm:px-10 sm:py-8 lg:overflow-hidden lg:px-14 lg:py-10"
    >
      <div className="footer-grid-lines absolute inset-0 pointer-events-none" />
      <div className="footer-noise absolute inset-0 pointer-events-none" />
      <div className="footer-cursor-glow pointer-events-none absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="footer-parallax pointer-events-none absolute right-[-1.5rem] top-[13%] hidden select-none text-right lg:block" data-depth="0.36">
        <div className="font-display text-[6.75rem] font-black uppercase leading-[0.78] tracking-[0em] text-white/[0.045] xl:text-[8rem]">
          <div>SKILL</div>
          <div>STACK</div>
          <div>INFO</div>
        </div>
      </div>
      <div className="footer-parallax pointer-events-none absolute right-[8%] bottom-[17%] hidden select-none font-display text-[10rem] font-black leading-none tracking-[0em] text-white/[0.035] lg:block xl:text-[12rem]" data-depth="0.18">
        02
      </div>

      <div className="relative z-10 grid h-auto min-h-[calc(100vh-2.5rem)] grid-rows-[auto_auto_auto] gap-5 sm:min-h-[calc(100vh-4rem)] lg:h-full lg:min-h-[calc(100vh-5rem)] lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-7">
        <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-white/[0.08] pb-4">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-white/62 sm:text-[10px]">
            CREATIVE DEVELOPER
          </div>

          <motion.button
            type="button"
            onClick={() => {
              playSoftTick(2050);
              window.location.hash = '#';
            }}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="footer-float interactive-hover grid h-10 w-10 place-items-center rounded-full border border-white/14 bg-white/[0.025] font-mono text-[10px] font-black tracking-[0.12em] text-white shadow-[0_0_30px_rgba(0,255,102,0.06)] transition-all duration-300 hover:border-[#00FF66]/60 hover:text-[#00FF66]"
            aria-label="Return home"
          >
            PB
          </motion.button>

          <button
            type="button"
            onClick={openMenu}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="interactive-hover justify-self-end border border-white/12 bg-white/[0.02] px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-white/72 transition-all duration-300 hover:border-[#FF3E6C]/60 hover:text-white hover:shadow-[0_0_22px_rgba(255,62,108,0.18)] sm:px-4"
          >
            <span className="flex items-center gap-2">
              MENU <Menu size={13} />
            </span>
          </button>
        </header>

        <main className="grid min-h-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="grid min-h-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="footer-parallax min-w-0" data-depth="-0.12">
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-2 font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#00FF66]">
                <span>// LEFT STACK</span>
                <Braces size={13} />
              </div>
              <div>{leftSkills.map((skill, index) => renderSkill(skill, index, 'left'))}</div>
            </div>

            <div className="footer-parallax min-w-0" data-depth="0.12">
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-2 font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                <span>// RIGHT STACK</span>
                <Sparkles size={13} />
              </div>
              <div>{rightSkills.map((skill, index) => renderSkill(skill, index, 'right'))}</div>
            </div>
          </div>

          <aside className="footer-parallax relative hidden h-full min-h-[26rem] border-l border-white/[0.08] pl-6 lg:flex lg:flex-col lg:justify-between" data-depth="0.24">
            <div className="space-y-4">
              <div className="font-mono text-[8px] font-bold uppercase tracking-[0.28em] text-white/35">
                // ACTIVE HOVER SIGNAL
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill}
                  initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                className="footer-float border border-white/[0.09] bg-white/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="h-2 w-2 rounded-full bg-[#00FF66] shadow-[0_0_16px_rgba(0,255,102,0.8)]" />
                    <Disc size={15} className="text-white/30" />
                  </div>
                  <div className="font-display text-3xl font-black uppercase leading-none tracking-[0em] text-white">
                    {activeSkill}
                  </div>
                  <div className="mt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/36">
                    Signal isolated. Motion-ready interface skill archived in Parth OS.
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-3 font-mono text-[8px] uppercase tracking-[0.24em] text-white/32">
              <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span>Latency</span>
                <span className="text-[#00FF66]">Nominal</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Archive</span>
                <span className="text-white/60">Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mode</span>
                <span className="text-[#FF3E6C]">Anti-gravity</span>
              </div>
            </div>
          </aside>
        </main>

        <footer className="footer-bottom-row grid gap-4 border-t border-white/[0.08] pt-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/42 sm:text-[10px]">
            <div>&copy; 2026 PARTH BULBULE</div>
            <div className="mt-1 font-bold text-white/62">ENGINEERED FOR PREMIUM SCALABILITY</div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 md:justify-end">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => {
                  setActiveSocial(social.handle);
                  playSoftTick(1280 + index * 65);
                }}
                onMouseLeave={(event) => {
                  setActiveSocial(null);
                  handleMagneticLeave(event);
                }}
                onMouseMove={handleMagneticMove}
                className="group interactive-hover flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.015] p-0.5 text-white/64 transition-all duration-300 hover:border-[#00FF66]/70 hover:text-[#00FF66] hover:shadow-[0_0_22px_rgba(0,255,102,0.16)] sm:p-1"
                aria-label={social.name}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="footer-social-icon grid h-8 w-8 place-items-center rounded-full border border-white/[0.12] transition-colors duration-300 group-hover:border-[#00FF66]/55 sm:h-9 sm:w-9">
                  {social.icon}
                </span>
                <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-[8px] font-bold uppercase tracking-[0.2em] opacity-0 transition-all duration-300 group-hover:max-w-[11.5rem] group-hover:pr-3 group-hover:opacity-100">
                  {social.handle}
                </span>
              </motion.a>
            ))}
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {activeSocial && (
          <motion.div
            className="pointer-events-none absolute bottom-[5.4rem] right-6 hidden border border-[#00FF66]/20 bg-[#00FF66]/[0.045] px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#00FF66] shadow-[0_0_24px_rgba(0,255,102,0.1)] lg:block"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            {activeSocial}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
