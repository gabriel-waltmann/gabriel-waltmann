import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { CSSProperties } from "react"

const cardStyle: CSSProperties = {
  backgroundColor: "#fff",
  color: "#121212",
  textDecoration: "none",
  padding: "1rem",
  borderRadius: "12px",
  fontSize: "1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

type TProps = Readonly<{
  name: string,
  href: string
}>;

export default function DashboardCard(props: TProps) {
  return (
    <Link href={props.href} style={cardStyle}> 
      <span>{props.name} </span>

      <CaretRight size={32} />
    </Link>
  )
}