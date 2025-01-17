import { useScreen } from "@/hooks/useScreen";
import { CSSProperties } from "react";

export type TTypographyParagraphProps = Readonly<{
  children?: React.ReactNode;
  value?: string;
  style?: CSSProperties;
}>;

export function useTypographyParagraph(props: TTypographyParagraphProps) {
  const { isMobile } = useScreen();

  const typographyParagraphStyle: CSSProperties = {
    fontSize: isMobile ? "1.2rem" : "1.4rem",
    ...props.style,
  };

  return {
    typographyParagraphStyle,
  };
}
