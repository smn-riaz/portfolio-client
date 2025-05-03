"use client"

import React, { useState } from "react";

import ProjectsSkills from "./ProjectsSkills";
import { projectsInfo } from "@/constants/projectsInfo";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ProjectsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
 const router = useRouter()

  return (
    <div>
      <div>
        <ProjectsSkills
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-10 ">
        {
          projectsInfo.map(project => <ProjectCard key={project.id} image={project.images.topBanner} title={project.name} description={project.description} technologies={project.technologies} id={project.id} />)
        }
      </div>

<div className="flex justify-center items-center py-6">
<Button onClick={() => router.push('/projects')}
      className={cn(
        "bg-gradient-to-r from-[#1A1A40] to-[#004DFF]",
        "text-white font-semibold",
        "px-6 py-2 rounded-md w-1/5 cursor-pointer",
        "hover:opacity-90 transition"
      )}
    >
      All Projects
    </Button>
</div>

    </div>
  );
};

export default ProjectsSection;
