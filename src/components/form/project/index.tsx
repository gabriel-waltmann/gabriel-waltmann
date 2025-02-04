import { TFormProjectProps, useFormProject } from "@/hooks/components/form/project/useFormProject";
import FormPrimary from "@/components/form/primary";
import {
  Button,
  DialogActions,
  Tab,
  Tabs,
} from "@mui/material";
import ButtonContained from "@/components/button/contained";
import FormProjectTabGeneral from "./tabs/general";
import FormProjectTabFile from "./tabs/file";
import FormProjectTabTech from "./tabs/tech";
import { FormProjectTabEnum } from "@/entities/components/form/project/FormProjectTabEnum";

export default function FormProject(props: TFormProjectProps): JSX.Element {
  const { 
    control,
    tab,
    handleChangeTab,
    form,
    a11yProps,
    register,
    errors,
    handleSubmit,
    techAlreadyExists,
    dialogActionsStyle,
    divStyle,
    states,
    actions,
   } = useFormProject(props);

  return (
    <FormPrimary control={control} onSubmit={handleSubmit(actions.onProjectSubmit)}>
      <Tabs
        value={tab}
        onChange={handleChangeTab}
        aria-label="Project tabs"
      >
        <Tab label="General" {...a11yProps(FormProjectTabEnum.General)} />
        <Tab
          label="Files"
          disabled={!form.watch("id")}
          {...a11yProps(FormProjectTabEnum.Files)}
        />
        <Tab
          label="Techs"
          disabled={!form.watch("id")}
          {...a11yProps(FormProjectTabEnum.Techs)}
        />
      </Tabs>

      <div style={divStyle}>
        {tab === FormProjectTabEnum.General && (
          <FormProjectTabGeneral 
            control={control}
            errors={errors}
            register={register}
            form={form}
          />
        )}

        {tab === FormProjectTabEnum.Files && (
          <FormProjectTabFile 
            states={states}
            actions={actions}
          />
        )}

        {tab === FormProjectTabEnum.Techs && (
          <FormProjectTabTech 
            techAlreadyExists={techAlreadyExists}
            states={states}
            actions={actions}
          />
        )}

        <DialogActions style={dialogActionsStyle}>
          {states.project.id && (
            <ButtonContained onClick={actions.onProjectDelete}>
              {states.projectDeleteLoading ? "DELETING..." : "DELETE"}
            </ButtonContained>
          )}

          <Button variant="outlined" onClick={actions.hideProjectForm}>
            CANCELAR
          </Button>

          <Button variant="contained" type="submit">
            {states.projectSubmitLoading && "LOADING..." }

            {!!(!states.projectSubmitLoading && states.project.id) && "CHANGE"}
            
            {!!(!states.projectSubmitLoading && !states.project.id) && "CREATE"}
          </Button>
        </DialogActions>
      </div>
  </FormPrimary>
  )
}