import { FileEntity } from "./FileEntity";

export interface TechEntity {
  id: string;
  name: string;
  link: {
    id: string;
    name: string;
    key: string;
    updated_at: string;
    created_at: string;
  };
  file: FileEntity | null;
  updated_at: string;
  created_at: string
}