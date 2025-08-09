import { LinkIcon } from "@/components/link/icon";
import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";
import { THeaderDashboardProps, useHeaderDashboard } from "@/hooks/components/header/dashboard/useHeaderDashboard";

export default function HeaderDashboard(props: THeaderDashboardProps): JSX.Element {
  const { 
    headerStyle,
    navStyle,
    links,
    onClickExit
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

          <LinkIcon 
            icon={LinkIconEnum.exit}
            onClick={onClickExit}
            color="#121212"
          />

      </nav>
    </header>
  );
}
