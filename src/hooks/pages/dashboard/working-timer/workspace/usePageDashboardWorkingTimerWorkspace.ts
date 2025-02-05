import { WorkspaceEntity } from "@/entities/working-timer/WorkspaceEntity";
import { CSSProperties, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useScreen } from "@/hooks/useScreen";
import { TimerEntity } from "@/entities/working-timer/TimerEntity";

import * as workingTimeWorkspacesMiddleware from "@/middlewheres/working-timer/working-timer-workspace";
import * as workingTimeWorkspaceTimerMiddleware from "@/middlewheres/working-timer/working-timer-workspace-timer";

export type TPageDashboardWorkingTimeWorkspaceProps = Readonly<{}>;

export function usePageDashboardWorkingTimeWorkspace(props: TPageDashboardWorkingTimeWorkspaceProps) {
  const [workspace, setWorkspace] = useState<WorkspaceEntity | null>(null);

  const [timers, setTimers] = useState<TimerEntity[]>([]);
  
  const [backLoading, setBackLoading] = useState<boolean>(false);

  const [editLoading, setEditLoading] = useState<boolean>(false);

  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  const [workspaceLoading, setWorkspaceLoading] = useState<boolean>(false);

  const [timersLoading, setTimersLoading] = useState<boolean>(false);

  const [newTimerPageLoading, setNewTimerPageLoading] = useState<boolean>(false);

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

  const onTimersLoad = async (workspaceId: number): Promise<void> => {
    try {
      setTimersLoading(true);

      let timers = await workingTimeWorkspaceTimerMiddleware.retrieves({ workspaceId });

      setTimers(timers);

      setTimersLoading(false);
    } catch (error: any) {
      console.error(error);

      setTimersLoading(false);
    }      
  }

  const onBackToWorkpaces = async (): Promise<void> => {
    setBackLoading(true);

    await router.push(`/dashboard/working-timer`);

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

  const onTimerClick = async (timer: TimerEntity) => {
    const isRunningTimer = !timer.end_time;

    try {      
      if (!workspace) {
        throw new Error("Workspace not found");
      }

      if (isRunningTimer) {
        const start = new Date(timer.start_time);
        const startDate = `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`;
        const startTime = `${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`;

        const end = new Date();
        const endDate = `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`;
        const endTime = `${end.getHours()}:${end.getMinutes()}:${end.getSeconds()}`;

        const newTimer = await workingTimeWorkspaceTimerMiddleware.update({
          id: timer.id,
          start: `${startDate} ${startTime}`,
          end: `${endDate} ${endTime}`,
          workspaceId: workspace.id
        });

        const newTimers = timers.filter((t) => t.id !== timer.id);

        newTimers.push(newTimer);

        setTimers(newTimers);

        return;
      } 
      
      await workingTimeWorkspaceTimerMiddleware.remove(timer.id);

      const newTimers = timers.filter((t) => t.id !== timer.id);

      setTimers(newTimers);
    } catch (error: any) {
      console.error(error);

      setDeleteLoading(false);

      if (error.message) {
        return alert(error.message);
      }

      if (isRunningTimer) {
        return alert("Unable to stop timer");
      }

      alert("Unable to start timer");
    }
  }

  const onGoToNewTimerPage = async (): Promise<void> => {
    if (!workspace) {
      return alert("Workspace not found");
    }

    setNewTimerPageLoading(true);

    await router.push(`/dashboard/working-timer/${workspace.id}/new`);

    setNewTimerPageLoading(false);
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

  const tableStyle: CSSProperties = {
    marginTop: "1rem",
    marginBottom: "1rem",
  };

  useEffect(() => {
    const id = router.query.workspaceId;
    
    if (id) {
      onWokspaceLoad(Number(id));

      onTimersLoad(Number(id));
    } else {
      setWorkspace(null);

      setTimers([]);
    }
  }, [router.query]);

  return {
      // * actions
      onBackToWorkpaces,
      onEditWorkspace,
      onDeleteWorkspace,
      onTimerClick,
      onGoToNewTimerPage,

      // * states
      backLoading,
      workspaceLoading,
      workspace,
      editLoading,
      deleteLoading,
      timersLoading,
      timers,
      newTimerPageLoading,
      
      // * styles
      headerStyle,
      navStyle,
      tableStyle,
  }
}