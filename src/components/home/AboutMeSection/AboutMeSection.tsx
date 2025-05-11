"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import riaz from '../../../assets/riaz.jpg'

const AboutMeSection = () => {
  const router = useRouter();
  return (
    <section
      id="about-me"
      className="py-10 xl:pt-14 bg-gradient-to-r mx-auto from-[#24292F] to-[#4a4f6357] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-4xl pr-4 font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#a38557] to-[#ff5b29]">
            Who I Am ?
          </span>
          <span className="text-lg font-semibold text-gray-300 mt-4">
          ❝A passionate Frontend Developer, constantly learning and creating
            impactful solutions.❞
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Right Column (Image or Icon) */}
          <div className="flex-1 relative">
            <div className="absolute  blur-3xl z-0"></div>
            <Image
              width={220}
              height={220}
              src={riaz}
              alt="Shahman Riaz"
              className="rounded-full mx-auto mt-8 md:mt-0 z-10 border-4 border-[#0a0b29] shadow-xl"
            />
          </div>

          {/* Left Column */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-200 mb-6">
              I’m a MERN Stack Developer who thrives on creating seamless,
              user-friendly web experiences. I specialize in JavaScript-based
              technologies like React.js, Next.js, Typescript and Node.js,
              Express.js as well as building scalable back-end systems.
            </p>

            <p className="text-lg text-gray-200 mb-6">
              I believe in continuous improvement and strive to stay ahead with
              the latest technologies. Whether it’s front-end design or back-end
              architecture, I’m always up for a new challenge.
            </p>

            <div className="mt-8">
              <Button
                onClick={() => router.push("/resume")}
                className="relative px-8 py-6 text-md bg-[#09071b] text-white cursor-pointer font-semibold rounded-xl overflow-hidden transition-all duration-300 group"
              >
                <span className="z-10 flex items-center relative">RESUME</span>

                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/30 to-white/0 opacity-100 transition-opacity duration-500 blur-sm animate-pulse pointer-events-none" />

                <span className="absolute inset-0 bg-[#0c081b] shadow-[0_0_20px_#5845c5] opacity-40 pointer-events-none" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
