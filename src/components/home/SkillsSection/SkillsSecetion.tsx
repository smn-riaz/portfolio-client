"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaUserAlt,
  FaRegCommentAlt,
  FaLightbulb,
  FaHandsHelping,
  FaPuzzlePiece,
  FaSearch,
  FaPlane,
  FaBookOpen,
} from "react-icons/fa";

import { skills } from "@/constants/skilIsmages";

const softSkills = [
  { skill: "Fluent in English", icon: <FaRegCommentAlt className="text-yellow-400" /> },
  { skill: "Team Collaboration", icon: <FaUserAlt className="text-yellow-400" /> },
  { skill: "Effective Communication", icon: <FaRegCommentAlt className="text-yellow-400" /> },
  { skill: "Patience", icon: <FaHandsHelping className="text-yellow-400" /> },
  { skill: "Critical Thinking", icon: <FaLightbulb className="text-yellow-400" /> },
  { skill: "Problem-Solving Mindset", icon: <FaPuzzlePiece className="text-yellow-400" /> },
  { skill: "Always Try to Solve Problems", icon: <FaSearch className="text-yellow-400" /> },
  { skill: "Love Solving Programming Challenges", icon: <FaLightbulb className="text-yellow-400" /> },
];

const hobbies = [
  { hobby: "Traveling & Exploring New Places", icon: <FaPlane className="text-teal-300" /> },
];

const recentBooks = [
  "Think and Grow Rich",
  "Autobiography of a Yogi",
  "The Miracle Morning",
];

const SkillsSection = () => {
  const techGridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(techGridRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section id="skills" className="px-4 md:px-12 py-12 pt-20 mx-auto text-white xl:max-w-[1300px]">
      
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-12"
        >
           <h2 className="text-3xl font-sans font-bold text-center text-[#ffffff] mb-6 flex items-center justify-center gap-3">
           
           SKILLS & INTEREST
          </h2>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column – Technology Skills */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            ref={techGridRef}
            className="lg:col-span-7 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 shadow-xl"
          >
           <div>
             <h3 className="text-3xl font-semibold text-center text-slate-200 pb-8">🛠 Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((icon, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={idx}
                  className="bg-[#1e293b] cursor-pointer p-4 rounded-xl flex flex-col items-center justify-center transition-all hover:bg-[#0f172a]"
                >
                  <Image
                    src={icon.image}
                    alt={icon.name}
                    width={45}
                    height={45}
                    title={icon.name}
                    className="object-contain mb-2"
                  />
                  <span className="text-sm text-gray-200 text-center font-semibold ">{icon.name}</span>
                </motion.div>
              ))}
            </div>
           </div>
          </motion.div>

          {/* Right Column – Soft Skills + Interests */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Soft Skills Card */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center underline decoration-yellow-300/50 underline-offset-4">
                Soft Skills
              </h3>
              <ul className="space-y-3">
                {softSkills.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                    {item.icon}
                    {item.skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hobbies & Books */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-teal-300 mb-4 text-center underline decoration-teal-200/50 underline-offset-4">
                Hobbies & Books
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold text-teal-300 mb-2">🌍 Hobbies</h4>
                <ul className="space-y-2 text-gray-300">
                  {hobbies.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-teal-300 transition">
                      {item.icon}
                      {item.hobby}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-teal-300 mb-2">📚 Last 3 Books I Read</h4>
                <ul className="space-y-2 text-gray-300">
                  {recentBooks.map((book, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-teal-300 transition">
                      <FaBookOpen className="text-teal-300" />
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
   
    </section>
  );
};

export default SkillsSection;
