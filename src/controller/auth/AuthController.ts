import { api } from "@/api/api";

export interface AuthRegisterDTO {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
}

export interface AuthLoginDTO {
  email: string,
  password: string,
}

export interface AuthLoginResponse {
  token: string
}
export class AuthController {
  public async register(params: AuthRegisterDTO): Promise<void> {
    const { data, status } = await api.post("/auth/register", params);

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }
  }

  public async login(params: AuthLoginDTO): Promise<AuthLoginResponse> {
    const { data, status } = await api.post("/auth/login", params)

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }
}