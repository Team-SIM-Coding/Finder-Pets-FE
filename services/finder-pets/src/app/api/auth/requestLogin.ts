import { LogInFormData } from "@/utils/validation/auth";
import { customRequest } from "../customRequest";

export const requestLogin = async (data: LogInFormData) => {
  return await customRequest(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/login`, undefined, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
