import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface StickerData {
  id: string;
  text: string;
  highlightLetter: string;
  x: string;
  y: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  rotate: number;
  scale: number;
  parallaxSpeed: number;
  zIndex: number;
}

// dynamically generate tactile ticks
const playTick = (freq = 1600) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const audioCtx = new AudioContextClass();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, audioCtx.currentTime + 0.035);
    
    gain.gain.setValueAtTime(0.007, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.035);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (e) {}
};

export const FloatingStickers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const stickers: StickerData[] = [
    // --- TECH STACK STICKERS ---
    { id: 'st-1', text: 'PYTHON DEV', highlightLetter: 'P', x: '12%', y: '16%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: -8, scale: 0.9, parallaxSpeed: 0.04, zIndex: 35 },
    { id: 'st-2', text: 'FULL STACK', highlightLetter: 'S', x: '14%', y: '30%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: 10, scale: 1.05, parallaxSpeed: -0.03, zIndex: 36 },
    { id: 'st-3', text: 'AI ENTHUSIAST', highlightLetter: 'A', x: '22%', y: '73%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: -6, scale: 1.1, parallaxSpeed: 0.035, zIndex: 34 },
    { id: 'st-4', text: 'CREATIVE CODER', highlightLetter: 'C', x: '82%', y: '24%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: 12, scale: 1.0, parallaxSpeed: -0.02, zIndex: 35 },
    { id: 'st-5', text: 'WEB DESIGNER', highlightLetter: 'D', x: '76%', y: '16%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: -10, scale: 0.85, parallaxSpeed: 0.045, zIndex: 36 },
    { id: 'st-6', text: 'APP BUILDER', highlightLetter: 'B', x: '84%', y: '42%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: 7, scale: 1.05, parallaxSpeed: -0.03, zIndex: 33 },
    { id: 'st-7', text: 'HACKATHON MODE', highlightLetter: 'H', x: '10%', y: '61%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: -9, scale: 1.1, parallaxSpeed: 0.035, zIndex: 35 },
    { id: 'st-8', text: 'TERMINAL ADDICT', highlightLetter: 'T', x: '78%', y: '70%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: 14, scale: 0.95, parallaxSpeed: -0.04, zIndex: 37 },

    // --- PERSONALITY STICKERS ---
    { id: 'st-9', text: 'FRIENDLY', highlightLetter: 'F', x: '7%', y: '24%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: -15, scale: 0.8, parallaxSpeed: 0.025, zIndex: 32 },
    { id: 'st-10', text: 'ACTIVE', highlightLetter: 'A', x: '50%', y: '75%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: 8, scale: 0.85, parallaxSpeed: 0.03, zIndex: 32 },
    { id: 'st-11', text: 'CHAOTIC', highlightLetter: 'C', x: '28%', y: '67%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: -12, scale: 1.0, parallaxSpeed: -0.035, zIndex: 32 },
    { id: 'st-12', text: 'OVERTHINKER', highlightLetter: 'O', x: '7%', y: '52%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: -8, scale: 0.9, parallaxSpeed: 0.04, zIndex: 32 },
    { id: 'st-13', text: 'BUILT DIFFERENT', highlightLetter: 'D', x: '42%', y: '65%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: 12, scale: 1.15, parallaxSpeed: -0.02, zIndex: 33 },
    { id: 'st-14', text: 'MUSIC = THERAPY', highlightLetter: 'M', x: '64%', y: '74%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: -6, scale: 1.0, parallaxSpeed: 0.035, zIndex: 33 },
    { id: 'st-15', text: 'LOWKEY GENIUS', highlightLetter: 'G', x: '70%', y: '25%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: 10, scale: 0.95, parallaxSpeed: -0.04, zIndex: 32 },

    // --- COMMUNITY STICKERS ---
    { id: 'st-16', text: 'GDG COORDINATOR', highlightLetter: 'G', x: '32%', y: '14%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: -7, scale: 1.1, parallaxSpeed: 0.03, zIndex: 33 },
    { id: 'st-17', text: 'GDG DESIGN COORDINATOR', highlightLetter: 'D', x: '58%', y: '13%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: 6, scale: 1.02, parallaxSpeed: -0.025, zIndex: 32 },
    { id: 'st-18', text: 'CAMPUSCONNECT', highlightLetter: 'C', x: '81%', y: '60%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: 9, scale: 1.04, parallaxSpeed: 0.04, zIndex: 33 },
    { id: 'st-19', text: 'LINKEDIN HANDLER', highlightLetter: 'L', x: '14%', y: '13%', bgColor: 'bg-black', borderColor: 'border-white', textColor: 'text-white', rotate: -5, scale: 0.95, parallaxSpeed: -0.03, zIndex: 32 },
    { id: 'st-20', text: 'CREATIVE LEAD', highlightLetter: 'L', x: '68%', y: '67%', bgColor: 'bg-white', borderColor: 'border-black', textColor: 'text-black', rotate: -8, scale: 0.88, parallaxSpeed: 0.02, zIndex: 32 },
    
    // --- SECURE VAULT GATEWAY STICKER (EASTER EGG) ---
    { id: 'st-vault', text: '🔒 LOCKBOX_07', highlightLetter: '0', x: '84%', y: '16%', bgColor: 'bg-[#050505]', borderColor: 'border-[#D4AF37]', textColor: 'text-[#D4AF37]', rotate: 12, scale: 1.3, parallaxSpeed: 0.04, zIndex: 38 },
  ];

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);

    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.sticker-card');

    // 1. ISOLATED FLOATING DRIFT (Nesting fix)
    cards.forEach((card, idx) => {
      const innerDriftEl = card.querySelector('.inner-drift');
      if (innerDriftEl) {
        gsap.to(innerDriftEl, {
          y: 15,
          x: -8,
          rotation: 4,
          duration: 4.5 + (idx % 3),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });

    // 2. ISOLATED MOUSE PHYSICS
    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - window.innerWidth / 2;
      const mouseY = e.clientY - window.innerHeight / 2;

      cards.forEach((card) => {
        const speed = parseFloat(card.getAttribute('data-parallax') || '0.03');
        const rect = card.getBoundingClientRect();
        
        const cardCX = rect.left + rect.width / 2;
        const cardCY = rect.top + rect.height / 2;
        
        const dx = cardCX - e.clientX;
        const dy = cardCY - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let repelX = 0;
        let repelY = 0;
        
        // Repulsion radius trigger: within 160px
        if (distance < 160) {
          const force = (160 - distance) / 160;
          const angle = Math.atan2(dy, dx);
          // Controlled micro-repulsion push vector
          repelX = Math.cos(angle) * force * 45;
          repelY = Math.sin(angle) * force * 45;
        }

        gsap.to(card, {
          x: mouseX * speed + repelX,
          y: mouseY * speed + repelY,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const renderStickerText = (st: StickerData, index: number) => {
    const highlightIdx = st.text.indexOf(st.highlightLetter);
    const accentColors = [
      'text-[#00FF66] drop-shadow-[0_0_5px_rgba(0,255,102,0.5)]', 
      'text-yellow-300 drop-shadow-[0_0_5px_rgba(253,224,71,0.5)]', 
      'text-fuchsia-400 drop-shadow-[0_0_5px_rgba(232,121,249,0.5)]', 
      'text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]'
    ];
    const accentColor = accentColors[index % accentColors.length];

    return st.text.split('').map((char, idx) => {
      if (idx === highlightIdx) {
        return (
          <span key={idx} className={`font-black tracking-tight ${accentColor}`}>
            {char}
          </span>
        );
      }
      return <span key={idx}>{char}</span>;
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible"
    >
      {stickers.map((st, i) => (
        <motion.div
          key={st.id}
          className="sticker-card absolute pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing select-none"
          data-parallax={st.parallaxSpeed}
          style={{
            left: st.x,
            top: st.y,
            zIndex: st.zIndex
          }}
          initial={{ opacity: 1, scale: 0, rotate: st.rotate }}
          animate={{ 
            opacity: 1, 
            scale: isMobile ? st.scale * 0.62 : st.scale 
          }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 18,
            delay: i * 0.02
          }}
          drag
          dragConstraints={{ left: -180, right: 180, top: -180, bottom: 180 }}
          dragElastic={0.25}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 24 }}
          
          whileHover={{ 
            scale: (isMobile ? st.scale * 0.62 : st.scale) * 1.15,
            zIndex: 60,
            rotate: [st.rotate, st.rotate - 4, st.rotate + 4, st.rotate],
            transition: { duration: 0.45, ease: "easeInOut" } 
          }}
          whileTap={{ scale: (isMobile ? st.scale * 0.62 : st.scale) * 0.95 }}
          onHoverStart={() => playTick(1600)}
          onDragStart={() => playTick(1000)}
          onTap={() => {
            if (st.id === 'st-vault') {
              playTick(2000);
              window.dispatchEvent(new Event('trigger-vault-decryption'));
            }
          }}
        >
          <div className="inner-drift w-fit h-fit origin-center">
            <div 
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 font-mono text-[9px] sm:text-[10px] tracking-widest font-extrabold border-2 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${st.bgColor} ${st.borderColor} ${st.textColor} transition-shadow duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
            >
              {renderStickerText(st, i)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
