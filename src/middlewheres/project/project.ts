import { ProjectEntity } from "@/entities/project/ProjectEntity";

interface ProjectCreateDTO {
  title: string;
  description: string;
}
export const create = async (props: ProjectCreateDTO): Promise<ProjectEntity> => {
  const response = await fetch('/api/project', {
    method: "POST",
    body: JSON.stringify({
      title: props.title,
      description: props.description,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Unable to create project");
  }

  return await response.json();
}

interface ProjectUpdateDTO {
id: string;
  title: string;
  description: string;
}
export const update = async (props: ProjectUpdateDTO): Promise<ProjectEntity> => {
  const response = await fetch(`/api/project/${props.id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: props.title,
      description: props.description,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Unable to update project");
  }

  return await response.json();
}

export const retrievesOne = async (id: string): Promise<ProjectEntity> => {
  const response = await fetch(`/api/project/${id}`,);

  if (response.status !== 200) {
    throw new Error("Unable to retrieve the project");
  }

  return await response.json();
}

export const retrieves = async (): Promise<ProjectEntity[]> => {
  const response = await fetch("/api/project");

  return await response?.json() ?? [];
};

export const remove = async (id: string): Promise<void> => {
  const response = await fetch(`/api/project/${id}`, {
    method: "DELETE",
  });

  if (response.status !== 200) {
    throw new Error("Unable to delete project");
  }
}