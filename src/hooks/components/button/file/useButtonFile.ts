import { ChangeEvent, CSSProperties } from "react";

export type TButtonFileProps = Readonly<{
  value?: string;
  children?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  label?: string;
}>

export function useButtonFile(props: TButtonFileProps) {
  const style: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    ...props.style,
  }

  return {
    style,
  };
}