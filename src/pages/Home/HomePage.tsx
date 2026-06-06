import { motion } from 'framer-motion';
import { HeroTypography } from '../../components/sections/HeroTypography';
import { FloatingStickers } from '../../components/ui/FloatingStickers';
import { AboutMeSection } from '../../components/sections/AboutMeSection';
import { SkillsOverviewSection } from '../../components/sections/SkillsOverviewSection';
import { FeaturedProjectsSection } from '../../components/sections/FeaturedProjectsSection';
import { SocialLinksSection } from '../../components/sections/SocialLinksSection';
import { NavigationalOSPortal } from '../../components/navigation/NavigationalOSPortal';

import { navigateWithTransition } from '../../utils/SystemNavigator';

export const HomePage = () => {
  const handleNavigate = (href: string) => {
    navigateWithTransition(href);
  };

  return (
    <motion.section
      id="landing-scroll-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="landing-scroll-shell w-screen h-screen overflow-y-auto relative scroll-smooth bg-transparent select-none no-scrollbar transform-gpu"
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      {/* SCREEN 1: HERO VIEWPORT PLAYGROUND */}
      <div className="landing-hero-stage w-full relative flex flex-col justify-center items-center overflow-hidden">
        {/* Centered Editorial Headline */}
        <HeroTypography />

        {/* Zero-Gravity Draggable Sticker Fragments */}
        <FloatingStickers />

        {/* Dynamic Drag/Scroll Prompt Indicator - Scrolls down to about-me-section */}
        <div
          onClick={() => {
            const el = document.getElementById('about-me-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="landing-scroll-prompt absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-45 z-30 select-none cursor-pointer hover:opacity-90 transition-all pointer-events-auto interactive-hover"
        >
          <span className="font-mono text-[9px] tracking-[0.22em] text-black uppercase font-bold">
            EXPLORE PORTFOLIO
          </span>
          <div className="w-4 h-6 border border-black rounded-full flex justify-center p-1">
            <span className="w-1 h-1 bg-black rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <AboutMeSection />

      {/* SKILLS OVERVIEW SECTION */}
      <SkillsOverviewSection />

      {/* FEATURED PROJECTS SECTION */}
      <FeaturedProjectsSection />

      {/* SOCIAL LINKS SECTION */}
      <SocialLinksSection />

      {/* NAVIGATIONAL OS PORTAL HUB */}
      <NavigationalOSPortal onNavigate={handleNavigate} />

      {/* Telemetry Divider grid line */}
      <div className="landing-telemetry-divider w-full flex items-center justify-between px-8 sm:px-12 select-none mt-10 mb-4 bg-transparent">
        <span className="font-mono text-[7px] sm:text-[8px] text-black/40 tracking-widest">// ROOT_SYSTEM_FLOW_07</span>
        <div className="flex-1 h-[1px] bg-black/10 mx-6 border-dashed border-t" />
        <span className="font-mono text-[7px] sm:text-[8px] text-black/40 tracking-widest">LATENCY: NOMINAL // STATE: ACTIVE</span>
      </div>

      {/* Landing Page Editorial Footer Row */}
      <motion.div
        id="landing-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="landing-footer-row w-full grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center py-10 pb-16 px-8 sm:px-12 border-t border-black/5 bg-[#EFE5E0]/40 backdrop-blur-sm z-20 font-mono text-[9px] sm:text-xs text-black/50 select-none gap-3 sm:gap-0"
      >
        <div className="text-center sm:text-left sm:justify-self-start font-bold uppercase tracking-wider">
          PARTH BULBULE &mdash; 2026
        </div>
        <div className="text-center sm:justify-self-center font-bold uppercase tracking-wider text-[#FF3E6C]">
          ACTIVE VERIFIED SYSTEM NODE
        </div>
        <div className="text-center sm:text-right sm:justify-self-end font-bold uppercase tracking-wider">
          BASED IN INDIA
        </div>
      </motion.div>
    </motion.section>
  );
};
