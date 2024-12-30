import DashboardCard from "@/components/dashboard/card"
import TypographyTitle from "@/components/typography/title"
import { CSSProperties } from "react"

const ulStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "1rem"
}

export default function DashboardPage() {
  return (
    <>
      <TypographyTitle value="HOME" />

      <nav style={ulStyles}>
        <DashboardCard name="Projects" href="/dashboard/projects" />

        <DashboardCard name="Techs" href="/dashboard/techs" />
      </nav>
   </>
  )
}