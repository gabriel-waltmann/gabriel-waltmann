import {
  TTypographyParagraphProps,
  useTypographyParagraph,
} from "@/hooks/components/typography/paragraph/useTypographyParagraph";

export default function TypographyParagraph(props: TTypographyParagraphProps) {
  const { typographyParagraphStyle } = useTypographyParagraph(props);

  return (
    <p style={typographyParagraphStyle}>{props.children ?? props.value}</p>
  );
}
