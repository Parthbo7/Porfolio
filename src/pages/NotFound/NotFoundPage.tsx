import { motion } from 'framer-motion';
import { ShieldAlert, RefreshCw, Terminal, Home } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { navigateWithTransition } from '../../utils/SystemNavigator';
import { playClickTick } from '../../utils/SoundManager';

export const NotFoundPage = () => {
  const handleHomeRedirect = () => {
    playClickTick(1800, 0.08);
    navigateWithTransition('/');
  };

  return (
    <PageLayout
      onBack="/"
      backLabel="RETURN_HOME"
      initialLogs={[
        '> WARNING: UNRESOLVED PATH SEQUENCE DETECTED...',
        '> ERROR 404: ROUTE_NOT_FOUND // MEMORY SEGMENT FAULT'
      ]}
      telemetryLogs={[
        'AUDITING PORT 404 INTERFACES...',
        'ROUTE LOGS NOT VERIFIED.',
        'COMPUTATIONAL REWRITE MISMATCH.',
        'SCANNING DIRECTORY TREE...',
        'GATEWAY STATUS: BLOCKED // UNKNOWN_ROUTE'
      ]}
      statusLabel="UNRESOLVED_NODE"
      glowColors={{
        left: 'bg-[#FF3E6C]/8',
        right: 'bg-[#D4AF37]/5',
        center: 'bg-black/5'
      }}
    >
      <div className="w-full flex-1 flex flex-col justify-center items-center py-12 lg:py-20 text-center relative z-20">
        
        {/* Dynamic Warning Icon Badge */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 p-4 bg-[#FF3E6C]/10 border border-[#FF3E6C]/30 rounded-full text-[#FF3E6C] flex items-center justify-center w-16 h-16 shadow-[0_0_20px_rgba(255,62,108,0.15)]"
        >
          <ShieldAlert size={28} />
        </motion.div>

        {/* Massive 404 Typography */}
        <div className="relative mb-6 select-none">
          <h1 className="font-display font-black text-[18vw] sm:text-[14vw] lg:text-[12vw] leading-none tracking-tighter text-[#FF3E6C] uppercase">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
            <span className="font-mono text-9xl tracking-widest text-black">FAULT</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="inline-flex items-center gap-4 mb-6 opacity-60">
          <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#FF3E6C] to-transparent" />
          <span className="font-mono text-[9px] sm:text-xs text-[#FF3E6C] font-extrabold tracking-[0.28em] uppercase">
            ROUTE_DECRYPTION_FAILED
          </span>
          <div className="h-[1.5px] w-12 bg-gradient-to-l from-[#FF3E6C] to-transparent" />
        </div>

        {/* Summary Description */}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-black uppercase tracking-tight mb-4 max-w-2xl">
          SYSTEM FAULT: ENDPOINT NOT DEFINED
        </h2>
        
        <p className="font-sans text-[13px] sm:text-[15px] leading-relaxed text-black/60 max-w-xl mx-auto uppercase font-semibold mb-12">
          THE ROUTE CHANNELS YOU ARE ATTEMPTING TO ACCESS ARE UNINITIALIZED, RESTRICTED, OR UNDERGOING CRITICAL DEFRAGMENTATION.
        </p>

        {/* Terminal Diagnostic Block */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md p-5 bg-black/95 rounded-sm text-red-400 font-mono text-[9px] sm:text-xs space-y-1.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8),0_12px_40px_rgba(0,0,0,0.15)] border border-red-500/10 text-left mb-10"
        >
          <div className="text-red-500 font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-3 flex items-center gap-2">
            <RefreshCw size={12} className="animate-spin text-red-500" />
            DIAGNOSING ROUTE DEVIATION...
          </div>
          <div className="flex justify-between">
            <span>&gt; ERROR_CODE:</span>
            <span className="text-red-500 font-bold">STATUS_404_NOT_FOUND</span>
          </div>
          <div className="flex justify-between">
            <span>&gt; TARGET_PATH:</span>
            <span className="text-white font-bold">{window.location.pathname}</span>
          </div>
          <div className="flex justify-between">
            <span>&gt; ACTION:</span>
            <span className="text-yellow-400 font-bold">INITIALIZING REDIRECT STACK</span>
          </div>
          <div className="border-t border-white/5 pt-2 mt-2 flex items-center gap-1.5 text-zinc-500">
            <Terminal size={12} />
            <span>sys_dns_resolver: path match failed.</span>
          </div>
        </motion.div>

        {/* CTA Home Button */}
        <motion.button
          onClick={handleHomeRedirect}
          onMouseEnter={() => playClickTick(1500, 0.02)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.2em] font-extrabold text-[#FF3E6C] hover:text-black border border-black/10 hover:border-black bg-white px-8 py-3.5 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300 cursor-pointer flex items-center gap-2 uppercase interactive-hover"
        >
          <Home size={13} />
          INITIATE_HOME_GATEWAY
        </motion.button>

      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
