import { Controller } from "react-hook-form";
import {
  TextField,
} from "@mui/material";
import { TFormProjectTabGeneralProps } from "@/hooks/components/form/project/tabs/general/useFormProjectTabGeneral";

export default function FormProjectTabGeneral(props: TFormProjectTabGeneralProps): JSX.Element {
  const { control, form, register } = (props);

  return (
    <div style={{ flex: 1 }}>
      <Controller
        control={control}
        name="title"
        render={({
          field: { onChange, value },
          fieldState: { error },
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
              validate: (value) =>
                value.length >= 3 || "Campo obrigatório",
              onChange: () => form.trigger("title"),
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
          field: { onChange, value },
          fieldState: { error },
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
              validate: (value) => {
                if (value.length < 20)
                  return "Campo requer mínimo de 20 caracteres";
                return true;
              },
              onChange: () => form.trigger("description"),
            })}
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    </div>
  )
}