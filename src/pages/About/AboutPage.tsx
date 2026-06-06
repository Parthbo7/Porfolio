import { PageLayout } from '../../components/layout/PageLayout';
import { AboutMeSection } from '../../components/sections/AboutMeSection';

export const AboutPage = () => {
  return (
    <PageLayout
      onBack="/"
      backLabel="CLOSE_ARCHIVE"
      statusLabel="IDENTITY_OS_NODE"
      glowColors={{
        left: 'bg-emerald-500/5',
        right: 'bg-[#FF3E6C]/5'
      }}
      initialLogs={[
        '> IDENTITY ARCHIVES SYNCHRONIZED...',
        '> IDENTITY COMPONENT: NOMINAL_'
      ]}
      telemetryLogs={[
        'COMPILING PERSONALITY PROFILES...',
        'SYNCING COGNITIVE NODES...',
        'RETRIEVING BIOMETRIC PARAMETERS...',
        'SYSTEM CORE ON STANDBY...'
      ]}
    >
      <div className="-mt-16 w-full">
        <AboutMeSection />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
