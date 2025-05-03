import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const ProjectCard = ({ image, title, description, technologies,id }: any) => {
    const router = useRouter()
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="max-w-sm w-full h-[480px] flex flex-col justify-between rounded-2xl overflow-hidden bg-gradient-to-br from-[#101c37]/70 to-[#0f172a]/60 backdrop-blur-lg border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all"
  >
    <div className="relative h-52 w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="rounded-t-2xl object-cover"
      />
    </div>
  
    <div className="px-5 py-4 flex flex-col justify-between h-full">
      <h2 className="text-xl font-extrabold text-center text-white drop-shadow-sm tracking-wide mb-2">
        {title}
      </h2>
  
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-3"
      >
        {technologies.slice(0, 4).map((tech: string, index: number) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 bg-gradient-to-r from-[#393c4d] to-[#32395a] text-white text-xs font-semibold rounded-full shadow-md transition-all"
          >
            {tech}
          </motion.span>
        ))}
      </motion.ul>
  
      <p className="text-gray-300 text-sm text-justify leading-relaxed ">
        {description}
      </p>
  
      <div className="flex justify-center">
        <Button onClick={() => router.push(`/projects/${id}`)} className="bg-gradient-to-r cursor-pointer from-[#272c47] to-[#0624a5] text-white hover:brightness-110 transition-all px-6 py-2 rounded-xl shadow-lg hover:scale-105">
          Show More
        </Button>
      </div>
    </div>
  </motion.div>
  
  );
};

export default ProjectCard;
