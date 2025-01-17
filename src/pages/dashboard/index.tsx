import ButtonContained from "@/components/button/contained";
import Link from "@/components/link/primary";
import TypographyTitle from "@/components/typography/title";
import { TPageDashboardProps, usePageDashboard } from "@/hooks/pages/dashboard/usePageDashboard";

export default function PageDashboard(props: TPageDashboardProps) {
  const { 
    links,
    linkStyle, 
    buttonStyle, 
    ulStyles,
  } = usePageDashboard(props);

  return (
    <>
      <TypographyTitle value="Dashboard" />

      <nav style={ulStyles}>
        {links.map((link, index) => (
          <ButtonContained style={buttonStyle} key={index + "dashboard-link"}>
            <Link style={linkStyle} href={link.href}>{link.name}</Link>
          </ButtonContained>
        ))}
      </nav>
    </>
  );
}
