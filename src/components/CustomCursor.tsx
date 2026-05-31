import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Apply class to HTML body to enable custom cursors (hiding standard pointer)
    document.documentElement.classList.add('custom-cursor-active');

    // Make elements visible on first interaction to avoid layout flicker
    gsap.set([cursor, ring], { opacity: 1 });

    // GSAP quickTo setters for high performance mouse tracking
    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.08, ease: "power2.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.08, ease: "power2.out" });
    
    const ringX = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      cursorX(e.clientX);
      cursorY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Event delegation for hover states
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('.interactive-hover');
      
      if (interactive) {
        // Subtle magnetic pull trigger
        const isMagnetic = interactive.classList.contains('magnetic');
        
        gsap.to(ring, { 
          scale: isMagnetic ? 2.5 : 1.8, 
          borderColor: '#00FF66', 
          backgroundColor: 'rgba(0, 255, 102, 0.06)', 
          borderWidth: '2px',
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(cursor, { 
          scale: 0, 
          opacity: 0,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('.interactive-hover');
      
      if (interactive) {
        gsap.to(ring, { 
          scale: 1, 
          borderColor: '#000000', 
          backgroundColor: 'transparent', 
          borderWidth: '1px',
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(cursor, { 
          scale: 1, 
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        id="custom-dot"
        className="fixed w-2.5 h-2.5 bg-black rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden lg:block opacity-0"
      />
      <div 
        ref={ringRef} 
        id="custom-ring"
        className="fixed w-11 h-11 border border-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block opacity-0"
      />
    </>
  );
};
