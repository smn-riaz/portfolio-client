"use client"

import React, { useState } from "react";

import ProjectsSkills from "./ProjectsSkills";

const Projects = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  return (
    <div>
      <div>
        <ProjectsSkills
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
        />
      </div>


    </div>
  );
};

export default Projects;
