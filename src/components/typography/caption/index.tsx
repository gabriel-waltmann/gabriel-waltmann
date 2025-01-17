import { TTypographyCaptionProps, useTypographyCaption } from "@/hooks/components/typography/caption/useTypographyCaption";

export default function TypographyCaption(props: TTypographyCaptionProps): JSX.Element {
  const { typographyCaptionStyle } = useTypographyCaption(props);

  return (
    <span style={typographyCaptionStyle}>{props.value ?? props.children}</span>
  );
}
