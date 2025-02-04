import { useScreen } from "@/hooks/useScreen";
import { CSSProperties } from "react";

export type TLayoutDashboardProps = Readonly<{
  children: JSX.Element
}>;

export function useLayoutDashboard(props: TLayoutDashboardProps) {
  const { isMobile } = useScreen();

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
    padding: isMobile ? ".4rem .8rem .4rem .4rem" : "1rem 2rem 1rem 1rem",
    overflowX: "auto",
  };

  return {
    divStyle,
    mainStyles
  };
}