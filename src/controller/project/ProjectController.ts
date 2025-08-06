import { api } from "@/api/api";
import { ProjectEntity } from "@/entities/project/ProjectEntity";

export interface ProjectCreateDTO {
  title: string;
  description: string;
}

export interface ProjectUpdateDTO {
  id: string;
  title: string;
  description: string;
}

export class ProjectController {
  public async retrieves(): Promise<ProjectEntity[]> {    
    const { data, status } = await  api.get("/project")

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async retrievesOne(projectId: string): Promise<ProjectEntity> {
    const { data, status } = await api.get(`/project/${projectId}`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async create(props: ProjectCreateDTO): Promise<ProjectEntity> {
    const { data, status } = await api.post('/project', props)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async update(props: ProjectUpdateDTO): Promise<ProjectEntity> {
    const { data, status } = await api.put(`/project/${props.id}`, props)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async remove(id: string): Promise<void> {
    const { data, status } = await api.delete(`/project/${id}`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }
  }
}