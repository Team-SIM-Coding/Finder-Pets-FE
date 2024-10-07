interface CustomFetchOptions extends RequestInit {
  errorMessage?: string;
}

export const customRequest = async (
  url: string,
  token?: string,
  options: CustomFetchOptions = {},
) => {
  const { errorMessage = "API 요청 실패", ...rest } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((rest.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers["Authorization"] = `bearer ${token}`;
  }

  const fetchOptions: RequestInit = {
    ...rest,
    headers,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorMessage || errorResponse.message || "API 요청 실패");
  }

  return await response.json();
};
