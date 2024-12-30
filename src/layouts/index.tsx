import IndexHeader from "@/components/header";
import PrimaryTabs, { TPrimaryTab } from "@/components/tabs/primary-tabs";
import { CSSProperties, useEffect, useState } from "react";

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  height: "100vh",
  padding: "2rem",
  width: "100vw"
}

const mainStyles: CSSProperties = {
  flex: 1,
}

enum Tabs {
  Home = 0,
  Projects = 1,
  Techs = 2
}

export default function IndexLayout(props: Readonly<{ children: React.ReactNode}>) {
  const tabs: TPrimaryTab[] = [
    { label: "Home", value: Tabs.Home, component: <h1>Home</h1> },
    { label: "Projects", value: Tabs.Projects, component: <h1>Projects</h1> },
    { label: "Techs", value: Tabs.Techs, component: <h1>Techs</h1> },
  ]

  const [tab, setTab] = useState<Tabs>(Tabs.Home);

  const handleTab = (): void => {
    if (typeof window === "undefined") return;

    const windowPath = window.location.pathname;
    
    if (windowPath.includes("projects")) {
      return setTab(Tabs.Projects)
    } 
    
    if (windowPath.includes("techs")) {
      return setTab(Tabs.Techs)
    }

    return setTab(Tabs.Home)
  }

  useEffect(() => {
    handleTab()
  }, [])

  return (
    <div style={containerStyle}>
      <IndexHeader />

      <PrimaryTabs 
        tab={tab}
        tabs={tabs}
      />
    
      <main style={mainStyles}>{props.children}</main>
    </div>
  )
}