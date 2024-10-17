import { customRequest } from "../customRequest";

export const requestCheckId = async (email: string) => {
  return await customRequest(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/check-id?email=${email}`);
};
