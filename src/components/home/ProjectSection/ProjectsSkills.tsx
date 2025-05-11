"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills } from "@/constants/skilIsmages";
import Image from "next/image";

const ProjectsSkills = ({ selectedSkill, setSelectedSkill }: { selectedSkill: string; setSelectedSkill: (skill: string) => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 200;
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <div className="relative w-full px-4 py-4 rounded-lg bg-[#0c1022]">
      <div className="flex items-center justify-between mb-4 gap-4">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`rounded-full p-2 border border-white/20 bg-white/10 hover:bg-white/20 transition ${
            !canScrollLeft ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <motion.div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden no-scrollbar scroll-smooth py-1"
        >
          {skills.map((tech) => (
            <motion.div
              key={tech.name}
              onClick={() => setSelectedSkill(`${tech.name}`)}
              whileHover={{ scale: 1.05 }}
              className={`flex-shrink-0 flex items-center gap-2 px-2 py-1 rounded-lg border border-white/20 ${selectedSkill === tech.name ? `bg-[#365096]`:`bg-[#1a2238]`} cursor-pointer`}
            >
              <Image src={tech.image} alt={tech.name} width={20} height={20} />
              <span className="text-xs font-medium text-white">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`rounded-full p-2 border border-white/20 bg-white/10 hover:bg-white/20 transition ${
            !canScrollRight ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSkills;
