import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useScreen } from "@/hooks/useScreen";

import * as workingTimeWorkspaceTimerMiddleware from "@/middlewheres/working-timer/working-timer-workspace-timer";
import * as dateFormat from "@/utils/date/date-format";
import * as timeFormat from "@/utils/time/time-fotmat";

export type TPageDashboardWorkingTimerWorkspaceTimerNewProps = Readonly<{}>;

interface FormWorkingTimeWorkspaceEntity {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export function usePageDashboardWorkingTimerWorkspaceTimerNew(props: TPageDashboardWorkingTimerWorkspaceTimerNewProps) {
  const [backLoading, setBackLoading] = useState<boolean>(false);

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const [instantLoading, setInstantLoading] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<FormWorkingTimeWorkspaceEntity>({
    defaultValues: {
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
  });

  const { isMobile } = useScreen();

  useEffect(() => {   
    const startDate = form.watch("startDate");
    
    form.setValue("startDate", dateFormat.BRInputToBR(startDate));
  }, [form.watch("startDate")]);

  useEffect(() => {   
    const endDate = form.watch("endDate");
    
    form.setValue("endDate", dateFormat.BRInputToBR(endDate));
  }, [form.watch("endDate")]);

  useEffect(() => {   
    const startTime = form.watch("startTime");
    
    form.setValue("startTime", timeFormat.BRInputToBR(startTime));
  }, [form.watch("startTime")]);

  useEffect(() => {   
    const endTime = form.watch("endTime");
    
    form.setValue("endTime", timeFormat.BRInputToBR(endTime));
  }, [form.watch("endTime")]);

  useEffect(() => {   
    const startDate = form.watch("startDate");
    
    form.setValue("startDate", dateFormat.BRInputToBR(startDate));
  }, [form.watch("startDate")]);

  const { register, handleSubmit, control } = form;

  const resetForm = (): void => {
    form.reset({
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    });
  } 

  const getWorkspaceId = (): number | null => {
    const { workspaceId } = router.query;

    return workspaceId && +workspaceId ? +workspaceId : null;
  }

  const onBackToWorkpace = async (): Promise<void> => {
    const workspaceId = getWorkspaceId();

    if (!workspaceId) {
      return alert("Workspace not found");
    }

    setBackLoading(true);

    resetForm();

    await router.push(`/dashboard/working-timer/${workspaceId}`);

    setBackLoading(false);
  }

  const onSubmit = async (): Promise<void> => {
    try {
      setSubmitLoading(true);

      const workspaceId = getWorkspaceId();

      if (!workspaceId) {
        throw new Error("Workspace not found");
      }

      const formData = form.getValues();
      
      const startDate = dateFormat.BRToISO(formData.startDate, formData.startTime+":00");

      const endDate = dateFormat.BRToISO(formData.endDate, formData.endTime+":00");

      await workingTimeWorkspaceTimerMiddleware.create({
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        workspaceId,
      });

      setSubmitLoading(false);
      
      await router.push(`/dashboard/working-timer/${workspaceId}`);
      
      resetForm();

      setSubmitLoading(false);
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to create working time workspace");

      setSubmitLoading(false);
    }
  }

  const onStartInstant = async (): Promise<void> => {
    try {
      setInstantLoading(true);

      const workspaceId = getWorkspaceId();

      if (!workspaceId) {
        throw new Error("Workspace not found");
      }

      const date = (new Date()).toISOString();
      const startDate = date.split("T")[0];
      const startTime = date.split("T")[1];
      
      await workingTimeWorkspaceTimerMiddleware.create({
        start: `${startDate} ${startTime}`,
        workspaceId,
      });

      setInstantLoading(false);
      
      await router.push(`/dashboard/working-timer/${workspaceId}`);
      
      resetForm();

      setInstantLoading(false);
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to create working time workspace");

      setSubmitLoading(false);
    }
  }

  const validateDate = (value: string): string | true => {
    const [day, month, year] = value.split("/");

    if (!value.length) {
      return "Campo obrigatório";
    }

    if (day?.length !== 2 || month?.length !== 2 || year?.length !== 4) {
      return "Data inválida";
    }

    const date = new Date(`${year}-${month}-${day}`);

    if (isNaN(date.getTime())) {
      return "Data inválida";
    }

    return true;
  }

  const validateTime = (value: string): string | true => {
    const [hour, minute] = value.split(":");

    if (!value.length) {
      return "Campo obrigatório";
    }

    if (hour?.length !== 2 || minute?.length !== 2) {
      return "Hora inválida";
    }

    if (+hour > 23 || +minute > 59) {
      return "Hora inválida";
    }

    return true;
  }

  const onChangeStartDate = async (): Promise<boolean> => await form.trigger("startDate");

  const onChangeEndDate = async (): Promise<boolean> => await form.trigger("endDate");

  const onChangeStartTime = async (): Promise<boolean> => await form.trigger("startTime");

  const onChangeEndTime = async (): Promise<boolean> => await form.trigger("endTime");
  
  const containerStyle: CSSProperties = {
    maxWidth: "800px",
  }
  
  const navStyle: CSSProperties = {
    gap: ".6rem",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "flex-end",
  }

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  };

  return {
    // * actions
    onBackToWorkpace,
    onSubmit,
    onChangeStartDate,
    onChangeEndDate,
    onChangeStartTime,
    onChangeEndTime,
    onStartInstant,

    // * states
    backLoading,
    submitLoading,
    instantLoading,

    // * form
    form,
    register,
    handleSubmit,
    control,
    validateDate,
    validateTime,

    // * styles
    headerStyle,
    navStyle,
    containerStyle,
  }
}