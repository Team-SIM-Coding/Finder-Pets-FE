interface CustomFetchOptions extends RequestInit {
  errorMessage?: string;
  isMultipart?: boolean;
}

export const customRequest = async (
  url: string,
  token?: string,
  options: CustomFetchOptions = {},
) => {
  const { errorMessage = "API 요청 실패", isMultipart, ...rest } = options;

  const headers: Record<string, string> = {
    ...((rest.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const fetchOptions: RequestInit = {
    ...rest,
    headers: isMultipart
      ? { "Content-Type": "multipart/form-data", ...headers }
      : { "Content-Type": "application/json", ...headers },
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorMessage || errorResponse.message || "API 요청 실패");
  }

  return await response.json();
};
