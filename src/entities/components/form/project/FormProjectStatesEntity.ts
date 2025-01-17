import { ProjectFileEntity } from "@/entities/project/ProjectFileEntity";
import { ProjectTechEntity } from "@/entities/project/ProjectTechEntity";
import { TechEntity } from "@/entities/TechEntity";

export interface FormProjectStatesEntity {
  project: {
    id: string | null;
    title: string;
    description: string;
  },

  techs: TechEntity[],

  projectTechs: ProjectTechEntity[],

  projectFiles: ProjectFileEntity[],

  projectSubmitLoading: boolean,

  projectDeleteLoading: boolean,

  loadProjectFilesLoading: boolean,

  createProjectFileLoading: boolean

  deleteProjectFileLoading: boolean

  loadProjectTechsLoading: boolean,

  createProjectTechLoading: boolean
  
  deleteProjectTechLoading: boolean
};