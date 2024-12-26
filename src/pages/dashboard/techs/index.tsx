import PrimaryButton from "@/components/buttons/primary-button"
import TypographyTitle from "@/components/typography/title"
import DashboardLayout from "@/layouts/dashboard"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { CSSProperties, useEffect, useState } from "react"
import { DevTool } from "@hookform/devtools"
import { Trash } from "@phosphor-icons/react"

const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
}
type TFormFields = {
  name: string,
  link: string,
  linkName: string,
  file: File | null
}
export default function Techs() {
  const [activeForm, setActiveForm] = useState<boolean>(false);

  const form = useForm<TFormFields>({
    defaultValues: {
      name: "",
      link: "",
      linkName: "",
      file: null
    }
  });

  const { register, handleSubmit, control } = form;
  const { errors, } = form.formState;
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onSubmit = (data: TFormFields) => {
    console.log(data);
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

  useEffect(() => {
    const file = form.watch("file");

    // convert file to blob url
    const imageUrl = file ? window.URL.createObjectURL(file) : null;

    setImageUrl(imageUrl);
  }, [form.watch("file")])

  const handleFormData = () => {
    form.reset();

    setActiveForm(true);

    form.setFocus("name");
  }

  return (
    <DashboardLayout>
      <div style={style}>
        <TypographyTitle value="TECHS" />

        <PrimaryButton value="+ TECH" onClick={() => handleFormData()}  />
      </div>

      <Dialog
        open={activeForm}
        onClose={() => setActiveForm(false)}
        onSubmit={handleSubmit((data) => onSubmit(data))}
        PaperProps={{ component: 'form' }}
      >
        <DialogTitle>Cadastrar tech</DialogTitle>
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

          {!imageUrl ? 
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

                  form.setValue("file", file);
                }}
                type="file"
                accept="image/*"
                hidden
              />
            </Button>)
            : (
              <Box 
                sx={{ 
                  height: "300px", 
                  position: "relative",
                  backgroundColor: "#f1f1f1",
                  marginTop: ".6rem",
                  borderRadius: ".6rem",
                }} 
              >
                <img 
                  src={imageUrl} 
                  alt="preview" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain" 
                  }}  
                />

                <Button 
                  sx={{ 
                    position: "absolute", 
                    top: "1rem", 
                    right: "1rem" 
                  }} 
                  onClick={() => form.setValue("file", null)}
                > 
                  <Trash size={24} /> 
                </Button>
              </Box>
            )}
        </DialogContent>

        <DialogActions style={{ gap: ".6rem" }}>
          <Button variant="outlined" onClick={() => setActiveForm(false)}>CANCELAR</Button>

          <Button variant="contained" type="submit">CADASTRAR</Button>
        </DialogActions>
        
        <DevTool control={control} />
      </Dialog>
    </DashboardLayout>
  )
}