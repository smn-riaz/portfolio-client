'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import riaz from '../../../assets/riaz.jpg'
import { skills } from '@/constants/skilIsmages'



const TopBanner = () => {
  return (
    <section className="relative min-h-screen bg-[#091227] text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e44] to-[#091227] opacity-40 blur-3xl z-0" />

      {/* Personal Details */}
      <div className="z-10 text-center mb-6">
        <h1 className="text-3xl font-bold">Shahman Riaz</h1>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-1"
      >
       <img
  src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=2000&pause=1000&center=true&vCenter=true&width=435&lines=Front-End+Web+Developer;MERN+Stack+Developer;Full+Stack+Developer;Lifelong+Learner+%F0%9F%93%9A;Code.+Create.+Repeat.&color=#3A0000&background=00000000"
  alt="Typing animation"
  className="mx-auto"
/>

      </motion.div>
      </div>

      {/* Profile Image with Shadow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative  z-10 w-50 h-50 rounded-full overflow-hidden border-4 border-[#1a2238] shadow-[0_0_60px_10px_rgba(255,255,255,0.05)]"
      >
        <Image
          src={riaz}
          alt="Profile"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Scrolling Skill Icons */}
   
      <div className="md:w-[30vw] sm:w-[60vw] w-[80vw] relative overflow-hidden">
  {/* Left white fade */}
  <div className="absolute top-0 left-0 h-full w-10 z-20 bg-gradient-to-r from-[#50505548] to-transparent pointer-events-none" />
  
  {/* Right white fade */}
  <div className="absolute top-0 right-0 h-full w-10 z-20 bg-gradient-to-l from-[#50505548] to-transparent pointer-events-none" />
  <motion.div
    initial={{ x: 0 }}
    animate={{ x: '-50%' }}
    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    className="flex gap-6 py-4 px-2 min-w-max z-10 rounded-sm"
  >
  
    {[...skills, ...skills].map((icon, index) => (
      <div
        key={index}
        style={{ backgroundColor: icon.color }}
        className="rounded-xl p-1  flex items-center justify-center shadow-md"
      >
        <Image
          src={icon.image}
          alt={`Skill ${index}`}
          width={25}
          height={25}
          className="grayscale rounded-md hover:grayscale-0 transition duration-300"
        />
      </div>
    ))}
  </motion.div>
</div>



    </section>
  )
}

export default TopBanner
