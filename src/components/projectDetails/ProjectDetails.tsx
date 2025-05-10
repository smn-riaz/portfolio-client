'use client';
import { MdOutlineReportProblem, MdOutlineUpcoming } from "react-icons/md";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCode,} from "react-icons/fa";
import { TProject } from '@/types/project';
import { Button } from "@/components/ui/button";
import Image from "next/image";


type Props = {
  project: TProject;
};



const ProjectDetails = ({ project }: Props) => {
  return (
    <div className="bg-[#010E14] text-white min-h-screen space-y-12 px-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#ccd7e7]"
      >
        {project.name}
      </motion.h1>

        {/* Description */}
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-lg text-gray-300 text-center"
      >
        {project.description}
      </motion.p>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        {project.github.frontend && (
          <a href={project.github.frontend} target="_blank" rel="noreferrer">
            <Button className="cursor-pointer border-[0.5px] border-white bg-gradient-to-r from-[#090925] to-[#030330]">
              <FaGithub className="mr-2" /> GitHub (Client)
            </Button>
          </a>
        )}
        {project.github.backend && (
          <a href={project.github.backend} target="_blank" rel="noreferrer">
              <Button className="cursor-pointer border-[0.5px] border-white bg-gradient-to-r from-[#090925] to-[#030330]">
              <FaGithub className="mr-2" /> GitHub (Server)
            </Button>
          </a>
        )}
        {project.live.frontend && (
          <a href={project.live.frontend} target="_blank" rel="noreferrer">
             <Button className="cursor-pointer border-[0.5px] border-white bg-gradient-to-r from-[#090925] to-[#030330]">
              <FaExternalLinkAlt className="mr-2" /> Live Site
            </Button>
          </a>
        )}
      </div>



      {/* Top Banner */}
      {project.images?.topBanner && (
        <div className="rounded-xl shadow-lg mx-auto w-full max-w-[700px]">
        <Image
          src={project.images.topBanner}
          alt="Top banner"
          layout="responsive"
          width={700}   // Base width of the image
          height={600}   // Base height of the image
          className="rounded-xl"
        />
      </div>
      
      )}

    

      

      {/* Main Screens */}
      <div className="grid md:grid-cols-2 gap-6">
  {project.images?.products && (
    <div className="relative w-full h-96">
      <Image
        src={project.images.products}
        alt="Products View"
        layout="fill"         
        objectFit="cover"      
        className="rounded-xl shadow-md"
      />
    </div>
  )}
  {project.images?.login && (
    <div className="relative w-full h-96">
      <Image
        src={project.images.login}
        alt="Login/Register"
        layout="fill"
        objectFit="cover"
        className="rounded-xl shadow-md"
      />
    </div>
  )}
</div>


      {/* Dashboard Images */}
      {
        project.images.dashboard && 
        <div>
        <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Admin Dashboard Features</h2>
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {project.images.dashboard?.map((item, index) => (
    <div
      key={index}
      className="bg-white/5 p-4 col-span-1 rounded-xl shadow-md backdrop-blur border border-white/10"
    >
      <div className="w-full h-40 overflow-hidden rounded-lg mb-2">
        <Image
          src={item.img}
          alt={item.title}
          width={800}  
          height={800} 
          className="w-full h-70 object-cover "
        />
      </div>
      
      <h4 className="text-lg font-semibold text-teal-400">{item.title}</h4>
      
      {item.features && (
        <ul className="list-none list-inside text-sm text-gray-300 mt-2 space-y-1">
          {item.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  ))}
</div>


      </div>
      
      }


<div className="grid grid-cols-8 gap-6">
<div className="col-span-8 md:col-span-6 w-full">
    
      <section className="grid grid-cols-1 md:grid-cols-6 gap-6">
    {/* Features */}

    <div className="col-span-6 md:col-span-3 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur hover:scale-[1.01] transition ">
      <h3 className="text-xl text-center font-semibold mb-4 text-white">Features</h3>
      <ul className="space-y-2 text-md text-gray-300">
        {project.features.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheckCircle className="text-green-400 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>


      {/* Challenges */}
      <div className="col-span-6 md:col-span-3 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur hover:scale-[1.01] transition">
      <h3 className="text-xl  text-centerfont-semibold mb-4 text-white flex items-center gap-2">
       
        Challenges
        <hr className="border-t border-white/20 mb-4" />
      </h3>
      <ul className="space-y-2 text-md text-gray-300">
        {project.challenges.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <MdOutlineReportProblem className="text-pink-400 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Technologies */}
    <div className="col-span-6 md:col-span-3 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur hover:scale-[1.01] transition">
      <h3 className="text-xl text-center font-semibold mb-4 text-white">Technologies</h3>
      <ul className="flex flex-wrap gap-3 text-md text-gray-300">
        {project.technologies.map((tech, i) => (
          <li
            key={i}
            className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full shadow-sm hover:bg-white/20 transition"
          >
            <FaCode className="text-yellow-400" />
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </div>

  

    {/* Future Plans */}
    <div className="col-span-6 md:col-span-3 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur hover:scale-[1.01] transition w-full">
      <h3 className="text-xl text-center font-semibold mb-4 text-white flex items-center gap-2">
        
        Future Plans
      </h3>
      <ul className="space-y-2 text-md text-gray-300">
        {project.futurePlans.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <MdOutlineUpcoming className="text-green-400 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
</div>



<div className="col-span-8 md:col-span-2 bg-white/5 border border-white/10  rounded-2xl shadow-lg backdrop-blur">
    {project.images?.mobile && project.images.mobile.length > 0 && (
      <div>
        <h2 className="text-xl font-semibold text-center py-4 text-white">Mobile Responsive View</h2>
        <div className="w-full flex justify-center">
          <Image
            src={project.images.mobile[0]}
            alt="Mobile View"
            width={250}
            height={400}
            className="rounded-lg border border-white/10 shadow-md object-cover"
          />
        </div>
      </div>
    )}
  </div>


</div>


     

   
   


    </div>
  );
};

export default ProjectDetails;
