import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";

export interface LinkIconEntity {
  href: string;
  icon: LinkIconEnum;
  color?: string;
};