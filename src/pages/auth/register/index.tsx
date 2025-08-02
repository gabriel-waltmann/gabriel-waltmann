import FormPrimary from "@/components/form/primary";
import { useAuthRegisterForm } from "@/hooks/forms/auth/useAuthRegisterForm";
import { TPageDashboardRegisterProps } from "@/hooks/pages/auth/register/usePageDashboardRegister";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Controller } from "react-hook-form";
import * as auth from "@/middlewheres/auth/auth";
import { useEffect } from "react";

export default function PageDashboardRegister(props: TPageDashboardRegisterProps) {
  const form = useAuthRegisterForm();

  const router = useRouter();

  const onSubmit = async () => {
    const valid = await form.trigger();

    if (!valid) return;

    const params = form.getValues();

    try {
      await auth.register(params);

      const login = await auth.login(params);

      console.log({ login })

      localStorage.setItem("sessionToken", login.token);

      router.push("/dashboard")
    } catch (error) {
      console.error(error)
    }
  }

  const onCancelRegister = async () => {
    await router.push("/dashboard")
  }

  const onStart = () => {
    const token = localStorage.getItem("sessionToken");

    if (token) {
      router.push("/dashboard")
    }
  }

  useEffect(() => {
    onStart();
  }, [])

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <FormPrimary 
        control={form.control}
        style={{ flex: 1, paddingLeft: "16px", paddingRight: "16px", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "32px" }} 
        onSubmit={onSubmit}
      >
        <div>
          <Controller
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
          <Button variant="outlined" onClick={onCancelRegister}>
            CANCELAR
          </Button>

          <Button variant="contained" onClick={onSubmit}>
            CADASTRAR
          </Button>
        </div>
      </FormPrimary>   
    </div>
  )
}