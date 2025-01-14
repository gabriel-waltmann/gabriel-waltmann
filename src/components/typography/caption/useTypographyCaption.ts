import { useScreen } from "@/hooks/useScreen";
import { CSSProperties } from "react";

export type TTypographyCaptionProps = Readonly<{
  children?: React.ReactNode;
  value?: string;
  styles?: CSSProperties;
}>;

export function useTypographyCaption(props: TTypographyCaptionProps) {
  const { isMobile } = useScreen();

  const typographyCaptionStyle: CSSProperties = {
    fontSize: isMobile ? ".8rem" : "1rem",
    ...props.styles,
  };

  return {
    typographyCaptionStyle,
  };
}
