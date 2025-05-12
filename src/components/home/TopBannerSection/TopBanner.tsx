'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import riaz from "../../../assets/riaz.jpg";
import { skills } from "@/constants/skilIsmages";



const TopBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".headline", {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      });
      gsap.from(".subtext", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "expo.out",
      });
      gsap.from(".skills-circle", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        delay: 0.8,
        ease: "expo.out",
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={bannerRef}
      className="relative xl:min-h-screen bg-[#0A0E17] text-white overflow-hidden flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 max-w-[1300] pt-24 p-10 sm:py-18 gap-12"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#1E215D] to-[#BE29EC] opacity-30 rounded-[60%] blur-[120px] left-[-20%] top-[-20%]" />
        <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-[#3F76FF] to-[#61F3F3] opacity-20 rounded-[50%] blur-[120px] right-[-20%] bottom-[-20%]" />
      </div>

      {/* Left side: Image and rotating skills */}
      <div className="relative flex justify-center items-center w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px]">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="skills-circle absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-[#ffffff10] flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            {skills.slice(0, 8).map((icon, index) => {
              const angle = (360 / 8) * index;
              const radius = 140; // smaller for small screens
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              return (
                <motion.div
                  key={index}
                  className="absolute w-10 cursor-pointer h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full"
                  style={{
                    top: `calc(50% + ${y}px - 1.5rem)`,
                    left: `calc(50% + ${x}px - 1.5rem)`,
                    backgroundColor: icon.color,
                  }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <Image
                    src={icon.image}
                    alt={`Skill ${index}`}
                    width={24}
                    height={24}
                    className="grayscale hover:grayscale-0 transition duration-300 rounded-md"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Center Profile Image */}
        <div className="absolute z-10 w-50 h-50 sm:w-55 sm:h-55 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#ffffff1a] shadow-2xl">
          <div className="relative w-full h-full">
            <Image
              src={riaz}
              alt="Shahman Riaz"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>

        


      </div>

      {/* Right side: Text */}
     <div className="lg:w-1/2 flex flex-col items-center lg:items-center text-center z-20 space-y-4 max-w-xl">
  {/* Name */}
  <h1
    className="headline text-4xl mt-8 sm:text-5xl font-serif font-bold text-white tracking-tight"
    style={{ textShadow: "0 5px 15px rgba(255, 255, 255, 0.35)" }}
  >
    Shahman Riaz
  </h1>

  {/* Role & Title */}
  <div className="w-full flex justify-center">
    <div className="space-y-3 pb-3 text-center">
      <p className="text-[25px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3F76FF] to-[#BE29EC] tracking-wide">
        ❝Frontend Developer❞
        
      </p>
      <p className="text-[18px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#3F76FF] tracking-wide">
       MERN Stack Enthusiast
      </p>
      
    </div>
  </div>

  {/* Description */}
  <p className="subtext text-gray-300 text-sm sm:text-lg leading-relaxed max-w-md">
   Passionate about performance-driven, responsive, and future-ready web development.
  </p>

  {/* Typing Animation */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="mt-4 w-full flex justify-center"
  >
    <img
      src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=2000&pause=1000&center=true&vCenter=true&width=500&lines=Developer.+Creator.+Problem+Solver.;Javascript+Lover+%F0%9F%92%96+;Always+Learning+%F0%9F%93%9A"
      alt="Typing animation"
      className="mx-auto"
    />
  </motion.div>
</div>

    </section>
  );
};

export default TopBanner;
