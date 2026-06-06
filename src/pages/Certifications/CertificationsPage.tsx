import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { SectionHeader } from '../../components/sections/SectionHeader';
import { playClickTick } from '../../utils/SoundManager';

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

export const CertificationsPage = () => {
  return (
    <PageLayout
      onBack="/"
      backLabel="CLOSE_ARCHIVE"
      statusLabel="CERTIFICATIONS_VAULT"
      glowColors={{
        left: 'bg-cyan-500/5',
        right: 'bg-yellow-500/5'
      }}
      initialLogs={[
        '> CREDENTIAL VAULT ONLINE...',
        '> CERTIFICATES VERIFIED NOMINAL // ACCESS STATUS: GRANTED'
      ]}
      telemetryLogs={[
        'VERIFYING CRYPTO ENVELOPE...',
        'CHECKING ACADEMIC HASH IDENTITIES...',
        'SYNCING SYSTEM RECOGNITIONS...',
        'OS ARCHIVE NOMINAL...'
      ]}
    >
      <div className="max-w-4xl mx-auto w-full text-left">
        {/* HEADER SECTION */}
        <SectionHeader
          title="CERTIFICATIONS"
          categoryLabel="SEC_05 // CERTIFICATIONS"
          statusNode="CREDENTIAL_OS_NODE_05"
          statusColor="#D4AF37"
          description="Verified educational credentials, course checkpoints, and creative engineering training indexes."
          subtitle="AUTHENTICATED ACADEMIC CREDENTIALS"
        />

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
    </PageLayout>
  );
};
export default CertificationsPage;
