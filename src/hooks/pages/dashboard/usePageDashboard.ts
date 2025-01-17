import { CSSProperties } from "react";

export type TPageDashboardProps = Readonly<{}>;

export function usePageDashboard(props: TPageDashboardProps) {
  const linkStyle: CSSProperties = {
    color: "#f1f1f1",
  }

  const buttonStyle: CSSProperties = {
    maxWidth: "120px"
  }

  const ulStyles: CSSProperties = {
    gap: "1rem",
    marginTop: "1rem",
    display: "flex",
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
  ]

  return {
    links,
    linkStyle,
    buttonStyle,
    ulStyles,
  }
}