import TypographyTitle from "@/components/typography/title";
import FormPrimary from "@/components/form/primary";
import { DialogActions, TextField } from "@mui/material";
import ButtonOutlined from "@/components/button/outlined";
import ButtonContained from "@/components/button/contained";
import { Controller } from "react-hook-form";
import { 
  TPageDashboardWorkingTimeWorkspaceEditProps, 
  usePageDashboardWorkingTimeWorkspaceEdit 
} from "@/hooks/pages/dashboard/working-timer/workspace/edit/usePageDashboardWorkingTimerWorkspaceEdit";

export default function PageDashboardWorkingTimerWorkspaceEdit(props: TPageDashboardWorkingTimeWorkspaceEditProps): JSX.Element {
  const { 
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
  } = usePageDashboardWorkingTimeWorkspaceEdit(props);

  if (workspaceLoading) {
    return (      
      <div style={headerStyle}>
        <TypographyTitle>Carregando...</TypographyTitle>
      </div>
    )
  }

  if (!workspace) {
    return (      
      <div style={headerStyle}>
        <TypographyTitle>Working Timer não encontrado</TypographyTitle>

        <nav style={navStyle}>
          <ButtonContained onClick={onBackToWorkpaces}>BACK</ButtonContained>
        </nav>      </div>
    )
  }

  return (
    <>
      <div style={headerStyle}>
        <TypographyTitle>Working Timer: {workspace.name}</TypographyTitle>
      </div>

      <FormPrimary  style={containerStyle} control={control} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ flex: 1 }}>
              <Controller
                  control={control}
                  name="name"
                  render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { error },
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
                  name="priceByHour"
                  render={({
                  field: { onChange, value },
                  fieldState: { error },
                  }) => (
                  <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="priceByHour"
                      label="Preço por hora"
                      type="number"
                      fullWidth
                      variant="outlined"
                      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                      {...register("priceByHour", { onChange: () => form.trigger("priceByHour") })}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error?.message}
                  />
                  )}
              />
          </div>


          <DialogActions style={dialogActionsStyle}>
              <ButtonOutlined onClick={onBackToWorkpaces}>
                  {backLoading ? "LOADING..." : "BACK"}
              </ButtonOutlined>

              <ButtonContained type="submit">
                  {submitLoading ? "LOADING..." : "CHANGE"}
              </ButtonContained>
          </DialogActions>
      </FormPrimary>
    </>
  )
}