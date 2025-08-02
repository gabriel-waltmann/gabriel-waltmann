import { yupResolver } from "@hookform/resolvers/yup";
import { AuthRegisterSchema } from "@/schemas/auth/authRegisterSchema";
import { TAuthRegisterDTO } from "@/types/auth/TAuthRegister";
import { useForm, UseFormReturn } from "react-hook-form";

export const useAuthRegisterForm = (): UseFormReturn<TAuthRegisterDTO> => {
  return useForm<TAuthRegisterDTO>({
    resolver: yupResolver(AuthRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
}