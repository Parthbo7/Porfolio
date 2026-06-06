import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom';

import { CustomCursor } from './components/animations/CustomCursor';
import { GridOverlay } from './components/layout/GridOverlay';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { MinimalUI } from './components/navigation/MinimalUI';
import { VaultPortal } from './components/ui/VaultPortal';
import { TransitionOverlay } from './components/animations/TransitionOverlay';
import { AppRoutes } from './routes/AppRoutes';
import { getSectionName } from './utils/SystemNavigator';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetSection, setTargetSection] = useState<string>('hero');

  const transitioningRef = useRef(false);

  useEffect(() => {
    transitioningRef.current = isTransitioning;
  }, [isTransitioning]);

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

  // Custom navigation event listener with transition screen
  useEffect(() => {
    const handleNavigationTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ path: string; sectionName: string }>;
      const { path, sectionName } = customEvent.detail;
      
      if (transitioningRef.current) return;
      
      setTargetSection(sectionName);
      setIsTransitioning(true);
      
      setTimeout(() => {
        navigate(path);
      }, 1100);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2000);
    };

    window.addEventListener('trigger-sys-navigation', handleNavigationTrigger as EventListener);
    return () => {
      window.removeEventListener('trigger-sys-navigation', handleNavigationTrigger as EventListener);
    };
  }, [navigate]);

  const activeSection = getSectionName(location.pathname);

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
        <AppRoutes />
      </div>

      {/* Cinematic OS loading/telemetry transition overlay */}
      <TransitionOverlay isVisible={isTransitioning} destination={targetSection} />

      {/* Atmospheric Password-Protected Secret Archive Vault */}
      <VaultPortal isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} />
    </>
  );
}

export default App;
