import { playClickTick } from './SoundManager';

export const getSectionName = (path: string): string => {
  if (path === '/') return 'hero';
  if (path.startsWith('/projects/campus-connect')) return 'campusconnect';
  if (path.startsWith('/projects/hackathons')) return 'projects';
  if (path.startsWith('/projects/hackfusion')) return 'projects';
  if (path.startsWith('/projects/hackspectra')) return 'projects';
  if (path.startsWith('/projects')) return 'projects';
  if (path.startsWith('/experience')) return 'experience';
  if (path === '/skills') return 'skills';
  if (path === '/education') return 'education';
  if (path === '/certifications') return 'certifications';
  if (path === '/research') return 'research';
  if (path === '/gallery') return 'gallery';
  if (path === '/profile' || path === '/about') return 'profile';
  if (path === '/contact') return 'connect';
  return 'hero';
};

export const navigateWithTransition = (path: string) => {
  playClickTick(1600, 0.05);
  const sectionName = getSectionName(path);
  window.dispatchEvent(
    new CustomEvent('trigger-sys-navigation', {
      detail: { path, sectionName }
    })
  );
};
