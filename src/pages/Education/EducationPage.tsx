import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Terminal } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { SectionHeader } from '../../components/sections/SectionHeader';

export const EducationPage = () => {
  return (
    <PageLayout
      onBack="/"
      backLabel="CLOSE_ARCHIVE"
      statusLabel="ACADEMIC_REGISTRY"
      glowColors={{
        left: 'bg-emerald-500/5',
        right: 'bg-red-500/5'
      }}
      initialLogs={[
        '> EDUCATION REGISTRY SYNCHRONIZED...',
        '> ACADEMIC NODES: RESOLVED // STATE: NOMINAL_'
      ]}
      telemetryLogs={[
        'COMPILING CURRICULUM ARCHIVES...',
        'SYNCING SGPA METRICS...',
        'RETRIEVING ENROLLMENT RECORDS...',
        'SYSTEM CORE ON STANDBY...'
      ]}
    >
      <div className="max-w-4xl mx-auto w-full text-left">
        {/* HEADER SECTION */}
        <SectionHeader
          title="EDUCATION"
          categoryLabel="SEC_04 // ACADEMIC REGISTRY"
          statusNode="ACADEMIC_OS_NODE_04"
          statusColor="#FF3E6C"
          description="Formal engineering registry, curriculum specifications, and computational analytics focus nodes."
          subtitle="ENGINEERING EDUCATION METRICS"
        />

        {/* Timeline block */}
        <div className="space-y-12">
          {/* MGM COE NANDED */}
          <motion.div
            className="border border-black/10 bg-white/80 backdrop-blur-xl rounded-sm p-6 sm:p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.02)] hover:border-black transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          >
            <div className="absolute -bottom-10 -right-4 font-display font-black text-9xl text-black/[0.02] pointer-events-none">
              IT
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-full text-red-500">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
                    Bachelor of Engineering
                  </h3>
                  <p className="font-mono text-[9px] sm:text-[10px] tracking-wider text-black/40 uppercase mt-0.5">
                    MGM College of Engineering, Nanded
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 font-mono text-[8px] sm:text-[9.5px] text-black/60 sm:text-right">
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <Calendar size={12} className="text-red-500" />
                  2023 - 2027
                </span>
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin size={12} className="text-red-500" />
                  Nanded, India
                </span>
              </div>
            </div>

            {/* Core details */}
            <div className="space-y-4 font-sans text-[13px] sm:text-[14.5px] text-black/70 leading-relaxed font-light border-t border-black/5 pt-6">
              <p>
                Currently pursuing a Bachelor's degree in <strong className="font-bold text-black">Information Technology</strong>. My coursework centers around advanced systems design, data structures and algorithms, object-oriented concepts, and human-computer interactions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 font-mono text-[9.5px] sm:text-xs">
                <div className="p-4 bg-black/[0.015] border border-black/5 rounded-sm flex items-center gap-3">
                  <BookOpen size={16} className="text-emerald-500" />
                  <div>
                    <div className="text-black/40">// SPECIALTIES</div>
                    <div className="font-extrabold uppercase">Algorithms & Web Tech</div>
                  </div>
                </div>
                
                <div className="p-4 bg-black/[0.015] border border-black/5 rounded-sm flex items-center gap-3">
                  <Terminal size={16} className="text-cyan-500" />
                  <div>
                    <div className="text-black/40">// ACTIVE SCORE</div>
                    <div className="font-extrabold uppercase text-emerald-500">GPA NOMINAL</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};
export default EducationPage;
