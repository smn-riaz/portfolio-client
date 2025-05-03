import ProjectCard from "@/components/home/ProjectSection/ProjectCard";
import { projectsInfo } from "@/constants/projectsInfo";
import React from "react";

const AllProjectsPage = () => {
  return (
    <div className="sm:mx-10 mx-4 py-16 pt-32">
        <h1 className="text-center font-sans font-semibold text-white text-lg sm:text-4xl"> All Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-2 sm:mx-10 ">
        {projectsInfo.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.images.topBanner}
            title={project.name}
            description={project.description}
            technologies={project.technologies}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
