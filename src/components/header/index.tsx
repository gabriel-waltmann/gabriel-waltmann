import TypographyTitle from "@/components/typography/title";
import { THeaderProps, useHeader } from "./useHeader";
import { LinkIcon } from "../links/link-icon";
import AvatarDefault from "../avatars/default";

export default function Header(props: THeaderProps) {
  const { headerStyle, ulStyles, links } = useHeader(props);

  return (
    <header style={headerStyle}>
      <section style={{ gridRowEnd: "span 2" }}>
        <AvatarDefault src="/profile.jpg" />
      </section>

      <section>
        <TypographyTitle>Gabriel Waltmann</TypographyTitle>
      </section>

      <section>
        <ul style={ulStyles}>
          {links.map((link, index) => (
            <li key={index + "header-link-icon"}>
              <LinkIcon icon={link.icon} href={link.href} />
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
}
