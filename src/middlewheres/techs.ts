import { TechEntity } from "@/entities/TechEntity";

export const retrieves = async (): Promise<TechEntity[]> => {
  const response = await fetch("/api/tech");

  return await response.json();
};
