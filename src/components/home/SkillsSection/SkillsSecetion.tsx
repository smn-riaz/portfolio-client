"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/constants/skilIsmages";
import { FaUserAlt, FaRegCommentAlt, FaLightbulb, FaHandsHelping, FaPuzzlePiece, FaSearch, FaPlane, FaBookOpen } from 'react-icons/fa';
import { useEffect, useRef } from "react";
import gsap from "gsap";

const softSkills = [
  { skill: "Fluent in English", icon: <FaRegCommentAlt className="h-5 w-5 text-[#FACC15]" /> },
  { skill: "Team Collaboration", icon: <FaUserAlt className="h-5 w-5 text-[#FACC15]" /> },
  { skill: "Effective Communication", icon: <FaRegCommentAlt className="h-5 w-5 text-[#FACC15]" /> },
  { skill: "Patience", icon: <FaHandsHelping className="h-5 w-5 text-[#FACC15]" /> },
  { skill: "Critical Thinking", icon: <FaLightbulb className="h-5 w-5 text-[#FACC15]" /> },
  { skill: "Problem-Solving Mindset", icon: <FaPuzzlePiece className="h-5 w-5 text-[#FACC15]" /> },
  { skill: "Always Try to Solve Problems", icon: <FaSearch className="h-5 w-5 text-[#FACC15]" /> },
  { skill: "Love Solving Programming Challenges", icon: <FaLightbulb className="h-5 w-5 text-[#FACC15]" /> },
];

const hobbies = [
  { hobby: "Traveling & Exploring New Places", icon: <FaPlane className="h-5 w-5 text-[#6EE7B7]" /> },
];

const recentBooks = [
  "Think and Grow Rich",
  "Autobiography of a Yogi",
  "The Miracle Morning",
];

const SkillsSection = () => {
  const skillGridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(skillGridRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <section id="skills" className="py-16 pt-32 bg-[#0e1526] text-white px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r pb-6 from-[#f8f6f2] to-[#fdfbfb]"
        >
          Skills & Interests
        </motion.h2>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-[#ebe6df] text-center flex justify-center items-center gap-2">
            <hr className="w-1/12" /> Technologies <hr className="w-1/12" />
          </h3>

          <div ref={skillGridRef} className="grid py-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {skills.map((icon, idx) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={idx}
                className="group bg-gradient-to-br from-[#1f2937] to-[#0f172a] text-white p-3 rounded-2xl shadow-lg w-full h-full flex flex-col items-center justify-center transition-transform hover:shadow-2xl"
              >
                <div className="flex justify-center items-center gap-x-2">
                  <div className="bg-white rounded-xl shadow-md mb-4">
                    <Image
                      src={icon.image}
                      alt={icon.name}
                      width={45}
                      height={45}
                      title={icon.name}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-center text-md font-semibold text-gray-100">
                    {icon.name}
                  </h4>
                </div>
                <p className="text-sm text-center text-gray-400">
                  {icon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full py-10">
          <div className="grid md:grid-cols-4 gap-8 w-full max-w-7xl">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <h3 className="text-2xl font-semibold mb-2 text-[#ebe6df] text-center flex justify-center items-center gap-2">
                <hr className="w-1/12" /> Soft Skills <hr className="w-1/12" />
              </h3>
            </div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br col-span-1 from-[#1f2937] to-[#111827] rounded-3xl shadow-xl border border-[#334155] p-6 hover:scale-[1.015] hover:shadow-2xl"
            >
              <ul className="space-y-3 pl-4 text-gray-300 text-base list-disc">
                {softSkills.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 hover:text-[#FACC15] transition-all">
                    {item.icon}
                    {item.skill}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="col-span-1"></div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="grid md:grid-cols-4 gap-8 w-full max-w-7xl">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <h3 className="text-2xl font-semibold mb-2 text-[#ebe6df] text-center flex justify-center items-center gap-2">
                <hr className="w-1/12" /> Hobbies & Books <hr className="w-1/12" />
              </h3>
            </div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br col-span-1 from-[#1e293b] to-[#0f172a] rounded-3xl shadow-xl border border-[#334155] p-6 hover:scale-[1.015] hover:shadow-2xl"
            >
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#6EE7B7] mb-3">🌍 Hobbies</h4>
                <ul className="space-y-3 pl-4 text-gray-300 text-base list-disc">
                  {hobbies.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-[#34D399] transition-all">
                      {item.icon}
                      {item.hobby}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#34D399] mb-3">📚 Last 3 Books I Read</h4>
                <ul className="space-y-2 pl-4 text-gray-300 text-base">
                  {recentBooks.map((book, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-[#6EE7B7] transition-all">
                      <FaBookOpen />
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;