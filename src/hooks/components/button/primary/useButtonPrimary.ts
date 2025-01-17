import { CSSProperties, ReactNode } from "react";

export type TButtonPrimaryProps = Readonly<{
  value?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  style: CSSProperties
}>;

export function useButtonPrimary(props: TButtonPrimaryProps) {}