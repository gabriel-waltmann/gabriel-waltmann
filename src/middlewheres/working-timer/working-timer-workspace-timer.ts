import { TimerEntity } from "@/entities/working-timer/TimerEntity";

export enum WorkspaceTimerStatus {
  ENDED = 0,
  RUNNING = 1,
}
interface WorkingTimeWorkspaceTimerRetrievesDTO {
  workspaceId: number,
  status?: WorkspaceTimerStatus,
}
export const retrieves = async (props: WorkingTimeWorkspaceTimerRetrievesDTO): Promise<TimerEntity[]> => {
  let url = `/working-timer-api/workspace-timer?workspace_id=${props.workspaceId}`;
  if (props.status !== undefined) url += `&status=${props.status}`;

  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Unable to retrieve working time workspaces");
  }

  const { timers } = await response.json();

  return timers;
} 

export const retrievesOne = async (id: number): Promise<TimerEntity> => {
  const response = await fetch(`/working-timer-api/workspace-timer/${id}`);

  if (response.status !== 200) {
    throw new Error("Unable to retrieve working time workspace");
  }

  const { timer } = await response.json();

  return timer;
}

interface WorkingTimeWorkspaceTimerCreateDTO {
  workspaceId: number;
  start: string; // YYYY-MM-DD HH:MM:SS
  end?: string; // YYYY-MM-DD HH:MM:SS
}
export const create = async (props: WorkingTimeWorkspaceTimerCreateDTO): Promise<TimerEntity> => {
  const response = await fetch("/working-timer-api/workspace-timer", {
    method: "POST",
    body: JSON.stringify({
      workspace_id: props.workspaceId,
      start_time: props.start,
      end_time: props.end
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 201) {
    throw new Error("Unable to create working time workspace");
  }

  const { timer } = await response.json();

  return timer;
}

interface WorkingTimeWorkspaceTimerUpdateDTO {
  id: number;
  workspaceId: number;
  start: string; // YYYY-MM-DD HH:MM:SS
  end?: string; // YYYY-MM-DD HH:MM:SS
}
export const update = async (props: WorkingTimeWorkspaceTimerUpdateDTO): Promise<TimerEntity> => {
  const response = await fetch(`/working-timer-api/workspace-timer/${props.id}`, {
    method: "PUT",
    body: JSON.stringify({
      workspace_id: props.workspaceId,
      start_time: props.start,
      end_time: props.end
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Unable to update working time workspace");
  }

  const { timer } = await response.json();

  return timer;
}

export const remove = async (id: number): Promise<void> => {
  const response = await fetch(`/working-timer-api/workspace-timer/${id}`, {
    method: "DELETE",
  });

  if (response.status === 404) {
    throw new Error("Working time workspace not found");
  }

  if (response.status !== 204) {
    throw new Error("Unable to delete working time workspace");
  }
}