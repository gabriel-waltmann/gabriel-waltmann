import { yupResolver } from "@hookform/resolvers/yup";
import { AuthRegisterSchema } from "@/schemas/auth/authRegisterSchema";
import { useForm, UseFormReturn } from "react-hook-form";
import { AuthRegisterDTO } from "@/controller/auth/AuthController";

export const useAuthRegisterForm = (): UseFormReturn<AuthRegisterDTO> => {
  return useForm<AuthRegisterDTO>({
    resolver: yupResolver(AuthRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
}