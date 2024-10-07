import { LogInFormData } from "@/utils/validation/auth";

export const fetchLogin = async (data: LogInFormData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    return errorResponse;
  }

  return await response.json();
};
