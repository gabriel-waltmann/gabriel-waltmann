import { useScreen } from "@/hooks/useScreen";
import { CSSProperties } from "react";

export type TTypographySubtitleProps = Readonly<{
  children?: React.ReactNode;
  value?: string;
  styles?: CSSProperties;
}>;

export function useTypographySubtitle(props: TTypographySubtitleProps) {
  const typographySubtitleStyle: CSSProperties = {
    fontSize: "1.6rem",
    ...props.styles,
  };

  return {
    typographySubtitleStyle,
  };
}
