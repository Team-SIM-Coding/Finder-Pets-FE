import { customRequest } from "../customRequest"

export const requestFetchAccessTokenWithRefreshToken = async (
  refreshToken: string
) => {
  return await customRequest(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/re-issue`,
    refreshToken,
    {
      method: "PUT",
      errorMessage: "토큰 갱신 에러",
    }
  )
}
