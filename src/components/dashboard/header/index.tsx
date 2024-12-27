import { Building, House, Wrench } from "@phosphor-icons/react";
import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";

const headerStyles: CSSProperties = {
  height: "100%",
  padding: "1rem"
}

const ulStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
}

enum Pages {
  home = 0,
  projects = 1,
  techs = 2,
}

export default function DashboardHeader() {
  const [page, setPage] = useState(Pages.home)
  
  useEffect(() => {
    if (typeof window === "undefined") return;

    const windowPath = window.location.pathname

    if (windowPath.includes("projects")) {
      return setPage(Pages.projects)
    } 
    
    if (windowPath.includes("techs")) {
      return setPage(Pages.techs)
    }
  }, [])

  return (
    <header style={headerStyles}>
      <ul style={ulStyles}>
        <li>
          <button>
            <Link href={"/dashboard/"}>
              <House style={{ color: page === Pages.home ? "#121212" : "#8e8e8e"}} size={24} />
            </Link>
          </button>
        </li>

        <li>
          <button>
            <Link href={"/dashboard/projects"}>
              <Building style={{ color: page === Pages.projects ? "#121212" : "#8e8e8e"}} size={24} />
            </Link>
          </button>
        </li>

        <li>
          <button>
            <Link href={"/dashboard/techs"}>
              <Wrench style={{ color: page === Pages.techs ? "#121212" : "#8e8e8e"}} size={24} />
            </Link>
          </button>
        </li> 
      </ul>
    </header>
  )
}