

import ProjectDetails from '@/components/projectDetails/ProjectDetails';
import { projectsInfo } from '@/constants/projectsInfo';



const ProjectDetailsPage = async({params}:{params:Promise<{projectId:string}>}) => {
   const {projectId}= await params

   const project = projectsInfo.find(project => project.id === projectId);

   if (!project) {
       return <div>Project not found</div>;
   }

    return (
        <div>
            <ProjectDetails project={project} />
        </div>
    );
};

export default ProjectDetailsPage;