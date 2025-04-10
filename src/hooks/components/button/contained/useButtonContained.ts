import { CSSProperties, ReactNode } from "react";

export type TButtonContainedProps = Readonly<{
  value?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  style?: CSSProperties;
}>;

export function useButtonContained(props: TButtonContainedProps) {
  const style: CSSProperties = {
    ...props.style,
  }

  const onClick = (e: { preventDefault: () => void }) => {
    if (props.type !== "submit") {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  }

  return {
    onClick,
    style
  }
}