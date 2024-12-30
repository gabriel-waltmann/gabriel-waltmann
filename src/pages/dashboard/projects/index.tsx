import PrimaryButton from "@/components/buttons/primary-button"
import DashboardProjectCard from "@/components/dashboard/dashboard-project"
import TypographyTitle from "@/components/typography/title"
import { ProjectEntity } from "@/entities/project/ProjectEntity"
import { ProjectFileEntity } from "@/entities/project/ProjectFiles"
import { ProjectTechEntity } from "@/entities/project/ProjectTechEntity"
import { TechEntity } from "@/entities/TechEntity"
import { DevTool } from "@hookform/devtools"
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, IconButton, ImageList, ImageListItem, ImageListItemBar, Tab, Tabs, TextField, Typography } from "@mui/material"
import { Plus, Trash, X } from "@phosphor-icons/react"
import { CSSProperties, useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

const headerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
}
type TFormFields = {
  id: string | null;
  title: string,
  description: string,
}
enum TabsEnum {
  General = 0,
  Files = 1,
  Techs = 2,
}
function a11yProps(index: TabsEnum) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}  

export default function Projects() {
  const [activeDialog, setActiveDialog] = useState<boolean>(false);

  const form = useForm<TFormFields>({
    defaultValues: {
      id: null,
      title: "",
      description: "",
    }
  });

  const { register, handleSubmit, control } = form;
  const { errors, } = form.formState;
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectEntity[]>([]);
  const [techs, setTechs] = useState<TechEntity[]>([]);
  const [projectFiles, setProjectFiles] = useState<ProjectFileEntity[]>([]);
  const [projectTechs, setProjectTechs] = useState<ProjectTechEntity[]>([]);
  const [tab, setTab] = useState<TabsEnum>(TabsEnum.General);
  
  const handleProjects = async () => {
    const response = await fetch('/api/project');
    const result: ProjectEntity[] = await response.json();

    setProjects(result);
  }

  const handleTechs = async () => {
    const response = await fetch('/api/tech');
    const result: TechEntity[] = await response.json();

    setTechs(result);
  }

  useEffect(() => {
    handleProjects();
  }, [])

  const onSubmit = async (data: TFormFields): Promise<void> => {
    setSaveLoading(true);    

    if (data.id) {
      const response = await fetch(`/api/project/${data.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: data.title,
          description: data.description
        }),
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
      });

      if (response.status !== 200) {
        setSaveLoading(false);
        return alert("Erro ao cadastrar tech");
      }

      const result: ProjectEntity = await response.json();

      const newTechs = [...projects].filter(({ id }) => id !== data.id);

      newTechs.unshift(result)

      setProjects(newTechs);

      setSaveLoading(false);
      setActiveDialog(false);

      return;
    }

    const response = await fetch('/api/project', {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        description: data.description
      }),
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
    });

    if (response.status !== 200) {
      setSaveLoading(false);
      return alert("Erro ao cadastrar tech");
    }

    const result: ProjectEntity = await response.json();

    const newTechs = projects;
    newTechs.unshift(result);

    setProjects(newTechs);

    setSaveLoading(false);
    setActiveDialog(false);
  }

  const onCreateProject = () => {
    form.reset({
      id: null,
      title: "",
      description: "",
    });

    setActiveDialog(true);
  }

  const onEditProject = async (project: ProjectEntity) => {
    form.reset({
      id: project.id,
      title: project.title,
      description: project.description
    });

    setActiveDialog(true);
  }

  const onDeleteProject = async () => {
    const id = form.watch("id");

    if (!id?.length) return;

    setDeleteLoading(true);

    const response = await fetch(`/api/project/${id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      setDeleteLoading(false);
      return alert("Erro ao cadastrar tech");
    }  

    const newTechs = projects.filter((tech) => tech.id !== id);
    setProjects(newTechs);

    setDeleteLoading(false);
    setActiveDialog(false)
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue as TabsEnum);
  };

  const handleProjectFiles = async (projectId: string) => {
    const response = await fetch(`/api/project/${projectId}/file`);

    const result: ProjectFileEntity[] = await response.json();

    setProjectFiles(result);
  }

  const handleProjectTechs = async (projectId: string) => {
    const response = await fetch(`/api/project/${projectId}/tech`);

    const result: ProjectTechEntity[] = await response.json();

    setProjectTechs(result);
  }

  useEffect(() => {
    const projectId = form.watch("id");
    
    if (activeDialog && tab === TabsEnum.Files && projectId) {
      handleProjectFiles(projectId);
    }
    
    else if (activeDialog && tab === TabsEnum.Techs && projectId) {
      handleTechs();
      handleProjectTechs(projectId);
    }

    else {
      setProjectFiles([]);
      setProjectTechs([]);
      setTechs([]);
    }
  }, [tab])

  const handleDeleteProjectFile = async (projectFile: ProjectFileEntity) => {
    const response = await fetch(`/api/project/${projectFile.project.id}/file/${projectFile.id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      return alert("Erro ao deletar file");
    }

    const newProjectFiles = projectFiles.filter(({ id }) => id !== projectFile.id);
    setProjectFiles(newProjectFiles);
  }

  const handleDeleteProjectTech = async (projectTech: ProjectTechEntity) => {
    const response = await fetch(`/api/project/${projectTech.project.id}/tech/${projectTech.id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      return alert("Erro ao deletar tech");
    }

    const newProjectTechs = projectTechs.filter(({ id }) => id !== projectTech.id);
    setProjectTechs(newProjectTechs);
  }

  const handleAddProjectTech = async (tech: TechEntity) => {
    const projectId = form.watch("id");

    if (!projectId?.length) {
      return alert("Erro ao incluir tech");
    }

    const formData = new FormData();
    formData.append("techId", tech.id);

    const response = await fetch(`/api/project/${projectId}/tech`, {
      method: "POST",
      body: formData,
    });

    if (response.status !== 200) {
      return alert("Erro ao incluir tech");
    }

    const result: ProjectTechEntity = await response.json();

    const newProjectTechs = [...projectTechs];
    newProjectTechs.unshift(result);
    
    setProjectTechs(newProjectTechs);
  }

  const techAlreadyExists = (tech: TechEntity) => {
    return projectTechs.some((projectTech) => projectTech.tech.id === tech.id);
  }

  return (
    <>
      <div style={headerStyle}>
        <TypographyTitle value="PROJECTS" />

        <PrimaryButton value="+ PROJECT" onClick={onCreateProject}  />
      </div>

      <ul style={{ 
        gap: "1rem", 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)",
        alignItems: "center",
        maxWidth: "80%",
        margin: "1rem auto"
      }}>
        {projects.map(project =>
        <li key={project.id+"project"}>
          <DashboardProjectCard
            project={project} 
            onClick={() => onEditProject(project)}
          />
        </li>
        )}
      </ul>

      <Dialog
        open={activeDialog}
        onClose={() => setActiveDialog(false)}
        onSubmit={handleSubmit((data) => onSubmit(data))}
        PaperProps={{ component: 'form' }} 
        
      >
        <IconButton
          aria-label="close"
          onClick={() => setActiveDialog(false)}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
            cursor: 'pointer'
          })}
        >
          <X />
        </IconButton>
        <DialogContent sx={{ width: "600px", height: "600px", display: "flex", flexDirection: "column" }}>
          <Tabs value={tab} onChange={handleChangeTab} aria-label="Project tabs">
            <Tab label="General" {...a11yProps(TabsEnum.General)} />
            <Tab label="Files" {...a11yProps(TabsEnum.Files)} />
            <Tab label="Techs" {...a11yProps(TabsEnum.Techs)} />
          </Tabs>

          <Box sx={{marginTop: "1rem", height: "100%", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {tab === TabsEnum.General && <>
              <div style={{ flex: 1}}>
                <Controller
                  control={control}
                  name="title"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="title"
                      label="Title"
                      type="text"
                      fullWidth
                      variant="outlined"
                      {...register("title", {
                        validate: value => value.length >= 3 || "Campo obrigatório",
                        onChange: () => form.trigger("title")
                      })}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="description"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      minRows={6}
                      multiline
                      size="medium"
                      autoFocus
                      required
                      margin="dense"
                      id="description"
                      label="Description"
                      type="text"
                      fullWidth
                      variant="outlined"
                      {...register("description", {
                        validate: value => {
                          if (value.length < 20) return "Campo requer mínimo de 20 caracteres";
                          return true;
                        },
                        onChange: () => form.trigger("description")
                      })}
                      value={value}
                      onChange={onChange}
                      error={!!errors.description}
                      helperText={errors.description?.message}
                    />
                  )}
                />
              </div>

              <DialogActions style={{ gap: ".6rem" }}>
                {form.watch("id") && <Button onClick={() => onDeleteProject()} variant="contained">
                  {deleteLoading ? "DELETANDO..."  : "DELETAR"}
                </Button>}

                <Button variant="contained" type="submit">
                  {saveLoading ? "CARREGANDO..." : form.watch("id")?.length ? "ALTERAR" : "CADASTRAR"}
                </Button>
              </DialogActions>
            </>}

            {tab === TabsEnum.Files && <div>
              <ImageList gap={16} cols={1} sx={{ marginTop: "1rem", marginBottom: "1rem", width: "100%", paddingRight: "1rem", paddingLeft: "1rem" }}>
                {projectFiles.map(projectFile => (
                  <ImageListItem key={projectFile.id+"projectFile"}>
                    <img
                      src={projectFile.file.key}
                      alt={projectFile.file.name}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={projectFile.file.name}
                      actionIcon={
                        <IconButton
                          onClick={() => handleDeleteProjectFile(projectFile)}
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${projectFile.file.name}`}
                        >
                          <Trash size={24} /> 
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}

                <ImageListItem>
                  <Button variant="contained" component="label" sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                    <span>ADICIONAR ARQUIVOS</span>

                    <input
  
                      onChange={async (e) => {
                        const file = e.target.files?.length ? e.target.files[0] : null;
                        
                        const projectId = form.watch("id");

                        if (!file || !projectId) return;

                        const fileBlob = new Blob([file], { type: file.type });

                        if (!fileBlob) return;

                        const formData = new FormData();
                        formData.append("file", fileBlob, file.name);

                        try {
                          const response = await fetch(`/api/project/${projectId}/file`, {
                            method: "POST",
                            body: formData
                          });
      
                          if (response.status !== 200) {
                            return alert("Erro ao cadastrar file");
                          }
      
                          const result: ProjectFileEntity = await response.json();
      
                          setProjectFiles([...projectFiles, result]);
                        } catch (error) {
                          console.error(error);

                          e.target.value = "";
                        }
                      }}
                      
                      type="file"
                      hidden
                    />
                  </Button>
                </ImageListItem>
              </ImageList>
              </div>}

            {tab === TabsEnum.Techs && <>
              <section>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: 'text.secondary' }}>
                  Techs do projeto
                </Typography>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
                  {projectTechs.map(projectTech => (
                    <li key={projectTech.id+"projectTech"}>
                      <Chip
                        label={projectTech.tech.name}
                        variant="outlined"
                        deleteIcon={<Trash size={16} />}
                        onDelete={() => handleDeleteProjectTech(projectTech)}
                      />
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: 'text.secondary' }}>
                  Techs disponiveis
                </Typography>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
                  {techs.filter(tech => !techAlreadyExists(tech)).map(tech =>
                    <li key={tech.id+"tech"}>
                      <Chip
                        label={tech.name}
                        variant="outlined"
                        deleteIcon={<Plus size={16} />}
                        onDelete={() => handleAddProjectTech(tech)}
                      />
                    </li>
                  )}
                </ul>
              </section>
            </>}
          </Box>
        </DialogContent>
        <DevTool control={control} />
      </Dialog>
    </>
  )
}