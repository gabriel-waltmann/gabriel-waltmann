import { useScreen } from "@/hooks/useScreen";
import { CSSProperties, useEffect, useState } from "react";

export type TAvatarProps = Readonly<{
  size?: string;
  src: string;
}>;

export function useAvatarPrimary(props: TAvatarProps) {
  const { isMobile } = useScreen();
  const [size, setSize] = useState("120px");

  useEffect(() => {
    setSize(props.size ?? "120px");
  }, [, isMobile, props.size]);

  const figureStyle: CSSProperties = {
    height: size,
    width: size,
    borderRadius: "50%",
    overflow: "hidden",
  };

  return {
    figureStyle,
  };
}
