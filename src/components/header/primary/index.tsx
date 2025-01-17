import TypographyTitle from "@/components/typography/title";
import { LinkIcon } from "@/components/link/icon";
import AvatarPrimary from "@/components/avatar/primary";
import { THeaderPrimaryProps, useHeaderPrimary } from "@/hooks/components/header/primary/useHeaderPrimary";

export default function Header(props: THeaderPrimaryProps): JSX.Element {
  const { headerStyle, ulStyles, links } = useHeaderPrimary(props);

  return (
    <header style={headerStyle}>
      <section style={{ gridRowEnd: "span 2" }}>
        <AvatarPrimary src="/profile.jpg" />
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
