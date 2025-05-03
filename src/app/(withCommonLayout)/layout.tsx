"use client";

import Navbar from "@/components/home/Navbar";

import SocialMedia from "@/components/home/SocialMedia";

const WithCommonLayout = ({ children }: { children: React.ReactNode }) => {


  return (
    <main className="relative">
      {/* Social Icons on Left Center */}

      <div className="fixed top-[1vh] transform w-full z-50">
        { <Navbar />}
      </div>

      <div className="fixed top-1/2 left-2 sm:left-10 transform -translate-y-1/2 z-50">
        <SocialMedia />
      </div>

      {children}
    </main>
  );
};

export default WithCommonLayout;
