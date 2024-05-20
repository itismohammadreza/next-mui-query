import { httpService } from "@services/api/httpService";
import { redirect } from "next/navigation";
import { useUser } from "@hooks/useUser";

const endpoint = "auth";

const hasPermission = (input: string[] | string) => {
  if (!input || !input.length) {
    return true
  }
  const {permissions} = useUser();
  if (Array.isArray(input)) {
    return permissions.some(p => input.includes(p))
  }
  return permissions.includes(input)
}

const login = (data: any) => {
  return httpService.post<any>(`${endpoint}/login`, data);
}

const register = (data: any) => {
  return httpService.post(`${endpoint}/register`, data);
}

const logout = () => {
  localStorage.removeItem('token');
  redirect('/auth/login')
}

export const authService = {
  hasPermission,
  login,
  register,
  logout,
}
