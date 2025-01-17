import { ChangeEvent } from "react";
import { ProjectEntity } from "@/entities/project/ProjectEntity";
import { FormProjectStatesEntity } from "@/entities/components/form/project/FormProjectStatesEntity";

export interface FormProjectActionsEntity {
  showCreateProjectForm(): void,

  showUpdateProjectForm(project: ProjectEntity): void,

  onProjectSubmit(data: FormProjectStatesEntity["project"]): Promise<void>,

  onProjectDelete(): Promise<void>,

  hideProjectForm(): void,

  onLoadProjectFiles(): Promise<void>,

  onCreateProjectFile(e: ChangeEvent<HTMLInputElement>): Promise<void>,

  onDeleteProjectFile(id: string): Promise<void>,

  onLoadTechs(): Promise<void>,

  onLoadProjectTechs(): Promise<void>,

  onCreateProjectTech(id: string): Promise<void>,
  
  onDeleteProjectTech(id: string): Promise<void>,
};