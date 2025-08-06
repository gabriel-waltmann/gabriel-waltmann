import { useEffect } from "react";
import { useAuthRegisterForm } from "@/hooks/forms/auth/useAuthRegisterForm";
import { Control } from "react-hook-form";
import { useRouter } from "next/router";
import { AuthController, AuthRegisterDTO } from "@/controller/auth/AuthController";
import { api, updateApiAuth } from "@/api/api";

export type TPageAuthRegisterProps = Readonly<{
    formControl: Control<AuthRegisterDTO>,
    onSubmit: () => Promise<void>,
    onCancelRegister: () => Promise<void>,
}>

export function usePageAuthRegister(): TPageAuthRegisterProps {
    const form = useAuthRegisterForm();

    const router = useRouter();

    const authController = new AuthController();
  
    const onSubmit = async () => {
      const valid = await form.trigger();
  
      if (!valid) return;
  
      const params = form.getValues();
  
      try {
        await authController.register(params);
  
        const login = await authController.login(params);
    
        localStorage.setItem("sessionToken", login.token);
  
        updateApiAuth(login.token)
        
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
  
  
    return {
        formControl: form.control,
        onSubmit,
        onCancelRegister
    }
}