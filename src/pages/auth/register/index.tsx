import FormPrimary from "@/components/form/primary";
import { usePageAuthRegister } from "@/hooks/pages/auth/register/usePageAuthRegister";
import { Button, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function PageDashboardRegister() {
  const props = usePageAuthRegister();

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <FormPrimary 
        control={props.formControl}
        style={{ flex: 1, paddingLeft: "16px", paddingRight: "16px", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "32px" }} 
      >
        <div>
          <Controller
            control={props.formControl}
            name="name"
            render={({ field, formState }) => (
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="Nome"
                type="text"
                fullWidth
                variant="outlined"
                  value={field.value}
                  onChange={field.onChange}
                  error={!!formState.errors.name}
                  helperText={formState.errors.name?.message ?? null}
              />
            )}
          />

          <Controller
            control={props.formControl}
            name="email"
            render={({ field, formState }) => (
              <TextField
                autoFocus
                required
                margin="dense"
                id="email"
                label="E-mail"
                type="email"
                fullWidth
                variant="outlined"
                  value={field.value}
                  onChange={field.onChange}
                  error={!!formState.errors.email}
                  helperText={formState.errors.email?.message ?? null}
              />
            )}
          />

          <Controller
            control={props.formControl}
            name="password"
            render={({ field, formState }) => (
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="Senha"
                type="password"
                fullWidth
                variant="outlined"
                value={field.value}
                onChange={field.onChange}
                error={!!formState.errors.password}
                helperText={formState.errors.password?.message ?? null}
              />
            )}
          />

          <Controller
            control={props.formControl}
            name="passwordConfirm"
            render={({ field, formState }) => (
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="Confirmar senha"
                type="password"
                fullWidth
                variant="outlined"
                value={field.value}
                onChange={field.onChange}
                error={!!formState.errors.passwordConfirm}
                helperText={formState.errors.passwordConfirm?.message ?? null}
              />
            )}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Button variant="outlined" onClick={props.onCancelRegister}>
            CANCELAR
          </Button>

          <Button variant="contained" onClick={props.onSubmit}>
            CADASTRAR
          </Button>
        </div>
      </FormPrimary>   
    </div>
  )
}