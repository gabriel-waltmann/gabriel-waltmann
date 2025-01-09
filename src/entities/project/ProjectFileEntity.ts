import { FileEntity } from "../FileEntity";
import { ProjectEntity } from "./ProjectEntity";

export interface ProjectFileEntity {
  id: string;
  project: ProjectEntity;
  file: FileEntity;
  updated_at: string;
  created_at: string;
}
