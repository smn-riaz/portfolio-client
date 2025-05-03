

import ProjectDetails from '@/components/projectDetails/ProjectDetails';
import { projectsInfo } from '@/constants/projectsInfo';



const ProjectDetailsPage = async({params}:{params:Promise<{projectId:string}>}) => {
   const {projectId}= await params

   const project = projectsInfo.find(project => project.id === projectId);

   if (!project) {
       return <div>Project not found</div>;
   }

    return (
        <div className='bg-[#010E14] text-white px-6 sm:px-24 py-18 pt-32 '>
            <ProjectDetails project={project} />
        </div>
    );
};

export default ProjectDetailsPage;