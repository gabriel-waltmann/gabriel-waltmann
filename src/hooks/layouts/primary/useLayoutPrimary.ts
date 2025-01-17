import { TabPrimaryEntity } from "@/entities/components/tab/TabPrimaryEntity";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";

export type TLayoutPrimaryProps = Readonly<{ children: React.ReactNode }>;

const mainStyles: CSSProperties = {
  flex: 1,
  marginTop: "1rem",
  paddingBottom: "1rem",
};

enum Tabs {
  Home = 0,
  Projects = 1,
  Techs = 2,
}

export function useLayoutPrimary(props: TLayoutPrimaryProps) {
  const tabs: TabPrimaryEntity[] = [
    { label: "Home", value: Tabs.Home },
    { label: "Projects", value: Tabs.Projects },
    { label: "Techs", value: Tabs.Techs },
  ];

  const [tab, setTab] = useState<Tabs>(Tabs.Home);

  const handleTab = (): void => {
    if (typeof window === "undefined") return;

    const windowPath = window.location.pathname;

    if (windowPath.includes("projects")) {
      return setTab(Tabs.Projects);
    }

    if (windowPath.includes("techs")) {
      return setTab(Tabs.Techs);
    }

    return setTab(Tabs.Home);
  };

  const router = useRouter();

  const toggleTab = async (tab: Tabs): Promise<void> => {
    const changedTab = await goToTab(tab);

    if (!changedTab) return;

    setTab(tab);
  };

  const goToTab = (tab: Tabs): Promise<boolean> => {
    switch (tab) {
      case Tabs.Home:
        return router.push("/");
      case Tabs.Projects:
        return router.push("/projects");
      case Tabs.Techs:
        return router.push("/techs");
    }
  };

  useEffect(() => {
    handleTab();
  }, []);

  return {
    tabs,
    tab,
    toggleTab,
    mainStyles,
  };
}
