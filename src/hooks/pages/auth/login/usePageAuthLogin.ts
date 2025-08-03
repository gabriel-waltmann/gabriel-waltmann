import * as auth from "@/middlewheres/auth/auth";
import { useEffect } from "react";
import { Control } from "react-hook-form";
import { useRouter } from "next/router";
import { TAuthLoginDTO } from "@/types/auth/TAuthLogin";
import { useAuthLoginForm } from "@/hooks/forms/auth/useAuthLoginForm";

export type TPageAuthLoginProps = Readonly<{
    formControl: Control<TAuthLoginDTO>,
    onSubmit: () => Promise<void>,
    onCancelRegister: () => Promise<void>,
}>

export function usePageAuthLogin(): TPageAuthLoginProps {
    const form = useAuthLoginForm();

    const router = useRouter();
  
    const onSubmit = async () => {
      const valid = await form.trigger();

      console.log({ valid, validate: !valid })
      
      if (!valid) return;
  
      const params = form.getValues();

      console.log({ params })
  
      try {  
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
  
  
    return {
        formControl: form.control,
        onSubmit,
        onCancelRegister
    }
}