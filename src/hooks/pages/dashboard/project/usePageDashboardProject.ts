import { ChangeEvent, CSSProperties, useEffect, useState } from "react";
import { useScreen } from "@/hooks/useScreen";
import { ProjectEntity } from "@/entities/project/ProjectEntity";
import * as techMiddleware from "@/middlewheres/tech/tech";
import * as projectMiddleware from "@/middlewheres/project/project";
import * as projectFileMiddleware from "@/middlewheres/project/project-file";
import * as projectTechMiddleware from "@/middlewheres/project/project-tech";
import { FormProjectStatesEntity } from "@/entities/components/form/project/FormProjectStatesEntity";
import { FormProjectActionsEntity } from "@/entities/components/form/project/FormProjectActionsEntity";

export type TPageDashboardProjectProps = Readonly<{}>;

const headerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
};

export function usePageDashboardProject(props: TPageDashboardProjectProps) {
  const { isMobile } = useScreen();

  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  const [projectsLoading, setProjectsLoading] = useState<boolean>(false);

  const [projectDialog, setProjectDialog] = useState<boolean>(false);

  const [formProjectFormStates, setFormProjectFormStates] = useState<FormProjectStatesEntity>({
    project: {
      id: null,
      title: "",
      description: "",
    },
    techs: [],
    projectTechs: [],
    projectFiles: [],

    projectSubmitLoading: false,
    
    projectDeleteLoading: false,

    loadProjectFilesLoading: false,

    createProjectFileLoading: false,

    deleteProjectFileLoading: false,

    loadProjectTechsLoading: false,

    createProjectTechLoading: false,

    deleteProjectTechLoading: false,
  })

  const [liStyle, setLiStyle] = useState<CSSProperties>({ width: isMobile ? "100%" : "20%" })

  const ulStyle: CSSProperties = {
    gap: "1rem",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem",
  }

  const dialogStyle: CSSProperties = {
    width: isMobile ? "100%" : "600px",
    height: isMobile ? "100%" : "600px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  }

  const resetProjectForm = (project?: ProjectEntity) => {
    setFormProjectFormStates({
      ...formProjectFormStates,
      project: {
        id: project?.id ?? null,
        title: project?.title ?? "", 
        description: project?.description ?? "",
      } 
    });
  };

  const showCreateProjectForm = () => {
    setProjectDialog(true);
    
    resetProjectForm();
  };

  const showUpdateProjectForm = (project: ProjectEntity) => {
    setProjectDialog(true);
    
    resetProjectForm(project);
  };

  const hideProjectForm = () => {    
    setProjectDialog(false);
  }

  const onLoadProjects = async () => {
    try {
      setProjectsLoading(true);

      setProjects(await projectMiddleware.retrieves());

      setProjectsLoading(false);
    } catch (error: any) {
      console.error(error);

      alert("Unable to load projects");

      setProjectsLoading(false);
    }
  };

  const onProjectSubmitCreate = async (data: FormProjectStatesEntity["project"]): Promise<ProjectEntity> => {
    return await projectMiddleware.create({
      title: data.title,
      description: data.description,
    });
  };

  const onProjectSubmitUpdate = async (data: FormProjectStatesEntity["project"]): Promise<ProjectEntity> => {
    if (!data.id) throw new Error("Unable to find project");
    
    return await projectMiddleware.update({
      id: data.id,
      title: data.title,
      description: data.description,
    });
  };

  const onProjectSubmit = async (data: FormProjectStatesEntity["project"]): Promise<void> => {
    try {
      setFormProjectFormStates({
        ...formProjectFormStates,
        projectSubmitLoading: true,
      })
        
      const project = data.id ? await onProjectSubmitUpdate(data) : await onProjectSubmitCreate(data);
  
      setFormProjectFormStates({
        ...formProjectFormStates,
        projectSubmitLoading: false,
      })
  
      const newTechs = [...projects].filter(({ id }) => id !== data.id);
  
      newTechs.unshift(project);

      setProjects(newTechs);

      setProjectDialog(false);

      resetProjectForm();
    } catch (error: any) {
      console.error(error);
    
      alert(error.message || "Unable to submit project");

      setFormProjectFormStates({
        ...formProjectFormStates,
        projectSubmitLoading: false,
      })
    }
  }

  const onProjectDelete = async () => {
    try {
      if (!formProjectFormStates.project.id?.length) {
        throw new Error("Projeto não encontrado");
      }

      setFormProjectFormStates({
        ...formProjectFormStates,
        projectDeleteLoading: true,
      });

      await projectMiddleware.remove(formProjectFormStates.project.id);

      const newTechs = projects.filter((tech) => tech.id !== formProjectFormStates.project.id);
      
      setProjects(newTechs);

      setFormProjectFormStates({
        ...formProjectFormStates,
        projectDeleteLoading: false,
      });

      setProjectDialog(false);
    } catch (error: any) {
      console.error(error);

      alert("Unable to delete project");

      setFormProjectFormStates({
        ...formProjectFormStates,
        projectDeleteLoading: false,
      });
    }
  };

  const onLoadProjectFiles = async () => {
    try {
      if (!formProjectFormStates.project.id?.length) {
        throw new Error("Projeto não encontrado");
      }

      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectFilesLoading: true,
      });
    
      const projectFiles = await projectFileMiddleware.retrieves(formProjectFormStates.project.id);

      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectFilesLoading: false,
        projectFiles: projectFiles,
      });
    } catch (error: any) {
      console.error(error);
      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectFilesLoading: false,
        projectFiles: [],
      });
    }
  };

  const onCreateProjectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!formProjectFormStates.project.id?.length) {
        throw new Error("Project not found");
      }

      setFormProjectFormStates({
        ...formProjectFormStates,
        createProjectFileLoading: true,
      });

      const file = e.target.files?.length
        ? e.target.files[0]
        : null;

      if (!file) {
        throw new Error("File not found");
      }

      const projectFile = await projectFileMiddleware.create({
        projectId: formProjectFormStates.project.id,
        file,
      });

      const files = [...formProjectFormStates.projectFiles, projectFile];

      setFormProjectFormStates({
        ...formProjectFormStates,
        createProjectFileLoading: false,
        projectFiles: files,
      })
    } catch (error: any) {
      console.error(error);

      e.target.value = "";

      setFormProjectFormStates({
        ...formProjectFormStates,
        createProjectFileLoading: false,
      })

      alert(error.message || "Unable to create project file");
    }
  }

  const onDeleteProjectFile = async (id: string) => {
    try {
      if (!formProjectFormStates.project.id?.length) {
        throw new Error("Project not found");
      }

      setFormProjectFormStates({
        ...formProjectFormStates,
        deleteProjectFileLoading: true,
      });

      await projectFileMiddleware.remove({
        id,
        projectId: formProjectFormStates.project.id,
      });

      const files = formProjectFormStates.projectFiles.filter((projectFile) => projectFile.id !== id);

      setFormProjectFormStates({
        ...formProjectFormStates,
        projectFiles: files,
      })
    } catch (error: any) {
      console.error(error);

      setFormProjectFormStates({
        ...formProjectFormStates,
        deleteProjectFileLoading: false,
      })

      alert(error.message || "Unable to delete project file");
    }
  };

  const onLoadTechs = async () => {
    try {
      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectTechsLoading: true,  
      });

      const techs = await techMiddleware.retrieves();
  
      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectTechsLoading: false,
        techs,
      });
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to loading techs");

      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectTechsLoading: false,
        techs: [],
      });
    }
  };

  const onLoadProjectTechs = async () => {
    try {
      if (!formProjectFormStates.project.id?.length) {
        throw new Error("Project not found");
      }

      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectTechsLoading: true,
      });
    
      const projectTechs = await projectTechMiddleware.retrieves(formProjectFormStates.project.id);
      
      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectTechsLoading: false,
        projectTechs,
      });
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to loading project techs");

      setFormProjectFormStates({
        ...formProjectFormStates,
        loadProjectTechsLoading: false,
        projectTechs: [],
      });
    }
  };

  const onCreateProjectTech = async (techId: string) => {
    try {
      if (!formProjectFormStates.project.id?.length) {
        throw new Error("Project not found");
      }

      setFormProjectFormStates({
        ...formProjectFormStates,
        createProjectTechLoading: true,
      });
  
      const projectTech = await projectTechMiddleware.create({
        techId,
        projectId: formProjectFormStates.project.id,
      })
    
      const projectTechs = [projectTech, ...formProjectFormStates.projectTechs];
      
      setFormProjectFormStates({
        ...formProjectFormStates,
        createProjectTechLoading: false,
        projectTechs,
      })
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to create project tech");

      setFormProjectFormStates({
        ...formProjectFormStates,
        createProjectTechLoading: false,
      })
    }
  };

  const onDeleteProjectTech = async (id: string) => {
    try { 
      if (!formProjectFormStates.project.id?.length) {
        throw new Error("Project not found");
      }

      setFormProjectFormStates({
        ...formProjectFormStates,
        deleteProjectTechLoading: true,
      });

      await projectTechMiddleware.remove({
        id,
        projectId: formProjectFormStates.project.id,
      });

      const newProjectTechs = formProjectFormStates.projectTechs.filter((projectTech) => id !== projectTech.id);

      setFormProjectFormStates({
        ...formProjectFormStates,
        deleteProjectTechLoading: false,
        projectTechs: newProjectTechs,
      })
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Unable to delete project tech");

      setFormProjectFormStates({
        ...formProjectFormStates,
        deleteProjectTechLoading: false,
      })
    }
  };

  const formProjectFormActions: FormProjectActionsEntity = {
    showCreateProjectForm,

    showUpdateProjectForm,

    onProjectSubmit,
    
    hideProjectForm,
    
    onProjectDelete,

    onLoadProjectFiles,

    onCreateProjectFile,

    onDeleteProjectFile,

    onLoadTechs,

    onLoadProjectTechs,

    onCreateProjectTech,

    onDeleteProjectTech,
  }
  
  useEffect(() => {
    onLoadProjects();
  }, []);

  useEffect(() => {
    setLiStyle({ width: isMobile ? "100%" : "300px" })
  }, [isMobile]);

  return {
    headerStyle,
    ulStyle,
    liStyle,
    dialogStyle,
    projects,
    projectsLoading,
    fullScreen: isMobile,
    formProjectFormStates,
    formProjectFormActions,
    projectDialog,
  }
}