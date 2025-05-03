'use client';

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TProject } from '@/types/project';
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  project: TProject;
};

const ProjectDetails = ({ project }: Props) => {
  return (
    <div className="bg-[#010E14] text-white min-h-screen px-4 md:px-10 py-12 space-y-12">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-cyan-400"
      >
        {project.name}
      </motion.h1>

      {/* Top Banner */}
      {project.images?.topBanner && (
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={project.images.topBanner}
            alt="Top banner"
            width={1920}
            height={800}
            className="w-full object-cover"
          />
        </div>
      )}

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
            <Button className="bg-gradient-to-r from-sky-600 to-blue-700">
              <FaGithub className="mr-2" /> GitHub (Client)
            </Button>
          </a>
        )}
        {project.github.backend && (
          <a href={project.github.backend} target="_blank" rel="noreferrer">
            <Button className="bg-gradient-to-r from-sky-600 to-blue-700">
              <FaGithub className="mr-2" /> GitHub (Server)
            </Button>
          </a>
        )}
        {project.live.frontend && (
          <a href={project.live.frontend} target="_blank" rel="noreferrer">
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-700">
              <FaExternalLinkAlt className="mr-2" /> Live Site
            </Button>
          </a>
        )}
      </div>

      {/* Main Screens */}
      <div className="grid md:grid-cols-2 gap-6">
        {project.images?.products && (
          <Image
            src={project.images.products}
            alt="Products View"
            width={700}
            height={400}
            className="rounded-xl shadow-md w-full object-cover"
          />
        )}
        {project.images?.login && (
          <Image
            src={project.images.login}
            alt="Login/Register"
            width={700}
            height={400}
            className="rounded-xl shadow-md w-full object-cover"
          />
        )}
      </div>

      {/* Dashboard Images */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Admin Dashboard Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.images.dashboard?.map((item, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-xl shadow-md backdrop-blur border border-white/10">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg mb-2 w-full object-cover"
              />
              <h4 className="text-lg font-semibold text-teal-400">{item.title}</h4>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Image */}
      {project.images?.mobile && project.images.mobile.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-pink-300">Mobile Responsive View</h2>
          <div className="flex justify-center">
            <Image
              src={project.images.mobile[0]}
              alt="Mobile View"
              width={300}
              height={600}
              className="rounded-lg border border-white/10 shadow-md"
            />
          </div>
        </div>
      )}

      {/* Features, Tech, Challenges, Future Plans */}
      <section className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Features", items: project.features, color: "text-cyan-400" },
          { title: "Technologies", items: project.technologies, color: "text-yellow-400" },
          { title: "Challenges", items: project.challenges, color: "text-pink-400" },
          { title: "Future Plans", items: project.futurePlans, color: "text-green-400" },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur"
          >
            <h3 className={`text-xl font-semibold mb-3 ${section.color}`}>{section.title}</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectDetails;
