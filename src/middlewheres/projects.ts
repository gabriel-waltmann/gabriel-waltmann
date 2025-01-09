import { ProjectEntity } from "@/entities/project/ProjectEntity";

export const retrieves = async (): Promise<ProjectEntity[]> => {
  const response = await fetch("/api/project");

  return await response.json();
};
