import { CSSProperties } from "react";

type TProps = Readonly<{
  children?: React.ReactNode;
  value?: string;
  styles?: CSSProperties;
}>;

const typographyTitleStyle: CSSProperties = {
  fontSize: "2rem",
};

export default function TypographyTitle(props: TProps) {
  const style: CSSProperties = { ...typographyTitleStyle, ...props.styles };

  return <h1 style={style}>{props.children ?? props.value}</h1>;
}
