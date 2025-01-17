import {
  TTypographySubtitleProps,
  useTypographySubtitle,
} from "@/hooks/components/typography/subtitle/useTypographySubtitle";

export default function TypographySubtitle(props: TTypographySubtitleProps) {
  const { typographySubtitleStyle } = useTypographySubtitle(props);

  return (
    <h2 style={typographySubtitleStyle}>{props.value ?? props.children}</h2>
  );
}
