import { api } from "@/api/api";
import { LinkIconEntity } from "@/entities/components/link/icon/LinkIconEntity";
import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react"

export type THeaderDashboardProps = Readonly<{
  style?: CSSProperties
}>

export type THeaderDashboardResult = {
  headerStyle: CSSProperties,
  navStyle: CSSProperties,
  links: LinkIconEntity[],
  onClickExit: () => void
}

export function useHeaderDashboard(props: THeaderDashboardProps): THeaderDashboardResult {
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
    const color = link === LinkIconEnum.dashboard ? "#121212" : "#8e8e8e";

    return [
      {
        icon: LinkIconEnum.dashboard,
        href: "/dashboard",
        color,
      },
      {
        icon: LinkIconEnum.projects,
        href: "/dashboard/project",
        color,
      },
      {
        icon: LinkIconEnum.techs,
        href: "/dashboard/tech",
        color,
      },
      {
        icon: LinkIconEnum.workingTimer,
        href: "/dashboard/working-timer",
        color,
      },
      {
        icon: LinkIconEnum.bankToNotion,
        href: "/dashboard/finance-import",
        color,
      }
    ]
  }

  const onClickExit = () => {
    localStorage.removeItem("sessionToken")

    api.defaults.headers.common.Authorization = undefined;

    router.push("/auth/login")
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
    onClickExit
  }
}