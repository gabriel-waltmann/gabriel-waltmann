import { CSSProperties, ReactNode } from "react";

export type TButtonContainedProps = Readonly<{
  value?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  style?: CSSProperties;
}>;

export function useButtonContained(props: TButtonContainedProps) {}