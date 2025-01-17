import { useScreen } from "@/hooks/useScreen";
import { CSSProperties, useEffect, useState } from "react";

export type TContainerPrimaryProps = Readonly<{
  children?: React.ReactNode;
}>;

export function useContainerPrimary(props: TContainerPrimaryProps) {
  const { width } = useScreen();

  const getMaxWidth = (): string => {
    if (width < 768) {
      return "100%";
    }

    if (width < 1024) {
      return "768px";
    }

    return "1024px";
  };

  const getContainerStyle = (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    minHeight: "100vh",
    margin: width < 768 ? "1rem" : "1rem auto 1rem auto",
    maxWidth: getMaxWidth(),
  });

  const [containerStyle, setContainerStyle] = useState<CSSProperties>(
    getContainerStyle()
  );

  useEffect(() => {
    setContainerStyle(getContainerStyle());
  }, [width]);

  return {
    containerStyle,
  };
};
