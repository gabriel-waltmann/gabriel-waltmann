import { FormProjectActionsEntity } from "@/entities/components/form/project/FormProjectActionsEntity";
import { FormProjectStatesEntity } from "@/entities/components/form/project/FormProjectStatesEntity";
import { FormProjectTabEnum } from "@/entities/components/form/project/FormProjectTabEnum";
import { CSSProperties, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type TFormProjectProps = Readonly<{
  actions: FormProjectActionsEntity,
  states: FormProjectStatesEntity
}>;

export function useFormProject(props: TFormProjectProps) {
  const form = useForm<FormProjectStatesEntity["project"]>({
    defaultValues: {
      id: null,
      title: "",
      description: "",
    },
  });

  const setForm = (project: FormProjectStatesEntity["project"]) => {
    form.reset(project);
  }

  const handleChangeTab = async (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue as FormProjectTabEnum);
    
    if (newValue === FormProjectTabEnum.Files) {
      return await actions.onLoadProjectFiles();
    }

    if (newValue === FormProjectTabEnum.Techs) {
      return await actions.onLoadProjectTechs();
    }
  };

  function a11yProps(index: FormProjectTabEnum) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const techAlreadyExists = (techId: string) => states.projectTechs.some(({ tech }) => tech.id === techId);

  const { register, handleSubmit, control } = form;

  const { errors } = form.formState;

  const [tab, setTab] = useState<FormProjectTabEnum>(FormProjectTabEnum.General);

  const [states, setStates] = useState<FormProjectStatesEntity>(props.states);

  const [actions, setActions] = useState<FormProjectActionsEntity>(props.actions);

  useEffect(() => {
    actions.onLoadTechs();

    setStates(props.states);

    setActions(props.actions);

    setForm(props.states.project);
  }, []);

  useEffect(() => {
    setStates(props.states);

    setActions(props.actions);

    setForm(props.states.project);
  }, [props.actions, props.states]);

  const dialogActionsStyle: CSSProperties = {
    gap: ".6rem",
    backgroundColor: "#fff",
    padding: "1rem",
  }

  const divStyle: CSSProperties = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }

  return {
    form,
    register,
    control,
    errors,
    handleSubmit,
    tab,
    handleChangeTab,
    a11yProps,
    techAlreadyExists,
    dialogActionsStyle,
    divStyle,
    states,
    actions,
  }
}