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
    ...props.style,
  }

  const type = props.type ?? "button";

  const onClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (props.onClick) {
      props.onClick();
    }
  }

  return {
    type,
    style,
    onClick,
  };
}