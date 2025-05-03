
import AboutMeSection from '@/components/home/AboutMeSection/AboutMeSection';
import ProjectsSection from '@/components/home/ProjectSection/Projects';
import TopBanner from '@/components/home/TopBannerSection/TopBanner';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <ProjectsSection />
      <AboutMeSection />
    </div>
  );
};

export default HomePage;