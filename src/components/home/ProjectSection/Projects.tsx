"use client"

import React, { useState } from "react";

import ProjectsSkills from "./ProjectsSkills";
import { projectsInfo } from "@/constants/projectsInfo";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  console.log(selectedSkill);
  return (
    <div>
      <div>
        <ProjectsSkills
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-10  min-h-screen">
        {
          projectsInfo.map(project => <ProjectCard key={project.id} image={project.images.topBanner} title={project.name} description={project.description} moreInfo={project.features[0]} technologies={project.technologies} id={project.id} />)
        }
      </div>


    </div>
  );
};

export default Projects;
