import * as auth from "@/middlewheres/auth/auth";
import { useEffect } from "react";
import { useAuthRegisterForm } from "@/hooks/forms/auth/useAuthRegisterForm";
import { Control } from "react-hook-form";
import { TAuthRegisterDTO } from "@/types/auth/TAuthRegister";
import { useRouter } from "next/router";

export type TPageAuthRegisterProps = Readonly<{
    formControl: Control<TAuthRegisterDTO>,
    onSubmit: () => Promise<void>,
    onCancelRegister: () => Promise<void>,
}>

export function usePageAuthRegister(): TPageAuthRegisterProps {
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
  
  
    return {
        formControl: form.control,
        onSubmit,
        onCancelRegister
    }
}