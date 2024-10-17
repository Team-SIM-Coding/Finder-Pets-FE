import { RegisterFormData } from "@/utils/validation/auth";
import { customRequest } from "../customRequest";

export const requestRegister = async (data: RegisterFormData) => {
  const { confirmPassword, ...requestBody } = data;

  return await customRequest(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/register`, undefined, {
    method: "POST",
    body: JSON.stringify(requestBody),
  });
};
