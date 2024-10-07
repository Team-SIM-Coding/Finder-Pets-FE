import { customRequest } from "../customRequest";

export const requestRegisterLost = async (data: FormData, token?: string) => {
  return await customRequest(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/lost`, token, {
    method: "POST",
    body: JSON.stringify(data),
    isMultipart: true,
  });
};
