import { CSSProperties } from "react";

type TProps = Readonly<{
  children?: React.ReactNode;
  value?: string;
  styles?: CSSProperties;
}>;

export default function TypographyParagraph(props: TProps) {
  if (props.value) {
    return <p>{props.value}</p>;
  }

  return <p>{props.children}</p>;
}
