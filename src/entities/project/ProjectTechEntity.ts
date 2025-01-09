import { TechEntity } from "../TechEntity";
import { ProjectEntity } from "./ProjectEntity";

export interface ProjectTechEntity {
  id: string;
  project: ProjectEntity;
  tech: TechEntity;
  updated_at: string;
  created_at: string;
}
