import { Icon, Plus, Trash } from "@phosphor-icons/react";
import { CSSProperties, useEffect, useState } from "react";

export type TButtonChipProps = Readonly<{
  onClick?: () => void;
  value: string;
  variant?: "add" | "remove";
  size?: number;
}>

export default function useButtonChip(props: TButtonChipProps) {
  const [iconElement, setIconElement] = useState<Icon>(Plus);
  const [size, setSize] = useState<number>(14);

  useEffect(() => {
    setIconElement(
      props.variant === "remove" ? Trash : Plus
    )

    if (props.size) {
      setSize(props.size);
    }
  }, []);

  useEffect(() => {
    setIconElement(
      props.variant === "remove" ? Trash : Plus
    )
  }, [props.variant]);

  useEffect(() => {
    if (props.size) setSize(props.size);
  }, [props.size]);
  
  const buttonStyle: CSSProperties = {
    display: "flex",
    flexWrap: "nowrap",
    gap: ".4rem",
    borderRadius: "1rem",
    padding: ".2rem .4rem",
    alignItems: "center",
    border: "1px solid #8e8e8e",
  }

  return {
    size,
    IconElement: iconElement,
    buttonStyle,
  };
}
