import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';

import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { FloatingStickers } from './components/FloatingStickers';
import { HeroTypography } from './components/HeroTypography';
import { MinimalUI } from './components/MinimalUI';
import { VaultPortal } from './components/VaultPortal';
import { ProjectsPage } from './components/ProjectsPage';
import { ExperiencePage } from './components/ExperiencePage';
import { FuturisticFooter } from './components/FuturisticFooter';
import { ConnectPage } from './components/ConnectPage';
import { TransitionOverlay } from './components/TransitionOverlay';

// Expanded homepage sections
import { AboutMeSection } from './components/AboutMeSection';
import { SkillsOverviewSection } from './components/SkillsOverviewSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { SocialLinksSection } from './components/SocialLinksSection';
import { NavigationalOSPortal } from './components/NavigationalOSPortal';

// Dedicated subpages
import { EducationPage } from './components/EducationPage';
import { CertificationsPage } from './components/CertificationsPage';
import { ResearchPage } from './components/ResearchPage';
import { CampusConnectSpotlight } from './components/CampusConnectSpotlight';
import { GalleryPage } from './components/GalleryPage';
import { ProfilePage } from './components/ProfilePage';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  
  type SectionType = 'hero' | 'projects' | 'experience' | 'skills' | 'education' | 'certifications' | 'research' | 'campusconnect' | 'gallery' | 'contact' | 'footer' | 'profile' | 'connect' | 'hackathons';
  type TargetType = SectionType | 'vault';

  const [activeSection, setActiveSection] = useState<SectionType>('hero');
  const [targetSection, setTargetSection] = useState<TargetType>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitioningRef = useRef(false);
  const activeSectionRef = useRef<SectionType>('hero');

  useEffect(() => {
    transitioningRef.current = isTransitioning;
    activeSectionRef.current = activeSection;
  }, [isTransitioning, activeSection]);

  const triggerTransition = (section: SectionType) => {
    if (section === activeSectionRef.current) return;
    if (transitioningRef.current) return;

    setTargetSection(section);
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSection(section);
    }, 1100); // Switch components halfway through

    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  // Exclusive dark vault cinematic load portal
  const triggerVaultTransition = () => {
    if (transitioningRef.current) return;

    setTargetSection('vault');
    setIsTransitioning(true);

    setTimeout(() => {
      setIsVaultOpen(true); // reveal vault portal
    }, 1300); // mount halfway

    setTimeout(() => {
      setIsTransitioning(false);
    }, 2300);
  };

  useEffect(() => {
    // Reveal main interface smoothly on load
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  // Set up mysterious keyboard key sequence listener & custom window event listener
  useEffect(() => {
    let keyBuffer: string[] = [];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keyBuffer.push(e.key.toLowerCase());
      if (keyBuffer.length > 12) {
        keyBuffer.shift();
      }
      
      const keystrokeSequence = keyBuffer.join('');
      if (keystrokeSequence.includes('vault') || keystrokeSequence.includes('secret')) {
        window.dispatchEvent(new Event('trigger-vault-decryption'));
        keyBuffer = []; // reset key logs buffer
      }
    };

    const handleEventTrigger = () => {
      triggerVaultTransition();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('trigger-vault-decryption', handleEventTrigger);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('trigger-vault-decryption', handleEventTrigger);
    };
  }, []);



  // URL Path & Hash Sync for OS state router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      
      // If there is an active hash, it takes routing precedence for menu navigation
      if (hash && hash !== '#') {
        if (hash.startsWith('#projects/hackathons') || hash.startsWith('#hackathons')) {
          triggerTransition('projects');
        } else if (hash.startsWith('#projects/campusconnect') || hash.startsWith('#campusconnect')) {
          triggerTransition('campusconnect');
        } else if (hash.startsWith('#experiments') || hash.startsWith('#projects') || hash.startsWith('#projects-list')) {
          triggerTransition('projects');
        } else if (hash.startsWith('#experience')) {
          triggerTransition('experience');
        } else if (hash === '#stack' || hash === '#skills') {
          triggerTransition('skills');
        } else if (hash === '#education') {
          triggerTransition('education');
        } else if (hash === '#certifications') {
          triggerTransition('certifications');
        } else if (hash === '#research') {
          triggerTransition('research');
        } else if (hash === '#gallery') {
          triggerTransition('gallery');
        } else if (hash === '#profile' || hash === '#about') {
          triggerTransition('profile');
        } else if (hash === '#contact') {
          triggerTransition('contact');
        } else {
          triggerTransition('hero');
        }
      } else {
        // Fall back to pathname-based routing for clean URLs and direct loads
        if (path.startsWith('/projects/hackathons') || path.startsWith('/hackathons')) {
          triggerTransition('projects');
        } else if (path.startsWith('/projects/campusconnect') || path.startsWith('/campusconnect')) {
          triggerTransition('campusconnect');
        } else if (path.startsWith('/projects') || path.startsWith('/experiments') || path.startsWith('/projects-list')) {
          triggerTransition('projects');
        } else if (path.startsWith('/experience')) {
          triggerTransition('experience');
        } else if (path === '/stack' || path === '/stack/' || path === '/skills' || path === '/skills/') {
          triggerTransition('skills');
        } else if (path === '/education' || path === '/education/') {
          triggerTransition('education');
        } else if (path === '/certifications' || path === '/certifications/') {
          triggerTransition('certifications');
        } else if (path === '/research' || path === '/research/') {
          triggerTransition('research');
        } else if (path === '/gallery' || path === '/gallery/') {
          triggerTransition('gallery');
        } else if (path === '/profile' || path === '/profile/' || path === '/about' || path === '/about/') {
          triggerTransition('profile');
        } else if (path === '/contact' || path === '/contact/') {
          triggerTransition('contact');
        } else {
          triggerTransition('hero');
        }
      }
    };

    // Initialize state on first load based on direct links
    const initialHash = window.location.hash;
    const initialPath = window.location.pathname;
    
    if (initialHash && initialHash !== '#') {
      if (initialHash.startsWith('#projects/hackathons') || initialHash.startsWith('#hackathons')) {
        setActiveSection('projects');
        setTargetSection('projects');
      } else if (initialHash.startsWith('#projects/campusconnect') || initialHash.startsWith('#campusconnect')) {
        setActiveSection('campusconnect');
        setTargetSection('campusconnect');
      } else if (initialHash.startsWith('#experiments') || initialHash.startsWith('#projects') || initialHash.startsWith('#projects-list')) {
        setActiveSection('projects');
        setTargetSection('projects');
      } else if (initialHash.startsWith('#experience')) {
        setActiveSection('experience');
        setTargetSection('experience');
      } else if (initialHash === '#stack' || initialHash === '#skills') {
        setActiveSection('skills');
        setTargetSection('skills');
      } else if (initialHash === '#education') {
        setActiveSection('education');
        setTargetSection('education');
      } else if (initialHash === '#certifications') {
        setActiveSection('certifications');
        setTargetSection('certifications');
      } else if (initialHash === '#research') {
        setActiveSection('research');
        setTargetSection('research');
      } else if (initialHash === '#gallery') {
        setActiveSection('gallery');
        setTargetSection('gallery');
      } else if (initialHash === '#profile' || initialHash === '#about') {
        setActiveSection('profile');
        setTargetSection('profile');
      } else if (initialHash === '#contact') {
        setActiveSection('contact');
        setTargetSection('contact');
      } else {
        setActiveSection('hero');
        setTargetSection('hero');
      }
    } else {
      if (initialPath.startsWith('/projects/hackathons') || initialPath.startsWith('/hackathons')) {
        setActiveSection('projects');
        setTargetSection('projects');
      } else if (initialPath.startsWith('/projects/campusconnect') || initialPath.startsWith('/campusconnect')) {
        setActiveSection('campusconnect');
        setTargetSection('campusconnect');
      } else if (initialPath.startsWith('/projects') || initialPath.startsWith('/experiments') || initialPath.startsWith('/projects-list')) {
        setActiveSection('projects');
        setTargetSection('projects');
      } else if (initialPath.startsWith('/experience')) {
        setActiveSection('experience');
        setTargetSection('experience');
      } else if (initialPath === '/stack' || initialPath === '/stack/' || initialPath === '/skills' || initialPath === '/skills/') {
        setActiveSection('skills');
        setTargetSection('skills');
      } else if (initialPath === '/education' || initialPath === '/education/') {
        setActiveSection('education');
        setTargetSection('education');
      } else if (initialPath === '/certifications' || initialPath === '/certifications/') {
        setActiveSection('certifications');
        setTargetSection('certifications');
      } else if (initialPath === '/research' || initialPath === '/research/') {
        setActiveSection('research');
        setTargetSection('research');
      } else if (initialPath === '/gallery' || initialPath === '/gallery/') {
        setActiveSection('gallery');
        setTargetSection('gallery');
      } else if (initialPath === '/profile' || initialPath === '/profile/' || initialPath === '/about' || initialPath === '/about/') {
        setActiveSection('profile');
        setTargetSection('profile');
      } else if (initialPath === '/contact' || initialPath === '/contact/') {
        setActiveSection('contact');
        setTargetSection('contact');
      } else {
        setActiveSection('hero');
        setTargetSection('hero');
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  return (
    <>
      {/* Visual background layers */}
      <BackgroundCanvas />
      
      {/* Screen Golden Wireframe Grid Overlay */}
      <GridOverlay />
      
      {/* Moving Organic film grain noise */}
      <div className="grain-overlay" />
      
      {/* Smooth morphing custom cursor pointer */}
      <CustomCursor />
      
      {/* Minimalist Editorial Corner Frame Navigation OS Menu (Persistent HUD) */}
      <MinimalUI activeSection={activeSection} />
      
      {/* State-Controlled Fullscreen OS Node Viewport - GPU Optimized */}
      <div 
        ref={containerRef}
        className="w-screen h-screen overflow-hidden relative bg-[#EFE5E0] select-none no-scrollbar transform-gpu"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section 
              key="hero"
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
                {/* Centered Editorial Oversized Headline (V3 Stack) */}
                <HeroTypography />
                
                {/* Zero-Gravity Draggable Sticker Fragments (V5 Coordinates) */}
                <FloatingStickers />
                
                {/* Dynamic Drag/Scroll Prompt Indicator - Scrolls down to footer */}
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
                  {/* Stylized Computer Mouse wireframe scroll wheel indicator */}
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
              <NavigationalOSPortal onNavigate={(href) => {
                const cleanHash = href.replace('#', '');
                triggerTransition(cleanHash as any);
              }} />

              {/* Telemetry Divider grid line */}
              <div className="landing-telemetry-divider w-full flex items-center justify-between px-8 sm:px-12 select-none mt-10 mb-4 bg-transparent">
                <span className="font-mono text-[7px] sm:text-[8px] text-black/40 tracking-widest">// ROOT_SYSTEM_FLOW_07</span>
                <div className="flex-1 h-[1px] bg-black/10 mx-6 border-dashed border-t" />
                <span className="font-mono text-[7px] sm:text-[8px] text-black/40 tracking-widest">LATENCY: NOMINAL // STATE: ACTIVE</span>
              </div>

              {/* Landing Page Editorial Footer Row (Visible in flow, fully accessible) */}
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
          )}

          {activeSection === 'projects' && (
            <motion.section 
              key="projects"
              id="projects" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-transparent select-none"
            >
              <ProjectsPage />
            </motion.section>
          )}

          {activeSection === 'experience' && (
            <motion.section 
              key="experience"
              id="experience" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-transparent select-none"
            >
              <ExperiencePage />
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section 
              key="skills"
              id="skill-stack"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-[#050505] select-none"
            >
              <FuturisticFooter />
            </motion.section>
          )}

          {activeSection === 'education' && (
            <motion.section 
              key="education"
              id="education" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-transparent select-none"
            >
              <EducationPage onBack={() => triggerTransition('hero')} />
            </motion.section>
          )}

          {activeSection === 'certifications' && (
            <motion.section 
              key="certifications"
              id="certifications" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-transparent select-none"
            >
              <CertificationsPage onBack={() => triggerTransition('hero')} />
            </motion.section>
          )}

          {activeSection === 'research' && (
            <motion.section 
              key="research"
              id="research" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-transparent select-none"
            >
              <ResearchPage onBack={() => triggerTransition('hero')} />
            </motion.section>
          )}

          {activeSection === 'campusconnect' && (
            <motion.section 
              key="campusconnect"
              id="campusconnect" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-transparent select-none"
            >
              <CampusConnectSpotlight onBack={() => triggerTransition('hero')} />
            </motion.section>
          )}

          {activeSection === 'gallery' && (
            <motion.section 
              key="gallery"
              id="gallery" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-transparent select-none"
            >
              <GalleryPage onBack={() => triggerTransition('hero')} />
            </motion.section>
          )}

          {activeSection === 'profile' && (
            <motion.section 
              key="profile"
              id="profile" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden bg-transparent select-none"
            >
              <ProfilePage onBack={() => triggerTransition('hero')} />
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section 
              key="contact"
              id="contact" 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-screen h-screen relative overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-transparent select-none"
            >
              <ConnectPage />
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Cinematic OS loading/telemetry transition overlay */}
      <TransitionOverlay isVisible={isTransitioning} destination={targetSection} />

      {/* Atmospheric Password-Protected Secret Archive Vault */}
      <VaultPortal isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} />
    </>
  );
}

export default App;
