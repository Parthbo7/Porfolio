import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Twitter, Send, Check, Terminal, HeartPulse } from 'lucide-react';
import { playClickTick, playBeep, playUnlockSuccess } from '../utils/SoundManager';

interface SocialNode {
  id: string;
  num: string;
  name: string;
  description: string;
  icon: any;
  status: string;
  statusColor: string;
  href: string;
}

export const ConnectPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Message Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);
  const [transmissionLogs, setTransmissionLogs] = useState<string[]>([]);
  
  // Terminal typing headers
  const [terminalPrompt, setTerminalPrompt] = useState<string[]>([]);

  // Simulated live signal telemetry values
  const [latency, setLatency] = useState(24);
  const [signalStrength, setSignalStrength] = useState(99);

  // Typewriter effect for terminal header on page load
  useEffect(() => {
    const prompts = [
      '> INITIALIZING CONNECTION...',
      '> PROTOCOL STACK ENABLED // SEC_ID: NOMINAL',
      '> SIGNAL DETECTED AT FREQUENCY 14.8Hz...',
      '> READY FOR COLLABORATION PORTAL.'
    ];
    let index = 0;
    const interval = setInterval(() => {
      if (index < prompts.length) {
        setTerminalPrompt((prev) => [...prev, prompts[index]]);
        playClickTick(1500 + index * 100, 0.02);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  // Fluctuating network telemetry parameters
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => Math.max(12, prev + Math.floor(Math.random() * 6 - 3)));
      setSignalStrength((prev) => Math.min(100, Math.max(95, prev + Math.floor(Math.random() * 4 - 2))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const socialNodes: SocialNode[] = [
    {
      id: 'soc-1',
      num: '01',
      name: 'LINKEDIN',
      description: 'Professional network access node.',
      icon: <Linkedin size={18} />,
      status: 'RESPONSE READY',
      statusColor: 'text-[#00FF66] border-[#00CC52]/20 bg-[#00FF66]/5',
      href: 'https://www.linkedin.com/in/parth-bulbule/'
    },
    {
      id: 'soc-2',
      num: '02',
      name: 'GITHUB',
      description: 'Code archive and development systems.',
      icon: <Github size={18} />,
      status: 'CONNECTION VERIFIED',
      statusColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-500/[0.03]',
      href: 'https://github.com/Parthbo7'
    },
    {
      id: 'soc-3',
      num: '03',
      name: 'INSTAGRAM',
      description: 'Creative visual layer and personality feed.',
      icon: <Instagram size={18} />,
      status: 'SIGNAL STABLE',
      statusColor: 'text-pink-400 border-pink-400/20 bg-pink-500/[0.03]',
      href: 'https://www.instagram.com/parthb_o7'
    },
    {
      id: 'soc-4',
      num: '04',
      name: 'EMAIL',
      description: 'Direct communication channel.',
      icon: <Mail size={18} />,
      status: 'STATUS: ACTIVE',
      statusColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-500/[0.03]',
      href: 'mailto:contact@parth.dev'
    },
    {
      id: 'soc-5',
      num: '05',
      name: 'TWITTER / X',
      description: 'Thought streams and tech observations.',
      icon: <Twitter size={18} />,
      status: 'SIGNAL STABLE',
      statusColor: 'text-sky-400 border-sky-400/20 bg-sky-500/[0.03]',
      href: 'https://x.com/BulbuleParth'
    },
    {
      id: 'soc-6',
      num: '06',
      name: 'DISCORD',
      description: 'Real-time communication gateway.',
      icon: <Terminal size={18} />,
      status: 'STATUS: ACTIVE',
      statusColor: 'text-yellow-400 border-yellow-400/20 bg-yellow-500/[0.03]',
      href: 'https://discord.com'
    }
  ];

  // Submit Handler for Futuristic Transmission Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || isTransmitting) return;

    playBeep(880, 0.1);
    setIsTransmitting(true);
    setTransmissionSuccess(false);
    setTransmissionLogs(['> INITIALIZING UPLOAD VECTOR...', '> COMPILING PACKET SIGNATURES...']);

    // Sequence logs
    setTimeout(() => {
      setTransmissionLogs((prev) => [...prev, '> RESOLVING SIGNAL HOST ADDRESS...', '> ESTABLISHING SECURE HANDSHAKE...']);
      playClickTick(1600, 0.02);
    }, 600);

    setTimeout(() => {
      setTransmissionLogs((prev) => [...prev, `> ENCRYPTING TRANSMISSION payload...`, `> UPLOADING TO PARTH_OS MATRIX...`]);
      playClickTick(1800, 0.02);
    }, 1200);

    setTimeout(() => {
      setTransmissionLogs((prev) => [...prev, '> BROADCAST COMPLETE // Nom_100%', '> SIGNAL SUCCESSFULLY DELIVERED.']);
      playUnlockSuccess();
      setIsTransmitting(false);
      setTransmissionSuccess(true);
      
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex flex-col justify-between select-none relative overflow-hidden"
    >
      {/* 1. TOP HEADER LOCAL OVERLAY */}
      <div className="flex justify-between items-center w-full z-30 pt-2 border-b border-black/5 pb-4">
        {/* Top Left Title */}
        <div className="text-left font-mono text-[9px] sm:text-xs tracking-widest text-[#FF3E6C] font-extrabold uppercase">
          <div>CREATIVE DEVELOPER</div>
          <div className="mt-0.5 text-[#FF3E6C]/70">AVAILABLE FULL-TIME</div>
        </div>

        {/* Top Center Tabs */}
        <div className="flex items-center gap-6 sm:gap-8 font-mono text-[10px] sm:text-[11px] tracking-widest font-extrabold text-[#FF3E6C]">
          <button className="relative py-1 transition-all uppercase interactive-hover cursor-default">
            connect
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF3E6C]" />
          </button>
          <span className="opacity-30 uppercase">network</span>
          <span className="opacity-30 uppercase">signal</span>
        </div>

        {/* Top Right Spacer to keep center elements centered */}
        <div className="w-[45px] sm:w-[60px] hidden sm:block" />
      </div>

      {/* DRAGGABLE OS STICKERS */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {/* SIGNAL_ACTIVE Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute left-[8%] top-[14%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-black text-white border border-black px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest -rotate-6 select-none shadow-[2px_2px_0px_rgba(0,255,102,0.3)] will-change-transform"
          whileHover={{ scale: 1.05, rotate: -2 }}
          onHoverStart={() => playClickTick(1500, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          SIGNAL_ACTIVE
        </motion.div>

        {/* NETWORK_NODE Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute left-[38%] top-[11%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-yellow-300 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-2 select-none will-change-transform"
          whileHover={{ scale: 1.05, rotate: 6 }}
          onHoverStart={() => playClickTick(1500, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          NETWORK_NODE
        </motion.div>

        {/* CONTACT_PROTOCOL Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute right-[32%] top-[10%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-purple-500 text-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rotate-6 select-none will-change-transform"
          whileHover={{ scale: 1.05, rotate: -3 }}
          onHoverStart={() => playClickTick(1500, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          CONTACT_PROTOCOL
        </motion.div>

        {/* ACCESS_OPEN Sticker */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.15}
          className="absolute right-[5%] bottom-[12%] pointer-events-auto interactive-hover cursor-grab active:cursor-grabbing bg-[#00FF66]/10 text-[#00CC52] border border-[#00CC52]/40 px-3 py-1 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider rounded-sm -rotate-2 select-none will-change-transform"
          whileHover={{ scale: 1.05, rotate: 0 }}
          onHoverStart={() => playClickTick(1600, 0.02)}
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          ACCESS_OPEN
        </motion.div>
      </div>

      {/* 2. MAIN SCROLLER BODY */}
      <div className="flex-1 w-full overflow-y-auto no-scrollbar py-6 relative z-20 flex flex-col items-center">
        
        {/* OVERSZIED TITLE STACK */}
        <div className="w-full flex flex-col items-center mb-6 relative">
          <div className="absolute right-[5%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm">
            COMMS_SYS_07
          </div>

          <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-2">
            CONNECT
          </h1>

          {/* Subtext description */}
          <div className="mt-4 px-6 py-2.5 bg-white border border-black/10 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/70 max-w-lg shadow-[4px_4px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold">
            Communication systems, collaboration channels, and human-interface protocols.
          </div>
        </div>

        {/* 2-COLUMN OS TERMINAL GRID */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-11 gap-8 px-4 py-6 relative min-h-[50vh] items-stretch">
          
          {/* COLUMN 1: LEFT SIDE FORM TERMINAL (Col Span 5) */}
          <div className="lg:col-span-5 bg-white border border-[#A8D3C8] rounded-sm p-6 sm:p-8 flex flex-col gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),3px_3px_0px_rgba(168,211,200,0.2)] hover:border-black transition-colors duration-300">
            
            {/* Typing Connection Prompt Box */}
            <div className="w-full bg-[#0a0a0c] border border-black/15 rounded p-4 min-h-[100px] flex flex-col gap-1 text-[8px] sm:text-[9.5px] font-mono text-[#00FF66]/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] relative">
              {terminalPrompt.map((p, idx) => (
                <div key={idx} className={idx === terminalPrompt.length - 1 ? 'text-[#00FF66] font-bold' : ''}>
                  {p}
                </div>
              ))}
              {/* Pulsing blinking cursor */}
              {terminalPrompt.length < 4 && (
                <div className="w-1.5 h-3 bg-[#00FF66] animate-pulse mt-0.5" />
              )}
            </div>

            {/* MESSAGE TRANSMISSION FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-[10px] sm:text-xs">
              
              {/* Field 1: NAME */}
              <div className="flex flex-col gap-1.5">
                <label className="text-black/40 font-extrabold uppercase tracking-widest">// INPUT_NAME</label>
                <input 
                  type="text" 
                  required
                  placeholder="IDENTIFY SENDER..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black/[0.01] border border-black/10 hover:border-black/30 focus:border-[#FF3E6C] focus:bg-white focus:outline-none rounded transition-all tracking-wider uppercase font-semibold text-black"
                />
              </div>

              {/* Field 2: SIGNAL_ID (EMAIL) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-black/40 font-extrabold uppercase tracking-widest">// SIGNAL_ID [EMAIL]</label>
                <input 
                  type="email" 
                  required
                  placeholder="SENDER_GATEWAY@ADDRESS.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black/[0.01] border border-black/10 hover:border-black/30 focus:border-[#FF3E6C] focus:bg-white focus:outline-none rounded transition-all tracking-wider font-semibold text-black"
                />
              </div>

              {/* Field 3: MESSAGE */}
              <div className="flex flex-col gap-1.5">
                <label className="text-black/40 font-extrabold uppercase tracking-widest">// MESSAGE_TRANSMISSION</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="COMPILE TRANSMISSION PAYLOAD HERE..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black/[0.01] border border-black/10 hover:border-black/30 focus:border-[#FF3E6C] focus:bg-white focus:outline-none rounded transition-all tracking-wider uppercase font-semibold text-black resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button 
                type="submit"
                disabled={isTransmitting}
                className="w-full py-3 bg-black text-white hover:bg-[#FF3E6C] active:translate-y-0.5 rounded transition-all duration-300 font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_rgba(255,62,108,0.25)] hover:shadow-none interactive-hover"
              >
                {isTransmitting ? 'TRANSMITTING SIGNAL...' : (
                  <>
                    TRANSMIT SIGNAL
                    <Send size={12} className="stroke-[2.5]" />
                  </>
                )}
              </button>

            </form>

            {/* Live Upload Log feedback overlay */}
            <AnimatePresence>
              {(isTransmitting || transmissionSuccess) && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full border border-black/10 bg-black text-[#00FF66] rounded p-4 font-mono text-[9px] leading-relaxed flex flex-col gap-1"
                >
                  {transmissionLogs.map((log, logIdx) => (
                    <div key={logIdx} className={logIdx === transmissionLogs.length - 1 ? 'text-[#00FF66] font-bold' : 'text-[#00FF66]/70'}>
                      {log}
                    </div>
                  ))}
                  {transmissionSuccess && (
                    <div className="text-emerald-400 flex items-center gap-1.5 font-bold uppercase tracking-wider mt-2 border-t border-[#00FF66]/20 pt-2 text-[10px]">
                      <Check size={13} className="stroke-[3]" />
                      TRANSMISSION LOAD SUCCESSFUL.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* COLUMN 2: CENTER ANIMATED NEON PULSES (Col Span 1) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center relative py-6">
            {/* SVG vertical line with animated pulsing node circles */}
            <svg className="w-full h-full text-black/10" viewBox="0 0 20 400" preserveAspectRatio="none">
              <line x1="10" y1="0" x2="10" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="3, 3" />
              {/* Concentric node rings */}
              <circle cx="10" cy="150" r="4.5" fill="none" stroke="#00FF66" strokeWidth="1" />
              <circle cx="10" cy="250" r="4.5" fill="none" stroke="#FF3E6C" strokeWidth="1" />
            </svg>
            <motion.div 
              animate={{ y: [0, 400] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66]"
            />
            <motion.div 
              animate={{ y: [400, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF3E6C] shadow-[0_0_8px_#FF3E6C]"
            />
          </div>

          {/* COLUMN 3: RIGHT SIDE SOCIAL NODES GRID (Col Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {socialNodes.map((node) => (
              <motion.a
                key={node.id}
                href={node.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => playClickTick(1500, 0.02)}
                className="group p-5 bg-white border border-[#A8D3C8] rounded-sm flex flex-col justify-between gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),2px_2px_0px_rgba(168,211,200,0.15)] hover:border-black transition-all duration-300 cursor-pointer interactive-hover will-change-transform"
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 12px 24px rgba(0,0,0,0.03), 4px 4px 0px rgba(0,0,0,0.8)' 
                }}
                style={{ transform: 'translate3d(0,0,0)' }}
              >
                {/* Node Top Row */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-mono text-[9px] tracking-widest text-[#00CC52] font-extrabold uppercase">
                    // NODE_{node.num}
                  </span>
                  <div className="p-2 bg-black/5 rounded-full text-black/50 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {node.icon}
                  </div>
                </div>

                {/* Node Title & Description */}
                <div className="flex flex-col gap-1.5 select-none">
                  <h4 className="font-display font-black text-base sm:text-lg tracking-tighter text-black uppercase leading-none">
                    {node.name}
                  </h4>
                  <p className="font-mono text-[8px] sm:text-[9px] text-black/40 leading-normal normal-case">
                    {node.description}
                  </p>
                </div>

                {/* Node Bottom Telemetry Status Tag */}
                <div className={`w-full text-center py-1 font-mono text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest border rounded-sm transition-all duration-300 ${node.statusColor}`}>
                  {node.status}
                </div>

              </motion.a>
            ))}
          </div>

        </div>

      </div>

      {/* 3. BOTTOM TERMINAL READOUT HUD */}
      <div className="w-full z-20 mt-auto border-t border-black/5 pt-4 pb-2 select-none">
        <div className="flex flex-col items-center gap-1 w-full text-center mb-2">
          <span className="font-mono text-[8px] tracking-[0.25em] text-[#00CC52] font-bold uppercase animate-pulse flex items-center gap-1.5 justify-center">
            <HeartPulse size={10} className="animate-ping" />
            COMMUNICATION CHANNELS ACTIVE...
          </span>
          <span className="font-mono text-[7px] tracking-widest text-black/40 uppercase">
            SIGNAL: {signalStrength}% // LATENCY: {latency}MS // NETWORK STATUS: VERIFIED
          </span>
        </div>
      </div>
    </div>
  );
};
