import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import all page components
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { EducationPage } from '../pages/Education/EducationPage';
import { SkillsPage } from '../pages/Skills/SkillsPage';
import { ExperiencePage } from '../pages/Experience/ExperiencePage';
import { GDGPage } from '../pages/Experience/GDGPage';
import { BootcampPage } from '../pages/Experience/BootcampPage';
import { FreshersPage } from '../pages/Experience/FreshersPage';
import { MechanicsPage } from '../pages/Experience/MechanicsPage';
import { TPOPage } from '../pages/Experience/TPOPage';
import { ExperienceDetailsPage } from '../pages/Experience/ExperienceDetailsPage';
import { ProjectsPage } from '../pages/Projects/ProjectsPage';
import { CampusConnectPage } from '../pages/Projects/CampusConnectPage';
import InsightTubePage from '../pages/Projects/InsightTubePage';
import { HackathonsPage } from '../pages/Projects/HackathonsPage';
import { HackfusionPage } from '../pages/Projects/HackfusionPage';
import { HackspectraPage } from '../pages/Projects/HackspectraPage';
import { ProjectsDatabasePage } from '../pages/Projects/ProjectsDatabasePage';
import { ResearchPage } from '../pages/Research/ResearchPage';
import { CertificationsPage } from '../pages/Certifications/CertificationsPage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export const AppRoutes = () => {
  const location = useLocation();

  return (
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
  );
};
