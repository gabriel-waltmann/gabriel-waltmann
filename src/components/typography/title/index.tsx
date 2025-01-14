import {
  TTypographyTitleProps,
  useTypographyTitle,
} from "./useTypographyTitle";

export default function TypographyTitle(props: TTypographyTitleProps) {
  const { typographyTitleStyle } = useTypographyTitle(props);

  return <h1 style={typographyTitleStyle}>{props.children ?? props.value}</h1>;
}
