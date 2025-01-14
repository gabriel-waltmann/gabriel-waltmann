import Link from "@/components/links/link";
import { TLinkTechProps, useLinkTech } from "./useLinkTech";
import TypographyCaption from "@/components/typography/caption";

export default function LinkTech(props: TLinkTechProps) {
  const { containerStyle, captionStyle, tech } = useLinkTech(props);

  return (
    <Link href={props.tech.link.key}>
      <div style={containerStyle}>
        <img
          src={tech.file.key}
          alt={tech.name}
          width="100%"
          height="100%"
          loading="lazy"
        />

        <TypographyCaption styles={captionStyle}>{tech.name}</TypographyCaption>
      </div>
    </Link>
  );
}
