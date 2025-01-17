import { TechEntity } from "@/entities/TechEntity";
import { ProjectEntity } from "@/entities/project/ProjectEntity";

export interface ProjectTechEntity {
  id: string;
  project: ProjectEntity;
  tech: TechEntity;
  updated_at: string;
  created_at: string;
}
