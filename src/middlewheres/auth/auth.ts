import { TAuthLoginDTO, TAuthLoginResponse } from "@/types/auth/TAuthLogin";
import { TAuthRegisterDTO } from "@/types/auth/TAuthRegister";

export const register = async (params: TAuthRegisterDTO) => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name: params.name,
      email: params.email,
      password: params.password,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("POST /api/auth/register")
  }

  return await response.json();
}

export const login = async (params: TAuthLoginDTO): Promise<TAuthLoginResponse> => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("POST /api/auth/register")
  }

  return await response.json();
}