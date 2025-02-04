import { useScreen } from "@/hooks/useScreen";
import { CSSProperties } from "react";

export type TPageDashboardProps = Readonly<{}>;

export function usePageDashboard(props: TPageDashboardProps) {
  const { isMobile } = useScreen();

  const linkStyle: CSSProperties = {
    color: "#f1f1f1",
  }

  const buttonStyle: CSSProperties = {
    width: isMobile ? "100%" : "160px"
  }

  const navStyles: CSSProperties = {
    gap: "1rem",
    marginTop: "1rem",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
  };

  const links = [
  {
    href: "/dashboard/project",
    name: "Projects",
  },
  {
    href: "/dashboard/tech",
    name: "Techs",
  },
  {
    href: "/dashboard/working-timer",
    name: "Working Timer",
  },
  ]

  return {
    links,
    linkStyle,
    buttonStyle,
    navStyles,
  }
}