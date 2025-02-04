import { WorkspaceEntity } from "@/entities/WorkspaceEntity";
import { CSSProperties, useEffect, useState } from "react";
import * as workingTimeWorkspacesMiddleware from "@/middlewheres/working-timer/working-timer-workspace";
import { useRouter } from "next/router";
import { useScreen } from "@/hooks/useScreen";

export type TPageDashboardWorkingTimeWorkspaceProps = Readonly<{}>;


export function usePageDashboardWorkingTimeWorkspace(props: TPageDashboardWorkingTimeWorkspaceProps) {
  const [workspace, setWorkspace] = useState<WorkspaceEntity | null>(null);
  
  const [backLoading, setBackLoading] = useState<boolean>(false);

  const [editLoading, setEditLoading] = useState<boolean>(false);

  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  const [workspaceLoading, setWorkspaceLoading] = useState<boolean>(false);

  const router = useRouter();

  const { isMobile } = useScreen();

  const onWokspaceLoad = async (id: number): Promise<void> => {
    try {
      setWorkspaceLoading(true);

      const workspace = await workingTimeWorkspacesMiddleware.retrievesOne(id);

      setWorkspace(workspace);

      setWorkspaceLoading(false);
    } catch (error: any) {
      console.error(error);
    
      setWorkspaceLoading(false);
    }
  }

  const onBackToWorkpaces = async (): Promise<void> => {
    if (!workspace) {
      await router.push(`/dashboard/working-timer`);

      return;
    }

    setBackLoading(true);

    await router.push(`/dashboard/working-timer/${workspace.id}`);

    setBackLoading(false);
  }

  const onEditWorkspace = async (): Promise<void> => {
    if (!workspace) {
      return alert("Workspace not found");
    }

    setEditLoading(true);

    await router.push(`/dashboard/working-timer/${workspace.id}/edit`);

    setEditLoading(false);
  }

  const onDeleteWorkspace = async (): Promise<void> => {
    try {
        if (!workspace) {
          throw new Error("Workspace not found");
        }
  
      setDeleteLoading(true);

      await workingTimeWorkspacesMiddleware.remove(workspace.id);

      setDeleteLoading(false);

      await router.push(`/dashboard/working-timer`);

      setDeleteLoading(false);
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to delete working time workspace");
      
      setDeleteLoading(false);
    }
  }

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  };

  const navStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "nowrap",
    gap: isMobile ? ".6rem" : "1rem"
  }

  useEffect(() => {
    const id = router.query.workspaceId;
    
    if (id) onWokspaceLoad(Number(id));
    else setWorkspace(null);
  }, [router.query]);

  return {
      // * actions
      onBackToWorkpaces,
      onEditWorkspace,
      onDeleteWorkspace,

      // * states
      backLoading,
      workspaceLoading,
      workspace,
      
      // * styles
      headerStyle,
      navStyle,
  }
}