import { TAuthRegisterDTO } from "@/types/auth/TAuthRegister";
import * as yup from "yup";

export const AuthRegisterSchema: yup.ObjectSchema<TAuthRegisterDTO> = yup.object({
  name: yup.string().required("Obrigatório.").min(3, "Minḿo de 3 caracteres."),

  email: yup.string().email("E-mail inválido.").required("Obrigatório.").trim().lowercase(),

  password: yup.string().required("Obrigatório").min(6, "Minímo de 6 caracteres."),

  passwordConfirm: yup.string().required("Obrigatório.").min(6, "Minímo de 6 caracteres").oneOf([yup.ref("password")], "Senhas devem ser iguais.")
});

