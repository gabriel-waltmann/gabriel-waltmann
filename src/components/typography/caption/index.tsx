import {
  TTypographyCaptionProps,
  useTypographyCaption,
} from "./useTypographyCaption";

export default function TypographyCaption(props: TTypographyCaptionProps) {
  const { typographyCaptionStyle } = useTypographyCaption(props);

  return (
    <span style={typographyCaptionStyle}>{props.value ?? props.children}</span>
  );
}
