import { useRouter } from "next/router";
import { CSSProperties, useState } from "react";
import { useForm } from "react-hook-form";

import * as workingTimeWorkspacesMiddleware from "@/middlewheres/working-timer/working-timer-workspace";

interface FormWorkingTimeWorkspaceEntity {
  name: string;
  priceByHour: number;
}

export type TPageDashboardWorkingTimerWorkspaceNew = Readonly<{

}>

export function usePageDashboardWorkingTimerWorkspaceNew(props: TPageDashboardWorkingTimerWorkspaceNew) {
  const [backLoading, setBackLoading] = useState<boolean>(false);

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<FormWorkingTimeWorkspaceEntity>({
    defaultValues: {
      name: "",
      priceByHour: 0,
    },
  });
  
  const { register, handleSubmit, control } = form;

  const resetForm = (): void => {
    form.reset({
      name: "",
      priceByHour: 0,
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
      
      const workspace = await workingTimeWorkspacesMiddleware.create(form.getValues());

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

  return {
    // * actions
    onBackToWorkpaces,
    onSubmit,

    // * states
    backLoading,
    submitLoading,

    // * form
    form,
    register,
    handleSubmit,
    control,

    // * styles
    headerStyle,
    dialogActionsStyle,
    containerStyle,
  }
}