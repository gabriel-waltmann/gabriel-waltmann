import { TechEntity } from "@/entities/TechEntity";
import { useScreen } from "@/hooks/useScreen";
import { CSSProperties, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormTechActionsEntity } from "@/entities/components/form/tech/FormTechActionsEntity";
import { FormTechStatesEntity } from "@/entities/components/form/tech/FormTechStatesEntity";
import { TechController } from "@/controller/tech/TechController";

export type TPageDashboardTechProps = Readonly<{}>

export function usePageDashboardTech(props: TPageDashboardTechProps) {
  const { isMobile } = useScreen();

  const [techDialog, setTechDialog] = useState<boolean>(false);

  const form = useForm<FormTechStatesEntity["tech"]>({
    defaultValues: {
      id: null,
      name: "",
      link: "",
      linkName: "",
      fileUrl: null,
    },
  });

  const { register, handleSubmit, control } = form;

  const { errors } = form.formState;

  const [formTechStates, setFormTechStates] = useState<FormTechStatesEntity>({
    tech: {
      id: null,
      name: "",
      link: "",
      linkName: "",
      fileUrl: null,
    },
  
    techSubmitLoading: false,
  
    techDeleteLoading: false,
  
    loadProjectFilesLoading: false,
  
    createProjectFileLoading: false,
  
    deleteProjectFileLoading: false,
    
    createProjectTechLoading: false,
    
    deleteProjectTechLoading: false,
  });

  const [techs, setTechs] = useState<TechEntity[]>([]);

  const [techsLoading, setTechsLoading] = useState<boolean>(false);

  const techController = new TechController();

  const onTechLoad = async () => {
    try {
      setTechsLoading(true);

      const techs = await techController.retrieves();
      
      setTechs(techs);

      setTechsLoading(false);
    } catch (error: any) {
      console.error(error);

      alert("Unable to load techs");

      setTechs([]);
      
      setTechsLoading(false);
    }
  };

  const onTechSubmitUpdate = async (data: FormTechStatesEntity["tech"]): Promise<TechEntity> => {
    if (!data.fileUrl) {
      throw new Error("File is required");
    }

    if (!data.id) {
      throw new Error("Tech not found");
    }

    return await techController.update({
      ...data,
      id: data.id,
      file: data.fileUrl,
    })
  };

  const onTechSubmitCreate = async (data: FormTechStatesEntity["tech"]): Promise<TechEntity> => {
    if (!data.fileUrl) {
      throw new Error("File is required");
    }

    return await techController.create({
      ...data,
      file: data.fileUrl,
    });
  };

  const onTechSubmit = async (data: FormTechStatesEntity["tech"]): Promise<void> => {
    try {
      setFormTechStates({
        ...formTechStates,
        techSubmitLoading: true,
      });

      const tech = data.id ? await onTechSubmitUpdate(data) : await onTechSubmitCreate(data);

      const newTechs = [...techs].filter(({ id }) => id !== data.id);

      newTechs.unshift(tech);

      setTechs(newTechs);

      setFormTechStates({
        ...formTechStates,
        techSubmitLoading: false,
      });

      setTechDialog(false);
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to save tech");

      setFormTechStates({
        ...formTechStates,
        techSubmitLoading: false,
      });
    }
  };

  const resetTechForm = (tech?: TechEntity) => {
    form.reset({
      id: tech?.id ?? null,
      name: tech?.name ?? "",
      link: tech?.link.key ?? "",
      linkName: tech?.link.name ?? "",
      fileUrl: tech?.file ? tech.file.key : null,
    });
  };

  const showCreateTechForm = () => {
    resetTechForm();
    
    setTechDialog(true);
  };

  const showUpdateTechForm = (tech: TechEntity) => {
    resetTechForm(tech);
    
    setTechDialog(true);
  };

  const hideTechForm = () => {
    setTechDialog(false);
  };

  const onTechDelete = async () => {
    try {
      const id = form.watch("id");
  
      if (!id?.length) {
        throw new Error("Tech not found");
      }
  
      setFormTechStates({
        ...formTechStates,
        techDeleteLoading: true,
      });
  
      await techController.remove(id);
  
      const newTechs = techs.filter((tech) => tech.id !== id);

      setTechs(newTechs);
  
      setFormTechStates({
        ...formTechStates,
        techDeleteLoading: false,
      });

      setTechDialog(false);
    } catch (error: any) {
      console.error(error);
  
      alert(error.message || "Unable to delete tech");
  
      setFormTechStates({
        ...formTechStates,
        techDeleteLoading: false,
      });
    }
  };

  const onTechLinkUpdate = () => {
    const linkName = form
      .watch("link")
      .replaceAll("http://", "")
      .replaceAll("https://", "")
      .replaceAll("www.", "")
      .split("/")[0];
    form.setValue("linkName", linkName);
  };

  const tableStyle: CSSProperties = {
    marginTop: "1rem",
    marginBottom: "1rem",
  };

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  };

  const dialogStyle: CSSProperties = {
    width: isMobile ? "100%" : "600px",
    height: isMobile ? "100%" : "600px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  }

  const dialogActionsStyle: CSSProperties = {
    gap: ".6rem",
    backgroundColor: "#fff",
    padding: "1rem",
  }

  const formTechActions: FormTechActionsEntity = {
    showCreateTechForm,

    showUpdateTechForm,

    hideTechForm,

    onTechSubmit,
        
    onTechDelete,
  }

  useEffect(() => {
    onTechLoad();
  }, []);

  useEffect(() => {
    onTechLinkUpdate()
  }, [form.watch("link")]);

  return {
    tableStyle,
    headerStyle,
    dialogStyle,
    dialogActionsStyle,
    techDialog,
    fullScreen: isMobile,
    techs,
    control,
    register,
    form,
    handleSubmit,
    formTechStates,
    formTechActions,
    errors,
  }
}