import {
  TTypographyTitleProps,
  useTypographyTitle,
} from "@/hooks/components/typography/title/useTypographyTitle";

export default function TypographyTitle(props: TTypographyTitleProps) {
  const { typographyTitleStyle } = useTypographyTitle(props);

  return <h1 style={typographyTitleStyle}>{props.children ?? props.value}</h1>;
}
