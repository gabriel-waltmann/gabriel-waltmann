import LinkPrimary from "@/components/link/primary";
import TypographyCaption from "@/components/typography/caption";
import { TLinkCardProps, useLinkCard } from "@/hooks/components/link/card/useLinkCard";

export default function LinkCard(props: TLinkCardProps): JSX.Element {
  const { containerStyle, captionStyle } = useLinkCard(props);

  return (
    <LinkPrimary href={props.href}>
      <div style={containerStyle}>
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          width="100%"
          height="100%"
          loading="lazy"
        />

        <TypographyCaption styles={captionStyle}>{props.name}</TypographyCaption>
      </div>
    </LinkPrimary>
  );
}
