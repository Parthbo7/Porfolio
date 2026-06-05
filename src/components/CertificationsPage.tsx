import { motion } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

interface CertificationsPageProps {
  onBack: () => void;
}

const certificationsList = [
  {
    title: 'Google Cloud Study Jams',
    issuer: 'Google Developer Groups',
    date: '2024',
    code: 'GCP-STUDYJAMS-2024',
    desc: 'Hands-on validation of cloud architecture foundations, database setup, connection hubs, and serverless hosting paradigms.',
    icon: Cpu,
    status: 'VERIFIED',
    color: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-600'
  },
  {
    title: 'AI/ML Engineering Foundations',
    issuer: 'DeepLearning.AI / Coursera',
    date: '2025',
    code: 'AIML-FOUND-2025',
    desc: 'Structured verification of neural weights training, supervised algorithms, feature engineering, and neural NLP classifiers.',
    icon: ShieldCheck,
    status: 'ACTIVE',
    color: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-600'
  },
  {
    title: 'Advanced React Stack & Motion Design',
    issuer: 'Frontend Masterclasses',
    date: '2025',
    code: 'REACT-STACK-MOTION',
    desc: 'Creative coding principles, WebGL shader integrations, advanced hook lifecycles, and Framer Motion complex keyframe timelines.',
    icon: Award,
    status: 'VERIFIED',
    color: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-600'
  }
];

export const CertificationsPage = ({ onBack }: CertificationsPageProps) => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col font-sans pb-32 bg-transparent text-black select-none">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 custom-beige-grid opacity-35" />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute left-[10%] top-[25%] w-72 h-72 rounded-full bg-cyan-500/5 blur-[80px]" />
        <div className="absolute right-[15%] top-[55%] w-80 h-80 rounded-full bg-yellow-500/5 blur-[90px]" />
      </div>

      {/* CLOSE HUD BUTTON */}
      <div className="fixed top-8 left-8 sm:top-12 sm:left-12 z-[110]">
        <motion.button
          onClick={() => {
            playClickTick(1600, 0.05);
            onBack();
          }}
          onMouseEnter={() => playClickTick(1600, 0.02)}
          className="flex items-center gap-3 interactive-hover group backdrop-blur-2xl border border-black/10 bg-white/70 px-5 py-2.5 rounded-sm transition-all duration-300 text-black/60 hover:text-black hover:border-black/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#6B6B6B]" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-black/70">CLOSE_ARCHIVE</span>
        </motion.button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-32 w-full relative z-10 text-left">
        
        {/* HEADER SECTION */}
        <header className="mb-16 relative">
          <div className="inline-flex items-center gap-4 mb-4 opacity-45">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-yellow-500 to-transparent" />
            <span className="font-mono text-[9px] text-yellow-400 font-extrabold tracking-[0.28em] uppercase">SEC_05 // CERTIFICATIONS</span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-yellow-500 to-transparent" />
          </div>

          <h1 className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.9] tracking-tighter text-black uppercase select-none mt-1">
            CERTIFICATIONS
          </h1>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase text-black/40 mt-3 max-w-xl">
            Verified educational credentials, course checkpoints, and creative engineering training indexes.
          </p>
        </header>

        {/* List Grid */}
        <div className="grid grid-cols-1 gap-6">
          {certificationsList.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                className="group border border-black/10 bg-white/85 backdrop-blur-xl p-6 rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => playClickTick(1400, 0.02)}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 border border-black/5 bg-black/[0.01] rounded-full text-black/60 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-lg uppercase tracking-tight text-black leading-none">
                        {cert.title}
                      </h3>
                      <p className="font-mono text-[8px] sm:text-[9.5px] tracking-wider text-black/40 uppercase mt-1">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-[8px] sm:text-[9.5px] uppercase tracking-wider font-extrabold">
                    <span>{cert.date}</span>
                    <span className={`px-2.5 py-0.5 border rounded-sm ${cert.color}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-[12.5px] sm:text-[13.5px] text-black/65 leading-relaxed font-light mb-4 text-left">
                  {cert.desc}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-black/5 font-mono text-[8.5px] text-black/35 uppercase">
                  <span>ID: {cert.code}</span>
                  <span className="flex items-center gap-1 hover:text-black transition-colors cursor-pointer">
                    Verify Credential
                    <ExternalLink size={10} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
