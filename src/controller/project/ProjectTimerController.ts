import { api } from "@/api/api";
import { ProjectTimerEntity } from "@/entities/project/timer/ProjectTimerEntity";
import { ProjectTimerStatusEnum } from "@/entities/project/timer/ProjectTimerStatusEnum";

export interface ProjectTimerRetrievesDTO {
  projectId: string,
  status?: ProjectTimerStatusEnum,
}

export interface ProjectTimerRetrievesOneDTO {
  id: string,
  projectId: string,
}

export interface ProjectTimerCreateDTO {
  projectId: number;
  start: string; // YYYY-MM-DD HH:MM:SS
  end?: string; // YYYY-MM-DD HH:MM:SS
}

export interface ProjectTimerUpdateDTO {
  id: number;
  projectId: number;
  start: string; // YYYY-MM-DD HH:MM:SS
  end?: string; // YYYY-MM-DD HH:MM:SS
}

export interface ProjectTimerRemoveDTO {
  id: number;
  projectId: number;
}

export class ProjectTimerController {
  public async retrieves (props: ProjectTimerRetrievesDTO): Promise<ProjectTimerEntity[]> {
    const { data, status } = await api.get(`/project/${props.projectId}/timer`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async retrievesOne(props: ProjectTimerRetrievesOneDTO): Promise<ProjectTimerEntity> {
    const { data, status } = await api.get(`/project/${props.projectId}/timer/${props.id}`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async create(props: ProjectTimerCreateDTO): Promise<ProjectTimerEntity> {
    const { data, status } = await api.post(`/project/${props.projectId}/timer`, props)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async update(props: ProjectTimerUpdateDTO): Promise<ProjectTimerEntity> {
    const { data, status } = await api.put(`/project/${props.projectId}/timer/${props.id}`, props)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async remove(props: ProjectTimerRemoveDTO): Promise<void> {
    const { data, status } = await api.delete(`/project/${props.projectId}/timer/${props.id}`);
  
    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }
  }
}

