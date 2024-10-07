const ACCESS_TOKEN_KEY = "accessToken"
const REFRESH_TOKEN_KEY = "refreshToken"

export const setLocalToken = (token: string) => {
  return localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getLocalToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const removeLocalToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export const setRefreshLocalToken = (token: string) => {
  return localStorage.setItem(REFRESH_TOKEN_KEY, token)
}

export const getRefreshLocalToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export const removeRefreshLocalToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}
