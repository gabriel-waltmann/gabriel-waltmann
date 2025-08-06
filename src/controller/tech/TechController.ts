import { api } from "@/api/api";
import { TechEntity } from "@/entities/TechEntity";

export interface TechCreateDTO {
  name: string;
  linkName: string;
  link: string;
  file: string;
}

export interface TechUpdateDTO {
  id: string;
  name: string;
  linkName: string;
  link: string;
  file: string;
}

export class TechController {
  public async retrieves(): Promise<TechEntity[]> {
    const { status, data } = await api.get("/tech");

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }));
    }

    return data;
  }

  public async create(params: TechCreateDTO): Promise<TechEntity> {
    const formData = new FormData();

    formData.append("name", params.name);

    formData.append("linkName", params.linkName);

    formData.append("linkKey", params.link);

    const file = await fetch(params.file).then((res) => res.blob());

    formData.append("file", file);

    const { status, data } = await api.post("/tech", formData);

    if (status !== 201) {
      throw new Error(JSON.stringify({ data, status }));
    }

    return data;
  }

  public async update(params: TechUpdateDTO): Promise<TechEntity> {
    const formData = new FormData();

    formData.append("name", params.name);

    formData.append("linkName", params.linkName);

    formData.append("linkKey", params.link);

    const file = await fetch(params.file).then((res) => res.blob());

    formData.append("file", file);

    const { data, status } = await api.put(`/tech/${params.id}`, formData)

    if (status !== 201) {
      throw new Error(JSON.stringify({ data, status }));
    }

    return data;

  }

  public async remove(id: string): Promise<void> {
    const { data, status } = await api.delete(`/tech/${id}`);

    if (status !== 201) {
      throw new Error(JSON.stringify({ data, status }));
    }
  }
}
