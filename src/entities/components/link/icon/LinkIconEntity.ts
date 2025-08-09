import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";

export interface LinkIconEntity {
  href?: string;
  onClick?: () => void;
  icon: LinkIconEnum;
  color?: string;
};