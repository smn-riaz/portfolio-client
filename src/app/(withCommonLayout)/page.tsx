
import AboutMeSection from '@/components/home/AboutMeSection/AboutMeSection';
import ContactSection from '@/components/home/ContactSection/ContactSection';
import ProjectsSection from '@/components/home/ProjectSection/Projects';
import SkillsSection from '@/components/home/SkillsSection/SkillsSecetion';
import TopBanner from '@/components/home/TopBannerSection/TopBanner';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <ProjectsSection />
      <AboutMeSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;