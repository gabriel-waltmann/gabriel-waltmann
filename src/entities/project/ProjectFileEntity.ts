import { FileEntity } from "@/entities/FileEntity";
import { ProjectEntity } from "@/entities/project/ProjectEntity";

export interface ProjectFileEntity {
  id: string;
  project: ProjectEntity;
  file: FileEntity;
  updated_at: string;
  created_at: string;
}
