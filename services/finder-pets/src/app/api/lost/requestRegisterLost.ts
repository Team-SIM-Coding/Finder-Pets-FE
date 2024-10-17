import { customRequest } from "../customRequest";

export const requestRegisterLost = async (data: FormData, token?: string) => {
  for (const pair of data.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
  return await customRequest(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/post/lost/register`,
    token,
    {
      method: "POST",
      body: data,
      isMultipart: true,
    },
  );
};
