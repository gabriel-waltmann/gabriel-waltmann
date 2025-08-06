import { api, updateApiAuth } from "@/api/api";
import { useScreen } from "@/hooks/useScreen";
import { CSSProperties, useEffect, useState } from "react";

export type TLayoutDashboardProps = Readonly<{
  children: JSX.Element
}>;

export type TLayoutDashboardResult = {
  loading: boolean,
  divStyles: CSSProperties,
  mainStyles: CSSProperties,
}

export function useLayoutDashboard(props: TLayoutDashboardProps): TLayoutDashboardResult {
  const { isMobile } = useScreen();

  const [loading, setLoading] = useState<boolean>(true)

  const divStyles: CSSProperties = {
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

  useEffect(() => {
    const token = localStorage.getItem("sessionToken")

    if (!token) return

    updateApiAuth(token)

    setLoading(false)
  }, [])

  return {
    loading,
    divStyles,
    mainStyles
  };
}