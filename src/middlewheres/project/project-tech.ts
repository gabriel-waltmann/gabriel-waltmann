import { ProjectTechEntity } from "@/entities/project/ProjectTechEntity";

export const retrieves = async (projectId: string): Promise<ProjectTechEntity[]> => {
  const response = await fetch(`/api/project/${projectId}/tech`);

  return await response.json();
};

interface ProjectTechCreateDTO {
  projectId: string;
  techId: string;
}
export const create = async (props: ProjectTechCreateDTO): Promise<ProjectTechEntity> => {
  const formData = new FormData();
  formData.append("techId", props.techId);

  const response = await fetch(`/api/project/${props.projectId}/tech`, {
    method: "POST",
    body: formData,
  });

  if (response.status !== 200) {
    throw new Error("Unable to create project tech");
  }

  return await response.json();
}

interface ProjectTechDeleteDTO {
  id: string;
  projectId: string;
}
export const remove = async (props: ProjectTechDeleteDTO): Promise<void> => {
  const response = await fetch(
    `/api/project/${props.projectId}/tech/${props.id}`,
    { method: "DELETE" }
  );

  if (response.status !== 200) {
    throw new Error("Unable to delete project tech");
  }
}