import { CSSProperties } from "react";

export type TTypographyTitleProps = Readonly<{
  children?: React.ReactNode;
  value?: string;
  styles?: CSSProperties;
}>;

export function useTypographyTitle(props: TTypographyTitleProps) {
  const typographyTitleStyle: CSSProperties = {
    fontSize: "2rem",
    ...props.styles,
  };

  return {
    typographyTitleStyle,
  };
}
