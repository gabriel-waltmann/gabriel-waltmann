import { LinkIcon } from "@/components/link/icon";
import { THeaderDashboardProps, useHeaderDashboard } from "@/hooks/components/header/dashboard/useHeaderDashboard";

export default function HeaderDashboard(props: THeaderDashboardProps): JSX.Element {
  const { 
    headerStyle,
    navStyle,
    links,
  } = useHeaderDashboard(props);

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {links.map((link, index) => (
          <LinkIcon 
            {...link}
            key={index + "header-link-icon"} 
          />
        ))}
      </nav>
    </header>
  );
}
