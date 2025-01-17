import { LinkIconEntity } from "@/entities/components/link/icon/LinkIconEntity";
import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react"

export type THeaderDashboardProps = Readonly<{
  style?: CSSProperties
}>

export function useHeaderDashboard(props: THeaderDashboardProps) {
  const headerStyle: CSSProperties = {
    height: "100%",
    padding: "1rem",
  };
  
  const navStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  };

  const [link, setLink] = useState<LinkIconEnum>(LinkIconEnum.dashboard);

  const [links, setLinks] = useState<LinkIconEntity[]>([]);

  const router = useRouter();

  const getCurrentLink = (): LinkIconEnum => {
    if (router.pathname.includes("project")) {
      return LinkIconEnum.projects;
    }

    if (router.pathname.includes("tech")) {
      return LinkIconEnum.techs;
    }

    return LinkIconEnum.dashboard;
  };

  const getLinks = (): LinkIconEntity[] => {
    return [
      {
        icon: LinkIconEnum.dashboard,
        href: "/dashboard",
        color: link === LinkIconEnum.dashboard ? "#121212" : "#8e8e8e",
      },
      {
        icon: LinkIconEnum.projects,
        href: "/dashboard/project",
        color: link === LinkIconEnum.projects ? "#121212" : "#8e8e8e",
      },
      {
        icon: LinkIconEnum.techs,
        href: "/dashboard/tech",
        color: link === LinkIconEnum.techs ? "#121212" : "#8e8e8e",
      },
    ]
  }

  useEffect(() => {
    setLink(getCurrentLink());
  }, []);

  useEffect(() => {
    setLink(getCurrentLink());
  }, [router.pathname]);

  useEffect(() => {
    setLinks(getLinks());
  }, [link]);

  return {
    headerStyle,
    navStyle,
    links,
  }
}