import { RegisterFormData } from "@/utils/validation/auth";

export const requestRegister = async (data: RegisterFormData) => {
  const { confirmPassword, ...requestBody } = data;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    return errorResponse;
  }

  return await response.json();
};
