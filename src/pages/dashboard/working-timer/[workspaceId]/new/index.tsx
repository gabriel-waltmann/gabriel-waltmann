import ButtonContained from "@/components/button/contained";
import ButtonOutlined from "@/components/button/outlined";
import FormPrimary from "@/components/form/primary";
import TypographyTitle from "@/components/typography/title";
import { 
  TPageDashboardWorkingTimerWorkspaceTimerNewProps, 
  usePageDashboardWorkingTimerWorkspaceTimerNew 
} from "@/hooks/pages/dashboard/working-timer/workspace/timer/usePageDashboardWorkingTimerWorkspaceTimerNew";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function PageDashboardWorkingTimerWorkspaceTimerNew(props: TPageDashboardWorkingTimerWorkspaceTimerNewProps): JSX.Element {
  const {
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
    register,
    handleSubmit,
    control,
    validateDate,
    validateTime,
    
    // * styles
    headerStyle,
    navStyle,
    containerStyle,
  } = usePageDashboardWorkingTimerWorkspaceTimerNew(props);

  return (
    <>
      <div style={headerStyle}>
        <TypographyTitle>Working Timer New</TypographyTitle>
      </div>

      <FormPrimary style={containerStyle} control={control} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ flex: 1 }}>
            <Controller
              control={control}
              name="startDate"
              render={({
              field: { onChange, value },
              fieldState: { error },
              }) => (
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="startDate"
                  label="Start date"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("startDate", {
                    validate: validateDate,
                    onChange: onChangeStartDate,
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
              name="startTime"
              render={({
              field: { onChange, value },
              fieldState: { error },
              }) => (
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="startTime"
                  label="Start Time"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("startTime", {
                    validate: validateTime,
                    onChange: onChangeStartTime,
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
              name="endDate"
              render={({
              field: { onChange, value },
              fieldState: { error },
              }) => (
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="endDate"
                  label="End Date"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("endDate", {
                    validate: validateDate,
                    onChange: onChangeEndDate,
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
              name="endTime"
              render={({
              field: { onChange, value },
              fieldState: { error },
              }) => (
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="endTime"
                  label="End Time"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("endTime", {
                    validate: validateTime,
                    onChange: onChangeEndTime,
                  })}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </div>

          <nav style={navStyle}>
            <ButtonOutlined onClick={onBackToWorkpace}>{
              backLoading ? "LOADING..." : "BACK"
            }</ButtonOutlined>

            <ButtonContained type="submit">{
              submitLoading ? "LOADING..." : "CREATE"
            }</ButtonContained>

            <ButtonContained onClick={onStartInstant}>{
              instantLoading ? "LOADING..." : "START NOW"
            }</ButtonContained>
          </nav>
      </FormPrimary>
    </>
  )
}