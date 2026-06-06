import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HeroTypography = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const firstRowLetters = containerRef.current.querySelectorAll('.row-1 .letter');
    const secondRowLetters = containerRef.current.querySelectorAll('.row-2 .letter');
    const scriptLetters = containerRef.current.querySelectorAll('.script-char');
    const bgDepthText = containerRef.current.querySelector('.bg-depth-text');

    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.6 } });

    // Initial state
    gsap.set([firstRowLetters, secondRowLetters], { y: "110%", rotateX: 20 });
    gsap.set(scriptLetters, { scale: 0, opacity: 0, rotate: -40 });
    gsap.set(bgDepthText, { opacity: 0, scale: 0.96 });

    // Reveal stagger timeline
    tl.to(bgDepthText, {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: "power3.out",
      delay: 0.6
    })
    .to(firstRowLetters, {
      y: "0%",
      rotateX: 0,
      stagger: 0.08
    }, "-=1.4")
    .to(secondRowLetters, {
      y: "0%",
      rotateX: 0,
      stagger: 0.08
    }, "-=1.2")
    .to(scriptLetters, {
      scale: 1,
      opacity: 1,
      rotate: (i) => i === 0 ? 12 : -10,
      duration: 1.3,
      stagger: 0.15,
      ease: "elastic.out(1, 0.4)"
    }, "-=0.6");

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10 w-full h-full"
    >
      {/* Subtle oversized gold outlined depth text in the background */}
      <div className="bg-depth-text absolute font-display font-extrabold uppercase text-[16vw] sm:text-[14vw] lg:text-[11vw] text-stroke-gold select-none pointer-events-none -z-10 leading-none translate-y-[-0.24em] select-none opacity-0">
        CREATIVE
      </div>

      <div className="flex flex-col text-center tracking-tighter text-black select-none leading-[0.82] lg:leading-[0.8] translate-y-[-2vh]">
        
        {/* Row 1: PARTH (with script H in neon-green) */}
        <h1 className="row-1 flex justify-center text-[11vw] sm:text-[9vw] lg:text-[6.2vw] font-display font-extrabold gap-[0.03em] m-0 p-0">
          {/* P */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">P</span>
          </span>
          {/* A */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">A</span>
          </span>
          {/* R */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">R</span>
          </span>
          {/* T */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">T</span>
          </span>
          {/* Script H in neon green */}
          <span className="inline-block relative overflow-visible h-[1.15em] leading-none px-[0.04em]">
            <span className="letter opacity-0 select-none">H</span>
            <span 
              className="script-char absolute inset-0 flex items-center justify-center font-script text-emerald-400 text-[1.8em] sm:text-[1.95em] font-normal leading-none pointer-events-none select-none translate-y-[-0.12em] rotate-[12deg] drop-shadow-[0_0_20px_rgba(16,185,129,0.85)] animate-pulse"
              style={{ fontFamily: "'Reenie Beanie', cursive" }}
            >
              h
            </span>
          </span>
        </h1>

        {/* Row 2: BULBULE (with script B in fuchsia/purple) */}
        <h2 className="row-2 flex justify-center text-[11vw] sm:text-[9vw] lg:text-[6.2vw] font-display font-extrabold gap-[0.03em] m-0 p-0 mt-[-0.12em] sm:mt-[-0.1em]">
          {/* Script B in fuchsia/purple */}
          <span className="inline-block relative overflow-visible h-[1.15em] leading-none px-[0.04em]">
            <span className="letter opacity-0 select-none">B</span>
            <span 
              className="script-char absolute inset-0 flex items-center justify-center font-script text-fuchsia-400 text-[1.8em] sm:text-[1.95em] font-normal leading-none pointer-events-none select-none translate-y-[-0.12em] rotate-[-10deg] drop-shadow-[0_0_20px_rgba(240,119,252,0.85)] animate-pulse"
              style={{ fontFamily: "'Reenie Beanie', cursive" }}
            >
              b
            </span>
          </span>

          {/* U */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">U</span>
          </span>
          {/* L */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">L</span>
          </span>
          {/* B */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">B</span>
          </span>
          {/* U */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">U</span>
          </span>
          {/* L */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">L</span>
          </span>
          {/* E */}
          <span className="inline-block overflow-hidden h-[1.15em] leading-none">
            <span className="letter inline-block transform-gpu">E</span>
          </span>
        </h2>

      </div>
    </div>
  );
};
