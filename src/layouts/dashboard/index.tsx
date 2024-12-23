import DashboardHeader from "@/components/dashboard/header";
import { CSSProperties } from "react";

const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  height: "100vh",
  width: "100vw"
}

const mainStyles: CSSProperties = {
  flex: 1,
  backgroundColor: "#f1f1f1",
  padding: "1rem"
}

export default function DashboardLayout(props: Readonly<{ children: React.ReactNode}>) {
  return (
    <div style={style}>
      <DashboardHeader />
    
      <main style={mainStyles}> {props.children} </main>
    </div>
  )
}