import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const GridOverlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const vLines = containerRef.current.querySelectorAll('.v-line');
    const hLines = containerRef.current.querySelectorAll('.h-line');

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.5 } });

    // Initial state
    gsap.set(vLines, { scaleY: 0, transformOrigin: "top" });
    gsap.set(hLines, { scaleX: 0, transformOrigin: "left" });

    // Animate lines
    tl.to(vLines, { 
      scaleY: 1, 
      stagger: {
        amount: 0.8,
        from: "center"
      }
    })
    .to(hLines, { 
      scaleX: 1, 
      stagger: {
        amount: 0.6,
        from: "center"
      }
    }, "-=1.2");

  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-10 overflow-hidden"
    >
      {/* 8 Columns -> 7 Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-between px-0">
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
        <div className="w-[1px] h-full bg-yellow-600/10 v-line" />
      </div>

      {/* 6 Rows -> 5 Horizontal Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-0">
        <div className="h-[1px] w-full bg-yellow-600/10 h-line" />
        <div className="h-[1px] w-full bg-yellow-600/10 h-line" />
        <div className="h-[1px] w-full bg-yellow-600/10 h-line" />
        <div className="h-[1px] w-full bg-yellow-600/10 h-line" />
        <div className="h-[1px] w-full bg-yellow-600/10 h-line" />
        <div className="h-[1px] w-full bg-yellow-600/10 h-line" />
        <div className="h-[1px] w-full bg-yellow-600/10 h-line" />
      </div>
    </div>
  );
};
