import ButtonContained from "@/components/button/contained";
import TypographyTitle from "@/components/typography/title";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Trash } from "@phosphor-icons/react";
import TableTech from "@/components/table/tech";
import { TPageDashboardTechProps, usePageDashboardTech } from "@/hooks/pages/dashboard/tech/usePageDashboardTech";
import FormPrimary from "@/components/form/primary";
import ButtonFile from "@/components/button/file";

export default function PageDashboardTech(props: TPageDashboardTechProps) {
  const { 
    headerStyle,
    tableStyle,
    dialogStyle,
    dialogActionsStyle,
    techDialog,
    fullScreen,
    techs,
    control,
    handleSubmit,
    formTechActions,
    formTechStates,
    register,
    form,
    errors,
  } = usePageDashboardTech(props);

  return (
    <>
      <div style={headerStyle}>
        <TypographyTitle value="Techs" />

        <ButtonContained value="+ Tech" onClick={formTechActions.showCreateTechForm} />
      </div>

      <TableTech style={tableStyle} techs={techs} onTechClick={formTechActions.showUpdateTechForm} />

      <Dialog open={techDialog} fullScreen={fullScreen}>
        <DialogContent sx={dialogStyle}>        
          <FormPrimary control={control} onSubmit={handleSubmit(formTechActions.onTechSubmit)}>
            <div style={{ flex: 1 }}>

              <Controller
                control={control}
                name="name"
                render={({
                  field: { onChange, value },
                  fieldState: {  error },
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
                      validate: (value) => value.length >= 3 || "Campo obrigatório",
                      onChange: () => form.trigger("name"),
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
                  field: { onChange, value },
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
                      validate: (value) => {
                        if (!value.length) return "Campo obrigatório";
                        if (
                          !value.includes("http://") &&
                          !value.includes("https://")
                        )
                          return "Link inválido";
                        return true;
                      },
                      onChange: () => form.trigger("link"),
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
                  field: { onChange, value },
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
                      validate: (value) => value.length >= 3 || "Campo obrigatório",
                      onChange: () => form.trigger("linkName"),
                    })}
                    onChange={onChange}
                    error={!!errors.linkName}
                    helperText={errors.linkName?.message}
                  />
                )}
              />

              {!form.watch("fileUrl") ? (
                <ButtonFile
                  label="SELECIONAR IMAGEM"
                  style={{ marginTop: ".6rem", maxHeight: "32px" }}
                  onChange={(e) => {
                    const file = e.target.files?.length
                      ? e.target.files[0]
                      : null;

                    const fileUrl = file ? URL.createObjectURL(file) : null;

                    form.setValue("fileUrl", fileUrl);
                  }}
                />
              ) : (
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
                    alignItems: "center",
                  }}
                >
                  <img
                    src={form.watch("fileUrl") ?? ""}
                    alt="preview"
                    style={{
                      width: 120,
                      height: 120,
                      objectFit: "contain",
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
            </div>

            <DialogActions style={dialogActionsStyle}>
              <Button variant="outlined" onClick={formTechActions.hideTechForm}>
                CANCELAR
              </Button>

              {form.watch("id") && (
                <Button onClick={formTechActions.onTechDelete} variant="contained">
                  {formTechStates.techDeleteLoading ? "DELETING..." : "DELETE"}
                </Button>
              )}
              <Button variant="contained" type="submit">
                {formTechStates.techSubmitLoading
                  ? "LOADING..."
                  : form.watch("id")?.length
                  ? "CHANGE"
                  : "CREATE"}
              </Button>
            </DialogActions>
          </FormPrimary>
        </DialogContent>
      </Dialog>
    </>
  );
}
