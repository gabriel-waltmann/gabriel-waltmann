import { ProjectFileEntity } from "@/entities/project/ProjectFileEntity";

export const retrieves = async (id: string): Promise<ProjectFileEntity[]> => {
  const response = await fetch(`/api/project/${id}/file`);
  
  return await response.json();
}