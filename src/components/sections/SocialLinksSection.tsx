import { motion } from 'framer-motion';
import { playClickTick, playUnlockSuccess } from '../../utils/SoundManager';
import { Github, Linkedin, Instagram, Mail, FileText } from 'lucide-react';
import gsap from 'gsap';
import { type MouseEvent as ReactMouseEvent } from 'react';

const socials = [
  { 
    name: 'GitHub', 
    handle: '@Parthbo7', 
    href: 'https://github.com/Parthbo7', 
    icon: Github,
    color: 'hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]' 
  },
  { 
    name: 'LinkedIn', 
    handle: '/in/parth-bulbule', 
    href: 'https://www.linkedin.com/in/parth-bulbule/', 
    icon: Linkedin,
    color: 'hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.18)]' 
  },
  { 
    name: 'Instagram', 
    handle: '@parthb_o7', 
    href: 'https://www.instagram.com/parthb_o7', 
    icon: Instagram,
    color: 'hover:border-pink-400 hover:text-pink-400 hover:shadow-[0_0_20px_rgba(244,114,182,0.18)]' 
  },
  { 
    name: 'Email', 
    handle: 'contact@parth.dev', 
    href: 'mailto:contact@parth.dev', 
    icon: Mail,
    color: 'hover:border-emerald-400 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.18)]' 
  },
  { 
    name: 'Resume', 
    handle: 'parth_resume.pdf', 
    href: '/resume.pdf', 
    icon: FileText,
    color: 'hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.18)]' 
  }
];

export const SocialLinksSection = () => {
  const handleMagneticMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    gsap.to(target, {
      x: x * 0.1,
      y: y * 0.18,
      scale: 1.025,
      duration: 0.35,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const handleMagneticLeave = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: 'elastic.out(1, 0.45)',
      overwrite: 'auto',
    });
  };

  return (
    <section 
      id="social-links-section"
      className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#0a0a0b] text-white relative flex flex-col justify-center items-center overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none custom-grid-lines opacity-[0.03]" />

      {/* Segment Header */}
      <div className="w-full max-w-5xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-4 mb-3 opacity-45">
          <div className="h-[1.5px] w-12 bg-gradient-to-r from-yellow-500 to-transparent" />
          <span className="font-mono text-[9px] text-yellow-400 font-extrabold tracking-[0.28em] uppercase">SEC_04 // COMMUNICATIONS</span>
          <div className="h-[1.5px] w-12 bg-gradient-to-l from-yellow-500 to-transparent" />
        </div>
        <h2 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.85] tracking-tighter uppercase select-none text-left">
          SOCIAL LINKS
        </h2>
      </div>

      {/* Grid of Social Channels */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 items-stretch">
        {socials.map((social, idx) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              onMouseEnter={() => {
                playClickTick(1100 + idx * 80, 0.02);
              }}
              onClick={() => playUnlockSuccess()}
              className={`group p-6 bg-white/[0.015] border border-white/[0.08] rounded-sm flex flex-col justify-between items-center text-center gap-6 transition-all duration-300 cursor-pointer ${social.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              {/* Icon Container */}
              <div className="p-3 border border-white/10 rounded-full bg-white/[0.01] group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Icon size={20} />
              </div>

              {/* Title & handle details */}
              <div className="flex flex-col gap-1">
                <h4 className="font-display font-black text-lg uppercase tracking-tight text-white group-hover:text-inherit">
                  {social.name}
                </h4>
                <p className="font-mono text-[9px] text-white/30 group-hover:text-white/60 transition-colors">
                  {social.handle}
                </p>
              </div>

              <span className="font-mono text-[8px] text-white/10 uppercase tracking-widest group-hover:text-inherit">
                // CONNECT
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
