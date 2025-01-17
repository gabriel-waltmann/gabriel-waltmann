import { ProjectFileEntity } from "@/entities/project/ProjectFileEntity";

export const retrieves = async (id: string): Promise<ProjectFileEntity[]> => {
  const response = await fetch(`/api/project/${id}/file`);

  return await response.json();
};

interface ProjectFileCreateDTO {
  projectId: string;
  file: File;
}
export const create = async (props: ProjectFileCreateDTO): Promise<ProjectFileEntity> => {
  const formData = new FormData();

  const blob = new Blob([props.file], {
    type: props.file.type,
  });

  if (!blob) {
    throw new Error("Unable to create project file");
  }

  formData.append("file", blob);

  const response = await fetch(
    `/api/project/${props.projectId}/file`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.status !== 200) {
    throw new Error("Unable to create project file");
  }

  return await response.json();
};

interface ProjectFileDeleteDTO {
  id: string;
  projectId: string;
}
export const remove = async (props: ProjectFileDeleteDTO): Promise<void> => {
  const response = await fetch(
    `/api/project/${props.projectId}/file/${props.id}`,
    { method: "DELETE" }
  );

  if (response.status !== 200) {
    throw new Error("Unable to delete project file");
  }
}