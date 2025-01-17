import { TechEntity } from "@/entities/TechEntity";

export const retrieves = async (): Promise<TechEntity[]> => {
  const response = await fetch("/api/tech");

  return await response.json();
};

interface TechCreateDTO {
  name: string;
  linkName: string;
  link: string;
  file: string;
}
export const create = async (props: TechCreateDTO): Promise<TechEntity> => {
  const formData = new FormData();

  formData.append("name", props.name);

  formData.append("linkName", props.linkName);

  formData.append("linkKey", props.link);

  const file = await fetch(props.file).then((res) => res.blob());

  formData.append("file", file);

  const response = await fetch("/api/tech", {
    method: "POST",
    body: formData,
  });

  if (response.status !== 200) {
    throw new Error("Unable to create tech");
  }

  return await response.json();
}

interface TechUpdateDTO {
  id: string;
  name: string;
  linkName: string;
  link: string;
  file: string;
}
export const update = async (props: TechUpdateDTO): Promise<TechEntity> => {
  const formData = new FormData();

  formData.append("name", props.name);

  formData.append("linkName", props.linkName);

  formData.append("linkKey", props.link);

  const file = await fetch(props.file).then((res) => res.blob());

  formData.append("file", file);

  const response = await fetch(`/api/tech/${props.id}`, {
    method: "PUT",
    body: formData,
  });

  if (response.status !== 200) {
    throw new Error("Unable to update tech");
  }

  return await response.json();
}

export const remove = async (id: string): Promise<void> => {
  const response = await fetch(`/api/tech/${id}`, {
    method: "DELETE",
  });

  if (response.status !== 200) {
    throw new Error("Unable to delete tech");
  }
}