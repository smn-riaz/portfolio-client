'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import Image from 'next/image'
import { FaUserGraduate } from 'react-icons/fa'


import logo from '../../../assets/acadmeic logo.png'
import Link from 'next/link'

export default function EducationSection() {
  return (
    <div className="flex justify-center w-full py-28 pt-32 px-6 bg-[#0E1526]" id="education">
      <div className="grid md:grid-cols-4 gap-8 w-full max-w-7xl">
        <div className="col-span-1" />

        <div className="col-span-2">
          <h2 className="text-3xl font-bold text-center text-[#ffffff] mb-6 flex items-center justify-center gap-3">
            <FaGraduationCap className="text-[#edebf0]" />
            Education
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl shadow-xl border border-[#334155] p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden border bg-white p-2">
                <Image
                  src={logo} 
                  alt="JNU Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  BSc in Biochemistry and Molecular Biology
                </h3>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaUniversity /> Jagannath University, Dhaka
                </p>
                <p className="text-gray-500 text-sm">2020 – Present</p>
              </div>
            </div>

            
            <div className="mt-4 text-gray-300 flex items-start gap-3">
  
  <div className="flex flex-col space-y-4">
    <div className="flex items-start gap-2">
      <FaUserGraduate className="mt-1 text-[#60A5FA]" />
      <span>
        Currently pursuing my <strong className="text-white">Bachelor&apos;s degree</strong> in <strong className="text-white">Biochemistry and Molecular Biology</strong> at <strong className="text-white"><Link href="https://jnu.ac.bd/">Jagannath University</Link></strong>.
      </span>
    </div>

    

   
  </div>
</div>



          </motion.div>
        </div>

        <div className="col-span-1" />
      </div>
    </div>
  )
}
