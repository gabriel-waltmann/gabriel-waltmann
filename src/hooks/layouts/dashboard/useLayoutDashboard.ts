import { CSSProperties } from "react";

export type TLayoutDashboardProps = Readonly<{
  children: JSX.Element
}>;

export function useLayoutDashboard(props: TLayoutDashboardProps) {
  const divStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    minHeight: "100vh",
    width: "100vw",
  };
  
  const mainStyles: CSSProperties = {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: "1rem 2rem 1rem 1rem",
    overflowX: "auto",
  };

  return {
    divStyle,
    mainStyles
  };
}