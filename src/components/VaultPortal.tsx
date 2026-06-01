import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  Unlock, 
  Terminal, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Cpu, 
  ShieldAlert,
  RefreshCw,
  FolderOpen,
  Activity
} from 'lucide-react';
import { 
  startAmbientHum, 
  stopAmbientHum, 
  playClickTick, 
  playBeep, 
  playUnlockSuccess, 
  playAccessDenied,
  startVaultAmbientAudio,
  stopVaultAmbientAudio,
  muteVaultAmbientAudio,
  unmuteVaultAmbientAudio
} from '../utils/SoundManager';

interface VaultPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VaultPortal = ({ isOpen, onClose }: VaultPortalProps) => {
  const [vaultState, setVaultState] = useState<'login' | 'decrypting' | 'unlocked'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failCount, setFailCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SYSTEM LAYER 07 VAULT INITIALIZED...',
    'SECURITY LEVEL: UNRESTRICTED_FRIEND',
    'TYPE /help FOR AVAILABLE PROTOCOLS.'
  ]);
  
  // Decrypting progress state
  const [decryptProgress, setDecryptProgress] = useState(0);
  const [decryptStage, setDecryptStage] = useState('DECRYPTING MAIN CORE...');
  
  // Secret letter state
  const [letterOpen, setLetterOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  
  const visualizerCanvasRef = useRef<HTMLCanvasElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Mysterious rotating placeholder texts
  const placeholderTexts = [
    "Restricted Access.",
    "Digital Vault Detected.",
    "You weren't supposed to find this.",
    "Some memories aren't public.",
    "Private Layer Initialized."
  ];
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    // Start rotating placeholder subtitles every 3 seconds
    const interval = setInterval(() => {
      setPlaceholderIdx(prev => (prev + 1) % placeholderTexts.length);
    }, 3000);

    // Initial audio start on portal enter
    if (!isAudioMuted) {
      startAmbientHum();
      startVaultAmbientAudio();
    }

    return () => {
      clearInterval(interval);
      stopAmbientHum();
      stopVaultAmbientAudio();
    };
  }, [isOpen, isAudioMuted]);

  // Terminal logs auto-scroll
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  // Dynamic Audio Visualizer Effect (Unlocked mode)
  useEffect(() => {
    if (vaultState !== 'unlocked') return;

    const canvas = visualizerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = 110);

    let waveFreq = 0.02;
    let waveAmp = 18;
    let speed = 0.05;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw gridlines behind visualizer
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw primary wave (Fuchsia neon)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(240, 119, 252, 0.65)';
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#f077fc';
      
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin(x * waveFreq + offset) * waveAmp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary wave (Emerald green)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 255, 102, 0.55)';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#00ff66';
      
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.cos(x * (waveFreq * 0.7) - offset) * (waveAmp * 0.8);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      
      ctx.shadowBlur = 0; // reset shadow

      offset += speed;
      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 300;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [vaultState]);

  if (!isOpen) return null;

  // Custom failed message selector
  const getFailedMessage = () => {
    const messages = [
      "ACCESS DENIED.",
      "IDENTITY NOT RECOGNIZED.",
      "THIS LAYER ISN'T FOR EVERYONE.",
      "WRONG FREQUENCY DETECTED.",
      "TRUST LEVEL INSUFFICIENT."
    ];
    return messages[failCount % messages.length];
  };

  const handleAuthentication = () => {
    playBeep(900, 0.05);

    const userClean = username.trim().toLowerCase();
    const passClean = password.trim();

    if (userClean === 'friend' && passClean === 'parth2026') {
      setErrorMessage('');
      setVaultState('decrypting');
      
      // Decryption sequence animation progress
      let currentProgress = 0;
      const stages = [
        "DECRYPTING MAIN CORE...",
        "DECRYPTING CORE CYPHERS...",
        "DECRYPTING PERSONAL LOGS...",
        "BYPASSING ENCRYPTION GATES...",
        "ESTABLISHING SECURE PROTOCOLS...",
        "ACCESS GRANTED!"
      ];
      
      const interval = setInterval(() => {
        currentProgress += 4;
        setDecryptProgress(currentProgress);
        
        // Stagger stage subtitles
        const stageIdx = Math.floor((currentProgress / 100) * stages.length);
        if (stages[stageIdx]) {
          setDecryptStage(stages[stageIdx]);
        }
        
        // play rapid ticks
        if (currentProgress % 12 === 0) {
          playClickTick(1200 + currentProgress * 4, 0.015);
        }

        if (currentProgress >= 100) {
          clearInterval(interval);
          playUnlockSuccess();
          setTimeout(() => {
            setVaultState('unlocked');
          }, 600);
        }
      }, 80);

    } else {
      setFailCount(prev => prev + 1);
      playAccessDenied();
      setErrorMessage(getFailedMessage());
    }
  };

  // Draggable polaroids content
  const polaroids = [
    { 
      id: 'pol-1', 
      title: 'Python Intern Hacks', 
      desc: 'Developing automated telemetry modules & data pipelines.', 
      rotation: -6, 
      x: '14%', 
      y: '22%', 
      tag: 'WORK' 
    },
    { 
      id: 'pol-2', 
      title: 'GDG Event Coordination', 
      desc: 'Designing graphics & directing layout guidelines.', 
      rotation: 8, 
      x: '20%', 
      y: '58%', 
      tag: 'LEADERSHIP' 
    },
    { 
      id: 'pol-3', 
      title: 'CampusConnect App', 
      desc: 'Building responsive collaborative platforms.', 
      rotation: -10, 
      x: '76%', 
      y: '18%', 
      tag: 'SHIPPED' 
    },
    { 
      id: 'pol-4', 
      title: 'Hackathon Mode', 
      desc: 'Coding continuously with zero sleep & heavy caffeine.', 
      rotation: 5, 
      x: '72%', 
      y: '54%', 
      tag: 'CHAOTIC' 
    }
  ];

  // Dynamic Terminal command parser
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    playClickTick(1300, 0.02);

    let response: string[] = [];

    switch (cmd) {
      case '/help':
        response = [
          'AVAILABLE PROTOCOLS:',
          '  /about      - Parth profile logs',
          '  /hacks      - Unreleased system telemetry specs',
          '  /playlist   - Dynamic synth visualizer status',
          '  /lock       - Seal decryptor gates and exit vault',
          '  /clear      - Flush screen logs cache'
        ];
        break;
      case '/about':
        response = [
          'ARCHIVE SYSTEM_IDENTIFIER: PARTH BULBULE',
          'STATUS: CREATIVE DEVELOPER & DESIGN LEAD',
          'CORE INTERESTS: WEBGL, GENERATIVE DESIGN, AI DEPLOYMENTS',
          'MOTTO: ENGINEERED FOR PREMIUM SCALABILITY.'
        ];
        break;
      case '/hacks':
        response = [
          'LOGGING ACTIVE PROJECTS:',
          '  1. CAMPUSCONNECT CORE (86% completed, React stack)',
          '  2. TELEMETRY SYNTH CONTROLLER (94% completed, Web Audio)',
          '  3. LINKEDIN POST SCRAPER (100% completed, python pipelines)'
        ];
        break;
      case '/playlist':
        response = [
          'ATMOSPHERE CHILLPAD STATS:',
          '  STATUS: SYNTHESIZING ACTIVE pad',
          '  WAVEFORM: SINE & TRIANGLE DUAL CORES',
          '  FREQUENCY DETUNE: DETUNED detune(+5hz / -5hz)'
        ];
        break;
      case '/clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      case '/lock':
        setVaultState('login');
        setUsername('');
        setPassword('');
        setTerminalLogs([
          'SYSTEM LAYER 07 VAULT INITIALIZED...',
          'SECURITY LEVEL: UNRESTRICTED_FRIEND',
          'TYPE /help FOR AVAILABLE PROTOCOLS.'
        ]);
        playBeep(600, 0.2);
        stopAmbientHum();
        stopVaultAmbientAudio();
        onClose();
        return;
      default:
        response = [`COMMAND NOT RECOGNIZED: "${cmd}". TYPE /help FOR SCHEMATICS.`];
    }

    setTerminalLogs(prev => [...prev, `> ${terminalInput}`, ...response]);
    setTerminalInput('');
  };

  const toggleMute = () => {
    if (isAudioMuted) {
      startAmbientHum();
      unmuteVaultAmbientAudio();
    } else {
      stopAmbientHum();
      muteVaultAmbientAudio();
    }
    setIsAudioMuted(!isAudioMuted);
    playClickTick(1400, 0.025);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen z-50 overflow-hidden bg-[#030303] select-none text-white font-sans flex items-center justify-center">
      {/* Grid pattern background overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none custom-grid-lines" />
      
      {/* Film grain layer */}
      <div className="grain-overlay" />
      
      {/* Top HUD bar with top-left ← EXIT VAULT navigation node */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center z-40">
        <motion.button 
          onClick={() => {
            playClickTick(600, 0.1);
            stopAmbientHum();
            stopVaultAmbientAudio();
            onClose();
          }}
          onMouseEnter={() => playClickTick(1500, 0.01)}
          className="flex flex-col items-start gap-1 select-none text-left interactive-hover cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Visual futuristic glass capsule button with dark aesthetic & fuchsia borders */}
          <motion.div 
            className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-fuchsia-500/30 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.5),2px_2px_0px_rgba(240,119,252,0.15)] text-white hover:border-fuchsia-500 hover:shadow-[0_0_12px_rgba(240,119,252,0.25)] transition-all duration-300 transform-gpu will-change-transform font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            style={{ transform: 'translate3d(0,0,0)' }}
          >
            <span className="text-fuchsia-400">←</span> EXIT VAULT
            <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse ml-0.5" />
          </motion.div>
          
          {/* Subtle tilted terminal-style metadata */}
          <span className="font-mono text-[7px] text-[#f077fc]/50 tracking-widest uppercase pl-1 sm:block hidden select-none">
            Leaving restricted layer…
          </span>
        </motion.button>
        
        <div className="flex items-center gap-4">
          {/* Diagnostic badge */}
          <div className="hidden sm:flex items-center gap-2 border border-white/5 bg-white/[0.01] px-3 py-1 rounded-full font-mono text-[8px] text-white/40 tracking-wider select-none">
            <Cpu size={10} className="text-[#00FF66] animate-pulse" />
            <span>SECURE_VAULT_NODE_07</span>
          </div>

          {/* Mute button */}
          <button 
            onClick={toggleMute}
            className="p-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:border-yellow-400 hover:text-yellow-400 transition-colors text-white/50 cursor-pointer pointer-events-auto"
          >
            {isAudioMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
          </button>
        </div>
      </div>

      {/* LOGIN OVERLAY CONTROLLER */}
      {vaultState === 'login' && (
        <div className="w-full h-full flex flex-col justify-center items-center relative z-10 px-6">
          {/* Neon atmospheric spot glows */}
          <div className="absolute top-[25%] left-[20%] w-[30vw] h-[30vw] bg-fuchsia-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] bg-emerald-500/[0.03] rounded-full blur-[130px] pointer-events-none" />

          {/* Centered Brutalist Login Container */}
          <motion.div 
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full max-w-md p-8 sm:p-10 border border-white/10 bg-black/40 backdrop-blur-2xl rounded shadow-[0_0_50px_rgba(0,0,0,0.8)] relative text-center overflow-hidden flex flex-col justify-between"
          >
            {/* Tech grid frame corners */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/20" />

            {/* Glowing animated keylock icon */}
            <div className="mx-auto w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-white/[0.01] mb-6 relative">
              <Lock className="text-white/40 animate-pulse" size={20} />
              <div className="absolute inset-0 bg-[#00FF66]/5 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Header copy — forbidden vault aesthetic */}
            <h3 className="font-display font-black leading-none tracking-tight uppercase mb-2 text-center">
              <span className="block text-sm sm:text-base text-white/70 tracking-[0.15em] mb-1" style={{ textShadow: '0 0 8px rgba(255,62,108,0.4)' }}>
                OHH FUHH &mdash;
              </span>
              <span 
                className="block text-[22px] sm:text-[28px] text-white tracking-tight"
                style={{ 
                  textShadow: '0 0 12px rgba(255,255,255,0.25), 0 0 40px rgba(0,255,102,0.12)',
                  animation: 'vault-crt-flicker 4s ease-in-out infinite'
                }}
              >
                YOU SHOULDN'T BE HERE
              </span>
            </h3>
            
            {/* Dynamic rotating subtitle */}
            <div className="h-6 overflow-hidden relative w-full mb-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 flex items-center justify-center font-mono text-[9px] tracking-widest text-[#00FF66] font-bold uppercase"
                >
                  {placeholderTexts[placeholderIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Credentials Fields */}
            <div className="flex flex-col gap-4 mb-6">
              
              {/* Username Input */}
              <div className="relative">
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (e.target.value.length % 2 === 0) playClickTick(1400, 0.015);
                  }}
                  placeholder="USERNAME (hint: friend)"
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded font-mono text-xs tracking-wider text-white placeholder-white/20 focus:outline-none focus:border-[#00FF66]/50 focus:shadow-[0_0_15px_rgba(0,255,102,0.1)] focus:bg-white/[0.04] transition-all duration-300 text-center uppercase"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (e.target.value.length % 2 === 0) playClickTick(1500, 0.015);
                  }}
                  placeholder="PASSPHRASE (hint: parth2026)"
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded font-mono text-xs tracking-wider text-white placeholder-white/20 focus:outline-none focus:border-[#00FF66]/50 focus:shadow-[0_0_15px_rgba(0,255,102,0.1)] focus:bg-white/[0.04] transition-all duration-300 text-center"
                />
              </div>

            </div>

            {/* Access denied errors */}
            <AnimatePresence>
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-red-500 border border-red-500/20 bg-red-500/5 py-2 px-4 rounded mb-6 text-center"
                >
                  <ShieldAlert size={14} className="animate-bounce" />
                  <span className="font-mono text-[9px] tracking-widest font-extrabold uppercase">
                    {errorMessage}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enter trigger */}
            <motion.button
              onClick={handleAuthentication}
              onMouseEnter={() => playClickTick(1600, 0.015)}
              className="w-full py-3.5 border-2 border-white text-black bg-white hover:bg-transparent hover:text-white transition-all duration-300 font-mono text-xs tracking-widest font-bold uppercase relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ENTER THE VAULT →
              {/* Gold border pulse effect */}
              <div className="absolute inset-[-2px] border border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
            </motion.button>

            {/* Back to Homepage Button */}
            <button
              onClick={() => {
                playClickTick(600, 0.05);
                stopAmbientHum();
                stopVaultAmbientAudio();
                onClose();
              }}
              className="mt-4 font-mono text-[9px] sm:text-[10px] tracking-widest text-zinc-500 hover:text-white transition-colors duration-300 uppercase underline cursor-pointer"
            >
              ← BACK TO PORTFOLIO
            </button>

            <span className="font-mono text-[7.5px] text-white/20 tracking-wider uppercase mt-6 block">
              ACCESS GATEWAY // SECURE PROTOCOL LAYER 07
            </span>

          </motion.div>
        </div>
      )}

      {/* ENCRYPTED LOAD DECRYPT SCREEN */}
      {vaultState === 'decrypting' && (
        <div className="w-full h-full flex flex-col justify-center items-center z-10 px-6 max-w-md">
          <div className="relative w-20 h-20 mb-8 flex items-center justify-center border border-white/10 rounded-full bg-white/[0.01]">
            <RefreshCw className="text-[#00FF66] animate-spin" size={24} style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 bg-[#00FF66]/10 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
          </div>
          
          <div className="w-full flex justify-between font-mono text-[9px] tracking-widest text-white/50 mb-2 font-bold uppercase">
            <span>{decryptStage}</span>
            <span>{decryptProgress}%</span>
          </div>

          <div className="w-full h-1 border border-white/10 bg-white/[0.02] rounded overflow-hidden">
            <motion.div 
              className="h-full bg-[#00FF66] shadow-[0_0_12px_#00ff66]"
              initial={{ width: '0%' }}
              animate={{ width: `${decryptProgress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      {/* UNLOCKED MEMORY VAULT SCRAPBOOK VIEWPORT */}
      {vaultState === 'unlocked' && (
        <div className="w-full h-full flex relative select-none">
          
          {/* Neon atmospheric glow backdrops */}
          <div className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-fuchsia-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

          {/* LEFT TELEMETRY WORKSPACE: Scrapbook Polaroids Memory Gallery */}
          <div className="hidden lg:block w-3/5 h-full relative border-r border-white/5 p-12 overflow-hidden">
            
            <div className="absolute top-16 left-16 flex flex-col select-none">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#00FF66] font-bold uppercase flex items-center gap-1.5">
                <FolderOpen size={12} />
                // THE_PREMIUM_SIDE_OF_PARTH
              </span>
              <h2 className="font-display font-black text-[3.2vw] leading-none uppercase text-white mt-3 leading-tight tracking-tight">
                DIGITAL DIARY <br />
                <span className="text-stroke-gold text-[#D4AF37]">ARCHIVE</span>
              </h2>
            </div>

            {/* Draggable Polaroid Cards */}
            {polaroids.map((pol) => (
              <motion.div
                key={pol.id}
                drag
                dragConstraints={{ left: 20, right: 650, top: 80, bottom: 420 }}
                dragElastic={0.2}
                onDragStart={() => playClickTick(1100, 0.025)}
                className="sticker-card absolute p-4 border border-white/10 bg-[#080808] rounded shadow-[10px_10px_30px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing hover:border-yellow-400/40 transition-colors duration-300 w-60 z-20"
                style={{
                  left: pol.x,
                  top: pol.y,
                  rotate: pol.rotation
                }}
                whileHover={{ scale: 1.05, zIndex: 40 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-full h-40 bg-zinc-900 border border-white/5 rounded flex items-center justify-center overflow-hidden mb-3 relative group">
                  <div className="absolute top-2 right-2 border border-white/20 bg-black/60 px-2 py-0.5 rounded font-mono text-[7px] text-white/60 tracking-wider">
                    {pol.tag}
                  </div>
                  {/* Procedural hacker visual pattern inside card */}
                  <div className="w-full h-full custom-grid-lines opacity-10 group-hover:opacity-20 transition-opacity duration-300 absolute inset-0" />
                  <div className="flex flex-col items-center">
                    <Sparkles className="text-yellow-400 animate-pulse mb-2" size={18} />
                    <span className="font-mono text-[7.5px] text-white/30 tracking-widest uppercase">
                      SECURE_IMAGE_DECRYPTED
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-xs text-white uppercase tracking-tight">
                    {pol.title}
                  </span>
                  <span className="font-sans text-[10px] text-zinc-400 mt-1 leading-relaxed">
                    {pol.desc}
                  </span>
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-12 left-16 flex items-center gap-2 opacity-30 select-none">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
              <span className="font-mono text-[9px] tracking-widest">
                DRAG CARD NODES TO REARRANGE INTERACTIVE SCRAPBOOK
              </span>
            </div>

          </div>

          {/* RIGHT CONTROLS: Terminal Diagnostic Logs, Sound visualizer, Secret Note */}
          <div className="w-full lg:w-2/5 h-full p-6 sm:p-12 lg:p-16 flex flex-col justify-between overflow-y-auto no-scrollbar relative z-10 bg-black/30 backdrop-blur-xl">
            
            {/* Title section (visible on mobile where left side is hidden) */}
            <div className="block lg:hidden text-left mb-6 mt-8">
              <span className="font-mono text-[8px] tracking-[0.2em] text-[#00FF66] font-bold uppercase">
                // VAULT WORKSPACE ARCHIVE
              </span>
              <h2 className="font-display font-black text-[22px] text-white uppercase tracking-tight mt-1 leading-none">
                THE PREMIUM VAULT
              </h2>
            </div>

            {/* DYNAMIC RETRO TERMINAL (Upper) */}
            <div className="flex flex-col flex-1 min-h-[30vh] max-h-[35vh] border border-white/5 bg-[#050505] p-4 rounded font-mono text-[10px] select-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative mt-10 lg:mt-6 overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2 text-white/40 tracking-wider">
                <span className="flex items-center gap-1.5 font-bold uppercase text-[8px]">
                  <Terminal size={10} className="text-[#00FF66]" />
                  interactive_diagnostics.exe
                </span>
                <span className="text-[7.5px] uppercase">ACCESS: FREEDOM_GATE</span>
              </div>
              
              {/* Terminal Logs Stack */}
              <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-1 pr-2 mb-3 text-left">
                {terminalLogs.map((log, i) => (
                  <div 
                    key={i} 
                    className={`${log.startsWith('>') ? 'text-[#00FF66] font-bold' : 'text-zinc-400'} whitespace-pre-wrap leading-relaxed`}
                  >
                    {log}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              {/* Terminal command form input */}
              <form onSubmit={handleTerminalSubmit} className="flex border-t border-white/5 pt-2">
                <span className="text-[#00FF66] mr-2 font-bold select-none">&gt;</span>
                <input 
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command here..."
                  className="flex-1 bg-transparent border-none outline-none font-mono text-[10px] text-white placeholder-white/10 caret-[#00FF66]"
                />
              </form>
            </div>

            {/* CLIENT-SYNTH ACTIVE VISUALIZER DECK (Middle) */}
            <div className="border border-white/5 bg-[#050505] p-4 rounded mt-4 relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3 text-white/40 tracking-wider font-mono text-[8px] uppercase">
                <span className="flex items-center gap-1.5">
                  <Activity size={10} className="text-fuchsia-400" />
                  tactile_sound_matrix.pad
                </span>
                <span>STATE: ACTIVE_SYNTH</span>
              </div>
              
              {/* Visualizer Canvas render */}
              <div className="w-full h-[110px] bg-zinc-950/60 rounded border border-white/5 relative overflow-hidden">
                <canvas ref={visualizerCanvasRef} className="w-full h-full block" />
              </div>

              <div className="flex justify-between items-center mt-3 font-mono text-[8px] text-white/30 uppercase tracking-widest">
                <span>Pad frequency detune [±5Hz]</span>
                <span>Type: Triangle Sub harmonic</span>
              </div>
            </div>

            {/* Heartfelt secret letter to close friends (Lower) */}
            <div className="mt-4 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.02] p-4 rounded relative transition-all duration-300">
              <AnimatePresence mode="wait">
                {!letterOpen ? (
                  <motion.div 
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-between items-center py-2"
                  >
                    <div className="flex flex-col text-left">
                      <span className="font-display font-black text-xs text-[#D4AF37] uppercase tracking-tight flex items-center gap-1.5">
                        <Lock size={12} className="animate-pulse" />
                        SECRET FRIENDS MESSAGE
                      </span>
                      <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">
                        Decrypt letter archive node
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => {
                        playUnlockSuccess();
                        setLetterOpen(true);
                      }}
                      className="px-3.5 py-1.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors font-mono text-[8px] tracking-widest font-bold uppercase rounded cursor-pointer"
                    >
                      DECRYPT LETTER
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="open"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-left py-1"
                  >
                    <div className="flex justify-between items-center border-b border-[#D4AF37]/20 pb-2 mb-3">
                      <span className="font-display font-black text-xs text-[#D4AF37] uppercase tracking-tight flex items-center gap-1.5">
                        <Unlock size={12} className="text-[#00FF66]" />
                        LETTER DECRYPTED SUCCESSFULLY
                      </span>
                      <button 
                        onClick={() => {
                          playClickTick(600, 0.05);
                          setLetterOpen(false);
                        }}
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </div>
                    
                    <p className="font-sans text-[10px] text-zinc-300 leading-relaxed italic">
                      "Hey, thank you for finding my secret page. It means a lot that you explored far enough to discover my digital vault. Writing code and designing interactive visual interfaces is my creative outlet. I build things with the hope that they might spark curiosity, humor, or aesthetic joy. Thank you for being a part of my journey. Let's make something amazing together. - Parth"
                    </p>
                    
                    <span 
                      className="block text-right font-script text-[#00FF66] text-[20px] font-normal leading-none pointer-events-none select-none mt-2 pr-2"
                      style={{ fontFamily: "'Reenie Beanie', cursive" }}
                    >
                      parth
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom HUD specs */}
            <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-6 font-mono text-[8px] text-white/30 uppercase tracking-widest">
              <span>ACCESS LEVEL: 04 // PRIVATE_WORLD</span>
              <span>© 2026 PARTH BULBULE</span>
            </div>

          </div>

        </div>
      )}
    </div>
  );
};
