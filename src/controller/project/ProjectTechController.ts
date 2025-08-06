import { api } from "@/api/api";
import { ProjectTechEntity } from "@/entities/project/ProjectTechEntity";

export interface ProjectTechCreateDTO {
  projectId: string;
  techId: string;
}

export interface ProjectTechDeleteDTO {
  id: string;
  projectId: string;
}
export class ProjectTechController {
  public async retrieves(projectId: string) {
    const { data, status } = await api.get(`/project/${projectId}/tech`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async create(props: ProjectTechCreateDTO): Promise<ProjectTechEntity> {
    const formData = new FormData();
    formData.append("techId", props.techId);

    const { data, status } = await api.post(`/project/${props.projectId}/tech`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async remove (props: ProjectTechDeleteDTO): Promise<void> {
    const { data, status } = await api.delete(`/project/${props.projectId}/tech/${props.id}`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }
  }
}