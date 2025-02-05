import { CSSProperties, useEffect, useState } from "react";
import * as workingTimeWorkspacesMiddleware from "@/middlewheres/working-timer/working-timer-workspace";
import { useRouter } from "next/router";
import { WorkspaceEntity } from "@/entities/working-timer/WorkspaceEntity";
import { useScreen } from "@/hooks/useScreen";

export type TPageDashboardWorkingTime = Readonly<{}>;

export function usePageDashboardWorkingTimer(props: TPageDashboardWorkingTime) {
  const [workspacesLoading, setWorkspacesLoading] = useState<boolean>(false);

  const [workspaces, setWorkspaces] = useState<WorkspaceEntity[]>([]);

  const router = useRouter();

  const { isMobile } = useScreen();

  const onGoToNewWorkspacePage = (): void => {
    router.push('/dashboard/working-timer/new');
  }

  const onGoToWorkspacePage = (workspace: WorkspaceEntity): void => {
    router.push(`/dashboard/working-timer/${workspace.id}`);
  }

  const ondWorkingTimeWorkspaceLoad = async (): Promise<void> => {
    try {
      setWorkspacesLoading(true);

      setWorkspaces(await workingTimeWorkspacesMiddleware.retrieves());

      setWorkspacesLoading(false);
    } catch (error: any) {
      console.error(error);

      alert("Unable to load working time workspaces");

      setWorkspacesLoading(false);
    }
  }


  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  };

  const ulStyle: CSSProperties = {
    display: "flex",
    gap: ".6rem",
    flexWrap: "nowrap",
  }

  const tableStyle: CSSProperties = {
    marginTop: "1rem",
    marginBottom: "1rem",
  };

  const navStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "nowrap",
    gap: isMobile ? ".6rem" : "1rem"
  }

  useEffect(() => {
    ondWorkingTimeWorkspaceLoad();
  }, []);

  return {
    // * actions
    onGoToNewWorkspacePage,
    onGoToWorkspacePage,
    
    // * states
    workspacesLoading,
    workspaces,
    
    // * styles
    headerStyle,
    ulStyle,
    tableStyle,
    navStyle,
  }
}