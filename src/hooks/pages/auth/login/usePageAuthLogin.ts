import { useEffect } from "react";
import { Control } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuthLoginForm } from "@/hooks/forms/auth/useAuthLoginForm";
import { AuthController, AuthLoginDTO } from "@/controller/auth/AuthController";
import { api, updateApiAuth } from "@/api/api";

export type TPageAuthLoginProps = Readonly<{
    formControl: Control<AuthLoginDTO>,
    onSubmit: () => Promise<void>,
    onCancelRegister: () => Promise<void>,
}>

export function usePageAuthLogin(): TPageAuthLoginProps {
    const form = useAuthLoginForm();

    const router = useRouter();

    const authController = new AuthController();
  
    const onSubmit = async () => {
      const valid = await form.trigger();
      
      if (!valid) return;
  
      const params = form.getValues();
  
      try {  
        const login = await authController.login(params);
    
        localStorage.setItem("sessionToken", login.token);

        updateApiAuth(login.token)
  
        router.push("/dashboard")
      } catch {      
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
  
  
    return {
        formControl: form.control,
        onSubmit,
        onCancelRegister
    }
}