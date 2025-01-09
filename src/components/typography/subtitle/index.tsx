import { CSSProperties } from "react";

type TProps = Readonly<{
  children?: React.ReactNode;
  value?: string;
  styles?: CSSProperties;
}>;

export default function TypographySubtitle(props: TProps) {
  return <h2 style={props.styles}>{props.value ?? props.children}</h2>;
}
