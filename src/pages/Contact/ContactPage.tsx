import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Github, Linkedin, Instagram, Mail, Send, Check, ExternalLink, FileText, ShieldAlert } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { playClickTick, playBeep, playUnlockSuccess } from '../../utils/SoundManager';

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Sender identification required (min 2 chars).' }),
  email: z.string().email({ message: 'Valid signal gateway address required.' }),
  organization: z.string().min(2, { message: 'Organization / College name required.' }),
  subject: z.string().min(3, { message: 'Subject payload minimum length is 3 chars.' }),
  projectType: z.string().min(1, { message: 'Please select a project classification.' }),
  message: z.string().min(10, { message: 'Message payload must be at least 10 chars.' })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  
  // Terminal log animation states
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [showContactEgg, setShowContactEgg] = useState(false);
  const contactClicksRef = useRef(0);

  // EmailJS submission feedback states
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionStatus, setTransmissionStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');

  // React Hook Form Configuration
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      subject: '',
      projectType: 'General Inquiry',
      message: ''
    }
  });

  // Typewriter boot sequence for Left Terminal Panel
  useEffect(() => {
    const lines = [
      '> INITIALIZING CONNECTION...',
      '> SIGNAL DETECTED...',
      '> AUTHENTICATING COMMUNICATION CHANNEL...',
      '> NETWORK VERIFIED...',
      '> READY FOR INCOMING TRANSMISSIONS...'
    ];
    let index = 0;
    setTerminalLogs([]);
    const interval = setInterval(() => {
      if (index < lines.length) {
        setTerminalLogs((prev) => [...prev, lines[index]]);
        playClickTick(1400 + index * 80, 0.02);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Terminal Auto-scroller
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  // Form submit handler using native fetch to EmailJS REST API
  const onSubmit = async (data: ContactFormValues) => {
    if (isTransmitting || cooldown > 0) return;

    playBeep(880, 0.1);
    setIsTransmitting(true);
    setTransmissionStatus('IDLE');

    // Append logs to terminal
    setTerminalLogs((prev) => [
      ...prev,
      `> UPLOAD REQUEST SUBMITTED BY ${data.name.toUpperCase()}`,
      `> COMPILE_LOAD: ${data.projectType.toUpperCase()}`,
      `> BROADCASTING ENCRYPTED PACKETS...`
    ]);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default';

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name: data.name,
            email: data.email,
            organization: data.organization,
            projectType: data.projectType,
            subject: data.subject,
            message: data.message
          }
        })
      });

      if (response.ok) {
        setTransmissionStatus('SUCCESS');
        playUnlockSuccess();
        setCooldown(30); // 30 seconds anti-spam cooldown
        reset(); // Clear form fields
        setTerminalLogs((prev) => [
          ...prev,
          `> CONNECTION ESTABLISHED WITH PARTH_OS`,
          `> TRANSMISSION DELIVERED SECURELY.`
        ]);
      } else {
        throw new Error('EmailJS transmission failed');
      }
    } catch (error) {
      setTransmissionStatus('ERROR');
      playBeep(440, 0.35);
      setTerminalLogs((prev) => [
        ...prev,
        `> TRANSMISSION ERROR: PACKET LOSS 100%`,
        `> BROADCAST ABORTED.`
      ]);
    } finally {
      setIsTransmitting(false);
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('parthbulbule123@gmail.com');
    setCopied(true);
    playUnlockSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTitleClick = () => {
    playClickTick(1500, 0.04);
    contactClicksRef.current += 1;
    if (contactClicksRef.current >= 5) {
      setShowContactEgg(true);
      playUnlockSuccess();
      contactClicksRef.current = 0;
    }
  };

  return (
    <PageLayout
      onBack="/"
      backLabel="CLOSE_ARCHIVE"
      statusLabel="COMMUNICATION_NOMINAL"
      glowColors={{
        left: 'bg-[#FF3E6C]/5',
        right: 'bg-[#A8D3C8]/5'
      }}
      initialLogs={[
        '> CONTACT PORTAL NOMINAL...',
        '> READY FOR INCOMING TRANSMISSIONS // STATE: ACTIVE'
      ]}
      telemetryLogs={[
        'AWAITING USER TRANSMISSIONS...',
        'NETWORK LATENCY: 21MS...',
        'SYNCING ENCRYPTION GATEWAYS...',
        'READY FOR BROADCAST...'
      ]}
    >
      <div 
        ref={containerRef}
        className="w-full flex flex-col justify-between select-none relative"
      >
        {/* OVERSZIED TITLE STACK */}
        <div className="w-full flex flex-col items-center mb-6 relative">
          <div className="absolute right-[5%] top-[-10px] font-mono text-[8px] sm:text-[10px] text-black/40 border border-black/10 px-2 py-0.5 rounded-sm">
            GATEWAY_SYS_V3
          </div>

          <h1 
            onClick={handleTitleClick}
            className="font-display font-black leading-[0.9] tracking-tighter text-black uppercase cursor-pointer hover:text-[#FF3E6C] transition-colors select-none mt-2"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
          >
            CONTACT
          </h1>

          <div className="mt-4 px-6 py-2.5 bg-white border border-black/10 text-center font-sans text-[11px] sm:text-[13px] tracking-wide text-black/70 max-w-lg shadow-[4px_4px_0px_rgba(0,0,0,0.03)] rounded-sm uppercase font-semibold">
            Communication Gateway • Collaboration Network • Professional Inquiry Portal
          </div>
          
          <div className="flex gap-4 mt-3 font-mono text-[8.5px] font-extrabold tracking-widest text-emerald-600">
            <span>STATUS: ONLINE</span>
            <span>SIGNAL STRENGTH: 100%</span>
            <span>NETWORK: VERIFIED</span>
          </div>
        </div>

        {/* 3-COLUMN Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 py-4 relative items-stretch">
          
          {/* COLUMN 1: LEFT SIDE (Terminal, Availability, Metrics) */}
          <div className="lg:col-span-3 flex flex-col gap-5 text-left order-3 lg:order-1">
            {/* Live Terminal Console */}
            <div className="bg-black/95 text-emerald-400 border border-[#00CC52]/20 p-4 rounded-sm font-mono text-[8.5px] sm:text-[9px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8),0_0_15px_rgba(16,185,129,0.08)] flex flex-col justify-between h-[160px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/30" />
              
              <div className="overflow-y-auto no-scrollbar flex-1 space-y-1.5 max-h-[120px]">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="leading-tight">
                    {log}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
              
              <div className="flex items-center gap-1.5 border-t border-emerald-950/50 pt-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-ping" />
                <span className="text-emerald-500/50">PARTH_OS@CONSOLE:~$</span>
                <span className="w-1.5 h-3 bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-white/60 backdrop-blur-md border border-black/10 p-5 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[8px] font-black text-[#FF3E6C] tracking-widest uppercase block mb-3">// AVAILABILITY</span>
              <div className="space-y-3 font-mono text-[9px] sm:text-[10px] text-black/75">
                <div>
                  <span className="text-black/40 block">STATUS:</span>
                  <span className="font-extrabold text-emerald-600 uppercase">AVAILABLE FOR OPPORTUNITIES</span>
                </div>
                <div>
                  <span className="text-black/40 block">ROLE:</span>
                  <span className="font-extrabold text-black uppercase">B.Tech Information Technology Student</span>
                </div>
                <div>
                  <span className="text-black/40 block">LOCATION:</span>
                  <span className="font-extrabold text-black">MAHARASHTRA, INDIA</span>
                </div>
                <div>
                  <span className="text-black/40 block mb-1">OPEN FOR:</span>
                  <div className="space-y-0.5 text-black font-extrabold">
                    <div>• Internships</div>
                    <div>• Collaborations</div>
                    <div>• Hackathons</div>
                    <div>• Startup Discussions</div>
                    <div>• Development Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Metrics Card */}
            <div className="bg-white/60 backdrop-blur-md border border-black/10 p-5 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[8px] font-black text-black/40 tracking-widest uppercase block mb-3">// SYSTEM_METRICS</span>
              <div className="space-y-2.5 font-mono text-[10px] text-black/75">
                <div className="flex justify-between border-b border-black/[0.03] pb-1.5">
                  <span className="text-black/40 uppercase">AVG RESPONSE:</span>
                  <span className="font-extrabold text-black">&lt; 24 Hours</span>
                </div>
                <div className="flex justify-between border-b border-black/[0.03] pb-1.5">
                  <span className="text-black/40 uppercase">STATUS:</span>
                  <span className="font-extrabold text-emerald-600">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">RELIABILITY:</span>
                  <span className="font-extrabold text-black">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CENTER FORM PANEL */}
          <div className="lg:col-span-5 bg-white/50 backdrop-blur-xl border border-[#A8D3C8] rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-[3px_3px_0px_rgba(168,211,200,0.2)] hover:border-black transition-colors duration-300 order-1 lg:order-2">
            <div>
              <span className="font-mono text-[9px] text-[#00CC52] font-extrabold tracking-widest uppercase block mb-5">// SECURE_INCOMING_TRANSMISSION</span>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-[9.5px] sm:text-[10px]">
                {/* Field 1: NAME */}
                <div className="flex flex-col gap-1 text-left relative">
                  <label className="text-black/40 font-extrabold uppercase tracking-wider">// FULL NAME</label>
                  <input 
                    type="text" 
                    placeholder="ENTER YOUR IDENTIFICATION"
                    {...register('name')}
                    className={`w-full px-3 py-2.5 bg-white/70 border rounded transition-all focus:bg-white focus:outline-none uppercase font-semibold text-black ${
                      errors.name ? 'border-red-500' : 'border-black/10 focus:border-[#FF3E6C] focus:shadow-[0_0_8px_rgba(255,62,108,0.15)]'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-[8.5px] mt-0.5 font-bold">// {errors.name.message}</span>}
                </div>

                {/* Field 2: EMAIL */}
                <div className="flex flex-col gap-1 text-left relative">
                  <label className="text-black/40 font-extrabold uppercase tracking-wider">// EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="ENTER SENDER ADDRESS"
                    {...register('email')}
                    className={`w-full px-3 py-2.5 bg-white/70 border rounded transition-all focus:bg-white focus:outline-none font-semibold text-black ${
                      errors.email ? 'border-red-500' : 'border-black/10 focus:border-[#FF3E6C] focus:shadow-[0_0_8px_rgba(255,62,108,0.15)]'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-[8.5px] mt-0.5 font-bold">// {errors.email.message}</span>}
                </div>

                {/* Grid for Organization & Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Field 3: ORGANIZATION */}
                  <div className="flex flex-col gap-1 text-left relative">
                    <label className="text-black/40 font-extrabold uppercase tracking-wider">// ORGANIZATION / COLLEGE</label>
                    <input 
                      type="text" 
                      placeholder="COLLEGE OR COMPANY"
                      {...register('organization')}
                      className={`w-full px-3 py-2.5 bg-white/70 border rounded transition-all focus:bg-white focus:outline-none uppercase font-semibold text-black ${
                        errors.organization ? 'border-red-500' : 'border-black/10 focus:border-[#FF3E6C] focus:shadow-[0_0_8px_rgba(255,62,108,0.15)]'
                      }`}
                    />
                    {errors.organization && <span className="text-red-500 text-[8.5px] mt-0.5 font-bold">// {errors.organization.message}</span>}
                  </div>

                  {/* Field 4: SUBJECT */}
                  <div className="flex flex-col gap-1 text-left relative">
                    <label className="text-black/40 font-extrabold uppercase tracking-wider">// SUBJECT</label>
                    <input 
                      type="text" 
                      placeholder="TRANSMISSION TOPIC"
                      {...register('subject')}
                      className={`w-full px-3 py-2.5 bg-white/70 border rounded transition-all focus:bg-white focus:outline-none uppercase font-semibold text-black ${
                        errors.subject ? 'border-red-500' : 'border-black/10 focus:border-[#FF3E6C] focus:shadow-[0_0_8px_rgba(255,62,108,0.15)]'
                      }`}
                    />
                    {errors.subject && <span className="text-red-500 text-[8.5px] mt-0.5 font-bold">// {errors.subject.message}</span>}
                  </div>
                </div>

                {/* Field 5: PROJECT TYPE */}
                <div className="flex flex-col gap-1 text-left relative">
                  <label className="text-black/40 font-extrabold uppercase tracking-wider">// PROJECT TYPE</label>
                  <select 
                    {...register('projectType')}
                    className="w-full px-3 py-2.5 bg-white/70 border border-black/10 rounded transition-all focus:bg-white focus:outline-none font-semibold text-black uppercase cursor-pointer"
                  >
                    <option value="Collaboration">Collaboration</option>
                    <option value="Internship Opportunity">Internship Opportunity</option>
                    <option value="Freelance Work">Freelance Work</option>
                    <option value="Startup Discussion">Startup Discussion</option>
                    <option value="Hackathon Team">Hackathon Team</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Field 6: MESSAGE */}
                <div className="flex flex-col gap-1 text-left relative">
                  <label className="text-black/40 font-extrabold uppercase tracking-wider">// MESSAGE</label>
                  <textarea 
                    rows={4}
                    placeholder="COMPILE TRANSMISSION PAYLOAD..."
                    {...register('message')}
                    className={`w-full px-3 py-2.5 bg-white/70 border rounded transition-all focus:bg-white focus:outline-none uppercase font-semibold text-black resize-none ${
                      errors.message ? 'border-red-500' : 'border-black/10 focus:border-[#FF3E6C] focus:shadow-[0_0_8px_rgba(255,62,108,0.15)]'
                    }`}
                  />
                  {errors.message && <span className="text-red-500 text-[8.5px] mt-0.5 font-bold">// {errors.message.message}</span>}
                </div>

                {/* SUBMIT BUTTON WITH COOLDOWN */}
                <button 
                  type="submit"
                  disabled={isTransmitting || cooldown > 0}
                  className={`w-full py-3 bg-black text-white hover:bg-[#FF3E6C] hover:text-white rounded transition-all duration-300 font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:shadow-none interactive-hover ${
                    (isTransmitting || cooldown > 0) ? 'opacity-55 cursor-not-allowed' : ''
                  }`}
                >
                  {isTransmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING MESSAGE...
                    </span>
                  ) : cooldown > 0 ? (
                    <span>COOLDOWN ACTIVE: {cooldown}S</span>
                  ) : (
                    <>
                      TRANSMIT MESSAGE
                      <Send size={12} className="stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Transmission Feedback Alerts */}
            <div className="mt-5 text-left font-mono">
              <AnimatePresence mode="wait">
                {transmissionStatus === 'SUCCESS' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="border border-[#00CC52]/40 bg-[#00FF66]/10 text-emerald-800 p-4 rounded-sm flex flex-col gap-1.5 shadow-[2px_2px_0px_rgba(16,185,129,0.15)]"
                  >
                    <span className="font-black text-xs uppercase flex items-center gap-1.5 text-emerald-600">
                      <Check size={14} className="stroke-[3]" />
                      CONNECTION ESTABLISHED
                    </span>
                    <p className="text-[10px] leading-tight">
                      Your transmission has been delivered successfully. I will respond as soon as possible.
                    </p>
                    <div className="text-[8px] opacity-65 border-t border-[#00CC52]/10 pt-1.5 mt-1.5">
                      Recipient: parthbulbule123@gmail.com <br />
                      Expected Response: Within 24 Hours
                    </div>
                  </motion.div>
                )}

                {transmissionStatus === 'ERROR' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="border border-red-500/40 bg-red-500/[0.08] text-red-800 p-4 rounded-sm flex flex-col gap-1"
                  >
                    <span className="font-black text-xs uppercase flex items-center gap-1.5 text-red-500">
                      <ShieldAlert size={14} className="stroke-[2.5]" />
                      TRANSMISSION FAILED
                    </span>
                    <p className="text-[10px] leading-tight">
                      Please try again later or contact directly at parthbulbule123@gmail.com.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* COLUMN 3: RIGHT SIDE NODES */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left justify-between order-2 lg:order-3">
            {[
              {
                num: '01',
                name: 'LinkedIn',
                description: 'Professional Network',
                icon: <Linkedin size={16} />,
                href: 'https://linkedin.com'
              },
              {
                num: '02',
                name: 'GitHub',
                description: 'Code Repository',
                icon: <Github size={16} />,
                href: 'https://github.com/Parthbo7'
              },
              {
                num: '03',
                name: 'Instagram',
                description: 'Creative Feed',
                icon: <Instagram size={16} />,
                href: 'https://instagram.com'
              },
              {
                num: '04',
                name: 'Email',
                description: 'Primary communication channel for professional inquiries, collaborations, internships, hackathons, and project discussions.',
                email: 'parthbulbule123@gmail.com',
                icon: <Mail size={16} />,
                isEmail: true
              },
              {
                num: '05',
                name: 'Resume',
                description: 'Download CV',
                icon: <FileText size={16} />,
                href: '#resume'
              }
            ].map((node) => {
              if (node.isEmail) {
                return (
                  <motion.div
                    key={node.num}
                    onMouseEnter={() => playClickTick(1500, 0.015)}
                    className="p-4 bg-white border border-[#A8D3C8] rounded-sm flex flex-col justify-between gap-4 shadow-[2px_2px_0px_rgba(168,211,200,0.15)] hover:border-black transition-all duration-300 relative select-none"
                    whileHover={{ 
                      y: -4,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.02), 4px 4px 0px rgba(0,0,0,0.8)' 
                    }}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-mono text-[9px] tracking-widest text-[#00CC52] font-extrabold uppercase">
                        // NODE_{node.num}
                      </span>
                      <div className="p-2 bg-black/5 rounded-full text-black/50">
                        {node.icon}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h4 className="font-display font-black text-sm tracking-tighter text-black uppercase leading-none">
                        {node.name.toUpperCase()}
                      </h4>
                      <p className="font-sans text-[10px] text-black/60 leading-normal">
                        {node.description}
                      </p>
                      <span className="font-mono text-[10px] font-black text-[#FF3E6C] mt-1 break-all select-text">
                        {node.email}
                      </span>
                    </div>

                    {/* Copy Alert */}
                    <AnimatePresence>
                      {copied && (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute right-4 bottom-14 bg-emerald-500 text-white font-mono text-[8.5px] px-2 py-1 rounded shadow-md z-30"
                        >
                          Copied to Clipboard!
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Action buttons inside Card */}
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-black/5 font-mono text-[8px] font-extrabold tracking-widest">
                      <a 
                        href={`mailto:${node.email}`}
                        className="py-1.5 border border-black/10 hover:border-black rounded-sm text-center flex items-center justify-center gap-1 bg-white hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        [ EMAIL ME ]
                      </a>
                      <button 
                        onClick={handleCopyEmail}
                        className="py-1.5 border border-black/10 hover:border-black rounded-sm text-center flex items-center justify-center gap-1 bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        [ COPY EMAIL ]
                      </button>
                    </div>

                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={node.num}
                  href={node.href}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => playClickTick(1500, 0.015)}
                  className="p-4 bg-white border border-[#A8D3C8] rounded-sm flex flex-col justify-between gap-4 shadow-[2px_2px_0px_rgba(168,211,200,0.15)] hover:border-black transition-all duration-300 cursor-pointer interactive-hover select-none"
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.02), 4px 4px 0px rgba(0,0,0,0.8)' 
                  }}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-mono text-[9px] tracking-widest text-[#00CC52] font-extrabold uppercase">
                      // NODE_{node.num}
                    </span>
                    <div className="p-2 bg-black/5 rounded-full text-black/50 group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {node.icon}
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-display font-black text-sm tracking-tighter text-black uppercase leading-none">
                        {node.name.toUpperCase()}
                      </h4>
                      <p className="font-mono text-[8px] text-black/40 leading-normal">
                        {node.description}
                      </p>
                    </div>
                    <ExternalLink size={10} className="text-black/35 group-hover:text-[#FF3E6C] transition-colors mb-0.5" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* EASTER EGG POPUP MODAL */}
        <AnimatePresence>
          {showContactEgg && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-md bg-black border border-[#00FF66] rounded-sm p-6 text-left font-mono text-emerald-400 shadow-[0_0_25px_rgba(0,255,102,0.25)] relative"
              >
                <div className="flex justify-between items-center border-b border-[#00FF66]/20 pb-3 mb-4">
                  <span className="font-extrabold text-[#00FF66] text-[10px] tracking-widest uppercase">
                    &gt; SIGNAL_DECRYPT: CHANNEL_UNLOCKED
                  </span>
                  <button 
                    onClick={() => {
                      playClickTick(1600, 0.05);
                      setShowContactEgg(false);
                    }}
                    className="text-emerald-500 hover:text-emerald-300 font-extrabold text-[10px] tracking-wider uppercase border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/10 cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>

                <div className="space-y-4 text-xs select-none">
                  <div className="text-[#00FF66] font-extrabold uppercase animate-pulse mb-3">
                    DEVELOPER CHANNEL UNLOCKED
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-emerald-600 uppercase text-[9px] font-bold">CURRENT FOCUS:</div>
                    <div className="space-y-0.5 text-[#00FF66]">
                      <div>• CampusConnect</div>
                      <div>• AI Research</div>
                      <div>• Portfolio OS</div>
                      <div>• Future Startup Ideas</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-emerald-600 uppercase text-[9px] font-bold">STATUS:</div>
                    <div className="text-yellow-500 font-extrabold">ALWAYS BUILDING</div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
