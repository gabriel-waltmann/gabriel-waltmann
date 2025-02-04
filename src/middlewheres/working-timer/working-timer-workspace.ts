import { WorkspaceEntity } from "@/entities/WorkspaceEntity";

export const retrieves = async (): Promise<WorkspaceEntity[]> => {
  const response = await fetch("/working-timer-api/workspaces");

  if (response.status !== 200) {
    throw new Error("Unable to retrieve working time workspaces");
  }

  const { workspaces } = await response.json();

  return workspaces;
} 

export const retrievesOne = async (id: number): Promise<WorkspaceEntity> => {
  const response = await fetch(`/working-timer-api/workspaces/${id}`);

  if (response.status !== 200) {
    throw new Error("Unable to retrieve working time workspace");
  }

  const { workspace } = await response.json();

  return workspace;
}

interface WorkingTimeWorkspaceCreateDTO {
  name: string;
  priceByHour: number
}
export const create = async (props: WorkingTimeWorkspaceCreateDTO): Promise<WorkspaceEntity> => {
  const response = await fetch("/working-timer-api/workspaces", {
    method: "POST",
    body: JSON.stringify({
      name: props.name,
      priceByHour: +props.priceByHour,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 201) {
    throw new Error("Unable to create working time workspace");
  }

  const { workspace } = await response.json();

  return workspace;
}

interface WorkingTimeWorkspaceUpdateDTO {
  id: number;
  name: string;
  priceByHour: number
}
export const update = async (props: WorkingTimeWorkspaceUpdateDTO): Promise<WorkspaceEntity> => {
  const response = await fetch(`/working-timer-api/workspaces/${props.id}`, {
    method: "PUT",
    body: JSON.stringify({
      name: props.name,
      priceByHour: +props.priceByHour,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Unable to update working time workspace");
  }

  const { workspace } = await response.json();

  return workspace;
}

export const remove = async (id: number): Promise<void> => {
  const response = await fetch(`/working-timer-api/workspaces/${id}`, {
    method: "DELETE",
  });

  if (response.status === 404) {
    throw new Error("Working time workspace not found");
  }

  if (response.status !== 204) {
    throw new Error("Unable to delete working time workspace");
  }
}