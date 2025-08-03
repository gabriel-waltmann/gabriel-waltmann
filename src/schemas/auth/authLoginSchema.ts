import { TAuthLoginDTO } from "@/types/auth/TAuthLogin";
import * as yup from "yup";

export const AuthLoginSchema: yup.ObjectSchema<TAuthLoginDTO> = yup.object({
  email: yup.string().email("E-mail inválido.").required("Obrigatório.").trim().lowercase(),

  password: yup.string().required("Obrigatório").min(6, "Minímo de 6 caracteres."),
});

