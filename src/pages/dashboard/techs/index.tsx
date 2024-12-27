import PrimaryButton from "@/components/buttons/primary-button"
import TypographyTitle from "@/components/typography/title"
import DashboardLayout from "@/layouts/dashboard"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, ImageList, List, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { CSSProperties, useEffect, useState } from "react"
import { DevTool } from "@hookform/devtools"
import { Trash } from "@phosphor-icons/react"
import { TechEntity } from "@/entities/TechEntity"
import DashboardTechCard from "@/components/dashboard/dashboard-tech/dashboard-tech-card"

const headerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
}
type TFormFields = {
  id: string | null;
  name: string,
  link: string,
  linkName: string,
  fileUrl: string | null,
}
export default function Techs() {
  const [activeForm, setActiveForm] = useState<boolean>(false);

  const form = useForm<TFormFields>({
    defaultValues: {
      id: null,
      name: "",
      link: "",
      linkName: "",
      fileUrl: null
    }
  });

  const { register, handleSubmit, control } = form;
  const { errors, } = form.formState;
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [techs, setTechs] = useState<TechEntity[]>([]);

  const handleTechs = async () => {
    const response = await fetch('/api/tech');
    const result = await response.json();

    setTechs(result);
  }

  useEffect(() => {
    handleTechs();
  }, [])

  const onSubmit = async (data: TFormFields): Promise<void> => {
    if (!data.fileUrl) return;

    setSaveLoading(true);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("linkName", data.linkName);
    formData.append("linkKey", data.link);

    const file = await fetch(data.fileUrl).then(res => res.blob());

    formData.append("file", file);
    

    if (data.id) {
      const response = await fetch(`/api/tech/${data.id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.status !== 200) {
        setSaveLoading(false);
        return alert("Erro ao cadastrar tech");
      }

      const result: TechEntity = await response.json();

      const newTechs = [...techs].filter(({ id }) => id !== data.id);

      newTechs.unshift(result)

      setTechs(newTechs);

      setSaveLoading(false);
      setActiveForm(false);

      return;
    }

    const response = await fetch('/api/tech', {
      method: "POST",
      body: formData,
    });

    if (response.status !== 200) {
      setSaveLoading(false);
      return alert("Erro ao cadastrar tech");
    }

    const result: TechEntity = await response.json();

    const newTechs = techs;
    newTechs.unshift(result);

    setTechs(newTechs);

    setSaveLoading(false);
    setActiveForm(false);
  }

  useEffect(() => {
    const linkName = form.watch("link")
      .replaceAll("http://", "")
      .replaceAll("https://", "")
      .replaceAll("www.", "")
      .split("/")[0]
    ;
    form.setValue("linkName", linkName);
  }, [form.watch("link")])

  const onCreateTech = () => {
    form.reset({
      id: null,
      name: "",
      link: "",
      linkName: "", 
      fileUrl: null,
    });

    setActiveForm(true);
  }

  const onEditTech = async (tech: TechEntity) => {
    form.reset({
      id: tech.id,
      name: tech.name,
      link: tech.link.key,
      linkName: tech.link.name,
      fileUrl: tech.file ? tech.file.key : null
    });

    setActiveForm(true);
  }

  const onDelete = async () => {
    const id = form.watch("id");

    if (!id?.length) return;

    setDeleteLoading(true);

    const response = await fetch(`/api/tech/${id}`, {
      method: "DELETE",
    });

    console.log(response)

    if (response.status !== 200) {
      setDeleteLoading(false);
      return alert("Erro ao cadastrar tech");
    }  

    const newTechs = techs.filter((tech) => tech.id !== id);
    setTechs(newTechs);

    setDeleteLoading(false);
    setActiveForm(false)
  }

  return (
    <DashboardLayout>
      <div style={headerStyle}>
        <TypographyTitle value="TECHS" />

        <PrimaryButton value="+ TECH" onClick={() => onCreateTech()}  />
      </div>

      <List dense sx={{ marginTop: "1rem" }}>
        {techs.map(tech =>
          <DashboardTechCard 
            tech={tech} 
            key={tech.id}
            onClick={onEditTech}
          />
        )}
      </List>

      <Dialog
        open={activeForm}
        onClose={() => setActiveForm(false)}
        onSubmit={handleSubmit((data) => onSubmit(data))}
        PaperProps={{ component: 'form' }}
      >
        <DialogTitle>Tech</DialogTitle>
        <DialogContent>
          <Controller
            control={control}
            name="name"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="Nome"
                type="text"
                fullWidth
                variant="outlined"
                {...register("name", {
                  validate: value => value.length >= 3 || "Campo obrigatório",
                  onChange: () => form.trigger("name")
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
            name="link"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                autoFocus
                required
                margin="dense"
                id="link"
                label="Link"
                type="text"
                fullWidth
                variant="outlined"
                {...register("link", {
                  validate: value => {
                    if (!value.length) return "Campo obrigatório";
                    if (!value.includes("http://") && !value.includes("https://")) return "Link inválido";
                    return true;
                  },
                  onChange: () => form.trigger("link")
                })}
                value={value}
                onChange={onChange}
                error={!!errors.link}
                helperText={errors.link?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="linkName"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                autoFocus
                required
                margin="dense"
                id="linkName"
                label="Nome do link"
                type="text"
                value={value}
                fullWidth
                variant="outlined"
                {...register("linkName", {
                  validate: value => value.length >= 3 || "Campo obrigatório",
                  onChange: () => form.trigger("linkName")
                })}
                onChange={onChange}
                error={!!errors.linkName}
                helperText={errors.linkName?.message}
              />
            )}
          />

          {!form.watch("fileUrl") ? 
            (<Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ marginTop: ".6rem" }}
            >
              <span>SELECIONAR IMAGEM</span>

              <input
                onChange={(e) => {
                  const file = e.target.files?.length ? e.target.files[0] : null;

                  const fileUrl = file ? URL.createObjectURL(file) : null;

                  form.setValue("fileUrl", fileUrl);
                }}
                type="file"
                accept="image/*"
                hidden
              />
            </Button>)
            : (
              <Box 
                sx={{ 
                  height: "160px", 
                  width: "160px", 
                  position: "relative",
                  backgroundColor: "#f1f1f1",
                  marginTop: ".6rem",
                  borderRadius: ".6rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }} 
              >
                <img 
                  src={form.watch("fileUrl") ?? ""} 
                  alt="preview" 
                  style={{ 
                    width: 120, 
                    height: 120, 
                    objectFit: "contain" 
                  }}  
                />

                <Button 
                  sx={{ 
                    position: "absolute", 
                    top: 0, 
                    right: 0,
                  }} 
                  onClick={() => form.setValue("fileUrl", null)}
                > 
                  <Trash size={24} /> 
                </Button>
              </Box>
            )}
        </DialogContent>

        <DialogActions style={{ gap: ".6rem" }}>
          <Button variant="outlined" onClick={() => setActiveForm(false)}>CANCELAR</Button>

          <Button onClick={() => onDelete()} variant="contained">
            {deleteLoading ? "DELETANDO..."  : "DELETAR"}
          </Button>

          <Button variant="contained" type="submit">
            {saveLoading ? "CARREGANDO..." : form.watch("id")?.length ? "ALTERAR" : "CADASTRAR"}
          </Button>
        </DialogActions>
        
        <DevTool control={control} />
      </Dialog>
    </DashboardLayout>
  )
}