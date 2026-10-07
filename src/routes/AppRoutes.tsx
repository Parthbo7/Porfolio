import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Lazy-loaded page components (each becomes its own code-split chunk)
const HomePage = lazy(() => import('../pages/Home/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('../pages/About/AboutPage').then(m => ({ default: m.AboutPage })));
const ProfilePage = lazy(() => import('../pages/Profile/ProfilePage').then(m => ({ default: m.ProfilePage })));
const EducationPage = lazy(() => import('../pages/Education/EducationPage').then(m => ({ default: m.EducationPage })));
const SkillsPage = lazy(() => import('../pages/Skills/SkillsPage').then(m => ({ default: m.SkillsPage })));
const ExperiencePage = lazy(() => import('../pages/Experience/ExperiencePage').then(m => ({ default: m.ExperiencePage })));
const GDGPage = lazy(() => import('../pages/Experience/GDGPage').then(m => ({ default: m.GDGPage })));
const BootcampPage = lazy(() => import('../pages/Experience/BootcampPage').then(m => ({ default: m.BootcampPage })));
const FreshersPage = lazy(() => import('../pages/Experience/FreshersPage').then(m => ({ default: m.FreshersPage })));
const MechanicsPage = lazy(() => import('../pages/Experience/MechanicsPage').then(m => ({ default: m.MechanicsPage })));
const TPOPage = lazy(() => import('../pages/Experience/TPOPage').then(m => ({ default: m.TPOPage })));
const ExperienceDetailsPage = lazy(() => import('../pages/Experience/ExperienceDetailsPage').then(m => ({ default: m.ExperienceDetailsPage })));
const ProjectsPage = lazy(() => import('../pages/Projects/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const CampusConnectPage = lazy(() => import('../pages/Projects/CampusConnectPage').then(m => ({ default: m.CampusConnectPage })));
const InsightTubePage = lazy(() => import('../pages/Projects/InsightTubePage'));
const HackathonsPage = lazy(() => import('../pages/Projects/HackathonsPage').then(m => ({ default: m.HackathonsPage })));
const HackfusionPage = lazy(() => import('../pages/Projects/HackfusionPage').then(m => ({ default: m.HackfusionPage })));
const HackspectraPage = lazy(() => import('../pages/Projects/HackspectraPage').then(m => ({ default: m.HackspectraPage })));
const ProjectsDatabasePage = lazy(() => import('../pages/Projects/ProjectsDatabasePage').then(m => ({ default: m.ProjectsDatabasePage })));
const ResearchPage = lazy(() => import('../pages/Research/ResearchPage').then(m => ({ default: m.ResearchPage })));
const CertificationsPage = lazy(() => import('../pages/Certifications/CertificationsPage').then(m => ({ default: m.CertificationsPage })));
const GalleryPage = lazy(() => import('../pages/Gallery/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Core Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Experience Routes */}
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/experience/gdg" element={<GDGPage />} />
          <Route path="/experience/bootcamp" element={<BootcampPage />} />
          <Route path="/experience/freshers" element={<FreshersPage />} />
          <Route path="/experience/mechanics" element={<MechanicsPage />} />
          <Route path="/experience/tpo" element={<TPOPage />} />
          <Route path="/experience/:id" element={<ExperienceDetailsPage />} />

          {/* Projects Routes */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/campus-connect" element={<CampusConnectPage />} />
          <Route path="/projects/insight-tube" element={<InsightTubePage />} />
          <Route path="/projects/hackathons" element={<HackathonsPage />} />
          <Route path="/projects/hackfusion" element={<HackfusionPage />} />
          <Route path="/projects/hackspectra" element={<HackspectraPage />} />
          <Route path="/projects/list" element={<ProjectsDatabasePage />} />

          {/* Wildcard 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
