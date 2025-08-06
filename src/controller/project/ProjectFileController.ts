import { api } from "@/api/api";
import { ProjectFileEntity } from "@/entities/project/ProjectFileEntity";

export interface ProjectFileCreateDTO {
  projectId: string;
  file: File;
}

export interface ProjectFileDeleteDTO {
  id: string;
  projectId: string;
}

export class ProjectFileController {
  public async retrieves(projectId: string): Promise<ProjectFileEntity[]> {
    const { data, status } = await api.get(`/project/${projectId}/file`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async create(props: ProjectFileCreateDTO): Promise<ProjectFileEntity> {
    const formData = new FormData();

    // TODO: Save file with custom name
    const blob = new Blob([props.file], {
      type: props.file.type,
    });
  
    if (!blob) {
      throw new Error("Unable to create project file");
    }
  
    formData.append("file", blob);

    const { data, status } = await api.post(`/project/${props.projectId}/file`, formData)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async remove(props: ProjectFileDeleteDTO): Promise<void> {
    const { data, status } = await api.delete(`/project/${props.projectId}/file/${props.id}`)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }
  }
}