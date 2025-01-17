import { CSSProperties, ReactNode } from "react";

export type TButtonOutlinedProps = Readonly<{
  value?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  style?: CSSProperties;
}>;

export function useButtonOutlined(props: TButtonOutlinedProps) {
  const style: CSSProperties = {
    width: "100%",
    ...props.style,
  }

  const type = props.type ?? "button";

  const onClick = props.onClick;

  return {
    type,
    style,
    onClick,
  };
}