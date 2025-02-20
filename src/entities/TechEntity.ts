import { FileEntity } from "./FileEntity";
import { LinkEntity } from "./LinkEntity";

export interface TechEntity {
  id: string;
  name: string;
  link: LinkEntity;
  file: FileEntity;
  updated_at: string;
  created_at: string;
}
