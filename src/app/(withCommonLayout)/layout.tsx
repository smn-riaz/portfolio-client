"use client";

import Navbar from "@/components/home/Navbar";
import AnimatedNavbar from "@/components/home/AnimatedNavbar";

import React, { useEffect, useState } from "react";
import SocialMedia from "@/components/home/SocialMedia";

const WithCommonLayout = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 1;
      setVisible(window.scrollY > trigger);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative">
      {/* Social Icons on Left Center */}

      <div className="fixed top-[1vh] transform w-full z-50">
        { <Navbar />}
      </div>

      <div className="fixed top-1/2 left-2 transform -translate-y-1/2 z-50">
        <SocialMedia />
      </div>

      {children}
    </main>
  );
};

export default WithCommonLayout;
