import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";
import { AuthLoginSchema } from "@/schemas/auth/authLoginSchema";
import { AuthLoginDTO } from "@/controller/auth/AuthController";

export const useAuthLoginForm = (): UseFormReturn<AuthLoginDTO> => {
  return useForm<AuthLoginDTO>({
    resolver: yupResolver(AuthLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
}