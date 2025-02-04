import { WorkspaceEntity } from "@/entities/WorkspaceEntity";
import { CSSProperties, useEffect, useState } from "react";
import * as workingTimeWorkspacesMiddleware from "@/middlewheres/working-timer/working-timer-workspace";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useScreen } from "@/hooks/useScreen";

export type TPageDashboardWorkingTimeWorkspaceEditProps = Readonly<{}>;

interface FormWorkingTimeWorkspaceEntity {
  name: string;
  priceByHour: number;
}

export function usePageDashboardWorkingTimeWorkspaceEdit(props: TPageDashboardWorkingTimeWorkspaceEditProps) {
  const [workspace, setWorkspace] = useState<WorkspaceEntity | null>(null);
  
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const [backLoading, setBackLoading] = useState<boolean>(false);

  const [workspaceLoading, setWorkspaceLoading] = useState<boolean>(false);

  const router = useRouter();

  const { isMobile } = useScreen();

  const form = useForm<FormWorkingTimeWorkspaceEntity>({
    defaultValues: {
      name: "",
      priceByHour: 0,
    },
  });
  
  const { register, handleSubmit, control } = form;

  const onWokspaceLoad = async (id: number): Promise<void> => {
    try {
      setWorkspaceLoading(true);

      const workspace = await workingTimeWorkspacesMiddleware.retrievesOne(id);

      setWorkspace(workspace);

      resetForm(workspace);

      setWorkspaceLoading(false);
    } catch (error: any) {
      console.error(error);
    
      alert(error.message || "Unable to load working time workspace");

      setWorkspaceLoading(false);
    }
  }

  const resetForm = (workspace?: WorkspaceEntity): void => {
    form.reset({
      name: workspace?.name ?? "",
      priceByHour: workspace?.priceByHour ?? 0,
    });
  } 

  const onBackToWorkpaces = async (): Promise<void> => {
    setBackLoading(true);

    resetForm();

    await router.push("/dashboard/working-timer");

    setBackLoading(false);
  }

  const onSubmit = async (): Promise<void> => {
    try {
      setSubmitLoading(true);

      if (!workspace) {
        throw new Error("Workspace not found");
      }

      const data = {
        ...form.getValues(),
        id: workspace.id,
      }
      
      await workingTimeWorkspacesMiddleware.update(data);

      setSubmitLoading(false);
      
      await router.push(`/dashboard/working-timer/${workspace.id}`);
      
      resetForm();

      setSubmitLoading(false);
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to create working time workspace");

      setSubmitLoading(false);
    }
  }

  const dialogActionsStyle: CSSProperties = {
    gap: ".6rem",
    padding: "1rem",
  }

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  };

  const containerStyle: CSSProperties = {
    maxWidth: "800px",
    margin: "0 auto",
  }

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
      onSubmit,

      // * states
      backLoading,
      workspaceLoading,
      submitLoading,
      workspace,

      // * form
      form,
      register,
      handleSubmit,
      control,
      
      // * styles
      headerStyle,
      dialogActionsStyle,
      containerStyle,
      navStyle,
  }
}