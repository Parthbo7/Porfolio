import type { LucideIcon } from 'lucide-react';

/**
 * Interface representing a showcase project item in the portfolio database.
 */
export interface Project {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  link?: string;
  isLocked?: boolean;
  highlightTag?: {
    name: string;
    style: string;
  };
  alignment: 'left' | 'right';
  gridArea: string; // Tailwind grid placement classes
}

/**
 * Interface representing an item in the career/experience timeline.
 */
export interface Experience {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  isExpandable?: boolean;
  metaLabels?: string[];
}

/**
 * Configuration for rendering layout, spacing, and animations of an experience node.
 */
export interface ExperienceNodeLayout {
  align: 'left' | 'right';
  widthPercent: number;
  translateXPercent: number;
  desktopTop: number;
  desktopParallaxShift: number;
  mobileSpacingClass: string;
  minHeightClass: string;
  baseRotate: number;
  revealRotate: number;
  floatShift: number;
  nodeLabel: string;
  coordinateLabel: string;
  shellLabel: string;
  accentClass: string;
}

/**
 * Interface representing a draggable system status sticker or telemetry badge.
 */
export interface StickerBadge {
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
  delay: number;
  style?: string;
  isVerified?: boolean;
}

/**
 * Interface representing a primary navigation channel in the OS portal menu.
 */
export interface PortalItem {
  num: string;
  name: string;
  href: string;
  title: string;
  icon: LucideIcon;
  subtopics: string[];
}
