import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Terminal, Check, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { playClickTick } from '../utils/SoundManager';

interface ExperienceHeroProps {
  onBack?: () => void;
  protocolLabel: string;
  title: string | string[];
  subtitle: string;
  infoLabel: string;
}

export function ExperienceHero({ onBack, protocolLabel, title, subtitle, infoLabel }: ExperienceHeroProps) {
  return (
    <header className="mb-20 flex flex-col items-center text-center relative z-10">
      {/* FIXED CLOSE HUD BUTTON */}
      {onBack && (
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
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-6 opacity-85"
      >
        <div className="h-[1px] w-8 bg-[#00CC52]/40" />
        <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#00CC52] font-extrabold">{protocolLabel}</span>
        <div className="h-[1px] w-8 bg-[#00CC52]/40" />
      </motion.div>

      <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase mb-4 tracking-tighter text-black max-w-4xl select-none">
        {Array.isArray(title) ? (
          title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))
        ) : (
          title
        )}
      </h1>
      <p className="font-sans text-sm sm:text-base tracking-wide leading-relaxed max-w-2xl text-neutral-700 mb-8 px-4 font-normal">
        {subtitle}
      </p>

      <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#00CC52] font-bold tracking-widest uppercase bg-white/70 border border-black/10 px-4 py-2 rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.1)]">
        <Calendar size={12} className="align-middle mr-1" />
        {infoLabel}
      </div>
    </header>
  );
}

