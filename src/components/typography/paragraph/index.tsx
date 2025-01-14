import {
  TTypographyParagraphProps,
  useTypographyParagraph,
} from "./useTypographyParagraph";

export default function TypographyParagraph(props: TTypographyParagraphProps) {
  const { typographyParagraphStyle } = useTypographyParagraph(props);

  return (
    <p style={typographyParagraphStyle}>{props.children ?? props.value}</p>
  );
}
