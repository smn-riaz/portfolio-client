import Projects from '@/components/home/ProjectSection/Projects';
import TopBanner from '@/components/home/TopBannerSection/TopBanner';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <Projects />
    </div>
  );
};

export default HomePage;