interface ExperienceMetadataProps {
  badges: Array<{
    label: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    rotate: number;
    delay: number;
    style?: string;
  }>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ExperienceMetadata({ badges, containerRef }: ExperienceMetadataProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {badges.map((sticker) => (
        <motion.div
          key={sticker.label}
          className={`absolute border px-3 py-1.5 font-mono text-[7px] font-extrabold uppercase tracking-widest pointer-events-auto rounded-[2px] cursor-grab active:cursor-grabbing transition-colors hidden md:block ${
            sticker.style || 'bg-white text-black border-black/10 shadow-[2px_2px_0px_rgba(0,0,0,0.03)]'
          }`}
          style={{
            top: sticker.top,
            bottom: sticker.bottom,
            left: sticker.left,
            right: sticker.right,
            rotate: `${sticker.rotate}deg`,
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 6 + sticker.delay * 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: sticker.delay,
          }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.12}
          whileHover={{ scale: 1.06 }}
        >
          <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-[#00CC52] animate-pulse align-middle" />
          {sticker.label}
        </motion.div>
      ))}
    </div>
  );
}

interface ExperienceOverviewProps {
  ledgerLabel?: string;
  identityLabel: string;
  headline: string;
  points: string[];
  pointsTitle?: string;
  sidebarTitle?: string;
  sidebarLabel?: string;
  sidebarItems?: string[];
}

export function ExperienceOverview({
  ledgerLabel,
  identityLabel,
  headline,
  points,
  pointsTitle,
  sidebarTitle,
  sidebarLabel,
  sidebarItems,
}: ExperienceOverviewProps) {
  return (
    <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
      <div className="relative backdrop-blur-md border border-black/10 rounded-sm p-8 sm:p-12 bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500">
        <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-black/35">
          {ledgerLabel || 'LEDGER_NODE // CORE_OBJECTIVE'}
        </div>

        <div className="mb-8 pt-4">
          <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
            {identityLabel}
          </span>
          <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tighter leading-tight text-black max-w-3xl">
            {headline}
          </h3>
        </div>

        <div className="h-[1px] w-full bg-black/5 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Objective list */}
          <div className="lg:col-span-8 flex flex-col gap-5 text-left">
            {pointsTitle && (
              <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest block">
                {pointsTitle}
              </span>
            )}
            <div className="flex flex-col gap-4 font-sans text-[14.5px] leading-relaxed font-light text-neutral-700">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={14} className="text-[#00CC52] mt-1 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          {sidebarItems && sidebarItems.length > 0 && (
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="border border-black/10 bg-white/60 p-6 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5">
                  {sidebarLabel || 'STACK_SPEC'}
                </div>
                {sidebarTitle && (
                  <h4 className="font-mono text-[10px] text-[#00CC52] tracking-wider uppercase font-bold mb-4">
                    {sidebarTitle}
                  </h4>
                )}

                <div className="flex flex-wrap gap-2">
                  {sidebarItems.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[9px] text-black/60 border border-black/10 bg-white/80 px-2.5 py-1 rounded-full hover:border-[#00CC52] hover:shadow-[0_0_8px_rgba(0,255,82,0.1)] transition-all duration-300 select-none cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface ExperienceGalleryProps {
  images: Array<{
    src: string;
    caption: string;
    sizeClass?: string;
    rotate?: number;
  }>;
  title?: string;
  label?: string;
}

export function ExperienceGallery({ images, title, label }: ExperienceGalleryProps) {
  return (
    <section className="w-full max-w-5xl mx-auto mb-20 px-2 text-center relative z-10">
      <div className="inline-flex items-center gap-3 mb-8 opacity-45">
        <div className="h-[1.5px] w-8 bg-[#00CC52]" />
        <span className="font-mono text-[8px] text-black tracking-[0.25em] uppercase font-bold">
          {label || 'VISUAL_PROOF'}
        </span>
      </div>
      <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter text-black mb-10">
        {title || 'SHOWCASE ARCHIVES'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {images.map((slide, idx) => {
          const defaultRotate = idx % 2 === 0 ? -1.5 : 1.5;
          const finalRotate = slide.rotate !== undefined ? slide.rotate : defaultRotate;

          return (
            <motion.div
              key={idx}
              whileHover={{ y: -8, rotate: finalRotate * 0.5 }}
              className="flex flex-col gap-3 group"
            >
              <div
                className="p-[10px] rounded-[18px] border border-black/10 hover:border-black bg-white/80 overflow-hidden flex items-center justify-center transition-all duration-500 backdrop-blur-md relative shadow-[10px_10px_0px_rgba(168,211,200,0.12)]"
                style={{ rotate: `${finalRotate}deg` }}
              >
                <div className="w-full flex items-center justify-center overflow-hidden rounded-[12px] bg-black/[0.02]">
                  <img
                    src={slide.src}
                    alt={slide.caption}
                    className={`w-full ${slide.sizeClass || 'h-[320px] sm:h-[400px]'} object-contain transition-transform duration-700 group-hover:scale-102`}
                  />
                </div>
              </div>
              <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-black/45 block text-center font-bold mt-2">
                {slide.caption}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

interface ExperienceTagsProps {
  tags: string[];
  title?: string;
  label?: string;
}

export function ExperienceTags({ tags, title, label }: ExperienceTagsProps) {
  return (
    <section className="w-full max-w-5xl mx-auto mb-20 text-left relative z-10">
      <div className="border border-black/10 bg-white/80 backdrop-blur-md rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-[4px_4px_0px_rgba(0,0,0,0.02)]">
        <div className="text-left">
          <span className="font-mono text-[9px] text-[#00CC52] font-black tracking-widest block uppercase mb-1">
            {label || 'COMPETENCY_ACQUIRED'}
          </span>
          <h4 className="font-display font-black text-lg sm:text-xl uppercase text-black leading-none mb-1">
            {title || 'KEY LEARNING SPECIFICATIONS'}
          </h4>
        </div>

        <div className="flex flex-wrap gap-2 max-w-xl">
          {tags.map((item) => (
            <span
              key={item}
              className="font-mono text-[9px] text-[#00CC52] font-bold border border-[#00CC52]/20 bg-[#00FF66]/5 px-3 py-1 rounded-sm uppercase select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceFooterProps {
  onBack: () => void;
  conclusionTitle?: string;
  conclusionText?: string;
  logs: string[];
  gitUrl?: string;
  gitTitle?: string;
  gitDescription?: string;
}

export function ExperienceFooter({
  onBack,
  conclusionTitle,
  conclusionText,
  logs,
  gitUrl,
  gitTitle,
  gitDescription,
}: ExperienceFooterProps) {
  return (
    <div className="w-full flex flex-col gap-20">
      {/* GITHUB SOURCE CODE ARCHIVE SECTION */}
      {gitUrl && (
        <section className="w-full max-w-5xl mx-auto mb-4 relative z-10 text-left">
          <div className="relative border border-[#00CC52]/30 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/90 shadow-[10px_10px_0px_rgba(0,255,82,0.05)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="absolute top-0 right-0 font-mono text-[6px] text-black/30 uppercase tracking-[0.25em] px-2 py-0.5 bg-white border-l border-b border-black/10">
              GIT_REPOSITORY
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
                SOURCE CODE ARCHIVE
              </span>
              <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black leading-none mb-4 pt-1">
                {gitTitle || 'PROJECT REPOSITORY'}
              </h3>
              <p className="font-sans text-[13.5px] text-neutral-700 leading-relaxed font-light max-w-xl">
                {gitDescription || 'Access the project source code archives, configuration, and modules.'}
              </p>
            </div>

            <motion.a
              href={gitUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickTick(1600, 0.08)}
              className="bg-black text-white hover:bg-[#00CC52] hover:text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-6 py-3 border border-black rounded-sm shadow-[3px_3px_0px_rgba(0,255,82,0.15)] flex items-center gap-2 cursor-pointer transition-colors duration-300 self-stretch md:self-center justify-center shrink-0 interactive-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={14} />
              <span>EXPLORE_REPOS</span>
              <ExternalLink size={10} className="stroke-[3]" />
            </motion.a>
          </div>
        </section>
      )}

      {/* FINAL CONCLUSION SECTION */}
      {conclusionText && (
        <section className="w-full max-w-5xl mx-auto text-left relative z-10">
          <div className="relative border border-black/10 rounded-sm p-8 sm:p-12 overflow-hidden bg-white/80 shadow-[10px_10px_0px_rgba(168,211,200,0.12)] hover:border-black transition-all duration-500">
            <span className="font-mono text-[10px] text-[#00CC52] font-bold tracking-[0.3em] uppercase block mb-1">
              SUMMARY & COMPLETION
            </span>
            <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black mb-4">
              {conclusionTitle || 'FINAL ARCHIVE RESOLUTION'}
            </h3>
            <p className="font-sans text-[14.5px] leading-relaxed font-light text-neutral-700">
              {conclusionText}
            </p>
          </div>
        </section>
      )}

      {/* EXIT ACTION */}
      <footer className="flex flex-col items-center gap-8 text-center relative z-10">
        <div className="h-[1px] w-24 bg-black/10" />

        <div className="flex flex-col gap-3">
          <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-black">
            END_OF_ARCHIVE_DATA
          </h3>
          <p className="font-mono text-[9px] text-[#8B8B8B]/60 tracking-[0.4em] uppercase">
            SYSTEM PORTAL FLUID RECOVERY
          </p>
        </div>

        <motion.button
          onClick={() => {
            playClickTick(1600, 0.05);
            onBack();
          }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,255,82,0.05)' }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-4 border border-[#00CC52]/30 px-10 py-3.5 font-mono text-[10px] font-black tracking-[0.35em] uppercase transition-all duration-300 text-[#00CC52] hover:border-[#00CC52] shadow-[2px_2px_8px_rgba(0,0,0,0.02)] interactive-hover bg-white/40 backdrop-blur-md rounded-sm"
        >
          RETURN_TO_SYSTEM_VAULT{' '}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </footer>

      {/* BOTTOM TELEMETRY BAR */}
      <section className="w-full max-w-5xl mx-auto px-2 relative z-10">
        <div className="border border-black/10 bg-white/60 backdrop-blur-md rounded-md p-5 font-mono text-[9px] sm:text-xs text-black/60 shadow-[4px_4px_0px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="absolute top-0 right-0 font-mono text-[6px] text-black/20 uppercase tracking-[0.25em] px-2 py-0.5">
            SYS_TELEMETRY
          </div>

          <div className="flex items-center gap-3">
            <Terminal size={14} className="text-[#00CC52]" />
            <div className="leading-relaxed text-left">
              <div>{logs[0]}</div>
              <div className="text-[#00CC52] font-bold">{logs[1]}</div>
            </div>
          </div>

          <div className="font-bold text-[8px] sm:text-[10px] tracking-widest text-black/30 uppercase">
            STATUS: OS_ARCHIVE_SECURE
          </div>
        </div>
      </section>
    </div>
  );
}
