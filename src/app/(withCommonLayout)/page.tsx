import AboutMeSection from "@/components/home/AboutMeSection/AboutMeSection";
import BlogSection from "@/components/home/BlogSection/BlogSection";
import ContactSection from "@/components/home/ContactSection/ContactSection";
import EducationSection from "@/components/home/EducationSection/EducationSection";
import FooterSection from "@/components/home/FooterSection/FooterSection";
import ProjectsSection from "@/components/home/ProjectSection/Projects";
import SkillsSection from "@/components/home/SkillsSection/SkillsSecetion";
import TopBanner from "@/components/home/TopBannerSection/TopBanner";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <TopBanner />

      <ProjectsSection />

      <AboutMeSection />

      <SkillsSection />
      
      <EducationSection />

      <BlogSection />

      <ContactSection />

      <FooterSection />
    </main>
  );
};

export default HomePage;
