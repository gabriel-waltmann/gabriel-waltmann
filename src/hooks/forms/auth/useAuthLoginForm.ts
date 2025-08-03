import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";
import { TAuthLoginDTO } from "@/types/auth/TAuthLogin";
import { AuthLoginSchema } from "@/schemas/auth/authLoginSchema";

export const useAuthLoginForm = (): UseFormReturn<TAuthLoginDTO> => {
  return useForm<TAuthLoginDTO>({
    resolver: yupResolver(AuthLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
}